// gta6-meme-x-01 entry — Node 22, standard library only.
//
// What is judged here is the X post, not this program: the house reads
// POST.json out of this repository, fetches the post from X (its first
// picture — the Doctor's Orders meme — and its text), and hands that
// dossier to the judge. This program's only job is to place an exact copy
// of POST.json into /output so the gate can read it, and to prove the copy
// is exact before it exits.
//
// Determinism: the program reads no clock, no network and no file outside
// the repository, and it writes exactly the bytes it read, so two runs on
// the same checkout produce the same bytes in /output.
//
// Local run (outside the grader's container, where MAKEFUN_BOT_DIR and
// MAKEFUN_OUTPUT_DIR stand in for /bot and /output):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function sha256(bytes: Buffer): string {
  return createHash('sha256').update(bytes).digest('hex');
}

const sourcePath = join(BOT_DIR, 'POST.json');
const targetPath = join(OUTPUT_DIR, 'POST.json');

mkdirSync(OUTPUT_DIR, { recursive: true });

const source = readFileSync(sourcePath);
writeFileSync(targetPath, source);

const copied = readFileSync(targetPath);
if (copied.length !== source.length || sha256(copied) !== sha256(source)) {
  console.error(
    `POST.json did not land whole: copied ${copied.length} bytes ` +
      `(sha256 ${sha256(copied)}), expected ${source.length} bytes ` +
      `(sha256 ${sha256(source)})`,
  );
  process.exit(1);
}

console.log(`POST.json copied to ${targetPath}: ${copied.length} bytes, sha256 ${sha256(copied)}`);
