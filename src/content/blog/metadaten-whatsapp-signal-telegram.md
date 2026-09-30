---
title: 'Entfernen WhatsApp, Signal und Telegram Metadaten? Was beim Teilen erhalten bleibt'
description: 'Ob der Standort mitreist, entscheidet selten die App allein – sondern die Art, wie du eine Datei verschickst. Die Faustregel für Messenger, AirDrop, E-Mail und soziale Netzwerke, und wo sie nicht mehr greift.'
pubDate: '2026-09-30'
lang: 'de'
translationKey: 'messenger-metadaten'
tags: ['messenger', 'datenschutz', 'fotos', 'vergleich']
faq:
  - q: 'Entfernt WhatsApp den Standort aus Fotos?'
    a: 'Beim normalen Fotoversand wird das Bild neu komprimiert, dabei gehen die EXIF-Daten nach bisherigen Tests verloren. Verschickst du dasselbe Foto als Dokument, kommt die Originaldatei an – mit allen Metadaten, auch dem Standort.'
  - q: 'Sind Fotos per AirDrop oder iMessage sicher?'
    a: 'Beide übertragen standardmäßig die Originaldatei, inklusive Standort. Im Teilen-Menü lässt sich unter „Optionen" der Standort für diesen einen Versand abschalten. Gerät, Aufnahmezeit und weitere Felder bleiben trotzdem erhalten.'
  - q: 'Wenn Instagram oder Facebook die Metadaten entfernen, ist dann alles in Ordnung?'
    a: 'Für andere Nutzer ja, für die Plattform nicht. Die Datei wird zuerst vollständig hochgeladen und erst danach für die Veröffentlichung verarbeitet. Was der Betreiber vorher ausliest und speichert, entscheidet er selbst.'
  - q: 'Kann ich mich auf das Verhalten eines Messengers verlassen?'
    a: 'Nur bedingt. Wie eine App Dateien verarbeitet, ist eine interne Entscheidung des Anbieters und kann sich mit jedem Update ändern – etwa wenn eine neue Option für Originalqualität dazukommt. Eine selbst bereinigte Datei hängt davon nicht ab.'
---

„WhatsApp löscht die Metadaten doch sowieso." Das stimmt – manchmal. Ob der Aufnahmeort einer Datei beim Empfänger ankommt, hängt weniger davon ab, welchen Messenger du nutzt, als davon, *wie* du die Datei verschickst. Dieselbe App kann ein Foto einmal bereinigt und einmal vollständig weitergeben.

## Die Faustregel: komprimiert heißt meist bereinigt

Messenger verkleinern Fotos und Videos beim normalen Versand, um Datenvolumen zu sparen. Dabei wird die Datei neu geschrieben, und die meisten Apps übernehmen die ursprünglichen Metadaten nicht in die neue Fassung. Das ist ein Nebeneffekt der Komprimierung, kein ausdrückliches Datenschutzversprechen.

Umgekehrt gilt: Sobald eine Datei **im Original** verschickt wird – als Dokument, als Datei, „ohne Komprimierung" oder in voller Qualität –, kommt sie in der Regel Byte für Byte beim Empfänger an. Mit allem, was drinsteckt.

## Wie sich die gängigen Wege verhalten

Die folgende Übersicht beschreibt das typische Verhalten nach aktuellem Stand. Anbieter ändern ihre Verarbeitung ohne Ankündigung, deshalb ist sie als Orientierung gedacht, nicht als Garantie.

| Versandweg | Normal als Foto/Video | Als Datei/Dokument/Original |
| --- | --- | --- |
| WhatsApp | neu komprimiert, EXIF entfernt | Original mit allen Metadaten |
| Telegram | neu komprimiert, EXIF entfernt | Original mit allen Metadaten |
| Signal | verarbeitet, Metadaten entfernt | Original mit allen Metadaten |
| iMessage | Original, Standort optional abschaltbar | Original mit allen Metadaten |
| AirDrop | Original, Standort optional abschaltbar | Original mit allen Metadaten |
| E-Mail-Anhang | – | Original mit allen Metadaten |
| Cloud-Link (iCloud, Dropbox & Co.) | – | Original mit allen Metadaten |

Zwei Dinge fallen auf: Apples eigene Wege übertragen standardmäßig das Original, und jeder Messenger hat einen Weg, auf dem die Originaldatei durchgeht. Gerade der ist beliebt, weil er die Qualität erhält – wer seiner Familie Urlaubsfotos „in voller Auflösung" schickt, schickt die Koordinaten mit.

## Der Standort-Schalter im Teilen-Menü

Für iMessage, AirDrop und alle anderen Wege aus der Fotos-App bietet iOS unter „Optionen" im Teilen-Menü einen Schalter für den Standort. Er ist nützlich, hat aber klare Grenzen: Er entfernt nur die Koordinaten, gilt nur für diesen einen Versand und greift nicht, wenn die Datei aus der Dateien-App, aus einer Cloud oder als Mail-Anhang kommt. Die Details dazu stehen in [GPS-Standort aus Fotos entfernen](/blog/gps-standort-aus-fotos-entfernen/).

## Soziale Netzwerke: bereinigt für andere, nicht für den Betreiber

Große Plattformen entfernen EXIF-Daten aus Bildern, bevor sie öffentlich angezeigt werden. Das schützt vor anderen Nutzern, die das Bild herunterladen. Es ändert aber nichts daran, dass die Originaldatei zuerst vollständig beim Betreiber ankommt und erst dort verarbeitet wird. Was dabei ausgelesen, ausgewertet oder aufbewahrt wird, liegt allein beim Betreiber – dieselbe Frage, die sich bei jedem Upload stellt. Warum ein „wird gelöscht" dabei selten alle Kopien meint, steht in [Server-Logs, Caches, Backups](/blog/was-server-logs-caches-backups-wirklich-speichern/).

## Dokumente sind der blinde Fleck

Die Faustregel gilt nur für Fotos und Videos. PDFs, Word-Dateien oder Tabellen komprimiert kein Messenger – sie kommen immer im Original an, mit Autorennamen, Kommentaren, Änderungsverfolgung und internen Dateipfaden. Gerade hier verlassen sich viele fälschlich darauf, dass „der Messenger das schon macht". Was in solchen Dateien steckt, erklärt [Metadaten aus PDF und Word entfernen](/blog/metadaten-aus-pdf-und-word-entfernen/).

## Unabhängig werden von der App des Empfängers

Die verlässliche Variante ist, nicht auf das Verhalten des Versandwegs zu setzen, sondern die Datei vorher selbst zu bereinigen. Dann ist es egal, ob sie später komprimiert, als Dokument oder per AirDrop verschickt wird.

Mit Spurlos geht das direkt aus dem [Teilen-Menü](/features/share-extension/): Datei auswählen, Teilen, Spurlos – die bereinigte Kopie lässt sich sofort an WhatsApp, Signal oder Mail weiterreichen, ohne die App zu öffnen. Fotos werden dabei nicht neu kodiert, du behältst also die volle Qualität und verlierst trotzdem die Metadaten. Die Verarbeitung findet vollständig auf dem Gerät statt.

## Kurz zusammengefasst

Komprimierter Fotoversand bereinigt meistens nebenbei, Originalversand nie. Apple-Wege schicken standardmäßig das Original, Dokumente reisen immer vollständig. Wer sich nicht merken will, welcher Weg was tut, bereinigt die Datei vor dem Teilen selbst.
