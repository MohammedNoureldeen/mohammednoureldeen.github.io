"""Measure picture/sound sync in two synthetic exports. Requires Python 3 and FFmpeg on PATH.

Run: python verify_sync.py
All media is generated in a temporary directory. No network or source media is used.
"""

import math
import struct
import subprocess
import tempfile
from pathlib import Path

FPS = 25
RATE = 48000
FRAME_BYTES = 64 * 48
DELAY_SAMPLES = 5760  # 120 ms at 48 kHz


def ffmpeg(*args):
    return subprocess.run(
        ["ffmpeg", "-hide_banner", "-loglevel", "error", "-nostdin", *args],
        check=True, stdout=subprocess.PIPE,
    ).stdout


def measure(path):
    pixels = ffmpeg("-i", str(path), "-map", "0:v:0", "-f", "rawvideo",
                    "-pix_fmt", "gray", "-")
    audio = ffmpeg("-i", str(path), "-map", "0:a:0", "-f", "s16le", "-")
    # Every pixel in a frame shares the same value in this synthetic fixture.
    flash_frame = next(i for i, pixel in enumerate(pixels[::FRAME_BYTES]) if pixel > 200)
    tone_sample = next(i for i, (s,) in enumerate(struct.iter_unpack("<h", audio)) if abs(s) > 1000)
    flash_ms = 1000 * flash_frame / FPS
    tone_ms = 1000 * tone_sample / RATE
    return flash_ms, tone_ms


def main():
    with tempfile.TemporaryDirectory() as tmp:
        delayed = Path(tmp) / "delayed.mkv"
        aligned = Path(tmp) / "aligned.mkv"
        # Flash at frame 25. A 1 kHz tone begins 120 ms later, at nonzero amplitude.
        tone_start = RATE + DELAY_SAMPLES
        tone = (f"aevalsrc='if(between(n,{tone_start},{tone_start + 2399}),"
                f"0.5*cos(2*PI*1000*n/{RATE}),0)':s={RATE}:d=2")
        ffmpeg("-f", "lavfi", "-i", f"color=c=black:s=64x48:r={FPS}:d=2",
               "-f", "lavfi", "-i", tone,
               "-vf", "drawbox=color=white:t=fill:enable='eq(n,25)'",
               "-c:v", "ffv1", "-c:a", "pcm_s16le", str(delayed))
        # This fixture has leading silence. Remove the known delay and pad its tail.
        ffmpeg("-i", str(delayed), "-c:v", "copy", "-af",
               f"atrim=start_sample={DELAY_SAMPLES},asetpts=PTS-STARTPTS,apad=whole_dur=2",
               "-c:a", "pcm_s16le", str(aligned))
        for path, expected in ((delayed, 120), (aligned, 0)):
            flash, tone = measure(path)
            offset = tone - flash
            print(f"{path.stem}: flash {flash:.3f} ms | tone {tone:.3f} ms | offset {offset:+.3f} ms")
            if not math.isclose(flash, 1000, abs_tol=0.001) or not math.isclose(offset, expected, abs_tol=1000/RATE):
                raise SystemExit("Unexpected timing in decoded fixture")


if __name__ == "__main__":
    main()
