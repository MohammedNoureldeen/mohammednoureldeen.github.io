---
order: 1
slugId: audio-video-sync
title: Keeping audio and video in sync
shortTitle: Audio & video sync
subtitle: My work on video export at Spokn and a simple way to check whether sound and picture line up.
employer: Spokn
role: Software Engineer
period: Aug 2025 – Present
evidenceBadge: Employer Project · Spokn
illustrationBadge: Contains Labeled Schematic Illustrations
ogImage: /og/audio-video-sync.png
stack:
  - FFmpeg
  - HLS
  - Node.js
  - TypeScript
  - AWS S3
  - Real-Media Regression Fixtures
cardSummary: Keep a speaker’s lips and voice together after a cut.
decisionSummary: I checked the exported file itself. A successful encode can still leave a speaker’s lips ahead of the sound.
calloutHeading: Why a flash and a beep?
calloutQuote: Human speech makes small timing offsets surprisingly hard to spot consistently by eye. A single-frame visual flash paired with a sharp tone turns “does this look in sync?” into a repeatable regression test on real rendered media.
---

## My work at Spokn

At Spokn, I worked on keeping sound and picture in sync through editing and export. I used a test clip with a flash and a beep to check the exported file. Comparing the two cues made a timing offset easier to spot than watching someone speak.

## A timing check you can reproduce

The measurements below come from a separate, synthetic two-second clip. It has a single white frame at 1.000 s and a 1 kHz tone deliberately placed 120 ms later. Both files use lossless video at 25 fps and uncompressed audio at 48 kHz.

| Decoded export | First white frame | Tone onset | Measured offset |
| --- | ---: | ---: | ---: |
| With the injected delay | 1.000 s | 1.120 s | +120 ms |
| After correction | 1.000 s | 1.000 s | 0 ms |

The correction removes 5,760 leading audio samples and pads the tail. The script reads the decoded pixels and audio samples. It checks that the flash stays at 1.000 s and that each offset is within one audio sample of its expected value. This correction applies to the known, constant delay in this fixture.

[Download the verification script](/examples/verify_sync.py) and run `python verify_sync.py` with FFmpeg on your path. It generates both files locally and prints their measured times.
