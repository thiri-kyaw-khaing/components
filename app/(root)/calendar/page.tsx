import AdminLayout from "@/app/layout";
import ButtonDialog from "@/components/dashboard/buttonDialog";
import PageHeader from "@/components/dashboard/pageHeader";
import Test from "@/components/dashboard/test";

export default function CalendarPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-4">
      <PageHeader
        title="Training Calendar"
        subtitle="View and manage training schedules"
        action={<ButtonDialog name="Add Training Schedule" />}
      />
      {/* Training Calendar */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Training Calendar</h2>
        <div className="w-full rounded-2xl shadow-md border overflow-hidden">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=145e678c35bb5fb0c74ca3359c85f0ab6e565f23297871e901550d2297b1f3cc%40group.calendar.google.com&ctz=Asia%2FBangkok"
            className="w-full h-[500px] md:h-[600px]"
            frameBorder="0"
            scrolling="no"
          />
        </div>
      </div>
    </div>
  );
}
