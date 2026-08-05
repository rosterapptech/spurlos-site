import type { Lang } from '../i18n/ui';

export type FeatureSlug =
  | 'analysis'
  | 'lossless-cleaning'
  | 'self-check'
  | 'office-deep-clean'
  | 'share-extension'
  | 'automation';

// Slugs sind bewusst in allen Sprachen gleich (kein uebersetzter Slug), damit
// die hreflang-Alternates dem Default in BaseLayout folgen koennen. Nur Seiten
// mit uebersetztem Slug brauchen explizite `alternates` (siehe formatsPath.ts).
export const featureSlugs: FeatureSlug[] = [
  'analysis',
  'lossless-cleaning',
  'self-check',
  'office-deep-clean',
  'share-extension',
  'automation',
];

export interface FeatureContent {
  name: string;
  shortDesc: string;
  longDesc: string;
  bullets: string[];
  /** Nur mit Spurlos Pro (Einmalkauf) nutzbar. */
  pro?: true;
}

const iconAnalysis = `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="9" stroke="#34c489" stroke-width="2"/><path d="M21.5 21.5 29 29" stroke="#34c489" stroke-width="2" stroke-linecap="round"/><path d="M11 15h8M11 11.5h5M11 18.5h6" stroke="#a7e8cb" stroke-width="1.6" stroke-linecap="round"/></svg>`;
const iconLossless = `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="7" width="26" height="20" rx="3" stroke="#34c489" stroke-width="2"/><path d="M4 22l7-6 5 4 5-5 6 6" stroke="#a7e8cb" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="11.5" cy="13" r="2" fill="#34c489"/></svg>`;
const iconSelfCheck = `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 4 6 8.5V17c0 6 4.925 11.5 11 12.8C23.075 28.5 28 23 28 17V8.5L17 4z" stroke="#34c489" stroke-width="2" stroke-linejoin="round"/><path d="m12 17 3.5 3.5L22 14" stroke="#a7e8cb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const iconOffice = `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 4h11l7 7v19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" stroke="#34c489" stroke-width="2" stroke-linejoin="round"/><path d="M19 4v7h7" stroke="#34c489" stroke-width="2" stroke-linejoin="round"/><path d="M11 18h8M11 22h11M11 26h6" stroke="#a7e8cb" stroke-width="1.6" stroke-linecap="round"/></svg>`;
const iconShare = `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 22V5" stroke="#34c489" stroke-width="2" stroke-linecap="round"/><path d="m11 11 6-6 6 6" stroke="#34c489" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 16H6a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V17a1 1 0 0 0-1-1h-2" stroke="#a7e8cb" stroke-width="1.8" stroke-linecap="round"/></svg>`;
const iconAutomation = `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="11" height="11" rx="2.5" stroke="#34c489" stroke-width="2"/><rect x="19" y="19" width="11" height="11" rx="2.5" stroke="#a7e8cb" stroke-width="1.8"/><path d="M19 9.5h6a3 3 0 0 1 3 3v3" stroke="#34c489" stroke-width="1.8" stroke-linecap="round"/><path d="M15 24.5H9a3 3 0 0 1-3-3v-3" stroke="#a7e8cb" stroke-width="1.8" stroke-linecap="round"/></svg>`;

export const featureIcons: Record<FeatureSlug, string> = {
  analysis: iconAnalysis,
  'lossless-cleaning': iconLossless,
  'self-check': iconSelfCheck,
  'office-deep-clean': iconOffice,
  'share-extension': iconShare,
  automation: iconAutomation,
};

export const featureData: Record<Lang, Record<FeatureSlug, FeatureContent>> = {
  de: {
    analysis: {
      name: 'Analyse',
      shortDesc:
        'Sieh zuerst, was drinsteckt: GPS-Position auf einer Karte, Namen, Seriennummern, Gerätedaten – jeder Fund verständlich erklärt.',
      longDesc:
        'Bevor irgendetwas entfernt wird, zeigt Spurlos dir, was deine Datei über dich erzählt. Der Aufnahmeort erscheint als Punkt auf einer echten Karte, nicht als Zahlenkolonne. Neben jedem Fund steht ein Satz, der erklärt, warum er heikel ist – und eine deutliche Warnung, wenn eine Datei dich direkt identifiziert oder lokalisiert. Die Analyse ist für alle Formate kostenlos und unbegrenzt.',
      bullets: [
        'GPS-Position auf einer echten Karte statt als Koordinatenpaar',
        'Namen, Seriennummern, Gerätemodell und Software-Versionen im Klartext',
        'Jeder Fund mit einer verständlichen Erklärung, warum er heikel ist',
        'Deutliche Warnung, wenn eine Datei dich identifiziert oder lokalisiert',
        'Kostenlos und unbegrenzt – für jedes unterstützte Format',
      ],
    },
    'lossless-cleaning': {
      name: 'Bereinigen ohne Qualitätsverlust',
      shortDesc:
        'Fotos und Videos werden nicht neu kodiert. Jedes Pixel bleibt, wie es war – nur die Metadaten verschwinden.',
      longDesc:
        'Viele Werkzeuge entfernen Metadaten, indem sie das Bild neu speichern – und drücken dabei die Qualität. Spurlos schreibt stattdessen nur die Metadaten-Blöcke neu und lässt die Bild- und Videodaten Byte für Byte unangetastet. Dein Original wird dabei nie verändert: Du bekommst immer eine saubere Kopie und behältst die Ausgangsdatei.',
      bullets: [
        'Keine Neukodierung – identische Bild- und Videoqualität',
        'Das Original bleibt unverändert, du bekommst eine saubere Kopie',
        'Bilder, Videos und Audio ohne Umweg über einen Export-Dialog',
        'Dateigröße bleibt nahezu gleich (nur die Metadaten fehlen)',
      ],
    },
    'self-check': {
      name: 'Selbstprüfung',
      shortDesc:
        'Spurlos meldet erst dann Erfolg, wenn es die bereinigte Datei erneut gelesen hat und wirklich nichts mehr findet.',
      longDesc:
        '„Metadaten entfernt" ist eine Behauptung – Spurlos belegt sie. Nach jeder Bereinigung liest die App die erzeugte Datei noch einmal komplett ein und prüft, ob wirklich kein Feld übrig geblieben ist. Erst dann gilt der Vorgang als erfolgreich. Bleibt etwas zurück, sagt die App das offen, statt einen grünen Haken zu zeigen.',
      bullets: [
        'Nachkontrolle: die bereinigte Datei wird erneut vollständig analysiert',
        'Erfolg nur, wenn kein Feld mehr gefunden wird',
        'Ehrliche Rückmeldung, wenn ein Format sich nicht vollständig säubern lässt',
        'Verlauf zeigt, was pro Datei tatsächlich entfernt wurde',
      ],
    },
    'office-deep-clean': {
      name: 'Office-Tiefenreinigung',
      shortDesc:
        'PDF, Word, Excel, PowerPoint: nicht nur der Autor im Dokument-Info-Feld, sondern auch Kommentare, Änderungsverfolgung und interne Pfade.',
      longDesc:
        'Ein Office-Dokument trägt sehr viel mehr mit sich als das Feld „Autor". In Kommentaren und Änderungsverfolgung stehen die Namen aller Bearbeitenden, in den Beziehungsdateien interne Dateipfade vom Rechner, dazu eingebettete Vorschaubilder früherer Versionen. Spurlos öffnet das Dokument-Archiv, räumt diese Stellen einzeln auf und setzt es wieder zusammen – ohne den Inhalt anzufassen.',
      bullets: [
        'Autornamen in Kommentaren und Änderungsverfolgung',
        'Interne Dateipfade und Benutzernamen aus dem Dokument-Archiv',
        'Eingebettete Vorschaubilder früherer Versionen',
        'PDF: Erzeuger, Programm, Benutzername, Zeitstempel und XMP-Block',
        'Auch OpenDocument (ODT/ODS/ODP) und iWork (Pages/Numbers/Keynote)',
      ],
      pro: true,
    },
    'share-extension': {
      name: 'Direkt im Teilen-Menü',
      shortDesc:
        'Du musst die App gar nicht öffnen: In Fotos oder Dateien auf Teilen → Spurlos tippen, saubere Kopie weiterleiten.',
      longDesc:
        'Der schnellste Weg ist der, den du sowieso schon gehst. Wähle eine Datei in Fotos, Dateien oder einer beliebigen App, tippe auf Teilen und dann auf Spurlos. Die Datei wird direkt im Teilen-Blatt analysiert und bereinigt – anschließend leitest du die saubere Kopie sofort weiter oder sicherst sie, ohne die App je zu öffnen.',
      bullets: [
        'Funktioniert aus Fotos, Dateien und jeder App mit Teilen-Menü',
        'Analyse und Bereinigung direkt im Teilen-Blatt',
        'Saubere Kopie sofort weiterleiten oder sichern',
        'Auch hier: nichts verlässt dein Gerät',
      ],
    },
    automation: {
      name: 'Stapel & Kurzbefehle',
      shortDesc:
        'Viele Dateien auf einmal bereinigen – oder die Bereinigung als Schritt in einen Kurzbefehl einbauen.',
      longDesc:
        'Wenn Bereinigen zur Gewohnheit wird, soll es nicht jedes Mal Handarbeit sein. Spurlos verarbeitet ganze Auswahlen in einem Durchgang und stellt die Bereinigung zusätzlich als Aktion für die Kurzbefehle-App bereit. So lässt sich „vor dem Hochladen immer bereinigen" einmal einrichten und danach vergessen.',
      bullets: [
        'Stapelverarbeitung: viele Dateien in einem Durchgang',
        'Kurzbefehle-Aktion für eigene Automationen',
        'Selektiv entfernen: einzelne Felder behalten, den Rest löschen',
        'Verlauf mit Statistik, was insgesamt entfernt wurde',
      ],
      pro: true,
    },
  },
  en: {
    analysis: {
      name: 'Analysis',
      shortDesc:
        'See what is inside first: GPS position on a map, names, serial numbers, device data — every finding explained in plain words.',
      longDesc:
        'Before anything is removed, Spurlos shows you what your file says about you. The capture location appears as a point on a real map, not as a column of numbers. Next to every finding is one sentence explaining why it matters — plus a clear warning when a file directly identifies or locates you. Analysis is free and unlimited, for every format.',
      bullets: [
        'GPS position on a real map instead of a coordinate pair',
        'Names, serial numbers, device model and software versions in plain text',
        'Every finding with a plain-language explanation of why it matters',
        'A clear warning when a file identifies or locates you',
        'Free and unlimited — for every supported format',
      ],
    },
    'lossless-cleaning': {
      name: 'Cleaning without quality loss',
      shortDesc:
        'Photos and videos are never re-encoded. Every pixel stays exactly as it was — only the metadata disappears.',
      longDesc:
        'Many tools strip metadata by re-saving the image, quietly degrading it in the process. Spurlos rewrites only the metadata blocks and leaves the image and video data untouched, byte for byte. Your original is never modified either: you always get a clean copy and keep the source file.',
      bullets: [
        'No re-encoding — identical image and video quality',
        'The original stays untouched, you get a clean copy',
        'Images, video and audio without a detour through an export dialog',
        'File size stays virtually the same (only the metadata is gone)',
      ],
    },
    'self-check': {
      name: 'Self-verification',
      shortDesc:
        'Spurlos only reports success after reading the cleaned file back and finding genuinely nothing left.',
      longDesc:
        '"Metadata removed" is a claim — Spurlos proves it. After every cleaning the app reads the resulting file again in full and checks whether any field survived. Only then does the operation count as successful. If something remains, the app says so plainly instead of showing a green checkmark.',
      bullets: [
        'Re-inspection: the cleaned file is analysed again, in full',
        'Success only when no field can be found anymore',
        'Honest feedback when a format cannot be cleaned completely',
        'History shows what was actually removed per file',
      ],
    },
    'office-deep-clean': {
      name: 'Office deep clean',
      shortDesc:
        'PDF, Word, Excel, PowerPoint: not just the author field, but comments, tracked changes and internal paths too.',
      longDesc:
        'An office document carries far more than an "author" field. Comments and tracked changes hold the names of everyone who edited it, the relationship files hold internal file paths from the machine, and thumbnails of earlier versions sit embedded inside. Spurlos opens the document archive, cleans those places one by one and puts it back together — without touching your content.',
      bullets: [
        'Author names in comments and tracked changes',
        'Internal file paths and user names inside the document archive',
        'Embedded thumbnails of earlier versions',
        'PDF: producer, creator app, user name, timestamps and the XMP block',
        'OpenDocument (ODT/ODS/ODP) and iWork (Pages/Numbers/Keynote) too',
      ],
      pro: true,
    },
    'share-extension': {
      name: 'Right in the share sheet',
      shortDesc:
        "You don't even have to open the app: in Photos or Files tap Share → Spurlos and pass the clean copy on.",
      longDesc:
        'The fastest path is the one you already take. Pick a file in Photos, Files or any app, tap Share, then Spurlos. The file is analysed and cleaned right inside the share sheet — then you forward or save the clean copy without ever opening the app.',
      bullets: [
        'Works from Photos, Files and any app with a share sheet',
        'Analysis and cleaning right inside the share sheet',
        'Forward or save the clean copy immediately',
        'Here too: nothing leaves your device',
      ],
    },
    automation: {
      name: 'Batch & Shortcuts',
      shortDesc:
        'Clean many files in one pass — or make cleaning a step inside one of your Shortcuts.',
      longDesc:
        'Once cleaning becomes a habit, it should stop being manual work. Spurlos processes entire selections in a single pass and also exposes cleaning as an action for the Shortcuts app. Set up "always clean before uploading" once, then forget about it.',
      bullets: [
        'Batch processing: many files in one pass',
        'Shortcuts action for your own automations',
        'Selective removal: keep individual fields, delete the rest',
        'History with statistics on what was removed overall',
      ],
      pro: true,
    },
  },
};
