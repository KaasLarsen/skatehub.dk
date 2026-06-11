import type { Metadata } from "next";
import { contactEmail, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontakt ${siteName} — spørgsmål, rettelser til skateparker og samarbejde.`,
};

export default function KontaktPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-4xl font-semibold tracking-tight text-stone-900">Kontakt</h1>
      <p className="mt-4 text-lg text-stone-700">
        Har du rettelser til en skatepark, forslag til guides eller ønsker om samarbejde? Skriv til os.
      </p>
      <p className="mt-6">
        <a href={`mailto:${contactEmail}`} className="text-lg font-medium text-orange-900 underline underline-offset-4">
          {contactEmail}
        </a>
      </p>
    </div>
  );
}
