import { API_BASE_URL } from "@/app/api/api";
import { authFetch } from "@/lib/api/authFetch";
import { NextRequest, NextResponse } from "next/server";

// Proxy: browser → this route → backend POST /admin/records/export → backend
// streams back an .xlsx → we forward the bytes with proper headers so the
// browser shows a file download dialog.
export async function POST(request: NextRequest) {
  const filters = await request.json().catch(() => ({}));

  const { response } = await authFetch(
    `${API_BASE_URL}/admin/records/export`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(filters ?? {}),
      cache: "no-store",
    },
  );

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    return NextResponse.json(
      {
        ok: false,
        message: text || `Backend returned ${response.status}`,
      },
      { status: response.status },
    );
  }

  // Backend hands us back an .xlsx binary. Pipe it straight through.
  const buffer = await response.arrayBuffer();
  const filename = `training-records-${new Date()
    .toISOString()
    .slice(0, 10)}.xlsx`;

  return new NextResponse(buffer, {
    status: 200,
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}
