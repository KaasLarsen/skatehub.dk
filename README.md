# SkateHub.dk

Danmarks nicheportal for skateboards, BMX, trick-løbehjul og skateparker.

Samme stack og deploy-flow som [vinbot.dk](https://www.vinbot.dk): **Next.js 16** på **Vercel**, indhold i **MDX**, push til GitHub → automatisk deploy.

## Tech stack

- Next.js 16 (App Router)
- TypeScript + Tailwind CSS 4
- MDX via `next-mdx-remote` + `gray-matter`
- Statisk generering af guides og skateparker

## Kom i gang lokalt

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Åbn [http://localhost:3000](http://localhost:3000).

## Indhold

| Mappe | Formål |
|-------|--------|
| `content/guides/` | Købsguides og how-to (50 % + 20 % af strategien) |
| `content/skateparker/` | Skatepark-database med adresse, kort, faciliteter (30 %) |

Ny guide: opret `content/guides/min-artikel.mdx` med frontmatter (se eksisterende filer).

Ny skatepark: opret `content/skateparker/min-park.mdx` med `city`, `region`, `address`, `features`, `difficulty` m.m.

## GitHub + Vercel (samme som vinbot)

### 1. Opret GitHub-repo

```bash
git init
git add .
git commit -m "Initial SkateHub setup"
git branch -M main
git remote add origin git@github.com:DIT-BRUGERNAVN/skatehub.git
git push -u origin main
```

### 2. Forbind Vercel

1. Gå til [vercel.com/new](https://vercel.com/new)
2. Importér GitHub-repoet
3. Framework: **Next.js** (auto-detekteret)
4. Root directory: `/` (standard)
5. Deploy

### 3. Domæne

1. I Vercel → Project → **Settings → Domains**
2. Tilføj `skatehub.dk` og `www.skatehub.dk`
3. Sæt **primary domain** (typisk `www.skatehub.dk`)
4. Opdater DNS hos domæneleverandør efter Vercels anvisning

### 4. Miljøvariabler (Vercel → Settings → Environment Variables)

| Variabel | Eksempel |
|----------|----------|
| `NEXT_PUBLIC_SITE_URL` | `https://www.skatehub.dk` |

Valgfrit senere:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — Google Analytics 4
- `NEXT_PUBLIC_ADSENSE_CLIENT` — Google AdSense

### 5. Daglig workflow

```bash
# Lav ændringer lokalt
npm run dev

# Push → Vercel deployer automatisk
git add .
git commit -m "Tilføj guide: bedste trick-løbehjul"
git push
```

## Projektstruktur

```
app/
  guides/[slug]/     # Købsguides og viden
  skateparker/[slug]/ # Enkelt skatepark
  koebsguides/       # Hub: købsguides
  viden/             # Hub: how-to
  skateparker/       # Hub: park-database
components/          # Header, footer, JSON-LD m.m.
content/           # MDX-indhold
lib/                 # Site-config og content loaders
```

## SEO-plan (kort)

- **50 %** købsguides — affiliate (SkatePro, Blue Tomato m.fl.)
- **30 %** skateparker — unikt differentierende indhold
- **20 %** tricks og vedligeholdelse
- Long-tail fokus: «bedste skateboard til begyndere», «skatepark København», «BMX størrelsesguide»

## Scripts

| Kommando | Beskrivelse |
|----------|-------------|
| `npm run dev` | Lokal udvikling |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
