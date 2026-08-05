// @ts-check
import { readFileSync, readdirSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';

const SITE = 'https://spurlosapp.com';

// hreflang-Codes – eine einzige Quelle fuer die Sitemap-i18n UND die
// Alternates unten. Muss identisch zu den <link rel="alternate">-Tags im HTML
// sein (src/i18n/slugAlternates.ts), sonst nennen Sitemap und Seite fuer
// dieselbe URL unterschiedliche hreflang-Werte.
//
// Bewusst ohne Laendercode: die Inhalte richten sich an alle Sprecher, nicht an
// ein Land ("de" deckt DE/AT/CH ab, "de-DE" nur Deutschland).
const HREFLANG = {
  de: 'de',
  en: 'en',
};

const BLOG_DIR = './src/content/blog';

/** Alle Blog-Posts einmalig einlesen: Pfad, Sprache, Datum, translationKey. */
function readBlogPosts() {
  return readdirSync(BLOG_DIR)
    .filter((file) => /\.(md|mdx)$/.test(file))
    .map((file) => {
      const fm = readFileSync(`${BLOG_DIR}/${file}`, 'utf8').split('---')[1] ?? '';
      const lang = fm.match(/^lang:\s*'?(\w+)'?/m)?.[1] ?? 'de';
      return {
        lang,
        path: `${lang === 'de' ? '' : `/${lang}`}/blog/${file.replace(/\.(md|mdx)$/, '')}/`,
        date:
          fm.match(/^updatedDate:\s*'?(\d{4}-\d{2}-\d{2})'?/m)?.[1] ??
          fm.match(/^pubDate:\s*'?(\d{4}-\d{2}-\d{2})'?/m)?.[1],
        translationKey: fm.match(/^translationKey:\s*'?([\w-]+)'?/m)?.[1],
      };
    });
}

const BLOG_POSTS = readBlogPosts();

// hreflang-Alternates fuer Blog-Posts in der Sitemap.
//
// Die i18n-Option von @astrojs/sitemap paart Sprachversionen ueber identische
// Pfade (/blog/x/ <-> /en/blog/x/). Blog-Slugs sind aber uebersetzt, deshalb
// findet sie kein Gegenstueck und liefert die Artikel ohne Alternates aus – die
// Sitemap sagt Google dann nichts darueber, dass die Sprachversionen
// zusammengehoeren. Hier bauen wir die Paare ueber den translationKey (gleiche
// Logik wie src/i18n/blogAlternates.ts fuers HTML).
function buildBlogAlternatesMap() {
  /** @type {Map<string, { lang: string, url: string }[]>} */
  const map = new Map();
  /** @type {Map<string, typeof BLOG_POSTS>} */
  const clusters = new Map();
  for (const post of BLOG_POSTS) {
    if (!post.translationKey) continue;
    const cluster = clusters.get(post.translationKey) ?? [];
    cluster.push(post);
    clusters.set(post.translationKey, cluster);
  }
  for (const cluster of clusters.values()) {
    // Ein Artikel ohne Uebersetzung braucht keine Alternates – ein einzelner
    // Self-Verweis ist fuer Google kein Signal, nur Ballast in der Sitemap.
    if (cluster.length < 2) continue;
    const links = cluster
      .filter((p) => HREFLANG[p.lang])
      .map((p) => ({ lang: HREFLANG[p.lang], url: new URL(p.path, SITE).href }));
    // x-default → deutsche Version (identisch zum <link>-Tag im HTML).
    const de = cluster.find((p) => p.lang === 'de');
    if (de) links.push({ lang: 'x-default', url: new URL(de.path, SITE).href });
    for (const post of cluster) map.set(post.path, links);
  }
  return map;
}

// Seiten mit uebersetztem Slug ausserhalb des Blogs (Formate-Landingpage).
// Die Slug-Maps liegen in TypeScript und lassen sich hier nicht importieren,
// deshalb werden sie aus der Quelle gelesen – so gibt es weiterhin genau eine
// Definition. Fehlt eine Sprache, bricht der Build ab, statt eine lueckenhafte
// Sitemap auszuliefern.
function readSlugMap(file, constName) {
  const src = readFileSync(file, 'utf8');
  const body = src.match(new RegExp(`${constName}[^=]*=\\s*\\{([^}]*)\\}`))?.[1];
  const map = Object.fromEntries(
    [...(body ?? '').matchAll(/(\w+):\s*'([^']+)'/g)].map((m) => [m[1], m[2]]),
  );
  const missing = Object.keys(HREFLANG).filter((l) => !map[l]);
  if (missing.length) {
    throw new Error(
      `${constName} aus ${file}: Slug fehlt fuer ${missing.join(', ')} – ` +
        'ohne vollstaendige Map waere die hreflang-Angabe in der Sitemap lueckenhaft.',
    );
  }
  return map;
}

/**
 * Alternates fuer eine Seitengruppe mit uebersetztem Slug. Ohne das paart
 * @astrojs/sitemap ueber identische Pfade – bei uebersetzten Slugs findet sie
 * gar kein oder (bei zufaellig gleichem Slug) ein falsches Gegenstueck.
 */
function slugPageAlternates(slugs) {
  const path = (lang) => (lang === 'de' ? `/${slugs.de}/` : `/${lang}/${slugs[lang]}/`);
  const links = Object.keys(HREFLANG).map((lang) => ({
    lang: HREFLANG[lang],
    url: new URL(path(lang), SITE).href,
  }));
  links.push({ lang: 'x-default', url: new URL(path('de'), SITE).href });
  return new Map(Object.keys(HREFLANG).map((lang) => [path(lang), links]));
}

const PAGE_ALTERNATES = new Map([
  ...buildBlogAlternatesMap(),
  ...slugPageAlternates(readSlugMap('./src/i18n/formatsPath.ts', 'FORMATS_SLUG')),
]);

// lastmod pro Pfad aus dem Blog-Frontmatter (updatedDate vor pubDate).
// Blog-Index und Homepage jeder Sprache erben das Datum des neuesten Posts, da
// beide dessen Inhalte listen. Alle anderen Seiten bekommen bewusst kein
// lastmod – ein Fake-Datum (z.B. Buildzeit) wuerde Google das Signal entwerten.
function buildLastmodMap() {
  /** @type {Map<string, string>} */
  const map = new Map();
  /** @type {Record<string, string>} */
  const newestPerLang = {};
  for (const { lang, path, date } of BLOG_POSTS) {
    if (!date) continue;
    map.set(path, date);
    if (!newestPerLang[lang] || date > newestPerLang[lang]) newestPerLang[lang] = date;
  }
  for (const [lang, date] of Object.entries(newestPerLang)) {
    const prefix = lang === 'de' ? '' : `/${lang}`;
    map.set(`${prefix}/blog/`, date);
    map.set(lang === 'de' ? '/' : `/${lang}/`, date);
  }
  return map;
}

const LASTMOD = buildLastmodMap();

export default defineConfig({
  site: SITE,
  output: 'server',
  // Jede Seite ist unter genau EINER URL erreichbar (mit abschliessendem
  // Slash). Der Vercel-Adapter uebernimmt das in die Build-Output-Config,
  // wodurch /blog/foo per 308 auf /blog/foo/ umgeleitet wird. Ohne diese
  // Einstellung liefert Vercel beide Varianten mit 200 aus – Google crawlt dann
  // doppelt so viele URLs wie es Seiten gibt und halbiert das Crawl-Budget.
  trailingSlash: 'always',
  // edgeMiddleware: Middleware laeuft auch fuer prerenderte/statische Seiten
  // (sonst wuerde die Spracherkennung fuer die deutschen Hauptseiten nicht mehr
  // greifen, sobald diese statisch ausgeliefert werden).
  adapter: vercel({ edgeMiddleware: true }),
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: 'manual',
  },
  integrations: [
    sitemap({
      // Rechtsseiten sind auf noindex – nicht in die Sitemap aufnehmen, sonst
      // widerspruechliche Signale (crawl me + don't index me).
      filter: (page) =>
        !/\/(datenschutz|impressum|privacy|imprint)\/?$/.test(page) &&
        !page.includes('/appinfo/'),
      serialize(item) {
        const pathname = new URL(item.url).pathname;
        const lastmod = LASTMOD.get(pathname);
        if (lastmod) item.lastmod = new Date(lastmod).toISOString();
        const links = PAGE_ALTERNATES.get(pathname);
        if (links) {
          item.links = links;
        } else if (item.links?.length && !item.links.some((l) => l.lang === 'x-default')) {
          // Seiten mit sprachunabhaengigem Pfad paart die i18n-Option selbst,
          // laesst dabei aber x-default weg. Das HTML setzt es – ohne diesen
          // Zusatz nennen Sitemap und Seite unterschiedliche Cluster.
          const de = item.links.find((l) => l.lang === HREFLANG.de);
          if (de) item.links = [...item.links, { lang: 'x-default', url: de.url }];
        }
        return item;
      },
      i18n: {
        defaultLocale: 'de',
        locales: HREFLANG,
      },
    }),
    mdx(),
  ],
});
