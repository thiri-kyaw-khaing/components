"use server";

import { API_BASE_URL } from "@/app/api/api";
import { authFetch } from "@/lib/api/authFetch";

// Registers the given users to a training plan. Admin can register any user
// (backend POST /admin/training-plans/:id/registrations).
export async function registerStaffAction(planId: string, userIds: number[]) {
  const { response } = await authFetch(
    `${API_BASE_URL}/admin/training-plans/${planId}/registrations`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userIds }),
      cache: "no-store",
    },
  );

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(
      `Failed to register users: ${response.status} ${response.statusText} ${errorBody}`.trim(),
    );
  }

  return { success: true };
}
