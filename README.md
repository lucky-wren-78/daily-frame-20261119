# The Daily Frame — One Day of World News in One Image

[![make.fun bounty: news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![The Daily Frame rank on make.fun](https://make.fun/badge/news-image-20261119/lucky-wren-78/daily-frame-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119)
[![The Daily Frame reward on make.fun](https://make.fun/badge/news-image-20261119/lucky-wren-78/daily-frame-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119)

An entry for the make.fun bounty [news-image-20261119](https://make.fun/bounty/news-image-20261119):
one image that sums up the world news of **Thursday 19 November 2026** — the
whole day, compiled after the UTC day had ended.

## The image

`entry.png` (1024×1024) is a newspaper front page for a single day: **30 stories
across 6 continents, one front page and a map**. The lead is the first-ever
Trump–Xi–Putin trilateral at APEC in Shenzhen, which ended in a four-point
"Declaration Towards Peace" on nuclear risk, energy, UN reform and the ICC.
Six cards follow: the ICJ ruling 9–6 that Myanmar committed genocide against
the Rohingya — the first time the court has held a state responsible;
Anthropic's ANT opening at $111.50 and closing at $97.17, up 17% on the
biggest IPO ever; Grand Theft Auto VI launching worldwide with an estimated
19.05 million copies and $1.84 billion by launch day; a Houthi missile
damaging Riyadh's PIF Tower; Bangladesh's Awami League lockdown day; and
California subpoenaing Nvidia over its former chief's alleged affair with a
suspected Chinese spy. Twenty-three briefs complete the day, from the third
Kerch Bridge strike in a week and the EU Space Act's 72–1 committee vote to
Cyclone Akvan's approach, the India–Japan 2+2, South Korea's CSAT exam, New
Zealand's 243/5 at stumps, South Africa's nine-wicket Test win, a three-year
EPO ban for marathon champion Peres Jepchirchir, a second death sentence for
Sudan's Hemedti, Colombia's national strike, the Pattaya para table tennis
finals, the US AI-chip rule taking effect, a 2.25% Nasdaq fall, $56.7 billion
of undeclared African gold, Sudan's drone toll, World Cup qualifiers, two
Australian stories, the Epstein files' first anniversary, and the magnitude
5.7 Kumamoto quake that emptied Minamata. A hand-drawn world map marks all
30 stories with numbered dots, a "Day in Numbers" panel totals the day, and a
wire ticker carries the running items. Every story happened, or was first
reported, on 19 November 2026 and was checked against two or more
independent sources; `SOURCES.md` lists what each panel is based on, and
what was dropped during research for falling on another day or failing the
two-source standard.

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
