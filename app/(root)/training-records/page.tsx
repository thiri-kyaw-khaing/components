"use client";

import PageHeader from "@/components/dashboard/pageHeader";

import FilterGroup from "@/components/training-records/FilterGroup";
import RangeCalendar from "@/components/training-records/RangeCalendar";

import TrainingRecordTable from "@/components/training-records/TrainingRecordTable";

import { useState } from "react";
function TrainingRecords() {
  const [department, setDepartment] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  const handleSearch = async () => {
    // call API with filters
  };
  return (
    <>
      <div className="min-h-screen space-y-4 m-2">
        <PageHeader
          title="Training Records"
          subtitle="Filter and view training records across the organization"
        />

        <FilterGroup children={<RangeCalendar />} />

        <div className="border rounded-md">
          <TrainingRecordTable />
        </div>
      </div>
    </>
  );
}

export default TrainingRecords;
