import { API_BASE_URL } from "@/app/api/api";
import { authFetch } from "@/lib/api/authFetch";

export async function getTrainingPlans() {
  const { response: res } = await authFetch(
    `${API_BASE_URL}/admin/training-plans`,
    {
      method: "GET",
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch training plans");
  }

  return res.json();
}

export async function getTrainingPlanById(id: string) {
  const { response: res } = await authFetch(
    `${API_BASE_URL}/admin/training-plans/${id}`,
    {
      method: "GET",
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch training plan");
  }

  return res.json();
}
