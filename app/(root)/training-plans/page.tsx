import ButtonDialog from "@/components/dashboard/buttonDialog";
import PageHeader from "@/components/dashboard/pageHeader";
import CreateTrainingPlan from "@/components/training-plans/createTrainingPlanForm";
import PlanCard from "@/components/training-plans/planCard";
import { Input } from "@/components/ui/input";

import { getTrainingPlans } from "@/lib/api/getTrainingPlan";
import { Search } from "lucide-react";
import { Course } from "@/app/types/trainingPlan";

function normalizePlans(payload: unknown): Course[] {
  const data = payload as {
    data?: {
      items?: Course[];
    } | Course[];
  };

  if (Array.isArray(payload)) {
    return payload;
  }

  if (Array.isArray(data?.data) && data.data.every((p) => !!p)) {
    return data.data;
  }

  if (
    data?.data &&
    !Array.isArray(data.data) &&
    Array.isArray(data.data.items)
  ) {
    return data.data.items;
  }

  return [];
}

async function TrainingPlans() {
  const response = await getTrainingPlans();
  const plans = normalizePlans(response);

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
        <div className="relative flex-1 min-w-60">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search by name, email, or employee ID..."
            className="pl-9 border-[#006022]"
          />
        </div>
      </div>
      <div className="space-y-6">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
}

export default TrainingPlans;
