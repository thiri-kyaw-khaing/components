import ButtonDialog from "@/components/dashboard/buttonDialog";
import SubTitle from "@/components/subTitle";
import Title from "@/components/title";
import React from "react";

function DepartmentPage() {
  return (
    <>
      <div className="flex items-center m-6 w-full">
        <div className="space-y-4">
          <Title text="Department Management" />
          <SubTitle text="Manage departments, assign managers, and view staff" />
        </div>
        <div className="ml-auto">
          <ButtonDialog name="Add Department" />
        </div>
      </div>
    </>
  );
}

export default DepartmentPage;
