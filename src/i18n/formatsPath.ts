import type { Lang } from './ui';

// Lokalisierte Slugs fuer die Formate-Uebersicht. DE ohne Praefix, alle anderen
// mit /{lang} – gleiche Konvention wie beim Blog. Diese Map wird zusaetzlich
// von astro.config.mjs aus der Quelle gelesen (Sitemap-Alternates), deshalb:
// einfache Anfuehrungszeichen und ein Eintrag pro Zeile beibehalten.
export const FORMATS_SLUG: Record<Lang, string> = {
  de: 'unterstuetzte-formate',
  en: 'supported-formats',
};

// Mit abschliessendem Slash – muss zur canonical-/Sitemap-Form passen, sonst
// zeigen interne Links auf eine Nicht-Canonical-Variante (308-Hop).
export function formatsPath(lang: Lang): string {
  return lang === 'de' ? `/${FORMATS_SLUG.de}/` : `/${lang}/${FORMATS_SLUG[lang]}/`;
}
