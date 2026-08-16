import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getTrainingPlanById } from "@/lib/api/getTrainingPlan";
import { getUsersForRegistration } from "@/lib/actions/AdminTrainingPlan/getUsersForRegistration";
import RegisterStaffList from "@/components/training-plans/registerStaffList";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function RegisterStaffPage({ params }: Props) {
  const { id } = await params;

  const [planRes, users] = await Promise.all([
    getTrainingPlanById(id).catch(() => null),
    getUsersForRegistration(),
  ]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const plan = ((planRes as any)?.data ?? planRes) as { name?: string } | null;

  return (
    <div className="min-h-screen space-y-4 m-2">
      <Button
        asChild
        variant="ghost"
        className="text-black hover:bg-transparent border rounded-md px-2 py-1 border-[#006022]"
      >
        <Link href="/training-plans">
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back to Training Plans
        </Link>
      </Button>

      <div>
        <h1 className="text-xl font-semibold">Register Users to Training Plan</h1>
        {plan?.name ? (
          <p className="text-gray-600">{plan.name}</p>
        ) : (
          <p className="text-gray-600">Select users to register</p>
        )}
      </div>

      <div className="border rounded-md p-4">
        <RegisterStaffList users={users} planId={id} />
      </div>
    </div>
  );
}
