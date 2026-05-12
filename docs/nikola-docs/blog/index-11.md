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
    data-cfemail="c6a8afada9aaa786aaafa4a3b4a7e8a5aea7b2">[email protected]</span>)</a>
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
-   <a href="index.html" class="nav-link">Blog</a>
-   <a href="https://users.getnikola.com" class="nav-link">Users</a>

<!-- -->

# <a href="nikola-v811-is-out.html" class="u-url">Nikola v8.1.1 is
out!</a>

<span class="byline-name fn" itemprop="author"> [Chris
Warrick](../authors/chris-warrick.html) </span>

<a href="nikola-v811-is-out.html" rel="bookmark">2020-07-05 21:44</a>

<a href="nikola-v811-is-out.html#disqus_thread"
data-disqus-identifier="cache/posts/nikola-v811-is-out.html">Comments</a>

On behalf of the Nikola team, I am pleased to announce the immediate
availability of Nikola v8.1.1. This release is mainly due to an
incorrect PGP key being used for the PyPI artifacts; three regressions
were also fixed in this release.

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

### Bugfixes<a href="#bugfixes-5" class="headerlink"
title="Permalink to this heading">¶</a>

-   Default to no line numbers in code blocks, honor CodeHilite
    requesting no line numbers. Listing pages still use line numbers
    (Issue #3426)

-   Remove duplicate MathJax config in bootstrap themes (Issue #3427)

-   Fix `doit` requirement to <span class="pre">`doit>=0.32.0`</span>
    (Issue #3422)

# <a href="nikola-v810-is-out.html" class="u-url">Nikola v8.1.0 is
out!</a>

<span class="byline-name fn" itemprop="author"> [Chris
Warrick](../authors/chris-warrick.html) </span>

<a href="nikola-v810-is-out.html" rel="bookmark">2020-06-27 13:38</a>

<a href="nikola-v810-is-out.html#disqus_thread"
data-disqus-identifier="cache/posts/nikola-v810-is-out.html">Comments</a>

On behalf of the Nikola team, I am pleased to announce the immediate
availability of Nikola v8.1.0. This release makes a few feature changes,
improvements, and fixes a few bugs.

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

### Features<a href="#features-2" class="headerlink"
title="Permalink to this heading">¶</a>

-   Support posts without titles (Issue #3408)

-   Support WebP image scaling (Issue #3399)

-   Use Luxon instead of Moment for fancy dates to make it more
    lightweight, going from 328k to 68k (Issue #3232)

-   New `nikola console `<span class="pre">`-s`</span>` script.py`
    option to run scripts that access your site (Issue #3385)

-   Allow preview images to be relative to posts for bootblog4 featured
    posts

-   Change the listings formatting to support word wrap with line
    numbers and improve appearance

-   Put the current language’s feed links first so that feed readers
    prefer it (Issue #3248)

-   Added support for default preview image for posts (Issue #3326)

-   Added support for thumbnails in gallery lists (Issue #1771)

### Bugfixes<a href="#bugfixes-4" class="headerlink"
title="Permalink to this heading">¶</a>

-   Support directory names in `REDIRECTIONS` (Issue #3421)

-   Return a non-zero error code when `nikola github_deploy` fails

-   Refactored scale_image causing performance increasing in image
    resizing.

-   Don’t force absolute links for brand/languages (Issue #3229)

-   Fix RTL mirroring in base theme (`:dir()` pseudo-class is Firefox
    only) (Issue #3353)

-   Work around Bootstrap 4 alignment bug for RTL languages (Issue
    #3353)

-   Handle multiple level of inherit/import nesting in Mako templates
    correctly (Issue #3349)

-   Output a more informative error when files are missing due to broken
    symlinks or incorrect `TRANSLATIONS_PATTERN` values

-   Avoid installing `tests` package to site-packages, remove it from
    your environment if it was inadvertently added (Issue #3348)

-   Sometimes hyphenation added hyphens at the beginning of words (Issue
    #3362)

-   Mark gallery images as "dirty" if EXIF configuration changes (Issue
    #3357)

-   Fix regression in gallery titles being "index" if there was a
    index.txt and no title (Issue #3360)

-   Make gallery indexes depend on destination images to avoid
    multithreading race condition (Issue #3361)

-   Mark gallery thumbnails as lazy loading (Issue #2918)

-   Don't consider JPEG images with EXIF thumbnails as animated (Issue
    #3332)

-   Use correct language for hyphenation in posts that are not
    translated to all languages (Issue #3377)

### Internal<a href="#internal" class="headerlink"
title="Permalink to this heading">¶</a>

-   Added Post.source() method to get a Post's object unprocessed
    contents.

-   Added Post.save() method to modify Post contents.

-   Made is_two_file a property that uses save()

# <a href="automating-nikola-rebuilds-with-github-actions.html"
class="u-url">Automating Nikola rebuilds with GitHub Actions</a>

<span class="byline-name fn" itemprop="author"> [Chris
Warrick](../authors/chris-warrick.html) </span>

<a href="automating-nikola-rebuilds-with-github-actions.html"
rel="bookmark">2020-04-24 22:24</a>

<a
href="automating-nikola-rebuilds-with-github-actions.html#disqus_thread"
data-disqus-identifier="cache/posts/automating-nikola-builds-with-github-actions.html">Comments</a>

In this guide, we’ll set up GitHub Actions to rebuild a
<a href="https://getnikola.com/" class="reference external">Nikola</a>
website and host it on GitHub Pages.

## Why?<a href="#why" class="headerlink"
title="Permalink to this heading">¶</a>

By using GitHub Actions to build your site, you can easily blog from
anywhere you can edit text files. Which means you can blog with only a
web browser and
<a href="https://github.com" class="reference external">GitHub.com</a>.
You also won’t need to install Nikola and Python to write. You won’t
need a real computer either — a mobile phone could probably access
GitHub.com and write something.

## Caveats<a href="#caveats" class="headerlink"
title="Permalink to this heading">¶</a>

-   The build might take a couple minutes to finish (1:30 for the demo
    site; YMMV)

-   When you commit and push to GitHub, the site will be published
    unconditionally. If you don’t have a copy of Nikola for local use,
    there is no way to preview your site.

## What you need<a href="#what-you-need" class="headerlink"
title="Permalink to this heading">¶</a>

-   A computer for the initial setup that can run Nikola. You can do it
    with any OS (Linux, macOS, \*BSD, but also Windows).

-   A GitHub account (free)

## Setting up Nikola<a href="#setting-up-nikola" class="headerlink"
title="Permalink to this heading">¶</a>

Start by creating a new Nikola site and customizing it to your liking.
Follow the <a href="https://getnikola.com/getting-started.html"
class="reference external">Getting Started guide</a>. You might also
want to add support for <a
href="https://getnikola.com/handbook.html#configuring-other-input-formats"
class="reference external">other input formats</a>, namely Markdown, but
this is not a requirement.

After you’re done, you must configure
<a href="https://getnikola.com/handbook.html#deploying-to-github"
class="reference external">deploying to GitHub</a> in Nikola. There are
a few important things you need to take care of:

-   Make your first deployment from your local computer and make sure
    your site works right. Don’t forget to set up `.gitignore`.

-   The `GITHUB_COMMIT_SOURCE` and `GITHUB_REMOTE_NAME` settings are
    overridden, so you can use values appropriate for your local builds.

-   Ensure that the correct branch for GitHub Pages is set on
    GitHub.com.

If everything works, you can make some change to your site (so you see
that rebuilding works), but don’t commit it just yet.

## Setting up GitHub Actions<a href="#setting-up-github-actions" class="headerlink"
title="Permalink to this heading">¶</a>

Next, we need to set up GitHub Actions. This is really straightforward.

On your source branch, create a file named `.github/workflows/main.yml`
with the following contents:

<a href="../listings/github-workflow.yml.html"
class="reference external">github-workflow.yml</a>
<a href="../listings/github-workflow.yml"
class="reference external">(Source)</a>

|                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|-------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [](automating-nikola-rebuilds-with-github-actions.html#rest_code_350e9be37c2943ab9a28489e74a58554-1)  | <span id="rest_code_350e9be37c2943ab9a28489e74a58554-1"></span><span class="nt">`on`</span><span class="p">`:`</span><span class="w">` `</span><span class="p p-Indicator">`[`</span><span class="nv">`push`</span><span class="p p-Indicator">`]`</span>` `                                                                                                                                                                                          |
| [](automating-nikola-rebuilds-with-github-actions.html#rest_code_350e9be37c2943ab9a28489e74a58554-2)  | <span id="rest_code_350e9be37c2943ab9a28489e74a58554-2"></span>` `                                                                                                                                                                                                                                                                                                                                                                                    |
| [](automating-nikola-rebuilds-with-github-actions.html#rest_code_350e9be37c2943ab9a28489e74a58554-3)  | <span id="rest_code_350e9be37c2943ab9a28489e74a58554-3"></span><span class="nt">`jobs`</span><span class="p">`:`</span>` `                                                                                                                                                                                                                                                                                                                            |
| [](automating-nikola-rebuilds-with-github-actions.html#rest_code_350e9be37c2943ab9a28489e74a58554-4)  | <span id="rest_code_350e9be37c2943ab9a28489e74a58554-4"></span><span class="w">`  `</span><span class="nt">`nikola_build`</span><span class="p">`:`</span>` `                                                                                                                                                                                                                                                                                         |
| [](automating-nikola-rebuilds-with-github-actions.html#rest_code_350e9be37c2943ab9a28489e74a58554-5)  | <span id="rest_code_350e9be37c2943ab9a28489e74a58554-5"></span><span class="w">`    `</span><span class="nt">`runs-on`</span><span class="p">`:`</span><span class="w">` `</span><span class="l l-Scalar l-Scalar-Plain">`ubuntu-latest`</span>` `                                                                                                                                                                                                    |
| [](automating-nikola-rebuilds-with-github-actions.html#rest_code_350e9be37c2943ab9a28489e74a58554-6)  | <span id="rest_code_350e9be37c2943ab9a28489e74a58554-6"></span><span class="w">`    `</span><span class="nt">`name`</span><span class="p">`:`</span><span class="w">` `</span><span class="s">`'Deploy`</span><span class="nv">` `</span><span class="s">`Nikola`</span><span class="nv">` `</span><span class="s">`to`</span><span class="nv">` `</span><span class="s">`GitHub`</span><span class="nv">` `</span><span class="s">`Pages'`</span>` ` |
| [](automating-nikola-rebuilds-with-github-actions.html#rest_code_350e9be37c2943ab9a28489e74a58554-7)  | <span id="rest_code_350e9be37c2943ab9a28489e74a58554-7"></span><span class="w">`    `</span><span class="nt">`steps`</span><span class="p">`:`</span>` `                                                                                                                                                                                                                                                                                              |
| [](automating-nikola-rebuilds-with-github-actions.html#rest_code_350e9be37c2943ab9a28489e74a58554-8)  | <span id="rest_code_350e9be37c2943ab9a28489e74a58554-8"></span><span class="w">`    `</span><span class="p p-Indicator">`-`</span><span class="w">` `</span><span class="nt">`name`</span><span class="p">`:`</span><span class="w">` `</span><span class="l l-Scalar l-Scalar-Plain">`Check out`</span>` `                                                                                                                                           |
| [](automating-nikola-rebuilds-with-github-actions.html#rest_code_350e9be37c2943ab9a28489e74a58554-9)  | <span id="rest_code_350e9be37c2943ab9a28489e74a58554-9"></span><span class="w">`      `</span><span class="nt">`uses`</span><span class="p">`:`</span><span class="w">` `</span><span class="l l-Scalar l-Scalar-Plain">`actions/checkout@v2`</span>` `                                                                                                                                                                                               |
| [](automating-nikola-rebuilds-with-github-actions.html#rest_code_350e9be37c2943ab9a28489e74a58554-10) | <span id="rest_code_350e9be37c2943ab9a28489e74a58554-10"></span><span class="w">`    `</span><span class="p p-Indicator">`-`</span><span class="w">` `</span><span class="nt">`name`</span><span class="p">`:`</span><span class="w">` `</span><span class="l l-Scalar l-Scalar-Plain">`Build and Deploy Nikola`</span>` `                                                                                                                            |
| [](automating-nikola-rebuilds-with-github-actions.html#rest_code_350e9be37c2943ab9a28489e74a58554-11) | <span id="rest_code_350e9be37c2943ab9a28489e74a58554-11"></span><span class="w">`      `</span><span class="nt">`uses`</span><span class="p">`:`</span><span class="w">` `</span><span class="l l-Scalar l-Scalar-Plain">`getnikola/nikola-action@v2`</span>` `                                                                                                                                                                                       |

There might be a newer version of the action available, you can check
the latest version in the
<a href="https://github.com/getnikola/nikola-action"
class="reference external">getnikola/nikola-action repo on GitHub</a>.

By default, the action will install the latest stable release of
`Nikola[extras]`. If you want to use the bleeding-edge version from
`master`, or want to install some extra dependencies, you can provide a
`requirements.txt` file in the repository.

Commit everything to GitHub:

``` code
git add .
git commit -am "Automate builds with GitHub Actions"
```

Hopefully, GitHub will build your site and deploy. Check the Actions tab
in your repository or your e-mail for build details. If there are any
errors, make sure you followed this guide to the letter.

# <a href="nikola-v804-is-out.html" class="u-url">Nikola v8.0.4 is
out!</a>

<span class="byline-name fn" itemprop="author"> [Chris
Warrick](../authors/chris-warrick.html) </span>

<a href="nikola-v804-is-out.html" rel="bookmark">2020-02-06 19:38</a>

<a href="nikola-v804-is-out.html#disqus_thread"
data-disqus-identifier="cache/posts/nikola-v804-is-out.html">Comments</a>

On behalf of the Nikola team, I am pleased to announce the immediate
availability of Nikola v8.0.4. This release fixes a few small bugs,
including a date glitch that appeared around New Year’s Eve.

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

Nikola now supports Python 3.5 or newer. If you are on 3.4, please
upgrade to a newer release of Python.

### Bugfixes<a href="#bugfixes-3" class="headerlink"
title="Permalink to this heading">¶</a>

-   Fix hiding future posts in sitemaps for posts without pretty URLs
    (Issue #3339)

-   Pass the correct parameters to shortcodes in jupyter notebooks

-   Fix handling of conflicts between posts/pages and indexes generated
    by `CATEGORY_PAGES_FOLLOW_DESTPATH`

-   Fix default date format to <span class="pre">`yyyy-MM-dd`</span> to
    avoid bug with ISO years (Issue #3337)

-   Remove `extra_header` and `extra_footer` from `base` theme due to
    incompatibility with Mako. The blocks are still available in
    `bootstrap4` and `bootblog4`. (Issue #3319 via #3291)

-   Show tracebacks when `conf.py` cannot be imported

-   Fix loading complex config files that import modules (Issue #3314)

-   Fix behavior of header demotion for negative values

-   If `FILE_METADATA_REGEXP` is set, load metadata from the filename
    first, then continue with the other sources (Issue #3344)

# <a href="nikola-v803-is-out.html" class="u-url">Nikola v8.0.3 is
out!</a>

<span class="byline-name fn" itemprop="author"> [Chris
Warrick](../authors/chris-warrick.html) </span>

<a href="nikola-v803-is-out.html" rel="bookmark">2019-11-02 19:17</a>

<a href="nikola-v803-is-out.html#disqus_thread"
data-disqus-identifier="cache/posts/nikola-v803-is-out.html">Comments</a>

On behalf of the Nikola team, I am pleased to announce the immediate
availability of Nikola v8.0.3. This release fixes a few bugs, including
a notable one with galleries not working on mobile.

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

### Features<a href="#features" class="headerlink"
title="Permalink to this heading">¶</a>

-   Add Friulian translation by aoanla

-   Add `extra_header` and `extra_footer` blocks to templates (Issue
    #3291)

-   Add `REST_FILE_INSERTION_ENABLED` config option to enable or disable
    reST external file inclusion directives (Issue #3311)

### Bugfixes<a href="#bugfixes-2" class="headerlink"
title="Permalink to this heading">¶</a>

-   Support Markdown v3.x (Issue #3173)

-   Fix galleries in Firefox Mobile and when resizing window (Issue
    #3258)

-   Output `<code>` tag for double backticks in reST (Issue #3276)

-   Fully switch to HTML5 writer for reST (Issue #3276,
    getnikola/plugins#294)

-   Make ipynb listings work again

-   Correctly link to listings with spaces in their names

-   import_wordpress plugin doesn't require anymore a translation and
    can use nikola's default if none provided

-   Wordpress+qtranslate import (--qtranslate option) now works with
    more recent versions of plugins from the qtranslate family (namely
    qtranslate-X)

-   Fixed a wordpress import exception when image metadata has floats
    formated with ',' instead of '.'

# <a href="nikola-v802-is-out.html" class="u-url">Nikola v8.0.2 is
out!</a>

<span class="byline-name fn" itemprop="author"> [Chris
Warrick](../authors/chris-warrick.html) </span>

<a href="nikola-v802-is-out.html" rel="bookmark">2019-02-22 19:34</a>

<a href="nikola-v802-is-out.html#disqus_thread"
data-disqus-identifier="cache/posts/nikola-v802-is-out.html">Comments</a>

On behalf of the Nikola team, I am pleased to announce the immediate
availability of Nikola v8.0.2. This is a quality-of-life release with a
handful of bug fixes, two new translations and a few extra features.

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

Install using `pip install Nikola`. (Python 3-only since v8.0.0.)

## Changes<a href="#changes" class="headerlink"
title="Permalink to this heading">¶</a>

-   Make `ARCHIVE_PATH`, `ARCHIVE_FILENAME` translatable (Issue #3234)

-   Support configuring Isso via
    <span class="pre">`GLOBAL_CONTEXT['isso_config']`</span> (Issue
    #3225)

-   Handle fragments in doc role (Issue #3212)

-   Slugify references in doc role.

-   Add Interlingua translation by Alberto Mardegan

-   Add Afrikaans translation by Friedel Wolff

-   Support for docutils.conf (Issue #3188)

### Bugfixes<a href="#bugfixes" class="headerlink"
title="Permalink to this heading">¶</a>

-   Avoid random rebuilds with sites whose locales are not fullly
    supported, and random rebuilds on multilingual sites using Python
    3.4/3.5 (Issue #3216)

-   Apply modifications to `default_metadata` before copying it to other
    languages

-   Make Commento comments work (Issue #3198)

-   Correctly handle separators in the relative path given to
    "ignored_assets" key in theme meta files (Issue #3210)

-   Fix error when `nikola new_post` receives directory name as path
    (Issue #3207)

-   Add slashes to paths with query strings in `nikola serve` only if
    there isn’t one before `?`

-   Read listings files as UTF-8

-   Set one-file status basing on default language only (Issue #3191)

-   Don’t warn if post status is set to `published` explicitly (Issue
    #3181)

-   Remove mention of Twitter cards requiring an opt-in. This is not
    true anymore - anyone can use them.

-   fancydates now workwith listdate items (eg. archives)

-   bootstrap4 and bootblog4 themes no longer load moment.js when
    fancydates are off. (Issue #3231)

-   <a href="." rel="prev">Newer posts</a>
-   <a href="index-10.html" rel="next">Older posts</a>

Contents © 2012–2025 [Roberto Alsina and the Nikola
contributors](../contact.html)  \|  Powered by Nikola itself  \|  
[Follow Nikola on
Twitter](https://twitter.com/intent/user?screen_name=GetNikola)  \|  Theme
is [Cerulean](https://bootswatch.com/cerulean/)

<a href="https://statcounter.com/tumblr/" target="_blank" title="tumblr
statistics"><img src="https://c.statcounter.com/7842875/0/3421486a/1/"
class="statcounter" alt="tumblr statistics" /></a>
