import { API_BASE_URL } from "@/app/api/api";
import type { Certificate } from "@/app/types/certificate";
import { authFetch } from "@/lib/api/authFetch";

export type CertificateMeta = {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
};

export type GetCertificatesResponse = {
  status: string;
  message: string;
  data: {
    items: Certificate[];
    meta: CertificateMeta;
  };
};

type GetCertificatesParams = {
  page?: number;
  limit?: number;
};

export async function getCertificates({
  page = 1,
  limit = 10,
}: GetCertificatesParams = {}): Promise<GetCertificatesResponse> {
  const query = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  const { response: res } = await authFetch(
    `${API_BASE_URL}/admin/certificates?${query.toString()}`,
    {
      method: "GET",
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch certificates");
  }

  return (await res.json()) as GetCertificatesResponse;
}
