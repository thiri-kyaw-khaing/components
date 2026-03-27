"use server";

import { API_BASE_URL } from "@/app/api/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

export type State = {
  errors?: {
    title?: string[];
    speaker?: string[];
    category?: string[];
    type?: string[];
    date?: string[];
    numberOfHours?: string[];
    numberOfDays?: string[];
    location?: string[];
    costPerPerson?: string[];
    numberOfPerson?: string[];
    budgetCode?: string[];
    content?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
  title: z.string().trim().min(3, "Training title must be at least 3 characters!"),
  speaker: z.string().trim().min(2, "Speaker/Trainer must be at least 2 characters!"),
  category: z.string().trim().min(1, "Category is required!"),
  type: z.string().trim().min(1, "Type is required!"),
  date: z.string().trim().min(1, "Date is required!"),
  numberOfHours: z.coerce.number().int().min(1, "Hours must be at least 1!"),
  numberOfDays: z.coerce.number().int().min(1, "Days must be at least 1!"),
  location: z.string().trim().optional(),
  costPerPerson: z.coerce.number().int().min(0, "Cost per person must be 0 or more!"),
  numberOfPerson: z.coerce.number().int().min(1, "Number of person must be at least 1!"),
  budgetCode: z.string().trim().optional(),
  content: z.string().trim().min(10, "Content must be at least 10 characters!"),
});

function toIsoDateTime(input: string): string | null {
  const dateOnlyPattern = /^\d{4}-\d{2}-\d{2}$/;
  const parsed = dateOnlyPattern.test(input)
    ? new Date(`${input}T00:00:00.000Z`)
    : new Date(input);

  if (Number.isNaN(parsed.getTime())) {
    return null;
  }

  return parsed.toISOString();
}

export async function EditTrainingPlanAction(
  id: string,
  prevState: State | void,
  formData: FormData,
): Promise<State | void> {
  const validatedFields = FormSchema.safeParse({
    title: formData.get("title"),
    speaker: formData.get("speaker"),
    category: formData.get("category"),
    type: formData.get("type"),
    date: formData.get("date"),
    numberOfHours: formData.get("numberOfHours"),
    numberOfDays: formData.get("numberOfDays"),
    location: formData.get("location") || undefined,
    costPerPerson: formData.get("costPerPerson"),
    numberOfPerson: formData.get("numberOfPerson"),
    budgetCode: formData.get("budgetCode") || undefined,
    content: formData.get("content"),
  });

  const cookieStore = await cookies();
  const cookieHeader = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");

  if (!validatedFields.success) {
    const flattened = z.flattenError(validatedFields.error);
    return {
      errors: flattened.fieldErrors,
      message: "Failed to update training plan. Please check your input.",
    };
  }

  const {
    title,
    speaker,
    category,
    type,
    date,
    numberOfHours,
    numberOfDays,
    location,
    costPerPerson,
    numberOfPerson,
    budgetCode,
    content,
  } = validatedFields.data;
  const totalCost = costPerPerson * numberOfPerson;
  const isoDate = toIsoDateTime(date);

  if (!isoDate) {
    return {
      message: "Invalid date format. Please select a valid date.",
    };
  }

  let isEdited = false;
    
  try {
    const response = await fetch(`${API_BASE_URL}/admin/training-plans/${id}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieHeader,
      },
      body: JSON.stringify({
        name: title,
        ...(speaker ? { speakerInstitute: speaker } : {}),
        category,
        type,
        date: isoDate,
        content,
        numberOfDays,
        numberOfHours,
        totalCost,
        numberOfPerson,
        costPerPerson,
        ...(location ? { location } : {}),
        ...(budgetCode ? { budgetCode } : {}),
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      const errorText = await response.text();
      let backendMessage: string | undefined;
      try {
        backendMessage = (JSON.parse(errorText) as { message?: string }).message;
      } catch {
        backendMessage = errorText || undefined;
      }

      return {
        message: backendMessage || "Failed to update training plan. Please try again.",
      };
    }
    isEdited = true;
  } catch {
    return {
      message: "Server error. Please try again later.",
    };
  }

  if (isEdited) {
    redirect("/training-plans");
  }
}
