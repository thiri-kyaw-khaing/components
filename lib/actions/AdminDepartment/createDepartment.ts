"use server";

import { API_BASE_URL } from "@/app/api/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

export type State = {
  errors?: {
    name?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
  name: z
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
    name: formData.get("name"),
    division: formData.get("division"),
  });

  const cookieStore = await cookies(); //  await

  // build cookie string manually
  const cookieHeader = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");

  console.log("Received form data:", {
    validatedFields,
  });

  if (!validatedFields.success) {
    const flattened = z.flattenError(validatedFields.error);

    return {
      errors: flattened.fieldErrors,
      message: "Failed to create department. Please check your input.",
    };
  }

  const { name, division } = validatedFields.data;
  let isCreated = false;

  try {
    const response = await fetch(`${API_BASE_URL}/admin/departments`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json", Cookie: cookieHeader },
      body: JSON.stringify({ name, division }),
      cache: "no-store",
    });

    if (!response.ok) {
      const errorData = await response.json();

      return {
        message:
          errorData?.message ||
          "Failed to create department. Please try again.",
      };
    }

    isCreated = true;
  } catch {
    return {
      message: "Server error. Please try again later.",
    };
  }

  if (isCreated) {
    redirect("/departments");
  }
}
