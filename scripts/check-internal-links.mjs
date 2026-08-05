#!/usr/bin/env node
// Prueft jeden internen Link im fertig gebauten HTML. Laeuft per "postbuild".
//
// Warum das ein eigener Guard ist: Im Schwesterprojekt lagen Canonical-Tag und
// Sitemap richtig, der Fehler steckte ausschliesslich in den internen Links –
// sie zeigten auf die slashlose Variante. Vercel liefert dann per 308 um, und
// die kanonische URL bekommt keinen einzigen internen Link ab. In der Search
// Console tauchte das als "Gefunden – zurzeit nicht indexiert" und "Duplikat"
// auf, ohne dass irgendein Meta-Tag falsch gewesen waere.
//
// Geprueft wird deshalb:
//  1. Interne Links enden auf "/" (kanonische Form, kein Redirect-Hop).
//  2. Das Ziel existiert im Build (kein interner 404).
//  3. Sprachpraefix: eine /en/-Seite verlinkt keine DE-Seite ohne Praefix
//     (Ausnahme: der bewusste Sprachwechsler im Footer).

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';

const DIST = join(import.meta.dirname, '..', 'dist', 'client');

if (!existsSync(DIST)) {
  console.error(`✗ ${DIST} fehlt – erst "npm run build" ausfuehren.`);
  process.exit(1);
}

function collect(dir, pages = new Map(), assets = new Set()) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) collect(full, pages, assets);
    else if (entry.name === 'index.html') {
      const rel = relative(DIST, dirname(full)).split('\\').join('/');
      pages.set(rel === '' ? '/' : `/${rel}/`, full);
    } else {
      assets.add(`/${relative(DIST, full).split('\\').join('/')}`);
    }
  }
  return { pages, assets };
}

const { pages, assets } = collect(DIST);
const errors = [];

// Der Sprachwechsler im Footer verlinkt bewusst quer ueber die Sprachen.
const LANGUAGE_SWITCH = new Set(['/', '/en/']);

for (const [url, file] of pages) {
  const html = readFileSync(file, 'utf-8');
  const pageLang = url.startsWith('/en/') || url === '/en/' ? 'en' : 'de';

  for (const m of html.matchAll(/<a\s[^>]*href="(\/[^"#]*)(#[^"]*)?"/g)) {
    const href = m[1];
    if (href.startsWith('//')) continue; // protokollrelative externe URL
    if (assets.has(href)) continue; // Datei-Link (robots.txt, og.png, ...)
    if (href === '') continue;

    if (!href.endsWith('/')) {
      errors.push(`${url}: "${href}" ohne abschliessenden Slash (kanonische Form ist "${href}/")`);
      continue;
    }
    if (!pages.has(href)) {
      errors.push(`${url}: "${href}" existiert nicht im Build (interner 404)`);
      continue;
    }
    const targetLang = href.startsWith('/en/') ? 'en' : 'de';
    if (targetLang !== pageLang && !LANGUAGE_SWITCH.has(href)) {
      errors.push(
        `${url} (${pageLang}): verlinkt "${href}" (${targetLang}) – Sprachpraefix fehlt oder ist falsch`,
      );
    }
  }
}

if (errors.length) {
  console.error(`\n✗ ${errors.length} Problem(e) bei internen Links:\n`);
  for (const e of errors.slice(0, 40)) console.error(`  ${e}`);
  if (errors.length > 40) console.error(`  ... und ${errors.length - 40} weitere`);
  console.error(
    '\nInterne Links muessen exakt die kanonische URL treffen – sonst zeigt die\n' +
      'Verlinkung auf eine Redirect-Variante und die kanonische Seite steht ohne\n' +
      'eingehende Links da.\n',
  );
  process.exit(1);
}

console.log(`✓ Interne Links OK – ${pages.size} Seiten geprueft`);
