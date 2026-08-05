import { defineMiddleware } from 'astro:middleware';
import type { Lang } from './i18n/ui';
import { FORMATS_SLUG } from './i18n/formatsPath';

const SUPPORTED: Lang[] = ['de', 'en'];
const DEFAULT: Lang = 'de'; // Fallback fuer nicht unterstuetzte Sprachen

function detectLang(header: string | null): Lang {
  if (!header) return DEFAULT;
  for (const tag of header.split(',')) {
    const code = tag.split(';')[0].trim().slice(0, 2).toLowerCase() as Lang;
    if (SUPPORTED.includes(code)) return code;
  }
  return DEFAULT;
}

export const onRequest = defineMiddleware(async (ctx, next) => {
  const { pathname } = new URL(ctx.request.url);

  // Statische Assets ueberspringen
  if (pathname.startsWith('/_') || pathname.includes('.')) return next();

  // Bereits auf einer nicht-deutschen Sprachversion → nichts tun
  const nonDeLangs = SUPPORTED.filter((l) => l !== 'de');
  const alreadyLocalized = nonDeLangs.some(
    (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
  );
  if (alreadyLocalized) return next();

  // Blog-Artikel-Slugs sind sprachspezifisch → niemals umleiten
  // (DE-Slugs existieren nicht unter /en/blog/, EN-Slugs nicht unter /blog/)
  if (pathname.match(/^\/blog\/.+/)) return next();

  // Feature-Detailseiten sind vorgerendert (statisch) → keine Sprach-
  // Weiterleitung. Verhindert zudem, dass die Middleware beim Prerender
  // unnoetig Request-Header liest.
  if (pathname.match(/^\/features\/.+/)) return next();

  // Die Formate-Seite hat pro Sprache einen eigenen Slug (wie der Blog) →
  // niemals umleiten, sonst landet ein EN-Browser auf
  // /en/unterstuetzte-formate/ (falscher Slug, 404) statt /en/supported-formats/.
  // (trailingSlash: 'always' → der Pfad kommt normalerweise mit Slash an, die
  // slashlose Variante wird davor schon per 308 umgeleitet.)
  if (pathname.replace(/\/$/, '') === `/${FORMATS_SLUG.de}`) return next();

  // Hinweis zum Build-Log: Astro warnt hier ("Astro.request.headers was used
  // when rendering the route ..."), weil die Startseite und die Rechtsseiten
  // prerendert werden und beim Build keine echten Header existieren. Das ist
  // erwartet – dort sind die Header leer, detectLang faellt auf 'de' zurueck,
  // es wird nicht umgeleitet. Nicht per ctx.isPrerendered "wegoptimieren":
  // dieses Flag ist auch zur Laufzeit true, die Spracherkennung waere dann fuer
  // genau die statischen Seiten tot, fuer die edgeMiddleware existiert.

  // Cookie hat Vorrang (wenn der User die Sprache manuell gewaehlt hat)
  const cookieLang = ctx.cookies.get('spurlos-lang')?.value as Lang | undefined;
  const lang =
    cookieLang && SUPPORTED.includes(cookieLang)
      ? cookieLang
      : detectLang(ctx.request.headers.get('accept-language'));

  // Deutsch → keine Weiterleitung noetig
  if (lang === 'de') return next();

  // Zur erkannten Sprachversion weiterleiten
  const target = pathname === '/' ? `/${lang}/` : `/${lang}${pathname}`;
  return Response.redirect(new URL(target, ctx.url.origin), 302);
});
