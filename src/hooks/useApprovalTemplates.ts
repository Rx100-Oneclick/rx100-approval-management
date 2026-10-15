import { useState, useEffect, useCallback } from 'react';
import { useXOAuth } from '@xoos/microapp-adapter';
import { useApprovalAuthorityDataClient } from '@/microapp/runtime';

export interface ApprovalTemplateRow {
  template_id: string;
  approval_template_name: string;
  approval_type: string;
  description: string;
  created_by: string;
  created_at: string | null;
  updated_at: string | null;
  tenant_id: string;
  version_number: string | null;
  version_status: string | null;
  creator_name: string | null;
  creator_email: string | null;
}

function readList(response: unknown, key: string): unknown[] {
  if (Array.isArray(response)) return response;
  if (!response || typeof response !== 'object') return [];
  const record = response as Record<string, unknown>;
  if (Array.isArray(record.data)) return record.data;
  if (Array.isArray(record[key])) return record[key] as unknown[];
  if (Array.isArray(record.items)) return record.items;
  return [];
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === 'object'
    ? (value as Record<string, unknown>)
    : null;
}

function readString(record: Record<string, unknown> | null, ...keys: string[]): string | null {
  if (!record) return null;
  for (const key of keys) {
    const value = record[key];
    if (typeof value === 'string' && value.trim()) return value.trim();
  }
  return null;
}

export function useApprovalTemplates(tenantId: string | null) {
  const { client, error: clientError } = useApprovalAuthorityDataClient();
  const xoAuth = useXOAuth();
  const [data, setData] = useState<ApprovalTemplateRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    if (!tenantId || !client) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const { data: templates, error: tErr } = await client
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
      const { data: versions, error: vErr } = await client
        .from('approval_template_versions')
        .select('*')
        .in('template_id', templateIds)
        .order('version_number', { ascending: false });

      if (vErr) throw vErr;

      const versionMap = new Map<string, { version_number: string; status: string }>();
      for (const v of versions || []) {
        if (!versionMap.has(v.template_id)) {
          versionMap.set(v.template_id, {
            version_number: v.version_number,
            status: v.status,
          });
        }
      }

      const memberResponse = await xoAuth.organizationMembers.list();
      const memberMap = new Map<string, { full_name: string; email: string }>();
      for (const value of readList(memberResponse, 'organizationMembers')) {
        const member = asRecord(value);
        const userId = readString(member, 'user_id', 'userId', 'id', 'uuid', 'member_id', 'memberId');
        if (!userId) continue;
        memberMap.set(userId, {
          full_name:
            readString(member, 'full_name', 'fullName', 'name', 'display_name', 'displayName') || '—',
          email: readString(member, 'email') || '',
        });
      }

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
  }, [client, tenantId, xoAuth]);

  useEffect(() => {
    if (clientError) {
      setError(clientError.message);
      setIsLoading(false);
      return;
    }

    void fetchData();
  }, [clientError, fetchData]);

  return { data, isLoading, error, refetch: fetchData };
}
