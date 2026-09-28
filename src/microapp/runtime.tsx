import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { XOOSMicroappBridge } from "@xoos/contracts";
import { createXOOSSupabaseClient } from "@xoos/data-client";
import { microappConfig } from "../../microapp.config";
import { supabase as previewSupabase } from "@/integrations/supabase/client";

interface RuntimeValue {
  bridge: XOOSMicroappBridge;
  props: Record<string, unknown>;
  portalRoot: HTMLElement | null;
  navigationTarget: HTMLElement | null;
}

const RuntimeContext = createContext<RuntimeValue | null>(null);

export function BridgeProvider({
  bridge,
  props = {},
  portalRoot = null,
  navigationTarget = null,
  children,
}: {
  bridge: XOOSMicroappBridge;
  props?: Record<string, unknown>;
  portalRoot?: HTMLElement | null;
  navigationTarget?: HTMLElement | null;
  children: ReactNode;
}) {
  return (
    <RuntimeContext.Provider value={{ bridge, props, portalRoot, navigationTarget }}>
      {children}
    </RuntimeContext.Provider>
  );
}

export function useOptionalBridgeRuntime(): RuntimeValue | null {
  return useContext(RuntimeContext);
}

export function usePortalContainer(): HTMLElement | null {
  return useOptionalBridgeRuntime()?.portalRoot ?? null;
}

export function useXoRuntime() {
  const runtime = useOptionalBridgeRuntime();

  return useMemo(() => {
    if (runtime) {
      const runtimeUser = runtime.bridge.context.user as typeof runtime.bridge.context.user & {
        email?: string | null;
      };

      return {
        bridge: runtime.bridge,
        props: runtime.props,
        userId: runtime.bridge.context.user.id,
        email:
          runtimeUser.email ??
          (typeof runtime.props.email === "string" ? runtime.props.email : ""),
        tenantId: runtime.bridge.context.tenant.id,
        clientId: runtime.bridge.context.client.id,
        scopes: runtime.bridge.context.scopes,
        hasScope: (scope: string) => runtime.bridge.context.scopes.includes(scope),
        navigationTarget: runtime.navigationTarget,
        navigationTarget: runtime.navigationTarget,
        isRuntimeHosted: true,
      };
    }

    return {
      bridge: null,
      props: {},
      userId:
        (import.meta.env.VITE_XOOS_PREVIEW_USER_ID as string | undefined)?.trim() || "",
      email:
        (import.meta.env.VITE_XOOS_PREVIEW_EMAIL as string | undefined)?.trim() || "",
      tenantId:
        (import.meta.env.VITE_XOOS_PREVIEW_TENANT_ID as string | undefined)?.trim() || "",
      clientId: null,
      scopes: [] as string[],
      hasScope: () => false,
      navigationTarget: null,
      navigationTarget: null,
      isRuntimeHosted: false,
    };
  }, [runtime]);
}

export async function openChildMicroapp(
  bridge: XOOSMicroappBridge | null,
  microappKey: string,
  props: Record<string, unknown> = {},
): Promise<void> {
  if (!bridge) {
    throw new Error("XOOS Runtime navigation is unavailable in standalone preview mode.");
  }

  await bridge.navigation.navigate(
    microappKey,
    Object.keys(props).length > 0 ? { props } : undefined,
  );
}

const clientCache = new WeakMap<XOOSMicroappBridge, Map<string, Promise<SupabaseClient>>>();

function resolveDatasourceKey(): string {
  return microappConfig.dataProjectKey;
}

async function getRuntimeClient(
  bridge: XOOSMicroappBridge,
  props: Record<string, unknown>,
): Promise<SupabaseClient> {
  const datasourceKey = resolveDatasourceKey();

  let clients = clientCache.get(bridge);
  if (!clients) {
    clients = new Map();
    clientCache.set(bridge, clients);
  }

  let cached = clients.get(datasourceKey);
  if (!cached) {
    cached = createXOOSSupabaseClient({
      projectKey: datasourceKey,
      bridge: bridge.data,
    });
    clients.set(datasourceKey, cached);
  }

  return cached;
}

export function useApprovalAuthorityDataClient() {
  const runtime = useOptionalBridgeRuntime();
  const [client, setClient] = useState<SupabaseClient | null>(
    runtime ? null : previewSupabase,
  );
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;
    setError(null);

    if (!runtime) {
      setClient(previewSupabase);
      return () => {
        cancelled = true;
      };
    }

    setClient(null);

    getRuntimeClient(runtime.bridge, runtime.props)
      .then((resolved) => {
        if (!cancelled) setClient(resolved);
      })
      .catch((reason) => {
        if (!cancelled) {
          setError(reason instanceof Error ? reason : new Error(String(reason)));
        }
      });

    return () => {
      cancelled = true;
    };
  }, [runtime]);

  return { client, error, isReady: !!client };
}
