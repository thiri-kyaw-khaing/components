"use client";

import React, { useEffect, useState, useTransition } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { colors } from "@/lib/color";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import type { Certificate } from "@/app/types/certificate";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { CertificateMeta } from "@/lib/api/getCertificate";
import {
  approveCertificate,
  rejectCertificate,
} from "@/lib/actions/AdminCertificate/updateCertificateStatus";

const API_ORIGIN =
  process.env.NEXT_PUBLIC_API_ORIGIN || "http://localhost:8080";

function getCertificateImageUrl(imagePath: string) {
  if (!imagePath) return "";
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }

  return `${API_ORIGIN}/${imagePath.replace(/^\/+/, "")}`;
}

function StatusBadge({ status }: { status: Certificate["status"] }) {
  const styles: Record<Certificate["status"], string> = {
    Pending: "bg-yellow-100 text-yellow-800",
    Approved: "bg-green-100 text-green-800",
    Rejected: "bg-red-100 text-red-800",
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}

function DetailRow({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-1">
      <span className="text-sm font-semibold text-muted-foreground w-[140px] shrink-0">
        {label}
      </span>
      <span className="text-sm break-words">{value}</span>
    </div>
  );
}

type CertificateTableProps = {
  items: Certificate[];
  meta: CertificateMeta;
  currentPage: number;
  currentLimit: number;
};

function CertificateTable({
  items,
  meta,
  currentPage,
  currentLimit,
}: CertificateTableProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [certificates, setCertificates] = useState<Certificate[]>(items);
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setCertificates(items);
  }, [items]);

  const handleViewDetails = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    setActionError(null);
    setDialogOpen(true);
  };

  // Hits the backend's approve/reject endpoint, then refreshes the table from
  // the server. The local optimistic update is just for snappy UI; the real
  // truth lives in the DB and is re-read after router.refresh().
  const handleUpdateStatus = (status: "Approved" | "Rejected") => {
    if (!selectedCertificate) return;
    setActionError(null);
    const id = selectedCertificate.id;

    startTransition(async () => {
      const result =
        status === "Approved"
          ? await approveCertificate(id)
          : await rejectCertificate(id);

      if (!result.ok) {
        setActionError(result.message ?? "Failed to update certificate.");
        return;
      }

      // Optimistically update locally
      setCertificates((prev) =>
        prev.map((c) =>
          c.id === id
            ? { ...c, status, updatedAt: new Date().toISOString() }
            : c,
        ),
      );
      setSelectedCertificate((prev) => (prev ? { ...prev, status } : null));
      setDialogOpen(false);

      // Pull fresh data from the server (admin endpoint only returns Pending,
      // so the row will disappear naturally after approve/reject)
      router.refresh();
    });
  };

  const handlePageChange = (targetPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(targetPage));
    params.set("limit", String(currentLimit));
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="overflow-x-auto">
      <Table className="w-full min-w-[1500px] rounded-t-md">
        <TableHeader
          className="rounded-t-md"
          style={{ backgroundColor: colors.secondary }}
        >
          <TableRow>
            <TableHead className="w-[200px] font-bold whitespace-nowrap">
              Employee ID
            </TableHead>
            <TableHead className="w-[300px] font-bold whitespace-nowrap">
              Employee Name
            </TableHead>
            <TableHead className="w-[200px] font-bold text-left whitespace-nowrap">
              Department
            </TableHead>
            <TableHead className="w-[200px] font-bold text-left whitespace-nowrap">
              Division
            </TableHead>

            <TableHead className="text-right w-[250px] font-bold whitespace-nowrap">
              Training Name
            </TableHead>

            <TableHead className="text-right w-[150px] font-bold whitespace-nowrap">
              Status
            </TableHead>
            <TableHead className="text-right w-[150px] font-bold whitespace-nowrap">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {certificates.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                No certificates found.
              </TableCell>
            </TableRow>
          ) : null}

          {certificates.map((certificate) => (
            <TableRow key={certificate.id}>
              {/* Employee ID */}
              <TableCell className="w-[200px] font-medium">
                {certificate.employeeId || "-"}
              </TableCell>
              {/* Employee Name */}
              <TableCell className="w-[300px]">
                <div className="max-w-[280px] line-clamp-2 break-words">
                  {certificate.userName}
                </div>
              </TableCell>
              {/* Department */}
              <TableCell className="w-[200px] text-left">
                {certificate.department}
              </TableCell>
              {/* Division */}
              <TableCell className="w-[200px] text-left">
                <div className="max-w-[180px] line-clamp-2 break-words">
                  {certificate.division}
                </div>
              </TableCell>

              {/* Training Name */}
              <TableCell className="w-[250px] text-right">
                <div className="ml-auto line-clamp-2 break-words">
                  {certificate.trainingName}
                </div>
              </TableCell>
              {/* Status */}
              <TableCell className="w-[150px] text-right">
                <StatusBadge status={certificate.status} />
              </TableCell>
              {/* Action */}
              <TableCell className="w-[150px] text-right">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-green-700 text-sm"
                  onClick={() => handleViewDetails(certificate)}
                >
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-3 py-4 border-t">
        <p className="text-sm text-muted-foreground">
          Page {meta.page} of {meta.totalPages} ({meta.totalItems} total items)
        </p>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage <= 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage >= meta.totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      </div>

      {/* Certificate Details Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Certificate Details</DialogTitle>
          </DialogHeader>

          {selectedCertificate && (
            <div className="space-y-4 py-2">
              {/* Certificate Image Preview */}
              {selectedCertificate.image && (
                <div className="w-full rounded-lg border overflow-hidden bg-muted">
                  <img
                    src={getCertificateImageUrl(selectedCertificate.image)}
                    alt="Certificate"
                    className="w-full h-auto object-contain max-h-[300px]"
                  />
                </div>
              )}

              {/* Details Grid */}
              <div className="grid gap-3">
                <DetailRow
                  label="Employee ID"
                  value={selectedCertificate.employeeId}
                />
                <DetailRow
                  label="Employee Name"
                  value={selectedCertificate.userName}
                />
                <DetailRow
                  label="Department"
                  value={selectedCertificate.department}
                />
                <DetailRow
                  label="Division"
                  value={selectedCertificate.division}
                />
                <DetailRow
                  label="Category"
                  value={selectedCertificate.category}
                />
                <DetailRow
                  label="Training ID"
                  value={selectedCertificate.trainingId}
                />
                <DetailRow
                  label="Training Name"
                  value={selectedCertificate.trainingName}
                />
                <DetailRow
                  label="Description"
                  value={selectedCertificate.description}
                />
                <DetailRow
                  label="Status"
                  value={<StatusBadge status={selectedCertificate.status} />}
                />
              </div>
            </div>
          )}

          {actionError && (
            <p className="text-sm text-red-600 mt-2">{actionError}</p>
          )}

          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button
              className="bg-[#006022] text-white hover:bg-[#005018]"
              onClick={() => handleUpdateStatus("Approved")}
              disabled={
                isPending || selectedCertificate?.status === "Approved"
              }
            >
              {isPending ? "Saving..." : "Approve"}
            </Button>
            <Button
              className="bg-red-600 text-white hover:bg-red-700"
              onClick={() => handleUpdateStatus("Rejected")}
              disabled={
                isPending || selectedCertificate?.status === "Rejected"
              }
            >
              {isPending ? "Saving..." : "Reject"}
            </Button>
            <Button
              variant="outline"
              onClick={() => setDialogOpen(false)}
              disabled={isPending}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CertificateTable;
