import type { Lang } from '../i18n/ui';

/**
 * Der gesamte Text der Startseite, pro Sprache. Die Seite selbst
 * (components/HomePage.astro) enthaelt keinen Fliesstext – so kann eine
 * inhaltliche Aenderung nicht versehentlich nur in einer Sprache landen.
 */
export interface HomeCopy {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    lede: string;
    ctaSecondary: string;
    ctaSoon: string;
  };
  trust: string[];
  features: { eyebrow: string; headline: string; lede: string; more: string };
  how: {
    eyebrow: string;
    headline: string;
    steps: { title: string; text: string }[];
  };
  formats: {
    eyebrow: string;
    headline: string;
    lede: string;
    link: string;
    deepLabel: string;
    surfaceLabel: string;
  };
  pricing: {
    eyebrow: string;
    headline: string;
    lede: string;
    freeName: string;
    freePrice: string;
    freeNote: string;
    freeBullets: string[];
    proName: string;
    proPrice: string;
    proNote: string;
    proBullets: string[];
    badge: string;
  };
  faqEyebrow: string;
  faqHeadline: string;
  faqs: { q: string; a: string }[];
  closing: { headline: string; note: string };
}

export const homeCopy: Record<Lang, HomeCopy> = {
  de: {
    meta: {
      title: 'Spurlos – Metadaten aus Fotos, Videos und Dokumenten entfernen',
      description:
        'Spurlos zeigt, welche Metadaten in deinen Dateien stecken – GPS, Namen, Seriennummern – und entfernt sie mit einem Tipp. Ohne Qualitätsverlust, vollständig auf dem iPhone, ohne Konto und ohne Tracking.',
    },
    hero: {
      eyebrow: 'Vollständig lokal · iOS',
      headline: 'Jede Datei verrät mehr,',
      headlineAccent: 'als du siehst.',
      lede:
        'Ein Foto nennt metergenau den Ort, an dem es entstand – oft deine Wohnadresse. Ein Word-Dokument nennt deinen Namen und jeden, der es bearbeitet hat. Spurlos macht diese unsichtbaren Daten sichtbar und entfernt sie mit einem Tipp.',
      ctaSecondary: 'Funktionen ansehen',
      ctaSoon: 'Bald im App Store',
    },
    trust: ['Kein Netzwerkcode', 'Kein Konto', 'Kein Tracking', 'Kein Abo'],
    features: {
      eyebrow: 'Was Spurlos macht',
      headline: 'Erst zeigen, dann entfernen.',
      lede:
        'Bevor irgendetwas gelöscht wird, siehst du, was drinsteckt – und warum es heikel ist. Danach verschwindet es, ohne dass die Datei darunter leidet.',
      more: 'Mehr dazu',
    },
    how: {
      eyebrow: 'In drei Schritten',
      headline: 'Datei rein, saubere Kopie raus.',
      steps: [
        {
          title: 'Datei wählen',
          text:
            'Aus Fotos, aus Dateien oder direkt über das Teilen-Menü einer beliebigen App. Die App muss dafür nicht offen sein.',
        },
        {
          title: 'Funde ansehen',
          text:
            'Spurlos listet jedes gefundene Feld auf, zeigt den Aufnahmeort auf einer Karte und erklärt in einem Satz, warum ein Fund heikel ist.',
        },
        {
          title: 'Kopie bereinigen',
          text:
            'Ein Tipp – und du bekommst eine saubere Kopie. Das Original bleibt unverändert liegen, das Bild wird nicht neu kodiert.',
        },
      ],
    },
    formats: {
      eyebrow: 'Formate',
      headline: 'Von HEIC bis Keynote.',
      lede:
        'Bilder, Video, Audio, PDF, Office, OpenDocument und iWork werden bis in die Metadaten hinein gereinigt. Alle übrigen Formate nimmt Spurlos ebenfalls an und entfernt zumindest die Spuren, die das Dateisystem anhängt.',
      link: 'Alle unterstützten Formate ansehen →',
      deepLabel: 'Tiefenreinigung',
      surfaceLabel: 'Dateisystem-Spuren',
    },
    pricing: {
      eyebrow: 'Preis',
      headline: 'Einmal kaufen. Kein Abo, niemals.',
      lede:
        'Die Analyse ist für alle Formate kostenlos und unbegrenzt – auch für Dateien, die du gar nicht bereinigen willst.',
      freeName: 'Kostenlos',
      freePrice: '0 €',
      freeNote: 'Ohne Konto, ohne Zeitlimit.',
      freeBullets: [
        'Unbegrenzte Analyse aller Formate',
        'GPS-Position auf der Karte',
        'Fotos bereinigen',
        'Teilen-Menü nutzbar',
      ],
      proName: 'Spurlos Pro',
      proPrice: '6,99 €',
      proNote: 'Einmalkauf über den App Store.',
      proBullets: [
        'PDF- und Office-Dokumente bereinigen',
        'Videos und Audiodateien bereinigen',
        'Stapelverarbeitung vieler Dateien',
        'Einzelne Felder behalten, den Rest entfernen',
        'Kurzbefehle & Automation',
      ],
      badge: 'Einmalkauf',
    },
    faqEyebrow: 'FAQ',
    faqHeadline: 'Häufige Fragen',
    faqs: [
      {
        q: 'Was sind Metadaten überhaupt?',
        a: 'Zusatzinformationen, die eine Datei über sich selbst speichert: bei Fotos etwa Aufnahmeort und -zeit, Kamera- und Objektivmodell, Seriennummer und Bearbeitungssoftware; bei Dokumenten Autor, Bearbeiter, interne Dateipfade und Zeitstempel. Sie sind im Inhalt nicht sichtbar, lassen sich aber mit jedem Standardwerkzeug auslesen.',
      },
      {
        q: 'Werden meine Dateien irgendwohin hochgeladen?',
        a: 'Nein. Spurlos enthält keinerlei Netzwerkcode – es gibt keine Server, keine Konten, kein Tracking und keine Werbung. Alles passiert auf deinem Gerät.',
      },
      {
        q: 'Leidet die Bildqualität beim Bereinigen?',
        a: 'Nein. Fotos und Videos werden nicht neu kodiert. Spurlos schreibt nur die Metadaten-Blöcke neu, die Bilddaten bleiben Byte für Byte identisch.',
      },
      {
        q: 'Wird mein Original verändert?',
        a: 'Nein. Du bekommst immer eine saubere Kopie, die Ausgangsdatei bleibt unangetastet liegen.',
      },
      {
        q: 'Woher weiß ich, dass wirklich alles weg ist?',
        a: 'Spurlos liest die bereinigte Datei nach dem Vorgang noch einmal komplett ein und meldet Erfolg erst, wenn dabei kein Feld mehr gefunden wird. Bleibt etwas zurück, sagt die App das offen.',
      },
      {
        q: 'Was kostet Spurlos?',
        a: 'Die Analyse aller Formate und das Bereinigen von Fotos sind kostenlos. Spurlos Pro kostet 6,99 € als Einmalkauf – kein Abo – und schaltet PDF/Office, Video/Audio, Stapelverarbeitung, selektives Entfernen und Kurzbefehle frei.',
      },
      {
        q: 'Auf welchen Geräten läuft Spurlos?',
        a: 'Spurlos ist eine native iOS-App für iPhone, gebaut mit SwiftUI. Verfügbar auf Deutsch und Englisch. Eine Android-Version gibt es derzeit nicht.',
      },
      {
        q: 'Kann ich Metadaten auch nur teilweise entfernen?',
        a: 'Ja, mit Spurlos Pro. Du kannst einzelne Felder behalten – etwa die Urheberangabe bei einem Foto, das du veröffentlichst – und alles andere entfernen lassen.',
      },
    ],
    closing: {
      headline: 'Teilen, ohne sich mitzuteilen.',
      note: 'Spurlos erscheint bald im App Store.',
    },
  },
  en: {
    meta: {
      title: 'Spurlos – Remove metadata from photos, videos and documents',
      description:
        'Spurlos shows the metadata hiding in your files — GPS, names, serial numbers — and removes it in one tap. No quality loss, entirely on your iPhone, no account and no tracking.',
    },
    hero: {
      eyebrow: 'Fully on-device · iOS',
      headline: 'Every file says more',
      headlineAccent: 'than you can see.',
      lede:
        'A photo reveals where it was taken down to the meter — often your home address. A Word document names you and everyone who edited it. Spurlos makes this invisible data visible and removes it in one tap.',
      ctaSecondary: 'See the features',
      ctaSoon: 'Coming to the App Store',
    },
    trust: ['No networking code', 'No account', 'No tracking', 'No subscription'],
    features: {
      eyebrow: 'What Spurlos does',
      headline: 'Show first, then remove.',
      lede:
        'Before anything is deleted you see what is inside — and why it matters. Then it disappears, without the file underneath suffering for it.',
      more: 'Read more',
    },
    how: {
      eyebrow: 'Three steps',
      headline: 'File in, clean copy out.',
      steps: [
        {
          title: 'Pick a file',
          text:
            'From Photos, from Files or straight through the share sheet of any app. The app does not even have to be open.',
        },
        {
          title: 'Look at the findings',
          text:
            'Spurlos lists every field it found, shows the capture location on a map and explains in one sentence why a finding matters.',
        },
        {
          title: 'Clean the copy',
          text:
            'One tap and you get a clean copy. The original stays where it was, untouched, and the image is never re-encoded.',
        },
      ],
    },
    formats: {
      eyebrow: 'Formats',
      headline: 'From HEIC to Keynote.',
      lede:
        'Images, video, audio, PDF, Office, OpenDocument and iWork are cleaned all the way into their metadata. Every other format is accepted too, and at least the traces the file system attaches are removed.',
      link: 'See all supported formats →',
      deepLabel: 'Deep clean',
      surfaceLabel: 'File system traces',
    },
    pricing: {
      eyebrow: 'Pricing',
      headline: 'Buy once. No subscription, ever.',
      lede:
        'Analysis is free and unlimited for every format — including files you never intend to clean.',
      freeName: 'Free',
      freePrice: '€0',
      freeNote: 'No account, no time limit.',
      freeBullets: [
        'Unlimited analysis of every format',
        'GPS position on the map',
        'Clean photos',
        'Share sheet included',
      ],
      proName: 'Spurlos Pro',
      proPrice: '€6.99',
      proNote: 'One-time purchase via the App Store.',
      proBullets: [
        'Clean PDF and Office documents',
        'Clean video and audio files',
        'Batch processing of many files',
        'Keep individual fields, remove the rest',
        'Shortcuts & automation',
      ],
      badge: 'One-time',
    },
    faqEyebrow: 'FAQ',
    faqHeadline: 'Frequently asked questions',
    faqs: [
      {
        q: 'What is metadata, exactly?',
        a: 'Extra information a file stores about itself: for photos the capture location and time, camera and lens model, serial number and editing software; for documents the author, editors, internal file paths and timestamps. None of it is visible in the content, but any standard tool can read it.',
      },
      {
        q: 'Are my files uploaded anywhere?',
        a: 'No. Spurlos contains no networking code at all — there are no servers, no accounts, no tracking and no ads. Everything happens on your device.',
      },
      {
        q: 'Does cleaning reduce image quality?',
        a: 'No. Photos and videos are never re-encoded. Spurlos rewrites only the metadata blocks; the image data stays identical, byte for byte.',
      },
      {
        q: 'Is my original modified?',
        a: 'No. You always get a clean copy, and the source file is left untouched.',
      },
      {
        q: 'How do I know everything is really gone?',
        a: 'After cleaning, Spurlos reads the resulting file again in full and only reports success when no field can be found anymore. If something remains, the app says so plainly.',
      },
      {
        q: 'What does Spurlos cost?',
        a: 'Analysing any format and cleaning photos is free. Spurlos Pro is a €6.99 one-time purchase — no subscription — and unlocks PDF/Office, video/audio, batch processing, selective removal and Shortcuts.',
      },
      {
        q: 'Which devices does Spurlos run on?',
        a: 'Spurlos is a native iOS app for iPhone, built with SwiftUI. Available in German and English. There is currently no Android version.',
      },
      {
        q: 'Can I remove metadata only partially?',
        a: 'Yes, with Spurlos Pro. You can keep individual fields — the copyright notice on a photo you are publishing, say — and have everything else removed.',
      },
    ],
    closing: {
      headline: 'Share without sharing yourself.',
      note: 'Spurlos is coming to the App Store soon.',
    },
  },
};
