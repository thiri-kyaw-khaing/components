// Training plan enums used by the create/edit training-plan forms.
// (The former mock arrays — departments/users/courses/certificates/ojtRecords —
// were stale demo data inconsistent with the real types and unused; removed.)

export const TrainingTypeEnum = [
  "In-house",
  "Public",
  "OJT",
  "Self-learning",
  "Online/Virtual",
] as const;

export const TrainingCategoryEnum = [
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
] as const;
