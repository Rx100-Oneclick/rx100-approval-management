import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { LoadingSpinner } from './LoadingSpinner';

interface CreateApprovalModalProps {
  open: boolean;
  onClose: (result?: { action: string; template_id?: string }) => void;
  tenantId: string | null;
  userId: string | null;
  email: string | null;
}

const APP_ID = '48d12b0a-ea79-4b65-a534-4a0b69df0f83';

export function CreateApprovalModal({ open, onClose, tenantId, userId, email }: CreateApprovalModalProps) {
  const [targetUrl, setTargetUrl] = useState<string | null>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch target_url from app_registry
  useEffect(() => {
    if (!open) return;
    setLoading(true);
    setIframeLoaded(false);
    setError(null);

    const fetchUrl = async () => {
      try {
        const { data, error: err } = await supabase
          .from('app_registry')
          .select('target_url')
          .eq('app_id', APP_ID)
          .single();

        if (err) throw err;
        if (!data?.target_url) throw new Error('No target URL found for this application.');

        setTargetUrl(data.target_url);
      } catch (err: any) {
        console.error('Failed to fetch app_registry target_url:', err);
        setError(err.message || 'Failed to load application.');
        setLoading(false);
      }
    };

    fetchUrl();
  }, [open]);

  // Build iframe src with auth params
  const buildIframeSrc = useCallback(() => {
    if (!targetUrl) return '';
    const params = new URLSearchParams();

    // Get session tokens
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      return session;
    };

    // We'll build sync URL with available params; tokens added via effect
    const url = new URL(targetUrl);
    if (tenantId) url.searchParams.set('tenant_id', tenantId);
    if (userId) url.searchParams.set('user_id', userId);
    if (email) url.searchParams.set('email', email);
    url.searchParams.set('app_id', APP_ID);
    return url.toString();
  }, [targetUrl, tenantId, userId, email]);

  const [iframeSrc, setIframeSrc] = useState('');

  // Build full iframe URL with session tokens
  useEffect(() => {
    if (!targetUrl || !open) return;

    const buildUrl = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        const url = new URL(targetUrl);
        if (session?.access_token) url.searchParams.set('access_token', session.access_token);
        if (session?.refresh_token) url.searchParams.set('refresh_token', session.refresh_token);
        if (tenantId) url.searchParams.set('tenant_id', tenantId);
        if (userId) url.searchParams.set('user_id', userId);
        if (email) url.searchParams.set('email', email);
        url.searchParams.set('app_id', APP_ID);
        setIframeSrc(url.toString());
      } catch {
        // Fallback without tokens
        setIframeSrc(buildIframeSrc());
      }
    };

    buildUrl();
  }, [targetUrl, open, tenantId, userId, email, buildIframeSrc]);

  // Listen for postMessage from iframe
  useEffect(() => {
    if (!open) return;

    const handleMessage = async (event: MessageEvent) => {
      const { type, action, template_id } = event.data || {};

      // Iframe signals ready - send auth session
      if (type === 'IFRAME_READY') {
        try {
          const { data: { session } } = await supabase.auth.getSession();
          if (session) {
            const iframe = document.getElementById('create-approval-iframe') as HTMLIFrameElement;
            iframe?.contentWindow?.postMessage({
              type: 'AUTH_SESSION',
              payload: {
                access_token: session.access_token,
                refresh_token: session.refresh_token,
              }
            }, '*');
          }
        } catch (err) {
          console.error('Failed to send auth session to iframe:', err);
        }
      }

      // Modal close signals
      if (type === 'MODAL_CLOSE') {
        onClose({ action, template_id });
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [open, onClose]);

  // Handle iframe load
  const handleIframeLoad = () => {
    setIframeLoaded(true);
    setLoading(false);
  };

  if (!open) return null;

  return (
    <>
      {/* Full-page overlay backdrop */}
      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
        {/* Loading state */}
        {(loading || !iframeLoaded) && !error && (
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <LoadingSpinner />
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="bg-white rounded-xl p-8 max-w-md mx-4 shadow-2xl text-center">
              <p className="text-sm text-red-600 mb-4">{error}</p>
              <button
                onClick={() => onClose({ action: 'cancelled' })}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Iframe - full page */}
        {iframeSrc && !error && (
          <iframe
            id="create-approval-iframe"
            src={iframeSrc}
            onLoad={handleIframeLoad}
            className={`w-full h-full border-0 transition-opacity duration-300 ${
              iframeLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            allow="clipboard-write"
          />
        )}
      </div>
    </>
  );
}
