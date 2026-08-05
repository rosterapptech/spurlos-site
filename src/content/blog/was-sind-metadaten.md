---
title: 'Was sind Metadaten? EXIF, IPTC und XMP verständlich erklärt'
description: 'Metadaten sind die unsichtbare Beschriftung deiner Dateien: Aufnahmeort, Kameramodell, Autorenname. Was genau drinsteht, wer es auslesen kann – und wann es gefährlich wird.'
pubDate: '2026-07-22'
lang: 'de'
translationKey: 'was-sind-metadaten'
tags: ['metadaten', 'exif', 'grundlagen', 'datenschutz']
faq:
  - q: 'Sind Metadaten dasselbe wie EXIF?'
    a: 'Nein. EXIF ist nur einer von mehreren Metadaten-Standards und stammt aus der Kameratechnik. Daneben gibt es IPTC (redaktionelle Angaben wie Bildunterschrift und Urheber) und XMP (ein von Adobe eingeführtes, erweiterbares Format). In einer einzigen JPEG-Datei können alle drei gleichzeitig stecken – und unterschiedliche Angaben enthalten.'
  - q: 'Sieht man Metadaten, wenn man ein Bild anschaut?'
    a: 'Nein, sie sind im Bildinhalt nicht sichtbar. Sie liegen in eigenen Abschnitten der Datei und lassen sich mit Bordmitteln jedes Betriebssystems anzeigen – unter iOS etwa in der Fotos-App über die Info-Ansicht.'
  - q: 'Entfernen soziale Netzwerke Metadaten automatisch?'
    a: 'Die großen Plattformen entfernen beim Hochladen meist einen Teil davon, aber nicht zuverlässig und nicht überall. Beim Versand per Messenger, E-Mail, Cloud-Link oder beim Hochladen in ein Kleinanzeigenportal bleibt in der Regel alles erhalten.'
---

Jede Datei auf deinem Gerät führt Buch über sich selbst. Ein Foto weiß, mit welcher Kamera es entstand, wann, mit welcher Blende – und häufig, an welchem Ort. Ein Word-Dokument weiß, wer es angelegt hat und wer daran gearbeitet hat. Diese Angaben heißen Metadaten: Daten über die Daten. Sie sind im Inhalt nicht sichtbar, reisen aber mit, sobald du die Datei weitergibst.

## Die drei Standards, die dir in Fotos begegnen

**EXIF** (Exchangeable Image File Format) kommt aus der Kameratechnik. Hier stehen die technischen Aufnahmedaten: Kameramodell, Objektiv, Belichtungszeit, ISO-Wert, Datum und Uhrzeit – und, wenn das Gerät die Position kennt, die GPS-Koordinaten. Auch die Seriennummer der Kamera kann darin stehen.

**IPTC** stammt aus dem Journalismus. Der Standard beschreibt den Inhalt statt der Technik: Bildunterschrift, Stichwörter, Ort, Name des Urhebers, Nutzungsbedingungen.

**XMP** hat Adobe eingeführt. Es ist erweiterbar, und genau das macht es unübersichtlich: Bearbeitungsprogramme schreiben hier ihre eigenen Felder hinein – Bearbeitungsverlauf, verwendete Presets, interne Kennungen, manchmal den Benutzernamen des Rechners.

Ein einziges JPEG kann alle drei Blöcke gleichzeitig enthalten. Wer nur EXIF entfernt, hat unter Umständen den Urhebernamen aus IPTC und die Bearbeitungsspur aus XMP übersehen. Das ist einer der häufigsten Fehler bei einfachen „EXIF-Entfernern".

## Was in anderen Dateitypen steckt

Metadaten sind kein reines Foto-Thema:

- **Videos** speichern Aufnahmeort, Gerätemodell, Softwareversion und Erstellungsdatum, oft in herstellereigenen Zusatzfeldern.
- **Audiodateien** tragen ID3-Tags mit Aufnahmegerät, Software und Kommentarfeldern.
- **PDFs** nennen Autor, Erzeugerprogramm, häufig den Benutzernamen des Rechners und mehrere Zeitstempel.
- **Office-Dokumente** sind besonders auskunftsfreudig: Autor und letzter Bearbeiter, Namen in Kommentaren und in der Änderungsverfolgung, die reine Bearbeitungszeit, interne Dateipfade und eingebettete Vorschaubilder früherer Versionen.

Mehr dazu steht im Artikel [Metadaten aus PDF und Word entfernen](/blog/metadaten-aus-pdf-und-word-entfernen/).

## Wozu Metadaten gut sind

Sie sind kein Konstruktionsfehler. Fotoarchive sortieren danach, Fotografinnen belegen damit ihre Urheberschaft, Kartendienste ordnen Bilder Orten zu, und in der Bildbearbeitung erlaubt der Verlauf, Schritte zurückzunehmen. Es geht also nicht darum, Metadaten grundsätzlich abzuschaffen – sondern darum, zu entscheiden, welche davon das eigene Gerät verlassen.

## Wann es unangenehm wird

Kritisch werden Metadaten dort, wo eine Datei den Kreis wechselt, für den sie gedacht war:

- **Kleinanzeigen und Marktplätze.** Ein Foto vom Fahrrad im Hof zeigt in den Koordinaten die Wohnadresse. Fremde Menschen sehen die Anzeige – und können den Standort auslesen.
- **Bewerbungen und Behördenpost.** Ein PDF nennt als Autor oft den Namen aus dem Systemprofil, manchmal den einer ganz anderen Person, wenn eine Vorlage weiterverwendet wurde.
- **Recherche und Quellenschutz.** Ein weitergeleitetes Foto kann über Gerätemodell und Seriennummer mehrere anonym veröffentlichte Aufnahmen derselben Kamera zuordnen.
- **Dating und Kontaktanzeigen.** Ein Selfie aus der eigenen Wohnung liefert die Adresse gleich mit – noch bevor ein erstes Treffen stattgefunden hat.

Beim Hochladen in große soziale Netzwerke wird ein Teil dieser Angaben entfernt. Verlassen sollte man sich darauf nicht: Beim Versand per Messenger, per E-Mail-Anhang, über einen Cloud-Link oder in einem Kleinanzeigenportal bleibt in der Regel alles erhalten.

## Wie du siehst, was drinsteht

Unter iOS zeigt die Fotos-App in der Info-Ansicht Aufnahmedaten und Ort. Der Finder unter macOS blendet unter „Informationen" einen Teil ein, Windows zeigt Details in den Dateieigenschaften. Diese Ansichten sind allerdings unvollständig – sie zeigen die geläufigen Felder, nicht die herstellereigenen Erweiterungen und selten den XMP-Block.

Genau dort setzt [Spurlos](/) an: Die App listet jedes gefundene Feld auf, zeigt den Aufnahmeort auf einer Karte statt als Zahlenpaar und erklärt neben jedem Fund, warum er heikel sein kann. Diese Analyse ist kostenlos und für [alle unterstützten Formate](/unterstuetzte-formate/) unbegrenzt möglich – auch für Dateien, die du gar nicht bereinigen willst.

## Entfernen, ohne die Datei zu beschädigen

Beim Entfernen gibt es einen Fallstrick, den viele Werkzeuge nicht umgehen: Sie öffnen das Bild und speichern es neu. Dabei verschwinden zwar die Metadaten, aber das Bild wird ein zweites Mal komprimiert und verliert an Qualität. Sauberer ist es, nur die Metadaten-Blöcke neu zu schreiben und die Bilddaten unangetastet zu lassen. Der praktische Unterschied: Die Datei bleibt Byte für Byte dieselbe, nur ohne Beschriftung.

Ein zweiter Punkt ist die Kontrolle danach. „Metadaten entfernt" ist zunächst nur eine Behauptung. Erst wenn die bereinigte Datei noch einmal vollständig eingelesen wird und dabei kein Feld mehr auftaucht, ist der Vorgang tatsächlich abgeschlossen.

## Kurz zusammengefasst

Metadaten sind die unsichtbare Beschriftung deiner Dateien. Sie sind nützlich, solange die Datei bei dir bleibt, und riskant, sobald sie das nicht mehr tut. Der pragmatische Umgang: einmal ansehen, was drinsteht, und vor dem Teilen entfernen, was niemanden etwas angeht. Wie das konkret für Fotos aussieht, steht in [GPS-Standort aus Fotos entfernen](/blog/gps-standort-aus-fotos-entfernen/).
