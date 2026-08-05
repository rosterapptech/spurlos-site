---
title: 'GPS-Standort aus Fotos entfernen – auf dem iPhone, ohne Qualitätsverlust'
description: 'Fotos speichern den Aufnahmeort metergenau. Wie du prüfst, ob deine Bilder Koordinaten enthalten, wie du sie entfernst und warum „Ort entfernen" beim Teilen nicht immer reicht.'
pubDate: '2026-07-29'
lang: 'de'
translationKey: 'gps-aus-fotos-entfernen'
tags: ['gps', 'fotos', 'exif', 'anleitung', 'datenschutz']
faq:
  - q: 'Haben alle Fotos GPS-Daten?'
    a: 'Nein. Koordinaten landen nur dann im Bild, wenn die Kamera-App Zugriff auf den Standort hatte. Bei Screenshots, heruntergeladenen Bildern und Aufnahmen ohne Standortfreigabe fehlen sie. Sicher weißt du es erst, wenn du die Datei ansiehst.'
  - q: 'Reicht die Option „Ort entfernen" im iOS-Teilen-Menü?'
    a: 'Sie entfernt die Koordinaten, aber nur diese – Kameramodell, Seriennummer, Aufnahmezeit, Bearbeitungssoftware und der XMP-Block bleiben erhalten. Außerdem gilt sie nur für diesen einen Teilen-Vorgang und nicht für Dateien, die du aus der Dateien-App verschickst.'
  - q: 'Verliert das Foto beim Entfernen an Qualität?'
    a: 'Nur wenn das Werkzeug das Bild neu kodiert. Wird ausschließlich der Metadaten-Block neu geschrieben, bleiben die Bilddaten Byte für Byte identisch – gleiche Auflösung, gleiche Schärfe, praktisch gleiche Dateigröße.'
---

Ein Foto aus dem eigenen Garten enthält in der Regel die Koordinaten des eigenen Gartens – auf wenige Meter genau. Wer die Datei bekommt, braucht kein Spezialwissen, um daraus eine Adresse zu machen: Koordinaten in einen Kartendienst einsetzen, fertig. Das ist kein exotischer Angriff, sondern ein Standardfeld im Bild.

## Woher die Koordinaten kommen

Erlaubt man der Kamera-App den Zugriff auf den Standort, schreibt sie beim Auslösen die aktuelle Position in den EXIF-Block der Datei. Zusätzlich landen dort meist Aufnahmezeit inklusive Zeitzone, Kameramodell, Objektivdaten und die verwendete Softwareversion. Bei Aufnahmen aus einer Systemkamera kann auch die Geräte-Seriennummer dabei sein.

Nicht jedes Bild ist betroffen: Screenshots, aus dem Netz geladene Bilder und Aufnahmen ohne Standortfreigabe haben keine Koordinaten. Verlassen kann man sich darauf nicht – die einzige verlässliche Antwort liefert ein Blick in die Datei.

## Erst nachsehen, dann entscheiden

Bevor du irgendetwas entfernst, lohnt sich die Bestandsaufnahme. In der Fotos-App auf dem iPhone wischst du bei einem Bild nach oben oder tippst auf das Info-Symbol; steht dort eine Karte, sind Koordinaten enthalten. Diese Ansicht zeigt allerdings nur die geläufigen Felder – herstellereigene Erweiterungen und der XMP-Block eines Bildbearbeitungsprogramms tauchen dort nicht auf.

[Spurlos](/) zeigt stattdessen jedes gefundene Feld: die Position als Punkt auf einer Karte, daneben Kameramodell, Seriennummer, Software und Urheberangaben – und zu jedem Fund einen Satz dazu, warum er heikel sein kann. Diese Analyse ist kostenlos und unbegrenzt.

## Was die Bordmittel leisten – und was nicht

iOS bietet beim Teilen unter „Optionen" den Schalter **Ort**. Schaltest du ihn aus, verlässt das Bild das Gerät ohne Koordinaten. Das ist praktisch, hat aber drei Grenzen:

1. **Nur der Ort verschwindet.** Kameramodell, Seriennummer, Aufnahmezeit und Bearbeitungsspuren bleiben erhalten.
2. **Nur für diesen Vorgang.** Der Schalter gilt für das eine Teilen; die Datei auf dem Gerät bleibt unverändert.
3. **Nur aus Fotos heraus.** Verschickst du dasselbe Bild aus der Dateien-App, aus einer Cloud oder als E-Mail-Anhang, greift die Einstellung nicht.

Für ein schnelles „nur dieses eine Bild, nur dieser eine Chat" reicht das. Für Dateien, die du hochlädst, archivierst oder mehrfach weitergibst, brauchst du eine bereinigte Kopie.

## Bereinigen, ohne das Bild zu verschlechtern

Viele Werkzeuge entfernen Metadaten, indem sie das Bild öffnen und neu speichern. Das funktioniert – kostet aber Qualität, weil JPEG dabei ein zweites Mal komprimiert wird. Sichtbar wird das vor allem an Kanten und in Flächen mit sanften Verläufen.

Der bessere Weg: nur die Metadaten-Abschnitte neu schreiben und die Bilddaten unverändert übernehmen. Genau so arbeitet Spurlos – Fotos und Videos werden nicht neu kodiert, jedes Pixel bleibt, wie es war. Das Original bleibt dabei ebenfalls unangetastet; du bekommst immer eine saubere Kopie und behältst die Ausgangsdatei.

Nach dem Bereinigen liest die App die erzeugte Datei noch einmal vollständig ein und meldet Erfolg erst dann, wenn dabei kein Feld mehr gefunden wird. Bleibt etwas übrig, sagt sie das offen, statt einen grünen Haken zu zeigen.

## Der schnelle Weg im Alltag

Wenn Bereinigen zur Gewohnheit werden soll, darf es nicht bei jedem Bild ein Umweg sein. Zwei Abkürzungen helfen:

- **Teilen-Menü.** Foto auswählen, auf Teilen tippen, Spurlos wählen – analysieren, bereinigen, saubere Kopie direkt weiterleiten. Die App muss dafür nicht geöffnet werden.
- **Stapel und Kurzbefehle.** Ganze Auswahlen lassen sich in einem Durchgang verarbeiten, und die Bereinigung steht als Aktion für die Kurzbefehle-App bereit. „Vor dem Hochladen immer bereinigen" richtet man damit einmal ein.

## Wann du Metadaten behalten willst

Nicht immer ist Löschen richtig. Veröffentlichst du eigene Fotos, kann die Urheberangabe im IPTC-Block deinen Anspruch dokumentieren. Für ein Reisearchiv sind Koordinaten der eigentliche Wert. Deshalb lässt sich in Spurlos Pro auch selektiv entfernen: einzelne Felder behalten, den Rest löschen.

## Kurz zusammengefasst

Prüfe vor dem Teilen, was im Bild steht. Für ein einzelnes Foto reicht der Schalter im iOS-Teilen-Menü, für alles andere eine bereinigte Kopie ohne Neukodierung. Welche Felder es überhaupt gibt und wie sie zusammenhängen, steht in [Was sind Metadaten?](/blog/was-sind-metadaten/) – und für Dokumente lohnt der Blick in [Metadaten aus PDF und Word entfernen](/blog/metadaten-aus-pdf-und-word-entfernen/).
