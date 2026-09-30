---
title: 'Metadaten aus Videos entfernen: Standort, Gerät und Aufnahmezeit im iPhone-Video'
description: 'Videos tragen dieselben verräterischen Angaben wie Fotos – nur fällt es seltener auf. Welche Felder in MOV und MP4 stecken, warum Live Photos doppelt zählen und wie man sie loswird, ohne neu zu kodieren.'
pubDate: '2026-09-30'
lang: 'de'
translationKey: 'metadaten-videos'
tags: ['video', 'gps', 'anleitung', 'datenschutz']
faq:
  - q: 'Speichern iPhone-Videos den Aufnahmeort?'
    a: 'Ja, sofern die Kamera-App Zugriff auf den Standort hat. Die Koordinaten stehen dann in den QuickTime-Metadaten der Datei, zusammen mit Gerätemodell, iOS-Version und Aufnahmezeitpunkt.'
  - q: 'Entfernt ein Neu-Export oder eine Komprimierung die Metadaten?'
    a: 'Manchmal, aber nicht verlässlich – und immer auf Kosten der Qualität. Beim Neu-Kodieren wird das Video erneut komprimiert, und welche Metadaten der Exporter übernimmt oder neu schreibt, hängt vom Programm ab.'
  - q: 'Was ist mit Live Photos?'
    a: 'Ein Live Photo besteht aus einem Foto und einem kurzen Video. Beide Teile tragen eigene Metadaten, auch den Standort. Wer nur das Standbild bereinigt, gibt die Koordinaten über den Videoteil trotzdem weiter.'
  - q: 'Reicht das Entfernen der Metadaten, um den Aufnahmeort zu verbergen?'
    a: 'Es entfernt die Koordinaten aus der Datei. Was im Bild zu sehen ist – ein Straßenschild, die Aussicht aus dem Fenster, ein Hausnummernschild – kann aber genauso viel verraten. Das muss man selbst prüfen.'
---

Bei Fotos hat sich herumgesprochen, dass sie den Aufnahmeort speichern. Bei Videos denkt kaum jemand daran – dabei legt die Kamera dort dieselben Angaben ab, nur in einem anderen Container. Ein kurzer Clip vom Balkon kann die Wohnadresse genauso präzise enthalten wie ein Foto vom selben Ort.

## Was in einem Video steckt

iPhone-Videos liegen als MOV oder MP4 vor. Beide Formate bauen auf demselben Containerprinzip auf: Neben den eigentlichen Bild- und Tonspuren gibt es Metadaten-Abschnitte, in die Kamera und Software schreiben. Typischerweise finden sich dort:

- **Standort** – als Koordinatenpaar, oft mit Höhenangabe
- **Aufnahmezeitpunkt** – inklusive Zeitzone
- **Gerät** – Hersteller und Modell, etwa „Apple iPhone"
- **Software** – die iOS-Version, mit der aufgenommen wurde
- **Bearbeitungsspuren** – welches Programm den Clip zuletzt geschrieben hat

Bei Kameras anderer Hersteller kommen häufig eigene Datenblöcke dazu, die Seriennummern oder Objektivangaben enthalten können.

Anders als bei einem Foto sieht man diese Angaben in kaum einer App. Die Fotos-App zeigt zwar eine Karte, wenn ein Video Koordinaten hat – was sonst noch in der Datei steht, bleibt unsichtbar.

## Live Photos: zwei Dateien, zwei Mal Metadaten

Ein Live Photo ist technisch ein Paar: ein HEIC-Standbild und ein kurzes MOV-Video. Beide werden beim Aufnehmen mit Metadaten versehen, beide tragen den Standort. Wer ein Live Photo als Ganzes weitergibt – etwa per AirDrop an ein anderes Apple-Gerät –, gibt auch beide Teile weiter.

Das ist die häufigste Lücke beim Bereinigen: Das Standbild ist sauber, der Videoteil nicht. Wenn der Bewegungsanteil keine Rolle spielt, ist es am einfachsten, Live Photos vor dem Teilen auf „Live aus" zu stellen oder das Standbild getrennt zu exportieren und zu bereinigen.

## Warum „einfach neu exportieren" keine gute Idee ist

Der naheliegende Weg ist, das Video durch einen Editor oder eine Komprimierungs-App zu schicken. Dabei entstehen drei Probleme:

1. **Qualitätsverlust.** Ein Video neu zu kodieren heißt, es ein zweites Mal verlustbehaftet zu komprimieren. Das sieht man an Kanten, in dunklen Bereichen und bei Bewegung.
2. **Keine Garantie.** Welche Metadaten der Exporter übernimmt, weglässt oder neu schreibt, entscheidet das Programm. Manche übernehmen den Standort, fast alle schreiben ihren eigenen Namen und einen neuen Zeitstempel hinein.
3. **Zeit und Akku.** Längere 4K-Clips neu zu kodieren dauert auf dem Telefon spürbar.

Der Schalter „Standort" unter „Optionen" im iOS-Teilen-Menü hilft für den einzelnen Versand aus der Fotos-App. Er gilt aber, wie bei Fotos, nur für diese eine Aktion und entfernt nur die Koordinaten – Gerät, Software und Aufnahmezeit bleiben.

## Bereinigen, ohne das Video anzufassen

Sauber ist nur der Weg, der die Metadaten-Abschnitte neu schreibt und die Bild- und Tonspuren unverändert übernimmt. So arbeitet die [Bereinigung in Spurlos](/features/lossless-cleaning/): Das Video wird nicht neu kodiert, jedes Einzelbild bleibt Byte für Byte erhalten, die Dateigröße ändert sich kaum. Das Original bleibt unangetastet, du bekommst eine saubere Kopie.

Vorher zeigt die [Analyse](/features/analysis/) jedes gefundene Feld – den Aufnahmeort auf einer Karte, dazu Gerät, Software und Zeitpunkt. Nach dem Bereinigen liest die App die neue Datei erneut vollständig ein und meldet erst dann Erfolg, wenn kein Feld mehr gefunden wird.

Die Tiefenreinigung von Videos gehört zu Spurlos Pro und deckt MP4, MOV, M4V, 3GP und 3G2 ab. Container wie MKV, WebM oder AVI nimmt die App ebenfalls an, entfernt dort aber nur die Dateisystem-Spuren wie Herkunfts-URL und Finder-Tags – nicht die Metadaten im Inneren. Das sagt sie bei jeder solchen Datei ausdrücklich. Die vollständige Übersicht steht unter [Unterstützte Formate](/unterstuetzte-formate/).

## Was Metadaten-Entfernung nicht leisten kann

Die Koordinaten aus der Datei zu löschen, verbirgt nicht, was im Bild zu sehen ist. Ein Video ist in dieser Hinsicht sogar riskanter als ein Foto: Es zeigt mehr Umgebung, oft einen Schwenk über Straße, Fenster oder Nachbarhaus, und manchmal hört man im Hintergrund Namen oder Durchsagen. Vor dem Teilen lohnt ein kurzer Blick darauf, ob der Inhalt selbst den Ort verrät.

## Kurz zusammengefasst

Videos speichern Standort, Gerät und Aufnahmezeit genauso wie Fotos. Live Photos tragen diese Angaben doppelt. Neu exportieren kostet Qualität und bereinigt nicht verlässlich – besser ist ein Werkzeug, das nur die Metadaten neu schreibt. Wie es bei Standbildern aussieht, steht in [GPS-Standort aus Fotos entfernen](/blog/gps-standort-aus-fotos-entfernen/); die Grundlagen in [Was sind Metadaten?](/blog/was-sind-metadaten/).
