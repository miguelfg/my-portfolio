<a href="#content" class="sr-only sr-only-focusable">Skip to main
content</a>

<a href="../" class="navbar-brand"><img src="../assets/img/logo.svg"
id="logo" class="d-inline-block align-top" alt="Nikola" /></a>

<span class="navbar-toggler-icon"></span>

-   <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown"
    aria-haspopup="true" aria-expanded="false">Documentation</a>
    <a href="../documentation.html"
    class="dropdown-item"><strong>Documentation Index</strong></a>
    <a href="../getting-started.html" class="dropdown-item"><strong>Getting
    Started</strong></a> <a href="../handbook.html"
    class="dropdown-item"><strong>Handbook</strong></a>
    <a href="../features/index.html"
    class="dropdown-item"><strong>Features</strong></a>
    <a href="../conf.html" class="dropdown-item">conf.py</a>
    <a href="../changes.html" class="dropdown-item">Changelog</a>
    <a href="../creating-a-theme.html" class="dropdown-item">Theming
    Tutorial</a>
    <a href="../theming.html" class="dropdown-item">Theming Reference</a>
    <a href="../extending.html" class="dropdown-item">Extending</a>
    <a href="../internals.html" class="dropdown-item">Internals</a>
    <a href="../creating-a-site-not-a-blog-with-nikola.html"
    class="dropdown-item">Creating a Site (Not a Blog)</a>
    <a href="../license.html" class="dropdown-item">License</a>
-   <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown"
    aria-haspopup="true" aria-expanded="false">Support &amp; Contact</a>
    <a href="https://github.com/getnikola/nikola/issues"
    class="dropdown-item">GitHub Issues</a>
    <a href="https://github.com/getnikola/nikola/discussions"
    class="dropdown-item">GitHub Discussions</a>
    <a href="https://x.com/GetNikola" class="dropdown-item">X/Twitter</a>
    <a href="https://irclogs.getnikola.com/" class="dropdown-item">IRC logs
    (#<span class="__cf_email__"
    data-cfemail="d3bdbab8bcbfb293bfbab1b6a1b2fdb0bbb2a7">[email protected]</span>)</a>
    <a href="../contact.html" class="dropdown-item"><strong>All support
    options</strong></a>
-   <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown"
    aria-haspopup="true" aria-expanded="false">Add-ons</a>
    <a href="https://themes.getnikola.com" class="dropdown-item">Themes</a>
    <a href="https://plugins.getnikola.com"
    class="dropdown-item">Plugins</a>
    <a href="https://github.com/getnikola/shortcodes"
    class="dropdown-item">Shortcodes</a>
-   <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown"
    aria-haspopup="true" aria-expanded="false">Development</a>
    <a href="https://github.com/getnikola/nikola"
    class="dropdown-item"><strong>Source code (GitHub)</strong></a>
    <a href="https://github.com/getnikola/nikola/issues"
    class="dropdown-item">Issue Tracker</a>
    <a href="../changes.html" class="dropdown-item">Changelog</a>
    <a href="../license.html" class="dropdown-item">License</a>
    <a href="../authors.html" class="dropdown-item">Contributors</a>
-   <a href="#" class="nav-link">Blog</a>
-   <a href="https://users.getnikola.com" class="nav-link">Users</a>

<!-- -->

# <a href="nikola-v833-is-out.html" class="u-url">Nikola v8.3.3 is
out!</a>

<span class="byline-name fn" itemprop="author"> [Roberto
Alsina](../authors/roberto-alsina.html) </span>

<a href="nikola-v833-is-out.html" rel="bookmark">2025-05-17 17:16</a>

<a href="nikola-v833-is-out.html#disqus_thread"
data-disqus-identifier="cache/posts/nikola-v833-is-out.html">Comments</a>

On behalf of the Nikola team, I am pleased to announce the immediate
availability of Nikola v8.3.3. This is a bugfix release.

We’ve had to release Nikola v8.3.3 immediately after releasing Nikola
v8.3.2, as it is broken on Python 3.8. We would like to thank the Python
packaging ecosystem for being an incomprehensible and incompatible
trainwreck.

## What is Nikola?<a href="#what-is-nikola-10" class="headerlink"
title="Permalink to this heading">¶</a>

Nikola is a static site and blog generator, written in Python. It can
use Mako and Jinja2 templates, and input in many popular markup formats,
such as reStructuredText and Markdown — and can even turn Jupyter
Notebooks into blog posts! It also supports image galleries, and is
multilingual. Nikola is flexible, and page builds are extremely fast,
courtesy of doit (which is rebuilding only what has been changed).

Find out more at the website: <a href="https://getnikola.com/"
class="reference external">https://getnikola.com/</a>

## Downloads<a href="#downloads-10" class="headerlink"
title="Permalink to this heading">¶</a>

Install using `pip install Nikola`.

## Changes from v8.3.1<a href="#changes-from-v8-3-1" class="headerlink"
title="Permalink to this heading">¶</a>

### Features<a href="#features-8" class="headerlink"
title="Permalink to this heading">¶</a>

-   Trace template usage when an environment variable
    `NIKOLA_TEMPLATES_TRACE` is set to any non-empty value.

-   Give user control over the raw underlying template engine (either
    `mako.lookup.TemplateLookup` or `jinja2.Environment`) via an
    optional `conf.py` method `TEMPLATE_ENGINE_FACTORY`.

-   Switch to pyproject.toml

-   Add path handler `slug_source` linking to source of post.

### Bugfixes<a href="#bugfixes-8" class="headerlink"
title="Permalink to this heading">¶</a>

-   Ignore errors in parsing SVG files for shrinking them, copy original
    file to output instead (Issue #3785)

-   Restore `annotation_helper.tmpl` with dummy content - fix themes
    still mentioning it (Issue #3764, #3773)

-   Fix compatibility with watchdog 4 (Issue #3766)

-   `nikola serve` now works with non-root SITE_URL.

-   Stack traces meaningless for end users now more reliably suppressed
    (Issue #3838).

### Other<a href="#other-3" class="headerlink"
title="Permalink to this heading">¶</a>

-   Changed filter for tidy from `tidy5` to `tidy`.

# <a href="nikola-v831-is-out.html" class="u-url">Nikola v8.3.1 is
out!</a>

<span class="byline-name fn" itemprop="author"> [Chris
Warrick](../authors/chris-warrick.html) </span>

<a href="nikola-v831-is-out.html" rel="bookmark">2024-04-29 12:11</a>

<a href="nikola-v831-is-out.html#disqus_thread"
data-disqus-identifier="cache/posts/nikola-v831-is-out.html">Comments</a>

On behalf of the Nikola team, I am pleased to announce the immediate
availability of Nikola v8.3.1. This release fixes some small bugs,
including some introduced by the new Nikola Plugin Manager.

The minimum Python version supported is now 3.8, and we have adopted a
formal policy to define the Python versions supported by Nikola.

## What is Nikola?<a href="#what-is-nikola-9" class="headerlink"
title="Permalink to this heading">¶</a>

Nikola is a static site and blog generator, written in Python. It can
use Mako and Jinja2 templates, and input in many popular markup formats,
such as reStructuredText and Markdown — and can even turn Jupyter
Notebooks into blog posts! It also supports image galleries, and is
multilingual. Nikola is flexible, and page builds are extremely fast,
courtesy of doit (which is rebuilding only what has been changed).

Find out more at the website: <a href="https://getnikola.com/"
class="reference external">https://getnikola.com/</a>

## Downloads<a href="#downloads-9" class="headerlink"
title="Permalink to this heading">¶</a>

Install using `pip install Nikola`.

## Changes<a href="#changes-9" class="headerlink"
title="Permalink to this heading">¶</a>

### Features<a href="#features-7" class="headerlink"
title="Permalink to this heading">¶</a>

-   Support passing <span class="pre">`--poll`</span> to `nikola auto`
    to better deal with symlink farms.

### Bugfixes<a href="#bugfixes-7" class="headerlink"
title="Permalink to this heading">¶</a>

-   Remove insecure HTTP fallback from `nikola plugin`

-   Fix the `nikola plugin` command not working (Issue #3736, #3737)

-   Fix `nikola new_post `<span class="pre">`--available-formats`</span>
    crashing with TypeError (Issue #3750)

-   Fix the new plugin manager not loading plugins if the plugin folder
    is a symlink (Issue #3741)

-   Fix the `nikola plugin` command not working (Issue #3736)

-   Remove no longer used leftovers of annotations support (Issue #3764)

### Other<a href="#other-2" class="headerlink"
title="Permalink to this heading">¶</a>

-   Nikola now requires Python 3.8 or newer.

-   Nikola has adopted a policy for Python version support, promising
    support for versions supported by the Python core team, Ubuntu LTS,
    or Debian stable, and taking into consideration Debian oldstable and
    PyPy.

-   Remove polyfill from `polyfill.io`.

# <a href="nikola-v830-is-out.html" class="u-url">Nikola v8.3.0 is
out!</a>

<span class="byline-name fn" itemprop="author"> [Chris
Warrick](../authors/chris-warrick.html) </span>

<a href="nikola-v830-is-out.html" rel="bookmark">2024-01-10 20:34</a>

<a href="nikola-v830-is-out.html#disqus_thread"
data-disqus-identifier="cache/posts/nikola-v830-is-out.html">Comments</a>

On behalf of the Nikola team, I am pleased to announce the immediate
availability of Nikola v8.3.0. This release adds support for Python
3.12, with some other features and bugfixes.

Note that Nikola v8.3.0 no longer uses the Yapsy plugin manager, which
has been replaced by a custom, minimal manager. The new Nikola Plugin
Manager was tested with some typical plugins, but there might be issues
if your plugins have an unusual structure or are outdated. Please update
your plugins and report any bugs you may encounter.

The Nikola developers would also like to express discontent with
Python’s efforts to remove features from the standard library, causing
breakage without a solid reason, other than “it’s old”.

## What is Nikola?<a href="#what-is-nikola-8" class="headerlink"
title="Permalink to this heading">¶</a>

Nikola is a static site and blog generator, written in Python. It can
use Mako and Jinja2 templates, and input in many popular markup formats,
such as reStructuredText and Markdown — and can even turn Jupyter
Notebooks into blog posts! It also supports image galleries, and is
multilingual. Nikola is flexible, and page builds are extremely fast,
courtesy of doit (which is rebuilding only what has been changed).

Find out more at the website: <a href="https://getnikola.com/"
class="reference external">https://getnikola.com/</a>

## Downloads<a href="#downloads-8" class="headerlink"
title="Permalink to this heading">¶</a>

Install using `pip install Nikola`.

## Changes<a href="#changes-8" class="headerlink"
title="Permalink to this heading">¶</a>

### Features<a href="#features-6" class="headerlink"
title="Permalink to this heading">¶</a>

-   Implement a new plugin manager from scratch to replace Yapsy, which
    does not work on Python 3.12 due to Python 3.12 carelessly removing
    parts of the standard library (Issue #3719)

-   Support for Discourse as comment system (Issue #3689)

### Bugfixes<a href="#bugfixes-6" class="headerlink"
title="Permalink to this heading">¶</a>

-   Fix loading of templates from plugins with `__init__.py` files
    (Issue #3725)

-   Fix margins of paragraphs at the end of sections (Issue #3704)

-   Ignore `.DS_Store` files in listing indexes (Issue #3698)

-   Fix baguetteBox.js invoking in the base theme (Issue #3687)

-   Fix development (preview) server `nikola auto` for non-root
    SITE_URL, in particular when URL_TYPE is full_path. (Issue #3715)

### For plugin developers<a href="#for-plugin-developers" class="headerlink"
title="Permalink to this heading">¶</a>

Nikola now requires the `.plugin` file to contain a `[Nikola]` section
with a `PluginCategory` entry set to the name of the plugin category
class. This was already required by `plugins.getnikola.com`, but you may
have custom plugins that don’t have this set.

# <a href="nikola-v824-is-out.html" class="u-url">Nikola v8.2.4 is
out!</a>

<span class="byline-name fn" itemprop="author"> [Chris
Warrick](../authors/chris-warrick.html) </span>

<a href="nikola-v824-is-out.html" rel="bookmark">2023-04-30 10:09</a>

<a href="nikola-v824-is-out.html#disqus_thread"
data-disqus-identifier="cache/posts/nikola-v824-is-out.html">Comments</a>

On behalf of the Nikola team, I am pleased to announce the immediate
availability of Nikola v8.2.4. This release comes with some new features
and a handful of bug fixes.

## What is Nikola?<a href="#what-is-nikola-7" class="headerlink"
title="Permalink to this heading">¶</a>

Nikola is a static site and blog generator, written in Python. It can
use Mako and Jinja2 templates, and input in many popular markup formats,
such as reStructuredText and Markdown — and can even turn Jupyter
Notebooks into blog posts! It also supports image galleries, and is
multilingual. Nikola is flexible, and page builds are extremely fast,
courtesy of doit (which is rebuilding only what has been changed).

Find out more at the website: <a href="https://getnikola.com/"
class="reference external">https://getnikola.com/</a>

## Downloads<a href="#downloads-7" class="headerlink"
title="Permalink to this heading">¶</a>

Install using `pip install Nikola`.

## Changes<a href="#changes-7" class="headerlink"
title="Permalink to this heading">¶</a>

### Features<a href="#features-5" class="headerlink"
title="Permalink to this heading">¶</a>

-   Add a <span class="pre">`-q`</span>,
    <span class="pre">`--ignore-query-strings`</span> option to ignore
    query strings for internal links, allowing their use for cache
    busting

-   Update reST stylesheets (Issue #3657)

-   Add a <span class="pre">`--timeout`</span> parameter to the `check`
    plugin, defaulting to 30s. (Issue #3643)

-   GZIP compression is now deterministic for automatic deploys (Issue
    #3650)

### Bugfixes<a href="#bugfixes-5" class="headerlink"
title="Permalink to this heading">¶</a>

-   Fix failures to build with a "Document is empty" error in default
    themes (Issue #3679)

-   Fix `PAGE_INDEX` skipping generation when there exists a conflicting
    post

-   Fix RSS generation of galleries containing WebP images, which caused
    an unhandled exception due to not having a known MIME type (Issue
    #3671)

-   Fix `auto` command infinite loop (Issue #3677)

-   Fix API URL in CSS and JS minifiers (Issue #3658)

-   Fix `:align: center` for images in reST (Issue #3657)

-   `GZIP_COMMAND` parsing on `win32` platforms (Issue #3649)

# <a href="nikola-v823-is-out.html" class="u-url">Nikola v8.2.3 is
out!</a>

<span class="byline-name fn" itemprop="author"> [Chris
Warrick](../authors/chris-warrick.html) </span>

<a href="nikola-v823-is-out.html" rel="bookmark">2022-08-01 20:56</a>

<a href="nikola-v823-is-out.html#disqus_thread"
data-disqus-identifier="cache/posts/nikola-v823-is-out.html">Comments</a>

On behalf of the Nikola team, I am pleased to announce the immediate
availability of Nikola v8.2.3. This is a bugfix release, which fixes
compatibility with python-markdown and two more minor bugs.

## What is Nikola?<a href="#what-is-nikola-6" class="headerlink"
title="Permalink to this heading">¶</a>

Nikola is a static site and blog generator, written in Python. It can
use Mako and Jinja2 templates, and input in many popular markup formats,
such as reStructuredText and Markdown — and can even turn Jupyter
Notebooks into blog posts! It also supports image galleries, and is
multilingual. Nikola is flexible, and page builds are extremely fast,
courtesy of doit (which is rebuilding only what has been changed).

Find out more at the website: <a href="https://getnikola.com/"
class="reference external">https://getnikola.com/</a>

## Downloads<a href="#downloads-6" class="headerlink"
title="Permalink to this heading">¶</a>

Install using `pip install Nikola`.

## Changes<a href="#changes-6" class="headerlink"
title="Permalink to this heading">¶</a>

-   Compatibility with Markdown 3.4.0 (Issue #3635)

-   Find substring in string instead of using `contains` in utils

-   Don't add semicolon in docinfo fields via CSS (caused duplicated
    semicolons)

Nikola now requires Python 3.7 or newer.

# <a href="nikola-v822-is-out.html" class="u-url">Nikola v8.2.2 is
out!</a>

<span class="byline-name fn" itemprop="author"> [Chris
Warrick](../authors/chris-warrick.html) </span>

<a href="nikola-v822-is-out.html" rel="bookmark">2022-05-01 17:02</a>

<a href="nikola-v822-is-out.html#disqus_thread"
data-disqus-identifier="cache/posts/nikola-v822-is-out.html">Comments</a>

On behalf of the Nikola team, I am pleased to announce the immediate
availability of Nikola v8.2.2. This is a bugfix release, whose only
change is support for the latest version of Pygments.

## What is Nikola?<a href="#what-is-nikola-5" class="headerlink"
title="Permalink to this heading">¶</a>

Nikola is a static site and blog generator, written in Python. It can
use Mako and Jinja2 templates, and input in many popular markup formats,
such as reStructuredText and Markdown — and can even turn Jupyter
Notebooks into blog posts! It also supports image galleries, and is
multilingual. Nikola is flexible, and page builds are extremely fast,
courtesy of doit (which is rebuilding only what has been changed).

Find out more at the website: <a href="https://getnikola.com/"
class="reference external">https://getnikola.com/</a>

## Downloads<a href="#downloads-5" class="headerlink"
title="Permalink to this heading">¶</a>

Install using `pip install Nikola`.

## Changes<a href="#changes-5" class="headerlink"
title="Permalink to this heading">¶</a>

-   Compatibility with Pygments 2.12.0 (Issue #3617, #3618)

# <a href="nikola-v821-is-out.html" class="u-url">Nikola v8.2.1 is
out!</a>

<span class="byline-name fn" itemprop="author"> [Chris
Warrick](../authors/chris-warrick.html) </span>

<a href="nikola-v821-is-out.html" rel="bookmark">2022-04-23 15:23</a>

<a href="nikola-v821-is-out.html#disqus_thread"
data-disqus-identifier="cache/posts/nikola-v821-is-out.html">Comments</a>

On behalf of the Nikola team, I am pleased to announce the immediate
availability of Nikola v8.2.1. This is a minor release with a couple new
features, as well as fixes for compatibility with the latest version of
doit.

## What is Nikola?<a href="#what-is-nikola-4" class="headerlink"
title="Permalink to this heading">¶</a>

Nikola is a static site and blog generator, written in Python. It can
use Mako and Jinja2 templates, and input in many popular markup formats,
such as reStructuredText and Markdown — and can even turn Jupyter
Notebooks into blog posts! It also supports image galleries, and is
multilingual. Nikola is flexible, and page builds are extremely fast,
courtesy of doit (which is rebuilding only what has been changed).

Find out more at the website: <a href="https://getnikola.com/"
class="reference external">https://getnikola.com/</a>

## Downloads<a href="#downloads-4" class="headerlink"
title="Permalink to this heading">¶</a>

Install using `pip install Nikola`.

## Changes<a href="#changes-4" class="headerlink"
title="Permalink to this heading">¶</a>

### Features<a href="#features-4" class="headerlink"
title="Permalink to this heading">¶</a>

-   Add `emphasize_lines` directive to code blocks (Issue #3607)

-   Gallery index pages support the `status` flag (Issue #3598)

-   Add `start_at` option to youtube directive (Issue #3603)

### Bugfixes<a href="#bugfixes-4" class="headerlink"
title="Permalink to this heading">¶</a>

-   Add data files to dependency file (Issue #3608)

-   Compatibility with doit 0.36.0 (Issue #3612)

Note: `nikola doit_auto` is not available if using
<span class="pre">`doit>=0.36.0`</span>. You can still use
`nikola auto`.

# <a href="nikola-v820-is-out.html" class="u-url">Nikola v8.2.0 is
out!</a>

<span class="byline-name fn" itemprop="author"> [Chris
Warrick](../authors/chris-warrick.html) </span>

<a href="nikola-v820-is-out.html" rel="bookmark">2021-12-27 18:13</a>

<a href="nikola-v820-is-out.html#disqus_thread"
data-disqus-identifier="cache/posts/nikola-v820-is-out.html">Comments</a>

On behalf of the Nikola team, I am pleased to announce the immediate
availability of Nikola v8.2.0. This release includes some new features
as well as a bunch of bugfixes.

## What is Nikola?<a href="#what-is-nikola-3" class="headerlink"
title="Permalink to this heading">¶</a>

Nikola is a static site and blog generator, written in Python. It can
use Mako and Jinja2 templates, and input in many popular markup formats,
such as reStructuredText and Markdown — and can even turn Jupyter
Notebooks into blog posts! It also supports image galleries, and is
multilingual. Nikola is flexible, and page builds are extremely fast,
courtesy of doit (which is rebuilding only what has been changed).

Find out more at the website: <a href="https://getnikola.com/"
class="reference external">https://getnikola.com/</a>

## Downloads<a href="#downloads-3" class="headerlink"
title="Permalink to this heading">¶</a>

Install using `pip install Nikola`.

## Changes<a href="#changes-3" class="headerlink"
title="Permalink to this heading">¶</a>

### Features<a href="#features-3" class="headerlink"
title="Permalink to this heading">¶</a>

-   Add `category_titles`, `category_descriptions`, `tag_titles`,
    `tag_descriptions` to default context of tags page (Issue #3584)

-   Add Maori translation

-   Add Occitan translation

-   New `auto_command_starting` signal when `nikola auto` is starting

-   `typogrify_custom` filter adds a default value for
    `typogrify_filters` so that `ignore_tags` can be specified as the
    only option.

-   The default `ignore_tags` are appended to the user-supplied
    `ignore_tags` added via `typogrify_custom`.

-   Allow adding comment systems from a plugin (Issue #3544)

-   New `CommentSystem` plugin category (Issue #3544)

### Bugfixes<a href="#bugfixes-3" class="headerlink"
title="Permalink to this heading">¶</a>

-   Fix changes to `INDEX_READ_MORE_LINK` and `FEED_READ_MORE_LINK` not
    triggering rebuilds

-   Make `CATEGORY_TITLES`, `CATEGORY_DESCRIPTIONS`, `TAG_TITLES`,
    `TAG_DESCRIPTIONS` translatable settings for consistency (Issue
    #3584)

-   Fix bug with posts after the first one appearing shifted due to a
    `<div>` closed too early (Issue #3573, #3564)

-   Fix support for files outside of site root directory on Windows

-   Support passing <span class="pre">`--backend`</span> and
    <span class="pre">`--db-file`</span> to `nikola auto`

-   Support blank values in certain WordPress-imported structures (Issue
    #3535)

-   Typogrify ignores `div` elements with `.math` CSS class. (Issue
    #3512)

-   Adjust panorama aspect ratio to 3:1 and document behaviour.

# <a href="nikola-v813-is-out.html" class="u-url">Nikola v8.1.3 is
out!</a>

<span class="byline-name fn" itemprop="author"> [Chris
Warrick](../authors/chris-warrick.html) </span>

<a href="nikola-v813-is-out.html" rel="bookmark">2021-02-13 16:57</a>

<a href="nikola-v813-is-out.html#disqus_thread"
data-disqus-identifier="cache/posts/nikola-v813-is-out.html">Comments</a>

On behalf of the Nikola team, I am pleased to announce the immediate
availability of Nikola v8.1.3. This release has some minor fixes, and a
minor dependency change.

## What is Nikola?<a href="#what-is-nikola-2" class="headerlink"
title="Permalink to this heading">¶</a>

Nikola is a static site and blog generator, written in Python. It can
use Mako and Jinja2 templates, and input in many popular markup formats,
such as reStructuredText and Markdown — and can even turn Jupyter
Notebooks into blog posts! It also supports image galleries, and is
multilingual. Nikola is flexible, and page builds are extremely fast,
courtesy of doit (which is rebuilding only what has been changed).

Find out more at the website: <a href="https://getnikola.com/"
class="reference external">https://getnikola.com/</a>

## Downloads<a href="#downloads-2" class="headerlink"
title="Permalink to this heading">¶</a>

Install using `pip install Nikola`.

## Changes<a href="#changes-2" class="headerlink"
title="Permalink to this heading">¶</a>

### Features<a href="#features-2" class="headerlink"
title="Permalink to this heading">¶</a>

-   Provide the full `GLOBAL_CONTEXT` to the post list shortcode plugin
    (Issue #3481)

-   Add `BasePlugin.register_auto_watched_folder()`

-   Allow different `PANDOC_OPTIONS` values based on input extensions by
    specifying a dict of
    <span class="pre">`{".extension":`</span>` [options]}` (Issue #3492)

-   Allow boolean/integer `pretty_url` post meta values in YAML/TOML
    (Issue #3503)

### Bugfixes<a href="#bugfixes-2" class="headerlink"
title="Permalink to this heading">¶</a>

-   Fix an `UnboundLocalError` crash in `nikola deploy` (Issue #3479)

### Other<a href="#other" class="headerlink"
title="Permalink to this heading">¶</a>

-   For `nikola github_deploy`, the
    <span class="pre">`ghp-import`</span> PyPI package is now
    recommended instead of <span class="pre">`ghp-import2`</span>. Both
    versions should work, but you can’t have both installed at the same
    time. (Issue #3499)

# <a href="nikola-v812-is-out.html" class="u-url">Nikola v8.1.2 is
out!</a>

<span class="byline-name fn" itemprop="author"> [Chris
Warrick](../authors/chris-warrick.html) </span>

<a href="nikola-v812-is-out.html" rel="bookmark">2020-11-15 13:35</a>

<a href="nikola-v812-is-out.html#disqus_thread"
data-disqus-identifier="cache/posts/nikola-v812-is-out.html">Comments</a>

On behalf of the Nikola team, I am pleased to announce the immediate
availability of Nikola v8.1.2. This release has a bunch of new features,
fixes some bugs, and improves compatibility with some dependencies and
Windows.

## What is Nikola?<a href="#what-is-nikola" class="headerlink"
title="Permalink to this heading">¶</a>

Nikola is a static site and blog generator, written in Python. It can
use Mako and Jinja2 templates, and input in many popular markup formats,
such as reStructuredText and Markdown — and can even turn Jupyter
Notebooks into blog posts! It also supports image galleries, and is
multilingual. Nikola is flexible, and page builds are extremely fast,
courtesy of doit (which is rebuilding only what has been changed).

Find out more at the website: <a href="https://getnikola.com/"
class="reference external">https://getnikola.com/</a>

## Downloads<a href="#downloads" class="headerlink"
title="Permalink to this heading">¶</a>

Install using `pip install Nikola`.

## Changes<a href="#changes" class="headerlink"
title="Permalink to this heading">¶</a>

### Features<a href="#features" class="headerlink"
title="Permalink to this heading">¶</a>

-   Support for multiple authors per post — comma-separated, enabled by
    `MULTIPLE_AUTHORS_PER_POST` setting (Issue #3252)

-   Add `navbar_custom_bg` theme option to `bootstrap4` and document
    options for `bootstrap4` better (Issue #3443)

-   Add Marathi translation

-   Restore `caps` typogrify filter (wraps strings of capital letters
    with `<span `<span class="pre">`class="caps">`</span> (via Issue
    #3405)

-   Improve `nikola auto` performance with rate-limiting, support
    <span class="pre">`-n`</span> argument to pass to `nikola build`
    (Issue #3401)

-   Add support for the
    <a href="https://utteranc.es" class="reference external">Utterances</a>
    comment system

### Bugfixes<a href="#bugfixes" class="headerlink"
title="Permalink to this heading">¶</a>

-   Fix previewimages (post- and root-relative) in bootblog4/galleries
    featured posts for non-server-root sites (Issue #3471)

-   Windows: Also fix symlinks when installing from source with pip; if
    possible, enable Developer Mode and run
    `git config `<span class="pre">`--global`</span>` core.symlinks true`
    before cloning the Nikola repo

-   Fix clicking on links to image files. baguetteBox now requires a
    link (`<a>`) to have an `<img>` as a child in order to make the link
    activate the lightbox. (Issue #3472)

-   Fix `LINK_CHECK_WHITELIST` having issues due to mixing Unicode and
    bytestrings (Issue #3466)

-   Add support for <span class="pre">`nbconvert>=6.0.0`</span> (Issue
    #3457)

-   Read files as utf-8-sig to allow BOM in input files

-   Don’t break slugs with slashes in `doc` directive (Issue #3450)

-   Avoid warnings from type annotations in `auto` caused by missing
    `aiohttp` (Issue #3451)

-   Ensure query strings and fragments are kept with
    `URL_TYPE = "full_path"` (Issue #3448)

-   Don’t run typogrify filters on `<title>` tag to avoid adding extra
    tags (Issue #3405)

-   Fix handling of duplicate plugins on Windows

-   Allow else clause in post-list plugin. (Issue #3436)

-   Ensure `type` metadata value from plugins is preserved (Issue 3445)

-   Fix path handlers with slashes on Windows

-   <a href="index-11.html" rel="next">Older posts</a>

Contents © 2012–2025 [Roberto Alsina and the Nikola
contributors](../contact.html)  \|  Powered by Nikola itself  \|  
[Follow Nikola on
Twitter](https://twitter.com/intent/user?screen_name=GetNikola)  \|  Theme
is [Cerulean](https://bootswatch.com/cerulean/)

<a href="https://statcounter.com/tumblr/" target="_blank" title="tumblr
statistics"><img src="https://c.statcounter.com/7842875/0/3421486a/1/"
class="statcounter" alt="tumblr statistics" /></a>
