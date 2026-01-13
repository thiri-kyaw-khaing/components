import ButtonDialog from "@/components/dashboard/buttonDialog";
import PageHeader from "@/components/dashboard/pageHeader";
import PlanCard from "@/components/training-plans/planCard";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React from "react";

function TrainingPlans() {
  return (
    <div className="m-6 space-y-4">
      <PageHeader
        title="Training Plans"
        subtitle="Create and manage organization-wide training programs"
        action={<ButtonDialog name="Add Training Plan" />}
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
        <PlanCard
          title="Leadership Development"
          name="Dr. James Wilson"
          trainingCount={5}
        />
        <PlanCard
          title="Technical Skills"
          name="Dr. James Wilson"
          trainingCount={8}
        />
        <PlanCard
          title="Compliance Training"
          name="Dr. James Wilson"
          trainingCount={3}
        />
        <PlanCard
          title="Compliance Training"
          name="Dr. James Wilson"
          trainingCount={3}
        />
      </div>
    </div>
  );
}

export default TrainingPlans;
