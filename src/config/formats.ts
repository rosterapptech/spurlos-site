import type { Lang } from '../i18n/ui';

/**
 * Die Formatliste der Website – gespiegelt aus dem FormatCatalog der App
 * (SupportedFormatsView.swift). Wenn die App Formate ergaenzt, hier nachziehen;
 * es ist bewusst eine Kopie und keine Ableitung, damit die Website unabhaengig
 * vom Xcode-Projekt gebaut werden kann.
 */
export interface FormatCategory {
  id: string;
  /** Tiefenreinigung frei nutzbar oder nur mit Spurlos Pro. */
  tier: 'free' | 'pro';
  extensions: string[];
  label: Record<Lang, string>;
  /** Was in diesem Format typischerweise steckt. */
  carries: Record<Lang, string>;
}

export const deepCategories: FormatCategory[] = [
  {
    id: 'images',
    tier: 'free',
    extensions: ['JPG', 'JPEG', 'JFIF', 'HEIC', 'HEIF', 'AVIF', 'PNG', 'APNG', 'TIFF', 'GIF', 'BMP'],
    label: { de: 'Bilder', en: 'Images' },
    carries: {
      de: 'GPS-Koordinaten, Aufnahmezeitpunkt, Kamera- und Objektivmodell, Seriennummer, Bearbeitungssoftware, Urheber- und IPTC-Angaben.',
      en: 'GPS coordinates, capture time, camera and lens model, serial number, editing software, copyright and IPTC fields.',
    },
  },
  {
    id: 'vector',
    tier: 'free',
    extensions: ['SVG'],
    label: { de: 'Vektorgrafik', en: 'Vector graphics' },
    carries: {
      de: 'Kommentare des Zeichenprogramms, Editor-Metadaten, RDF/XMP-Blöcke mit Autorennamen.',
      en: 'Comments left by the drawing app, editor metadata, RDF/XMP blocks holding author names.',
    },
  },
  {
    id: 'video',
    tier: 'pro',
    extensions: ['MP4', 'MOV', 'M4V', '3GP', '3G2'],
    label: { de: 'Video', en: 'Video' },
    carries: {
      de: 'Aufnahmeort, Gerätemodell, Softwareversion, Erstellungsdatum, Kamera-Herstellerdaten.',
      en: 'Capture location, device model, software version, creation date, camera vendor data.',
    },
  },
  {
    id: 'audio',
    tier: 'pro',
    extensions: ['MP3', 'M4A', 'M4B', 'WAV', 'AIFF', 'AIFC'],
    label: { de: 'Audio', en: 'Audio' },
    carries: {
      de: 'ID3-Tags, Aufnahmegerät, Software, eingebettete Cover, Kommentar- und Urheberfelder.',
      en: 'ID3 tags, recording device, software, embedded cover art, comment and copyright fields.',
    },
  },
  {
    id: 'pdf',
    tier: 'pro',
    extensions: ['PDF'],
    label: { de: 'PDF', en: 'PDF' },
    carries: {
      de: 'Autor, Ersteller-Programm, Benutzername des Rechners, Zeitstempel, XMP-Block, Stichwörter.',
      en: 'Author, creator application, machine user name, timestamps, XMP block, keywords.',
    },
  },
  {
    id: 'office',
    tier: 'pro',
    extensions: [
      'DOCX', 'DOCM', 'DOTX', 'DOTM',
      'XLSX', 'XLSM', 'XLTX', 'XLTM', 'XLSB',
      'PPTX', 'PPTM', 'POTX', 'PPSX',
    ],
    label: { de: 'Microsoft Office', en: 'Microsoft Office' },
    carries: {
      de: 'Autor und letzter Bearbeiter, Namen in Kommentaren und Änderungsverfolgung, interne Dateipfade, Bearbeitungsdauer, Vorschaubilder.',
      en: 'Author and last editor, names in comments and tracked changes, internal file paths, editing time, thumbnails.',
    },
  },
  {
    id: 'opendocument',
    tier: 'pro',
    extensions: ['ODT', 'OTT', 'ODS', 'OTS', 'ODP', 'OTP'],
    label: { de: 'OpenDocument', en: 'OpenDocument' },
    carries: {
      de: 'Autor, Bearbeitungszyklen, Gesamtbearbeitungszeit, Generator-Angabe, Kommentare.',
      en: 'Author, editing cycles, total editing time, generator string, comments.',
    },
  },
  {
    id: 'iwork',
    tier: 'pro',
    extensions: ['PAGES', 'NUMBERS', 'KEY'],
    label: { de: 'Apple iWork', en: 'Apple iWork' },
    carries: {
      de: 'Autorenangaben, Vorschaubilder des Dokuments, Bearbeitungsspuren im Paket.',
      en: 'Author fields, document preview images, editing traces inside the package.',
    },
  },
];

/**
 * Alles Weitere, das die App annimmt: der Inhalt wird byte-genau kopiert, aber
 * die Dateisystem-Spuren werden entfernt (Herkunfts-URL des Downloads, Finder-
 * Tags und -Kommentare, Quarantäne-Attribut, sonstige erweiterte Attribute).
 */
export const surfaceGroups: { label: Record<Lang, string>; extensions: string[] }[] = [
  {
    label: { de: 'RAW-Fotos & Design', en: 'RAW photos & design' },
    extensions: ['DNG', 'CR2', 'CR3', 'NEF', 'ARW', 'ORF', 'RAF', 'RW2', 'PSD', 'AI', 'EPS', 'INDD', 'SKETCH', 'FIG', 'XD', 'WEBP', 'JXL'],
  },
  {
    label: { de: 'Weitere Dokumente & E-Books', en: 'More documents & e-books' },
    extensions: ['DOC', 'XLS', 'PPT', 'RTF', 'EPUB', 'MOBI', 'AZW3', 'XPS', 'DJVU', 'HWP'],
  },
  {
    label: { de: 'Weitere Video- & Audioformate', en: 'More video & audio formats' },
    extensions: ['MKV', 'AVI', 'WEBM', 'WMV', 'FLV', 'MTS', 'MXF', 'FLAC', 'OGG', 'OPUS', 'AAC', 'WMA', 'MIDI'],
  },
  {
    label: { de: 'Archive, Geodaten, 3D & mehr', en: 'Archives, geodata, 3D & more' },
    extensions: ['ZIP', 'RAR', '7Z', 'TAR', 'ISO', 'DMG', 'GPX', 'KML', 'KMZ', 'SHP', 'DWG', 'DXF', 'STL', 'OBJ', 'GLB', 'FBX', 'STEP'],
  },
  {
    label: { de: 'Text, Web & Daten', en: 'Text, web & data' },
    extensions: ['TXT', 'MD', 'CSV', 'TSV', 'JSON', 'XML', 'YAML', 'HTML', 'LOG', 'PLIST', 'SQLITE'],
  },
  {
    label: { de: 'Mail, Kalender & Kontakte', en: 'Mail, calendar & contacts' },
    extensions: ['EML', 'MSG', 'MBOX', 'PST', 'ICS', 'VCF', 'DCM'],
  },
  {
    label: { de: 'Schriften & Pakete', en: 'Fonts & packages' },
    extensions: ['TTF', 'OTF', 'TTC', 'WOFF', 'WOFF2', 'APK', 'IPA', 'JAR', 'MSI', 'DEB', 'RPM'],
  },
];
