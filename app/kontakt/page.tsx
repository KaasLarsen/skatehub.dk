import type { Metadata } from "next";
import { contactEmail, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontakt ${siteName} — spørgsmål, rettelser til skateparker og samarbejde.`,
};

export default function KontaktPage() {
  return (
    <div className="page-wrap mx-auto max-w-3xl">
      <h1 className="page-title">Kontakt</h1>
      <p className="page-lead">
        Har du rettelser til en skatepark, forslag til guides eller ønsker om samarbejde? Skriv til os.
      </p>
      <p className="mt-8">
        <a href={`mailto:${contactEmail}`} className="link-lime text-xl font-bold">
          {contactEmail}
        </a>
      </p>
    </div>
  );
}
