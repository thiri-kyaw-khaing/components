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

function ViewPlanForm({ plan }: { plan: Course }) {
  const router = useRouter();
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
      </div>
      <Detail
        label="Content of Training Plan"
        value={plan.content ?? "No content available"}
      />
      <DialogFooter className="mt-4">
        <DialogClose asChild>
          <Button variant="outline">Close</Button>
        </DialogClose>
        <Button
          type="submit"
          className="bg-[#006022]"
          onClick={() => {
            router.push(`/training-plans/${plan.id}/edit`);
            console.log("plan.id =", plan.id, typeof plan.id);
          }}
        >
          Edit Training Plan
        </Button>
      </DialogFooter>
    </div>
  );
}

export default ViewPlanForm;
