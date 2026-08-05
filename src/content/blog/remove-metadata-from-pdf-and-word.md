---
title: 'Removing metadata from PDF and Word: why the author stays in anyway'
description: 'Clearing the author field is not enough for office documents: names also sit in comments, in tracked changes and in internal file paths. What is really in there — and how to get it out.'
pubDate: '2026-08-05'
lang: 'en'
translationKey: 'metadaten-pdf-word'
tags: ['pdf', 'office', 'documents', 'how-to', 'privacy']
faq:
  - q: 'Is clearing the author field in Word enough?'
    a: 'No. The author field is one entry among many. Names also appear on every comment and on every edit in tracked changes, joined by internal file paths, the editing duration and embedded thumbnails.'
  - q: 'Does "Export as PDF" remove the metadata?'
    a: 'Quite the opposite: on export the producing application writes fresh metadata into the PDF — producer application, timestamps and often the machine user name. Depending on the export settings, comments and tracked changes can be carried over too.'
  - q: 'Can you see the difference in the finished document?'
    a: 'No. Metadata sits in separate sections of the file and does not affect layout, text or images. A cleaned document looks exactly as it did before.'
---

With photos it is tangible: coordinates lead to an address. With documents it is quieter, and therefore more persistent. A PDF you send to a public authority, a quote to a new client, a CV — names and traces of work travel along everywhere, and nobody was meant to see them.

## What sits inside a PDF

A PDF carries an info dictionary and usually an XMP block on top. Typically you find:

- **Author** — often the profile name of the machine, sometimes an entirely different person if a template was reused
- **Creator and producer** — which application wrote the document, in which version
- **User name** — via path fragments in the producer string, for instance in embedded file references
- **Timestamps** — when created, when last modified
- **Title and keywords** — not rarely the title of a completely different document that was used as a starting point

None of these fields are visible in the open document, but any PDF viewer shows them in the document properties.

## Why the author field in Word is not enough

Modern office documents (DOCX, XLSX, PPTX) are in fact ZIP archives holding a set of XML files. The author field you can clear in the document information is only one of many places where names sit:

- **Comments.** Every comment carries the name and initials of the person who wrote it — even when the author field has long been emptied.
- **Tracked changes.** Every recorded change is tied to a person and a point in time. Sending a document with accepted but uncleaned changes hands over the entire editing history.
- **Internal file paths.** The archive's relationship files hold references to linked files — often with the full path, including the user name and folder structure of the machine.
- **Editing duration and revision counter.** How long and how often a document was worked on.
- **Thumbnails.** Some applications embed a preview image — quite possibly one of an earlier version with content that was cut long ago.

The same applies to OpenDocument files (ODT, ODS, ODP) and to the packages behind Pages, Numbers and Keynote.

## The classic mistake: "I'll just export it as a PDF"

Exporting does not solve the problem, it moves it. On export the producing application writes fresh metadata into the new file — producer application, timestamps, often the user name. And depending on the settings, comments or markup travel into the PDF as well.

A second common detour is printing to a file. That creates new metadata too; which fields exactly depends on the printer driver. Neither route is reliable.

## What cleaning actually has to do

A tool that cleans office documents seriously has to open the archive, edit the affected XML files one by one and put the whole thing back together without touching the content. That is what the office deep clean in [Spurlos](/en/features/office-deep-clean/) does: author names in comments and tracked changes, internal file paths, editing duration and embedded thumbnails are removed, while text, tables, formulas and layout stay untouched.

For PDF files the info dictionary and the XMP block are cleaned — author, producer, user name, timestamps and keywords.

And as with every format: after cleaning, the app reads the resulting file back in full and only reports success when no field can be found anymore.

## Looking first is worth it

Before you clean, look at what is actually inside — that part is often the more convincing one. Analysis in Spurlos is free for every format, PDF and office files included. Which file types are cleaned all the way into their metadata, and which only at file system level, is listed in the [supported formats](/en/supported-formats/) overview.

## A habit worth having

Documents are rarely sent one at a time. For attachments that go out regularly, batch processing helps: pick a folder, clean in one pass, send the clean copies. If you like, attach cleaning to your own sending routine via the Shortcuts action.

## In short

In documents the name rarely sits in just one place. Clearing only the author field misses comments, tracked changes and internal paths. The basics are covered in [What is metadata?](/en/blog/what-is-metadata/); the photo side in [Removing GPS location from photos](/en/blog/remove-gps-location-from-photos/).
