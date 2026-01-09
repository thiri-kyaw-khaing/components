import ButtonDialog from "@/components/dashboard/buttonDialog";
import PageHeader from "@/components/dashboard/pageHeader";
import { Button } from "@/components/ui/button";
import React from "react";

function TrainingCategories() {
  return (
    <>
      <div className="m-6 space-y-4">
        <PageHeader
          title="Training Categories"
          subtitle="Manage training categories and classifications"
          action={<ButtonDialog name="Add Training Category" />}
        />
      </div>
    </>
  );
}

export default TrainingCategories;
