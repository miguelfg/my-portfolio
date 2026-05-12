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
    data-cfemail="e08e898b8f8c81a08c8982859281ce83888194">[email protected]</span>)</a>
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

-   <a href="nikola-v7815-and-v800b1-are-out.txt" id="sourcelink"
    class="nav-link">Page Source</a>

# <a href="#" class="u-url">Nikola v7.8.15 and v8.0.0b1 are out!</a>

<span class="byline-name fn p-name" itemprop="author">
<a href="../authors/chris-warrick.html" class="u-url">Chris Warrick</a>
</span>

<a href="#" rel="bookmark">2018-05-05 19:15</a>

<a href="nikola-v7815-and-v800b1-are-out.html#disqus_thread"
data-disqus-identifier="cache/posts/nikola-v7815-and-v800b1-are-out.html">Comments</a>

<a href="nikola-v7815-and-v800b1-are-out.txt"
class="sourcelink">Source</a>

On behalf of the Nikola team, I am pleased to announce the immediate
availability of Nikola v7.8.15 and v8.0.0b1.

Nikola v7.8.15 is the last v7 maintenance release with a few more bug
fixes.

Nikola v8.0.0b1 (Beta 1) is the first test release of the v8 series. The
v8 series adds a ton of new features and fixes bugs, while also breaking
backwards compatibility.

## What is Nikola?<a href="#what-is-nikola" class="headerlink"
title="Permalink to this heading">¶</a>

Nikola is a static site and blog generator, written in Python. It can
use Mako and Jinja2 templates, and input in many popular markup formats,
such as reStructuredText and Markdown — and can even turn Jupyter
(IPython) Notebooks into blog posts! It also supports image galleries,
and is multilingual. Nikola is flexible, and page builds are extremely
fast, courtesy of doit (which is rebuilding only what has been changed).

Find out more at the website: <a href="https://getnikola.com/"
class="reference external">https://getnikola.com/</a>

## Downloads<a href="#downloads" class="headerlink"
title="Permalink to this heading">¶</a>

Install using `pip install `<span class="pre">`Nikola==7.8.15`</span> or
`pip install `<span class="pre">`Nikola==8.0.0.beta1`</span>.

Before upgrading to Nikola v8,
<a href="https://getnikola.com/blog/upgrading-to-nikola-v8.html"
class="reference external">make sure to read the “Upgrading”
document</a>.

## Changes in v7.8.15<a href="#changes-in-v7-8-15" class="headerlink"
title="Permalink to this heading">¶</a>

-   Fix behavior for posts not available in default language (Issues
    #2956 and #3073)

-   Fix behavior of RSS_PATH to do what the documentation says it does
    (Issue #3024)

-   Use documented dateutil API for time zone list (Issue #3006)

## Changes in v8.0.0b1<a href="#changes-in-v8-0-0b1" class="headerlink"
title="Permalink to this heading">¶</a>

### Important compatibility changes<a href="#important-compatibility-changes" class="headerlink"
title="Permalink to this heading">¶</a>

-   Rename `crumbs.tmpl` to `ui_helper.tmpl` and the breadcrumbs `bar`
    function to `breadcrumbs` (your templates may need changing as well)

-   Rename `post.is_mathjax` to `post.has_math`. Themes using
    `post.is_mathjax` must be updated; it is recommended that they are
    changed to use `math_helper.tmpl`.

-   Reading reST docinfo metadata, including first heading as title,
    requires `USE_REST_DOCINFO_METADATA` now (Issue #2987)

-   RSS feeds might have changed their places due to `RSS_PATH` behavior
    changes (you may need to change `RSS_PATH`, `RSS_FILENAME_BASE`)

-   Atom feeds for archives and Atom pagination are no longer supported
    (Issue #3016)

-   Sections are replaced by categories (Issue #2833)

### Features<a href="#features" class="headerlink"
title="Permalink to this heading">¶</a>

-   Support hackerthemes.com themes and renamed bootswatch_theme command
    subtheme (Issue #3049)

-   Add `DISABLE_MAIN_ATOM_FEED` setting (Issue #3016, Issue #3039)

-   Add `ATOM_FILENAME_BASE` setting (defaults to `index` for existing
    sites, but `feed` for new sites) (Issue #3016)

-   Add `CATEGORY_DESTPATH_AS_DEFAULT`, `CATEGORY_DESTPATH_TRIM_PREFIX`,
    `CATEGORY_DESTPATH_FIRST_DIRECTORY_ONLY` settings, as part of
    replacing sections with categories (Issue #2833)

-   Tags `draft`, `private` and `mathjax` are no longer treated special
    if `USE_TAG_METADATA` is set to `False` (default for new sites)
    (Issue #2761)

-   Replace `draft` and `private` tags with a `status` meta field
    (supports `published`, `featured`, `draft`, `private`) and `mathjax`
    with `.. has_math: yes` (Issue #2761)

-   Rename `TAG_PAGES_TITLES` → `TAG_TITLES`, `TAG_PAGES_DESCRIPTIONS` →
    `TAG_DESCRIPTIONS`.

-   Rename `CATEGORY_PAGES_TITLES` → `CATEGORY_TITLES`,
    `CATEGORY_PAGES_DESCRIPTIONS` → `CATEGORY_DESCRIPTIONS`.

-   Produce a better error message when a template referenced in another
    template is missing (Issue #3055)

-   Support captioned images and image ordering in galleries, as well as
    arbitrary metadata through a new `metadata.yml` file (Issue #3017,
    Issue #3050, Issue #2837)

-   New `ATOM_PATH` setting (Issue #2971)

-   Make `crumbs` available to all pages

-   Allowing to customize RSS and Atom feed extensions with
    `RSS_EXTENSION`, `ATOM_EXTENSION` settings (Issue #3041)

-   Allowing to customize filename base appended to RSS_PATH with
    `RSS_FILENAME_BASE` setting (Issue #3041)

-   Use basic ipynb template by default for slightly better appearance
    and behavior

-   Fixing behavior of RSS_PATH to do what the documentation says it
    does (Issue #3024)

-   Add support for fragments in path handlers (Issue #3032)

-   New `METADATA_VALUE_MAPPING` setting to allow for flexible global
    modification of metadata (Issue #3025)

-   New `smartjoin` template function/filter that joins lists and leaves
    strings as-is (Issue #3025)

-   Explain index.html conflicts better (Issue #3022)

-   Recognize both TEASER_END and (new) END_TEASER (Issue #3010)
    (warning: if you perform manual splits, the regex change means new
    indexes must be used)

-   New MARKDOWN_EXTENSION_CONFIGS setting (Issue #2970)

-   Replace `flowr.js` with
    <span class="pre">`justified-layout.js`</span> by Flickr (does not
    require jQuery!)

-   `bootblog4` is the new default theme (Issue #2964)

-   New `bootstrap4` and `bootblog4` themes (Issue #2964)

-   New Thai translation by Narumol Hankrotha and Jean Jordaan

-   Support for Commento comment system (Issue #2773)

-   New PRESERVE_ICC_PROFILES option to control whether ICC profiles are
    preserved when copying images.

-   Use baguetteBox in Bootstrap theme (part of Issue #2777)

-   New default-config command to generate a clean configuration.

-   New `thumbnail` shortcode similar to the reStructuredText
    `thumbnail` directive (via Issue #2809)

-   Rewrite `nikola auto` with asyncio and aiohttp (Issue #2850)

-   New `listings` shortcode similar to the reStructuredText listings
    directive (Issue #2868)

-   Switch to reStructuredText’s new HTML 5 renderer (Issue #2874)

-   Deprecate `html4css1.css` in favor of `rst_base.css` (Issue #2874)

-   Add support for `MetadataExtractor` plugins that allow custom,
    extensible metadata extraction from posts (Issue #2830)

-   Support YAML and TOML metadata in 2-file posts (via Issue #2830)

-   Renamed `UNSLUGIFY_TITLES` → `FILE_METADATA_UNSLUGIFY_TITLES` (Issue
    #2840)

-   Add `NIKOLA_SHOW_TRACEBACKS` environment variable that shows full
    tracebacks instead of one-line summaries

-   Use `PRETTY_URLS` by default on all sites (Issue #1838)

-   Feed link generation is completely refactored (Issue #2844)

-   Let path handlers return absolute URLs (Issue #2876)

-   Add `BLOG_EMAIL` to global context to make it available for
    templates (Issue #2968)

### Bugfixes<a href="#bugfixes" class="headerlink"
title="Permalink to this heading">¶</a>

-   Fixes behavior for posts not available in default language (Issues
    #2956 and #3073)

-   Always follow `FEED_LENGTH` for Atom feeds

-   Apply filters to all Atom feeds

-   Read file metadata if compiler metadata exists and prefer it over
    compiler metadata (Issue #3008)

-   Rename `DISABLE_INDEXES_PLUGIN_INDEX_AND_ATOM_FEED` to
    `DISABLE_INDEXES` and `DISABLE_INDEXES_PLUGIN_RSS_FEED` to
    `DISABLE_MAIN_RSS_FEED` (Issue #3039)

-   Make chart shortcode its own plugin and make the reST directive
    depend on it.

-   Put post_list shortcode in its own plugin and make the reST
    directive depend on it.

-   Don’t silence syntax errors and other exceptions that occur while
    reading metadata

-   Use documented dateutil API for time zone list (Issue #3006)

-   Handle trailing slash redirects with query strings correctly in
    `nikola serve` (Issue #3000)

-   Fix w3c validation errors for itemscope entries in default themes

-   Hide “Incomplete language” message for overrides of complete
    languages

-   Handle '/' and other absolute paths better in POSTS / PAGES /
    TRANSLATIONS (Issue #2982)

-   Fix loading non-default languages

-   Support KaTeX for reST display math (Issue #2888)

-   Use npm for asset management instead of bower, which was deprecated
    (Issue #2790)

-   Properly handle `SHOW_INDEX_PAGE_NAVIGATION` with Jinja templates
    (Issue #2960)

-   Prevent crashes due to Windows-specific code in `auto` running on
    all platforms (Issue #2940)

-   Don’t run hyphenate on `<pre>` blocks (Issue #2939)

-   Make errors in reST display in logs again

-   Unquote paths given to <span class="pre">`link://`</span> magic URLs
    (Issue #2934)

-   Specify UTF-8 input encoding for Mako as default (Issue #2930)

-   Don't trigger rebuilds in auto mode for files it's safe to ignore
    (Issue #2906)

-   Fix padding for Jupyter code blocks (Issue #2927)

-   Apply `SCHEDULE_ALL` to posts only (Issue #2921)

-   Restore version number to Bootswatch URLs (Issue #2916)

-   Do not strip trailing slash in `slug` magic links

-   Ignore empty tags in HTML metadata reader (Issue #2890)

-   Do not remove doctype if `add_header_permalinks` or
    `deduplicate_ids` are used

-   Handle empty slug metadata (Issue #2887)

-   Fix crash when compiling empty `.html` posts (Issue #2851)

-   Make failures to get source commit hash non-fatal in `github_deploy`
    (Issue #2847)

-   Less cryptic error when guessing format from extension in `new_post`
    fails

-   Use Jupyter name more consistently in docs

-   Support CODE_COLOR_SCHEME in Jupyter notebooks (Issue #2093)

-   Language was not passed to title and link generation for page
    indexes

-   Addressed issue with snaps not allowing certain functions to work
    properly.

### Removed conf.py settings<a href="#removed-conf-py-settings" class="headerlink"
title="Permalink to this heading">¶</a>

The following settings have been removed. Nikola will now always behave
as if the value was what is displayed afer the setting name.

-   `FEED_PREVIEWIMAGE = True`

-   `SITEMAP_INCLUDE_FILELESS_DIRS = True`

-   `USE_OPEN_GRAPH = True`

-   `USE_BASE_TAG = False`

### Removed features<a href="#removed-features" class="headerlink"
title="Permalink to this heading">¶</a>

-   Removed Colorbox, baguetteBox is used instead (Issue #2777)

-   Removed `googleplus` comments (no longer supported) (Issue #635)

-   Removed the slides directive for docutils, it will now be a separate
    plugin.

-   Dropped Python 2 and Python 3.3 support (oldest supported version is
    3.4)

-   Removed `nikola install_theme` — use `nikola theme` instead

-   Droppped insecure post “encryption” feature

-   Stopped supporting all deprecated config options

-   Dropped annotations support (annotateit.org closed down in March
    2017)

-   Removed taxonomy option
    `also_create_classifications_from_other_languages` (Issue #2785) and
    `generate_atom_feeds_for_post_lists` (Issue #3016)

-   Removed old 7-line metadata format (Issue #2839)

-   Atom feeds are now limited to one page (Issue #3016)

-   Removed sections (replaced by improved categories) (Issue #2833)

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

-   <a href="upgrading-to-nikola-v8.html" rel="prev"
    title="Upgrading to Nikola v8">Previous post</a>
-   <a href="nikola-v800b2-is-out.html" rel="next"
    title="Nikola v8.0.0b2 is out!">Next post</a>

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
