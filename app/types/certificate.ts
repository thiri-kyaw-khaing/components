export type Certificate = {
  id: string; // CERT001
  userId: string; // EMP001
  trainingName: string; // "Cybersecurity Best Practices"

  category:
    | "Technical Skills"
    | "Leadership"
    | "Safety"
    | "Compliance"
    | "Environment";

  type: "Internal" | "External" | "Online" | "Onsite";

  image: string; // certificate image URL
  description: string;
  issuedAt: string;
  status: "Pending" | "Approved" | "Rejected";
};
