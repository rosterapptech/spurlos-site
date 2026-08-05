import { t, type Lang } from './ui';
import { withSlash } from './url';
import { formatsPath } from './formatsPath';

const homeUrl = (lang: Lang) => (lang === 'de' ? '/' : `/${lang}/`);
const blogUrl = (lang: Lang) => withSlash(lang === 'de' ? '/blog' : `/${lang}/blog`);
const featuresUrl = (lang: Lang) => (lang === 'de' ? '/#features' : `/${lang}/#features`);

function list(site: URL, items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: new URL(it.path, site).href,
    })),
  };
}

/** BreadcrumbList-Node (ohne @context, fuer Einbettung in @graph). */
export function blogBreadcrumb(lang: Lang, title: string, id: string, site: URL) {
  const tr = t(lang);
  const path = withSlash(lang === 'de' ? `/blog/${id}` : `/${lang}/blog/${id}`);
  return list(site, [
    { name: 'Spurlos', path: homeUrl(lang) },
    { name: tr('nav.blog'), path: blogUrl(lang) },
    { name: title, path },
  ]);
}

/** BreadcrumbList-Node (ohne @context, fuer Einbettung in @graph). */
export function featureBreadcrumb(lang: Lang, name: string, slug: string, site: URL) {
  const tr = t(lang);
  const path = withSlash(lang === 'de' ? `/features/${slug}` : `/${lang}/features/${slug}`);
  return list(site, [
    { name: 'Spurlos', path: homeUrl(lang) },
    { name: tr('nav.features'), path: featuresUrl(lang) },
    { name, path },
  ]);
}

/** BreadcrumbList-Node (ohne @context, fuer Einbettung in @graph). */
export function formatsBreadcrumb(lang: Lang, name: string, site: URL) {
  return list(site, [
    { name: 'Spurlos', path: homeUrl(lang) },
    { name, path: withSlash(formatsPath(lang)) },
  ]);
}
