import { NextRequest, NextResponse } from "next/server";

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36";

function placeholderSvg(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><rect width="256" height="256" rx="24" fill="#222"/><g fill="#737373"><rect x="48" y="72" width="160" height="48" rx="8"/><rect x="72" y="128" width="112" height="12" rx="4"/><rect x="88" y="148" width="80" height="12" rx="4"/></g></svg>`;
}

export async function GET(req: NextRequest) {
  try {
    let src = req.nextUrl.searchParams.get("src")?.trim() || "";
    if (!src) return new NextResponse("missing src", { status: 400 });
    if (src.startsWith("//")) src = "https:" + src;
    const url = new URL(src);

    async function go(ref?: string) {
      return fetch(url.toString(), {
        redirect: "follow",
        headers: {
          "user-agent": UA,
          accept: "image/avif,image/webp,image/*,*/*;q=0.8",
          ...(ref ? { referer: ref } : {}),
        },
      });
    }

    let r = await go();
    if (!r.ok) r = await go(url.origin);
    if (!r.ok) {
      return new NextResponse(placeholderSvg(), {
        status: 200,
        headers: {
          "content-type": "image/svg+xml",
          "cache-control": "public, max-age=600",
        },
      });
    }
    const ct = r.headers.get("content-type") || "image/jpeg";
    const buf = new Uint8Array(await r.arrayBuffer());
    return new NextResponse(buf, {
      status: 200,
      headers: {
        "content-type": ct,
        "cache-control": "public, max-age=86400",
      },
    });
  } catch {
    return new NextResponse(placeholderSvg(), {
      status: 200,
      headers: { "content-type": "image/svg+xml" },
    });
  }
}
