export type Course = {
  id: number;

  name: string;
  calendarEventId?: string;

  speakerInstitute: string;

  type: "Online" | "Onsite" | "Hybrid";
  category:
    | "Technical Skills"
    | "Soft Skills"
    | "Leadership"
    | "Safety"
    | "Compliance";

  date: string; // ISO timestamp

  numberOfDays: number;
  numberOfHours: number;

  location: string;

  totalCost: number;
  budgetCode: string;

  numberOfPerson: number;
  costPerPerson: number;
  content?: string;
};
