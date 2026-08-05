"use server";

import { authFetch } from "@/lib/api/authFetch";

export type AdminDashboardStats = {
  totalUsers: number;
  totalTrainingPlans: number;
  totalDepartments: number;
};

// Fetches the admin dashboard aggregate counts. Returns null on auth failure or
// error so the page can render a safe zero-state instead of crashing.
export async function getAdminDashboardStats(): Promise<AdminDashboardStats | null> {
  const { response, unauthorized } = await authFetch("/admin/dashboard-stats", {
    method: "GET",
    cache: "no-store",
  });

  if (unauthorized || !response.ok) {
    return null;
  }

  const json = await response.json().catch(() => null);
  return (json?.data as AdminDashboardStats) ?? null;
}
