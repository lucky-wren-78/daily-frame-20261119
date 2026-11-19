# The Daily Frame — One Day of World News in One Image

[![make.fun bounty: news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![The Daily Frame rank on make.fun](https://make.fun/badge/news-image-20261119/lucky-wren-78/daily-frame-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119)
[![The Daily Frame reward on make.fun](https://make.fun/badge/news-image-20261119/lucky-wren-78/daily-frame-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119)

An entry for the make.fun bounty [news-image-20261119](https://make.fun/bounty/news-image-20261119):
one image that sums up the world news of **Thursday 19 November 2026** — as
far as the day had run when this morning edition was compiled (about 04:00
UTC).

## The image

`entry.png` (1024×1024) is a newspaper front page for a single day: **13 stories
across 5 continents, one front page and a map**. The lead story is day two of
APEC in Shenzhen, where Xi Jinping addressed the plenary and the first-ever
Trump–Xi–Putin three-way meeting is due in the afternoon — reported as due,
not as held. Six cards follow: Grand Theft Auto VI launching worldwide at
midnight, with 2.3 million people watching streams by midday in Paris;
Anthropic's shares debuting on the Nasdaq as ANT after pricing at $83 in the
largest IPO ever; Bangladesh's Awami League lockdown day with crude-bomb
blasts and 565 arrests in Dhaka; 551,864 South Koreans sitting the CSAT
university exam, where 22 candidates were caught with phones after a disaster
alert sounded them out; Cyclone Akvan easing ahead of a Friday landfall now
seen at 90–110 km/h; and India and Japan holding their fourth 2+2 dialogue
in Tokyo. Six one-line briefs complete the day: New Zealand 140/5 at tea in
the Wellington Test, Asian markets rising on the Anthropic IPO, the para table
tennis finals closing the Pattaya championships, the US AI-chip remote-access
rule taking effect, the EU Parliament committee voting on the Space Act, and
Colombia's national strike against the Economic Rescue Law. A hand-drawn
world map marks all 13 stories with numbered dots — a "Day in Numbers" panel
totals the day, and a wire ticker carries the morning's running items. Every
story happened, or was first reported, on 19 November 2026 and was checked
against two or more independent sources; `SOURCES.md` lists what each panel
is based on, and what was dropped during research for falling on another day.

## How it is built

- `design.html` — the front page, typeset by hand (HTML/CSS with two inline
  SVG drawings: the Shenzhen skyline and the world map).
- `render.mjs` — renders `design.html` to `entry.png` at 1024×1024 with
  headless Chromium (build-time only; not run by the grader).
- `main.ts` — the entry program (Node 22, standard library only): it checks
  the committed `entry.png` against the competition gate and copies it to
  `/output/entry.png`, byte for byte, so two runs always agree.

## License

MIT — see `LICENSE`.
