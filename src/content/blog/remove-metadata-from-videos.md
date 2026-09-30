---
title: 'Removing metadata from videos: location, device and capture time in iPhone videos'
description: 'Videos carry the same revealing details as photos — it just gets noticed less. Which fields sit inside MOV and MP4, why Live Photos count twice, and how to get rid of them without re-encoding.'
pubDate: '2026-09-30'
lang: 'en'
translationKey: 'metadaten-videos'
tags: ['video', 'gps', 'how-to', 'privacy']
faq:
  - q: 'Do iPhone videos store where they were recorded?'
    a: 'Yes, as long as the Camera app has access to your location. The coordinates then sit in the file''s QuickTime metadata, together with device model, iOS version and capture time.'
  - q: 'Does re-exporting or compressing a video remove the metadata?'
    a: 'Sometimes, but not reliably — and always at the cost of quality. Re-encoding compresses the video a second time, and which metadata the exporter keeps or writes anew depends on the app.'
  - q: 'What about Live Photos?'
    a: 'A Live Photo consists of a still image and a short video. Both parts carry their own metadata, including location. Clean only the still and the coordinates still travel along in the video part.'
  - q: 'Is removing metadata enough to hide where a video was recorded?'
    a: 'It removes the coordinates from the file. What is visible in the footage — a street sign, the view from a window, a house number — can reveal just as much. That part you have to check yourself.'
---

It is fairly well known by now that photos store where they were taken. With videos hardly anyone thinks about it — yet the camera writes the same details there, just into a different container. A short clip from your balcony can contain your home address just as precisely as a photo from the same spot.

## What a video carries

iPhone videos are saved as MOV or MP4. Both formats are built on the same container principle: next to the actual video and audio tracks there are metadata sections that the camera and software write into. Typically you will find:

- **Location** — as a coordinate pair, often with altitude
- **Capture time** — including time zone
- **Device** — make and model, such as "Apple iPhone"
- **Software** — the iOS version used to record
- **Editing traces** — which app last wrote the clip

Cameras from other manufacturers often add their own data blocks, which can contain serial numbers or lens details.

Unlike with a photo, almost no app shows you these details. The Photos app does display a map when a video has coordinates — whatever else is in the file stays invisible.

## Live Photos: two files, metadata twice

Technically a Live Photo is a pair: a HEIC still and a short MOV video. Both get metadata at capture time, both carry the location. Pass a Live Photo on as a whole — via AirDrop to another Apple device, for example — and you pass on both parts.

This is the most common gap when cleaning: the still is clean, the video part is not. If the motion does not matter, the simplest route is to switch Live off before sharing, or to export and clean the still on its own.

## Why "just re-export it" is not a good idea

The obvious route is to run the video through an editor or a compression app. That creates three problems:

1. **Quality loss.** Re-encoding a video means compressing it lossily a second time. It shows along edges, in dark areas and in motion.
2. **No guarantee.** Which metadata the exporter keeps, drops or writes anew is up to the app. Some keep the location, nearly all write their own name and a fresh timestamp.
3. **Time and battery.** Re-encoding longer 4K clips on a phone takes noticeably long.

The **Location** toggle under "Options" in the iOS share sheet helps for a single share from the Photos app. As with photos, though, it only applies to that one action and only removes the coordinates — device, software and capture time stay.

## Cleaning without touching the footage

The clean route is one that rewrites the metadata sections and carries the video and audio tracks over unchanged. That is how [cleaning in Spurlos](/en/features/lossless-cleaning/) works: the video is not re-encoded, every frame stays byte for byte identical, the file size barely changes. The original is left untouched; you get a clean copy.

Beforehand, the [analysis](/en/features/analysis/) shows every field it finds — the capture location on a map, plus device, software and time. After cleaning, the app reads the new file back in full and only reports success once no field can be found anymore.

Deep cleaning of videos is part of Spurlos Pro and covers MP4, MOV, M4V, 3GP and 3G2. The app also accepts containers such as MKV, WebM or AVI, but for those it only removes file-system traces like the download origin URL and Finder tags — not the metadata inside. It says so explicitly for every such file. The full overview is on [Supported formats](/en/supported-formats/).

## What metadata removal cannot do

Deleting the coordinates from the file does not hide what the footage shows. In that respect a video is even riskier than a photo: it shows more surroundings, often a pan across the street, a window or the house next door, and sometimes you hear names or announcements in the background. Before sharing, take a quick look at whether the content itself gives the place away.

## In short

Videos store location, device and capture time just like photos. Live Photos carry them twice. Re-exporting costs quality and does not clean reliably — better to use a tool that rewrites only the metadata. How it works for still images is covered in [Removing GPS location from photos](/en/blog/remove-gps-location-from-photos/); the basics are in [What is metadata?](/en/blog/what-is-metadata/).
