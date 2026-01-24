import ButtonDialog from "@/components/dashboard/buttonDialog";
import PageHeader from "@/components/dashboard/pageHeader";
import CreateTrainingPlan from "@/components/training-plans/createTrainingPlanForm";
import PlanCard from "@/components/training-plans/planCard";
import { Button } from "@/components/ui/button";
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
      <div className="border border-[#006022] rounded-lg p-2 flex items-center gap-2 mt-6">
        <Search className="text-gray-400" />
        <input
          type="text"
          placeholder="Search departments..."
          className="w-full outline-none border-none focus:ring-0"
          // value={searchTerm} // ✅ controlled value
          // onChange={(e) => setSearchTerm(e.target.value)}
        />
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
