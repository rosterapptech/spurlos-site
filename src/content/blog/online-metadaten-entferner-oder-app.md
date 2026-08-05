---
title: 'Online-Metadaten-Entferner oder App? Was beim Hochladen wirklich passiert'
description: 'Um ein GPS-Feld loszuwerden, lädst du die komplette Datei auf einen fremden Server. Warum das bei diesem Thema besonders schief liegt – und woran du ein brauchbares Werkzeug erkennst.'
pubDate: '2026-08-05'
lang: 'de'
translationKey: 'online-tools-vs-app'
tags: ['datenschutz', 'grundlagen', 'metadaten', 'vergleich']
faq:
  - q: 'Sind Online-Metadaten-Entferner unsicher?'
    a: 'Nicht per se – aber sie verlangen Vertrauen, das sich nicht überprüfen lässt. Deine Datei liegt beim Anbieter im Klartext vor, weil die Transportverschlüsselung dort endet. Ob sie danach wirklich gelöscht wird, ob sie in Logs, Caches oder Backups landet und wer Zugriff hat, kannst du von außen nicht sehen.'
  - q: 'Reicht es nicht, wenn das Tool "Dateien werden nach einer Stunde gelöscht" verspricht?'
    a: 'Das Versprechen mag stimmen, prüfbar ist es nicht. Und es bezieht sich meist nur auf die hochgeladene Datei selbst – nicht auf Server-Logs, CDN-Caches oder Backups, die unabhängig davon weiterlaufen.'
  - q: 'Wann ist ein Online-Tool in Ordnung?'
    a: 'Wenn die Datei ohnehin öffentlich ist und keinen Personenbezug hat – etwa ein Produktfoto ohne Standort, das später sowieso im Netz steht. Sobald die Datei nicht für Fremde bestimmt ist oder fremde Daten enthält, ist der Upload das größere Problem als die Metadaten.'
  - q: 'Darf ich beruflich Dateien auf so eine Seite hochladen?'
    a: 'Wenn darin personenbezogene Daten Dritter stecken – Bewerbungen, Mandanten-, Patienten- oder Kundendokumente –, gibst du diese Daten an einen Dienstleister weiter. Datenschutzrechtlich ist das eine Auftragsverarbeitung mit allem, was dazugehört: Vertrag nach Art. 28 DSGVO, Prüfung des Drittlandtransfers, Dokumentation. Bei einem kostenlosen Web-Tool ist davon in der Regel nichts vorhanden.'
---

Der Anlass ist meistens klein: ein Foto soll in eine Anzeige, aber ohne die Koordinaten der eigenen Wohnung. Wer danach sucht, findet Dutzende Webseiten, die genau das kostenlos anbieten – Datei hineinziehen, warten, saubere Version herunterladen.

Der Vorgang ist bequem. Er ist bei diesem Thema aber besonders widersprüchlich: Um ein einziges Feld loszuwerden, gibst du die vollständige Datei aus der Hand – inklusive Bildinhalt, Dokumenttext und aller anderen Metadaten.

## Was beim Upload tatsächlich passiert

Beim Hochladen verlässt die Datei dein Gerät als Ganzes. Sie wird verschlüsselt übertragen, aber die Transportverschlüsselung endet beim Anbieter: Dort liegt die Datei entschlüsselt vor, sonst könnte der Server sie nicht bearbeiten. Ab diesem Punkt gilt, was der Anbieter tut und lässt – nicht, was auf seiner Startseite steht.

Praktisch entstehen dabei meist mehr Kopien, als der Upload vermuten lässt:

- **Server-Logs** halten Zeitpunkt, IP-Adresse und Dateinamen fest, oft unabhängig von der eigentlichen Verarbeitung.
- **Zwischenspeicher und CDN** liefern die Ergebnisdatei aus – Download-Links sind häufig eine Weile gültig und selten geheim.
- **Backups** laufen nach ihrem eigenen Zeitplan; ein „wird nach einer Stunde gelöscht" gilt für sie in der Regel nicht.
- **Unterauftragnehmer**: Speicher, Rechenzeit und Auslieferung kommen bei kleinen Anbietern fast immer von Dritten.

Nichts davon ist zwangsläufig böswillig. Es ist nur unüberprüfbar – und das ist der Punkt. Ein Löschversprechen ist eine Zusage, kein Nachweis.

## Der eigentliche Widerspruch

Metadaten entfernt man, weil eine Datei mehr über einen erzählen soll, als man beabsichtigt. Ein Online-Tool löst dieses Problem, indem es sich selbst genau das gibt, was man Fremden vorenthalten wollte: den Aufnahmeort, das Gerät, den Namen – und zusätzlich den Inhalt, um den es eigentlich geht.

Bei einem Urlaubsfoto mag das verschmerzbar sein. Bei der Gehaltsabrechnung, dem Arztbrief, dem Vertragsentwurf oder dem Foto, das man gerade deshalb bereinigt, weil es privat ist, kehrt sich das Verhältnis um: Der Upload ist dann das größere Risiko als das GPS-Feld.

## Wer beruflich hochlädt, hat ein zweites Problem

Sobald in der Datei personenbezogene Daten anderer stecken – Bewerbungsunterlagen, Mandantenschriftsätze, Patientenbefunde, Kundenlisten – ist der Upload eine Weitergabe an einen Dienstleister. Datenschutzrechtlich ist das eine Auftragsverarbeitung: Es braucht einen Vertrag nach Art. 28 DSGVO, eine Prüfung, ob Daten in ein Drittland fließen, und einen Eintrag im Verarbeitungsverzeichnis.

Bei einem kostenlosen Web-Tool ohne Impressum, ohne Auftragsverarbeitungsvertrag und mit unbekanntem Serverstandort ist davon nichts vorhanden. Der Vorgang dauert zehn Sekunden, die Verantwortung bleibt trotzdem.

## „Kostenlos" ist ein Geschäftsmodell

Server, Traffic und Speicher kosten Geld. Wenn ein Dienst dauerhaft gratis ist und keine Bezahlvariante anbietet, finanziert ihn etwas anderes: Werbenetzwerke mit Tracking über mehrere Seiten hinweg, Weiterverkauf von Nutzungsdaten oder – im ungünstigsten Fall – die hochgeladenen Inhalte selbst. Das muss man nicht unterstellen; man sollte nur wissen, dass der Preis nicht null ist, sondern anderswo steht.

## Drei technische Schwächen, die dazukommen

Unabhängig vom Datenschutz liefern Web-Tools oft nicht die Qualität, die man erwartet:

**Neukodierung.** Viele Dienste entfernen Metadaten, indem sie das Bild neu speichern. Das Ergebnis ist ein zweites Mal komprimiert – sichtbar an Kanten und in weichen Verläufen. Wer ein Foto veröffentlicht, verschenkt damit Qualität, ohne es zu merken.

**Halbe Arbeit.** Häufig wird nur der EXIF-Block entfernt. IPTC-Angaben mit Urhebernamen und der XMP-Block aus dem Bearbeitungsprogramm bleiben stehen. Wie diese Standards zusammenhängen, steht in [Was sind Metadaten?](/blog/was-sind-metadaten/). Bei Office-Dokumenten ist der Unterschied noch größer: Namen in Kommentaren und Änderungsverfolgung überleben ein einfaches Leeren des Autorenfelds problemlos.

**Kein Nachweis.** Die wenigsten Dienste zeigen vorher, was überhaupt drinsteckt, und praktisch keiner prüft danach nach, ob wirklich nichts übrig geblieben ist. Man bekommt eine Datei zurück und ein gutes Gefühl.

## Woran du ein brauchbares Werkzeug erkennst

Fünf Fragen, die sich auf jedes Tool anwenden lassen – online wie lokal:

1. **Verlässt die Datei das Gerät?** Wenn ja: Wer betreibt den Server, in welchem Land, und was steht im Datenschutzhinweis?
2. **Sehe ich vorher, was entfernt werden soll?** Ohne Analyse weißt du hinterher nicht, was weg ist.
3. **Wird nachgeprüft?** Ein Werkzeug sollte das Ergebnis erneut einlesen und melden, wenn etwas übrig bleibt.
4. **Bleibt die Qualität erhalten?** Nur die Metadaten neu schreiben statt das Bild neu kodieren.
5. **Bleibt mein Original unangetastet?** Eine saubere Kopie ist die richtige Antwort, kein Überschreiben.

## Wie Spurlos das löst

Spurlos beantwortet die erste Frage konstruktiv: Die App enthält **keinerlei Netzwerkcode**. Sie kann Dateien technisch nicht senden – es gibt keinen Server, kein Konto, kein Tracking. Deine Datei bleibt dort, wo sie schon ist.

Der Rest folgt daraus: Die [Analyse](/features/analysis/) zeigt jedes gefundene Feld, die GPS-Position auf einer Karte und erklärt jeden Fund in einem Satz – kostenlos und unbegrenzt für alle [unterstützten Formate](/unterstuetzte-formate/). Bereinigt wird [ohne Neukodierung](/features/lossless-cleaning/), das Original bleibt liegen, du bekommst eine Kopie. Und die [Selbstprüfung](/features/self-check/) liest die bereinigte Datei danach noch einmal vollständig ein: Erfolg gilt erst, wenn kein Feld mehr gefunden wird.

## Wann ein Online-Tool trotzdem reicht

Ehrlich bleiben lohnt sich: Wenn die Datei ohnehin öffentlich ist, keinen Personenbezug hat und niemandem gehört außer dir – ein Produktfoto vor weißem Hintergrund, eine Grafik ohne Kontext –, ist der Upload kein großes Thema. Der Unterschied wird dort relevant, wo die Datei nicht für Fremde gedacht ist. Und das ist bei fast allem der Fall, das man überhaupt erst bereinigen will.

Wie das konkret für Fotos aussieht, steht in [GPS-Standort aus Fotos entfernen](/blog/gps-standort-aus-fotos-entfernen/); für Dokumente in [Metadaten aus PDF und Word entfernen](/blog/metadaten-aus-pdf-und-word-entfernen/).
