"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

export type State = {
  errors?: {
    department?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
  department: z
    .string()
    .trim()
    .min(2, "Department name must be at least 2 characters!"),
  division: z
    .string()
    .trim()
    .min(2, "Division name must be at least 2 characters!"),
});

export async function CreateDepartmentAction(
  prevState: State | void,
  formData: FormData,
): Promise<State | void> {
  const validatedFields = FormSchema.safeParse({
    department: formData.get("department"),
    division: formData.get("division"),
  });

  //   console.log("Received form data:", {
  //     validatedFields,
  //   });

  if (!validatedFields.success) {
    const flattened = z.flattenError(validatedFields.error);

    return {
      errors: flattened.fieldErrors,
      message: "Failed to login. Please check your input.",
    };
  }

  const { department, division } = validatedFields.data;
  let isAuthenticated = false;

  try {
    const response = await fetch(
      "http://localhost:8080/api/v1/auth/admin/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ department, division }),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      const errorData = await response.json();

      return {
        message: errorData?.message || "Invalid email or password",
      };
    }

    isAuthenticated = true;
  } catch {
    return {
      message: "Server error. Please try again later.",
    };
  }

  if (isAuthenticated) {
    redirect("/dashboard");
  }
}
