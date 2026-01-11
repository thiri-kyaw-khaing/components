import AdminLayout from "@/app/layout";
import ButtonDialog from "@/components/dashboard/buttonDialog";
import PageHeader from "@/components/dashboard/pageHeader";

export default function CalendarPage() {
  return (
    <div className="m-6 space-y-4">
      <PageHeader
        title="Training Calendar"
        subtitle="View and manage training schedules"
        action={<ButtonDialog name="Add Training Schedule" />}
      />
    </div>
  );
}
