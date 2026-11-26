// Small SVG charts, drawn by hand — no chart library, no network.
// lineChart(series, opts) draws a line with dots and year labels.
// barChart(rows, opts) draws horizontal bars with value labels.
// donut(parts, opts) draws a proportional ring with a legend.

const NS = 'http://www.w3.org/2000/svg';

function svgEl(tag, attrs) {
  const el = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  return el;
}

function niceTicks(min, max, count = 4) {
  const span = max - min || 1;
  const step = span / count;
  const mag = Math.pow(10, Math.floor(Math.log10(step)));
  const norm = step / mag;
  const nice = norm < 1.5 ? 1 : norm < 3.5 ? 2 : norm < 7.5 ? 5 : 10;
  const s = nice * mag;
  const start = Math.floor(min / s) * s;
  const ticks = [];
  for (let v = start; v <= max + s * 0.5; v += s) ticks.push(v);
  return ticks;
}

export function lineChart(points, { width = 640, height = 260, color = '#0e7490', unit = '', decimals = 1 } = {}) {
  const padL = 44, padR = 14, padT = 14, padB = 28;
  const w = width - padL - padR, h = height - padT - padB;
  const xs = points.map((p) => p[0]);
  const ys = points.map((p) => p[1]);
  let min = Math.min(...ys), max = Math.max(...ys);
  if (min > 0 && min / max > 0.7) min = min - (max - min) * 0.25;
  if (min < 0) min = Math.min(min, 0);
  const X = (i) => padL + (w * i) / (points.length - 1);
  const Y = (v) => padT + h - ((v - min) / (max - min)) * h;
  const svg = svgEl('svg', { viewBox: `0 0 ${width} ${height}`, role: 'img', 'aria-label': 'Line chart' });
  for (const t of niceTicks(min, max)) {
    const y = Y(t);
    svg.appendChild(svgEl('line', { x1: padL, y1: y, x2: width - padR, y2: y, stroke: '#e2e8f0', 'stroke-width': 1 }));
    const lab = svgEl('text', { x: padL - 6, y: y + 4, 'text-anchor': 'end', 'font-size': 11, fill: '#64748b' });
    lab.textContent = t.toFixed(decimals) + unit;
    svg.appendChild(lab);
  }
  const d = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${X(i).toFixed(1)},${Y(p[1]).toFixed(1)}`).join(' ');
  svg.appendChild(svgEl('path', { d, fill: 'none', stroke: color, 'stroke-width': 2.5, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' }));
  points.forEach((p, i) => {
    svg.appendChild(svgEl('circle', { cx: X(i), cy: Y(p[1]), r: 3.5, fill: '#fff', stroke: color, 'stroke-width': 2 }));
    const lab = svgEl('text', { x: X(i), y: height - 8, 'text-anchor': 'middle', 'font-size': 11, fill: '#64748b' });
    lab.textContent = String(p[0]);
    svg.appendChild(lab);
    const val = svgEl('text', { x: X(i), y: Y(p[1]) - 9, 'text-anchor': 'middle', 'font-size': 11, 'font-weight': 600, fill: '#0f172a', 'paint-order': 'stroke', stroke: '#ffffff', 'stroke-width': 3 });
    val.textContent = p[1].toFixed(decimals) + unit;
    svg.appendChild(val);
  });
  return svg;
}

export function barChart(rows, { width = 640, barH = 30, color = '#0e7490', unit = '' } = {}) {
  const max = Math.max(...rows.map((r) => r.value));
  const labelW = 190, valW = 64, padT = 6;
  const height = padT + rows.length * barH + 8;
  const svg = svgEl('svg', { viewBox: `0 0 ${width} ${height}`, role: 'img', 'aria-label': 'Bar chart' });
  rows.forEach((r, i) => {
    const y = padT + i * barH;
    const bw = ((width - labelW - valW - 12) * r.value) / max;
    const lab = svgEl('text', { x: 0, y: y + 19, 'font-size': 12.5, fill: '#0f172a' });
    lab.textContent = r.name;
    svg.appendChild(lab);
    svg.appendChild(svgEl('rect', { x: labelW, y: y + 5, width: Math.max(bw, 2), height: 18, rx: 4, fill: color }));
    const val = svgEl('text', { x: labelW + bw + 8, y: y + 19, 'font-size': 12.5, 'font-weight': 600, fill: '#0f172a' });
    val.textContent = r.value.toFixed(2) + unit;
    svg.appendChild(val);
  });
  return svg;
}

export function donut(parts, { size = 220, thickness = 34, colors = ['#0e7490', '#f59e0b', '#64748b'] } = {}) {
  const total = parts.reduce((s, p) => s + p.value, 0);
  const r = size / 2 - thickness / 2;
  const c = 2 * Math.PI * r;
  const svg = svgEl('svg', { viewBox: `0 0 ${size} ${size}`, role: 'img', 'aria-label': 'Donut chart' });
  let offset = 0;
  parts.forEach((p, i) => {
    const frac = p.value / total;
    const circle = svgEl('circle', {
      cx: size / 2, cy: size / 2, r, fill: 'none', stroke: colors[i % colors.length],
      'stroke-width': thickness, 'stroke-dasharray': `${(frac * c).toFixed(1)} ${c.toFixed(1)}`,
      'stroke-dashoffset': (-offset * c).toFixed(1), transform: `rotate(-90 ${size / 2} ${size / 2})`,
    });
    svg.appendChild(circle);
    offset += frac;
  });
  const mid = svgEl('text', { x: size / 2, y: size / 2 - 2, 'text-anchor': 'middle', 'font-size': 26, 'font-weight': 700, fill: '#0f172a' });
  mid.textContent = total.toFixed(0) + '%';
  svg.appendChild(mid);
  const sub = svgEl('text', { x: size / 2, y: size / 2 + 20, 'text-anchor': 'middle', 'font-size': 12, fill: '#64748b' });
  sub.textContent = 'of population';
  svg.appendChild(sub);
  return svg;
}
