"use client";

import { useState } from "react";
import FilterGroup from "./FilterGroup";
import TrainingRecordTable from "./TrainingRecordTable";
import { Department } from "@/app/types/department";
import { SearchTrainingRecordsAction } from "@/lib/actions/AdminTrainingRecord/searchRecords";

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
      console.log("Searching with filters:", filters); //log filters for debugging
      const result = await SearchTrainingRecordsAction(filters);

      if (!result.ok) {
        setError(result.message || "Failed to search records");
        setRecords([]);
        return;
      }

      setRecords(Array.isArray(result.data) ? result.data : []);
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
