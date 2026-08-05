// Zentrale Quelle fuer Kontaktdaten und technische Merkmale der Website.
// Impressum und Datenschutz importieren von hier – einmal aendern, alle Seiten
// ziehen nach (in beiden Sprachen).

export const contact = {
  name: 'Elias Wilkening',
  company: 'Slowcraft',
  street: 'Zur Wassermühle 18',
  city: '27777 Ganderkesee',
  country: 'Deutschland',
  email: 'support@spurlosapp.com',
  phone: '+49 152 25393437',
  ustId: 'DE334938867',
} as const;

// App-Eckdaten. Die App ist noch nicht veroeffentlicht: sobald sie im App Store
// steht, hier die URL eintragen – Header, Hero, Closing-CTA und JSON-LD lesen
// alle diesen einen Wert und schalten dann automatisch von "bald verfuegbar"
// auf einen echten Link um.
export const app = {
  name: 'Spurlos',
  fullName: 'Spurlos: Metadaten löschen',
  /** null = noch nicht veroeffentlicht. Sonst die App-Store-Produkt-URL. */
  appStoreUrl: null as string | null,
  /** Einmalkauf, kein Abo (StoreKit: de.eliasstudios.spurlos.pro). */
  proPrice: '6,99 €',
  proPriceEn: '€6.99',
  proPriceValue: '6.99',
  currency: 'EUR',
} as const;

// Stand-Datum der Rechtstexte. Bewusst eine Konstante und kein Build-Datum:
// "Stand" heisst "zuletzt inhaltlich geaendert" – ein Datum, das bei jedem
// Deploy weiterspringt, behauptet Aenderungen, die es nicht gab. Beim Aendern
// eines Rechtstexts hier mitziehen, in allen Sprachen gleichzeitig.
export const legalUpdated = {
  iso: '2026-08-05',
  de: '5. August 2026',
  en: '5 August 2026',
} as const;

// Technische Merkmale der Website – dieses Objekt aendern, wenn Dienste dazu-
// kommen oder wegfallen. Die Datenschutzseite rendert ihre Abschnitte anhand
// dieser Werte, statt den Text in jeder Sprachdatei zu suchen.
export const websiteFeatures = {
  // Hosting-Anbieter, erscheint im Server-Log-Abschnitt der Datenschutzseite.
  // null = noch nicht entschieden.
  hosting: 'Vercel' as string | null,

  // Analyse-Tool, z.B. 'Plausible', 'Fathom', 'Vercel Analytics'.
  // null = keine Analyse (Abschnitt entfaellt).
  analytics: 'Vercel Analytics' as string | null,

  // Sitzt Hosting/Analyse ausserhalb der EU (Vercel = USA)?
  // true rendert den Pflichtabschnitt zur Drittlandsuebermittlung (Art. 44 ff.).
  thirdCountryTransfer: true,

  // Cookie-Consent / Cookie-Banner.
  cookies: false,

  // Schriften von einem externen CDN (z.B. Google Fonts)?
  externalFonts: false,

  // Kontaktformular auf der Website?
  contactForm: false,

  // Newsletter oder Mailingliste?
  newsletter: false,
} as const;

export type WebsiteFeatures = typeof websiteFeatures;
