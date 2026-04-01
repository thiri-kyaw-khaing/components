import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
type Props = {
  value: string;
  onChange: (value: string) => void;
};
function StatusSelect({ value, onChange }: Props) {
  return (
    <div>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-[180px] border-[#006022]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="inactive">Inactive</SelectItem>
          <SelectItem value="absent">Absent</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default StatusSelect;
