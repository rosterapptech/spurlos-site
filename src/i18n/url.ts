/**
 * Haengt einen abschliessenden Slash an, falls noch nicht vorhanden.
 * Astros directory-Build (und damit auch die generierte Sitemap) liefert Seiten
 * immer mit abschliessendem Slash aus – canonical/hreflang/Breadcrumb-URLs
 * muessen dasselbe Format nutzen, sonst widersprechen sie sich.
 */
export function withSlash(path: string): string {
  return path.endsWith('/') ? path : `${path}/`;
}
