import { API_BASE_URL } from "@/app/api/api";
import { cookies } from "next/headers";

async function getCookieHeader(): Promise<string> {
  const cookieStore = await cookies();
  return cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");
}

export async function getTrainingPlans() {
  const res = await fetch(`${API_BASE_URL}/admin/training-plans`, {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: await getCookieHeader(),
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch training plans");
  }

  return res.json();
}

export async function getTrainingPlanById(id: string) {
  const res = await fetch(`${API_BASE_URL}/admin/training-plans/${id}`, {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: await getCookieHeader(),
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch training plan");
  }

  return res.json();
}
