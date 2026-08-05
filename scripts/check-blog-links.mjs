#!/usr/bin/env node
// Prueft die internen Links im Blog-Content, bevor gebaut wird ("prebuild").
//
// Zwei Fehler, die im Schwesterprojekt real passiert sind und in der Search
// Console erst Wochen spaeter auffielen:
//  1. Falsches Sprachpraefix: DE-Artikel verlinken andere Artikel als
//     /blog/{slug}/, alle anderen Sprachen brauchen /{lang}/blog/{slug}/.
//     Sonst zeigt der Link auf eine URL, die es in der Sprache nicht gibt.
//  2. Fehlender abschliessender Slash: die kanonische Form ist /pfad/. Ohne
//     Slash liefert Vercel einen 308-Hop – und die kanonische URL bekommt
//     keinen einzigen internen Link ab.

import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BLOG_DIR = join(import.meta.dirname, '..', 'src', 'content', 'blog');
const LANGS = ['de', 'en'];

function frontmatterLang(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const fm = match?.[1] ?? '';
  return fm.match(/^lang:\s*['"]?([a-z]{2})['"]?\s*$/m)?.[1] ?? null;
}

function findLinkIssues(raw, lang) {
  const issues = [];
  // Markdown-Links auf /blog/... oder /{lang}/blog/... (mit oder ohne Slash,
  // damit auch die fehlerhafte slashlose Variante erkannt wird).
  const linkRe = /]\((\/(?:[a-z]{2}\/)?blog\/[a-z0-9-]+\/?)\)/g;
  let m;
  while ((m = linkRe.exec(raw))) {
    const target = m[1];
    const prefixMatch = target.match(/^\/([a-z]{2})\/blog\//);
    const targetLang = prefixMatch ? prefixMatch[1] : 'de';
    if (targetLang !== lang) {
      issues.push({
        target,
        expected: lang === 'de' ? '/blog/{slug}/' : `/${lang}/blog/{slug}/`,
        reason: 'falsches Sprachpraefix',
      });
    }
    if (!target.endsWith('/')) {
      issues.push({
        target,
        expected: `${target}/`,
        reason: 'fehlender abschliessender Slash (canonical-Form)',
      });
    }
  }

  // Uebrige interne Links (Formate-Seite, Feature-Seiten, Rechtsseiten):
  // ebenfalls nur in der Slash-Form.
  const otherRe = /]\((\/(?!.*\/blog\/)[a-z0-9\-/]*[a-z0-9])\)/g;
  while ((m = otherRe.exec(raw))) {
    issues.push({
      target: m[1],
      expected: `${m[1]}/`,
      reason: 'fehlender abschliessender Slash (canonical-Form)',
    });
  }

  return issues;
}

const files = readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
let errorCount = 0;

for (const file of files) {
  const raw = readFileSync(join(BLOG_DIR, file), 'utf-8');
  const lang = frontmatterLang(raw);

  if (!lang || !LANGS.includes(lang)) {
    console.error(`✗ ${file}: fehlendes oder unbekanntes "lang"-Frontmatter-Feld`);
    errorCount++;
    continue;
  }

  for (const issue of findLinkIssues(raw, lang)) {
    console.error(
      `✗ ${file} (lang: ${lang}): interner Link "${issue.target}" – ${issue.reason}, erwartet: ${issue.expected}`,
    );
    errorCount++;
  }
}

if (errorCount > 0) {
  console.error(
    `\n${errorCount} fehlerhafte(r) interne(r) Link(s). Nicht umgehen – ` +
      'die Ursache liegt im Content, nicht im Guard.',
  );
  process.exit(1);
}

console.log(`✓ Interne Blog-Links geprueft: ${files.length} Dateien, keine Fehler.`);
