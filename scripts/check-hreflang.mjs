#!/usr/bin/env node
// Prueft nach dem Build die hreflang-Signale im ausgelieferten HTML und in der
// Sitemap. Laeuft per "postbuild" automatisch und bricht den Build ab.
//
// Hintergrund: Google waehlt eine eigene kanonische Seite, wenn sich die
// Signale widersprechen ("Duplikat – Google hat eine andere Seite als der
// Nutzer als kanonische Seite bestimmt"). Genau solche Widersprueche fangen die
// Regeln hier ab:
//
//  1. hreflang zeigt auf eine URL, die es nicht gibt (passiert bei Seiten mit
//     uebersetztem Slug, wenn der Default aus BaseLayout greift und stur
//     /{lang} vor den Pfad der aktuellen Sprache haengt).
//  2. hreflang ohne abschliessenden Slash → zeigt auf die 308-Variante statt
//     auf die kanonische URL.
//  3. Cluster ohne Selbstreferenz oder nicht reziprok → Google ignoriert ihn.
//  4. Sitemap und HTML nennen fuer dieselbe URL verschiedene Cluster.

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';

const DIST = join(import.meta.dirname, '..', 'dist', 'client');
const ORIGIN = 'https://spurlosapp.com';

if (!existsSync(DIST)) {
  console.error(`✗ ${DIST} fehlt – erst "npm run build" ausfuehren.`);
  process.exit(1);
}

/** Alle gebauten Seiten als URL-Pfad -> Dateipfad. */
function collectPages(dir, pages = new Map()) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) collectPages(full, pages);
    else if (entry.name === 'index.html') {
      const rel = relative(DIST, dirname(full)).split('\\').join('/');
      pages.set(rel === '' ? '/' : `/${rel}/`, full);
    }
  }
  return pages;
}

const pages = collectPages(DIST);
const errors = [];
const clusters = new Map();

for (const [url, file] of pages) {
  const html = readFileSync(file, 'utf-8');
  const alts = [
    ...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g),
  ].map((m) => ({ lang: m[1], path: m[2].replace(ORIGIN, '') }));
  if (alts.length === 0) continue;

  const canonical = html
    .match(/<link rel="canonical" href="([^"]+)"/)?.[1]
    ?.replace(ORIGIN, '');

  for (const { lang, path } of alts) {
    if (!path.endsWith('/')) {
      errors.push(`${url}: hreflang="${lang}" -> ${path} ohne abschliessenden Slash`);
    } else if (!pages.has(path)) {
      errors.push(`${url}: hreflang="${lang}" -> ${path} existiert nicht (404)`);
    }
  }
  if (canonical && !alts.some((a) => a.path === canonical)) {
    errors.push(`${url}: kein hreflang zeigt auf die eigene kanonische URL`);
  }
  clusters.set(
    url,
    new Set(alts.filter((a) => a.lang !== 'x-default').map((a) => a.path)),
  );
}

for (const [url, cluster] of clusters) {
  for (const other of cluster) {
    if (clusters.has(other) && !clusters.get(other).has(url)) {
      errors.push(`${url}: ${other} verlinkt nicht zurueck (hreflang nicht reziprok)`);
    }
  }
}

// Sitemap gegen HTML abgleichen
const sitemapFile = join(DIST, 'sitemap-0.xml');
if (existsSync(sitemapFile)) {
  const xml = readFileSync(sitemapFile, 'utf-8');
  for (const block of xml.match(/<url>[\s\S]*?<\/url>/g) ?? []) {
    const loc = block.match(/<loc>(.*?)<\/loc>/)?.[1].replace(ORIGIN, '');
    const inSitemap = [...block.matchAll(/hreflang="([^"]+)" href="([^"]+)"/g)]
      .map((m) => `${m[1]} ${m[2].replace(ORIGIN, '')}`)
      .sort();
    if (inSitemap.length === 0) {
      errors.push(`Sitemap ${loc}: keine hreflang-Alternates`);
      continue;
    }
    if (!loc || !pages.has(loc)) continue;
    const inHtml = [
      ...readFileSync(pages.get(loc), 'utf-8').matchAll(
        /<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g,
      ),
    ]
      .map((m) => `${m[1]} ${m[2].replace(ORIGIN, '')}`)
      .sort();
    if (inHtml.join('|') !== inSitemap.join('|')) {
      errors.push(`Sitemap ${loc}: hreflang weicht vom HTML der Seite ab`);
    }
  }
} else {
  errors.push('sitemap-0.xml fehlt im Build-Output');
}

if (errors.length) {
  console.error(`\n✗ ${errors.length} hreflang-Problem(e):\n`);
  for (const e of errors.slice(0, 40)) console.error(`  ${e}`);
  if (errors.length > 40) console.error(`  ... und ${errors.length - 40} weitere`);
  console.error(
    '\nWiderspruechliche hreflang-Signale fuehren dazu, dass Google eine eigene\n' +
      'kanonische Seite waehlt ("Duplikat" in der Search Console).\n' +
      'Seiten mit uebersetztem Slug muessen `alternates` an BaseLayout uebergeben\n' +
      '(siehe src/i18n/slugAlternates.ts).\n',
  );
  process.exit(1);
}

console.log(`✓ hreflang OK – ${pages.size} Seiten, Sitemap deckungsgleich`);
