---
title: 'Server logs, caches, backups: what actually gets stored when you upload a file'
description: 'A "deleted after one hour" promise almost always covers only the one file sitting in the upload folder. What actually ends up in access logs, CDN caches, backups and with subprocessors — and how long it stays there.'
pubDate: '2026-08-09'
lang: 'en'
translationKey: 'server-logs-caches-backups'
tags: ['privacy', 'basics', 'metadata', 'technical']
faq:
  - q: 'If a tool deletes the file after one hour, is everything gone?'
    a: 'Only the one copy in the upload directory that the promise refers to. Server logs, CDN caches and backups follow their own retention schedules, usually unrelated to that promise.'
  - q: 'Why would an IP address or file name show up in a log at all, if this is only about metadata?'
    a: 'Because logging is an infrastructure function, not an application feature. The web server, reverse proxy and CDN log every request by default, regardless of what the application behind them does with the file.'
  - q: 'How long do backups typically stick around?'
    a: 'This varies by provider and is rarely published. Common cycles range from several days to several weeks, often with multiple overlapping generations. A delete command inside the application usually does not reach those copies retroactively.'
  - q: 'Can I check as a user whether a provider actually honours its deletion promise?'
    a: 'No, not from the outside. There is no technical way to see, from a browser, what happens server-side to a file after processing. At best you can read the privacy policy — which rarely breaks things down to the log and backup level.'
---

"Your file is automatically deleted after one hour." That line appears on many online metadata removers, and it is usually true. It only answers a narrow question: what happens to the one file sitting in the application's upload folder. Everything running around that application is untouched by it. Understanding what an upload really means means going through those layers one by one.

## One request, many stops

Between clicking "upload" and getting "done", a file passes through several systems that rarely belong to one company:

1. **Load balancer / reverse proxy** accepts the connection and passes it on.
2. **Web server / application** processes the file — this is where the actual metadata removal happens.
3. **Object storage** holds the uploaded and result files, often in a separate cloud service.
4. **CDN** delivers the result file whenever a download link is generated.
5. **Backup system** snapshots the underlying servers and storage on its own schedule.

Each of these stops can create its own copy, or at least its own record about the file — independent of whatever the application itself promises.

## Server logs: the least visible trace

Access logs are an infrastructure function, not an application feature. The web server logs every incoming request on its own, usually before the application even becomes active. A typical log line contains:

- **IP address** of the sender
- **Timestamp**, down to the second
- **File name** from the upload form
- **User agent** of the browser or device
- **HTTP status code** and bytes transferred

That line has nothing to do with the application's deletion promise. It sits in a separate log file that rotates and archives under its own rules — often 30, 90 or more days, sometimes indefinitely if nobody has actively set up a purge routine. The file name alone can already say plenty: "Termination_Miller_HR.pdf" reveals more inside that log than the file itself will reveal after cleaning.

## Caches and CDNs: the download link outlives the upload

When a tool offers the cleaned file for download, a content delivery network usually sits behind it. The CDN exists to make the download fast — not to make it private. Two properties matter here:

- **Link lifetime.** Download links are rarely tied to a single session. Often they work for anyone who has the URL, for minutes or hours after processing.
- **Edge caching.** The file no longer lives on a single server afterwards, but potentially on several cache nodes spread across regions — each one an additional copy with its own expiry logic.

A "deleted after one hour" claim almost always refers to the origin server. What happens at the CDN's cache nodes in the meantime is a separate matter, and one that barely any provider's landing page mentions.

## Backups: the schedule keeps running regardless

Backups do not capture individual user actions; they capture the state of entire systems at fixed points in time. If a file is uploaded at 2:00pm and deleted from the application at 2:05pm, but the nightly backup only runs at 3:00am, the file was still on the server when that backup ran — and ends up inside it.

Backup cycles typically overlap: a daily, a weekly and a monthly generation running side by side, each with its own retention period. A delete command inside the application acts going forward, not retroactively on backups already taken. Depending on the provider, it can take weeks for a file to disappear from every generation — assuming a routine exists that actually purges old backups at all.

## Subprocessors: the chain rarely stops at one company

Few small online services run their own data centres. A typical setup is a chain of several companies:

- **Hosting/compute** — where the server actually runs
- **Object storage** — where files are staged
- **CDN provider** — who handles delivery
- **Email or analytics service** — if error reports or usage data get sent along

Each of these companies has its own access rights, its own log and backup rules, and its own server location. The metadata remover's privacy policy covers, at best, the first layer; what its subprocessors' own subprocessors do usually goes unmentioned.

## Why this is a particularly poor fit for metadata removers

The point of the exercise is to reveal less about yourself. The route there — uploading to someone else's server — structurally creates more traces than existed before: not just a copy of the original file, but also an IP address, a timestamp and a file name in at least one log that has nothing to do with the actual tool. How to weigh this contradiction in general, and when it actually matters, is covered in [Online metadata remover or app? What really happens when you upload](/en/blog/online-metadata-remover-vs-app/).

## The only way to avoid these layers

You cannot switch off or control any of these layers individually — they are part of how every online service operates, regardless of good intentions. The only thing you can avoid is the cause: not uploading the file in the first place.

Spurlos processes files exclusively on the device. There is no upload, no server, no log, no cache and no backup that could ever reach the file — the app simply contains no networking code capable of doing so. The [analysis](/en/features/analysis/) shows every field it finds directly on the device, [cleaning](/en/features/lossless-cleaning/) runs locally without re-encoding, and [self-verification](/en/features/self-check/) confirms the result without the file ever having left the machine.

## In short

A deletion promise is only as good as its scope — and that scope usually ends at the one file in question. Logs, caches, backups and subprocessors keep running regardless. For the five questions to ask when judging a tool on this front, see [Online metadata remover or app?](/en/blog/online-metadata-remover-vs-app/); for the basics on metadata itself, see [What is metadata?](/en/blog/what-is-metadata/).
