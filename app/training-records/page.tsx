import PageHeader from "@/components/dashboard/pageHeader";
import React from "react";

function TrainingRecords() {
  return (
    <>
      <div className="space-y-4 m-6">
        <PageHeader
          title="Training Records"
          subtitle="Filter and view training records across the organization"
        />
      </div>
    </>
  );
}

export default TrainingRecords;
