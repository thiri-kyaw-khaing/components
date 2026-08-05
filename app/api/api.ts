// Browser-facing backend origin (scheme + host + port, no path). Inlined at
// build time (NEXT_PUBLIC_). In dev it falls back to localhost; in production
// set NEXT_PUBLIC_BACKEND_ORIGIN to e.g. https://api.yourdomain.com.
export const PUBLIC_BACKEND_ORIGIN =
  process.env.NEXT_PUBLIC_BACKEND_ORIGIN ?? "http://localhost:8080";

// Server-side backend origin, for server->backend calls (authFetch, server
// actions, route handlers). Inside Docker this is the internal service name
// (e.g. http://backend:8080) since "localhost" there means the web container
// itself. Falls back to the public origin (prod via the proxy; local dev
// localhost). The admin app only ever calls the backend server-side.
export const BACKEND_ORIGIN =
  process.env.BACKEND_INTERNAL_ORIGIN ?? PUBLIC_BACKEND_ORIGIN;

export const API_BASE_URL = `${BACKEND_ORIGIN}/api/v1`;

// Browser-facing API base (client components only; unused today but kept for
// parity with manager-web).
export const PUBLIC_API_BASE_URL = `${PUBLIC_BACKEND_ORIGIN}/api/v1`;
