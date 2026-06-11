export type CookieConsentChoice = "all" | "necessary";

export const COOKIE_CONSENT_KEY = "skatehub-cookie-consent";

export function getStoredConsent(): CookieConsentChoice | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (raw === "all" || raw === "necessary") return raw;
  return null;
}

export function setStoredConsent(choice: CookieConsentChoice): void {
  localStorage.setItem(COOKIE_CONSENT_KEY, choice);
}

export function dispatchConsentChoice(choice: CookieConsentChoice): void {
  window.dispatchEvent(new CustomEvent("skatehub-consent", { detail: choice }));
}
