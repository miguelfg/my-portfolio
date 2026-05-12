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
    data-cfemail="ea84838185868baa8683888f988bc489828b9e">[email protected]</span>)</a>
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

-   <a href="nikola-v831-is-out.txt" id="sourcelink" class="nav-link">Page
    Source</a>

# <a href="#" class="u-url">Nikola v8.3.1 is out!</a>

<span class="byline-name fn p-name" itemprop="author">
<a href="../authors/chris-warrick.html" class="u-url">Chris Warrick</a>
</span>

<a href="#" rel="bookmark">2024-04-29 12:11</a>

<a href="nikola-v831-is-out.html#disqus_thread"
data-disqus-identifier="cache/posts/nikola-v831-is-out.html">Comments</a>

<a href="nikola-v831-is-out.txt" class="sourcelink">Source</a>

On behalf of the Nikola team, I am pleased to announce the immediate
availability of Nikola v8.3.1. This release fixes some small bugs,
including some introduced by the new Nikola Plugin Manager.

The minimum Python version supported is now 3.8, and we have adopted a
formal policy to define the Python versions supported by Nikola.

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

-   Support passing <span class="pre">`--poll`</span> to `nikola auto`
    to better deal with symlink farms.

### Bugfixes<a href="#bugfixes" class="headerlink"
title="Permalink to this heading">¶</a>

-   Remove insecure HTTP fallback from `nikola plugin`

-   Fix the `nikola plugin` command not working (Issue #3736, #3737)

-   Fix `nikola new_post `<span class="pre">`--available-formats`</span>
    crashing with TypeError (Issue #3750)

-   Fix the new plugin manager not loading plugins if the plugin folder
    is a symlink (Issue #3741)

-   Fix the `nikola plugin` command not working (Issue #3736)

-   Remove no longer used leftovers of annotations support (Issue #3764)

### Other<a href="#other" class="headerlink"
title="Permalink to this heading">¶</a>

-   Nikola now requires Python 3.8 or newer.

-   Nikola has adopted a policy for Python version support, promising
    support for versions supported by the Python core team, Ubuntu LTS,
    or Debian stable, and taking into consideration Debian oldstable and
    PyPy.

-   Remove polyfill from `polyfill.io`.

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

-   <a href="nikola-v830-is-out.html" rel="prev"
    title="Nikola v8.3.0 is out!">Previous post</a>
-   <a href="nikola-v833-is-out.html" rel="next"
    title="Nikola v8.3.3 is out!">Next post</a>

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
