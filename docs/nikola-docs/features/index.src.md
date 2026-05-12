[](/handbook.html#why-static)

<span class="fa-stack fa-3x"></span>

#### Static sites

Static websites are safer, use fewer resources, and avoid vendor and
platform lock-in. You can host a Nikola website on any web server, big
or small. It’s just a bunch of HTML files and assets.

<a href="/handbook.html#why-static" class="btn btn-sm btn-secondary">Why
static? »</a>

[](/features/fast.html)

<span class="fa-stack fa-3x"></span>

#### Fast, incremental builds

Nikola is fast. It uses [doit](http://pydoit.org), which provides
incremental rebuilds — in other words, we rebuild only the pages that
need rebuilding, saving CPU time, wall clock time and upload bandwidth.

<a href="/features/fast.html" class="btn btn-sm btn-secondary">Explore
in depth »</a>

[](/handbook.html#supported-input-formats)

<span class="fa-stack fa-3x"></span>

#### Multiple input formats

Nikola will take input in many formats. Out of the box, we support
reStructuredText, Markdown, IPython (Jupyter) Notebooks and HTML, and
have plugins for many other formats.

<a href="/handbook.html#supported-input-formats"
class="btn btn-sm btn-secondary">Check list of input formats and setup
documentation »</a>

[](#importers)

<span class="fa-stack fa-3x"></span>

#### Importers for popular blog platforms

Nikola has importers for popular blog platforms, so you can switch
easily and free your work.

The [ WordPress
importer](https://getnikola.com/handbook.html#importing-your-wordpress-site-into-nikola)
is built in (`nikola import_wordpress`); others are available as plugins
and must be installed by using `nikola plugin -i`.

-   [import_wordpress](https://getnikola.com/handbook.html#importing-your-wordpress-site-into-nikola)
    (built-in)
-   [import_blogger](https://plugins.getnikola.com/#import_blogger)
-   [import_feed](https://plugins.getnikola.com/#import_feed) (RSS/Atom)
-   [import_goodreads](https://plugins.getnikola.com/#import_goodreads)
-   [import_gplus](https://plugins.getnikola.com/#import_gplus)
-   [import_jekyll](https://plugins.getnikola.com/#import_jekyll)
-   [import_page](https://plugins.getnikola.com/#import_page) (arbitrary
    web page)
-   [import_tumblr](https://plugins.getnikola.com/#import_tumblr)
-   [import_twitpic](https://plugins.getnikola.com/#import_twitpic)

[](/handbook.html#components)

<span class="fa-stack fa-3x"></span>

#### Built-in components

Nikola comes with everything you need to build a modern website: blogs
(with comments, tags, categories, archives, RSS/Atom feeds), easy image
galleries, and code listings.

<a href="/handbook.html#components"
class="btn btn-sm btn-secondary">Explore in depth »</a>

[](https://www.transifex.com/projects/p/nikola/)

<span class="fa-stack fa-3x"></span>

#### Multilingual support

Nikola supports almost 40 languages out of the box, and it’s trivial to
add more. You can write posts in multiple languages, and have links
between the diferent versions of a post. There are even some settings
(including navigation bars and site titles) that can differ between the
different language versions.

<a href="https://www.transifex.com/projects/p/nikola/"
class="btn btn-sm btn-secondary">Check out available languages in
Transifex »</a>

[](/extending.html)

<span class="fa-stack fa-3x"></span>

#### Extensible

Nikola is extensible. You can write a plugin to add any feature you want
in a few lines of Python, or write your own theme in Mako or Jinja2. Or
find something in the [Plugin](https://plugins.getnikola.com/) and
[Theme](https://themes.getnikola.com/) Indexes.

<a href="/extending.html" class="btn btn-sm btn-secondary">Read
extending documentation »</a>

[](#cli)

<span class="fa-stack fa-3x"></span>

#### Friendly CLI

Nikola has a friendly user interface that gets you up and running
quickly and simplifies your work.

-   To build your site, just run `nikola build`.
-   You can use [automatic rebuilds](#auto) with `nikola auto`, or a
    simple server with `nikola serve`.
-   Deploy with `nikola deploy` or `nikola github_deploy`.
-   See some status information for your site with `nikola status`.
-   Check for broken links and missing/orphan files with `nikola check`.
-   Create new posts (with required metadata) `nikola new_post` or
    `nikola new_page`.
-   Install themes with `nikola install_theme`, and manage plugins with
    `nikola plugin`.
-   Import a WordPress blog with `nikola import_wordpress`.
-   Debug with `nikola console`, `nikola dumpdb` and a few other
    commands.
-   Check for Nikola updates with `nikola version --check`.
-   When in doubt, run `nikola help` to get a list of all available
    commands.

[](/features/auto.html)

<span class="fa-stack fa-3x"></span>

#### Automatic rebuilds

If you are working on your site, you don’t need to type `nikola build`
and reload every time you make a change. Instead, just run
`nikola auto`. It will detect changes and automatically rebuild your
site and refresh your browser (using livereload).

<a href="/features/auto.html" class="btn btn-sm btn-secondary">Explore
in depth »</a>

[](https://getnikola.com/blog/a-cms-or-two-for-nikola-dato-cms-and-netlify-cms-integration.html)

<span class="fa-stack fa-3x"></span>

#### Easy to use with a CMS

If you want to use Nikola for a website that has content authored by
people who do not like command-line interfaces or who would prefer to
use a WYSIWYG editor, we have some solutions for you.

Nikola can work with many static-site CMS solutions, including Dato CMS,
Netlify CMS and Contentful. You can get a user-friendly admin panel for
your Nikola site in just a few minutes.

<a
href="https://getnikola.com/blog/a-cms-or-two-for-nikola-dato-cms-and-netlify-cms-integration.html"
class="btn btn-sm btn-secondary">Read a blog post about CMS integration
»</a>
