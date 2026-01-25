import EditTrainingPlanForm from "@/components/training-plans/editTrainingPlanForm";
import { courses } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function EditTrainingPlan({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const courseId = Number(id);

  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    notFound();
  }

  return (
    <div>
      <EditTrainingPlanForm course={course} />
    </div>
  );
}
