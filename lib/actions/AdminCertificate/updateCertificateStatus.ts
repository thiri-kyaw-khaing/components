"use server";

import { API_BASE_URL } from "@/app/api/api";
import { authFetch } from "@/lib/api/authFetch";
import { revalidatePath } from "next/cache";

export type UpdateStatusResult = {
  ok: boolean;
  message?: string;
};

export async function approveCertificate(
  id: number,
): Promise<UpdateStatusResult> {
  try {
    const { response } = await authFetch(
      `${API_BASE_URL}/admin/certificates/${id}/approve`,
      { method: "PUT", cache: "no-store" },
    );

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      return {
        ok: false,
        message: data?.message || "Failed to approve certificate.",
      };
    }

    // Bust the uploaded-certificates page cache so the list refetches fresh
    revalidatePath("/uploaded-certificates");
    return { ok: true };
  } catch (err) {
    console.error("approveCertificate error:", err);
    return { ok: false, message: "Server error. Please try again." };
  }
}

export async function rejectCertificate(
  id: number,
): Promise<UpdateStatusResult> {
  try {
    const { response } = await authFetch(
      `${API_BASE_URL}/admin/certificates/${id}/reject`,
      { method: "PUT", cache: "no-store" },
    );

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      return {
        ok: false,
        message: data?.message || "Failed to reject certificate.",
      };
    }

    revalidatePath("/uploaded-certificates");
    return { ok: true };
  } catch (err) {
    console.error("rejectCertificate error:", err);
    return { ok: false, message: "Server error. Please try again." };
  }
}
