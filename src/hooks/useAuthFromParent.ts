import { useXoRuntime } from "@/microapp/runtime";

interface AuthState {
  tenantId: string | null;
  userId: string | null;
  email: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  bridge: ReturnType<typeof useXoRuntime>["bridge"];
}

export function useAuthFromParent(): AuthState {
  const runtime = useXoRuntime();

  return {
    tenantId: runtime.tenantId || null,
    userId: runtime.userId || null,
    email: runtime.email || null,
    isAuthenticated: Boolean(runtime.userId && runtime.tenantId),
    isLoading: false,
    bridge: runtime.bridge,
  };
}
