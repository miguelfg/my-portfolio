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
    data-cfemail="127c7b797d7e73527e7b707760733c717a7366">[email protected]</span>)</a>
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

-   <a href="upgrading-to-nikola-v8.txt" id="sourcelink"
    class="nav-link">Page Source</a>

# <a href="#" class="u-url">Upgrading to Nikola v8</a>

<span class="byline-name fn p-name" itemprop="author">
<a href="../authors/chris-warrick.html" class="u-url">Chris Warrick</a>
</span>

<a href="#" rel="bookmark">2018-05-05 18:55<span class="updated">
(updated 2018-09-10 19:00)</span></a>

<a href="upgrading-to-nikola-v8.html#disqus_thread"
data-disqus-identifier="cache/posts/upgrading-to-nikola-v8.html">Comments</a>

<a href="upgrading-to-nikola-v8.txt" class="sourcelink">Source</a>

Nikola v8 is a huge release with lots of new features and fixed bugs.
However, a few manual changes are required to upgrade.

<a href="upgrading-to-nikola-v8.html#top"
class="reference internal">Contents</a>

-   <a href="upgrading-to-nikola-v8.html#revisions-to-this-document"
    id="toc-entry-1" class="reference internal">Revisions to this
    document</a>

-   <a href="upgrading-to-nikola-v8.html#how-to-upgrade" id="toc-entry-2"
    class="reference internal">How to upgrade</a>

-   <a href="upgrading-to-nikola-v8.html#upgrading-post-metadata"
    id="toc-entry-3" class="reference internal">Upgrading post metadata</a>

-   <a href="upgrading-to-nikola-v8.html#changes-to-themes-and-templates"
    id="toc-entry-4" class="reference internal">Changes to themes and
    templates</a>

    -   <a
        href="upgrading-to-nikola-v8.html#zen-modernized-and-uses-new-font-awesome"
        id="toc-entry-5" class="reference internal">zen modernized and uses new
        Font Awesome</a>

-   <a href="upgrading-to-nikola-v8.html#backwards-incompatible-changes"
    id="toc-entry-6" class="reference internal">Backwards incompatible
    changes</a>

-   <a
    href="upgrading-to-nikola-v8.html#babel-and-i18n-changes-added-2018-08-07"
    id="toc-entry-7" class="reference internal">Babel and i18n changes
    (added 2018-08-07)</a>

    -   <a href="upgrading-to-nikola-v8.html#date-format-changed"
        id="toc-entry-8" class="reference internal">DATE_FORMAT changed</a>

    -   <a
        href="upgrading-to-nikola-v8.html#babeldates-plugin-obsoleted-localeborg-internal-api-changed"
        id="toc-entry-9" class="reference internal">babeldates plugin obsoleted,
        LocaleBorg internal API changed</a>

    -   <a href="upgrading-to-nikola-v8.html#translation-help-wanted"
        id="toc-entry-10" class="reference internal">Translation help wanted</a>

-   <a href="upgrading-to-nikola-v8.html#removed-and-renamed-settings"
    id="toc-entry-11" class="reference internal">Removed and renamed
    settings</a>

-   <a
    href="upgrading-to-nikola-v8.html#sections-were-replaced-by-categories"
    id="toc-entry-12" class="reference internal">Sections were replaced by
    categories</a>

    -   <a href="upgrading-to-nikola-v8.html#changes-to-posts" id="toc-entry-13"
        class="reference internal">Changes to posts</a>

    -   <a href="upgrading-to-nikola-v8.html#changes-to-configuration"
        id="toc-entry-14" class="reference internal">Changes to
        configuration</a>

    -   <a
        href="upgrading-to-nikola-v8.html#recreating-the-old-behavior-of-sections"
        id="toc-entry-15" class="reference internal">Recreating the old behavior
        of sections</a>

    -   <a
        href="upgrading-to-nikola-v8.html#colorizing-categories-or-anything-really"
        id="toc-entry-16" class="reference internal">Colorizing categories (or
        anything, really)</a>

-   <a href="upgrading-to-nikola-v8.html#plugins" id="toc-entry-17"
    class="reference internal">Plugins</a>

-   <a href="upgrading-to-nikola-v8.html#on-yaml-configuration"
    id="toc-entry-18" class="reference internal">On YAML configuration</a>

## <a href="upgrading-to-nikola-v8.html#toc-entry-1" class="toc-backref"
role="doc-backlink">Revisions to this document</a><a href="#revisions-to-this-document" class="headerlink"
title="Permalink to this heading">¶</a>

**2018-09-08:** moved `tag_cloud_data.json` generation to separate
plugin

**2018-09-06:** Removed `NO_DOCUTILS_TITLE_TRANSFORM` setting

**2018-07-07:** Beta 3: Babel and changes to i18n

**2018-05-13:** Beta 2: bootblog4 has featured posts, zen modernized;
one new backwards incompatible change found and described (`reference`
replaces <span class="pre">`image-reference`</span> in thumbnails)

**2018-05-09:** fixes to style and missing sentences

**2018-05-05:** initial version

## <a href="upgrading-to-nikola-v8.html#toc-entry-2" class="toc-backref"
role="doc-backlink">How to upgrade</a><a href="#how-to-upgrade" class="headerlink"
title="Permalink to this heading">¶</a>

1.  Upgrade to the latest v7 version:
    `pip install `<span class="pre">`Nikola==7.8.15`</span> and make
    sure there are no outstanding warnings.

2.  Upgrade to v8:
    `pip install `<span class="pre">`-U`</span>` `<span class="pre">`--upgrade-strategy=eager`</span>` `<span class="pre">`Nikola==8.0.0`</span>

3.  Read the upgrade notes below and
    <a href="https://getnikola.com/changes.html"
    class="reference external">the full changelog</a>

4.  Upgrade all third-party plugins and themes.
    (`nikola plugin `<span class="pre">`--upgrade`</span>,
    `nikola theme `<span class="pre">`--upgrade`</span>)

5.  Run `nikola status` and fix all warnings.

6.  When all warnings are fixed, run `nikola build`.

7.  Run `nikola check `<span class="pre">`-l`</span> and
    `nikola check `<span class="pre">`-f`</span>. If there are broken
    links or orphaned files, take care of them.

## <a href="upgrading-to-nikola-v8.html#toc-entry-3" class="toc-backref"
role="doc-backlink">Upgrading post metadata</a><a href="#upgrading-post-metadata" class="headerlink"
title="Permalink to this heading">¶</a>

There are a few changes in post metadata you should make:

-   `draft` and `private` tags are now `status` metadata values (eg.
    `.. status: draft`)

-   `mathjax` tag is now a `has_math` metadata key (eg.
    `.. has_math: yes`)

Both changes can be applied by using the
<a href="https://plugins.getnikola.com/v8/upgrade_metadata_v8/"
class="reference external">upgrade_metadata_v8</a> plugin.

## <a href="upgrading-to-nikola-v8.html#toc-entry-4" class="toc-backref"
role="doc-backlink">Changes to themes and templates</a><a href="#changes-to-themes-and-templates" class="headerlink"
title="Permalink to this heading">¶</a>

The default theme for Nikola was changed to `bootblog4`, which has a
modern, clean look, and can optionally display
<a href="https://getnikola.com/handbook.html#featured-posts"
class="reference external">featured posts</a>. There’s also `bootstrap4`
with the classic look. The `bootstrap3` theme is not included by
default, but can still be installed
(`nikola theme `<span class="pre">`-i`</span>` bootstrap3`)

Moreover, there are a few changes to templates that you must take care
of if you’ve customized any:

-   Rename `crumbs.tmpl` to `ui_helper.tmpl` and the breadcrumbs `bar`
    function to `breadcrumbs` (your templates may need changing as well)

-   Rename `post.is_mathjax` to `post.has_math`. Themes using
    `post.is_mathjax` must be updated; it is recommended that they are
    changed to use `math_helper.tmpl`.

-   For galeries and images, colorbox was replaced by baguetteBox.

### <a href="upgrading-to-nikola-v8.html#toc-entry-5" class="toc-backref"
role="doc-backlink">zen modernized and uses new Font Awesome</a><a href="#zen-modernized-and-uses-new-font-awesome" class="headerlink"
title="Permalink to this heading">¶</a>

The Zen theme was thoroughly modernized. The modernization means that:

-   Font Awesome v5 is used by default, you can switch to Fork Awesome
    v1 by installing <span class="pre">`zen-forkawesome`</span>

-   Your `conf.py` needs changing to reflect new icon names and classes
    (Font Awesome v5 examples: `'fa `<span class="pre">`fa-tags'`</span>
    and `'fab `<span class="pre">`fa-twitter'`</span>)

-   the <span class="pre">`zen-ipython`</span> theme is not needed
    anymore, `zen` and <span class="pre">`zen-jinja`</span> handle
    Jupyter posts correctly (as do the built-in themes)

-   the theme internals were rewritten to more closely match built-in
    themes (notably, galleries Just Work™)

## <a href="upgrading-to-nikola-v8.html#toc-entry-6" class="toc-backref"
role="doc-backlink">Backwards incompatible changes</a><a href="#backwards-incompatible-changes" class="headerlink"
title="Permalink to this heading">¶</a>

The following changes may cause issues with blog appearance and links.
Please make sure you’ve taken care of them before deploying.

-   Sections are replaced by categories (Issue #2833) — *see below*

-   Reading reST docinfo metadata, including first heading as title,
    requires `USE_REST_DOCINFO_METADATA` now (Issue #2987)

-   `NO_DOCUTILS_TITLE_TRANSFORM` setting removed, behavior now depends
    on `USE_REST_DOCINFO_METADATA` (Issue #3124) **(added 2018-09-06)**

-   RSS feeds might have changed their places due to `RSS_PATH` behavior
    changes (you may need to change `RSS_PATH`, `RSS_FILENAME_BASE`)

-   Atom feeds for archives and Atom pagination are no longer supported
    (Issue #3016)

-   **(added 2018-05-10)** You need
    `<a `<span class="pre">`class="reference">`</span> (instead of
    <span class="pre">`image-reference`</span>) to activate the lightbox
    now

-   **(added 2018-09-08)** `tag_cloud_data.json` now requires a separate
    plugin: `nikola theme `<span class="pre">`-i`</span>` tagcloud`

## <a href="upgrading-to-nikola-v8.html#toc-entry-7" class="toc-backref"
role="doc-backlink">Babel and i18n changes (added 2018-08-07)</a><a href="#babel-and-i18n-changes-added-2018-08-07" class="headerlink"
title="Permalink to this heading">¶</a>

For a long time, Nikola’s i18n features depended on the system locale
support. That led to a bunch of issues and strange bugs. We’ve replaced
this with the Babel library. New features include:

-   more flexible date formatting

-   no more strange bugs related to system locale configuration

-   translated dates even if system support was not there (eg. on Alpine
    Linux, cf. discussion on issue #2606)

-   proper forms for some Slavic languages (eg. marzec vs marca)

### <a href="upgrading-to-nikola-v8.html#toc-entry-8" class="toc-backref"
role="doc-backlink">DATE_FORMAT changed</a><a href="#date-format-changed" class="headerlink"
title="Permalink to this heading">¶</a>

DATE_FORMAT uses different tokens. If you customized `DATE_FORMAT`, you
need to change it to use
<a href="http://cldr.unicode.org/translation/date-time"
class="reference external">CLDR formats</a>. (Hint: the new default
value is <span class="pre">`YYYY-MM-dd`</span>` HH:mm`)

### <a href="upgrading-to-nikola-v8.html#toc-entry-9" class="toc-backref"
role="doc-backlink">babeldates plugin obsoleted, LocaleBorg internal API
changed</a><a href="#babeldates-plugin-obsoleted-localeborg-internal-api-changed"
class="headerlink" title="Permalink to this heading">¶</a>

The babeldates plugin is obsoleted by the changes. If you were using it,
rename `BABEL_DATE_FORMAT` to `DATE_FORMAT` and remove the plugin.

In addition, the LocaleBorg extension API was simplified. The new API
expects extension authors to create functions matching the signatures
and assign them to the following names:

-   `LocaleBorg.datetime_formatter(date, date_format, lang, locale)`

-   `LocaleBorg.in_string_formatter(date, mode, custom_format, lang, locale)`

### <a href="upgrading-to-nikola-v8.html#toc-entry-10" class="toc-backref"
role="doc-backlink">Translation help wanted</a><a href="#translation-help-wanted" class="headerlink"
title="Permalink to this heading">¶</a>

However, this means that we needed to reorganize translations. In order
to have things in a working state, I used some guessworks and tried to
produce a working form. However, not all languages will have
grammatically correct output at this point. This is why we need help
from our community around the world.

So, if you have the time, please help us check if our translations (on
<a href="https://www.transifex.com/ralsina/nikola/dashboard/"
class="reference external">Transifex</a> or <a
href="https://github.com/getnikola/nikola/tree/master/nikola/data/themes/base/messages"
class="reference external">GitHub</a>) are correct. Specifically, we
need to know if the date tags (in “Posts for XX” messages) are correctly
placed. We also need to know if the translation for those fits the
required form. To find out, you can run the <a
href="https://gist.github.com/Kwpolska/3c0d1af8bd641229d4ab64f1b98d88de"
class="reference external">test script</a> and check how all the forms
look for your locale. If they don't fit, they can be overridden: for
example, Polish uses “Posty z {month_year:MMMM yyyy}” and takes
advantage of the last bullet point.

As a bonus, the use of Babel means that it's even easier to use
"human-friendly" dates on your blog — try setting
`DATE_FORMAT = 'long'`.

## <a href="upgrading-to-nikola-v8.html#toc-entry-11" class="toc-backref"
role="doc-backlink">Removed and renamed settings</a><a href="#removed-and-renamed-settings" class="headerlink"
title="Permalink to this heading">¶</a>

The following settings have been removed. Nikola will now always behave
as if the value was what is displayed afer the setting name.

-   `FEED_PREVIEWIMAGE = True`

-   `SITEMAP_INCLUDE_FILELESS_DIRS = True`

-   `USE_OPEN_GRAPH = True`

-   `USE_BASE_TAG = False`

-   `NO_DOCUTILS_TITLE_TRANSFORM` — behavior now depends on
    `USE_REST_DOCINFO_METADATA` (Issue #3124) **(added 2018-09-06)**

The following settings were renamed:

-   `UNSLUGIFY_TITLES` → `FILE_METADATA_UNSLUGIFY_TITLES`

-   `TAG_PAGES_TITLES` → `TAG_TITLES`

-   `TAG_PAGES_DESCRIPTIONS` → `TAG_DESCRIPTIONS`

-   `CATEGORY_PAGES_TITLES` → `CATEGORY_TITLES`

-   `CATEGORY_PAGES_DESCRIPTIONS` → `CATEGORY_DESCRIPTIONS`

-   `DISABLE_INDEXES_PLUGIN_INDEX_AND_ATOM_FEED` → `DISABLE_INDEXES` and
    `DISABLE_MAIN_ATOM_FEED`

-   `DISABLE_INDEXES_PLUGIN_RSS_FEED` → `DISABLE_MAIN_RSS_FEED`

## <a href="upgrading-to-nikola-v8.html#toc-entry-12" class="toc-backref"
role="doc-backlink">Sections were replaced by categories</a><a href="#sections-were-replaced-by-categories" class="headerlink"
title="Permalink to this heading">¶</a>

<a href="https://github.com/getnikola/nikola/issues/2833"
class="reference external">Sections were an unfinished feature.</a>
Having both sections and categories at the same time made no sense. The
sections feature was removed and replaced by categories. Categories now
support using the destination path, with the possibility to ignore
common prefixes, and to use subdirectories. Categories can do everything
sections used to.

The way to migrate depends on what your blog setup was:

-   if you were only using categories, you don’t need to do anything
    (except for the two renamed settings mentioned above)

-   if you were only using sections, read on or details of required
    changes

-   if you were using both, you’ll need to pick one of the two (beware:
    might break links)

PS. the `section_prevnext` plugin has been renamed `category_prevnext`
for v8.

### <a href="upgrading-to-nikola-v8.html#toc-entry-13" class="toc-backref"
role="doc-backlink">Changes to posts</a><a href="#changes-to-posts" class="headerlink"
title="Permalink to this heading">¶</a>

If your posts are using the `section` metadata field, you should rename
it to `category`. Nikola will do this conversion automatically if no
category is specified, while also issuing a warning.

### <a href="upgrading-to-nikola-v8.html#toc-entry-14" class="toc-backref"
role="doc-backlink">Changes to configuration</a><a href="#changes-to-configuration" class="headerlink"
title="Permalink to this heading">¶</a>

-   `POSTS_SECTION_TITLE` has been merged into `CATEGORY_TITLES` (whose
    name has changed from `CATEGORY_PAGES_TITLES`)

-   `POSTS_SECTION_DESCRIPTIONS` has been merged into
    `CATEGORY_DESCRIPTIONS` (whose name has changed from
    `CATEGORY_PAGES_DESCRPTIONS`)

-   In order to activate the path-based behavior, enable
    `CATEGORY_DESTPATH_AS_DEFAULT`

-   To control what is used to generate paths, you can set
    `CATEGORY_DESTPATH_TRIM_PREFIX` and
    `CATEGORY_DESTPATH_FIRST_DIRECTORY_ONLY` (old sections
    behavior/default values are False and True respectively, but
    flipping them makes the feature much more flexible)

-   `POSTS_SECTION_NAME` is now `CATEGORY_DESTPATH_NAMES`

-   `POSTS_SECTION_COLORS` is not supported by default, but you can
    replace it with some manual tinkering

-   `CATEGORY_ALLOW_HIERARCHIES`, `CATEGORY_OUTPUT_FLAT_HIERARCHY` are
    heavily recommended if you use `CATEGORY_DESTPATH_AS_DEFAULT`, and
    required if you use `CATEGORY_PAGES_FOLLOW_DESTPATH`

### <a href="upgrading-to-nikola-v8.html#toc-entry-15" class="toc-backref"
role="doc-backlink">Recreating the old behavior of sections</a><a href="#recreating-the-old-behavior-of-sections" class="headerlink"
title="Permalink to this heading">¶</a>

``` code
CATEGORY_ALLOW_HIERARCHIES = True
CATEGORY_OUTPUT_FLAT_HIERARCHY = True
CATEGORY_DESTPATH_AS_DEFAULT = True
CATEGORY_DESTPATH_TRIM_PREFIX = False
CATEGORY_DESTPATH_FIRST_DIRECTORY_ONLY = True
CATEGORY_PAGES_FOLLOW_DESTPATH = True
```

### <a href="upgrading-to-nikola-v8.html#toc-entry-16" class="toc-backref"
role="doc-backlink">Colorizing categories (or anything, really)</a><a href="#colorizing-categories-or-anything-really" class="headerlink"
title="Permalink to this heading">¶</a>

The colorization feature is now available for *anything*, not only
sections. Templates can use the
`colorize_str(string, base_color, presets)` function, like so:

``` code
${colorize_str(post.meta('category'), theme_color, category_colors)}
```

You need to add `category_colors` to the global context manually — this
expects a regular (untranslated) dict mapping category names to hex
colors.

## <a href="upgrading-to-nikola-v8.html#toc-entry-17" class="toc-backref"
role="doc-backlink">Plugins</a><a href="#plugins" class="headerlink"
title="Permalink to this heading">¶</a>

If you are using `section_prevnext`, remove it and install
`category_prevnext` instead.

If you are using the `projectpages` plugin, you can migrate your
metadata like this:

``` code
sed 's/.. status:/.. devstatus:/g' *.rst -i
sed '/.. featured: False/d' *.rst -i
sed 's/.. featured: True/.. status: featured/g' *.rst -i
sed '/.. hidden: False/d' *.rst -i
sed 's/.. hidden: True/.. status: private/g' *.rst -i
```

## <a href="upgrading-to-nikola-v8.html#toc-entry-18" class="toc-backref"
role="doc-backlink">On YAML configuration</a><a href="#on-yaml-configuration" class="headerlink"
title="Permalink to this heading">¶</a>

One of the features we’ve promised for Nikola v8 was YAML config. We’re
afraid we won’t offer this in the v8.0.0 release just yet. Doing this
*right* will require substantial amounts of time, and the v8 project has
been going for over a year.

Rest assured: we haven’t scrapped this idea. YAML config will appear in
a future v8.x.0 release. Before that happens, we need to build a
configuration management framework, with support for <a
href="https://github.com/getnikola/nikola/issues/2475#issuecomment-384064771"
class="reference external">migrations</a> among other things — its main
focus will be Nikola config, but we hope to make it flexible enough to
work anywhere. (If you’re aware of a good project that does this, do
tell us!)

-   <a href="../categories/documentation.html" class="tag p-category"
    rel="tag">documentation</a>
-   <a href="../categories/nikola.html" class="tag p-category"
    rel="tag">nikola</a>

<!-- -->

-   <a href="nikola-v7814-is-out.html" rel="prev"
    title="Nikola v7.8.14 is out!">Previous post</a>
-   <a href="nikola-v7815-and-v800b1-are-out.html" rel="next"
    title="Nikola v7.8.15 and v8.0.0b1 are out!">Next post</a>

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
