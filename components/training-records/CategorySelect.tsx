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
  const categories = [
    "สนับสนุนนโยบายสิ่งแวดล้อม",
    "ความปลอดภัยและอาชีวอนามัย",
    "งานขายและงานบริการ",
    "การใช้งาน Software",
    "การนำเสนอ",
    "Leadership Development",
    "การใช้งานเครื่องจักรและซ่อมบำรุง",
    "กระบวนการคิด วิเคราะห์",
    "พัฒนาทักษะกระบวนการทำงาน",
    "การจัดซื้อจัดจ้าง",
    "การสื่อสาร",
    "โครงการสัมมนาอื่นๆ",
    "พัฒนาขีดความสามารถระดับบริหาร",
    "การเงินและการบัญชี",
  ];
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
            {categories.map((cat, index) => (
              <SelectItem key={index} value={(index + 1).toString()}>
                {cat}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default CategorySelect;
