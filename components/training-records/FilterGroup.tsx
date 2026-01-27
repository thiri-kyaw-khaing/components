"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";
import StatusSelect from "./StatusSelect";
import CategorySelect from "./CategorySelect";
import DepartmentSelect from "./DepartmentSelect";

function FilterGroup({ children }: { children?: React.ReactNode }) {
  const [department, setDepartment] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  return (
    <div>
      <div className="border rounded-md p-4 space-y-4">
        <h1>Filter Options</h1>
        <div className="flex flex-wrap gap-4">
          <DepartmentSelect value={department} onChange={setDepartment} />
          {/* Category Filter */}
          <CategorySelect value={category} onChange={setCategory} />
          {/* Status Filter */}
          <StatusSelect value={status} onChange={setStatus} />
        </div>
        {children}
        {/* Search Button */}
        <div className="mt-6">
          <Button className="bg-[#006022] text-white px-4 py-2 rounded-lg hover:bg-[#005018]">
            <SearchIcon className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FilterGroup;
