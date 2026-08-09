---
title: 'Server-Logs, Caches, Backups: Was beim Datei-Upload wirklich gespeichert wird'
description: 'Ein "wird gelöscht"-Versprechen bezieht sich fast immer nur auf die eine Datei im Upload-Ordner. Was in Zugriffsprotokollen, CDN-Caches, Backups und bei Unterauftragnehmern tatsächlich landet – und wie lange es dort bleibt.'
pubDate: '2026-08-09'
lang: 'de'
translationKey: 'server-logs-caches-backups'
tags: ['datenschutz', 'grundlagen', 'metadaten', 'technik']
faq:
  - q: 'Wenn ein Tool die Datei nach einer Stunde löscht, ist dann alles weg?'
    a: 'Nur die eine Kopie im Upload-Verzeichnis, auf die sich das Versprechen bezieht. Server-Logs, CDN-Caches und Backups folgen eigenen Aufbewahrungsfristen, die mit diesem Versprechen meist nichts zu tun haben.'
  - q: 'Warum tauchen IP-Adresse und Dateiname überhaupt in einem Log auf, wenn es nur um Metadaten geht?'
    a: 'Weil Logging eine Infrastruktur-Funktion ist, keine Anwendungsfunktion. Webserver, Reverse-Proxy und CDN protokollieren jede Anfrage standardmäßig – unabhängig davon, was die Anwendung dahinter mit der Datei macht.'
  - q: 'Wie lange bleiben Backups typischerweise erhalten?'
    a: 'Das ist von Anbieter zu Anbieter verschieden und meist nicht öffentlich einsehbar. Übliche Zyklen liegen zwischen mehreren Tagen und mehreren Wochen, oft mit mehreren sich überlappenden Generationen. Ein Löschbefehl in der Anwendung erreicht diese Kopien in der Regel nicht rückwirkend.'
  - q: 'Kann ich als Nutzer prüfen, ob ein Anbieter sich an sein Löschversprechen hält?'
    a: 'Nein, nicht von außen. Es gibt keine technische Möglichkeit, aus dem Browser heraus zu sehen, was serverseitig mit einer Datei nach dem Verarbeiten passiert. Man kann höchstens die Datenschutzerklärung lesen – die aber selten bis auf Log- und Backup-Ebene herunterbricht.'
---

„Deine Datei wird nach einer Stunde automatisch gelöscht." Dieser Satz steht auf vielen Online-Metadaten-Entfernern, und er ist meistens sogar wahr. Er beantwortet nur eine sehr enge Frage: was mit der einen Datei passiert, die im Upload-Ordner der Anwendung liegt. Alles, was um diese Anwendung herum mitläuft, ist davon nicht erfasst. Wer verstehen will, was ein Upload wirklich bedeutet, muss diese Schichten einzeln durchgehen.

## Eine Anfrage, viele Stationen

Zwischen deinem Klick auf „Hochladen" und der Antwort „fertig" durchläuft die Datei mehrere Systeme, die selten aus einer Hand kommen:

1. **Load Balancer / Reverse Proxy** nimmt die Verbindung an und reicht sie weiter.
2. **Webserver / Anwendung** verarbeitet die Datei – hier findet die eigentliche Metadaten-Entfernung statt.
3. **Objektspeicher** legt die hochgeladene und die Ergebnisdatei ab, oft in einem separaten Cloud-Dienst.
4. **CDN** liefert die Ergebnisdatei aus, wenn ein Download-Link erzeugt wird.
5. **Backup-System** sichert die darunterliegenden Server und Speicher nach eigenem Zeitplan.

Jede dieser Stationen kann eine eigene Kopie oder zumindest einen eigenen Eintrag über die Datei erzeugen – unabhängig davon, was die Anwendung selbst verspricht.

## Server-Logs: die unauffälligste Spur

Access-Logs sind eine Infrastruktur-Funktion, keine Anwendungsfunktion. Der Webserver protokolliert jede eingehende Anfrage von sich aus, meist bevor die Anwendung überhaupt aktiv wird. Ein typischer Log-Eintrag enthält:

- **IP-Adresse** des Absenders
- **Zeitstempel** auf die Sekunde genau
- **Dateiname** aus dem Upload-Formular
- **User-Agent** des Browsers oder Geräts
- **HTTP-Statuscode** und übertragene Datenmenge

Diese Zeile hat mit dem Löschversprechen der Anwendung nichts zu tun. Sie liegt in einer separaten Log-Datei, die nach eigenen Regeln rotiert und archiviert wird – häufig 30, 90 oder mehr Tage, teilweise unbegrenzt, wenn niemand aktiv eine Löschroutine eingerichtet hat. Der Dateiname allein kann bereits sprechend sein: „Kuendigung_Mueller_Personalabteilung.pdf" verrät im Log mehr, als die Datei selbst nach der Bereinigung noch preisgibt.

## Caches und CDN: der Download-Link lebt länger als gedacht

Wenn ein Tool die bereinigte Datei zum Herunterladen anbietet, steckt dahinter oft ein Content Delivery Network. Das CDN existiert, damit der Download schnell ist – nicht, damit er geheim ist. Zwei Eigenschaften sind dabei relevant:

- **Gültigkeitsdauer.** Download-Links sind selten an eine einzelne Sitzung gebunden. Oft funktionieren sie für jeden, der die URL kennt, für Minuten oder Stunden nach der Verarbeitung.
- **Edge-Caching.** Die Datei liegt danach nicht mehr nur auf einem Server, sondern testweise auf mehreren Cache-Knoten, verteilt über Regionen – jeder davon eine zusätzliche Kopie mit eigener Ablauflogik.

Ein „gelöscht nach einer Stunde" bezieht sich fast immer auf den Ursprungsserver. Was in den Cache-Knoten des CDN in der Zwischenzeit passiert ist, steht auf einem anderen Blatt und wird auf den wenigsten Anbieter-Webseiten überhaupt erwähnt.

## Backups: der Zeitplan läuft unabhängig weiter

Backups sichern nicht einzelne Nutzeraktionen, sondern den Zustand ganzer Systeme zu festen Zeitpunkten. Wenn eine Datei um 14:00 Uhr hochgeladen und um 14:05 Uhr wieder aus der Anwendung gelöscht wird, das nächtliche Backup aber erst um 3:00 Uhr läuft, ist die Datei zu diesem Zeitpunkt trotzdem noch auf dem Server – und landet in der Sicherung.

Backup-Zyklen überlappen sich meist: eine tägliche, eine wöchentliche und eine monatliche Generation nebeneinander, jede mit eigener Aufbewahrungsfrist. Ein Löschbefehl in der Anwendung wirkt nach vorne, nicht rückwirkend auf bereits erstellte Sicherungen. Bis eine Datei aus allen Generationen verschwunden ist, können je nach Anbieter Wochen vergehen – falls überhaupt eine Routine existiert, die alte Backups tatsächlich entsorgt.

## Unterauftragnehmer: die Kette hört selten bei einem Anbieter auf

Kaum ein kleiner Online-Dienst betreibt eigene Rechenzentren. Typisch ist eine Kette aus mehreren Unternehmen:

- **Hosting/Compute** – wo der Server tatsächlich läuft
- **Objektspeicher** – wo Dateien zwischengelagert werden
- **CDN-Anbieter** – wer die Auslieferung übernimmt
- **E-Mail- oder Analytics-Dienst** – falls Fehlerberichte oder Nutzungsdaten mitgeschickt werden

Jedes dieser Unternehmen hat eigene Zugriffsrechte, eigene Log- und Backup-Regeln und einen eigenen Serverstandort. Die Datenschutzerklärung des Metadaten-Entferners deckt bestenfalls die erste Ebene ab; was die Unterauftragnehmer der Unterauftragnehmer tun, steht dort in der Regel nicht.

## Warum das bei Metadaten-Entfernern besonders unpassend ist

Der Zweck der Übung ist, weniger über sich preiszugeben. Der Weg dorthin – Upload auf einen fremden Server – erzeugt aber strukturell mehr Spuren, als vorher da waren: nicht nur eine Kopie der Originaldatei, sondern zusätzlich eine IP-Adresse, einen Zeitstempel und einen Dateinamen in mindestens einem Log, das mit dem eigentlichen Werkzeug nichts zu tun hat. Wie dieser Widerspruch grundsätzlich zu bewerten ist und wann er tatsächlich ins Gewicht fällt, steht in [Online-Metadaten-Entferner oder App? Was beim Hochladen wirklich passiert](/blog/online-metadaten-entferner-oder-app/).

## Der einzige Weg, diese Schichten zu vermeiden

Man kann keine dieser Schichten einzeln abschalten oder kontrollieren – sie gehören zur Betriebsweise eines jeden Online-Dienstes dazu, guter Absicht zum Trotz. Vermeiden lässt sich nur die Ursache: die Datei gar nicht erst hochladen.

Spurlos verarbeitet Dateien ausschließlich auf dem Gerät. Es gibt keinen Upload, keinen Server, kein Log, keinen Cache und kein Backup, das die Datei je erreichen könnte – die App enthält schlicht keinen Netzwerkcode, der das technisch ermöglichen würde. Die [Analyse](/features/analysis/) zeigt jedes gefundene Feld direkt auf dem Gerät, die [Bereinigung](/features/lossless-cleaning/) läuft lokal und ohne Neukodierung, und die [Selbstprüfung](/features/self-check/) bestätigt das Ergebnis, ohne dass die Datei den Rechner je verlassen hätte.

## Kurz zusammengefasst

Ein Löschversprechen ist so gut wie sein Geltungsbereich – und der endet meist bei der einen Datei, um die es geht. Logs, Caches, Backups und Unterauftragnehmer laufen davon unberührt weiter. Wer wissen will, wie man ein Werkzeug an dieser Stelle grundsätzlich bewertet, findet die fünf Prüffragen dazu in [Online-Metadaten-Entferner oder App?](/blog/online-metadaten-entferner-oder-app/); die Grundlagen zu Metadaten selbst stehen in [Was sind Metadaten?](/blog/was-sind-metadaten/).
