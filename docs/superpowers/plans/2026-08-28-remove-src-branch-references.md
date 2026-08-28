# Remove Obsolete `src` Branch References Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the project consistently use `main` as Nikola’s source branch and `gh-pages` as its deployment branch.

**Architecture:** Keep the existing `portfolio/conf.py` deployment configuration unchanged. Remove the Makefile’s obsolete `src` deletion workaround and align the two agent instruction files with the active `main → gh-pages` workflow.

**Tech Stack:** GNU Make, Markdown documentation, Nikola 8.3.1, Python configuration.

---

## File map

- Modify: `Makefile:18-21` — remove obsolete `src` deletion commands.
- Modify: `AGENTS.md:7-25` — correct deployment and Git recovery branch names.
- Modify: `CLAUDE.md:94-98` — document the safe current deployment workflow.
- Verify unchanged: `portfolio/conf.py:711-716` — active `main → gh-pages` settings.

### Task 1: Remove the obsolete Makefile workaround

**Files:**
- Modify: `Makefile:18-21`

- [ ] **Step 1: Replace the deployment target with the direct Nikola command.**

The target must become:

```make
nk-github-deploy:
	cd portfolio && uv run nikola github_deploy
```

This preserves the user-facing target while removing both `git branch -D src`
and `git push origin --delete src`.

- [ ] **Step 2: Verify the scoped Makefile diff.**

Run:

```bash
git diff --check -- Makefile
git diff -- Makefile
```

Expected: only the two obsolete `src` deletion lines are removed.

- [ ] **Step 3: Commit the Makefile change.**

```bash
git add Makefile
git commit -m "fix: deploy Nikola directly from main"
```

### Task 2: Align autonomous-agent instructions with `main`

**Files:**
- Modify: `AGENTS.md:7-25`

- [ ] **Step 1: Update the deployment responsibility and pre-deploy sync instruction.**

Replace references that require synchronizing `src` with `main`, including:

```markdown
3. **CI/CD:** Supervisar el despliegue a GitHub Pages, asegurando que la rama `main` esté sincronizada antes de cualquier push.
```

and:

```markdown
1. Verificar que `git pull origin main` se ejecute antes de despliegues si ocurren conflictos.
```

- [ ] **Step 2: Update Git rejection recovery.**

Use `main` consistently:

```markdown
2. Verificar estado con `git status`.
3. Si hay divergencias, resolver con `git pull --rebase` o, si es necesario, sincronizar con el remoto mediante `git reset --hard origin/main` (cuidado: esto borra cambios locales no commiteados).
```

Keep the existing warning about the destructive nature of `reset --hard`.

- [ ] **Step 3: Verify the scoped instruction diff and branch references.**

Run:

```bash
git diff --check -- AGENTS.md
git diff -- AGENTS.md
```

Expected: only branch/workflow wording changes; the Nikola command and binary-conflict guidance remain intact.

- [ ] **Step 4: Commit the AGENTS.md change.**

```bash
git add AGENTS.md
git commit -m "docs: align agent deployment instructions with main"
```

### Task 3: Align Claude instructions with the current deployment flow

**Files:**
- Modify: `CLAUDE.md:94-98`

- [ ] **Step 1: Replace the obsolete deployment warning.**

Use wording equivalent to:

```markdown
Run `make nk-github-deploy` after ensuring local `main` is up to date with `origin/main`. Nikola builds the site and deploys the generated output from `main` to `gh-pages` according to `portfolio/conf.py`.
```

Do not claim that deployment deletes `src`.

- [ ] **Step 2: Verify the scoped documentation diff.**

Run:

```bash
git diff --check -- CLAUDE.md
git diff -- CLAUDE.md
```

Expected: only the obsolete warning is replaced.

- [ ] **Step 3: Commit the CLAUDE.md change.**

```bash
git add CLAUDE.md
git commit -m "docs: document main to gh-pages deployment"
```

### Task 4: Verify the complete cleanup

**Files:**
- Verify: `Makefile`, `AGENTS.md`, `CLAUDE.md`, `portfolio/conf.py`

- [ ] **Step 1: Search maintained project files for branch-specific `src` references.**

Run:

```bash
rg -n -i '\bsrc\b|origin/src|branch.*src|src.*branch' Makefile AGENTS.md CLAUDE.md README.md portfolio/conf.py
```

Expected: no output. Unrelated `src` strings in vendored Nikola documentation, HTML attributes, and article examples are out of scope.

- [ ] **Step 2: Verify configuration syntax and deployment settings.**

Run:

```bash
python3 -m py_compile portfolio/conf.py
sed -n '711,716p' portfolio/conf.py
```

Expected output includes `GITHUB_SOURCE_BRANCH = 'main'` and `GITHUB_DEPLOY_BRANCH = 'gh-pages'`.

- [ ] **Step 3: Build the site.**

Run:

```bash
make nk-build
```

Expected: Nikola exits with status 0.

- [ ] **Step 4: Inspect final scope and worktree state.**

Run:

```bash
git diff --check
git status --short --branch
git log --oneline --decorate -6
```

Expected: no unintended unstaged changes; generated artifacts created by the build must not be staged.
