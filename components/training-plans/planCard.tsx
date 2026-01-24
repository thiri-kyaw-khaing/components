import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ButtonDialog from "../dashboard/buttonDialog";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import ViewPlanForm from "./viewPlanForm";
import InfoDetail from "./infoDetail";
import { Course } from "@/app/types/trainingPlan";

type PlanCardProps = {
  plan: Course;
};
function PlanCard({ plan }: PlanCardProps) {
  return (
    <div>
      <Card className="w-full min-w-[360px]">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="">
            <p className="text-black text-md mb-2">{plan.name}</p>
            <p className="text-gray-500 text-sm">
              Speaker:{plan.speakerInstitute}
            </p>
          </CardTitle>

          <CardAction className="text-[#006022] font-medium">
            <ButtonDialog
              icon={<EyeIcon className="mr-2 h-4 w-4" />}
              name={"View"}
              className="bg-white border border-[#006022] hover:bg-[#f0fdf4] text-[#006022] px-4 py-2 rounded-md"
            >
              <ViewPlanForm />
            </ButtonDialog>
          </CardAction>
        </CardHeader>

        <CardContent className="grid grid-cols-4 gap-4 mt-2">
          <InfoDetail title="Date" info={plan.date} />
          <InfoDetail title="Type" info={plan.type} />
          <InfoDetail title="Category" info={plan.category} />
          <InfoDetail
            title="Registered People"
            info={plan.numberOfPerson.toString()}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default PlanCard;
