"use server";

import { API_BASE_URL } from "@/app/api/api";
import type { TrainingRecord, TrainingRecordMeta } from "@/app/types/record";
import { authFetch } from "@/lib/api/authFetch";

export type SearchRecordsResult = {
  ok: boolean;
  message?: string;
  data?: TrainingRecord[];
  meta?: TrainingRecordMeta;
};

export type SearchRecordsFilters = {
  departmentIds?: number[];
  categories?: string[];
  status?: string;
  startDate?: string | null;
  endDate?: string | null;
  page?: number;
  limit?: number;
};

export async function SearchTrainingRecordsAction(
  filters: SearchRecordsFilters,
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
    const meta: TrainingRecordMeta =
      json?.data?.meta ??
      ({
        page: typeof filters?.page === "number" ? filters.page : 1,
        limit: typeof filters?.limit === "number" ? filters.limit : 10,
        totalItems: Array.isArray(records) ? records.length : 0,
        totalPages: 1,
      } as const);

    return {
      ok: true,
      data: Array.isArray(records) ? (records as TrainingRecord[]) : [],
      meta,
    };
  } catch {
    return {
      ok: false,
      message: "Server error. Please try again later.",
      data: [],
    };
  }
}
