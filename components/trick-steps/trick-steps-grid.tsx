import type { ReactNode } from "react";

export type TrickStep = {
  title: string;
  caption: string;
  illustration: ReactNode;
};

export function TrickStepsGrid({ title, steps }: { title: string; steps: TrickStep[] }) {
  const cols =
    steps.length <= 3 ? "sm:grid-cols-3" : steps.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2";

  return (
    <figure className="not-prose my-10" aria-label={title}>
      <figcaption className="text-xs font-bold uppercase tracking-widest text-[var(--lime)]">{title}</figcaption>
      <div className={`mt-4 grid gap-4 ${cols}`}>
        {steps.map((step, index) => (
          <div
            key={step.title}
            className={`border-2 border-[var(--border-strong)] bg-[var(--bg-card)] p-3 ${index % 2 === 1 ? "lg:translate-y-1" : ""}`}
            style={{ boxShadow: "3px 3px 0 0 color-mix(in srgb, var(--lime) 35%, transparent)" }}
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center border border-[var(--lime)] bg-[color-mix(in_srgb,var(--lime)_12%,transparent)] text-xs font-bold text-[var(--lime)]">
                {index + 1}
              </span>
              <span className="text-sm font-bold uppercase tracking-wide text-[var(--text)]">{step.title}</span>
            </div>
            {step.illustration}
            <p className="mt-2 text-sm leading-snug text-[var(--text-muted)]">{step.caption}</p>
          </div>
        ))}
      </div>
    </figure>
  );
}
