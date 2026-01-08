import ButtonDialog from "@/components/dashboard/buttonDialog";
import SubTitle from "@/components/subTitle";
import Title from "@/components/title";

function DepartmentPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <Title text="Department Management" />
          <SubTitle text="Manage departments, assign managers, and view staff" />
        </div>

        <div className="mt-6">
          <ButtonDialog name="Add Department" />
        </div>
      </div>
    </div>
  );
}

export default DepartmentPage;
