// NusaStat router — hash routes, no build step, no network.
//
//   #/                 dashboard
//   #/population       population page
//   #/economy          economy page
//   #/people           people page
//   #/regions          province table (search + sort)
//   #/region/<name>    one province
//   #/sources          sources & methods
//
// window.__shotReady is false while a page renders and true once it is on
// screen, so a screenshot script knows when to capture.

import { homeView, populationView, economyView, peopleView, regionsView, provinceView, sourcesView, missingView, mountCharts } from './views.js';

const app = document.getElementById('app');
const nav = document.getElementById('main-nav');

const routes = [
  { re: /^#\/$/, view: homeView, title: 'NusaStat — Indonesia in Numbers' },
  { re: /^#\/population$/, view: populationView, title: 'Population | NusaStat' },
  { re: /^#\/economy$/, view: economyView, title: 'Economy | NusaStat' },
  { re: /^#\/people$/, view: peopleView, title: 'People | NusaStat' },
  { re: /^#\/regions$/, view: regionsView, title: 'Provinces | NusaStat' },
  { re: /^#\/region\/(.+)$/, view: (m) => provinceView(m[1]), title: 'Province | NusaStat' },
  { re: /^#\/sources$/, view: sourcesView, title: 'Sources & methods | NusaStat' },
];

function render() {
  window.__shotReady = false;
  const hash = location.hash || '#/';
  const hit = routes.find((r) => r.re.test(hash));
  const match = hit ? hash.match(hit.re) : null;
  if (hit) {
    document.title = hit.title;
    app.innerHTML = hit.view(match);
  } else {
    document.title = 'Not found | NusaStat';
    app.innerHTML = missingView();
  }
  mountCharts(app);
  for (const a of nav.querySelectorAll('a')) {
    const href = a.getAttribute('href');
    const active = hash === href || (href !== '#/' && hash.startsWith(href + '/')) || (href === '#/' && hash === '#/');
    a.classList.toggle('active', active);
    if (active) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  }
  window.scrollTo(0, 0);
  window.__shotReady = true;
}

window.addEventListener('hashchange', render);
render();
