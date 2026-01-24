import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

type Props = {
  certificate: {
    name: string;
    trainingPlan: string;
    category: string;
  };
};

export function CertificateCard({ certificate }: Props) {
  return (
    <Card className="rounded-xl border border-muted w-[500px]">
      <CardContent className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">{certificate.name}</h3>
            <p className="text-sm text-muted-foreground">
              Issued by {certificate.name}
            </p>
          </div>

          <div className="bg-green-100 text-green-700 p-2 rounded-lg">
            <Award className="h-5 w-5" />
          </div>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-2 gap-6 pt-2 border-t">
          <div>
            <p className="text-xs text-muted-foreground">Issued</p>
            <p className="text-sm font-medium">{certificate.trainingPlan}</p>
          </div>

          <div>
            <p className="text-xs text-muted-foreground">Expires</p>
            <p className="text-sm font-medium">{certificate.category}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
