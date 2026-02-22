import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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
                className,
              )}
            >
              {icon ? icon : <Plus className="mr-2 h-4 w-4" />}
              {name}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] md:max-w-[600px]">
            {children}
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}

export default ButtonDialog;
