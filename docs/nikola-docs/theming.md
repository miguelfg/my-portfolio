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
    <a href="#" class="dropdown-item active">Theming Reference <span
    class="sr-only">(active)</span></a>
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
    data-cfemail="eb85828084878aab8782898e998ac588838a9f">[email protected]</span>)</a>
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

-   <a href="theming.rst" id="sourcelink" class="nav-link">Page Source</a>

# <a href="#" class="u-url">Theming Nikola</a>

Version<span class="colon">:</span>  
8.3.2

Author<span class="colon">:</span>  
Roberto Alsina \<<a
href="/cdn-cgi/l/email-protection#c2b0a3aeb1abaca382aca7b6afa3aca3a5a7b0b1eca1adafeca3b0"
class="reference external"><span class="__cf_email__"
data-cfemail="84f6e5e8f7edeae5c4eae1f0e9e5eae5e3e1f6f7aae7ebe9aae5f6">[email protected]</span></a>\>
and others

<a href="theming.html#top" class="reference internal">Contents</a>

-   <a href="theming.html#the-structure" id="toc-entry-1"
    class="reference internal">The Structure</a>

-   <a href="theming.html#theme-meta-files" id="toc-entry-2"
    class="reference internal">Theme meta files</a>

-   <a href="theming.html#templates" id="toc-entry-3"
    class="reference internal">Templates</a>

-   <a href="theming.html#built-in-templates" id="toc-entry-4"
    class="reference internal">Built-in templates</a>

-   <a href="theming.html#variables-available-in-templates" id="toc-entry-5"
    class="reference internal">Variables available in templates</a>

-   <a
    href="theming.html#customizing-themes-to-user-color-preference-colorizing-category-names"
    id="toc-entry-6" class="reference internal">Customizing themes to user
    color preference, colorizing category names</a>

-   <a
    href="theming.html#identifying-and-customizing-different-kinds-of-pages-with-a-shared-template"
    id="toc-entry-7" class="reference internal">Identifying and customizing
    different kinds of pages with a shared template</a>

-   <a href="theming.html#messages-and-translations" id="toc-entry-8"
    class="reference internal">Messages and Translations</a>

-   <a href="theming.html#configuration-of-the-raw-template-engine"
    id="toc-entry-9" class="reference internal">Configuration of the raw
    template engine</a>

-   <a href="theming.html#less-and-sass" id="toc-entry-10"
    class="reference internal">LESS and Sass</a>

This document is a reference about themes. If you want a tutorial,
please read
<a href="creating-a-theme.html" class="reference external">Creating a
Theme</a>. If you’re looking for a ready-made theme for your site, check
out the <a href="https://themes.getnikola.com/"
class="reference external">Themes Index</a>.

## <a href="theming.html#toc-entry-1" class="toc-backref"
role="doc-backlink">The Structure</a><a href="#the-structure" class="headerlink"
title="Permalink to this heading">¶</a>

Themes are located in the `themes` folder where Nikola is installed, and
in the `themes` folder of your site, one folder per theme. The folder
name is the theme name.

A Nikola theme consists of the following folders (they are *all*
optional):

assets  
This is where you would put your CSS, JavaScript and image files. It
will be copied into `output/assets` when you build the site, and the
templates will contain references to them. The default subdirectories
are `css`, `js`, `xml` and `fonts` (Bootstrap).

The included themes use <a href="https://getbootstrap.com/"
class="reference external">Bootstrap</a>,
<a href="https://feimosi.github.io/baguetteBox.js/"
class="reference external">baguetteBox</a>,
<a href="https://flickr.github.io/justified-layout/"
class="reference external">Justified Layout by Flickr</a> and
<a href="https://moment.github.io/luxon/"
class="reference external">Luxon</a>, so they are in assets, along with
CSS files for syntax highlighting, reStructuredText and Jupyter, as well
as a minified copy of jQuery.

If you want to base your theme on other frameworks (or on no framework
at all) just remember to put there everything you need for deployment.
(Not all of the listed assets are used by `base`)

templates  
This contains the templates used to generate the pages. While Nikola
will use a certain set of template names by default, you can add others
for specific parts of your site.

messages  
Nikola tries to be multilingual. This is where you put the strings for
your theme so that it can be translated into other languages.

less, sass  
Files to be compiled into CSS using LESS and Sass (both require plugins)

This mandatory file:

\<theme\>.theme  
An INI file containing theme meta data. The file format is described in
detail below, in the
<a href="theming.html#theme-meta-files" class="reference internal">Theme
meta files</a> section.

And these optional files:

parent, engine  
One-line text files that contain the names of parent and engine themes,
respectively. Those are needed for older versions (Nikola v7.8.5 and
older).

bundles  
A <a href="https://docs.python.org/3/library/configparser.html"
class="reference external">config</a> file containing a list of files to
be turned into bundles. For example:

``` code
assets/css/all.css=
    bootstrap.min.css,
    rst_base.css,
    nikola_rst.css,
    code.css,
    baguetteBox.min.css,
    theme.css,
    custom.css,
```

This creates a file called "assets/css/all.css" in your output that is
the combination of all the other file paths, relative to the output
file. This makes the page much more efficient because it avoids multiple
connections to the server, at the cost of some extra difficult
debugging.

Bundling applies to CSS and JS files.

Templates should use either the bundle or the individual files based on
the `use_bundles` variable, which in turn is set by the `USE_BUNDLES`
option.

## <a href="theming.html#toc-entry-2" class="toc-backref"
role="doc-backlink">Theme meta files</a><a href="#theme-meta-files" class="headerlink"
title="Permalink to this heading">¶</a>

As of Nikola v7.8.6, Nikola uses meta files for themes. Those are INI
files, with the same name as your theme, and a `.theme` extension, eg.
`bootstrap3.theme`. Here is an example, from the bootstrap3 theme:

``` code
[Theme]
engine = mako
parent = base
author = The Nikola Contributors
author_url = https://getnikola.com/
based_on = Bootstrap 3 <https://getbootstrap.com/>
license = MIT
tags = bootstrap

[Family]
family = bootstrap3
jinja_version = bootstrap3-jinja
variants = bootstrap3-gradients, bootstrap3-gradients-jinja

[Nikola]
bootswatch = True
```

The following keys are currently supported:

-   `Theme` — contains information about the theme.

    -   `engine` — engine used by the theme. Should be `mako` or
        `jinja`.

    -   `parent` — the parent theme. Any resources missing in this
        theme, will be looked up in the parent theme (and then in the
        grandparent, etc).

        The parent is so you don’t have to create a full theme each
        time: just create an empty theme, set the parent, and add the
        bits you want modified.

        While it is possible to create a theme without a parent, it is
        **strongly discouraged** and not officially supported, in the
        sense: We won't help with issues that are caused by a theme
        being parentless, and we won't guarantee that it will always
        work with new Nikola versions. The base and base-jinja themes
        provide assets, messages, and generic templates that Nikola
        expects to be able to use in all sites. That said, if you are
        making something very custom, Nikola will not prevent the
        creation of a theme without base, but you will need to manually
        determine which templates and messages are required in your
        theme. (Initially setting the `NIKOLA_TEMPLATES_TRACE`
        environment variable might be of some help, see below.)

        The following settings are recommended:

        -   If your theme uses Bootstrap 3, inherit the `bootstrap3`
            theme.

        -   If your theme uses Jinja as a template engine, inherit
            <span class="pre">`base-jinja`</span> or
            <span class="pre">`bootstrap3-jinja`</span>

        -   In any other case, inherit `base`.

    -   `author`, `author_url` — used to identify theme author.

    -   `based_on` — optional list of inspirations, frameworks, etc.
        used in the theme. Should be comma-separated, the format
        `Name <URL>` is recommended.

    -   `license` — theme license. Pick MIT if you have no preference.

    -   `tags` — optional list of tags (comma-separated) to describe the
        theme.

-   `Family` — contains information about other related themes. All
    values optional. (Do not use unless you have related themes.)

    -   `family` — the name of the main theme in a family, which is also
        used as the family name.

    -   `mako_version`, `jinja_version` — name of the mako/jinja version
        of the theme.

    -   `variants` — comma-separated list of stylistic variants (other
        than the mako/jinja version listed above)

-   `Nikola` — Nikola-specific information, currently optional.

    -   `bootswatch` — whether or not theme supports Bootswatch styling
        (optional, defaults to False)

    -   `ignored_assets` — comma-separated list of assets to ignore
        (relative to the `assets/` directory, eg. `css/theme.css`)

## <a href="theming.html#toc-entry-3" class="toc-backref"
role="doc-backlink">Templates</a><a href="#templates" class="headerlink"
title="Permalink to this heading">¶</a>

In templates there is a number of files whose name ends in `.tmpl`.
Those are the theme’s page templates. They are done using the
<a href="https://www.makotemplates.org"
class="reference external">Mako</a> or
<a href="http://jinja.pocoo.org" class="reference external">Jinja2</a>
template languages. If you want to do a theme, you should learn one
first. What engine is used by the theme is declared in the `engine`
file.

Tip

If you are using Mako templates, and want some extra speed when building
the site you can install Beaker and
<a href="https://docs.makotemplates.org/en/latest/caching.html"
class="reference external">make templates be cached</a>

Both template engines have a nifty concept of template inheritance. That
means that a template can inherit from another and only change small
bits of the output. For example, `base.tmpl` defines the whole layout
for a page but has only a placeholder for content so `post.tmpl` only
define the content, and the layout is inherited from `base.tmpl`.

Another concept is theme inheritance. You do not need to duplicate all
the default templates in your theme — you can just override the ones you
want changed, and the rest will come from the parent theme. If your
theme does not define a parent, it needs to be complete. It is generally
a lot harder to come up with a complete theme, compared to only changing
a few files and using the rest from a suitable parent theme.

Tip

If you set the environment variable `NIKOLA_TEMPLATES_TRACE` to `true`,
Nikola will log template usage, both to output and also into a file
`templates_log.txt`.

Apart from the <a href="theming.html#built-in-templates"
class="reference internal">built-in templates</a> listed below, you can
add other templates for specific pages, which the user can then use in
his `POSTS` or `PAGES` option in `conf.py`. Also, you can specify a
custom template to be used by a post or page via the `template`
metadata, and custom templates can be added in the `templates/` folder
of your site.

If you want to modify (override) a built-in template, use
`nikola theme `<span class="pre">`-c`</span>` `<span class="pre">`<name>.tmpl`</span>.
This command will copy the specified template file from the parent theme
to the `templates/` directory of your currently used theme.

Keep in mind that your theme is *yours*, so you can require whatever
data you want (e.g., you may depend on specific custom `GLOBAL_CONTEXT`
variables, or post meta attributes). You don’t need to keep the same
theme structure as the default themes do (although many of those names
are hardcoded). Inheriting from at least `base` (or
<span class="pre">`base-jinja`</span>) is heavily recommended, but not
strictly required (unless you want to share it on the Themes Index).

## <a href="theming.html#toc-entry-4" class="toc-backref"
role="doc-backlink">Built-in templates</a><a href="#built-in-templates" class="headerlink"
title="Permalink to this heading">¶</a>

These are the templates that come with the included themes:

`base.tmpl`  
This template defines the basic page layout for the site. It’s mostly
plain HTML but defines a few blocks that can be re-defined by inheriting
templates.

It has some separate pieces defined in `base_helper.tmpl`,
`base_header.tmpl` and `base_footer.tmpl` so they can be easily
overridden.

`index.tmpl`  
Template used to render the multipost indexes. The posts are in a
`posts` variable. Some functionality is in the `index_helper.tmpl`
helper template.

`archive_navigation_helper.tmpl` (internal)  
Code that implements archive navigation (previous/up/next). Included by
archive templates.

`archiveindex.tmpl`  
Used to display archives, if `ARCHIVES_ARE_INDEXES` is True. By default,
it just inherits `index.tmpl`, with added archive navigation and feeds.

`author.tmpl`  
Used to display author pages.

`authorindex.tmpl`  
Used to display author indexes, if `AUTHOR_PAGES_ARE_INDEXES` is True.
By default, it just inherits `index.tmpl`, with added feeds.

`comments_helper.tmpl` (internal)  
This template handles comments. You should probably never touch it :-)
It uses a bunch of helper templates, one for each supported comment
system (all of which start with `comments_helper`)

`ui_helper.tmpl`, `pagination_helper.tmpl`  
These templates help render specific UI items, and can be tweaked as
needed.

`gallery.tmpl`  
Template used for image galleries. Interesting data includes:

-   `post`: A post object, containing descriptive `post.text()` for the
    gallery.

-   `crumbs`: A list of `link, crumb` to implement breadcrumbs.

-   `folders`: A list of folders to implement hierarchical gallery
    navigation.

-   `enable_comments`: To enable/disable comments in galleries.

-   `thumbnail_size`: The `THUMBNAIL_SIZE` option.

-   `photo_array`: a list of dictionaries, each containing:

    -   `url`: URL for the full-sized image.

    -   `url_thumb`: URL for the thumbnail.

    -   `title`: The title of the image.

    -   `size`: A dict containing `w` and `h`, the real size of the
        thumbnail.

-   `photo_array_json`: a JSON dump of photo_array, used by the
    <span class="pre">`justified-layout`</span> script

`list.tmpl`  
Template used to display generic lists of links, which it gets in
`items`, a list of *(text, link, count)* elements.

`list_post.tmpl`  
Template used to display generic lists of posts, which it gets in
`posts`.

`listing.tmpl`  
Used to display code listings.

`math_helper.tmpl` (internal)  
Used to add MathJax/KaTeX code to pages.

`post.tmpl`  
Template used by default for blog posts, gets the data in a `post`
object which is an instance of the Post class. Some functionality is in
the `post_helper.tmpl` and `post_header.tmpl` templates.

`post_list_directive.tmpl`  
Template used by the `post_list` reStructuredText directive.

`page.tmpl`  
Used for pages that are not part of a blog, usually a cleaner, less
intrusive layout than `post.tmpl`, but same parameters.

`tag.tmpl`  
Used to show the contents of a single tag or category.

`tagindex.tmpl`  
Used to show the contents of a single tag or category, if
`TAG_PAGES_ARE_INDEXES` is True. By default, it just inherits
`index.tmpl`, with added feeds and some extra features.

`tags.tmpl`  
Used to display the list of tags and categories.

## <a href="theming.html#toc-entry-5" class="toc-backref"
role="doc-backlink">Variables available in templates</a><a href="#variables-available-in-templates" class="headerlink"
title="Permalink to this heading">¶</a>

The full, complete list of variables available in templates is
maintained in a separate document:
<a href="https://getnikola.com/template-variables.html"
class="reference external">Template variables</a>

## <a href="theming.html#toc-entry-6" class="toc-backref"
role="doc-backlink">Customizing themes to user color preference,
colorizing category names</a><a
href="#customizing-themes-to-user-color-preference-colorizing-category-names"
class="headerlink" title="Permalink to this heading">¶</a>

The user’s preference for theme color is exposed in templates as
`theme_color` set in the `THEME_COLOR` option.

This theme color is exposed to the browser in default themes — some
browsers might use this color in the user interface (eg. Chrome on
Android in light mode displays the toolbar in this color).

Nikola also comes with support for auto-generating colors similar to a
base color. This can be used with `theme_color` and eg. category names.
This feature is exposed to templates as two functions:
`colorize_str(string, hex_color, presets)` and
`colorize_str_from_base_color(string, hex_color)`. If you want to
display the category name in the color, first define a list of overrides
in your `conf.py` file:

``` code
# end of conf.py
GLOBAL_CONTEXT = {
    "category_colors": {
        "Blue": "#0000FF"
    }
}
```

With that definition, you can now use `colorize_str` in your templates
like this:

``` code
<!-- Mako -->
<span style="background-color: ${colorize_str(post.meta('category'), theme_color, category_colors)}">${post.meta('category')}</span>
```

``` code
<!-- Jinja2 -->
<span style="background-color: {{ colorize_str(post.meta('category'), theme_color, category_colors) }}">{{ post.meta('category') }}</span>
```

Note that the category named “Blue” will be displyed in #0000FF due to
the override specified in your config; other categories will have an
auto-generated color visually similar to your theme color.

Hex color values, like that returned by the theme or string colorization
can be altered in the HSL colorspace through the function
`color_hsl_adjust_hex(hex_string, adjust_h, adjust_s, adjust_l)`.
Adjustments are given in values between 1.0 and -1.0. For example, the
theme color can be made lighter using this code:

``` code
<!-- Mako -->
<span style="color: ${color_hsl_adjust_hex(theme_color, adjust_l=0.05)}">
```

``` code
<!-- Jinja2 -->
<span style="color: {{ color_hsl_adjust_hex(theme_color, adjust_l=0.05) }}">
```

## <a href="theming.html#toc-entry-7" class="toc-backref"
role="doc-backlink">Identifying and customizing different kinds of pages
with a shared template</a><a
href="#identifying-and-customizing-different-kinds-of-pages-with-a-shared-template"
class="headerlink" title="Permalink to this heading">¶</a>

Nikola provides a `pagekind` in each template contexts that can be used
to modify shared templates based on the context it’s being used. For
example, the `base_helper.tmpl` is used in all pages, `index.tmpl` is
used in many contexts and you may want to add or remove something from
only one of these contexts.

Example of conditionally loading different resources on all index pages
(archives, author pages, and tag pages), and others again to the front
page and in every post pages:

``` code
<!-- Mako -->
<head>
    …
    % if 'index' in pagekind:
        <link href="/assets/css/multicolumn.css" rel="stylesheet">
    % endif
    % if 'front_page' in pagekind:
        <link href="/assets/css/fancy_homepage.css" rel="stylesheet">
        <script src="/assets/js/post_carousel.js"></script>
    % endif
    % if 'post_page' in pagekind:
        <link href="/assets/css/article.css" rel="stylesheet">
        <script src="/assets/js/comment_system.js"></script>
    % endif
</head>
```

``` code
<!-- Jinja2 -->
<head>
    …
    {% if 'index' in pagekind %}
        <link href="/assets/css/multicolumn.css" rel="stylesheet">
    {% endif %}
    {% if 'front_page' in pagekind %}
        <link href="/assets/css/fancy_homepage.css" rel="stylesheet">
        <script src="/assets/js/post_carousel.js"></script>
    {% endif %}
    {% if 'post_page' in pagekind %}
        <link href="/assets/css/article.css" rel="stylesheet">
        <script src="/assets/js/comment_system.js"></script>
    {% endif %}
</head>
```

Promoting visits to the front page when visiting other filtered
`index.tmpl` page variants such as author pages and tag pages. This
could have been included in `index.tmpl` or maybe in `base.tmpl`
depending on what you want to achieve.

``` code
<!-- Mako -->
% if 'index' in pagekind:
    % if 'author_page' in pagekind:
        <p>These posts were written by ${author}. See posts by all
           authors on the <a href="/">front page</a>.</p>
    % elif 'tag_page' in pagekind:
        <p>This is a filtered selection of posts tagged “${tag}”, visit
           the <a href="/">front page</a> to see all posts.</p>
    % endif
% endif
```

``` code
<!-- Jinja2 -->
{% if 'index' in pagekind %}
    {% if 'author_page' in pagekind %}
        <p>These posts were written by {{ author }}. See posts by all
           authors on the <a href="/">front page</a>.</p>
    {% elif 'tag_page' in pagekind %}
        <p>This is a filtered selection of posts tagged “{{ tag }}”, visit
           the <a href="/">front page</a> to see all posts.</p>
    {% endif %}
{% endif %}
```

List of page kinds provided by default plugins:

-   front_page

-   index

-   index, archive_page

-   index, author_page

-   index, main_index

-   index, tag_page

-   list

-   list, archive_page

-   list, author_page

-   list, tag_page

-   list, tags_page

-   post_page

-   page_page

-   story_page (alternate/legacy name for page_page)

-   listing

-   gallery_front

-   gallery_page

## <a href="theming.html#toc-entry-8" class="toc-backref"
role="doc-backlink">Messages and Translations</a><a href="#messages-and-translations" class="headerlink"
title="Permalink to this heading">¶</a>

The included themes are translated into a variety of languages. You can
add your own translation at
<a href="https://www.transifex.com/projects/p/nikola/"
class="reference external">https://www.transifex.com/projects/p/nikola/</a>

If you want to create a theme that has new strings, and you want those
strings to be translatable, then your theme will need a custom
`messages` folder.

## <a href="theming.html#toc-entry-9" class="toc-backref"
role="doc-backlink">Configuration of the raw template engine</a><a href="#configuration-of-the-raw-template-engine" class="headerlink"
title="Permalink to this heading">¶</a>

For usage not covered by the above, you can define a method
TEMPLATE_ENGINE_FACTORY in conf.py that constructs the raw underlying
templating engine. That raw_engine that your method needs to return is
either a jinja2.Environment or a mako.loopkup.TemplateLookup object.
Your factory method is called with the same arguments as is the
pertinent \_\_init\_\_.

E.g., to configure jinja2 to bark and error out on missing values,
instead of silently continuing with empty content, you might do this:

``` code
# Somewhere in conf.py:
def TEMPLATE_ENGINE_FACTORY(**args) -> jinja2.Environment:
    augmented_args = dict(args)
    augmented_args['undefined'] = jinja2.DebugUndefined
    return jinja2.Environment(**augmented_args)
```

## <a href="http://lesscss.org/" class="reference external">LESS</a> and <a href="https://sass-lang.com/" class="reference external">Sass</a> <a href="#less-and-sass" class="headerlink"
title="Permalink to this heading">¶</a>

Note

The LESS and Sass compilers were moved to the Plugins Index in Nikola
v7.0.0.

If you want to use those CSS extensions, you can — just store your files
in the `less` or `sass` directory of your theme.

In order to have them work, you need to create a list of `.less` or
<span class="pre">`.scss/.sass`</span> files to compile — the list
should be in a file named `targets` in the respective directory
(`less`/`sass`).

The files listed in the `targets` file will be passed to the respective
compiler, which you have to install manually (`lessc` which comes from
the Node.js package named `less` or `sass` from a Ruby package aptly
named `sass`). Whatever the compiler outputs will be saved as a CSS file
in your rendered site, with the `.css` extension.

Note

Conflicts may occur if you have two files with the same base name but a
different extension. Pay attention to how you name your files or your
site won’t build! (Nikola will tell you what’s wrong when this happens)

Contents © 2012–2025 [Roberto Alsina and the Nikola
contributors](contact.html)  \|  Powered by Nikola itself  \|   [Follow
Nikola on
Twitter](https://twitter.com/intent/user?screen_name=GetNikola)  \|  Theme
is [Cerulean](https://bootswatch.com/cerulean/)

<a href="https://statcounter.com/tumblr/" target="_blank" title="tumblr
statistics"><img src="https://c.statcounter.com/7842875/0/3421486a/1/"
class="statcounter" alt="tumblr statistics" /></a>
