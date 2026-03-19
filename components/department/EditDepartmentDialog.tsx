// "use client";

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import {
//   Form,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormControl,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { Department } from "@/app/types/department";
// import { useActionState } from "react";
// import { EditDepartmentAction, State } from "@/lib/actions/editDepartment";

// const schema = z.object({
//   name: z.string().min(1, "Department name is required"),
//   division: z.string().optional(),
// });

// type Props = {
//   department: Department | null;
//   onClose: () => void;
// };

// function EditDepartmentDialog({ department, onClose }: Props) {
//   const initialState: State = { errors: {}, message: null };

//   const [state, formAction, pending] = useActionState(
//     EditDepartmentAction,
//     initialState,
//   );
//   // const form = useForm<z.infer<typeof schema>>({
//   //   resolver: zodResolver(schema),
//   //   defaultValues: {
//   //     name: department?.name ?? "",
//   //     division: department?.division ?? "",
//   //   },
//   // });

//   // const onSubmit = (values: z.infer<typeof schema>) => {
//   //   // call UPDATE API here
//   //   console.log("Update department:", department?.id, values);
//   //   onClose();
//   // };

//   return (
//     <Dialog open={true} onOpenChange={(open) => !open && onClose()}>
//       <DialogContent className="max-w-md">
//         <DialogHeader>
//           <DialogTitle>Edit Department</DialogTitle>
//         </DialogHeader>

//         <form action={formAction.bind(department?.id)} className="space-y-4">
//           <FormField
//             // control={form.control}
//             name="name"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Department Name</FormLabel>
//                 <FormControl>
//                   <Input {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             // control={form.control}
//             name="division"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Division</FormLabel>
//                 <FormControl>
//                   <Input {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <div className="flex justify-end gap-2">
//             <Button type="button" variant="outline" onClick={onClose}>
//               Cancel
//             </Button>
//             <Button type="submit" className="bg-[#006022] text-white">
//               Save
//             </Button>
//           </div>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }

// export default EditDepartmentDialog;

"use client";

import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import { Department } from "@/app/types/department";
import { EditDepartmentAction, State } from "@/lib/actions/editDepartment";
import { Field, FieldGroup, FieldLabel } from "../ui/field";

type Props = {
  department: Department | null;
  onClose: () => void;
};

export default function EditDepartmentDialog({ department, onClose }: Props) {
  const initialState: State = {
    errors: {},
    message: null,
  };

  const [state, formAction, pending] = useActionState(
    EditDepartmentAction.bind(null, Number(department?.id)),
    initialState,
  );

  // close dialog after success
  // useEffect(() => {
  //   if (state.message) {
  //     onClose();
  //   }
  // }, [state.message, onClose]);

  return (
    <Dialog open={true} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Department</DialogTitle>
        </DialogHeader>

        <form action={formAction} className="space-y-4">
          {/* Department Name */}
          <div>
            <FieldLabel>Department Name</FieldLabel>
            <Input
              name="name"
              defaultValue={department?.name}
              placeholder="Department name"
            />

            {/* {state.errors?.name && (
              <p className="text-sm text-red-500 mt-1">{state.errors.name}</p>
            )} */}
          </div>

          {/* Division */}
          <div>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="division">Select Division</FieldLabel>

                <select
                  id="division"
                  name="division"
                  required
                  defaultValue={department?.division ?? ""}
                  className="w-full border border-[#006022] rounded-md px-3 py-2"
                >
                  <option value="">Select Division</option>

                  <option value="Social Enterprise">Social Enterprise</option>

                  <option value="Development Project">
                    Development Project
                  </option>

                  <option value="Nature-based Solution and Special Project">
                    Nature-based Solution and Special Project
                  </option>

                  <option value="Sustainability">Sustainability</option>

                  <option value="Accounting and Finance">
                    Accounting and Finance
                  </option>

                  <option value="Administration">Administration</option>

                  <option value="Other (under CEO)">Other (under CEO)</option>
                </select>
              </Field>
            </FieldGroup>

            {/* {state.errors?.division && (
              <p className="text-sm text-red-500 mt-1">
                {state.errors.division}
              </p>
            )} */}
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>

            <Button
              type="submit"
              className="bg-[#006022] text-white"
              disabled={pending}
            >
              {pending ? "Saving..." : "Save"}
            </Button>
          </div>

          {/* Global message */}
          {/* {state.message && (
            <p className="text-green-600 text-sm">{state.message}</p>
          )} */}
        </form>
      </DialogContent>
    </Dialog>
  );
}
