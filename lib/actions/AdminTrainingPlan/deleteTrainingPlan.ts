"use server";

import { API_BASE_URL } from "@/app/api/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type State = {
  message?: string | null;
};

export async function DeleteTrainingPlanAction(
  id: number,
  prevState: State | void,
  formData: FormData,
): Promise<State | void> {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");

  try {
    const response = await fetch(`${API_BASE_URL}/admin/training-plans/${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieHeader,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      return {
        message:
          errorData?.message ||
          "Failed to delete training plan. Please try again.",
      };
    }
  } catch {
    return {
      message: "Server error. Please try again later.",
    };
  }

  redirect("/training-plans");
}
