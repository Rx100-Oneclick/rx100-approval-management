

# Plan: Integrate Approval Authorities with Supabase + Authentication via URL Parameters

## Overview

Replace mock data in the Approval Authorities component with live data from Supabase tables (`approval_templates`, `approval_template_versions`, `organization_members`). Add authentication via URL parameters and postMessage from the parent application. Add a custom animated loading spinner using the provided logo image. Remove Authority Type and Scope Type from the filter dropdown.

---

## Changes

### 1. Copy the Logo Image for Loading Spinner
- Copy `user-uploads://374cb422-55e8-48e2-96e6-a86ce22bd5b4.png` to `src/assets/loading-logo.png`
- This will be used for the animated loading spinner (rotating/pulsing effect)

### 2. Create Authentication Hook (`src/hooks/useAuthFromParent.ts`)
- Parse URL parameters on mount: `access_token`, `refresh_token`, `user_id`, `email`, `tenant_id`
- Set the Supabase session using `supabase.auth.setSession({ access_token, refresh_token })`
- Listen for `postMessage` events of type `AUTH_SESSION` as a backup auth method
- Send `{ type: 'IFRAME_READY' }` postMessage to parent to signal readiness
- Export `tenantId`, `userId`, `email`, `isAuthenticated`, `isLoading` state

### 3. Create Data Fetching Hook (`src/hooks/useApprovalTemplates.ts`)
- Fetch from `approval_templates` table filtered by `tenant_id`
- For each template, fetch the latest version from `approval_template_versions` matching `template_id`, ordered by `version_number` descending
- Fetch creator info from `organization_members` by joining on `created_by` (uuid) to get `full_name` and `email`
- Return combined data with loading and error states

### 4. Create Loading Spinner Component (`src/app/components/LoadingSpinner.tsx`)
- Display the logo image (`loading-logo.png`) with CSS animation
- Animated rotation + pulse effect to match the reference image style
- Centered on screen with a subtle background

### 5. Update `ApprovalAuthorities.tsx` - Major Refactor
Key changes:
- **Remove all mock data** (the `mockAuthorities` array and `Authority` interface)
- **Remove from filter dropdown**: "Authority Type" and "Scope Type" sections (keep only Status filter)
- **Remove from FilterState**: `type` and `scopeType` fields
- **Use `useAuthFromParent` hook** to get `tenantId` and auth state
- **Use `useApprovalTemplates` hook** to fetch real data
- **Show loading spinner** while data is loading (using the logo-based spinner)
- **Map data to table columns**:
  - Authority Name: `approval_template_name`
  - Type: `approval_type` (with colored badge)
  - Scope: display `"-"` (to be provided later)
  - Version: from `approval_template_versions.version_number` with "v" prefix (e.g., "v1")
  - Status: from `approval_template_versions.status`
  - Last Updated: from `approval_templates.updated_at` formatted as date
- **View Details drawer updates**:
  - Remove "Authority ID" field from Basic Information
  - Name: `approval_template_name`
  - Type: `approval_type`
  - Scope: `"-"`
  - Scope Type: `"-"`
  - Version: from version table with "v" prefix
  - Status: from version table
  - Timeline "Created" event: based on `approval_templates.created_at`
  - "Owner Information" renamed to "Created By": look up `created_by` UUID in `organization_members` to display `full_name` and `email`

### 6. Update `App.tsx`
- Wrap app with Supabase auth initialization logic (the hook handles it)

---

## Data Flow

```text
Parent App (iframe src)
  |
  +-- URL params: access_token, refresh_token, user_id, email, tenant_id
  |
  +-- postMessage: { type: 'AUTH_SESSION', payload: { access_token, refresh_token } }
  |
  v
useAuthFromParent hook
  |
  +-- supabase.auth.setSession(...)
  +-- Extract tenant_id
  |
  v
useApprovalTemplates(tenant_id)
  |
  +-- SELECT from approval_templates WHERE tenant_id = ?
  +-- SELECT from approval_template_versions WHERE template_id IN (...)
  +-- SELECT from organization_members WHERE user_id IN (created_by UUIDs)
  |
  v
ApprovalAuthorities component renders table with real data
```

---

## Technical Details

- **Authentication**: URL params are parsed via `URLSearchParams`. The Supabase client session is set using `supabase.auth.setSession()`. A `message` event listener handles the backup `AUTH_SESSION` postMessage.
- **Loading spinner**: CSS `@keyframes` animation with rotation and scale pulse on the logo image.
- **Date formatting**: Use `date-fns` (already installed) to format `updated_at` and `created_at` timestamps.
- **Empty state**: When no templates exist for the tenant, show a friendly empty state message.
- **Filter simplification**: Only the Status filter remains in the dropdown. The `scopeType` and `type` filter chips and logic are removed.
- **Version display**: If no version record exists for a template, display "v0" or "-".

