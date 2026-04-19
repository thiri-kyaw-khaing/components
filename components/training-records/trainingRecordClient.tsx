"use client";

import { useState } from "react";
import FilterGroup from "./FilterGroup";
import TrainingRecordTable from "./TrainingRecordTable";
import { Department } from "@/app/types/department";
import { SearchTrainingRecordsAction } from "@/lib/actions/AdminTrainingRecord/searchRecords";
import type { TrainingRecord, TrainingRecordMeta } from "@/app/types/record";

type Props = {
  departments: Department[];
};

type ClientFilters = {
  departmentIds?: number[];
  categories?: string[];
  status?: string;
  startDate?: string | null;
  endDate?: string | null;
};

export default function TrainingRecordsClient({ departments }: Props) {
  const [records, setRecords] = useState<TrainingRecord[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [meta, setMeta] = useState<TrainingRecordMeta>({
    page: 1,
    limit: 10,
    totalItems: 0,
    totalPages: 1,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLimit] = useState(10);
  const [lastFilters, setLastFilters] = useState<ClientFilters>({});

  const performSearch = async (
    filters: ClientFilters,
    page: number,
    limit: number,
  ) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await SearchTrainingRecordsAction({
        ...filters,
        page,
        limit,
      });

      if (!result.ok) {
        setError(result.message || "Failed to search records");
        setRecords([]);
        setMeta({
          page,
          limit,
          totalItems: 0,
          totalPages: 1,
        });
        return;
      }

      const nextRecords = Array.isArray(result.data) ? result.data : [];
      const nextMeta = result.meta ?? {
        page,
        limit,
        totalItems: nextRecords.length,
        totalPages: 1,
      };

      setRecords(nextRecords);
      setMeta(nextMeta);
      setCurrentPage(page);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to search records");
      setRecords([]); // clear records on error
      setMeta({
        page,
        limit,
        totalItems: 0,
        totalPages: 1,
      });
      console.error("Search error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async (filters: ClientFilters) => {
    setLastFilters(filters);
    await performSearch(filters, 1, currentLimit);
  };

  const handlePageChange = (targetPage: number) => {
    performSearch(lastFilters, targetPage, currentLimit);
  };

  return (
    <>
      <FilterGroup departments={departments} onSearch={handleSearch} />

      {error ? <p className="text-sm text-red-600 mt-2">{error}</p> : null}

      {isLoading ? (
        <p className="text-sm text-gray-600 mt-2">Loading records...</p>
      ) : null}

      <div className="border rounded-md">
        <TrainingRecordTable
          records={records}
          meta={meta}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}
