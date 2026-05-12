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
    data-cfemail="4d23242622212c0d21242f283f2c632e252c39">[email protected]</span>)</a>
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

-   <a href="nikola-v820-is-out.txt" id="sourcelink" class="nav-link">Page
    Source</a>

# <a href="#" class="u-url">Nikola v8.2.0 is out!</a>

<span class="byline-name fn p-name" itemprop="author">
<a href="../authors/chris-warrick.html" class="u-url">Chris Warrick</a>
</span>

<a href="#" rel="bookmark">2021-12-27 18:13</a>

<a href="nikola-v820-is-out.html#disqus_thread"
data-disqus-identifier="cache/posts/nikola-v820-is-out.html">Comments</a>

<a href="nikola-v820-is-out.txt" class="sourcelink">Source</a>

On behalf of the Nikola team, I am pleased to announce the immediate
availability of Nikola v8.2.0. This release includes some new features
as well as a bunch of bugfixes.

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

### Bugfixes<a href="#bugfixes" class="headerlink"
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

-   <a href="nikola-v813-is-out.html" rel="prev"
    title="Nikola v8.1.3 is out!">Previous post</a>
-   <a href="nikola-v821-is-out.html" rel="next"
    title="Nikola v8.2.1 is out!">Next post</a>

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
