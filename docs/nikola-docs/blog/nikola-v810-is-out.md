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
    data-cfemail="711f181a1e1d10311d18131403105f12191005">[email protected]</span>)</a>
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

-   <a href="nikola-v810-is-out.txt" id="sourcelink" class="nav-link">Page
    Source</a>

# <a href="#" class="u-url">Nikola v8.1.0 is out!</a>

<span class="byline-name fn p-name" itemprop="author">
<a href="../authors/chris-warrick.html" class="u-url">Chris Warrick</a>
</span>

<a href="#" rel="bookmark">2020-06-27 13:38</a>

<a href="nikola-v810-is-out.html#disqus_thread"
data-disqus-identifier="cache/posts/nikola-v810-is-out.html">Comments</a>

<a href="nikola-v810-is-out.txt" class="sourcelink">Source</a>

On behalf of the Nikola team, I am pleased to announce the immediate
availability of Nikola v8.1.0. This release makes a few feature changes,
improvements, and fixes a few bugs.

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

### Bugfixes<a href="#bugfixes" class="headerlink"
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

-   <a href="../categories/nikola.html" class="tag p-category"
    rel="tag">nikola</a>
-   <a href="../categories/planet.html" class="tag p-category"
    rel="tag">planet</a>
-   <a href="../categories/programming.html" class="tag p-category"
    rel="tag">programming</a>
-   <a href="../categories/python.html" class="tag p-category"
    rel="tag">python</a>
-   <a href="../categories/release.html" class="tag p-category"
    rel="tag">release</a>

<!-- -->

-   <a href="automating-nikola-rebuilds-with-github-actions.html" rel="prev"
    title="Automating Nikola rebuilds with GitHub Actions">Previous post</a>
-   <a href="nikola-v811-is-out.html" rel="next"
    title="Nikola v8.1.1 is out!">Next post</a>

## Comments

Please enable JavaScript to view the
<a href="https://disqus.com/?ref_noscript" rel="nofollow">comments
powered by Disqus.</a>

<a href="https://disqus.com" class="dsq-brlink" rel="nofollow">Comments
powered by <span class="logo-disqus">Disqus</span></a>

Contents © 2012–2025 [Roberto Alsina and the Nikola
contributors](../contact.html)  \|  Powered by Nikola itself  \|  
[Follow Nikola on
Twitter](https://twitter.com/intent/user?screen_name=GetNikola)  \|  Theme
is [Cerulean](https://bootswatch.com/cerulean/)

<a href="https://statcounter.com/tumblr/" target="_blank" title="tumblr
statistics"><img src="https://c.statcounter.com/7842875/0/3421486a/1/"
class="statcounter" alt="tumblr statistics" /></a>
