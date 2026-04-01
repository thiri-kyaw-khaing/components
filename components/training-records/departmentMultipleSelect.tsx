"use client";

import * as React from "react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { Department } from "@/app/types/department";

type Props = {
  departments: Department[];
  value: number[];
  onChange: (value: number[]) => void;
};

export default function DepartmentMultipleSelect({
  departments,
  value: selectedDepartmentIds,
  onChange,
}: Props) {
  const [value, setValue] = React.useState("");

  const selected = React.useMemo(
    () =>
      departments.filter((department) =>
        selectedDepartmentIds.includes(Number(department.id)),
      ),
    [departments, selectedDepartmentIds],
  );

  const addDepartment = (department: Department) => {
    if (selectedDepartmentIds.includes(Number(department.id))) return;

    onChange([...selectedDepartmentIds, Number(department.id)]);
    setValue("");
  };

  const removeDepartment = (id: number) => {
    onChange(
      selectedDepartmentIds.filter((departmentId) => departmentId !== id),
    );
  };

  const filteredDepartments = departments.filter((d) =>
    d.name.toLowerCase().includes(value.toLowerCase()),
  );

  return (
    <div className="w-full rounded-md border px-3 py-2">
      <div className="flex flex-wrap gap-2 items-center">
        {selected.map((department) => (
          <Badge key={department.id} variant="secondary" className="gap-1">
            {department.name}

            <button
              type="button"
              onClick={() => removeDepartment(Number(department.id))}
            >
              <X className="h-3 w-3" />
            </button>
          </Badge>
        ))}

        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add department"
          className="border-none shadow-none focus-visible:ring-0 w-[200px]"
        />
      </div>

      {value && (
        <Command className="mt-2 rounded-md border">
          <CommandEmpty>No results</CommandEmpty>

          <CommandGroup>
            {filteredDepartments.map((department) => (
              <CommandItem
                key={department.id}
                onSelect={() => addDepartment(department)}
              >
                {department.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      )}
    </div>
  );
}
