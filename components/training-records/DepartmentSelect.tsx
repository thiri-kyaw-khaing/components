import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
type Props = {
  value: string;
  onChange: (value: string) => void;
};
function DepartmentSelect({ value, onChange }: Props) {
  return (
    <div>
      {/* DepartmentFilter */}
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-[180px] border-[#006022]">
          <SelectValue placeholder="All Departments" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>All Departments</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default DepartmentSelect;
