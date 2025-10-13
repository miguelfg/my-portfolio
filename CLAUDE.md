# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with **Nikola** (Python static site generator). The site features blog posts, portfolio pages, and services information in both English and Spanish.

- **Framework**: Nikola 8.3.1+ static site generator
- **Theme**: bootblog4
- **Languages**: English (default) and Spanish
- **Build Tool**: uv (Python package manager)
- **Deployment**: GitHub Pages (gh-pages branch) and DigitalOcean

## Architecture

### Directory Structure

```
portfolio/                    # Main Nikola site directory (all commands run from here)
├── conf.py                  # Main Nikola configuration file
├── posts/                   # Blog posts (.md, .rst, .ipynb, etc.)
├── pages/                   # Static pages (About, Services, Portfolio, Contact)
├── images/                  # Image assets organized by project
├── plugins/                 # Custom Nikola plugins
│   └── tags/               # Enhanced tags management plugin
├── output/                  # Generated static site (git-ignored)
├── cache/                   # Build cache (git-ignored)
├── files/                   # Static files copied as-is
├── galleries/              # Photo galleries
└── listings/               # Code listings

pyproject.toml              # Python project configuration
Makefile                    # Build automation commands
```

### Configuration Highlights

**Bilingual Support** (`portfolio/conf.py`):
- Default language: English
- Spanish translations under `/es/` path
- Translation pattern: `{path}.{lang}.{ext}` (e.g., `about.es.md`)

**Content Organization**:
- Posts support: `.rst`, `.md`, `.txt`, `.html`, `.ipynb`
- Pages support: same formats as posts
- Posts are published to `/posts/`, pages to `/pages/`
- Image folders: mapped to `/images/` output

**Custom Plugin** (`portfolio/plugins/tags/`):
- Enhanced tag management with add, remove, merge, search, sort operations
- Auto-tagging using TF-IDF algorithm
- Supports both regular posts and Jupyter notebooks

## Development Commands

All Nikola commands must be run from the `portfolio/` directory using `uv run nikola`.

### Essential Commands

```bash
# Build the site
make nk-build
# Equivalent to: cd portfolio && uv run nikola build

# Serve locally with browser auto-open
make nk-serve
# Equivalent to: cd portfolio && uv run nikola serve --browser

# Auto-rebuild and serve (watches for changes)
make nk-auto
# Equivalent to: cd portfolio && uv run nikola auto --browser

# Clean build artifacts
make nk-clean
# Equivalent to: cd portfolio && uv run nikola clean
```

### Content Creation

```bash
# Create new blog post
make nk-new-post
# Prompts for title and creates post file

# Create new page
make nk-new-page
# Prompts for title and creates page file
```

### Quality & Deployment

```bash
# Check for broken links and issues
make nk-check
# Equivalent to: cd portfolio && uv run nikola check --check-links

# View site status and statistics
make nk-status

# Deploy to GitHub Pages
make nk-github-deploy
# Commits source to GITHUB_SOURCE_BRANCH and deploys to gh-pages

# Generic deploy (uses DEPLOY_COMMANDS if configured)
make nk-deploy
```

### Theme & Plugin Management

```bash
# List available themes
make nk-themes

# Install a theme
make nk-install_theme THEME=theme-name

# List available plugins
make nk-plugins

# Install a plugin
make nk-install_plugin PLUGIN=plugin-name
```

### Advanced

```bash
# Open Nikola Python console (for debugging)
make nk-console

# View all available Nikola commands
make nk-help
```

## Key Implementation Details

### Post Metadata Format

Posts use Nikola metadata format (reST-style comments):

```markdown
.. title: Post Title
.. slug: post-slug
.. date: 2025-01-15 10:30:00 UTC+01:00
.. tags: python, data-analysis, tutorial
.. category: data-science
.. description: Brief post description
.. type: text
```

For Spanish translations, create `post-name.es.md` with Spanish metadata.

### Bilingual Navigation

Navigation links are configured per language in `conf.py`:

```python
NAVIGATION_LINKS = {
    DEFAULT_LANG: (
        ("/", "Blog"),
        ("/pages/services", "Services"),
        ("/pages/portfolio", "Portfolio"),
    ),
    "es": (
        ("/es/pages/services", "Servicios"),
        ("/es/pages/portfolio", "Portfolio"),
    ),
}
```

### Image Handling

Images in `portfolio/images/` are:
1. Copied to `output/images/`
2. Automatically thumbnailed based on `IMAGE_THUMBNAIL_SIZE`
3. Referenced in posts using: `![alt](/images/folder/image.jpg)`

### Draft Posts

Posts with `.. status: draft` or in the `draft` tag are controlled by:
- `DEPLOY_DRAFTS = True` in `conf.py` (currently enabled)
- Change to `False` to exclude drafts from deployment

### Custom Tags Plugin Usage

From the `portfolio/` directory:

```bash
# List all tags
uv run nikola tags --list

# Add tags to posts
uv run nikola tags --add "python,data" posts/my-post.md

# Remove tags
uv run nikola tags --remove "old-tag" posts/my-post.md

# Search tags
uv run nikola tags --search "data"

# Auto-tag posts using TF-IDF
uv run nikola tags --auto-tag posts/my-post.md
```

## Development Workflow

1. **Start development server**: `make nk-auto` (auto-rebuilds on changes)
2. **Create content**: Use `make nk-new-post` or manually create files in `posts/`
3. **Add images**: Place in `portfolio/images/project-name/`
4. **Test locally**: Site runs at `http://localhost:8000`
5. **Check quality**: `make nk-check` before deploying
6. **Deploy**: `make nk-github-deploy` for GitHub Pages

## Important Notes

- **Working directory**: All Nikola commands run from `portfolio/` directory
- **Python environment**: Always use `uv run` prefix for Nikola commands
- **Build artifacts**: `output/` and `cache/` are git-ignored
- **GitHub deployment**: Source is on `src` branch, output goes to `gh-pages`
- **Timezone**: Europe/Madrid (configured in `conf.py`)
- **Hidden tags**: `mathjax` tag is hidden from public display
- **Pretty URLs**: Enabled (pages at `/slug/` instead of `/slug.html`)

## Theme Customization

The site uses custom CSS in `conf.py` via `EXTRA_HEAD_DATA` to:
- Adjust header layout from 3-6-3 to 2-8-2 column distribution
- Prevent blog title from wrapping on narrow screens
- Maintain responsive design for mobile devices

When modifying styles, edit the `EXTRA_HEAD_DATA` variable in `conf.py`.
