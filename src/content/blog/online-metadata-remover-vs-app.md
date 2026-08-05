---
title: 'Online metadata remover or app? What really happens when you upload'
description: 'To get rid of one GPS field you hand over the entire file to a stranger’s server. Why that is backwards for this particular task — and how to recognise a tool worth using.'
pubDate: '2026-08-05'
lang: 'en'
translationKey: 'online-tools-vs-app'
tags: ['privacy', 'basics', 'metadata', 'comparison']
faq:
  - q: 'Are online metadata removers unsafe?'
    a: 'Not inherently — but they ask for trust you cannot verify. Your file sits in plain text on the provider’s machine, because transport encryption ends there. Whether it is really deleted afterwards, whether copies land in logs, caches or backups, and who has access, is invisible from the outside.'
  - q: 'Is it not enough that the tool promises "files are deleted after one hour"?'
    a: 'The promise may well be true, but it cannot be checked. And it usually covers only the uploaded file itself — not server logs, CDN caches or backups, which run on their own schedule.'
  - q: 'When is an online tool fine?'
    a: 'When the file is public anyway and carries no personal data — a product shot without a location that will end up online regardless. As soon as the file is not meant for strangers, or holds other people’s data, the upload is the bigger problem than the metadata.'
  - q: 'Can I upload files to such a site at work?'
    a: 'If they contain personal data of others — applications, client, patient or customer documents — you are passing that data to a service provider. Under data protection law that is processing on your behalf, with everything attached: a contract under Art. 28 GDPR, a check on international transfers, documentation. A free web tool typically offers none of it.'
---

The trigger is usually small: a photo for a classified ad, minus the coordinates of your flat. Search for that and you find dozens of websites offering exactly this for free — drag the file in, wait, download the clean version.

The process is convenient. For this particular task it is also strangely backwards: to get rid of a single field, you hand over the complete file — image content, document text and every other piece of metadata included.

## What actually happens on upload

When you upload, the file leaves your device in full. It travels encrypted, but transport encryption ends at the provider: there the file sits decrypted, otherwise the server could not process it. From that point on what matters is what the provider does — not what the landing page says.

In practice more copies appear than the upload suggests:

- **Server logs** record time, IP address and file name, often independently of the actual processing.
- **Caches and CDNs** deliver the result file — download links are frequently valid for a while and rarely secret.
- **Backups** run on their own schedule; "deleted after one hour" usually does not apply to them.
- **Subprocessors**: storage, compute and delivery almost always come from third parties at smaller providers.

None of this is necessarily malicious. It is simply unverifiable — and that is the point. A deletion promise is an assurance, not evidence.

## The actual contradiction

You remove metadata because a file should not say more about you than you intended. An online tool solves that problem by giving itself precisely what you wanted to withhold from strangers: the capture location, the device, the name — plus the content you cared about in the first place.

For a holiday photo that may be tolerable. For a payslip, a medical letter, a draft contract or the photo you are cleaning exactly because it is private, the ratio flips: the upload becomes the larger risk, not the GPS field.

## Uploading at work brings a second problem

As soon as a file contains other people's personal data — job applications, client filings, patient reports, customer lists — the upload is a disclosure to a service provider. Under data protection law that is processing on your behalf: it needs a contract under Art. 28 GDPR, a check on whether data flows to a third country, and an entry in your record of processing activities.

With a free web tool that has no imprint, no data processing agreement and an unknown server location, none of that exists. The upload takes ten seconds; the responsibility stays with you.

## "Free" is a business model

Servers, traffic and storage cost money. If a service is permanently free and offers no paid tier, something else funds it: ad networks with cross-site tracking, resale of usage data or — in the worst case — the uploaded content itself. You need not assume the worst; you only need to know that the price is not zero, it is just listed somewhere else.

## Three technical weaknesses on top

Data protection aside, web tools often fall short of what you expect:

**Re-encoding.** Many services strip metadata by saving the image again. The result is compressed a second time — visible along edges and in soft gradients. Publish that photo and you have given away quality without noticing.

**Half the job.** Frequently only the EXIF block is removed. IPTC fields holding creator names and the XMP block written by an editing app stay put. How those standards relate is covered in [What is metadata?](/en/blog/what-is-metadata/). For office documents the gap is wider still: names in comments and tracked changes comfortably survive an emptied author field.

**No proof.** Very few services show you beforehand what is actually inside, and practically none check afterwards whether anything survived. You get a file back and a good feeling.

## How to recognise a tool worth using

Five questions that apply to any tool, online or local:

1. **Does the file leave the device?** If yes: who runs the server, in which country, and what does the privacy notice say?
2. **Do I see beforehand what will be removed?** Without analysis you cannot know afterwards what went.
3. **Is the result verified?** A tool should read the output back and say so if something remains.
4. **Is quality preserved?** Rewrite only the metadata instead of re-encoding the image.
5. **Is my original left alone?** A clean copy is the right answer, not an overwrite.

## How Spurlos handles this

Spurlos answers the first question constructively: the app contains **no networking code at all**. It is technically unable to send files — there is no server, no account, no tracking. Your file stays where it already is.

The rest follows from that: the [analysis](/en/features/analysis/) shows every field it finds, the GPS position on a map, and explains each finding in one sentence — free and unlimited for every [supported format](/en/supported-formats/). Cleaning happens [without re-encoding](/en/features/lossless-cleaning/), the original stays put, you get a copy. And the [self-verification](/en/features/self-check/) reads the cleaned file back in full afterwards: success only counts when no field can be found anymore.

## When an online tool is still fine

Honesty helps here: if the file is public anyway, carries no personal data and belongs to nobody but you — a product shot on white, a context-free graphic — the upload is not a big deal. The difference matters where the file is not meant for strangers. Which is the case for almost everything you would bother cleaning in the first place.

What this looks like for photos is covered in [Removing GPS location from photos](/en/blog/remove-gps-location-from-photos/); for documents in [Removing metadata from PDF and Word](/en/blog/remove-metadata-from-pdf-and-word/).
