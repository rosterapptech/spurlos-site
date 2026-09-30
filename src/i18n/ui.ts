export const languages = {
  de: 'Deutsch',
  en: 'English',
} as const;

export const defaultLang = 'de';

export const ui = {
  de: {
    'nav.features': 'Funktionen',
    'nav.formats': 'Formate',
    'nav.pricing': 'Preis',
    'nav.blog': 'Blog',
    'nav.cta': 'Im App Store laden',
    'footer.tagline': 'Teilen, ohne sich mitzuteilen.',
    'footer.legal': 'Rechtliches',
    'footer.impressum': 'Impressum',
    'footer.datenschutz': 'Datenschutz',
    'footer.madeby': 'Ein Projekt von Slowcraft.',
    'footer.privacy': 'Alles auf deinem Gerät. Kein Netzwerkcode, kein Konto, kein Tracking.',
    'footer.language': 'Sprache',
    'footer.app': 'App',
    'footer.app.agb': 'AGB',
    'footer.app.privacy': 'Datenschutzerklärung',
    'footer.app.support': 'Support',
    'footer.formats': 'Unterstützte Formate',
    'blog.back': '← Alle Artikel',
    'blog.readmore': 'Weiterlesen →',
    'blog.headline': 'Was Dateien verraten.',
    'blog.lede':
      'Verständlich erklärt: welche Spuren in Fotos, Videos und Dokumenten stecken, wer sie auslesen kann und wie du sie loswirst.',
    'blog.related': 'Verwandte Artikel',
    'home.blog.title': 'Frisch aus dem Blog',
    'home.blog.all': 'Alle Artikel ansehen →',
  },
  en: {
    'nav.features': 'Features',
    'nav.formats': 'Formats',
    'nav.pricing': 'Pricing',
    'nav.blog': 'Blog',
    'nav.cta': 'Download on the App Store',
    'footer.tagline': 'Share without sharing yourself.',
    'footer.legal': 'Legal',
    'footer.impressum': 'Imprint',
    'footer.datenschutz': 'Privacy',
    'footer.madeby': 'A project by Slowcraft.',
    'footer.privacy': 'Everything on your device. No networking code, no account, no tracking.',
    'footer.language': 'Language',
    'footer.app': 'App',
    'footer.app.agb': 'Terms',
    'footer.app.privacy': 'Privacy Policy',
    'footer.app.support': 'Support',
    'footer.formats': 'Supported formats',
    'blog.back': '← All articles',
    'blog.readmore': 'Read more →',
    'blog.headline': 'What your files reveal.',
    'blog.lede':
      'Plain explanations: which traces hide in photos, videos and documents, who can read them, and how to get rid of them.',
    'blog.related': 'Related articles',
    'home.blog.title': 'Fresh from the blog',
    'home.blog.all': 'See all articles →',
  },
} as const;

export type Lang = keyof typeof ui;

export function t(lang: Lang) {
  return function (key: keyof (typeof ui)['de']): string {
    return (ui[lang] as Record<string, string>)[key] ?? ui[defaultLang][key];
  };
}
