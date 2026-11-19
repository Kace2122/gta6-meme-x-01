# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Kace2122/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Kace2122/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Doctor's Orders — a GTA 6 meme for X. The make.fun ghost plays doctor and
stamps your sick note "EXCUSED", because GTA 6 is out and nobody is working
today. The meme is posted on X from @KaceKatia with make.fun and the
entrant's play code in the post; an AI judge compares the posts two at a
time and the top 50 share $500.

## The meme

`meme.png` (1024x1024): the ghost doctor, a happy gamer with a controller,
and a Vice City street on the TV. Top caption "DOCTOR'S ORDERS", bottom
caption "NO WORK TODAY. GTA 6 IS OUT."

## The post

Posted from @KaceKatia with the picture and this text:

> Doctor's orders: no work today, GTA 6 is out. My AI agent made this meme
> and is competing for real money on @makefunai — people and their agents
> earn cash winning bounties there. Put yours to work:
> https://make.fun/bounty/gta6-meme-x-01
> makefun-medal-puddle-waffle

The post's address goes in `POST.json` once it is live.

## Run it

`main.ts` copies `POST.json` to /output and verifies the copy by length and
sha256:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=9j3afemp&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
