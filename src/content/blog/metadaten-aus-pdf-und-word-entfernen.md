---
title: 'Metadaten aus PDF und Word entfernen: warum der Autor trotzdem drinbleibt'
description: 'Das Autorenfeld zu leeren reicht bei Office-Dokumenten nicht: Namen stecken auch in Kommentaren, in der Änderungsverfolgung und in internen Dateipfaden. Was wirklich alles drinsteht – und wie es rausgeht.'
pubDate: '2026-08-05'
lang: 'de'
translationKey: 'metadaten-pdf-word'
tags: ['pdf', 'office', 'dokumente', 'anleitung', 'datenschutz']
faq:
  - q: 'Reicht es, das Autorenfeld in Word zu leeren?'
    a: 'Nein. Das Autorenfeld ist nur ein Eintrag von vielen. Namen stehen zusätzlich an jedem Kommentar und an jeder Änderung in der Änderungsverfolgung, dazu kommen interne Dateipfade, die Bearbeitungsdauer und eingebettete Vorschaubilder.'
  - q: 'Entfernt „Als PDF exportieren" die Metadaten?'
    a: 'Im Gegenteil: Beim Export schreibt das erzeugende Programm neue Metadaten in die PDF-Datei – Erzeugerprogramm, Zeitstempel und häufig den Benutzernamen des Rechners. Kommentare und Änderungsverfolgung können je nach Exporteinstellung ebenfalls übernommen werden.'
  - q: 'Sieht man den Unterschied im fertigen Dokument?'
    a: 'Nein. Metadaten stehen in eigenen Abschnitten der Datei und beeinflussen Layout, Text und Bilder nicht. Ein bereinigtes Dokument sieht exakt aus wie vorher.'
---

Bei Fotos ist die Sache greifbar: Koordinaten führen zu einer Adresse. Bei Dokumenten ist es unauffälliger und deshalb hartnäckiger. Ein PDF, das du an eine Behörde schickst, ein Angebot an einen neuen Kunden, ein Lebenslauf – überall reisen Namen und Arbeitsspuren mit, die niemand sehen soll.

## Was in einem PDF steht

Ein PDF trägt ein sogenanntes Info-Dictionary und meist zusätzlich einen XMP-Block. Darin finden sich typischerweise:

- **Autor** – oft der Name aus dem Systemprofil des Rechners, manchmal der einer ganz anderen Person, wenn eine Vorlage weiterverwendet wurde
- **Ersteller und Erzeuger** – welches Programm das Dokument geschrieben hat, in welcher Version
- **Benutzername** – über Pfadangaben im Erzeuger-String, etwa in eingebetteten Dateiverweisen
- **Zeitstempel** – wann erstellt, wann zuletzt geändert
- **Titel und Stichwörter** – nicht selten der Titel eines ganz anderen Dokuments, aus dem heraus gearbeitet wurde

Diese Felder sind im geöffneten Dokument nicht sichtbar, aber jeder PDF-Betrachter zeigt sie in den Dokumenteigenschaften an.

## Warum das Autorenfeld in Word nicht reicht

Office-Dokumente im heutigen Format (DOCX, XLSX, PPTX) sind in Wahrheit ZIP-Archive mit einer Reihe von XML-Dateien darin. Das Autorenfeld, das man in den Dokumentinformationen leeren kann, ist nur einer von vielen Orten, an denen Namen stehen:

- **Kommentare.** Jeder Kommentar trägt den Namen und die Initialen der Person, die ihn geschrieben hat – auch dann, wenn im Autorenfeld längst nichts mehr steht.
- **Änderungsverfolgung.** Jede erfasste Änderung ist einer Person und einem Zeitpunkt zugeordnet. Wer ein Dokument mit akzeptierten, aber nicht bereinigten Änderungen verschickt, gibt die gesamte Bearbeitungsgeschichte mit.
- **Interne Dateipfade.** In den Beziehungsdateien des Archivs stehen Verweise auf verknüpfte Dateien – häufig mit vollständigem Pfad, inklusive Benutzernamen und Ordnerstruktur des Rechners.
- **Bearbeitungsdauer und Revisionszähler.** Wie lange und wie oft an einem Dokument gearbeitet wurde.
- **Vorschaubilder.** Manche Programme betten eine Miniaturansicht ein – im Zweifel die einer älteren Fassung mit Inhalten, die längst gestrichen wurden.

Dasselbe gilt sinngemäß für OpenDocument-Dateien (ODT, ODS, ODP) und für die Pakete von Pages, Numbers und Keynote.

## Der klassische Irrtum: „Ich exportiere einfach als PDF"

Der Export löst das Problem nicht, er verlagert es. Das erzeugende Programm schreibt beim Export frische Metadaten in die neue Datei – Erzeugerprogramm, Zeitstempel, oft den Benutzernamen. Und je nach Einstellung wandern Kommentare oder Markierungen mit ins PDF.

Ein zweiter verbreiteter Umweg ist das Drucken in eine Datei. Auch dabei entstehen neue Metadaten; welche, hängt vom Druckertreiber ab. Verlässlich ist beides nicht.

## Was beim Bereinigen tatsächlich passieren muss

Ein Werkzeug, das Office-Dokumente ernsthaft säubert, muss das Archiv öffnen, die betroffenen XML-Dateien einzeln bearbeiten und das Ganze wieder zusammensetzen, ohne den Inhalt anzufassen. Genau das macht die Office-Tiefenreinigung von [Spurlos](/features/office-deep-clean/): Autorennamen in Kommentaren und Änderungsverfolgung, interne Dateipfade, Bearbeitungsdauer und eingebettete Vorschaubilder werden entfernt, Text, Tabellen, Formeln und Layout bleiben unverändert.

Bei PDF-Dateien werden Info-Dictionary und XMP-Block bereinigt – Autor, Erzeuger, Benutzername, Zeitstempel und Stichwörter.

Und wie bei allen Formaten gilt: Nach dem Bereinigen liest die App die erzeugte Datei erneut vollständig ein und meldet Erfolg erst dann, wenn kein Feld mehr gefunden wird.

## Vorher nachsehen lohnt sich

Bevor du bereinigst, sieh dir an, was tatsächlich drinsteht – das ist oft der überzeugendere Teil. Die Analyse ist in Spurlos für alle Formate kostenlos, auch für PDF- und Office-Dateien. Welche Dateitypen bis in die Metadaten hinein gereinigt werden und welche nur auf Dateisystem-Ebene, steht in der Übersicht [Unterstützte Formate](/unterstuetzte-formate/).

## Eine Gewohnheit, die sich lohnt

Dokumente werden selten einzeln verschickt. Für Anhänge, die regelmäßig rausgehen, hilft die Stapelverarbeitung: Ordner auswählen, in einem Durchgang bereinigen, saubere Kopien verschicken. Wer mag, hängt die Bereinigung über die Kurzbefehle-Aktion direkt an den eigenen Versand-Ablauf.

## Kurz zusammengefasst

Bei Dokumenten steckt der Name selten nur an einer Stelle. Wer nur das Autorenfeld leert, übersieht Kommentare, Änderungsverfolgung und interne Pfade. Grundlagen dazu stehen in [Was sind Metadaten?](/blog/was-sind-metadaten/); wie es bei Fotos aussieht, in [GPS-Standort aus Fotos entfernen](/blog/gps-standort-aus-fotos-entfernen/).
