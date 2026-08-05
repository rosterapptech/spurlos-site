import type { Lang } from '../i18n/ui';

/**
 * Die Formatliste der Website – 1:1 gespiegelt aus der App (FormatCatalog in
 * SupportedFormatsView.swift bzw. SurfaceMetadataHandler.acceptedExtensions).
 * Es ist bewusst eine Kopie und keine Ableitung, damit die Website unabhaengig
 * vom Xcode-Projekt gebaut werden kann: Wenn die App Formate ergaenzt, hier
 * nachziehen. Kategorienamen und Reihenfolge entsprechen dem Screen in der App,
 * damit Website und Produkt dieselbe Sprache sprechen.
 */
export interface FormatCategory {
  id: string;
  /**
   * Tiefenreinigung frei nutzbar oder nur mit Spurlos Pro. Quelle:
   * FeatureCatalog.standard in der App – frei ist ausschliesslich
   * `cleanImages`, und dazu zaehlt alles, was als Bild-UTType gilt (inkl. SVG).
   */
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
    label: { de: 'Fotos & Bilder', en: 'Photos & images' },
    carries: {
      de: 'GPS-Koordinaten, Aufnahmezeitpunkt, Kamera- und Objektivmodell, Seriennummer, Bearbeitungssoftware, Urheber- und IPTC-Angaben.',
      en: 'GPS coordinates, capture time, camera and lens model, serial number, editing software, copyright and IPTC fields.',
    },
  },
  {
    id: 'vector',
    tier: 'free',
    extensions: ['SVG'],
    label: { de: 'Vektorgrafiken', en: 'Vector graphics' },
    carries: {
      de: 'Kommentare des Zeichenprogramms, Editor-Metadaten, RDF/XMP-Blöcke mit Autorennamen.',
      en: 'Comments left by the drawing app, editor metadata, RDF/XMP blocks holding author names.',
    },
  },
  {
    id: 'video',
    tier: 'pro',
    extensions: ['MP4', 'MOV', 'M4V', '3GP', '3G2'],
    label: { de: 'Videos', en: 'Video' },
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
    label: { de: 'PDF-Dokumente', en: 'PDF documents' },
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
 * Alle weiteren Formate, die die App annimmt (156 Stück, alphabetisch – exakt
 * die Liste aus dem Screen „Weitere Formate"). Der Dateiinhalt wird byte-genau
 * kopiert; entfernt werden die Dateisystem-Spuren: Herkunfts-URL des Downloads,
 * Tags und Finder-Kommentare, Quarantäne-Attribut und weitere erweiterte
 * Attribute. Metadaten im Inneren dieser Formate werden weder angezeigt noch
 * entfernt – die App sagt das bei jeder solchen Datei ausdrücklich.
 */
export const surfaceExtensions: string[] = [
  '3FR', '3MF', '7Z', 'AAC', 'AFDESIGN', 'AFPHOTO', 'AI', 'AIF', 'APE', 'APK', 'ARW', 'ASF',
  'AVI', 'AZW', 'AZW3', 'BRAW', 'BZ2', 'CDR', 'CHM', 'CR2', 'CR3', 'CSV', 'DAE', 'DB', 'DCM',
  'DEB', 'DFF', 'DGN', 'DICOM', 'DJVU', 'DLL', 'DMG', 'DNG', 'DOC', 'DOT', 'DSF', 'DWG', 'DXF',
  'DYLIB', 'ELF', 'EML', 'EOT', 'EPS', 'EPUB', 'EXE', 'EXR', 'FBX', 'FIG', 'FLAC', 'FLV',
  'GEOTIFF', 'GLB', 'GLTF', 'GPX', 'GZ', 'HDR', 'HTM', 'HTML', 'HWP', 'ICS', 'IGES', 'IIQ',
  'INDD', 'IPA', 'ISO', 'JAR', 'JPE', 'JSON', 'JXL', 'KML', 'KMZ', 'LOG', 'M2TS', 'M4P',
  'MARKDOWN', 'MBOX', 'MD', 'MID', 'MIDI', 'MKA', 'MKV', 'MOBI', 'MPC', 'MPEG', 'MPG', 'MSG',
  'MSI', 'MTS', 'MXF', 'NEF', 'OBJ', 'ODF', 'ODG', 'OGA', 'OGG', 'OGV', 'OPUS', 'ORF', 'OST',
  'OTF', 'OXPS', 'PE', 'PEF', 'PLIST', 'PLY', 'POT', 'PPS', 'PPT', 'PSB', 'PSD', 'PST', 'R3D',
  'RAF', 'RAR', 'RM', 'RMVB', 'RPM', 'RTF', 'RW2', 'SHP', 'SKETCH', 'SO', 'SQLITE', 'SRW',
  'STEP', 'STL', 'STP', 'TAR', 'TEXT', 'TIF', 'TORRENT', 'TSV', 'TTC', 'TTF', 'TXT', 'VCF',
  'VOB', 'WEBM', 'WEBP', 'WMA', 'WMV', 'WOFF', 'WOFF2', 'WV', 'X3F', 'XCF', 'XD', 'XHTML',
  'XLS', 'XLT', 'XML', 'XPS', 'XZ', 'YAML', 'YML', 'ZIP',
];

/** Gesamtzahl der angenommenen Formate – für Aussagen wie „über 200 Formate". */
export const totalFormatCount =
  deepCategories.reduce((n, c) => n + c.extensions.length, 0) + surfaceExtensions.length;
