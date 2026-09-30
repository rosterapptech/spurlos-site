---
title: 'Do WhatsApp, Signal and Telegram remove metadata? What survives when you share'
description: 'Whether your location travels along is rarely decided by the app alone — it depends on how you send the file. The rule of thumb for messengers, AirDrop, email and social networks, and where it stops working.'
pubDate: '2026-09-30'
lang: 'en'
translationKey: 'messenger-metadaten'
tags: ['messenger', 'privacy', 'photos', 'comparison']
faq:
  - q: 'Does WhatsApp remove location data from photos?'
    a: 'When you send a photo the normal way, it is recompressed, and in tests so far the EXIF data is lost in the process. Send the same photo as a document and the original file arrives — with all its metadata, location included.'
  - q: 'Are photos sent via AirDrop or iMessage safe?'
    a: 'Both transfer the original file by default, location included. In the share sheet you can turn off location for that one share under "Options". Device, capture time and other fields still remain.'
  - q: 'If Instagram or Facebook strip metadata, is everything fine?'
    a: 'For other users, yes; for the platform, no. The file is uploaded in full first and only processed for publication afterwards. What the operator reads and stores before that is up to them.'
  - q: 'Can I rely on how a messenger behaves?'
    a: 'Only to a point. How an app processes files is an internal decision of the provider and can change with any update — for example when a new original-quality option is added. A file you cleaned yourself does not depend on that.'
---

"WhatsApp strips the metadata anyway." That is true — sometimes. Whether a file's capture location reaches the recipient depends less on which messenger you use than on *how* you send the file. The same app can pass a photo on cleaned one time and complete the next.

## The rule of thumb: compressed usually means cleaned

Messengers shrink photos and videos on a normal send to save data. In the process the file is rewritten, and most apps do not carry the original metadata over into the new version. That is a side effect of compression, not an explicit privacy promise.

The reverse also holds: as soon as a file is sent **as the original** — as a document, as a file, "without compression" or in full quality — it usually reaches the recipient byte for byte. With everything inside it.

## How the common routes behave

The overview below describes typical behaviour as things currently stand. Providers change their processing without notice, so treat it as orientation, not as a guarantee.

| Route | Normal photo/video send | As file/document/original |
| --- | --- | --- |
| WhatsApp | recompressed, EXIF removed | original with all metadata |
| Telegram | recompressed, EXIF removed | original with all metadata |
| Signal | processed, metadata removed | original with all metadata |
| iMessage | original, location can be turned off | original with all metadata |
| AirDrop | original, location can be turned off | original with all metadata |
| Email attachment | – | original with all metadata |
| Cloud link (iCloud, Dropbox etc.) | – | original with all metadata |

Two things stand out: Apple's own routes transfer the original by default, and every messenger has a route on which the original file goes through. That route is popular precisely because it preserves quality — send your family holiday photos "in full resolution" and you send the coordinates along.

## The location toggle in the share sheet

For iMessage, AirDrop and every other route out of the Photos app, iOS offers a location toggle under "Options" in the share sheet. It is useful but clearly limited: it removes only the coordinates, applies to that one share only, and does not kick in when the file comes from the Files app, a cloud or a mail attachment. The details are in [Removing GPS location from photos](/en/blog/remove-gps-location-from-photos/).

## Social networks: cleaned for others, not for the operator

Large platforms strip EXIF data from images before showing them publicly. That protects you from other users who download the image. It does not change the fact that the original file reaches the operator in full first and is processed there. What gets read, analysed or retained along the way is entirely up to the operator — the same question that comes with every upload. Why a "will be deleted" rarely covers every copy is explained in [Server logs, caches, backups](/en/blog/what-server-logs-caches-backups-really-store/).

## Documents are the blind spot

The rule of thumb only applies to photos and videos. No messenger compresses PDFs, Word files or spreadsheets — they always arrive as the original, with author names, comments, tracked changes and internal file paths. This is exactly where many people wrongly assume "the messenger takes care of it". What such files contain is covered in [Removing metadata from PDF and Word](/en/blog/remove-metadata-from-pdf-and-word/).

## Stop depending on the route

The reliable option is not to count on how the route behaves but to clean the file yourself beforehand. Then it no longer matters whether it is later compressed, sent as a document or via AirDrop.

With Spurlos that works straight from the [share sheet](/en/features/share-extension/): pick the file, tap Share, then Spurlos — the cleaned copy can be passed on to WhatsApp, Signal or Mail right away, without opening the app. Photos are not re-encoded in the process, so you keep full quality and still lose the metadata. Processing happens entirely on the device.

## In short

Compressed photo sends usually clean along the way, original sends never do. Apple's routes send the original by default, documents always travel complete. If you would rather not memorise which route does what, clean the file yourself before sharing.
