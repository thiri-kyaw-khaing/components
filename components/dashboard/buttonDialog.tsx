import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
function ButtonDialog({
  name,
  className,
  icon,
  children,
}: {
  name?: string;
  className?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button
              className={cn(
                "bg-[#006022] text-white px-4 py-2 rounded-md hover:bg-[#005018]",
                className
              )}
            >
              {icon ? icon : <Plus className="mr-2 h-4 w-4" />}
              {name}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            {/* <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Name</Label>
                <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username-1">Username</Label>
                <Input
                  id="username-1"
                  name="username"
                  defaultValue="@peduarte"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter> */}
            {children}
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}

export default ButtonDialog;
