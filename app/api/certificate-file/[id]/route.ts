import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { API_BASE_URL } from "@/app/api/api";

// Same-origin proxy for certificate images. A browser <img> tag cannot attach
// the Bearer token (it lives in an httpOnly cookie), so this server-side route
// reads the cookie and forwards the request to the authenticated backend
// endpoint, then streams the bytes back. This keeps certificate files behind
// auth instead of serving them from an open /uploads route.
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  if (!/^\d+$/.test(id)) {
    return NextResponse.json({ message: "Invalid id" }, { status: 400 });
  }

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const upstream = await fetch(`${API_BASE_URL}/certificates/${id}/file`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  if (!upstream.ok || !upstream.body) {
    return NextResponse.json(
      { message: "Failed to load certificate" },
      { status: upstream.status || 502 },
    );
  }

  const headers = new Headers();
  const contentType = upstream.headers.get("content-type");
  if (contentType) headers.set("Content-Type", contentType);
  headers.set("Cache-Control", "private, no-store");

  return new NextResponse(upstream.body, { status: 200, headers });
}
