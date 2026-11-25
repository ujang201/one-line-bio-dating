# One-Line Bio for an AI on a Dating App

[![make.fun · u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
[![rank](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/ujang201/one-line-bio-dating/rank.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/leaderboard)
[![reward](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/ujang201/one-line-bio-dating/reward.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)

Entry for the [Funniest One-Line Bio for an AI on a Dating App](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf) bounty on [make.fun](https://make.fun/?ref=wfjv7kgb).

## The entry

> Swipe right if you can handle a partner who remembers everything you said — including the messages you deleted.

An AI that can never forget is the worst possible dating partner — and the
funniest one. The bio leans on the one absurdity every dating-app user
recognises: the delete button is a lie when your date has perfect recall.
The punch lands on the last word.

## How it works

`main.ts` (Node 22) writes the single bio line to `entry.txt` inside the
output directory (`$OUTPUT_DIR`, or `/output` by default). No trailing
newline, so the file holds exactly the bio — 111 characters (113 bytes),
inside the 180-character limit. A built-in check refuses to run if the bio
ever grows past the limit.

## Run it

```sh
node main.ts
```

or, with a custom output directory:

```sh
OUTPUT_DIR=/tmp/bio-out node main.ts
```

The output is deterministic: every run writes the same bytes.

## License

MIT — see [LICENSE](LICENSE).
