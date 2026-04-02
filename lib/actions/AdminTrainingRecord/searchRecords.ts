"use server";

import { API_BASE_URL } from "@/app/api/api";
import { authFetch } from "@/lib/api/authFetch";

export type SearchRecordsResult = {
  ok: boolean;
  message?: string;
  data?: unknown[];
};

export async function SearchTrainingRecordsAction(
  filters: Record<string, unknown>,
): Promise<SearchRecordsResult> {
  try {
    const { response } = await authFetch(
      `${API_BASE_URL}/admin/records/search`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filters ?? {}),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      const rawError = await response.text();
      let backendMessage = "Failed to fetch records.";

      try {
        const parsed = JSON.parse(rawError) as { message?: string };
        if (parsed?.message) {
          backendMessage = parsed.message;
        }
      } catch {
        if (rawError) {
          backendMessage = rawError;
        }
      }

      return { ok: false, message: backendMessage, data: [] };
    }

    const json = await response.json();
    const records =
      json?.data?.items ??
      json?.data?.records ??
      json?.items ??
      json?.records ??
      json?.data ??
      [];

    return {
      ok: true,
      data: Array.isArray(records) ? records : [],
    };
  } catch {
    return {
      ok: false,
      message: "Server error. Please try again later.",
      data: [],
    };
  }
}
