"use client";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Course } from "@/app/types/trainingPlan";
import Detail from "../userManagement/detailText";
import { useRouter } from "next/navigation";
import { useActionState } from "react";
import {
  DeleteTrainingPlanAction,
  State,
} from "@/lib/actions/AdminTrainingPlan/deleteTrainingPlan";

function ViewPlanForm({ plan }: { plan: Course }) {
  const router = useRouter();
  const initialState: State = { message: null };

  const [state, deleteAction, pending] = useActionState(
    DeleteTrainingPlanAction.bind(null, Number(plan.id)),
    initialState,
  );

  return (
    <div>
      <DialogHeader>
        <DialogTitle>{plan.name}</DialogTitle>
        <DialogDescription>Training Plan Details</DialogDescription>
      </DialogHeader>
      <div className="grid grid-cols-2 gap-4 py-4">
        <Detail label="Speaker/Trainer" value={plan.speakerInstitute} />
        <Detail label="Category" value={plan.category} />
        <Detail label="Date" value={plan.date} />
        <Detail label="Type" value={plan.type} />
        <Detail label="Number of Hours" value={`${plan.numberOfHours} hours`} />
        <Detail label="Number of Days" value={`${plan.numberOfDays} days`} />
        <Detail label="Total Cost" value={`${plan.totalCost} Baht`} />
        <Detail label="Budget Code" value={plan.budgetCode} />
        <Detail label="Location" value={plan.location} />
        <Detail label="Cost Per Person" value={`${plan.costPerPerson} Baht`} />
      </div>
      <Detail
        label="Content of Training Plan"
        value={plan.content ?? "No content available"}
      />
      <DialogFooter className="mt-4">
        <form action={deleteAction}>
          <Button variant="destructive" type="submit" disabled={pending}>
            {pending ? "Deleting..." : "Delete"}
          </Button>
        </form>
        <DialogClose asChild>
          <Button variant="outline">Close</Button>
        </DialogClose>
        <Button
          type="submit"
          className="bg-[#006022]"
          onClick={() => {
            router.push(`/training-plans/${plan.id}/edit`);
          }}
        >
          Edit Training Plan
        </Button>
      </DialogFooter>
      {state.message ? <p className="text-sm text-red-600">{state.message}</p> : null}
    </div>
  );
}

export default ViewPlanForm;
