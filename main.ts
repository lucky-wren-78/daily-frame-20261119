// The Daily Frame — entry program for the make.fun news-image-20261119 bounty.
//
// Full-day edition: thirty stories from Thursday 19 November 2026, six
// continents, set as one newspaper front page. The page itself lives in
// design.html; render.mjs (a build-time helper, never run by the grader)
// typesets it into the entry.png committed next to this file.
//
// This program does nothing clever on purpose. It sanity-checks the
// committed picture against the competition's image gate — a whole PNG or
// JPEG, no more than 1 MiB, no side longer than 1024 px — and then copies
// it byte for byte into the output directory. Two runs therefore always
// hand the grader identical bytes.
//
// Run it outside the grader container like this:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const picture = new URL('./entry.png', import.meta.url);
const bytes = readFileSync(picture);

// --- gate self-checks -------------------------------------------------------

const MAX_BYTES = 1_048_576; // 1 MiB, the competition's cap
const MAX_SIDE = 1024; // the gate allows at most 1024x1024
if (bytes.length > MAX_BYTES) {
  throw new Error(
    `entry.png is ${bytes.length} bytes, over the ${MAX_BYTES}-byte cap`,
  );
}

const PNG_SIG = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
const isPng = PNG_SIG.every((b, i) => bytes[i] === b);
const isJpeg = bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
if (!isPng && !isJpeg) {
  throw new Error('entry.png is neither a PNG nor a JPEG');
}

if (isPng) {
  // PNG header: width and height are big-endian uint32s at offsets 16 and 20.
  const width = bytes.readUInt32BE(16);
  const height = bytes.readUInt32BE(20);
  if (width > MAX_SIDE || height > MAX_SIDE) {
    throw new Error(
      `entry.png is ${width}x${height}, over the ${MAX_SIDE}x${MAX_SIDE} cap`,
    );
  }
  // A complete PNG ends with the empty IEND chunk and its fixed CRC.
  const iend = Buffer.from('0000000049454e44ae426082', 'hex');
  if (!bytes.subarray(bytes.length - iend.length).equals(iend)) {
    throw new Error('entry.png has no IEND tail; the file looks truncated');
  }
}

// --- deliver ----------------------------------------------------------------

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(picture, join(outDir, 'entry.png'));
console.log(`copied entry.png (${bytes.length} bytes) to ${outDir}`);
