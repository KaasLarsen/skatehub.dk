import type { ComponentProps } from "react";
import { MdxLink } from "@/components/mdx-link";
import { ShopLink } from "@/components/shop-link";
import { BmxBunnyHopSteps, KickflipSteps, OllieSteps } from "@/components/trick-steps/presets";

/** Legacy export — styling lives in .prose-skatehub in globals.css */
export const mdxComponents = {
  a: MdxLink,
  ShopLink,
  OllieSteps,
  KickflipSteps,
  BmxBunnyHopSteps,
  h2: (props: ComponentProps<"h2">) => (
    <h2 {...props} className="font-display mt-12 scroll-mt-24 text-3xl uppercase tracking-wide text-[var(--text)] first:mt-0" />
  ),
  h3: (props: ComponentProps<"h3">) => <h3 {...props} className="mt-8 text-xl font-bold text-[var(--lime)]" />,
  p: (props: ComponentProps<"p">) => <p {...props} className="mt-4 text-lg leading-relaxed text-[var(--text-muted)]" />,
  ul: (props: ComponentProps<"ul">) => (
    <ul {...props} className="mt-4 list-disc space-y-2 pl-6 text-lg text-[var(--text-muted)]" />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol {...props} className="mt-4 list-decimal space-y-2 pl-6 text-lg text-[var(--text-muted)]" />
  ),
  strong: (props: ComponentProps<"strong">) => <strong {...props} className="font-bold text-[var(--text)]" />,
};

export const guideMdxComponents = mdxComponents;
