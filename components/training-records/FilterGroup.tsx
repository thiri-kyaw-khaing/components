"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";
import StatusSelect from "./StatusSelect";
import CategoryMultipleSelect from "./categoryMultipleSelect";
import DepartmentMultipleSelect from "./departmentMultipleSelect";
import RangeCalendar from "./RangeCalendar";
import { Department } from "@/app/types/department";
import { DateRange } from "react-day-picker";

type FilterGroupProps = {
  departments: Department[];
  onSearch: (filters: any) => void;
};

function FilterGroup({ departments, onSearch }: FilterGroupProps) {
  const [status, setStatus] = useState("");
  const [departmentIds, setDepartmentIds] = useState<number[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toDateOnly = (date: Date) => date.toISOString().split("T")[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const filters = {
      departmentIds,
      categories,
      status,
      startDate: dateRange?.from ? toDateOnly(dateRange.from) : null,
      endDate: dateRange?.to ? toDateOnly(dateRange.to) : null,
    };

    try {
      await Promise.resolve(onSearch(filters));
    } finally {
      setIsSubmitting(false);
    }
    console.log("Submitting filters");
    onSearch(filters);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="border rounded-md p-4 space-y-4">
          <h1 className="text-lg font-semibold">Filter Options</h1>

          <div className="flex flex-wrap gap-4">
            {/* Department Filter */}
            <DepartmentMultipleSelect
              departments={departments}
              value={departmentIds}
              onChange={setDepartmentIds}
            />

            {/* Category Filter */}
            <CategoryMultipleSelect
              value={categories}
              onChange={setCategories}
            />

            {/* Status Filter */}
            <StatusSelect value={status} onChange={setStatus} />
          </div>

          {/* Date Filter */}
          <RangeCalendar value={dateRange} onChange={setDateRange} />

          {/* Search Button */}
          <div className="mt-6">
            <Button
              className="bg-[#006022] text-white px-4 py-2 rounded-lg hover:bg-[#005018]"
              type="submit"
              disabled={isSubmitting}
            >
              <SearchIcon className="mr-2 h-4 w-4" />
              {isSubmitting ? "Searching..." : "Search"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default FilterGroup;
