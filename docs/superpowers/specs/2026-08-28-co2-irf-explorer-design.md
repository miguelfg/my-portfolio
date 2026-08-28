# CO₂ IRF Explorer Nikola Integration Design

## Goal

Import the self-contained static CO₂ Estimated vs Observed explorer from the
research project into this Nikola site and expose it at the top-level public
route `/co2-irf-explorer/`.

## Architecture

- Copy the publishable bundle from the source app’s `public/co2-irf-explorer/`
  directory to `portfolio/files/co2-irf-explorer/`.
- Configure Nikola’s static file mapping so `portfolio/files/` is copied into
  the generated site root. The bundle therefore remains unchanged and its
  relative links continue to resolve:
  - `index.html` → `/co2-irf-explorer/`
  - `methodology.html` → `/co2-irf-explorer/methodology.html`
  - `data/explorer_inputs.csv` and `.json` → downloadable files
  - `vendor/chart.umd.min.js` → local vendored Chart.js with no runtime CDN
    dependency
- Add a `CO₂ Explorer` link to the English navigation and a `Explorador CO₂`
  link to the Spanish navigation, both targeting `/co2-irf-explorer/`.

The source publishable directory contains `methodology.html`, not a separate
Markdown file. That HTML page is the app’s published methodology artifact and
will be copied as supplied. Source-project Markdown documentation remains
outside the imported runtime bundle.

## Data flow

The browser loads `data/explorer_inputs.json`, applies the selected observed
series, baseline year, and IRF coefficients, computes the modeled series and
metrics in JavaScript, and renders Chart.js charts. The CSV is provided for
users and scripts but is not read by the app.

## Compatibility and safety

- No Nikola page processing or templating will be applied to the app files.
- No external application dependencies will be added to `pyproject.toml`.
- Existing site navigation and bilingual configuration will be preserved;
  only one link per language will be added.
- Existing worktree changes must remain untouched.

## Verification

1. Confirm the copied file set and byte-for-byte source/bundle parity.
2. Run Nikola’s build through `make nk-build`.
3. Confirm generated routes and assets exist under
   `portfolio/output/co2-irf-explorer/`.
4. Run a local static-server smoke test and verify the app, methodology page,
   JSON, CSV, and Chart.js asset return successfully.
5. Inspect `git diff --check` and the scoped diff.
