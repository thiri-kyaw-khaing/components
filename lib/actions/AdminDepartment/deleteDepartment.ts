"use server";

import { API_BASE_URL } from "@/app/api/api";
import { authFetch } from "@/lib/api/authFetch";
import { redirect } from "next/navigation";
import { z } from "zod";

export type State = {
  errors?: {
    name?: string[];
  };
  message?: string | null;
};

// const FormSchema = z.object({
//   name: z
//     .string()
//     .trim()
//     .min(2, "Department name must be at least 2 characters!"),
//   division: z
//     .string()
//     .trim()
//     .min(2, "Division name must be at least 2 characters!"),
// });

export async function DeleteDepartmentAction(
  id: number,
  prevState: State | void,
  formData: FormData,
): Promise<State | void> {
  //   if (!validatedFields.success) {
  //     const flattened = z.flattenError(validatedFields.error);

  //     return {
  //       errors: flattened.fieldErrors,
  //       message: "Failed to create department. Please check your input.",
  //     };
  //   }

  //   const { name, division } = validatedFields.data;
  let isDeleted = false;

  try {
    const { response } = await authFetch(
      `${API_BASE_URL}/admin/departments/${id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
      },
    );

    if (!response.ok) {
      const errorData = await response.json();

      return {
        message:
          errorData?.message ||
          "Failed to delete department. Please try again.",
      };
    }

    isDeleted = true;
  } catch {
    return {
      message: "Server error. Please try again later.",
    };
  }

  if (isDeleted) {
    redirect("/departments");
  }
}
