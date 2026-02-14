import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface AuthState {
  tenantId: string | null;
  userId: string | null;
  email: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export function useAuthFromParent(): AuthState {
  const [authState, setAuthState] = useState<AuthState>({
    tenantId: null,
    userId: null,
    email: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get('access_token');
    const refreshToken = params.get('refresh_token');
    const userId = params.get('user_id');
    const email = params.get('email');
    const tenantId = params.get('tenant_id');

    const setSession = async (access: string, refresh: string) => {
      try {
        const { error } = await supabase.auth.setSession({
          access_token: access,
          refresh_token: refresh,
        });
        if (error) {
          console.error('Failed to set session:', error.message);
          setAuthState(prev => ({ ...prev, isLoading: false }));
          return;
        }
        setAuthState({
          tenantId: tenantId || params.get('tenant_id'),
          userId: userId || params.get('user_id'),
          email: email || params.get('email'),
          isAuthenticated: true,
          isLoading: false,
        });
      } catch (err) {
        console.error('Auth error:', err);
        setAuthState(prev => ({ ...prev, isLoading: false }));
      }
    };

    if (accessToken && refreshToken) {
      setSession(accessToken, refreshToken);
    } else {
      // No URL params — still store tenant_id if present and wait for postMessage
      if (tenantId) {
        setAuthState(prev => ({ ...prev, tenantId, userId, email }));
      }
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }

    // Listen for backup auth via postMessage
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'AUTH_SESSION') {
        const { access_token, refresh_token } = event.data.payload || {};
        if (access_token && refresh_token) {
          setAuthState(prev => ({ ...prev, isLoading: true }));
          setSession(access_token, refresh_token);
        }
      }
    };

    window.addEventListener('message', handleMessage);

    // Signal readiness to parent
    if (window.parent !== window) {
      window.parent.postMessage({ type: 'IFRAME_READY' }, '*');
    }

    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return authState;
}
