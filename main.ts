// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself: the house reads POST.json from this
// repository, reads the post from X (its first picture, the Doctor's Orders
// meme, and its text), and hands that dossier to the judge. Nothing this
// program writes about the post is judged.
//
// So all this program has to do is copy POST.json from the repository root
// to /output, where the gate reads it, and confirm the copy landed whole:
// the two runs of an entry must write the same bytes.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const src = join(BOT_DIR, 'POST.json');
const dst = join(OUTPUT_DIR, 'POST.json');

mkdirSync(OUTPUT_DIR, { recursive: true });
const bytes = readFileSync(src);
writeFileSync(dst, bytes);
if (statSync(dst).size !== bytes.length) {
  console.error(`POST.json copy size mismatch: wrote ${statSync(dst).size}, expected ${bytes.length}`);
  process.exit(1);
}
