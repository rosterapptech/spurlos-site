import type { CollectionEntry } from 'astro:content';
import type { Lang } from './ui';
import { withSlash } from './url';
import { HREFLANG, LANG_ORDER as ORDER } from './slugAlternates';

type Post = CollectionEntry<'blog'>;

/** URL-Pfad eines Artikels: DE ohne Praefix, alle anderen mit /{lang}. */
function postPath(post: Post): string {
  return withSlash(
    post.data.lang === 'de' ? `/blog/${post.id}` : `/${post.data.lang}/blog/${post.id}`,
  );
}

/**
 * Baut hreflang-Alternates fuer einen Blog-Artikel anhand des `translationKey`.
 * Blog-Slugs unterscheiden sich pro Sprache, deshalb darf hreflang nicht stur
 * `/${lang}${path}` verwenden – sonst zeigen die Verweise auf nicht existente
 * URLs. Nur tatsaechlich vorhandene Uebersetzungen werden verlinkt.
 */
export function blogAlternates(
  allPosts: Post[],
  post: Post,
  site: URL,
): { hreflang: string; href: string }[] {
  const key = post.data.translationKey;
  const related = key ? allPosts.filter((p) => p.data.translationKey === key) : [post];

  const byLang = new Map<Lang, Post>(related.map((p) => [p.data.lang as Lang, p]));

  const href = (p: Post) => new URL(postPath(p), site).href;

  const alternates = ORDER.filter((l) => byLang.has(l)).map((l) => ({
    hreflang: HREFLANG[l],
    href: href(byLang.get(l)!),
  }));

  // x-default → deutsche Version, sonst der Artikel selbst.
  alternates.push({ hreflang: 'x-default', href: href(byLang.get('de') ?? post) });

  return alternates;
}
