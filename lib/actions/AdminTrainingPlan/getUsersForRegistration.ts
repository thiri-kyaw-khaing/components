"use server";

import { getUsers } from "@/lib/api/getUser";
import type { UserList } from "@/app/types/userManagement";

// Returns all users for the admin register-staff selection list. Never throws —
// returns [] on error. Uses the max page size (100); if the org ever exceeds
// 100 users this should page through or use a dedicated endpoint.
export async function getUsersForRegistration(): Promise<UserList[]> {
  try {
    const res = await getUsers({ page: 1, limit: 100 });
    return res?.data?.items ?? [];
  } catch {
    return [];
  }
}
