import ButtonDialog from "@/components/dashboard/buttonDialog";
import PageHeader from "@/components/dashboard/pageHeader";
import CreateTrainingPlan from "@/components/training-plans/createTrainingPlanForm";
import PlanCard from "@/components/training-plans/planCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { courses } from "@/lib/data";
import { Search } from "lucide-react";

function TrainingPlans() {
  return (
    <div className="min-h-screen space-y-4 m-2">
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

      <div className="flex flex-wrap items-center gap-4 my-6">
        {/* Search */}
        <div className="relative flex-1 min-w-[240px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search by name, email, or employee ID..."
            className="pl-9 border-[#006022]"
          />
        </div>
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
