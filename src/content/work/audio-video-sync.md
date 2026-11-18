---
order: 1
slugId: audio-video-sync
title: Keeping audio and video in sync
shortTitle: Audio & video sync
subtitle: How I fixed sound and picture timing at Spokn and used a flash and a beep to check the exported video.
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
cardSummary: An edit could leave a speaker’s voice out of sync with their lips. I checked the exported video with a flash and a beep.
decisionSummary: I checked the exported file itself. A successful encode can still leave a speaker’s lips ahead of the sound.
calloutHeading: Why a flash and a beep?
calloutQuote: Human speech makes small timing offsets surprisingly hard to spot consistently by eye. A single-frame visual flash paired with a sharp tone turns “does this look in sync?” into a repeatable regression test on real rendered media.
---

## What an editor notices

After a cut, a speaker’s lips can move before the sound arrives. That small offset is easy to notice during playback and hard to measure consistently by watching someone talk.

## What I changed

At Spokn I fixed FFmpeg audio/video timing issues and added bounded retries for media processing. I also implemented selective HLS re-encoding with a full-encode fallback and parallel S3 transfers. A small edit can reuse unchanged segments.

## How I checked the output

A flash gives you a picture cue with a known position. A beep gives you the same reference in the audio. Put those cues into a test clip, take it through the editing and export path, and compare where the cues land in the result. That comparison can expose a timing error even when the export itself succeeds.

## A timing check you can reproduce

This public example uses a synthetic two-second clip. It illustrates the measurement technique independently of the Spokn pipeline. The inputs are a single white frame at 1.000 s and a 1 kHz tone placed 120 ms later. Both files use lossless video at 25 fps and uncompressed audio at 48 kHz.

| Decoded export | First white frame | Tone onset | Measured offset |
| --- | ---: | ---: | ---: |
| With the injected delay | 1.000 s | 1.120 s | +120 ms |
| After correction | 1.000 s | 1.000 s | 0 ms |

The correction removes 5,760 leading audio samples and pads the tail. The script reads the decoded pixels and audio samples. It checks that the flash stays at 1.000 s and that each offset is within one audio sample of its expected value. This correction applies to the known, constant delay in this fixture.

[Download the verification script](/examples/verify_sync.py) and run `python verify_sync.py` with FFmpeg on your path. It generates both files locally and prints their measured times.
