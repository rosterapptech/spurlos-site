---
title: 'Removing GPS location from photos — on iPhone, without quality loss'
description: 'Photos store where they were taken, down to the meter. How to check whether your images carry coordinates, how to remove them, and why "Remove location" in the share sheet is not always enough.'
pubDate: '2026-07-29'
lang: 'en'
translationKey: 'gps-aus-fotos-entfernen'
tags: ['gps', 'photos', 'exif', 'how-to', 'privacy']
faq:
  - q: 'Do all photos carry GPS data?'
    a: 'No. Coordinates only end up in an image if the camera app had access to the location. Screenshots, downloaded images and shots taken without location permission have none. You only know for certain once you look at the file.'
  - q: 'Is the "Remove location" option in the iOS share sheet enough?'
    a: 'It removes the coordinates, but only those — camera model, serial number, capture time, editing software and the XMP block all stay. It also applies to that one share action only, and not to files you send from the Files app.'
  - q: 'Does removing metadata reduce photo quality?'
    a: 'Only if the tool re-encodes the image. If just the metadata block is rewritten, the image data stays byte for byte identical — same resolution, same sharpness, practically the same file size.'
---

A photo taken in your own garden generally contains the coordinates of your own garden, accurate to a few meters. Whoever receives the file needs no special knowledge to turn that into an address: paste the coordinates into a mapping service, done. This is not an exotic attack; it is a standard field in the image.

## Where the coordinates come from

If you allow the camera app to access your location, it writes the current position into the file's EXIF block as you press the shutter. Alongside it usually land the capture time including time zone, the camera model, lens data and the software version used. Shots from a system camera may also carry the device serial number.

Not every image is affected: screenshots, images downloaded from the web and shots taken without location permission carry no coordinates. You cannot rely on that, though — the only reliable answer comes from looking inside the file.

## Look first, then decide

Before removing anything, take stock. In the Photos app on iPhone, swipe up on an image or tap the info button; if a map appears, coordinates are present. That view only shows the common fields, though — vendor-specific extensions and the XMP block written by an editing app do not appear there.

[Spurlos](/en/) instead shows every field it finds: the position as a point on a map, next to it camera model, serial number, software and creator fields — with one sentence per finding on why it may matter. This analysis is free and unlimited.

## What the built-in tools do — and do not

When sharing, iOS offers a **Location** toggle under "Options". Turn it off and the image leaves the device without coordinates. That is handy, but it has three limits:

1. **Only the location goes.** Camera model, serial number, capture time and editing traces all stay.
2. **Only for that one action.** The toggle applies to a single share; the file on the device is unchanged.
3. **Only from Photos.** Send the same image from the Files app, from a cloud or as an email attachment and the setting does not apply.

For a quick "just this one image, just this one chat" that is fine. For files you upload, archive or pass on repeatedly, you want a cleaned copy.

## Cleaning without degrading the image

Many tools strip metadata by opening the image and saving it again. That works — but it costs quality, because JPEG is compressed a second time in the process. It shows up mostly along edges and in areas with soft gradients.

The better route: rewrite only the metadata sections and carry the image data over unchanged. That is exactly how Spurlos works — photos and videos are never re-encoded, every pixel stays as it was. Your original is left untouched as well; you always get a clean copy and keep the source file.

After cleaning, the app reads the resulting file back in full and only reports success when no field can be found anymore. If something remains, it says so plainly instead of showing a green checkmark.

## The fast route for everyday use

If cleaning is to become a habit, it must not be a detour every time. Two shortcuts help:

- **Share sheet.** Select the photo, tap Share, choose Spurlos — analyse, clean, pass the clean copy on directly. The app does not need to be opened.
- **Batch and Shortcuts.** Entire selections can be processed in one pass, and cleaning is available as an action for the Shortcuts app. "Always clean before uploading" is set up once.

## When you want to keep metadata

Deleting is not always right. If you publish your own photos, the creator field in the IPTC block can document your claim. For a travel archive the coordinates are the actual value. That is why Spurlos Pro can also remove selectively: keep individual fields, delete the rest.

## In short

Check what is in an image before you share it. For a single photo the toggle in the iOS share sheet is enough; for everything else you want a cleaned copy without re-encoding. Which fields exist in the first place and how they relate is covered in [What is metadata?](/en/blog/what-is-metadata/) — and for documents, see [Removing metadata from PDF and Word](/en/blog/remove-metadata-from-pdf-and-word/).
