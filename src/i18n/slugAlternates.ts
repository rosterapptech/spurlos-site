import type { Lang } from './ui';
import { withSlash } from './url';

/**
 * hreflang-Wert pro Sprache – die eine Quelle fuers gesamte Projekt.
 * Muss identisch zu HREFLANG in astro.config.mjs sein (Sitemap), sonst nennen
 * HTML und Sitemap fuer dieselbe URL verschiedene Werte.
 *
 * Bewusst ohne Laendercode: die Inhalte richten sich an alle Sprecher, nicht an
 * ein Land ("de" deckt DE/AT/CH ab, "de-DE" nur Deutschland).
 */
export const HREFLANG: Record<Lang, string> = {
  de: 'de',
  en: 'en',
};

export const LANG_ORDER: Lang[] = ['de', 'en'];

/**
 * Baut hreflang-Alternates fuer Seiten mit pro Sprache uebersetztem Slug
 * (z.B. die Formate-Landingpage).
 *
 * Ohne diesen Helper greift der Default in BaseLayout.astro und haengt stur
 * `/{lang}` vor den Pfad der aktuellen Sprache – bei uebersetzten Slugs zeigt
 * der hreflang-Link dann auf eine 404 (z.B. /en/unterstuetzte-formate/ statt
 * /en/supported-formats/). `path` muss die URL fuer eine Sprache liefern, also
 * z.B. formatsPath.
 */
export function slugAlternates(
  path: (lang: Lang) => string,
  site: URL,
): { hreflang: string; href: string }[] {
  const href = (lang: Lang) => new URL(withSlash(path(lang)), site).href;

  const alternates = LANG_ORDER.map((lang) => ({
    hreflang: HREFLANG[lang],
    href: href(lang),
  }));

  // x-default → deutsche Version (gleiche Konvention wie beim Blog).
  alternates.push({ hreflang: 'x-default', href: href('de') });

  return alternates;
}
