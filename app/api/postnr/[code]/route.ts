import { lookupPostnr } from "@/lib/geo/postnr";

type RouteContext = { params: Promise<{ code: string }> };

export async function GET(_request: Request, context: RouteContext) {
  const { code } = await context.params;
  const location = await lookupPostnr(code);

  if (!location) {
    return Response.json({ error: "Ukendt postnummer" }, { status: 404 });
  }

  return Response.json(location, {
    headers: { "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800" },
  });
}
