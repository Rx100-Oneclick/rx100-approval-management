import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface ApprovalTemplateRow {
  template_id: string;
  approval_template_name: string;
  approval_type: string;
  description: string;
  created_by: string;
  created_at: string | null;
  updated_at: string | null;
  tenant_id: string;
  // joined fields
  version_number: string | null;
  version_status: string | null;
  creator_name: string | null;
  creator_email: string | null;
}

export function useApprovalTemplates(tenantId: string | null) {
  const [data, setData] = useState<ApprovalTemplateRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!tenantId) {
      setIsLoading(false);
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // 1. Fetch templates
        const { data: templates, error: tErr } = await supabase
          .from('approval_templates')
          .select('*')
          .eq('tenant_id', tenantId);

        if (tErr) throw tErr;
        if (!templates || templates.length === 0) {
          setData([]);
          setIsLoading(false);
          return;
        }

        const templateIds = templates.map(t => t.template_id);

        // 2. Fetch latest versions for each template
        const { data: versions, error: vErr } = await supabase
          .from('approval_template_versions')
          .select('*')
          .in('template_id', templateIds)
          .order('version_number', { ascending: false });

        if (vErr) throw vErr;

        // Build map: template_id -> latest version
        const versionMap = new Map<string, { version_number: string; status: string }>();
        for (const v of versions || []) {
          if (!versionMap.has(v.template_id)) {
            versionMap.set(v.template_id, {
              version_number: v.version_number,
              status: v.status,
            });
          }
        }

        // 3. Fetch creator info from organization_members
        const creatorIds = [...new Set(templates.map(t => t.created_by))];
        const { data: members, error: mErr } = await supabase
          .from('organization_members')
          .select('user_id, full_name, email')
          .in('user_id', creatorIds);

        if (mErr) throw mErr;

        const memberMap = new Map<string, { full_name: string; email: string }>();
        for (const m of members || []) {
          if (m.user_id) {
            memberMap.set(m.user_id, { full_name: m.full_name, email: m.email });
          }
        }

        // 4. Combine
        const combined: ApprovalTemplateRow[] = templates.map(t => {
          const ver = versionMap.get(t.template_id);
          const creator = memberMap.get(t.created_by);
          return {
            template_id: t.template_id,
            approval_template_name: t.approval_template_name,
            approval_type: t.approval_type,
            description: t.description,
            created_by: t.created_by,
            created_at: t.created_at,
            updated_at: t.updated_at,
            tenant_id: t.tenant_id,
            version_number: ver?.version_number ?? null,
            version_status: ver?.status ?? null,
            creator_name: creator?.full_name ?? null,
            creator_email: creator?.email ?? null,
          };
        });

        setData(combined);
      } catch (err: any) {
        console.error('Failed to fetch approval templates:', err);
        setError(err.message || 'Failed to fetch data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [tenantId]);

  return { data, isLoading, error };
}
