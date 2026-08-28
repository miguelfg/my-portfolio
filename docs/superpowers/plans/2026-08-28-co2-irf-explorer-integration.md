# CO₂ IRF Explorer Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish the existing self-contained CO₂ IRF Explorer at `/co2-irf-explorer/` and link it from the Nikola site navigation.

**Architecture:** Store the unchanged static bundle under `portfolio/files/co2-irf-explorer/`; Nikola copies that directory to the generated site root. Add one navigation entry per language in `portfolio/conf.py`, leaving the app’s relative asset/data/methodology links intact.

**Tech Stack:** Nikola 8.3.1, Python configuration, HTML, CSS, JavaScript, JSON, CSV, vendored Chart.js, `uv`, GNU Make.

---

## File map

- Create: `portfolio/files/co2-irf-explorer/index.html` — explorer UI.
- Create: `portfolio/files/co2-irf-explorer/methodology.html` — methodology and data notes.
- Create: `portfolio/files/co2-irf-explorer/app.js` — browser-side model and charts.
- Create: `portfolio/files/co2-irf-explorer/styles.css` — explorer styling.
- Create: `portfolio/files/co2-irf-explorer/data/explorer_inputs.csv` — downloadable flat data.
- Create: `portfolio/files/co2-irf-explorer/data/explorer_inputs.json` — browser input bundle.
- Create: `portfolio/files/co2-irf-explorer/vendor/chart.umd.min.js` — vendored Chart.js runtime.
- Modify: `portfolio/conf.py:156-173` — English and Spanish navigation links.
- Generated only: `portfolio/output/co2-irf-explorer/` — build output; do not stage.

### Task 1: Copy the verified static bundle

**Files:**
- Create: `portfolio/files/co2-irf-explorer/` from `/home/miguelfg/workspace/projects/research/inv-co2-and-materials-in-cc/co2-lifetime/public/co2-irf-explorer/`

- [ ] **Step 1: Create the destination directory.**

Run:

```bash
mkdir -p portfolio/files/co2-irf-explorer
```

Expected: the destination directory exists and no existing tracked file is removed.

- [ ] **Step 2: Copy the publishable files without transforming them.**

Run:

```bash
cp -a /home/miguelfg/workspace/projects/research/inv-co2-and-materials-in-cc/co2-lifetime/public/co2-irf-explorer/. portfolio/files/co2-irf-explorer/
```

Expected: the destination contains `index.html`, `methodology.html`, `app.js`, `styles.css`, `data/`, and `vendor/`.

- [ ] **Step 3: Verify source/destination parity before configuration changes.**

Run:

```bash
diff -rq /home/miguelfg/workspace/projects/research/inv-co2-and-materials-in-cc/co2-lifetime/public/co2-irf-explorer portfolio/files/co2-irf-explorer
```

Expected: no output and exit code 0.

- [ ] **Step 4: Inspect the copied file scope.**

Run:

```bash
find portfolio/files/co2-irf-explorer -type f -printf '%P\n' | sort
```

Expected: exactly the seven runtime files plus `.gitkeep` if copied from the source; no build artifacts or hidden repository metadata.

- [ ] **Step 5: Commit the isolated bundle.**

```bash
git add portfolio/files/co2-irf-explorer
git commit -m "feat: add CO2 IRF explorer static bundle"
```

### Task 2: Add bilingual top-level navigation links

**Files:**
- Modify: `portfolio/conf.py:156-173`

- [ ] **Step 1: Add the English link after the Blog entry.**

Change the English navigation tuple to include:

```python
        ("/co2-irf-explorer/", "CO₂ Explorer"),
```

- [ ] **Step 2: Add the Spanish link after the existing Spanish entries’ blog-equivalent position.**

Add this entry at the start of the Spanish tuple:

```python
        ("/co2-irf-explorer/", "Explorador CO₂"),
```

The app remains English and is deliberately shared by both language menus.

- [ ] **Step 3: Validate the Python configuration syntax.**

Run:

```bash
python3 -m py_compile portfolio/conf.py
```

Expected: exit code 0 with no output.

- [ ] **Step 4: Inspect the scoped configuration diff.**

Run:

```bash
git diff --check -- portfolio/conf.py
git diff -- portfolio/conf.py
```

Expected: only the two navigation entries are changed.

- [ ] **Step 5: Commit the navigation change.**

```bash
git add portfolio/conf.py
git commit -m "feat: link CO2 explorer in site navigation"
```

### Task 3: Build and verify generated routes

**Files:**
- Generated: `portfolio/output/co2-irf-explorer/`

- [ ] **Step 1: Build through the project’s standard command.**

Run:

```bash
make nk-build
```

Expected: Nikola completes successfully and generates the site, including the static bundle.

- [ ] **Step 2: Verify all public files were copied.**

Run:

```bash
find portfolio/output/co2-irf-explorer -type f -printf '%P\n' | sort
```

Expected: `index.html`, `methodology.html`, `app.js`, `styles.css`, both data files, and `vendor/chart.umd.min.js` are present.

- [ ] **Step 3: Verify the navigation labels and route in generated HTML.**

Run:

```bash
rg -n 'co2-irf-explorer|CO₂ Explorer|Explorador CO₂' portfolio/output/index.html portfolio/output/es/index.html
```

Expected: the route is present in both language outputs with the corresponding label.

- [ ] **Step 4: Confirm generated files match the imported bundle.**

Run:

```bash
diff -rq portfolio/files/co2-irf-explorer portfolio/output/co2-irf-explorer
```

Expected: no output and exit code 0.

### Task 4: Smoke-test the static application

**Files:**
- Read-only verification of `portfolio/output/co2-irf-explorer/`

- [ ] **Step 1: Start a local static server from generated output.**

Run in a separate terminal:

```bash
cd portfolio/output && python3 -m http.server 8765
```

Expected: the server listens on `http://127.0.0.1:8765/`.

- [ ] **Step 2: Fetch each public explorer resource.**

Run:

```bash
for path in co2-irf-explorer/ co2-irf-explorer/methodology.html co2-irf-explorer/app.js co2-irf-explorer/styles.css co2-irf-explorer/data/explorer_inputs.csv co2-irf-explorer/data/explorer_inputs.json co2-irf-explorer/vendor/chart.umd.min.js; do curl --fail --silent --show-error "http://127.0.0.1:8765/$path" >/dev/null; done
```

Expected: every request exits successfully.

- [ ] **Step 3: Stop the local server and inspect final Git state.**

Run:

```bash
git diff --check
git status --short --branch
```

Expected: only the intended bundle/config commits are present; generated output remains ignored and no unrelated files are modified.
