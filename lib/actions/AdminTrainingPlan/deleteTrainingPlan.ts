"use server";

import { API_BASE_URL } from "@/app/api/api";
import { authFetch } from "@/lib/api/authFetch";
import { redirect } from "next/navigation";

export type State = {
  message?: string | null;
};

export async function DeleteTrainingPlanAction(
  id: number,
  prevState: State | void,
  formData: FormData,
): Promise<State | void> {
  try {
    const { response } = await authFetch(
      `${API_BASE_URL}/admin/training-plans/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      },
    );

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
