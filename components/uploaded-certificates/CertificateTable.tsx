"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { certificates as initialCertificates } from "@/lib/data";
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
import Image from "next/image";

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

function CertificateTable() {
  const [certificates, setCertificates] = useState<Certificate[]>([
    ...initialCertificates,
  ]);
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleViewDetails = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    setDialogOpen(true);
  };

  const handleUpdateStatus = (status: Certificate["status"]) => {
    if (!selectedCertificate) return;

    setCertificates((prev) =>
      prev.map((c) =>
        c.id === selectedCertificate.id
          ? { ...c, status, updatedAt: new Date().toISOString() }
          : c,
      ),
    );
    setSelectedCertificate((prev) => (prev ? { ...prev, status } : null));
  };

  return (
    <div>
      <Table className="table-fixed w-full rounded-t-md ">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader className={`bg-[${colors.secondary}] rounded-t-md`}>
          <TableRow>
            <TableHead className="w-[200px] font-bold">Employee ID</TableHead>
            <TableHead className="w-[300px] font-bold">Employee Name</TableHead>
            <TableHead className="w-[200px] font-bold text-left">
              Department
            </TableHead>
            <TableHead className="w-[200px] font-bold text-left">
              Division
            </TableHead>

            <TableHead className="text-right w-[250px] font-bold">
              Training Name
            </TableHead>

            <TableHead className="text-right w-[150px] font-bold">
              Status
            </TableHead>
            <TableHead className="text-right w-[150px] font-bold">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
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
                  <Image
                    src={`/${selectedCertificate.image}`}
                    alt="Certificate"
                    width={600}
                    height={400}
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

          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button
              className="bg-[#006022] text-white hover:bg-[#005018]"
              onClick={() => handleUpdateStatus("Approved")}
              disabled={selectedCertificate?.status === "Approved"}
            >
              Approve
            </Button>
            <Button
              className="bg-red-600 text-white hover:bg-red-700"
              onClick={() => handleUpdateStatus("Rejected")}
              disabled={selectedCertificate?.status === "Rejected"}
            >
              Reject
            </Button>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CertificateTable;
