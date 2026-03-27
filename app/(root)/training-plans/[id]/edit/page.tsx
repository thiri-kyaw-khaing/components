import EditTrainingPlanForm from "@/components/training-plans/editTrainingPlanForm";
import { getTrainingPlanById } from "@/lib/api/getTrainingPlan";
import { Course } from "@/app/types/trainingPlan";
import { notFound } from "next/navigation";

export default async function EditTrainingPlan({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await getTrainingPlanById(id);
  const course: Course | null =
    response?.data?.item ?? response?.data ?? response ?? null;

  if (!course) {
    notFound();
  }

  return (
    <div>
      <EditTrainingPlanForm course={course} />
    </div>
  );
}
