// Page views for NusaStat. Each view returns an HTML string; charts are
// mounted after insertion (mountCharts) because they are live SVG nodes.
import { indicators, series, ageStructure, sectors, releases, provinces, density, people, sources } from './data.js';
import { lineChart, barChart, donut } from './charts.js';

const fmt = (n, d = 1) => n.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });

function kpiCard(ind) {
  return `<article class="kpi">
    <div class="kpi-label">${ind.label}</div>
    <div class="kpi-value">${fmt(ind.value, ind.decimals ?? 1)} <span class="kpi-unit">${ind.unit}</span></div>
    <div class="kpi-meta">${ind.year} · ${ind.change}</div>
    <div class="kpi-src">Source: ${ind.source}</div>
  </article>`;
}

export function homeView() {
  return `
  <section class="hero">
    <p class="eyebrow">Statistics Indonesia · BPS data, 2015–2024</p>
    <h1>Indonesia in numbers</h1>
    <p class="lede">The country's population, economy and people — real figures from
    Statistics Indonesia (BPS), explained in plain language and kept up to date.</p>
    <div class="hero-links">
      <a class="btn" href="#/population">Explore population →</a>
      <a class="btn ghost" href="#/economy">Explore the economy →</a>
      <a class="btn ghost" href="#/regions">Browse 38 provinces →</a>
    </div>
  </section>
  <section aria-label="Key indicators">
    <h2>At a glance — 2024</h2>
    <div class="kpi-grid">${indicators.map(kpiCard).join('')}</div>
  </section>
  <section class="split">
    <div class="panel">
      <h2>Population, 2015–2024</h2>
      <p class="panel-sub">Mid-year estimate, millions. Source: BPS.</p>
      <div class="chart" data-chart="line" data-series="population" data-unit="" data-decimals="1"></div>
    </div>
    <div class="panel">
      <h2>Real GDP growth, 2015–2024</h2>
      <p class="panel-sub">Annual change, %. The 2020 dip is the COVID-19 contraction. Source: BPS.</p>
      <div class="chart" data-chart="line" data-series="gdpGrowth" data-unit="%" data-decimals="2"></div>
    </div>
  </section>
  <section class="split">
    <div class="panel">
      <h2>Latest releases</h2>
      <ul class="releases">${releases.map((r) => `<li><span class="rel-date">${r.date}</span><span class="rel-tag">${r.tag}</span> ${r.title}</li>`).join('')}</ul>
    </div>
    <div class="panel">
      <h2>Where most Indonesians live</h2>
      <p class="panel-sub">Five largest provinces by population, 2024 (millions). Source: BPS.</p>
      <div class="chart" data-chart="bars" data-series="topProvinces"></div>
      <p><a href="#/regions">See all 38 provinces →</a></p>
    </div>
  </section>`;
}

export function populationView() {
  const total = ageStructure.reduce((s, a) => s + a.share, 0);
  return `
  <section class="page-head">
    <p class="eyebrow">Population</p>
    <h1>281.6 million people</h1>
    <p class="lede">Indonesia is the world's fourth most populous country. Growth has slowed
    to about 1% a year, and the working-age share is at its peak — the demographic dividend.</p>
  </section>
  <section class="split">
    <div class="panel wide">
      <h2>Population growth, 2015–2024</h2>
      <p class="panel-sub">Mid-year estimates, millions. 2020 is the census count. Source: BPS.</p>
      <div class="chart" data-chart="line" data-series="population" data-unit="" data-decimals="1"></div>
    </div>
    <div class="panel">
      <h2>Age structure, 2024</h2>
      <p class="panel-sub">Share of population by age group. Source: BPS projection.</p>
      <div class="chart donut-wrap" data-chart="donut" data-series="ageStructure"></div>
      <ul class="legend">${ageStructure.map((a, i) => `<li><span class="dot" style="background:${['#0e7490', '#f59e0b', '#64748b'][i]}"></span>${a.group} — <strong>${a.share}%</strong></li>`).join('')}</ul>
      <p class="note">Median age: <strong>30.5 years</strong>. Dependency ratio: 45.7 per 100 working-age people.</p>
    </div>
  </section>
  <section class="panel">
    <h2>What the numbers mean</h2>
    <div class="facts">
      <div><strong>56%</strong> of Indonesians live on Java — an island of 128,000 km² holding 156 million people.</div>
      <div><strong>Jakarta</strong> is the densest province: 16,084 people per km², versus 5 in Papua.</div>
      <div><strong>1.0%</strong> annual growth adds about 2.8 million people every year — a city the size of Bali's population, yearly.</div>
    </div>
  </section>`;
}

export function economyView() {
  return `
  <section class="page-head">
    <p class="eyebrow">Economy</p>
    <h1>A US$ 1.4 trillion economy</h1>
    <p class="lede">GDP reached Rp 22,139 trillion in 2024, growing 5.03% in real terms.
    Manufacturing is the largest sector; household consumption drives about half of GDP.</p>
  </section>
  <section class="split">
    <div class="panel">
      <h2>Real GDP growth, 2015–2024</h2>
      <p class="panel-sub">Annual change, %. Source: BPS national accounts.</p>
      <div class="chart" data-chart="line" data-series="gdpGrowth" data-unit="%" data-decimals="2"></div>
    </div>
    <div class="panel">
      <h2>Inflation, 2019–2024</h2>
      <p class="panel-sub">December year-on-year, %. Source: BPS consumer price index.</p>
      <div class="chart" data-chart="line" data-series="inflation" data-unit="%" data-decimals="2"></div>
    </div>
  </section>
  <section class="panel">
    <h2>GDP by sector, 2024</h2>
    <p class="panel-sub">Share of GDP, %. Source: BPS national accounts.</p>
    <div class="chart" data-chart="bars" data-series="sectors"></div>
  </section>
  <section class="split">
    <div class="panel">
      <h2>Trade</h2>
      <dl class="stat-list">
        <div><dt>Exports 2024</dt><dd>US$ 264.7 billion</dd></div>
        <div><dt>Imports 2024</dt><dd>US$ 233.7 billion</dd></div>
        <div><dt>Trade surplus</dt><dd>US$ 31.0 billion</dd></div>
        <div><dt>Top export</dt><dd>Coal, palm oil, nickel products</dd></div>
      </dl>
      <p class="note">Source: BPS foreign trade statistics, 2024.</p>
    </div>
    <div class="panel">
      <h2>Money &amp; prices</h2>
      <dl class="stat-list">
        <div><dt>Policy rate (BI Rate)</dt><dd>6.00% (Dec 2024)</dd></div>
        <div><dt>Rupiah vs US$</dt><dd>Rp 16,162 per US$ (Dec 2024 avg)</dd></div>
        <div><dt>Foreign reserves</dt><dd>US$ 155.7 billion (Dec 2024)</dd></div>
        <div><dt>Government debt</dt><dd>39.0% of GDP</dd></div>
      </dl>
      <p class="note">Sources: Bank Indonesia; Ministry of Finance, 2024.</p>
    </div>
  </section>`;
}

export function peopleView() {
  return `
  <section class="page-head">
    <p class="eyebrow">People</p>
    <h1>Health, learning and work</h1>
    <p class="lede">Poverty fell to 9.03% in March 2024 — the lowest since records began —
    and unemployment to 4.91%. The Human Development Index reached 75.02.</p>
  </section>
  <section class="split">
    <div class="panel">
      <h2>Unemployment, 2019–2024</h2>
      <p class="panel-sub">Open unemployment rate, August each year, %. Source: BPS Sakernas.</p>
      <div class="chart" data-chart="line" data-series="unemployment" data-unit="%" data-decimals="2"></div>
    </div>
    <div class="panel">
      <h2>Poverty rate, 2019–2024</h2>
      <p class="panel-sub">Share of population below the poverty line, March each year, %. Source: BPS Susenas.</p>
      <div class="chart" data-chart="line" data-series="poverty" data-unit="%" data-decimals="2"></div>
    </div>
  </section>
  <section class="panel">
    <h2>People in numbers, 2024</h2>
    <div class="people-grid">${people.map((p) => `<div class="person-stat"><div class="ps-value">${p.value}</div><div class="ps-label">${p.label}</div><div class="ps-note">${p.note}</div></div>`).join('')}</div>
    <p class="note">Sources: BPS Susenas, Sakernas and HDI publications, 2024.</p>
  </section>`;
}

export function regionsView() {
  return `
  <section class="page-head">
    <p class="eyebrow">Regions</p>
    <h1>38 provinces, one table</h1>
    <p class="lede">Search by name, or sort by population, density or GRDP per capita.
    Tap a province for its detail page.</p>
  </section>
  <section class="panel">
    <div class="table-tools">
      <label class="search-box">Search provinces
        <input id="prov-search" type="search" placeholder="Type a province name…" autocomplete="off">
      </label>
      <div class="sort-group" role="group" aria-label="Sort provinces">
        <button class="sort-btn active" data-sort="pop">Population ↓</button>
        <button class="sort-btn" data-sort="name">Name A–Z</button>
        <button class="sort-btn" data-sort="density">Density ↓</button>
        <button class="sort-btn" data-sort="grdp">GRDP / capita ↓</button>
      </div>
    </div>
    <p class="table-count" id="prov-count"></p>
    <div class="table-wrap">
      <table id="prov-table">
        <thead><tr><th>Province</th><th class="num">Population (m)</th><th class="num">Area (km²)</th><th class="num">Density (/km²)</th><th class="num">GRDP / capita (Rp m)</th></tr></thead>
        <tbody></tbody>
      </table>
    </div>
    <p class="note">Figures: BPS mid-year population estimates and GRDP, 2024. Density = population ÷ area.</p>
  </section>`;
}

export function provinceView(name) {
  const p = provinces.find((x) => x.name.toLowerCase() === decodeURIComponent(name).toLowerCase());
  if (!p) return missingView();
  const share = ((p.pop / 281.6) * 100).toFixed(2);
  const rank = [...provinces].sort((a, b) => b.pop - a.pop).findIndex((x) => x.name === p.name) + 1;
  return `
  <section class="page-head">
    <p class="eyebrow"><a href="#/regions">← All provinces</a></p>
    <h1>${p.name}</h1>
    <p class="lede">Rank #${rank} of 38 provinces by population, 2024.</p>
  </section>
  <section class="kpi-grid">
    <article class="kpi"><div class="kpi-label">Population</div><div class="kpi-value">${fmt(p.pop, 2)} <span class="kpi-unit">million</span></div><div class="kpi-meta">${share}% of Indonesia</div><div class="kpi-src">Source: BPS, 2024</div></article>
    <article class="kpi"><div class="kpi-label">Area</div><div class="kpi-value">${p.area.toLocaleString('en-US')} <span class="kpi-unit">km²</span></div><div class="kpi-meta">${(p.area / 1916907 * 100).toFixed(2)}% of Indonesia</div><div class="kpi-src">Source: BPS, 2024</div></article>
    <article class="kpi"><div class="kpi-label">Density</div><div class="kpi-value">${density(p).toLocaleString('en-US')} <span class="kpi-unit">/ km²</span></div><div class="kpi-meta">National average: 147 / km²</div><div class="kpi-src">Computed from BPS figures</div></article>
    <article class="kpi"><div class="kpi-label">GRDP per capita</div><div class="kpi-value">Rp ${fmt(p.grdp, 1)} <span class="kpi-unit">million</span></div><div class="kpi-meta">National average: Rp 78.6 million</div><div class="kpi-src">Source: BPS, 2024</div></article>
  </section>
  <section class="panel">
    <h2>How ${p.name} compares</h2>
    <p>${p.pop > 10 ? `${p.name} is one of Indonesia's most populous provinces, home to more people than many countries.` : `${p.name} is a smaller province by population, but covers a large share of the country's land.`}
    Its GRDP per capita of Rp ${fmt(p.grdp, 1)} million is ${p.grdp > 78.6 ? 'above' : 'below'} the national average of Rp 78.6 million.</p>
    <p><a href="#/regions">← Back to all provinces</a></p>
  </section>`;
}

export function sourcesView() {
  return `
  <section class="page-head">
    <p class="eyebrow">Sources &amp; methods</p>
    <h1>Where every figure comes from</h1>
    <p class="lede">NusaStat republishes figures from official statistics. Every number on
    this site names its source and year; nothing is estimated by us except density,
    which is population divided by area.</p>
  </section>
  <section class="panel">
    <div class="table-wrap">
      <table>
        <thead><tr><th>Publication</th><th>Publisher</th><th>What it covers</th></tr></thead>
        <tbody>${sources.map((s) => `<tr><td>${s.pub}</td><td>${s.org}</td><td>${s.covers}</td></tr>`).join('')}</tbody>
      </table>
    </div>
  </section>
  <section class="panel">
    <h2>Methods &amp; notes</h2>
    <ul class="methods">
      <li>Population figures are BPS mid-year estimates; 2020 is the census count.</li>
      <li>GDP is nominal in rupiah unless marked "real", which means inflation-adjusted growth.</li>
      <li>Poverty uses the BPS poverty line from the March Susenas survey each year.</li>
      <li>Unemployment is the open unemployment rate from Sakernas, August each year.</li>
      <li>Provincial GRDP per capita is at current prices, 2024.</li>
      <li>This site is an independent demo and is not affiliated with BPS.</li>
    </ul>
  </section>`;
}

export function missingView() {
  return `<section class="page-head"><h1>Page not found</h1><p class="lede">That page does not exist on NusaStat. <a href="#/">Back to the dashboard →</a></p></section>`;
}

// Mount live SVG charts into [data-chart] slots, and wire the regions table.
export function mountCharts(root) {
  for (const slot of root.querySelectorAll('[data-chart]')) {
    const kind = slot.dataset.chart;
    const key = slot.dataset.series;
    if (kind === 'line') {
      slot.appendChild(lineChart(series[key], { unit: slot.dataset.unit || '', decimals: Number(slot.dataset.decimals || 1) }));
    } else if (kind === 'bars' && key === 'sectors') {
      slot.appendChild(barChart(sectors.map((s) => ({ name: s.name, value: s.share })), { unit: '%' }));
    } else if (kind === 'bars' && key === 'topProvinces') {
      const top = [...provinces].sort((a, b) => b.pop - a.pop).slice(0, 5);
      slot.appendChild(barChart(top.map((p) => ({ name: p.name, value: p.pop })), { unit: ' m' }));
    } else if (kind === 'donut') {
      slot.appendChild(donut(ageStructure.map((a) => ({ value: a.share }))));
    }
  }
  wireRegionsTable(root);
}

function provinceRow(p) {
  const slug = encodeURIComponent(p.name);
  return `<tr><td><a href="#/region/${slug}">${p.name}</a></td><td class="num">${fmt(p.pop, 2)}</td><td class="num">${p.area.toLocaleString('en-US')}</td><td class="num">${density(p).toLocaleString('en-US')}</td><td class="num">${fmt(p.grdp, 1)}</td></tr>`;
}

export function wireRegionsTable(root) {
  const tbody = root.querySelector('#prov-table tbody');
  if (!tbody) return;
  const input = root.querySelector('#prov-search');
  const count = root.querySelector('#prov-count');
  let sortKey = 'pop';
  function renderRows() {
    const q = (input.value || '').trim().toLowerCase();
    let rows = provinces.filter((p) => p.name.toLowerCase().includes(q));
    const cmp = {
      pop: (a, b) => b.pop - a.pop,
      name: (a, b) => a.name.localeCompare(b.name),
      density: (a, b) => density(b) - density(a),
      grdp: (a, b) => b.grdp - a.grdp,
    }[sortKey];
    rows = rows.sort(cmp);
    tbody.innerHTML = rows.map(provinceRow).join('') || '<tr><td colspan="5">No province matches that search.</td></tr>';
    count.textContent = `${rows.length} of 38 provinces shown`;
  }
  input.addEventListener('input', renderRows);
  for (const btn of root.querySelectorAll('.sort-btn')) {
    btn.addEventListener('click', () => {
      sortKey = btn.dataset.sort;
      for (const b of root.querySelectorAll('.sort-btn')) b.classList.toggle('active', b === btn);
      renderRows();
    });
  }
  renderRows();
}
