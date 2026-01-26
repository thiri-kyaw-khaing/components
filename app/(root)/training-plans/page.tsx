import ButtonDialog from "@/components/dashboard/buttonDialog";
import PageHeader from "@/components/dashboard/pageHeader";
import CreateTrainingPlan from "@/components/training-plans/createTrainingPlanForm";
import PlanCard from "@/components/training-plans/planCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { courses } from "@/lib/data";
import { Search } from "lucide-react";
import React, { act } from "react";

function TrainingPlans() {
  return (
    <div className="m-6 space-y-4">
      <PageHeader
        title="Training Plans"
        subtitle="Create and manage organization-wide training programs"
        action={
          <ButtonDialog name="Add Training Plan">
            <CreateTrainingPlan />
          </ButtonDialog>
        }
      />
      {/* Search bar */}

      <div className="flex items-center gap-4 my-6 justify-between">
        {/* Search */}
        <div className="relative w-[70%]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search by name, email, or employee ID..."
            className="pl-9 border-[#006022]"
          />
        </div>

        {/* DepartmentFilter */}
        <Select>
          <SelectTrigger className="w-[180px] border-[#006022]">
            <SelectValue placeholder="All Departments" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>All Departments</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {/* Category Filter */}
        <Select>
          <SelectTrigger className="w-[180px] border-[#006022]">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">สนับสนุนนโยบายสิ่งแวดล้อม</SelectItem>
            <SelectItem value="2">ความปลอดภัยและอาชีวอนามัย</SelectItem>
            <SelectItem value="3">ความปลอดภัยและอาชีวอนามัย</SelectItem>
            <SelectItem value="4">ความปลอดภัยและอาชีวอนามัย</SelectItem>
            <SelectItem value="5">ความปลอดภัยและอาชีวอนามัย</SelectItem>
            <SelectItem value="6">ความปลอดภัยและอาชีวอนามัย</SelectItem>

            <SelectItem value="suspended">Suspended</SelectItem>
          </SelectContent>
        </Select>

        {/* Button */}
        <Button className="bg-[#006022] hover:bg-[#005018] px-8">Search</Button>
      </div>
      <div className="space-y-6">
        {courses.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
}

export default TrainingPlans;
