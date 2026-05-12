<a href="#content" class="sr-only sr-only-focusable">Skip to main
content</a>

<a href="." class="navbar-brand"><img src="assets/img/logo.svg"
id="logo" class="d-inline-block align-top" alt="Nikola" /></a>

<span class="navbar-toggler-icon"></span>

-   <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown"
    aria-haspopup="true" aria-expanded="false">Documentation</a>
    <a href="documentation.html" class="dropdown-item"><strong>Documentation
    Index</strong></a>
    <a href="getting-started.html" class="dropdown-item"><strong>Getting
    Started</strong></a> <a href="handbook.html"
    class="dropdown-item"><strong>Handbook</strong></a>
    <a href="features/index.html"
    class="dropdown-item"><strong>Features</strong></a>
    <a href="conf.html" class="dropdown-item">conf.py</a>
    <a href="changes.html" class="dropdown-item">Changelog</a>
    <a href="creating-a-theme.html" class="dropdown-item">Theming
    Tutorial</a>
    <a href="theming.html" class="dropdown-item">Theming Reference</a>
    <a href="extending.html" class="dropdown-item">Extending</a>
    <a href="internals.html" class="dropdown-item">Internals</a>
    <a href="#" class="dropdown-item active">Creating a Site (Not a Blog)
    <span class="sr-only">(active)</span></a>
    <a href="license.html" class="dropdown-item">License</a>
-   <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown"
    aria-haspopup="true" aria-expanded="false">Support &amp; Contact</a>
    <a href="https://github.com/getnikola/nikola/issues"
    class="dropdown-item">GitHub Issues</a>
    <a href="https://github.com/getnikola/nikola/discussions"
    class="dropdown-item">GitHub Discussions</a>
    <a href="https://x.com/GetNikola" class="dropdown-item">X/Twitter</a>
    <a href="https://irclogs.getnikola.com/" class="dropdown-item">IRC logs
    (#<span class="__cf_email__"
    data-cfemail="147a7d7f7b787554787d767166753a777c7560">[email protected]</span>)</a>
    <a href="contact.html" class="dropdown-item"><strong>All support
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
    <a href="changes.html" class="dropdown-item">Changelog</a>
    <a href="license.html" class="dropdown-item">License</a>
    <a href="authors.html" class="dropdown-item">Contributors</a>
-   <a href="blog/index.html" class="nav-link">Blog</a>
-   <a href="https://users.getnikola.com" class="nav-link">Users</a>

<!-- -->

-   <a href="creating-a-site-not-a-blog-with-nikola.rst" id="sourcelink"
    class="nav-link">Page Source</a>

# <a href="#" class="u-url">Creating a Site (Not a Blog) with Nikola</a>

One of the most frequent questions I get about Nikola is “but how do I
create a site that’s not a blog?”. And of course, that’s because the
documentation is heavily blog–oriented. This document will change that
;-)

Since it started, Nikola has had the capabilities to create generic
sites. For example, Nikola’s
<a href="https://getnikola.com/" class="reference external">own site</a>
is a fairly generic one. Let’s go step by step on how you can do
something like that.

As usual when starting a nikola site, you start with `nikola init` which
creates a empty (mostly) configured site:

``` code
$ nikola init mysite
Creating Nikola Site
====================
⋮
[1970-01-01T00:00:00Z] INFO: init: Created empty site at mysite.
```

Then we go into the new `mysite` folder, and make the needed changes in
the `conf.py` configuration file:

``` code
# Data about this site
BLOG_AUTHOR = "Roberto Alsina"
BLOG_TITLE = "Not a Blog"
# This is the main URL for your site. It will be used
# in a prominent link
SITE_URL = "https://getnikola.com/"
BLOG_EMAIL = "[email protected]"
BLOG_DESCRIPTION = "This is a demo site (not a blog) for Nikola."

#
# Some things in the middle you don't really need to change...
#

# you can also keep the current content of POSTS if you want a blog with your site
POSTS = ()
# remove destination directory to generate pages in the root directory
PAGES = (
    ("pages/*.rst", "", "page.tmpl"),
    ("pages/*.txt", "", "page.tmpl"),
    ("pages/*.html", "", "page.tmpl"),
)

# And to avoid a conflict because blogs try to generate /index.html
INDEX_PATH = "blog"

# Or you can disable blog indexes altogether:
# DISABLE_INDEXES = True
```

And now we are ready to create our first page:

``` code
$ nikola new_page
Creating New Page
-----------------

Title: index
Scanning posts....done!
[1970-01-01T00:00:00Z] INFO: new_page: Your page's text is at: pages/index.rst
```

We can now build and preview our site:

``` code
$ nikola build
Scanning posts.done!
.  render_site:output/categories/index.html
.  render_sources:output/index.txt
.  render_rss:output/rss.xml
⋮
$ nikola serve
[1970-01-01T00:00:00Z] INFO: serve: Serving HTTP on 0.0.0.0 port 8000...
```

And you can see your (very empty) site in
<a href="http://localhost:8000/"
class="reference external">http://localhost:8000/</a>

So, what’s in that `pages/index.txt` file?

``` code
.. title: index
.. slug: index
.. date: 1970-01-01 00:00:00 UTC
.. tags:
.. link:
.. description:


Write your post here.
```

`title` is the page title, `slug` is the name of the generated HTML file
(in this case it would be `index.html`). `date`, `tags` and `link`
doesn’t matter at all in pages. `description` is useful for SEO purposes
if you care for that.

And below, the content. By default Nikola uses
<a href="https://getnikola.com/quickstart.html"
class="reference external">reStructuredText</a> but it supports a ton of
formats, including Markdown, plain HTML, Jupyter Notebooks, BBCode,
Wiki, and Textile. We will use reStructuredText for this example, but
some people might find it a bit too limiting — if that is the case, try
using HTML for your pages (Nikola does this on the index page, for
example).

So, let's give the page a nicer title, and some fake content. Since the
default Nikola theme (called `bootblog4`) is based on
<a href="https://getbootstrap.com/"
class="reference external">Bootstrap</a> you can use anything you like
from it:

``` code
.. title: Welcome To The Fake Site
.. slug: index
.. date: 1970-01-01 00:00:00 UTC
.. tags:
.. link:
.. description: Fake Site version 1, welcome page!


.. class:: jumbotron col-md-6

.. admonition:: This is a Fake Site

    It pretends to be about things, but is really just an example.

    .. raw:: html

       <a href="https://getnikola.com/" class="btn btn-primary btn-lg">Click Me!</a>


.. class:: col-md-5

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non nunc turpis.
Phasellus a ullamcorper leo. Sed fringilla dapibus orci eu ornare. Quisque
gravida quam a mi dignissim consequat. Morbi sed iaculis mi. Vivamus ultrices
mattis euismod. Mauris aliquet magna eget mauris volutpat a egestas leo rhoncus.
In hac habitasse platea dictumst. Ut sed mi arcu. Nullam id massa eu orci
convallis accumsan. Nunc faucibus sodales justo ac ornare. In eu congue eros.
Pellentesque iaculis risus urna. Proin est lorem, scelerisque non elementum at,
semper vel velit. Phasellus consectetur orci vel tortor tempus imperdiet. Class
aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
himenaeos.
```

TIP: Nice URLs

If you like your URLs without the `.html` then you want to create
folders and put the pages in `index.html` inside them using the
`PRETTY_URLS` option (on by default)

And that's it. You will want to change the NAVIGATION_LINKS option to
create a reasonable menu for your site, you may want to modify the theme
(check `nikola help subtheme` for a quick & dirty solution), and you may
want to add a blog later on, for company news or whatever.

TIP: So, how do I add a blog now?

First, change the `POSTS` option like this:

``` code
POSTS = (
    ("posts/*.rst", "blog", "post.tmpl"),
    ("posts/*.txt", "blog", "post.tmpl"),
    ("posts/*.html", "blog", "post.tmpl"),
)
```

Create a post with `nikola new_post` and that's it, you now have a blog
in the `/blog/` subdirectory of your site — you may want to link to it
in `NAVIGATION_LINKS`.

If you want to see a site implementing all of the above, check out
<a href="https://getnikola.com/" class="reference external">the Nikola
website</a>.

I hope this was helpful!

Contents © 2012–2025 [Roberto Alsina and the Nikola
contributors](contact.html)  \|  Powered by Nikola itself  \|   [Follow
Nikola on
Twitter](https://twitter.com/intent/user?screen_name=GetNikola)  \|  Theme
is [Cerulean](https://bootswatch.com/cerulean/)

<a href="https://statcounter.com/tumblr/" target="_blank" title="tumblr
statistics"><img src="https://c.statcounter.com/7842875/0/3421486a/1/"
class="statcounter" alt="tumblr statistics" /></a>
