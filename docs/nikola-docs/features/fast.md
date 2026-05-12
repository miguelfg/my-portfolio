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
    <a href="index.html" class="dropdown-item"><strong>Features</strong></a>
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
-   <a href="../blog/index.html" class="nav-link">Blog</a>
-   <a href="https://users.getnikola.com" class="nav-link">Users</a>

<!-- -->

-   <a href="fast.rst" id="sourcelink" class="nav-link">Page Source</a>

# <a href="#" class="u-url">Fast</a>

Thanks to
<a href="http://pydoit.org" class="reference external">doit</a>, Nikola
builds are incremental, which makes them extremely fast.

Nikola rebuilds only the files that *need* rebuilding — in other words,
all the assets (JS, CSS) and older posts are left in place. Incremental
rebuilds save CPU time, wall clock time and upload bandwidth (rsync will
only upload some of the files).

<a href="fast.html#top" class="reference internal">Contents</a>

-   <a href="fast.html#speed-test-average-build-times-in-seconds"
    id="toc-entry-1" class="reference internal">Speed test: Average build
    times (in seconds)</a>

    -   <a href="fast.html#full-results-and-methodology" id="toc-entry-2"
        class="reference internal">Full results and methodology</a>

-   <a href="fast.html#real-life-example" id="toc-entry-3"
    class="reference internal">Real life example</a>

## <a href="fast.html#toc-entry-1" class="toc-backref"
role="doc-backlink">Speed test: Average build times (in seconds)</a><a href="#speed-test-average-build-times-in-seconds" class="headerlink"
title="Permalink to this heading">¶</a>

<a href="https://chriswarrick.com/blog/2015/07/23/ssg-speed-test/"
class="reference external">Speed test</a> performed by Chris Warrick on
2015-07-23:

| \#  | Generator | Average of 11 runs (with fresh build) | Average of 10 runs (rebuilds only) |
|-----|-----------|---------------------------------------|------------------------------------|
| 1   | Nikola    | 2.38290                               | 2.06057                            |
| 2   | Pelican   | 2.61924                               | 2.62352                            |
| 3   | Hexo      | 6.27361                               | 6.21267                            |
| 4   | Octopress | 9.57618                               | 9.47550                            |

### <a href="fast.html#toc-entry-2" class="toc-backref"
role="doc-backlink">Full results and methodology</a><a href="#full-results-and-methodology" class="headerlink"
title="Permalink to this heading">¶</a>

Full results are available in
<a href="https://chriswarrick.com/pub/ssg-test-results.ods"
class="reference external">ods format</a>. The methodology was described
in the post about the results on
<a href="https://chriswarrick.com/blog/2015/07/23/ssg-speed-test/"
class="reference external">Chris Warrick’s blog</a>.

## <a href="fast.html#toc-entry-3" class="toc-backref"
role="doc-backlink">Real life example</a><a href="#real-life-example" class="headerlink"
title="Permalink to this heading">¶</a>

When Nikola is run, it lists all the tasks that are run, with all the
file names.

Let’s create an empty site:

<a href="../listings/build-logs/empty-site/0-fresh.txt.html"
class="reference external">build-logs/empty-site/0-fresh.txt</a>
<a href="../listings/build-logs/empty-site/0-fresh.txt"
class="reference external">(Source)</a>

``` code
$ nikola init -q empty-site
INFO: init: Created empty site at empty-site.
$ nikola build
Scanning posts....done!
.  render_galleries:output/galleries
.  render_galleries:output/galleries/index.html
.  render_galleries:output/galleries/rss.xml
.  render_indexes:output/index.html
.  render_archive:output/archive.html
.  copy_assets:output/assets/css/bootstrap.min.css
.  copy_assets:output/assets/css/bootstrap-theme.min.css
.  copy_assets:output/assets/css/theme.css
.  copy_assets:output/assets/css/bootstrap.css.map
.  copy_assets:output/assets/css/bootstrap-theme.css
.  copy_assets:output/assets/css/docs.css
.  copy_assets:output/assets/css/bootstrap.css
.  copy_assets:output/assets/css/bootstrap-theme.css.map
.  copy_assets:output/assets/css/colorbox.css
.  copy_assets:output/assets/css/images/controls.png
.  copy_assets:output/assets/css/images/loading.gif
.  copy_assets:output/assets/css/images/ie6/borderTopLeft.png
.  copy_assets:output/assets/css/images/ie6/borderBottomRight.png
.  copy_assets:output/assets/css/images/ie6/borderTopCenter.png
.  copy_assets:output/assets/css/images/ie6/borderBottomCenter.png
.  copy_assets:output/assets/css/images/ie6/borderBottomLeft.png
.  copy_assets:output/assets/css/images/ie6/borderMiddleLeft.png
.  copy_assets:output/assets/css/images/ie6/borderTopRight.png
.  copy_assets:output/assets/css/images/ie6/borderMiddleRight.png
.  copy_assets:output/assets/js/jquery.colorbox.js
.  copy_assets:output/assets/js/jquery.min.js
.  copy_assets:output/assets/js/bootstrap.js
.  copy_assets:output/assets/js/bootstrap.min.js
.  copy_assets:output/assets/js/flowr.plugin.js
.  copy_assets:output/assets/js/jquery.js
.  copy_assets:output/assets/js/jquery.min.map
.  copy_assets:output/assets/js/jquery.colorbox-min.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-ca.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-tr.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-no.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-he.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-nl.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-de.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-hr.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-ja.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-gr.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-ro.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-hu.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-fi.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-ru.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-gl.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-fr.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-pt-BR.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-sk.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-ar.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-bn.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-kr.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-lt.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-es.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-it.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-da.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-zh-CN.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-fa.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-sv.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-zh-TW.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-cs.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-my.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-uk.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-id.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-sr.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-et.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-lv.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-si.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-bg.js
.  copy_assets:output/assets/js/colorbox-i18n/jquery.colorbox-pl.js
.  copy_assets:output/assets/fonts/glyphicons-halflings-regular.svg
.  copy_assets:output/assets/fonts/glyphicons-halflings-regular.woff
.  copy_assets:output/assets/fonts/glyphicons-halflings-regular.ttf
.  copy_assets:output/assets/fonts/glyphicons-halflings-regular.woff2
.  copy_assets:output/assets/fonts/glyphicons-halflings-regular.eot
.  copy_assets:output/assets/css/ipython.min.css
.  copy_assets:output/assets/css/ipython.min.css.map
.  copy_assets:output/assets/css/nikola_ipython.css
.  copy_assets:output/assets/css/rst.css
.  copy_assets:output/assets/xml/atom.xsl
.  copy_assets:output/assets/xml/rss.xsl
.  copy_assets:output/assets/js/mathjax.js
.  copy_assets:output/assets/js/fancydates.js
.  copy_assets:output/assets/js/html5.js
.  copy_assets:output/assets/js/moment-with-locales.min.js
.  copy_assets:output/assets/css/code.css
.  render_listings:output/listings/index.html
.  render_tags:output/categories/index.html
.  render_posts:timeline_changes
.  generate_rss:output/rss.xml
.  create_bundles:output/assets/css/all.css
.  create_bundles:output/assets/js/all-nocdn.js
.  create_bundles:output/assets/css/all-nocdn.css
.  create_bundles:output/assets/js/all.js
.  sitemap:output/sitemap.xml
.  sitemap:output/sitemapindex.xml
.  robots_file:output/robots.txt
```

As you can see, many files are created. We create the resources for
galleries, indexes, archives, listings, tags/categories, RSS, sitemaps,
robots.txt, and assets (CSS/JS).

Let’s try building again:

<a href="../listings/build-logs/empty-site/1-nochanges.txt.html"
class="reference external">build-logs/empty-site/1-nochanges.txt</a>
<a href="../listings/build-logs/empty-site/1-nochanges.txt"
class="reference external">(Source)</a>

``` code
$ nikola build
Scanning posts....done!
```

Nothing was changed. Let’s add a new post:

<a href="../listings/build-logs/empty-site/post-1.txt.html"
class="reference external">build-logs/empty-site/post-1.txt</a>
<a href="../listings/build-logs/empty-site/post-1.txt"
class="reference external">(Source)</a>

``` code
$ nikola new_post --title="Post 1" --tags="foo,bar"
Creating New Post
-----------------

Title: Post 1
Scanning posts....done!
INFO: new_post: Your post's text is at: posts/post-1.rst
$ nikola build
Scanning posts....done!
.  render_archive:output/2015/index.html
.  render_archive:output/archive.html
.  render_tags:output/categories/index.html
.  render_tags:output/assets/js/tag_cloud_data.json
.  render_sources:output/posts/post-1.rst
.  render_posts:timeline_changes
.  render_posts:cache/posts/post-1.html
.  render_indexes:output/index.html
.  render_tags:output/categories/bar.html
.  render_tags:output/categories/foo.html
.  render_pages:output/posts/post-1.html
.  render_tags:output/categories/bar.xml
.  render_tags:output/categories/foo.xml
.  generate_rss:output/rss.xml
.  sitemap:output/sitemap.xml
.  sitemap:output/sitemapindex.xml
```

Only a handful of files were changed or created this time. Nikola
created/updated archives, tag/category pages, tag cloud data, post
sources, post pages, indexes, RSS and sitemaps. A lot of things were
left untouched, including the assets.

Let’s try one more post:

<a href="../listings/build-logs/empty-site/post-2.txt.html"
class="reference external">build-logs/empty-site/post-2.txt</a>
<a href="../listings/build-logs/empty-site/post-2.txt"
class="reference external">(Source)</a>

``` code
$ nikola new_post --title="Post 2" --tags="bar,baz"
Creating New Post
-----------------

Title: Post 2
Scanning posts....done!
INFO: new_post: Your post's text is at: posts/post-2.rst
$ nikola build
Scanning posts....done!
.  render_archive:output/2015/index.html
.  render_tags:output/categories/index.html
.  render_tags:output/assets/js/tag_cloud_data.json
.  render_sources:output/posts/post-2.rst
.  render_posts:timeline_changes
.  render_posts:cache/posts/post-2.html
.  render_tags:output/categories/baz.html
.  render_indexes:output/index.html
.  render_tags:output/categories/bar.html
.  render_tags:output/categories/bar.xml
.  generate_rss:output/rss.xml
.  render_pages:output/posts/post-1.html
.  render_pages:output/posts/post-2.html
.  render_tags:output/categories/baz.xml
.  sitemap:output/sitemap.xml
.  sitemap:output/sitemapindex.xml
```

The list is pretty similar. The archives page links to years, so it did
not have to be changed. The first post was changed to add a link to the
second one. Note that the tag page for *foo* was left untouched, the new
post does not use it.

Let’s try a third post:

<a href="../listings/build-logs/empty-site/post-3.txt.html"
class="reference external">build-logs/empty-site/post-3.txt</a>
<a href="../listings/build-logs/empty-site/post-3.txt"
class="reference external">(Source)</a>

``` code
$ nikola new_post --title="Post 3" --tags="foobar"
Creating New Post
-----------------

Title: Post 3
Scanning posts....done!
INFO: new_post: Your post's text is at: posts/post-3.rst
$ nikola build
Scanning posts....done!
.  render_archive:output/2015/index.html
.  render_tags:output/categories/index.html
.  render_tags:output/assets/js/tag_cloud_data.json
.  render_sources:output/posts/post-3.rst
.  render_posts:timeline_changes
.  render_posts:cache/posts/post-3.html
.  render_tags:output/categories/foobar.html
.  render_indexes:output/index.html
.  generate_rss:output/rss.xml
.  render_pages:output/posts/post-3.html
.  render_pages:output/posts/post-2.html
.  render_tags:output/categories/foobar.xml
.  sitemap:output/sitemap.xml
.  sitemap:output/sitemapindex.xml
```

Once again, the other tags were not rebuilt, and the first post did not
need changing.

Contents © 2012–2025 [Roberto Alsina and the Nikola
contributors](../contact.html)  \|  Powered by Nikola itself  \|  
[Follow Nikola on
Twitter](https://twitter.com/intent/user?screen_name=GetNikola)  \|  Theme
is [Cerulean](https://bootswatch.com/cerulean/)

<a href="https://statcounter.com/tumblr/" target="_blank" title="tumblr
statistics"><img src="https://c.statcounter.com/7842875/0/3421486a/1/"
class="statcounter" alt="tumblr statistics" /></a>
