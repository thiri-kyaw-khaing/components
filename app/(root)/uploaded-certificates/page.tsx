import PageHeader from "@/components/dashboard/pageHeader";
import CertificateTable from "@/components/uploaded-certificates/CertificateTable";
import { getCertificates } from "@/lib/api/getCertificate";

type UploadedCertificatesPageProps = {
  searchParams?: Promise<{
    page?: string;
    limit?: string;
  }>;
};

async function UploadedCertificates({
  searchParams,
}: UploadedCertificatesPageProps) {
  const resolvedSearchParams = await searchParams;
  const pageValue = Number(resolvedSearchParams?.page ?? "1");
  const limitValue = Number(resolvedSearchParams?.limit ?? "10");

  const page = Number.isFinite(pageValue) && pageValue > 0 ? pageValue : 1;
  const limit =
    Number.isFinite(limitValue) && limitValue > 0 && limitValue <= 100
      ? limitValue
      : 10;

  const result = await getCertificates({ page, limit });
  const items = result.data?.items ?? [];
  const meta =
    result.data?.meta ??
    ({
      page,
      limit,
      totalItems: items.length,
      totalPages: 1,
    } as const);

  return (
    <>
      <div className="min-h-screen space-y-4 m-2">
        <PageHeader
          title="Uploaded Certificates"
          subtitle="Review and approve external training certificates uploaded by staff"
        />

        <div className="border rounded-md">
          <CertificateTable
            items={items}
            meta={meta}
            currentPage={page}
            currentLimit={limit}
          />
        </div>
      </div>
    </>
  );
}

export default UploadedCertificates;
