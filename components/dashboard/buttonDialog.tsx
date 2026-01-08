import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
function ButtonDialog({ name }: { name?: string }) {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <button className="bg-[#006022] text-white px-4 py-2 rounded-md">
            <Plus className="inline-block mr-2 w-4 h-4" />
            {name}
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ButtonDialog;
