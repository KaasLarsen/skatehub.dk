const EARTH_RADIUS_KM = 6371;

function toRadians(degrees: number) {
  return (degrees * Math.PI) / 180;
}

/** Luftlinje-afstand i km mellem to koordinater (Haversine). */
export function haversineKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) ** 2;
  return EARTH_RADIUS_KM * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function formatDistanceKm(km: number): string {
  if (km < 1) {
    const meters = Math.max(100, Math.round((km * 1000) / 100) * 100);
    return meters < 1000 ? `ca. ${meters} m` : "ca. 1 km";
  }
  if (km < 10) return `ca. ${km.toFixed(1).replace(".", ",")} km`;
  return `ca. ${Math.round(km)} km`;
}
