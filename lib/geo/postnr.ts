export type PostnrLocation = {
  postnr: string;
  navn: string;
  latitude: number;
  longitude: number;
};

const POSTNR_RE = /^\d{4}$/;

export function isValidDanishPostnr(value: string): boolean {
  const digits = value.trim();
  if (!POSTNR_RE.test(digits)) return false;
  const n = Number(digits);
  return n >= 1000 && n <= 9999;
}

/** Slår postnummer op via DAWA (Dataforsyningen). */
export async function lookupPostnr(postnr: string): Promise<PostnrLocation | null> {
  const code = postnr.trim();
  if (!isValidDanishPostnr(code)) return null;

  const res = await fetch(`https://api.dataforsyningen.dk/postnumre/${code}`, {
    next: { revalidate: 60 * 60 * 24 * 30 },
  });
  if (!res.ok) return null;

  const data = (await res.json()) as {
    nr: string;
    navn: string;
    visueltcenter?: [number, number];
  };

  const center = data.visueltcenter;
  if (!center || center.length !== 2) return null;

  const [longitude, latitude] = center;
  return { postnr: data.nr, navn: data.navn, latitude, longitude };
}
