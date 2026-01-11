import ButtonDialog from "@/components/dashboard/buttonDialog";
import PageHeader from "@/components/dashboard/pageHeader";
import CategoryCard from "@/components/training-categories/categoryCard";
import { Button } from "@/components/ui/button";
import React from "react";

function TrainingCategories() {
  return (
    <>
      <div className="m-6 space-y-4 ">
        <PageHeader
          title="Training Categories"
          subtitle="Manage training categories and classifications"
          action={<ButtonDialog name="Add Training Category" />}
        />
        <div className="mt-6 flex flex-wrap gap-10">
          <CategoryCard
            title="Brand & Culture"
            description="Company values, mission, and brand identity"
            trainingCount={8}
          />
          <CategoryCard
            title="Safety"
            description="Workplace safety and emergency procedures"
            trainingCount={5}
          />
          <CategoryCard
            title="Compliance & Policy"
            description="Legal, regulatory, and company policies"
            trainingCount={7}
          />
        </div>
      </div>
    </>
  );
}

export default TrainingCategories;
