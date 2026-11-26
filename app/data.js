// NusaStat data — Indonesia in Numbers.
// Figures are drawn from Statistics Indonesia (BPS) publications and the
// World Bank, each with its year. Values are rounded for display; the
// Sources page lists the exact publication behind every series.

// Headline indicators, latest available year.
export const indicators = [
  { key: 'population', label: 'Population', value: 281.6, unit: 'million', year: 2024, change: '+1.0% vs 2023', source: 'BPS', decimals: 1 },
  { key: 'gdp', label: 'GDP (nominal)', value: 22139, unit: 'Rp trillion', year: 2024, change: '+5.03% real growth', source: 'BPS', decimals: 0 },
  { key: 'gdpCapita', label: 'GDP per capita', value: 78.6, unit: 'Rp million', year: 2024, change: '≈ US$ 4,960', source: 'BPS', decimals: 1 },
  { key: 'inflation', label: 'Inflation (Dec, yoy)', value: 1.57, unit: '%', year: 2024, change: 'within 2.5% ± 1% target', source: 'BPS', decimals: 2 },
  { key: 'unemployment', label: 'Unemployment rate', value: 4.91, unit: '%', year: 2024, change: 'Aug 2024, lowest since 1998', source: 'BPS', decimals: 2 },
  { key: 'poverty', label: 'Poverty rate', value: 9.03, unit: '%', year: 2024, change: 'Mar 2024, 25.22 million people', source: 'BPS', decimals: 2 },
  { key: 'hdi', label: 'Human Development Index', value: 75.02, unit: 'points', year: 2024, change: '+0.63 vs 2023', source: 'BPS', decimals: 2 },
  { key: 'life', label: 'Life expectancy', value: 74.2, unit: 'years', year: 2024, change: '+0.2 vs 2023', source: 'BPS', decimals: 1 },
];

// Yearly series. Each entry: [year, value].
export const series = {
  population: [
    [2015, 255.6], [2016, 258.7], [2017, 261.9], [2018, 265.0], [2019, 268.1],
    [2020, 270.2], [2021, 273.9], [2022, 275.8], [2023, 278.7], [2024, 281.6],
  ],
  gdpGrowth: [
    [2015, 4.88], [2016, 5.03], [2017, 5.07], [2018, 5.17], [2019, 5.02],
    [2020, -2.07], [2021, 3.70], [2022, 5.31], [2023, 5.05], [2024, 5.03],
  ],
  inflation: [
    [2019, 2.72], [2020, 1.68], [2021, 1.87], [2022, 5.51], [2023, 2.61], [2024, 1.57],
  ],
  unemployment: [
    [2019, 5.28], [2020, 7.07], [2021, 6.49], [2022, 5.86], [2023, 5.45], [2024, 4.91],
  ],
  poverty: [
    [2019, 9.22], [2020, 9.78], [2021, 9.71], [2022, 9.57], [2023, 9.36], [2024, 9.03],
  ],
};

// Age structure, 2024 (% of population). Source: BPS population projection.
export const ageStructure = [
  { group: '0–14 years', share: 24.6 },
  { group: '15–64 years', share: 68.6 },
  { group: '65+ years', share: 6.8 },
];

// GDP by sector, share of GDP 2024 (%). Source: BPS national accounts.
export const sectors = [
  { name: 'Manufacturing', share: 18.67 },
  { name: 'Wholesale & retail trade', share: 12.85 },
  { name: 'Agriculture, forestry & fishing', share: 12.53 },
  { name: 'Construction', share: 9.83 },
  { name: 'Mining & quarrying', share: 8.42 },
  { name: 'Transportation & storage', share: 5.02 },
  { name: 'Information & communication', share: 4.26 },
  { name: 'Financial & insurance', share: 4.07 },
  { name: 'Public administration', share: 3.02 },
  { name: 'Education', share: 2.96 },
  { name: 'All other sectors', share: 18.37 },
];

// Latest statistical releases.
export const releases = [
  { date: 'Nov 2025', title: 'GDP grew 5.04% (yoy) in Q3 2025', tag: 'Economy' },
  { date: 'Nov 2025', title: 'Unemployment eased to 4.85% in August 2025', tag: 'Labour' },
  { date: 'Oct 2025', title: 'Poverty rate 8.42% in March 2025 — lowest on record', tag: 'Welfare' },
  { date: 'Sep 2025', title: 'Mid-year population estimate 2025: 284.4 million', tag: 'Population' },
  { date: 'Aug 2025', title: 'Exports reached US$ 24.9 billion in July 2025', tag: 'Trade' },
  { date: 'Jul 2025', title: 'Human Development Index 2024: 75.02', tag: 'People' },
];

// Provinces, 2024. Population in millions (BPS mid-year estimate), area in
// km², GRDP per capita in Rp million (BPS). Density is computed.
export const provinces = [
  { name: 'West Java', pop: 49.94, area: 35378, grdp: 63.0 },
  { name: 'East Java', pop: 41.82, area: 47803, grdp: 68.6 },
  { name: 'Central Java', pop: 37.89, area: 32801, grdp: 51.7 },
  { name: 'North Sumatra', pop: 16.03, area: 72981, grdp: 73.9 },
  { name: 'Banten', pop: 12.43, area: 9663, grdp: 75.6 },
  { name: 'Jakarta', pop: 10.68, area: 664, grdp: 322.5 },
  { name: 'South Sulawesi', pop: 9.46, area: 46717, grdp: 66.4 },
  { name: 'Lampung', pop: 9.42, area: 34624, grdp: 52.8 },
  { name: 'South Sumatra', pop: 8.98, area: 91592, grdp: 74.6 },
  { name: 'Riau', pop: 6.85, area: 87024, grdp: 189.8 },
  { name: 'Riau Islands', pop: 2.20, area: 8201, grdp: 175.0 },
  { name: 'Bangka Belitung Islands', pop: 1.50, area: 16424, grdp: 72.0 },
  { name: 'West Sumatra', pop: 6.08, area: 42013, grdp: 62.4 },
  { name: 'West Kalimantan', pop: 5.99, area: 147307, grdp: 52.9 },
  { name: 'West Nusa Tenggara', pop: 5.66, area: 18572, grdp: 40.1 },
  { name: 'East Nusa Tenggara', pop: 5.66, area: 47932, grdp: 27.4 },
  { name: 'Aceh', pop: 5.58, area: 57956, grdp: 47.4 },
  { name: 'Bali', pop: 4.41, area: 5780, grdp: 75.9 },
  { name: 'South Kalimantan', pop: 4.30, area: 38744, grdp: 80.5 },
  { name: 'East Kalimantan', pop: 4.02, area: 129067, grdp: 279.7 },
  { name: 'Yogyakarta', pop: 3.77, area: 3133, grdp: 57.0 },
  { name: 'Jambi', pop: 3.63, area: 50058, grdp: 81.8 },
  { name: 'Central Sulawesi', pop: 3.14, area: 61841, grdp: 93.0 },
  { name: 'Central Kalimantan', pop: 2.80, area: 153565, grdp: 83.0 },
  { name: 'Southeast Sulawesi', pop: 2.78, area: 38140, grdp: 66.4 },
  { name: 'North Sulawesi', pop: 2.73, area: 13892, grdp: 66.0 },
  { name: 'Bengkulu', pop: 2.11, area: 19919, grdp: 44.6 },
  { name: 'Maluku', pop: 2.04, area: 46914, grdp: 35.0 },
  { name: 'West Sulawesi', pop: 1.57, area: 16787, grdp: 45.0 },
  { name: 'North Maluku', pop: 1.47, area: 31983, grdp: 62.0 },
  { name: 'Highland Papua', pop: 1.47, area: 51213, grdp: 12.6 },
  { name: 'Central Papua', pop: 1.39, area: 61073, grdp: 55.0 },
  { name: 'Gorontalo', pop: 1.25, area: 11257, grdp: 44.0 },
  { name: 'Papua', pop: 1.23, area: 81049, grdp: 68.0 },
  { name: 'West Papua', pop: 1.23, area: 60275, grdp: 91.0 },
  { name: 'North Kalimantan', pop: 0.74, area: 75467, grdp: 198.0 },
  { name: 'Southwest Papua', pop: 0.62, area: 38167, grdp: 63.0 },
  { name: 'South Papua', pop: 0.55, area: 117849, grdp: 45.0 },
];

export function density(p) {
  return Math.round((p.pop * 1e6) / p.area);
}

// People indicators, 2024. Source: BPS.
export const people = [
  { label: 'Literacy rate (15+)', value: '98.7%', note: 'Share of people aged 15+ who can read and write' },
  { label: 'Mean years of schooling', value: '9.0 years', note: 'Average schooling of people aged 25+' },
  { label: 'Expected years of schooling', value: '13.2 years', note: 'Schooling a 7-year-old can expect to receive' },
  { label: 'Infant mortality', value: '16.1 per 1,000', note: 'Deaths under age 1 per 1,000 live births' },
  { label: 'Labour force participation', value: '70.8%', note: 'Share of people 15+ working or looking for work, Aug 2024' },
  { label: 'Informal employment', value: '59.2%', note: 'Share of workers in informal jobs, Aug 2024' },
  { label: 'Internet users', value: '79.5%', note: 'Share of population using the internet, 2024' },
  { label: 'Households with electricity', value: '99.4%', note: 'Share of households with access to electricity' },
];

// Sources and methods, shown on the Sources page.
export const sources = [
  { pub: 'Statistik Indonesia 2025', org: 'BPS — Statistics Indonesia', covers: 'Population, economy, welfare headline figures' },
  { pub: 'Population Census 2020 & mid-year estimates', org: 'BPS', covers: 'Population totals, age structure, provincial figures' },
  { pub: 'National Accounts (GDP), quarterly releases', org: 'BPS', covers: 'GDP growth, sector shares, GDP per capita' },
  { pub: 'National Labour Force Survey (Sakernas), Aug 2024', org: 'BPS', covers: 'Unemployment, participation, informal work' },
  { pub: 'National Socio-Economic Survey (Susenas), Mar 2024', org: 'BPS', covers: 'Poverty rate, literacy, electricity access' },
  { pub: 'Human Development Index 2024', org: 'BPS', covers: 'HDI, life expectancy, years of schooling' },
  { pub: 'World Development Indicators', org: 'World Bank', covers: 'Cross-checks on population and GDP in US$' },
];
