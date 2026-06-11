"use client";

import { useState } from "react";

type YouTubeEmbedProps = {
  /** YouTube video ID (11 tegn fra watch?v=...) */
  id: string;
  /** Kort titel vist under afspilleren */
  title: string;
  /** Kanal/kredit — vises tydeligt under videoen */
  channel: string;
  /** Valgfri starttid i sekunder */
  start?: number;
};

function embedSrc(id: string, start?: number): string {
  const url = new URL(`https://www.youtube-nocookie.com/embed/${id}`);
  url.searchParams.set("rel", "0");
  url.searchParams.set("modestbranding", "1");
  if (start != null && start > 0) url.searchParams.set("start", String(start));
  return url.toString();
}

/** YouTube i MDX — indlæses først efter klik (cookie-venligt). */
export function YouTubeEmbed({ id, title, channel, start }: YouTubeEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <figure className="not-prose my-10" aria-label={title}>
      <div className="overflow-hidden border-2 border-[var(--border-strong)] bg-[var(--bg-card)]">
        {!loaded ? (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="group relative block aspect-video w-full cursor-pointer border-0 bg-black p-0 text-left"
            aria-label={`Afspil video: ${title}`}
          >
            <img
              src={thumb}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
              loading="lazy"
            />
            <span className="absolute inset-0 bg-black/35 transition group-hover:bg-black/25" aria-hidden />
            <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[var(--lime)] bg-[color-mix(in_srgb,var(--lime)_90%,#0f0f0f)] text-[#0f0f0f] shadow-lg transition group-hover:scale-105">
                <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-current" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="text-sm font-bold uppercase tracking-wide text-white drop-shadow-md">Afspil video</span>
            </span>
          </button>
        ) : (
          <div className="aspect-video w-full">
            <iframe
              src={embedSrc(id, start)}
              title={title}
              className="h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        )}
      </div>
      <figcaption className="mt-2 space-y-0.5 px-1 text-sm text-[var(--text-muted)]">
        <span className="block font-medium text-[var(--text)]">{title}</span>
        <span className="block text-xs">
          Video: {channel} ·{" "}
          <a
            href={`https://www.youtube.com/watch?v=${id}`}
            className="link-lime"
            target="_blank"
            rel="noopener noreferrer"
          >
            Se på YouTube
          </a>
        </span>
      </figcaption>
    </figure>
  );
}
