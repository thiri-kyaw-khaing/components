"use client";

import { useState } from "react";
import FilterGroup from "./FilterGroup";
import TrainingRecordTable from "./TrainingRecordTable";
import { Department } from "@/app/types/department";
import { API_BASE_URL } from "@/app/api/api";

type Props = {
  departments: Department[];
};

export default function TrainingRecordsClient({ departments }: Props) {
  const [records, setRecords] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (filters: Record<string, unknown>) => {
    setIsLoading(true);
    setError(null);

    try {
      console.log(
        "[FilterGroup] Sending payload:",
        JSON.stringify(filters, null, 2),
      );

      const response = await fetch(`${API_BASE_URL}/admin/records/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(filters),
      });

      console.log("[Response] Status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("[Response] Error body:", errorText);
        throw new Error(`Failed to fetch records: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("[Response] Full data:", data);

      const nextRecords =
        data?.data?.items ??
        data?.data?.records ??
        data?.items ??
        data?.records ??
        data?.data ??
        [];

      setRecords(Array.isArray(nextRecords) ? nextRecords : []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to search records");
      setRecords([]); // clear records on error
      console.error("Search error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  console.log("Current records state:", records);

  return (
    <>
      <FilterGroup departments={departments} onSearch={handleSearch} />

      {error ? <p className="text-sm text-red-600 mt-2">{error}</p> : null}

      {isLoading ? (
        <p className="text-sm text-gray-600 mt-2">Loading records...</p>
      ) : null}

      <div className="border rounded-md">
        <TrainingRecordTable records={records} />
      </div>
    </>
  );
}
