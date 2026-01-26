"use client";

import PageHeader from "@/components/dashboard/pageHeader";
import CategorySelect from "@/components/training-records/CategorySelect";
import DepartmentSelect from "@/components/training-records/DepartmentSelect";
import StatusSelect from "@/components/training-records/StatusSelect";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
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
      <div className="space-y-4 m-6">
        <PageHeader
          title="Training Records"
          subtitle="Filter and view training records across the organization"
        />
        {/* Filter Part */}
        {/* <div className="border rounded-xl p-4 ">
          <h1 className="text-lg mb-2">Filter Options</h1>
          <p className="text-gray-500">Select Columns to Display</p>
          <div className="grid grid-cols-4 gap-4 mt-4">
            <div className="flex items-center gap-2">
              <Checkbox id="course-code" defaultChecked />
              <label htmlFor="course-code">Course Code</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="course-name" defaultChecked />
              <label htmlFor="course-name">Course Name</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="location" defaultChecked />
              <label htmlFor="location">Location</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="employee-id" defaultChecked />
              <label htmlFor="employee-id">Employee ID</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="name-surname" defaultChecked />
              <label htmlFor="name-surname">Name-Surname</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="position" defaultChecked />
              <label htmlFor="position">Position</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="division" defaultChecked />
              <label htmlFor="division">Division</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="line" defaultChecked />
              <label htmlFor="line">Line</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="cost-per-person" defaultChecked />
              <label htmlFor="cost-per-person">Cost(per person)</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="budget-code" defaultChecked />
              <label htmlFor="budget-code">Budget Code</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="evaluate-practical-application" defaultChecked />
              <label htmlFor="evaluate-practical-application">
                Evaluate the practical application of knowledge to work
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="pre-test-post-test" defaultChecked />
              <label htmlFor="pre-test-post-test">Pre-test/Post-test</label>
            </div>
          </div>
          {/* DropDown Records */}
        {/* <div className="flex flex-col gap-4 mb-4">
          <p className="text-gray-500">Number of Records to Display</p>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Total Records" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="50">50 records</SelectItem>
              <SelectItem value="100">100 records</SelectItem>
              <SelectItem value="200">200 records</SelectItem>
              <SelectItem value="500">500 records</SelectItem>
            </SelectContent>
          </Select>
        </div> */}
        {/* Select Department Section */}
        {/* <p className="text-gray-500">Select Department</p>
        <div className="grid grid-cols-4 gap-4 mt-2">
          <div className="flex items-center gap-2">
            <Checkbox id="human-resources" defaultChecked />
            <label htmlFor="human-resources">Human Resources</label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="course-name" defaultChecked />
            <label htmlFor="course-name">Course Name</label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="location" defaultChecked />
            <label htmlFor="location">Location</label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="location" defaultChecked />
            <label htmlFor="location">Location</label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="location" defaultChecked />
            <label htmlFor="location">Location</label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="location" defaultChecked />
            <label htmlFor="location">Location</label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="location" defaultChecked />
            <label htmlFor="location">Location</label>
          </div>
        </div> */}
        <div className="border rounded-md p-4 space-y-4">
          <h1>Filter Options</h1>
          <div className="flex flex-wrap gap-4">
            <DepartmentSelect value={department} onChange={setDepartment} />
            {/* Category Filter */}
            <CategorySelect value={category} onChange={setCategory} />
            {/* Status Filter */}
            <StatusSelect value={status} onChange={setStatus} />
          </div>
          {/* Search Button */}
          <div className="mt-6">
            <Button className="bg-[#006022] text-white px-4 py-2 rounded-lg hover:bg-[#005018]">
              <SearchIcon className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
        </div>

        {/* </div> */}
      </div>
    </>
  );
}

export default TrainingRecords;
