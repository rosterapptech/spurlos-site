#!/usr/bin/env node
// Korrigiert den <lastmod> im sitemap-index.xml. Laeuft per "postbuild".
//
// Problem: @astrojs/sitemap setzt den Index-lastmod auf getLatestLastmod(items),
// also auf das neueste lastmod der einzelnen URLs. Bei uns kommen die aus dem
// Blog-Frontmatter – aendert sich die Sitemap-Struktur (neue Seite, neue
// hreflang-Cluster), bleibt der Wert trotzdem stehen. Laut sitemaps.org gehoert
// an diese Stelle aber "the time that the corresponding Sitemap file was
// modified". Google entscheidet daran, ob sich ein erneuter Download von
// sitemap-0.xml lohnt.
//
// Warum das Commit-Datum und nicht Date.now(): ein Rebuild desselben Commits
// (Redeploy, Cache-Invalidierung, Preview) ergibt denselben Wert. Sonst wuerde
// jeder Build "Sitemap hat sich geaendert" melden, auch wenn sie identisch ist –
// und ein lastmod, das immer springt, entwertet genau das Signal, das wir hier
// setzen wollen. Die per-URL-lastmods bleiben unberuehrt, sie steuern das
// Neu-Crawlen der einzelnen Seiten und kommen weiter aus dem Frontmatter.

import { execSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(import.meta.dirname, '..');
// Vercel liefert aus .vercel/output/static aus, dist/client ist die Vorstufe –
// beide patchen, sonst weicht das lokal Gepruefte vom Deployten ab.
const TARGETS = [
  join(ROOT, 'dist', 'client', 'sitemap-index.xml'),
  join(ROOT, '.vercel', 'output', 'static', 'sitemap-index.xml'),
].filter(existsSync);

if (TARGETS.length === 0) {
  console.error('✗ sitemap-index.xml nicht gefunden – erst "npm run build" ausfuehren.');
  process.exit(1);
}

function sourceDate() {
  try {
    const iso = execSync('git log -1 --format=%cI', {
      cwd: ROOT,
      stdio: ['ignore', 'pipe', 'ignore'],
    })
      .toString()
      .trim();
    if (iso) return new Date(iso);
  } catch {
    // Kein Git-Kontext (z.B. Tarball-Build) – dann ist die Datei-Mtime das
    // Ehrlichste, was wir ueber "wann wurde die Sitemap geschrieben" wissen.
  }
  return statSync(TARGETS[0]).mtime;
}

const stamp = sourceDate();
let patched = 0;

for (const file of TARGETS) {
  const xml = readFileSync(file, 'utf-8');
  const current = xml.match(/<lastmod>(.*?)<\/lastmod>/)?.[1];
  // Nie rueckwaerts datieren: steht dort schon ein spaeteres Datum (etwa durch
  // einen vorausdatierten Blogpost), bleibt es stehen.
  const next = current && new Date(current) > stamp ? new Date(current) : stamp;
  const out = xml.includes('<lastmod>')
    ? xml.replace(/<lastmod>.*?<\/lastmod>/, `<lastmod>${next.toISOString()}</lastmod>`)
    : xml.replace('</loc>', `</loc><lastmod>${next.toISOString()}</lastmod>`);
  if (out !== xml) {
    writeFileSync(file, out);
    patched++;
  }
}

console.log(
  `✓ sitemap-index lastmod: ${stamp.toISOString()} (${patched}/${TARGETS.length} Datei(en) aktualisiert)`,
);
