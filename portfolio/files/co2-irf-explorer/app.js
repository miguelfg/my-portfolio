const PRESETS = {
  default: {
    label: 'Joos 2013 (AR5)',
    source: 'https://acp.copernicus.org/articles/13/2793/2013/',
    a0: 0.2173,
    a1: 0.2240,
    tau1: 394.4,
    a2: 0.2824,
    tau2: 36.54,
    a3: 0.2763,
    tau3: 4.304,
  },
  forster_2007: {
    label: 'Forster 2007 (AR4)',
    source: 'https://www.ipcc.ch/site/assets/uploads/2018/02/ar4-wg1-chapter2-1.pdf',
    a0: 0.217,
    a1: 0.259,
    tau1: 172.9,
    a2: 0.338,
    tau2: 18.51,
    a3: 0.186,
    tau3: 1.186,
  },
  short_tail: {
    label: 'Short decay',
    source: '',
    a0: 0.17,
    a1: 0.21,
    tau1: 120,
    a2: 0.27,
    tau2: 25,
    a3: 0.35,
    tau3: 3.5,
  },
  long_tail: {
    label: 'Long decay',
    source: '',
    a0: 0.27,
    a1: 0.19,
    tau1: 600,
    a2: 0.27,
    tau2: 60,
    a3: 0.27,
    tau3: 8,
  },
};

// Which observational record the model is scored against. Each carries its own
// first year, so switching series moves the baseline with it.
const OBSERVED_SERIES = {
  global: {
    label: 'NOAA global mean',
    field: 'observed_noaa_global_ppm',
    note: 'NOAA marine boundary layer global annual mean. Starts in 1979.',
    source: 'https://gml.noaa.gov/ccgg/trends/gl_trend.html',
  },
  spliced: {
    label: 'Ice core + instrumental',
    field: 'observed_law_dome_instrumental_spliced_ppm',
    note: 'Law Dome ice core to 1958, then the instrumental record. Starts in 1900; the pre-1958 part is smoothed by firn diffusion.',
    source: 'data/explorer_inputs.csv',
  },
  mauna_loa: {
    label: 'Mauna Loa',
    field: 'observed_noaa_mauna_loa_ppm',
    note: 'One Northern-Hemisphere station, reading above the global mean by a margin that grows over time. Starts in 1959.',
    source: 'https://gml.noaa.gov/ccgg/trends/',
  },
};

const WINDOW_DEFS = [
  [1900, 1919],
  [1920, 1939],
  [1940, 1959],
  [1960, 1979],
  [1980, 1999],
  [2000, 2024],
];

const COLORS = {
  observed: 'oklch(57% 0.16 250)',
  model: 'oklch(59% 0.13 165)',
  residual: 'oklch(66% 0.14 75)',
  deltaObserved: 'oklch(57% 0.16 250)',
  deltaModel: 'oklch(48% 0.13 165)',
  grid: 'oklch(89% 0.012 235)',
  axis: 'oklch(82.8% 0.014 235)',
  tick: 'oklch(46% 0.02 255)',
  zero: 'oklch(58% 0.02 255)',
};

const PARAM_IDS = ['a0', 'a1', 'tau1', 'a2', 'tau2', 'a3', 'tau3'];
const METRIC_DIGITS = 1;

const state = {
  annual: [],
  metadata: {},
  baselineYear: 1900,
  observedSeries: 'global',
  params: { ...PRESETS.default },
  preset: 'default',
};

const charts = {
  main: null,
  residual: null,
  delta: null,
};

const $ = (id) => document.getElementById(id);

function formatNumber(value, digits = METRIC_DIGITS) {
  return Number.isFinite(value) ? value.toFixed(digits) : '—';
}

function formatSigned(value, digits = METRIC_DIGITS) {
  if (!Number.isFinite(value)) {
    return '—';
  }
  const sign = value > 0 ? '+' : '';
  return `${sign}${value.toFixed(digits)}`;
}

function formatParam(value) {
  return Number.isFinite(value) ? value.toFixed(4).replace(/0+$/, '').replace(/\.$/, '') : '—';
}

function statusFromResidual(value) {
  if (!Number.isFinite(value) || Math.abs(value) < 0.05) {
    return 'Matched';
  }
  return value > 0 ? 'Overshoot' : 'Underestimate';
}

function mean(values) {
  if (!values.length) return NaN;
  return values.reduce((acc, value) => acc + value, 0) / values.length;
}

function observedField() {
  return (OBSERVED_SERIES[state.observedSeries] || OBSERVED_SERIES.global).field;
}

// Rows carrying a value for the selected record, with that value copied into
// observed_co2_ppm so the rest of the pipeline stays unchanged.
function activeRows() {
  const field = observedField();
  return state.annual
    .filter((row) => Number.isFinite(row[field]))
    .map((row) => ({ ...row, observed_co2_ppm: row[field] }));
}

function impulseResponse(dt, params) {
  let response = params.a0;
  if (params.tau1 != null) response += params.a1 * Math.exp(-dt / params.tau1);
  if (params.tau2 != null) response += params.a2 * Math.exp(-dt / params.tau2);
  if (params.tau3 != null) response += params.a3 * Math.exp(-dt / params.tau3);
  return response;
}

function buildModel(rows, baselineYear, params) {
  const obsByYear = new Map(rows.map((row) => [row.year, row.observed_co2_ppm]));
  const emissionsByYear = new Map(rows.map((row) => [row.year, row.emissions_ppm || 0]));
  const years = rows.map((row) => row.year).sort((a, b) => a - b);
  const base = obsByYear.get(baselineYear);

  if (!Number.isFinite(base)) {
    throw new Error(`No observed CO₂ value found for baseline year ${baselineYear}.`);
  }

  const modeled = new Map([[baselineYear, base]]);

  for (const year of years) {
    if (year <= baselineYear) continue;
    let excess = 0;
    for (const [emYear, emissions] of emissionsByYear.entries()) {
      if (emYear <= baselineYear || emYear > year) continue;
      excess += emissions * impulseResponse(year - emYear, params);
    }
    modeled.set(year, base + excess);
  }

  return modeled;
}

function visibleRows(rows, modeled, baselineYear) {
  return rows
    .filter((row) => row.year >= baselineYear && modeled.has(row.year))
    .map((row) => ({
      ...row,
      modeled_co2_ppm: modeled.get(row.year),
      residual_ppm: modeled.get(row.year) - row.observed_co2_ppm,
    }));
}

function seriesMetrics(rows, modeled, baselineYear) {
  const aligned = visibleRows(rows, modeled, baselineYear);
  const residuals = aligned.map((row) => row.residual_ppm);
  const absResiduals = residuals.map((value) => Math.abs(value));
  const rmse = Math.sqrt(mean(residuals.map((value) => value * value)));
  const bias = mean(residuals);
  const finalRow = aligned.at(-1);
  const maxAbsResidual = absResiduals.length ? Math.max(...absResiduals) : NaN;
  const maxAbsIndex = absResiduals.indexOf(maxAbsResidual);
  const maxAbsYear = maxAbsIndex >= 0 ? aligned[maxAbsIndex]?.year : NaN;
  const signal = statusFromResidual(finalRow?.residual_ppm);
  const cumulativeError = residuals.reduce((total, value) => total + value, 0);

  return {
    aligned,
    rmse,
    bias,
    finalError: finalRow?.residual_ppm ?? NaN,
    finalYear: finalRow?.year ?? baselineYear,
    finalObserved: finalRow?.observed_co2_ppm ?? NaN,
    finalModeled: finalRow?.modeled_co2_ppm ?? NaN,
    maxAbsResidual,
    maxAbsYear,
    signal,
    cumulativeError,
  };
}

function periodSummaries(rows, modeled, baselineYear) {
  return WINDOW_DEFS.map(([start, end]) => {
    const subset = rows.filter((row) => row.year >= start && row.year <= end && modeled.has(row.year));
    const residuals = subset.map((row) => modeled.get(row.year) - row.observed_co2_ppm);
    const observedDeltas = subset.slice(1).map((row, index) => row.observed_co2_ppm - subset[index].observed_co2_ppm);
    const modeledDeltas = subset.slice(1).map((row, index) => modeled.get(row.year) - modeled.get(subset[index].year));

    return {
      start,
      end,
      n: subset.length,
      bias: mean(residuals),
      rmse: Math.sqrt(mean(residuals.map((value) => value * value))),
      final: residuals.at(-1),
      signal: statusFromResidual(residuals.at(-1)),
      observedDelta: mean(observedDeltas),
      modeledDelta: mean(modeledDeltas),
    };
  });
}

function axisOptions(xTitle, yTitle) {
  const common = {
    grid: { color: COLORS.grid, lineWidth: 1 },
    border: { color: COLORS.axis },
    ticks: {
      color: COLORS.tick,
      font: { size: 11 },
    },
  };

  return {
    x: {
      ...common,
      type: 'linear',
      title: { display: true, text: xTitle, color: COLORS.tick, font: { size: 12 } },
      ticks: { ...common.ticks, callback: (value) => String(value), maxTicksLimit: 14 },
    },
    y: {
      ...common,
      title: { display: true, text: yTitle, color: COLORS.tick, font: { size: 12 } },
    },
  };
}

function baseOptions(xTitle, yTitle) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true,
          pointStyle: 'line',
          boxWidth: 24,
          color: 'oklch(24% 0.02 255)',
          font: { size: 12 },
        },
      },
      tooltip: {
        backgroundColor: 'oklch(99.1% 0.004 235)',
        titleColor: 'oklch(24% 0.02 255)',
        bodyColor: 'oklch(24% 0.02 255)',
        borderColor: 'oklch(82.8% 0.014 235)',
        borderWidth: 1,
        callbacks: {
          title: (items) => `Year ${items[0].parsed.x}`,
          label: (item) => ` ${item.dataset.label}: ${formatSigned(item.parsed.y, 2)} ppm`,
        },
      },
    },
    scales: axisOptions(xTitle, yTitle),
  };
}

const lineDefaults = {
  borderWidth: 2,
  pointRadius: 0,
  pointHoverRadius: 3,
  tension: 0,
};

function createCharts() {
  charts.main = new Chart($('mainChart'), {
    type: 'line',
    data: {
      datasets: [
        { label: 'Observed', borderColor: COLORS.observed, ...lineDefaults, data: [] },
        { label: 'Predicted', borderColor: COLORS.model, ...lineDefaults, data: [] },
      ],
    },
    options: baseOptions('Year', 'CO₂ (ppm)'),
  });

  charts.residual = new Chart($('residualChart'), {
    type: 'line',
    data: {
      datasets: [
        { label: 'Deviation (predicted − observed)', borderColor: COLORS.residual, ...lineDefaults, data: [] },
        { label: 'Zero line', borderColor: COLORS.zero, borderWidth: 1.5, borderDash: [6, 6], pointRadius: 0, pointHoverRadius: 0, data: [] },
      ],
    },
    options: baseOptions('Year', 'Deviation (ppm)'),
  });

  charts.delta = new Chart($('deltaChart'), {
    type: 'line',
    data: {
      datasets: [
        { label: 'Observed Δ', borderColor: COLORS.deltaObserved, ...lineDefaults, data: [] },
        { label: 'Predicted Δ', borderColor: COLORS.deltaModel, ...lineDefaults, data: [] },
      ],
    },
    options: baseOptions('Year', 'Year-over-year change (ppm)'),
  });
}

function updateCharts(rows, modeled) {
  const visible = visibleRows(rows, modeled, state.baselineYear);
  const annualDeltas = visible.slice(1).map((row, index) => ({
    year: row.year,
    observed: row.observed_co2_ppm - visible[index].observed_co2_ppm,
    modeled: row.modeled_co2_ppm - visible[index].modeled_co2_ppm,
  }));

  charts.main.data.datasets[0].data = visible.map((row) => ({ x: row.year, y: row.observed_co2_ppm }));
  charts.main.data.datasets[1].data = visible.map((row) => ({ x: row.year, y: row.modeled_co2_ppm }));
  charts.main.update('none');

  charts.residual.data.datasets[0].data = visible.map((row) => ({ x: row.year, y: row.residual_ppm }));
  const firstYear = visible[0]?.year;
  const lastYear = visible.at(-1)?.year;
  charts.residual.data.datasets[1].data = firstYear != null ? [{ x: firstYear, y: 0 }, { x: lastYear, y: 0 }] : [];
  charts.residual.update('none');

  charts.delta.data.datasets[0].data = annualDeltas.map((row) => ({ x: row.year, y: row.observed }));
  charts.delta.data.datasets[1].data = annualDeltas.map((row) => ({ x: row.year, y: row.modeled }));
  charts.delta.update('none');
}

function renderPeriodTable(allPeriodRows) {
  // Windows the selected record does not reach would render as empty rows.
  const periodRows = allPeriodRows.filter((row) => row.n > 0);
  $('periodTable').innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Window</th>
          <th>n</th>
          <th>Bias</th>
          <th>RMSE</th>
          <th>Final</th>
          <th>Direction</th>
        </tr>
      </thead>
      <tbody>
        ${periodRows.map((row) => `
          <tr>
            <td class="period-label">${row.start}–${row.end}</td>
            <td>${row.n}</td>
            <td>${formatSigned(row.bias, 1)} ppm</td>
            <td>${formatNumber(row.rmse, 1)} ppm</td>
            <td>${formatSigned(row.final, 1)} ppm</td>
            <td><span class="period-signal ${row.signal.toLowerCase()}">${row.signal}</span></td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

// The baseline slider may only sit on years the selected record covers.
function syncBaselineRange(resetToFirst = false) {
  const rows = activeRows();
  const first = rows[0]?.year;
  const last = rows.at(-1)?.year;
  if (first == null) return;

  const slider = $('baselineYear');
  slider.min = String(first);
  slider.max = String(last);
  const current = parseInt(slider.value, 10) || first;
  const next = resetToFirst ? first : Math.min(Math.max(current, first), last);
  slider.value = String(next);
  state.baselineYear = next;
  $('baselineYearValue').textContent = String(next);

  const bounds = document.querySelectorAll('.slider-bounds span');
  if (bounds.length === 2) {
    bounds[0].textContent = String(first);
    bounds[1].textContent = String(last);
  }
  $('observedSeriesNote').textContent = OBSERVED_SERIES[state.observedSeries]?.note || '';
  const seriesSource = $('observedSeriesSource');
  seriesSource.href = OBSERVED_SERIES[state.observedSeries]?.source || '#';
  seriesSource.textContent = `Source: ${OBSERVED_SERIES[state.observedSeries]?.label || 'selected series'}`;
}

function syncPresetSource(name) {
  const preset = PRESETS[name];
  const link = $('presetSource');
  if (!preset?.source) {
    link.href = '#';
    link.textContent = 'Exploratory preset — no published source';
    return;
  }
  link.href = preset.source;
  link.textContent = `Source: ${preset.label}`;
}

function syncParamsFromUI() {
  state.baselineYear = parseInt($('baselineYear').value, 10);
  state.params = Object.fromEntries(PARAM_IDS.map((id) => [id, parseFloat($(id).value)]));
}

function applyPreset(name) {
  const preset = PRESETS[name] || PRESETS.default;
  state.preset = PRESETS[name] ? name : 'custom';
  PARAM_IDS.forEach((id) => {
    $(id).value = preset[id];
  });
  $('preset').value = state.preset;
}

function markCustomPreset() {
  const current = PARAM_IDS.map((id) => parseFloat($(id).value));
  const matches = Object.entries(PRESETS).find(([, preset]) => PARAM_IDS.every((id, index) => current[index] === preset[id]));
  state.preset = matches ? matches[0] : 'custom';
  $('preset').value = state.preset;
}

function updateReadout(metrics, periodRows) {
  $('baselineYearValue').textContent = String(state.baselineYear);
  $('rmse').textContent = `${formatNumber(metrics.rmse, 1)} ppm`;
  $('bias').textContent = `${formatSigned(metrics.bias, 1)} ppm`;
  $('finalError').textContent = `${formatSigned(metrics.finalError, 1)} ppm`;
  const errorPct = (metrics.finalError / metrics.finalObserved) * 100;
  $('finalErrorPct').textContent = Number.isFinite(errorPct) ? `${formatSigned(errorPct, 1)} %` : '—';
  $('cumulativeError').textContent = `${formatSigned(metrics.cumulativeError, 1)} ppm`;
  renderPeriodTable(periodRows);
}

function render() {
  const rows = activeRows();
  const modeled = buildModel(rows, state.baselineYear, state.params);
  const metrics = seriesMetrics(rows, modeled, state.baselineYear);
  const periodRows = periodSummaries(rows, modeled, state.baselineYear);

  updateCharts(rows, modeled);
  updateReadout(metrics, periodRows);
}

async function init() {
  const annualResponse = await fetch('data/explorer_inputs.json');

  if (!annualResponse.ok) {
    throw new Error(`Failed to load explorer_inputs.json (${annualResponse.status})`);
  }

  const annualPayload = await annualResponse.json();

  state.annual = annualPayload.rows || [];
  state.metadata = annualPayload.metadata || {};
  applyPreset('default');
  createCharts();
  syncBaselineRange(true);
  const presetSource = $('presetSource');
  syncPresetSource('default');

  ['baselineYear', ...PARAM_IDS].forEach((id) => {
    $(id).addEventListener('input', () => {
      if (PARAM_IDS.includes(id)) {
        markCustomPreset();
      }
      syncParamsFromUI();
      render();
    });
  });

  $('observedSeries').addEventListener('change', (event) => {
    state.observedSeries = event.target.value;
    syncBaselineRange(true);
    syncParamsFromUI();
    render();
  });

  $('preset').addEventListener('change', (event) => {
    applyPreset(event.target.value);
    syncPresetSource(event.target.value);
    syncParamsFromUI();
    render();
  });

  syncParamsFromUI();
  render();
}

init().catch((error) => {
  console.error(error);
  document.body.insertAdjacentHTML(
    'afterbegin',
    `<pre style="margin:16px;padding:16px;border:1px solid #b91c1c;border-radius:12px;color:#7f1d1d;background:#fef2f2;white-space:pre-wrap">${error}</pre>`,
  );
});
