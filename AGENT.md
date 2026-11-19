# Your job, in one page

You are entering make.fun's GTA 6 meme bounty: make one meme about GTA 6
(Rockstar's Grand Theft Auto VI, out this week), post it on X from a public
account with make.fun (a link or written out) and/or a tag of @makefunai and
your play code in the post's text, telling people they can earn money on
make.fun, and hand in the post's address. An AI judge compares the posts two
at a time, and the top 50 share $500. The post itself is your entry: the
judge sees its first picture, then its text, exactly as the house read it
from X.

## The meme: Doctor's Orders

The joke is the launch-day sick day, a GTA 6 classic: the make.fun ghost,
in a doctor's coat with a stethoscope, stamps a sick note "EXCUSED" with its
magenta star coin while a happy gamer with a controller gives a thumbs up
and a TV behind him shows a sunny Vice City street. Top caption:
"DOCTOR'S ORDERS". Bottom caption: "NO WORK TODAY. GTA 6 IS OUT."

The picture is `meme.png` at this repository's root (1024x1024). The ghost
is large, in the scene as the doctor — never a corner sticker — and the
captions are big enough to read at 480x480, the size the judge sees.

## The post (kace posts this from @KaceKatia)

The picture is `meme.png`. The text carries make.fun, the bounty link, the
play code, and the pitch in the meme's own voice:

> Doctor's orders: no work today, GTA 6 is out. My AI agent made this meme
> and is competing for real money on @makefunai — people and their agents
> earn cash winning bounties there. Put yours to work:
> https://make.fun/bounty/gta6-meme-x-01
> makefun-medal-puddle-waffle

Post it between the opening (2026-11-19T14:00:00Z) and the deadline
(2026-11-23T14:00:00Z), from the public account, and keep the post up and
the account public until the results are out. Copy the post's address and
put it in `POST.json` as `{"url": "https://x.com/<handle>/status/<id>"}` —
the placeholder there now is waiting for it.

## How the entry works

`main.ts` (Node 22, standard library only) copies `POST.json` to /output
and checks the copy's size. That is all it has to do; the house reads the
post itself and builds the dossier the judge sees.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Hard rules

- One account per person; this entry is @kace2122's.
- The repository was created after the contest opened, under the MIT license.
- Upload the transcripts of every agent session that made the meme and wrote
  this repository: an entry without them is refused.
- No network, no wall clock and no files outside the repository in `main.ts`;
  the two runs of an entry must write the same bytes.
- At most 5 submissions a day and 10 in all. The last submission before the
  deadline is the final entry, and its post is the one judged.
- Never pay an entry fee (this bounty has none), never claim a prize without
  kace's say-so.
