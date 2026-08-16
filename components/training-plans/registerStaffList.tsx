"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserPlus } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { registerStaffAction } from "@/lib/actions/AdminTrainingPlan/registerStaffAction";
import type { UserList } from "@/app/types/userManagement";

type Props = {
  users: UserList[];
  planId: string;
};

export default function RegisterStaffList({ users, planId }: Props) {
  const router = useRouter();
  const [selected, setSelected] = useState<number[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const toggle = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const handleSubmit = async () => {
    if (selected.length === 0) {
      setErrorMessage("Please select at least one user.");
      return;
    }
    try {
      setIsSubmitting(true);
      await registerStaffAction(planId, selected);
      setSelected([]);
      setIsSuccessOpen(true);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Registration failed.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Select all + count */}
      {users.length > 0 && (
        <div className="flex items-center justify-between mb-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <Checkbox
              checked={
                selected.length === 0
                  ? false
                  : selected.length === users.length
                    ? true
                    : "indeterminate"
              }
              onCheckedChange={(checked) =>
                setSelected(checked ? users.map((u) => Number(u.id)) : [])
              }
            />
            <span className="text-sm font-medium">Select all</span>
          </label>
          <span className="text-sm text-gray-600">
            {selected.length} of {users.length} selected
          </span>
        </div>
      )}

      {users.length === 0 ? (
        <p className="text-sm text-gray-500">No users available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {users.map((u) => (
            <div
              key={u.id}
              className="border rounded-md p-4 flex items-center gap-3"
            >
              <Checkbox
                checked={selected.includes(Number(u.id))}
                onCheckedChange={() => toggle(Number(u.id))}
              />
              <div>
                <p className="font-medium">{u.fullName}</p>
                <p className="text-sm text-gray-600">
                  {u.jobRole}
                  {u.departmentName ? ` · ${u.departmentName}` : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 mt-4">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => setSelected([])}
        >
          Clear
        </Button>
        <Button
          className="w-full bg-[#006022] hover:bg-[#004d1b] text-white"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          <UserPlus className="w-4 h-4 mr-2" />
          {isSubmitting ? "Registering..." : "Register Users"}
        </Button>
      </div>

      <Dialog
        open={isSuccessOpen}
        onOpenChange={(open) => {
          setIsSuccessOpen(open);
          if (!open) router.push("/training-plans");
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Users registered</DialogTitle>
            <DialogDescription>
              The selected users have been added to this training plan.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setIsSuccessOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog
        open={Boolean(errorMessage)}
        onOpenChange={() => setErrorMessage(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Registration failed</DialogTitle>
            <DialogDescription>{errorMessage}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button className="bg-[#006022]">OK</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
