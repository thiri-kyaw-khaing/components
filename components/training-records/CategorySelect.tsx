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
function CategorySelect({ value, onChange }: Props) {
  return (
    <div>
      {/* Category Filter */}
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-[180px] border-[#006022]">
          <SelectValue placeholder="สนับสนุนนโยบายสิ่งแวดล้อม" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>All Categories</SelectLabel>
            <SelectItem value="1">สนับสนุนนโยบายสิ่งแวดล้อม</SelectItem>
            <SelectItem value="2">ความปลอดภัยและอาชีวอนามัย</SelectItem>
            <SelectItem value="3">ความปลอดภัยและอาชีวอนามัย</SelectItem>
            <SelectItem value="4">ความปลอดภัยและอาชีวอนามัย</SelectItem>
            <SelectItem value="5">ความปลอดภัยและอาชีวอนามัย</SelectItem>
            <SelectItem value="6">ความปลอดภัยและอาชีวอนามัย</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default CategorySelect;
