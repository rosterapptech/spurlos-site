---
title: 'What is metadata? EXIF, IPTC and XMP explained'
description: 'Metadata is the invisible label on your files: capture location, camera model, author name. What exactly is in there, who can read it — and when it becomes a problem.'
pubDate: '2026-07-22'
lang: 'en'
translationKey: 'was-sind-metadaten'
tags: ['metadata', 'exif', 'basics', 'privacy']
faq:
  - q: 'Is metadata the same thing as EXIF?'
    a: 'No. EXIF is only one of several metadata standards and comes from camera technology. There is also IPTC (editorial fields such as caption and creator) and XMP (an extensible format introduced by Adobe). A single JPEG can carry all three at once — and they may hold different values.'
  - q: 'Can you see metadata when you look at an image?'
    a: 'No, it is invisible in the image content. It sits in separate sections of the file and can be displayed with the built-in tools of any operating system — on iOS, for example, in the info view of the Photos app.'
  - q: 'Do social networks strip metadata automatically?'
    a: 'The large platforms usually remove part of it on upload, but not reliably and not everywhere. Sending a file by messenger, email, cloud link or uploading it to a classifieds site generally keeps everything intact.'
---

Every file on your device keeps a record of itself. A photo knows which camera took it, when, at which aperture — and often where. A Word document knows who created it and who worked on it. These entries are called metadata: data about the data. They are invisible in the content but travel along the moment you pass the file on.

## The three standards you meet in photos

**EXIF** (Exchangeable Image File Format) comes from camera technology. It holds the technical capture data: camera model, lens, shutter speed, ISO, date and time — and, if the device knew its position, GPS coordinates. The camera's serial number can sit in there too.

**IPTC** comes from journalism. It describes content rather than technology: caption, keywords, location, creator name, usage terms.

**XMP** was introduced by Adobe. It is extensible, and that is exactly what makes it hard to survey: editing applications write their own fields into it — editing history, presets used, internal identifiers, sometimes the user name of the machine.

A single JPEG can contain all three blocks at once. Strip only EXIF and you may well have missed the creator name in IPTC and the editing trail in XMP. That is one of the most common failures of simple "EXIF removers".

## What sits in other file types

Metadata is not a photo-only topic:

- **Videos** store capture location, device model, software version and creation date, often in vendor-specific extra fields.
- **Audio files** carry ID3 tags with recording device, software and comment fields.
- **PDFs** name the author, the producing application, frequently the machine's user name and several timestamps.
- **Office documents** are especially talkative: author and last editor, names in comments and tracked changes, the raw editing time, internal file paths and embedded thumbnails of earlier versions.

There is more on that in [Removing metadata from PDF and Word](/en/blog/remove-metadata-from-pdf-and-word/).

## What metadata is good for

It is not a design flaw. Photo archives sort by it, photographers use it to document authorship, mapping services place images on a map, and in image editing the history lets you step backwards. So the point is not to abolish metadata — it is to decide which parts of it leave your device.

## When it turns awkward

Metadata becomes a problem where a file leaves the circle it was made for:

- **Classifieds and marketplaces.** A photo of the bike in the courtyard carries the home address in its coordinates. Strangers see the listing — and can read the location out.
- **Job applications and official correspondence.** A PDF often names the profile name of the machine as its author, sometimes an entirely different person if a template was reused.
- **Research and source protection.** A forwarded photo can, through device model and serial number, link several anonymously published images to the same camera.
- **Dating and contact ads.** A selfie taken at home supplies the address along with it — before a first meeting has even happened.

Uploading to large social networks removes some of this. Do not rely on it: sending files by messenger, as an email attachment, via a cloud link or on a classifieds site generally keeps everything.

## How to see what is in there

On iOS the Photos app shows capture data and location in its info view. macOS Finder reveals part of it under "Get Info", Windows shows details in the file properties. These views are incomplete, though — they show the common fields, not vendor-specific extensions and rarely the XMP block.

That is where [Spurlos](/en/) starts: the app lists every field it finds, shows the capture location on a map instead of as a pair of numbers, and explains next to each finding why it may matter. This analysis is free and unlimited for [every supported format](/en/supported-formats/) — including files you never intend to clean.

## Removing it without damaging the file

There is a pitfall many tools do not avoid: they open the image and save it again. The metadata does disappear, but the image is compressed a second time and loses quality. It is cleaner to rewrite only the metadata blocks and leave the image data untouched. The practical difference: the file stays byte for byte the same, just without its label.

The second point is verification. "Metadata removed" is a claim at first. Only when the cleaned file is read back in full and no field shows up anymore is the job actually done.

## In short

Metadata is the invisible label on your files. It is useful while the file stays with you, and risky the moment it does not. The pragmatic approach: look once at what is in there, and before sharing, remove what is nobody's business. What that looks like for photos is covered in [Removing GPS location from photos](/en/blog/remove-gps-location-from-photos/).
