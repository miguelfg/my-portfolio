# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with **Nikola** (Python static site generator). Features blog posts, portfolio pages, and services in English and Spanish, plus an automated daily AI News pipeline.

- **Framework**: Nikola 8.3.1+ static site generator
- **Theme**: bootblog4
- **Languages**: English (default) and Spanish (`/es/` path)
- **Build Tool**: uv (Python package manager)
- **Deployment**: GitHub Pages (`gh-pages` branch) and DigitalOcean

## Architecture

```
portfolio/            # Main Nikola site — all Nikola commands run from here
├── conf.py           # Main config: languages, navigation, theme, EXTRA_HEAD_DATA CSS
├── posts/            # Blog posts (.md, .rst, .ipynb)
├── pages/            # Static pages (about, services, portfolio, contact)
├── images/           # Assets organized by project, auto-thumbnailed
├── plugins/tags/     # Custom tag plugin: add/remove/merge/search/auto-tag via TF-IDF
├── files/            # Static files copied as-is to output
└── output/           # Generated site (git-ignored)

docs/nikola-docs/     # Local offline Nikola documentation
pyproject.toml        # Python project config (requires-python >=3.12)
Makefile              # All build commands
AGENTS.md             # Autonomous agent instructions (CI/CD, AI News pipeline)
```

### Key Configuration (`portfolio/conf.py`)

- Bilingual: English default, Spanish via `{path}.es.{ext}` naming
- `NAVIGATION_LINKS` configured per language — edit here when adding pages
- `EXTRA_HEAD_DATA`: custom CSS adjusting header to 2-8-2 column layout; edit here for style changes
- `DEPLOY_DRAFTS = True`: drafts are included in deployment
- `mathjax` tag hidden from public display
- Pretty URLs enabled (`/slug/` not `/slug.html`)
- Timezone: Europe/Madrid

## Development Commands

All commands via `make` from repo root; internally they `cd portfolio && uv run nikola ...`.

```bash
make nk-auto          # Auto-rebuild + serve with browser (main dev workflow)
make nk-build         # One-off build
make nk-serve         # Serve existing build
make nk-clean         # Remove output/ and cache/
make nk-check         # Check for broken links
make nk-status        # Site statistics
make nk-new-post      # Interactive: create new post
make nk-new-page      # Interactive: create new page
make nk-console       # Nikola Python REPL (debugging)
```

### Tag Plugin (from `portfolio/` directory)

```bash
uv run nikola tags --list
uv run nikola tags --add "python,data" posts/my-post.md
uv run nikola tags --remove "old-tag" posts/my-post.md
uv run nikola tags --auto-tag posts/my-post.md   # TF-IDF auto-tagging
```

## Content

### Post Metadata Format

```markdown
.. title: Post Title
.. slug: post-slug
.. date: 2025-01-15 10:30:00 UTC+01:00
.. tags: python, data-analysis
.. category: data-science
.. description: Brief description
.. type: text
```

Spanish translation: create `post-name.es.md` with translated metadata.

### AI News Posts

Daily AI news summaries are auto-generated to `portfolio/posts/ai-news-summary-YYYY-MM-DD.md`. Posts **must** have `category: AI News` to appear in the automated listing page (`pages/ai-news.md`).

## Deployment

### GitHub Pages

```bash
make nk-github-deploy
```

**Warning**: this command force-deletes the local and remote `src` branch before deploying. Ensure `main` is up to date first: `git pull origin main`.

If `git push` is rejected, resolve with `git fetch origin` then `git pull --rebase`. For binary conflicts on `.doit.db.db`, run `make nk-clean && make nk-build` after pulling.

## Important Notes

- **Working directory**: all Nikola commands require `portfolio/` as CWD; `make` handles this
- Do not modify `conf.py` navigation without checking both language entries in `NAVIGATION_LINKS`
- Images: place in `portfolio/images/project-name/`, reference as `![alt](/images/project-name/file.jpg)`
