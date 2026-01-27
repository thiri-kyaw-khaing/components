import PageHeader from "@/components/dashboard/pageHeader";

import FilterGroupClient from "@/components/training-records/FilterGroupClient";

function UploadedCertificates() {
  return (
    <>
      <div className="m-6 space-y-4">
        <PageHeader
          title="Uploaded Certificates"
          subtitle="Review and approve external training certificates uploaded by staff"
        />
        <FilterGroupClient />
      </div>
    </>
  );
}

export default UploadedCertificates;
