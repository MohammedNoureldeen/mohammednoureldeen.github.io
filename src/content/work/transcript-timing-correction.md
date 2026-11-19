---
order: 2
slugId: transcript-timing-correction
title: Correcting transcripts while preserving timing
shortTitle: Timing-safe AI transcripts
subtitle: Correcting a product name in a video transcript while keeping the words attached to their original audio.
employer: Spokn
role: Software Engineer
period: Aug 2025 – Present
evidenceBadge: Employer Project · Spokn
illustrationBadge: Contains Labeled Fictional Transcript Demo
ogImage: /og/transcript-timing-correction.png
stack:
  - OpenAI API
  - Node.js
  - TypeScript
  - Python
  - REST APIs
  - Regression Testing
cardSummary: Correct a name while keeping each word at its original timestamp.
decisionSummary: “We recorded on spoken after we had spoken with engineering.” The first occurrence of “spoken” could mean Spokn. I let the model decide about each occurrence and kept the timestamps under application control.
calloutHeading: Designing AI features for failure
calloutQuote: An AI polish step should never be a single point of failure for a core media workflow. Locking timestamps in code and keeping the original transcript when a model call fails keeps editing predictable.
---

## What I built

At Spokn I integrated OpenAI into glossary-based transcript correction. The correction considers the context of each occurrence. A corrected word keeps its original start and end times so it still points to the same piece of audio. When a model call fails, the pipeline retains the original text.
