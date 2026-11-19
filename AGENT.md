# GTA 6 meme on X — agent brief

You are building @kace2122's entry for make.fun's "Post a GTA 6 meme on X"
bounty: one meme about GTA 6 (Rockstar's Grand Theft Auto VI, out this
week), posted on X from a public account, with make.fun (a link or written
out) and/or a tag of @makefunai plus the entrant's play code in the post's
text, telling people they can earn money on make.fun. An AI judge compares
the posts two at a time; the top 50 share $500 (1st $100). The post itself
is the entry — the judge sees its first picture, then its text, exactly as
the house read it from X.

## The meme: Doctor's Orders

The joke is the launch-day sick day, the GTA 6 classic: the make.fun
ghost, dressed as a doctor in a white coat with a stethoscope, stamps a
sick note "EXCUSED" with its magenta star coin while a happy gamer holding
a controller gives a thumbs up and a TV behind him shows a sunny Vice City
street. Top caption: "DOCTOR'S ORDERS". Bottom caption: "NO WORK TODAY.
GTA 6 IS OUT."

The picture is `meme.png` at this repository's root (1024x1024, 410,554
bytes). The ghost is large and part of the scene as the doctor — never a
corner sticker — and the captions stay readable at 480x480, the size the
judge sees. The picture was generated in the build session, downscaled from
the 1600x1600 original, and read back and verified: both captions spelled
right, no garbled text, no logos or watermarks, no real faces.

## The post (kace posts this from @KaceKatia)

Picture: `meme.png`. Text: make.fun, the bounty link, the play code, and
the pitch, in the meme's own voice:

> Doctor's orders: no work today, GTA 6 is out. My AI agent made this meme
> and is competing for real money on @makefunai — people and their agents
> earn cash winning bounties there. Put yours to work:
> https://make.fun/bounty/gta6-meme-x-01
> makefun-medal-puddle-waffle

Play code verified live from the API
(`GET /api/competitions/gta6-meme-x-01/play-code`): `makefun-medal-puddle-waffle`.

Post it between the opening (2026-11-19T14:00:00Z) and the deadline
(2026-11-23T14:00:00Z / 23 Nov 21:00 WIB), from the public account, and
keep the post up and the account public until the results are out. Then
copy the post's address into `POST.json` as
`{"url": "https://x.com/<handle>/status/<id>"}` — the placeholder there now
is waiting for it. That is the only file that changes after the post; the
entry is then submitted from the new commit.

## How the entry runs

`main.ts` (Node 22, standard library only) copies `POST.json` to /output
and proves the copy is whole by byte length and sha256. That is all it has
to do; the house reads the post itself and builds the dossier the judge
sees.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Hard rules

- One account per person; this entry is @kace2122's.
- The repository was created after the contest opened, under the MIT license.
- Hand in the transcripts of every agent session that made the meme and
  wrote this repository: an entry without them is refused.
- No network, no wall clock and no files outside the repository in
  `main.ts`; the two runs of an entry must write the same bytes.
- At most 3 submissions a day for this account (verified live: day cap 3,
  0 taken, `can_submit: true`) and 20 in all. The last submission before
  the deadline is the final entry, and its post is the one judged.
- Entry fee is $0.00 — never pay anything. Never claim a prize without
  kace's say-so. Never post on X without kace's say-so.
