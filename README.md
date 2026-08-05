# spurlos-site

Marketing-Website für **Spurlos: Metadaten löschen** (iOS). Astro 5 mit SSR,
Deutsch und Englisch, Deployment auf Vercel.

Aufgebaut nach demselben Muster wie das Schwesterprojekt `roster-site` –
insbesondere beim SEO/GEO-Fundament (Trailing Slash, hreflang, Sitemap,
AI-Crawler) und bei den Build-Guards, die verhindern, dass SEO-Fehler
überhaupt live gehen.

## Befehle

```bash
npm run dev      # Dev-Server auf http://localhost:4321
npm run build    # prebuild-Guard → Build → postbuild-Guards
npm run preview  # gebauten Stand lokal ansehen
```

`npm run build` läuft nie ohne Prüfungen:

| Phase       | Script                        | Prüft |
| ----------- | ----------------------------- | ----- |
| `prebuild`  | `check-blog-links.mjs`        | Sprachpräfix und Trailing Slash in Markdown-Links |
| `postbuild` | `stamp-sitemap-lastmod.mjs`   | `lastmod` im `sitemap-index.xml` auf das Commit-Datum |
| `postbuild` | `check-internal-links.mjs`    | jeder interne Link im HTML: Slash-Form, Ziel existiert, richtiges Sprachpräfix |
| `postbuild` | `check-hreflang.mjs`          | hreflang: keine 404-Ziele, Selbstreferenz, Reziprozität, Sitemap = HTML |

Schlägt einer davon fehl, bricht der Build ab. Nicht umgehen – die Ursache
liegt dann im Content oder in einer Seite, nicht im Guard.

## Wo was liegt

```
src/config/site.ts       Kontaktdaten, App-Store-URL, Stand-Datum, Website-Merkmale
src/config/home.ts       kompletter Text der Startseite (de + en)
src/config/features.ts   Funktionsbeschreibungen (de + en) + Icons
src/config/formats.ts    Formatliste, gespiegelt aus dem FormatCatalog der App
src/i18n/ui.ts           Navigation, Footer, Blog-Strings
src/i18n/formatsPath.ts  übersetzte Slugs der Formate-Seite
src/i18n/slugAlternates.ts  HREFLANG-Map + Alternates für übersetzte Slugs
src/content/blog/        Blog-Artikel, ein File pro Sprache, gepaart via translationKey
scripts/                 die vier Guards
```

## Regeln, die diesem Projekt zugrunde liegen

**Trailing Slash.** Kanonisch ist `/pfad/`. `trailingSlash: 'always'` sorgt für
308-Redirects auf Vercel und für 404s im Dev-Server, wenn ein interner Link die
slashlose Form nutzt. Jeder `<a href>`, jeder Markdown-Link und jedes `href` in
einer Config-Datei nutzt die Slash-Form.

**Beide Sprachen gleichzeitig.** Inhalte liegen als Objekt pro Sprache in
`src/config/*.ts`, die Seiten selbst enthalten keinen Fließtext. Rechtstexte
stehen in einer Datei mit beiden Fassungen nebeneinander. Wer eine Sprache
ändert, sieht die andere.

**Übersetzte Slugs brauchen explizite `alternates`.** Blog-Artikel (über
`translationKey`) und die Formate-Seite (über `FORMATS_SLUG`) übergeben ihre
hreflang-Alternates selbst an `BaseLayout`. Der Default dort hängt stur
`/{lang}` vor den aktuellen Pfad – bei übersetztem Slug wären das 404s.
`check-hreflang.mjs` fängt genau das ab.

**Die HREFLANG-Map existiert zweimal** – in `astro.config.mjs` (Sitemap) und in
`src/i18n/slugAlternates.ts` (HTML). Beide müssen identisch bleiben; der
postbuild-Guard vergleicht das Ergebnis.

**Rechtsseiten sind `noindex` und stehen nicht in der Sitemap.** Beides zugleich
wäre ein widersprüchliches Signal.

**Vor neuen Blog-Themen:** Bestand auf Slug- und Keyword-Überschneidung prüfen
(`ls src/content/blog/`, `grep translationKey`). Ein bestehender Artikel wird
erweitert statt ein zweiter zum selben Thema angelegt.

## Noch offen

- **Domain.** `SITE` in `astro.config.mjs`, `ORIGIN` in den beiden Guard-Scripts,
  die Sitemap-Zeile in `public/robots.txt` und die Links in `public/llms.txt`
  stehen auf `https://spurlosapp.com`. Falls die Domain anders lautet, an diesen
  Stellen ändern.
- **App-Store-URL.** `app.appStoreUrl` in `src/config/site.ts` ist `null`;
  Header, Hero, Feature-Seiten und JSON-LD zeigen deshalb „Bald im App Store"
  ohne Link. Sobald die App live ist, dort die URL eintragen – alles andere
  schaltet automatisch um. Auch `public/llms.txt` erwähnt den Status.
- **Support-Adresse.** Die Website nennt `support@spurlosapp.com`. In der App
  steht in `SpurlosConfig.supportEmail` noch `support@example.com` – vor dem
  Release angleichen.
- Build-Warnung `Astro.request.headers was used …` ist erwartet, siehe Kommentar
  in `src/middleware.ts`.

## Deployment

GitHub-Repo mit Vercel verbinden, Build-Command `npm run build`. Der
Vercel-Adapter ist bereits konfiguriert (`edgeMiddleware: true`, nötig damit die
Spracherkennung auch für die prerenderten Seiten läuft). Danach die Domain in
Vercel eintragen und DNS umlegen.
