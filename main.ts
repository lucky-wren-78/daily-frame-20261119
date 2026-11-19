// The Daily Frame — entry program for make.fun's news-image-20261119.
//
// Rebuilt morning edition: the first hours of Thursday 19 November 2026 —
// 13 stories across 5 continents, one front page and a map. The entry image
// is the committed entry.png beside this file: a newspaper front page
// typeset as design.html and rendered to PNG by render.mjs during the build.
//
// This program is deliberately boring: it checks the committed image
// against the competition gate (a whole PNG or JPEG, at most 1 MiB, at most
// 1024x1024) and then copies it byte for byte to the output directory, so
// the grader's two runs always produce identical bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const imageUrl = new URL('./entry.png', import.meta.url);
const bytes = readFileSync(imageUrl);

// --- gate self-checks -------------------------------------------------------

const ONE_MIB = 1_048_576;
const MAX_DIMENSION = 1024; // the gate allows at most 1024x1024
if (bytes.length > ONE_MIB) {
  throw new Error(`entry.png is ${bytes.length} bytes; the gate allows at most ${ONE_MIB}`);
}

const pngMagic = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
const looksPng = pngMagic.every((b, i) => bytes[i] === b);
const looksJpeg = bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
if (!looksPng && !looksJpeg) {
  throw new Error('entry.png starts with neither the PNG nor the JPEG signature');
}

if (looksPng) {
  // PNG IHDR: width and height are big-endian uint32s at byte offsets 16, 20.
  const w = bytes.readUInt32BE(16);
  const h = bytes.readUInt32BE(20);
  if (w > MAX_DIMENSION || h > MAX_DIMENSION) {
    throw new Error(`entry.png is ${w}x${h}; the gate allows at most ${MAX_DIMENSION}x${MAX_DIMENSION}`);
  }
  // A whole PNG ends with the empty IEND chunk (with its fixed CRC).
  const iendTail = Buffer.from('0000000049454e44ae426082', 'hex');
  if (!bytes.subarray(bytes.length - iendTail.length).equals(iendTail)) {
    throw new Error('entry.png does not end with IEND; the PNG looks truncated');
  }
}

// --- deliver ----------------------------------------------------------------

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(imageUrl, join(outDir, 'entry.png'));
