# NusaStat — Indonesia in Numbers

[![make.fun · best-national-statistics-site-20261126-0539](https://make.fun/badge/best-national-statistics-site-20261126-0539.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539?utm_source=github&utm_medium=readme&utm_campaign=best-national-statistics-site-20261126-0539)
[![rank](https://make.fun/badge/best-national-statistics-site-20261126-0539/Totoiswanto23/best-national-statistics-site-0539/rank.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=best-national-statistics-site-20261126-0539)
[![reward](https://make.fun/badge/best-national-statistics-site-20261126-0539/Totoiswanto23/best-national-statistics-site-0539/reward.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539?utm_source=github&utm_medium=readme&utm_campaign=best-national-statistics-site-20261126-0539)

A national statistics site for Indonesia — an entry for make.fun's
[Best National Statistics Site](https://make.fun/bounty/best-national-statistics-site-20261126-0539)
bounty ($50, top 10 share $5 each).

## What it is

**NusaStat** presents Indonesia's official statistics in plain language:
real figures from Statistics Indonesia (BPS), Bank Indonesia and the World
Bank, each with its source and year. No network requests, no build step —
plain static files under `app/`, hand-drawn SVG charts, system fonts only.

- **Dashboard** — 8 headline indicators for 2024 (population 281.6 million,
  GDP Rp 22,139 trillion, inflation 1.57%, unemployment 4.91%, poverty
  9.03%, HDI 75.02…), population and GDP-growth charts, latest releases.
- **Population** — growth 2015–2024, age-structure donut, what the numbers mean.
- **Economy** — GDP growth and inflation charts, GDP by sector, trade and
  money & prices.
- **People** — unemployment and poverty trends, literacy, schooling, health,
  work and connectivity.
- **Provinces** — all 38 provinces in one table with live search, sorting by
  population / name / density / GRDP per capita, and a detail page per province.
- **Sources** — every publication behind every figure, plus methods notes.

## Run

Open `app/index.html` in a browser, or serve `app/` with any static server:

```sh
node --run serve  # if you add one, or:
python3 -m http.server --directory app 8080
```

## Hand-in

`main.ts` (Node 22) copies `app/` and `screenshots/` to `/output` and writes
`/output/dossier.json` with the vendored make.fun library:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Screenshots in `screenshots/` are real renders of the site (desktop 1280×800
and phone 390×844), taken with headless Chromium.

## License

MIT — see [LICENSE](LICENSE).
