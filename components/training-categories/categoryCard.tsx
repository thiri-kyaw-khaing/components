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
import { BookOpenIcon, Edit2Icon, Trash2Icon } from "lucide-react";
import { Button } from "../ui/button";
import { title } from "process";
import { Separator } from "../ui/separator";

type CategoryCardProps = {
  title?: string;
  description?: string;
  trainingCount?: number;
};
function categoryCard({
  title,
  description,
  trainingCount,
}: CategoryCardProps) {
  return (
    <div>
      <Card className="w-full min-w-[360px]">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="bg-[#E8F7EC] w-16 h-16 flex items-center justify-center text-white rounded-md">
            <BookOpenIcon className="w-6 h-6 text-[#006022]" />
          </CardTitle>

          <CardAction className="text-[#006022] font-medium">
            <Button variant="ghost" size="icon-sm">
              <Edit2Icon />
            </Button>
            <Button variant="ghost" size="icon-sm">
              <Trash2Icon className="text-red-500" />
            </Button>
          </CardAction>
        </CardHeader>

        <CardContent>
          <p className="text-black text-md">{title}</p>
          <p className="text-gray-600 text-sm "> {description}</p>
          <Separator className="w-24 self-center mt-4" />
        </CardContent>

        <CardFooter className="flex flex-col items-start gap-2">
          <p className="text-sm text-muted-foreground">Total Training</p>
          <h4 className="">{trainingCount}</h4>
        </CardFooter>
      </Card>
    </div>
  );
}

export default categoryCard;
