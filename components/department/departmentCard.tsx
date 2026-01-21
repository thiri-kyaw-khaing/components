import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DashboardCard from "../dashboard/DashboardCard";
import {
  Edit2Icon,
  Edit3Icon,
  EditIcon,
  Trash2Icon,
  Users,
  UsersIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import StaffTable from "./staffTable";
import { Department } from "@/app/types/department";
import { useState } from "react";
type DepartmentCardProps = {
  department: Department;
  onViewStaff: (department: Department) => void;
};

function DepartmentCard({ department, onViewStaff }: DepartmentCardProps) {
  return (
    <Card className="w-full sm:max-w-[360px]">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="bg-[#E8F7EC] w-16 h-16 flex items-center justify-center text-white rounded-md">
          <UsersIcon className="w-6 h-6 text-[#006022]" />
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
        <p className="text-black text-md">{department.name}</p>
        <p className="text-gray-600 text-sm ">
          {" "}
          Manager: {department.manager.name}
        </p>
        <Separator className="w-24 self-center mt-4" />
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-2">
        <p className="text-sm text-muted-foreground">Staff</p>
        <h4 className="">{department.staff.length}</h4>
        <Button
          variant="outline"
          className="w-full text-[#006022] border-[#006022]"
          onClick={() => onViewStaff(department)}
        >
          View Staff
        </Button>
      </CardFooter>
    </Card>
  );
}

export default DepartmentCard;
