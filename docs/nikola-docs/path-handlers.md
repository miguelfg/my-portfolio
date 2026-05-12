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
    <a href="creating-a-site-not-a-blog-with-nikola.html"
    class="dropdown-item">Creating a Site (Not a Blog)</a>
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
    data-cfemail="bcd2d5d7d3d0ddfcd0d5ded9cedd92dfd4ddc8">[email protected]</span>)</a>
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

-   <a href="path-handlers.rst" id="sourcelink" class="nav-link">Page
    Source</a>

# <a href="#" class="u-url">Path Handlers for Nikola</a>

Nikola supports special links with the syntax
<span class="pre">`link://kind/name`</span>. In templates you can also
use `_link(kind, name)`. You can add query strings
(<span class="pre">`?key=value`</span>) for extra arguments, or pass
keyword arguments to `_link` in templates (support and behavior depends
on path handlers themselves). Fragments (`#anchor`) will be appended to
the transformed link.

Here are the descriptions for all the supported kinds.

archive  
Link to archive path, name is the year.

Example:

link://archive/2013 =\> /archives/2013/index.html

author  
Link to an author's page.

Example:

link://author/joe =\> /authors/joe.html

author_atom  
Link to an author's Atom feed.

Example:

link://author_atom/joe =\> /authors/joe.atom

author_index  
Link to the authors index.

Example:

link://authors/ =\> /authors/index.html

author_rss  
Link to an author's RSS feed.

Example:

link://author_rss/joe =\> /authors/joe.xml

category  
A link to a category. Takes page number as optional keyword argument.

Example:

link://category/dogs =\> /categories/dogs.html

category_atom  
A link to a category's Atom feed.

Example:

link://category_atom/dogs =\> /categories/dogs.atom

category_index  
A link to the category index.

Example:

link://category_index =\> /categories/index.html

category_rss  
A link to a category's RSS feed.

Example:

link://category_rss/dogs =\> /categories/dogs.xml

filename  
Link to post or page by source filename.

Example:

link://filename/manual.txt =\> /docs/handbook.html

gallery  
Link to an image gallery's path.

It will try to find a gallery with that name if it's not ambiguous or
with that path. For example:

link://gallery/london =\> /galleries/trips/london/index.html

link://gallery/trips/london =\> /galleries/trips/london/index.html

gallery_global  
Link to the global gallery path, which contains all the images in
galleries.

There is only one copy of an image on multilingual blogs, in the site
root.

link://gallery_global/london =\> /galleries/trips/london/index.html

link://gallery_global/trips/london =\>
/galleries/trips/london/index.html

(a `gallery` link could lead to eg.
/en/galleries/trips/london/index.html)

gallery_rss  
Link to an image gallery's RSS feed.

It will try to find a gallery with that name if it's not ambiguous or
with that path. For example:

link://gallery_rss/london =\> /galleries/trips/london/rss.xml

link://gallery_rss/trips/london =\> /galleries/trips/london/rss.xml

index  
Link to a numbered index.

Example:

link://index/3 =\> /index-3.html

index_atom  
Link to a numbered Atom index.

Example:

link://index_atom/3 =\> /index-3.atom

index_rss  
A link to the RSS feed path.

Example:

link://rss =\> /blog/rss.xml

listing  
Return a link to a listing.

It will try to use the file name if it's not ambiguous, or the file
path.

Example:

link://listing/hello.py =\> /listings/tutorial/hello.py.html

link://listing/tutorial/hello.py =\> /listings/tutorial/hello.py.html

listing_source  
Return a link to the source code for a listing.

It will try to use the file name if it's not ambiguous, or the file
path.

Example:

link://listing_source/hello.py =\> /listings/tutorial/hello.py

link://listing_source/tutorial/hello.py =\> /listings/tutorial/hello.py

post_path  
Link to the destination of an element in the POSTS/PAGES settings.

Example:

link://post_path/posts =\> /blog

root  
Link to the current language's root.

Example:

link://root_path =\> /

link://root_path =\> /translations/spanish/

rss  
A link to the RSS feed path.

Example:

link://rss =\> /blog/rss.xml

slug  
Return a link to a post with given slug, if not ambiguous.

Example:

link://slug/yellow-camaro =\> /posts/cars/awful/yellow-camaro/index.html

slug_source  
Return a link to source for a post with given slug, if not ambiguous.

Example:

link://slug_source/yellow-camaro =\> /posts/cars/awful/yellow-camaro.rst

tag  
A link to a tag's page. Takes page number as optional keyword argument.

Example:

link://tag/cats =\> /tags/cats.html

tag_atom  
A link to a tag's Atom feed.

Example:

link://tag_atom/cats =\> /tags/cats.atom

tag_index  
A link to the tag index.

Example:

link://tag_index =\> /tags/index.html

tag_rss  
A link to a tag's RSS feed.

Example:

link://tag_rss/cats =\> /tags/cats.xml

Contents © 2012–2025 [Roberto Alsina and the Nikola
contributors](contact.html)  \|  Powered by Nikola itself  \|   [Follow
Nikola on
Twitter](https://twitter.com/intent/user?screen_name=GetNikola)  \|  Theme
is [Cerulean](https://bootswatch.com/cerulean/)

<a href="https://statcounter.com/tumblr/" target="_blank" title="tumblr
statistics"><img src="https://c.statcounter.com/7842875/0/3421486a/1/"
class="statcounter" alt="tumblr statistics" /></a>
