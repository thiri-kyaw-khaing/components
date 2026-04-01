"use server";

import { API_BASE_URL } from "@/app/api/api";
import { authFetch } from "@/lib/api/authFetch";
import { redirect } from "next/navigation";
import { z } from "zod";

export type State = {
  errors?: {
    name?: string[];
    employeeId?: string[];
    email?: string[];
    phone?: string[];
    departmentId?: string[];
    role?: string[];
    position?: string[];
    status?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
  name: z.string().trim().min(2, "Full name must be at least 2 characters!"),
  employeeId: z.string().trim().min(1, "Employee ID is required!"),
  email: z.string().trim().email("Invalid email address!"),
  phone: z.string().trim().min(6, "Phone number is required!"),
  departmentId: z.string().trim().min(1, "Department ID is required!"),
  role: z.string().trim().min(2, "Role must be at least 2 characters!"),
  position: z.string().trim().min(2, "Position must be at least 2 characters!"),
  status: z.enum(["active", "inactive", "suspended"]),
});

export async function EditUserAction(
  id: string,
  prevState: State | void,
  formData: FormData,
): Promise<State | void> {
  const validatedFields = FormSchema.safeParse({
    name: formData.get("name"),
    employeeId: formData.get("employeeId"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    departmentId: formData.get("departmentId"),
    role: formData.get("role"),
    position: formData.get("position"),
    status: formData.get("status"),
  });

  if (!validatedFields.success) {
    const flattened = z.flattenError(validatedFields.error);

    return {
      errors: flattened.fieldErrors,
      message: "Failed to update user. Please check your input.",
    };
  }

  const {
    name,
    employeeId,
    email,
    phone,
    departmentId,
    role,
    position,
    status,
  } = validatedFields.data;
  let isEdited = false;

  try {
    const { response } = await authFetch(`${API_BASE_URL}/admin/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        employeeId,
        email,
        phone,
        departmentId,
        role,
        position,
        status,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      return {
        message:
          errorData?.message || "Failed to update user. Please try again.",
      };
    }
    isEdited = true;
  } catch {
    return {
      message: "Server error. Please try again later.",
    };
  }

  if (isEdited) {
    redirect("/user-management");
  }
}
