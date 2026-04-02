import { Certificate } from "@/app/types/certificate";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

function getCertificateImageUrl(imagePath: string): string {
  if (!imagePath) return "";
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }

  const origin = process.env.NEXT_PUBLIC_API_ORIGIN || "http://localhost:8080";
  return `${origin}/${imagePath.replace(/^\/+/, "")}`;
}

export function CertificateCard({ certificate }: { certificate: Certificate }) {
  const imageUrl = getCertificateImageUrl(certificate.image);
  const isPending = certificate.status.toLowerCase() === "pending";

  return (
    <Card className="rounded-xl border border-muted w-full max-w-[500px]">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              {certificate.trainingName}
            </h3>
            <p className="text-sm text-muted-foreground">
              Certificate ID: {certificate.id}
            </p>
          </div>

          <div className="bg-green-100 text-green-700 p-2 rounded-lg">
            <Award className="h-5 w-5" />
          </div>
        </div>

        {imageUrl ? (
          <div className="overflow-hidden rounded-lg border bg-muted/20">
            <img
              src={imageUrl}
              alt={`${certificate.trainingName} certificate`}
              className="h-48 w-full object-cover"
            />
          </div>
        ) : (
          <div className="h-48 rounded-lg border bg-muted/20 flex items-center justify-center text-sm text-muted-foreground">
            No certificate image uploaded
          </div>
        )}

        <div className="grid grid-cols-2 gap-6 pt-2 border-t">
          <div>
            <p className="text-xs text-muted-foreground">Status</p>
            <span
              className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                isPending
                  ? "bg-amber-100 text-amber-700"
                  : "bg-emerald-100 text-emerald-700"
              }`}
            >
              {certificate.status}
            </span>
          </div>

          <div>
            <p className="text-xs text-muted-foreground">Training</p>
            <p className="text-sm font-medium line-clamp-2">
              {certificate.trainingName}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs text-muted-foreground mb-1">Description</p>
          <p className="text-sm text-foreground break-words">
            {certificate.description || "-"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
