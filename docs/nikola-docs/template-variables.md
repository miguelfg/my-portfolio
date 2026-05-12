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
    data-cfemail="0c62656763606d4c60656e697e6d226f646d78">[email protected]</span>)</a>
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

-   <a href="template-variables.rst" id="sourcelink" class="nav-link">Page
    Source</a>

# <a href="#" class="u-url">Template variables</a>

Version<span class="colon">:</span>  
8.3.2

Author<span class="colon">:</span>  
Chris Warrick \<<a
href="/cdn-cgi/l/email-protection#52313a203b21123537263c3b393d3e337c313d3f"
class="reference external"><span class="__cf_email__"
data-cfemail="34575c465d47745351405a5d5f5b58551a575b59">[email protected]</span></a>\>

Variables available in templates are listed below.

-   This list is maintained by humans, so it may not always be perfect.

-   Variables whose types are marked with `?` may not always be
    available or may be None in some cases.

-   Templates usually do not have access to the original
    TranslatableSetting variables, only to the current locale version
    (except `NAVIGATION_LINKS`).

-   For function and setting documentation, please consult
    <a href="https://docs.getnikola.com/en/latest/modules/"
    class="reference external">code documentation</a> and
    <a href="https://getnikola.com/conf.html"
    class="reference external">default configuration</a> respectively.

-   Templates often create their own functions (macros), and import
    macros from other templates. Those macros are not listed here.

-   This list has a partial documentation of post objects, but no other
    objects. For full docs, please consult the code, or auto-generated
    code docs on <a href="https://nikola.readthedocs.io/"
    class="reference external">ReadTheDocs</a>.

Variables and functions come from three places:

-   the global context

-   the local context of a page

-   the templates themselves and the templates they import

<a href="template-variables.html#top"
class="reference internal">Contents</a>

-   <a href="template-variables.html#global-variables" id="toc-entry-1"
    class="reference internal">Global variables</a>

-   <a href="template-variables.html#per-page-local-variables"
    id="toc-entry-2" class="reference internal">Per-page local variables</a>

-   <a
    href="template-variables.html#variables-available-in-post-pages-post-tmpl-page-tmpl-etc"
    id="toc-entry-3" class="reference internal">Variables available in post
    pages (<code class="docutils literal">post.tmpl</code>, <code
    class="docutils literal">page.tmpl</code> etc.)</a>

-   <a href="template-variables.html#variables-available-in-post-lists"
    id="toc-entry-4" class="reference internal">Variables available in post
    lists</a>

-   <a href="template-variables.html#variables-available-in-indexes"
    id="toc-entry-5" class="reference internal">Variables available in
    indexes</a>

-   <a href="template-variables.html#variables-available-in-taxonomies"
    id="toc-entry-6" class="reference internal">Variables available in
    taxonomies</a>

    -   <a
        href="template-variables.html#templates-and-settings-used-by-taxonomies"
        id="toc-entry-7" class="reference internal">Templates and settings used
        by taxonomies</a>

    -   <a href="template-variables.html#classification-overviews"
        id="toc-entry-8" class="reference internal">Classification overviews</a>

    -   <a href="template-variables.html#classification-pages-lists"
        id="toc-entry-9" class="reference internal">Classification pages
        (lists)</a>

    -   <a href="template-variables.html#subclassification-page"
        id="toc-entry-10" class="reference internal">Subclassification page</a>

    -   <a href="template-variables.html#hierarchical-lists" id="toc-entry-11"
        class="reference internal">Hierarchical lists</a>

-   <a href="template-variables.html#variables-available-in-archives"
    id="toc-entry-12" class="reference internal">Variables available in
    archives</a>

-   <a href="template-variables.html#variables-available-in-author-pages"
    id="toc-entry-13" class="reference internal">Variables available in
    author pages</a>

-   <a href="template-variables.html#variables-available-in-category-pages"
    id="toc-entry-14" class="reference internal">Variables available in
    category pages</a>

-   <a href="template-variables.html#variables-available-in-galleries"
    id="toc-entry-15" class="reference internal">Variables available in
    galleries</a>

-   <a href="template-variables.html#variables-available-in-listings"
    id="toc-entry-16" class="reference internal">Variables available in
    listings</a>

-   <a href="template-variables.html#variables-available-in-tag-pages"
    id="toc-entry-17" class="reference internal">Variables available in tag
    pages</a>

-   <a
    href="template-variables.html#variables-available-in-the-tags-and-categories-page-tags-tmpl"
    id="toc-entry-18" class="reference internal">Variables available in the
    “Tags and categories” page (<code
    class="docutils literal">tags.tmpl</code>)</a>

-   <a href="template-variables.html#variables-available-in-shortcodes"
    id="toc-entry-19" class="reference internal">Variables available in
    shortcodes</a>

-   <a href="template-variables.html#variables-available-in-post-lists-1"
    id="toc-entry-20" class="reference internal">Variables available in post
    lists</a>

-   <a href="template-variables.html#post-object-attributes"
    id="toc-entry-21" class="reference internal">Post object attributes</a>

## <a href="template-variables.html#toc-entry-1" class="toc-backref"
role="doc-backlink">Global variables</a><a href="#global-variables" class="headerlink"
title="Permalink to this heading">¶</a>

Some variables on the global variables list may be None (the `?` symbol
is not used).

| Name                           | Type                              | Description                                                         |
|--------------------------------|-----------------------------------|---------------------------------------------------------------------|
| `_link`                        | function                          | `Nikola.link` function                                              |
| `abs_link`                     | function                          | `Nikola.abs_link` function                                          |
| `atom_path`                    | TranslatableSetting\[str\]        | `ATOM_PATH` setting                                                 |
| `author_pages_generated`       | bool                              | False                                                               |
| `blog_author`                  | TranslatableSetting\[str\]        | `BLOG_AUTHOR` setting                                               |
| `blog_email`                   | str                               | `BLOG_EMAIL` setting                                                |
| `blog_description`             | TranslatableSetting\[str\]        | `BLOG_DESCRIPTION` setting                                          |
| `blog_title`                   | TranslatableSetting\[str\]        | `BLOG_TITLE` setting                                                |
| `blog_url`                     | str                               | `SITE_URL` setting                                                  |
| `body_end`                     | TranslatableSetting\[str\]        | `BODY_END` setting                                                  |
| `colorize_str_from_base_color` | function                          | `utils.colorize_str_from_base_color` function                       |
| `color_hsl_adjust_hex`         | function                          | `utils.color_hsl_adjust_hex` function                               |
| `comment_system_id`            | str                               | `COMMENT_SYSTEM_ID` setting                                         |
| `comment_system`               | str                               | `COMMENT_SYSTEM` setting                                            |
| `content_footer`               | TranslatableSetting\[str\]        | `CONTENT_FOOTER` setting                                            |
| `data`                         | dict                              | data files (from the `data/` directory)                             |
| `date_fanciness`               | int                               | `DATE_FANCINESS` setting                                            |
| `date_format`                  | TranslatableSetting\[str\]        | `DATE_FORMAT` setting                                               |
| `exists`                       | function                          | `Nikola.file_exists` function                                       |
| `extra_head_data`              | TranslatableSetting\[str\]        | `EXTRA_HEAD_DATA` setting                                           |
| `favicons`                     | tuple                             | `FAVICONS` setting                                                  |
| `front_index_header`           | TranslatableSetting\[str\]        | `FRONT_INDEX_HEADER` setting                                        |
| `generate_atom`                | bool                              | `GENERATE_ATOM` setting                                             |
| `generate_rss`                 | bool                              | `GENERATE_RSS` setting                                              |
| `global_data`                  | dict                              | alias for `data`                                                    |
| `has_custom_css`               | bool                              | True if custom.css exists                                           |
| `hidden_authors`               | list\[str\]                       | `HIDDEN_AUTHORS` setting                                            |
| `hidden_categories`            | list\[str\]                       | `HIDDEN_CATEGORIES` setting                                         |
| `hidden_tags`                  | list\[str\]                       | `HIDDEN_TAGS` setting                                               |
| `hide_sourcelink`              | bool                              | `SHOW_SOURCELINK` setting, negated                                  |
| `index_display_post_count`     | int                               | `INDEX_DISPLAY_POST_COUNT` setting                                  |
| `index_file`                   | str                               | `INDEX_FILE` setting                                                |
| `js_date_format`               | TranslatableSetting\[str\]        | `MOMENTJS_DATE_FORMAT` setting, JSONified                           |
| `katex_auto_render`            | str                               | `KATEX_AUTO_RENDER` setting                                         |
| `license`                      | TranslatableSetting\[str\]        | `LICENSE` setting                                                   |
| `logo_url`                     | str                               | `LOGO_URL` setting                                                  |
| `luxon_date_format`            | TranslatableSetting\[str\]        | `LUXON_DATE_FORMAT` setting, JSONified                              |
| `mathjax_config`               | str                               | `MATHJAX_CONFIG` setting                                            |
| `messages`                     | dict\[dict\[str, str\]\]          | translated messages (`{language: {english: translated}}`)           |
| `meta_generator_tag`           | bool                              | `META_GENERATOR_TAG` setting                                        |
| `momentjs_locales`             | defaultdict\[str, str\]           | dictionary of available Moment.js locales                           |
| `multiple_authors_per_post`    | bool                              | `MULTIPLE_AUTHORS_PER_POST` setting                                 |
| `navigation_links`             | TranslatableSetting               | `NAVIGATION_LINKS` setting                                          |
| `navigation_alt_links`         | TranslatableSetting               | `NAVIGATION_ALT_LINKS` setting                                      |
| `needs_ipython_css`            | bool                              | whether or not Jupyter CSS is needed by this site                   |
| `rel_link`                     | function                          | `Nikola.rel_link` function                                          |
| `rss_link`                     | str                               | `RSS_LINK` setting                                                  |
| `search_form`                  | TranslatableSetting\[str\]        | `SEARCH_FORM` setting                                               |
| `set_locale`                   | function                          | `LocaleBorg.set_locale` function (or None if not available)         |
| `show_blog_title`              | bool                              | `SHOW_BLOG_TITLE` setting                                           |
| `show_sourcelink`              | bool                              | `SHOW_SOURCELINK` setting                                           |
| `site_has_comments`            | bool                              | whether or not a comment system is configured                       |
| `social_buttons_code`          | TranslatableSetting\[str\]        | `SOCIAL_BUTTONS_CODE` setting                                       |
| `sort_posts`                   | function                          | `utils.sort_posts` function                                         |
| `smartjoin`                    | function                          | `utils.smartjoin` function                                          |
| `colorize_str`                 | function                          | `utils.colorize_str` function                                       |
| `template_hooks`               | dict\[str, TemplateHookRegistry\] | Template hooks registered by plugins                                |
| `theme_color`                  | str                               | `THEME_COLOR` setting                                               |
| `theme_config`                 | dict                              | `THEME_CONFIG` setting                                              |
| `timezone`                     | tzinfo                            | Timezone object (represents the configured timezone)                |
| `translations`                 | dict\[str, str\]                  | `TRANSLATIONS` setting                                              |
| `twitter_card`                 | dict                              | `TWITTER_CARD` setting, defaults to an empty dictionary             |
| `url_replacer`                 | function                          | `Nikola.url_replacer` function                                      |
| `url_type`                     | str                               | `URL_TYPE` setting                                                  |
| `use_bundles`                  | bool                              | `USE_BUNDLES` setting                                               |
| `use_cdn`                      | bool                              | `USE_CDN` setting                                                   |
| `use_katex`                    | bool                              | `USE_KATEX` setting                                                 |
| `subtheme`                     | str?                              | `THEME_REVEAL_CONFIG_SUBTHEME` setting (only if set — deprecated)   |
| `transition`                   | str?                              | `THEME_REVEAL_CONFIG_TRANSITION` setting (only if set — deprecated) |

## <a href="template-variables.html#toc-entry-2" class="toc-backref"
role="doc-backlink">Per-page local variables</a><a href="#per-page-local-variables" class="headerlink"
title="Permalink to this heading">¶</a>

Those variables are available on all pages, but their contents are
dependent on page contents.

| Name          | Type        | Description                                                                                                           |
|---------------|-------------|-----------------------------------------------------------------------------------------------------------------------|
| `description` | str         | Description of the page                                                                                               |
| `is_rtl`      | bool        | Whether or not the language is left-to-right                                                                          |
| `lang`        | str         | Current language                                                                                                      |
| `pagekind`    | list\[str\] | List of strings that identify the type of this page <a                                                                
                               href="https://getnikola.com/theming.html#identifying-and-customizing-different-kinds-of-pages-with-a-shared-template"  
                               class="reference external">(docs)</a>                                                                                  |
| `title`       | str         | Title of the page (taken from post, config, etc.)                                                                     |
| `formatmsg`   | function    | Wrapper over `%` string formatting                                                                                    |
| `striphtml`   | function    | Strips HTML tags (Mako only)                                                                                          |
| `crumbs`      | list        | Breadcrumbs for this page                                                                                             |

## <a href="template-variables.html#toc-entry-3" class="toc-backref"
role="doc-backlink">Variables available in post pages (<code
class="docutils literal">post.tmpl</code>, <code
class="docutils literal">page.tmpl</code> etc.)</a><a href="#variables-available-in-post-pages-post-tmpl-page-tmpl-etc"
class="headerlink" title="Permalink to this heading">¶</a>

| Name              | Type | Description                                           |
|-------------------|------|-------------------------------------------------------|
| `post`            | Post | The post object                                       |
| `permalink`       | str  | Permanent link to the post                            |
| `enable_comments` | bool | True for posts, `COMMENTS_IN_PAGES` setting for pages |

## <a href="template-variables.html#toc-entry-4" class="toc-backref"
role="doc-backlink">Variables available in post lists</a><a href="#variables-available-in-post-lists" class="headerlink"
title="Permalink to this heading">¶</a>

| Name       | Type         | Description                                   |
|------------|--------------|-----------------------------------------------|
| `posts`    | list\[Post\] | List of post objects that appear in this list |
| `prevlink` | str          | Link to previous page                         |
| `nextlink` | str          | Link to next page                             |

## <a href="template-variables.html#toc-entry-5" class="toc-backref"
role="doc-backlink">Variables available in indexes</a><a href="#variables-available-in-indexes" class="headerlink"
title="Permalink to this heading">¶</a>

| Name                         | Type         | Description                                                                  |
|------------------------------|--------------|------------------------------------------------------------------------------|
| `posts`                      | list\[Post\] | List of post objects that appear in this list                                |
| `index_teasers`              | bool         | `INDEX_TEASERS` setting                                                      |
| `show_index_page_navigation` | bool         | `SHOW_INDEX_PAGE_NAVIGATION` setting                                         |
| `current_page`               | int          | Number of current page                                                       |
| `page_links`                 | list\[str\]  | Links to different pages                                                     |
| `prevlink`                   | str          | Link to previous page                                                        |
| `nextlink`                   | str          | Link to next page                                                            |
| `prevfeedlink`               | str          | Link to previous page as an Atom feed                                        |
| `nextfeedlink`               | str          | Link to next page as an Atom feed                                            |
| `prev_next_links_reversed`   | bool         | Whether or not previous and next links should be reversed (`INDEXES_STATIC`) |
| `is_frontmost_index`         | bool         | Whether or not this is the front-most index (page 0)                         |

## <a href="template-variables.html#toc-entry-6" class="toc-backref"
role="doc-backlink">Variables available in taxonomies</a><a href="#variables-available-in-taxonomies" class="headerlink"
title="Permalink to this heading">¶</a>

Variable names enclosed in `{}` are dependent on the taxonomy.

| Taxonomy            | Variable                                | Value              |
|---------------------|-----------------------------------------|--------------------|
| `archive`           | `overview_page_variable_name`           | `archive`          |
| `author`            | `overview_page_variable_name`           | `authors`          |
| `category`          | `overview_page_variable_name`           | `categories`       |
| `category`          | `overview_page_items_variable_name`     | `cat_items`        |
| `category`          | `overview_page_hierarchy_variable_name` | `cat_hierarchy`    |
| `index`             | `overview_page_variable_name`           | unavailable (None) |
| `page_index_folder` | `overview_page_variable_name`           | `page_folder`      |
| `tag`               | `overview_page_variable_name`           | `tags`             |
| `tag`               | `overview_page_items_variable_name`     | `items`            |

### <a href="template-variables.html#toc-entry-7" class="toc-backref"
role="doc-backlink">Templates and settings used by taxonomies</a><a href="#templates-and-settings-used-by-taxonomies" class="headerlink"
title="Permalink to this heading">¶</a>

| Taxonomy            | Has hierarchy    | List (one classification) template | Index (one classification) template | Overview (list of classifications) template | Subcategories list template         | List is an index             | Show as list of subcategories |
|---------------------|------------------|------------------------------------|-------------------------------------|---------------------------------------------|-------------------------------------|------------------------------|-------------------------------|
| (default settings)  | no               | tagindex.tmpl                      | tagindex.tmpl                       | list.tmpl                                   | taxonomy_list.tmpl (does not exist) | no                           | no                            |
| `archive`           | yes (0-3 levels) | list_post.tmpl                     | archiveindex.tmpl                   | list.tmpl                                   | list.tmpl                           | `ARCHIVES_ARE_INDEXES`       | `not CREATE_FULL_ARCHIVES`    |
| `author`            | no               | author.tmpl                        | authorindex.tmpl                    | authors.tmpl                                | n/a                                 | `AUTHOR_PAGES_ARE_INDEXES`   | no                            |
| `category`          | yes              | tag.tmpl                           | tagindex.tmpl                       | tags.tmpl (with tags)                       | n/a                                 | `CATEGORY_PAGES_ARE_INDEXES` | n/a                           |
| `index`             | no               | n/a                                | index.tmpl                          | n/a                                         | n/a                                 | yes                          | no                            |
| `page_index_folder` | yes              | list.tmpl                          | n/a                                 | n/a                                         | n/a                                 | no                           | no                            |
| `tag`               | no               | tag.tmpl                           | tagindex.tmpl                       | tags.tmpl (with categories)                 | n/a                                 | `TAG_PAGES_ARE_INDEXES`      | no                            |

### <a href="template-variables.html#toc-entry-8" class="toc-backref"
role="doc-backlink">Classification overviews</a><a href="#classification-overviews" class="headerlink"
title="Permalink to this heading">¶</a>

Hierarchy-related variables are available if and only if `has_hierarchy`
is True.

| Name                                                          | Type  | Description                                                                                                                                                                 |
|---------------------------------------------------------------|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `{overview_page_variable_name}`                               | str   | List of classifications                                                                                                                                                     |
| `{overview_page_items_variable_name}`                         | list  | List of items *(name, link)*                                                                                                                                                |
| `{overview_page_items_variable_name + "_with_postcount"}`     | list  | List of items *(name, link, number of posts)*                                                                                                                               |
| `{overview_page_hierarchy_variable_name}`                     | list? | List of hierarchies *(name, full name, path, link, indent levels, indent to change before, indent to change after)*                                                         |
| `{overview_page_hierarchy_variable_name + "_with_postcount"}` | list? | List of hierarchies, with added counts *(name, full name, path, link, indent levels, indent to change before, indent to change after, number of children, number of posts)* |
| `has_hierarchy`                                               | bool  | Value of `has_hierarchy` for the taxonomy                                                                                                                                   |
| `permalink`                                                   | str   | Permanent link to page                                                                                                                                                      |

### <a href="template-variables.html#toc-entry-9" class="toc-backref"
role="doc-backlink">Classification pages (lists)</a><a href="#classification-pages-lists" class="headerlink"
title="Permalink to this heading">¶</a>

| Name              | Type          | Description                                                 |
|-------------------|---------------|-------------------------------------------------------------|
| `kind`            | str           | The classification name                                     |
| `items`           | list?         | List of items for `list.tmpl` *(title, permalink, None)*    |
| `posts`           | list\[Post\]? | List of items for other templates                           |
| `permalink`       | str           | Permanent link to page                                      |
| `other_languages` | list\[tuple\] | List of triples `(other_lang, other_classification, title)` |

Index-style classification pages have `kind` in addition to the usual
index variables.

### <a href="template-variables.html#toc-entry-10" class="toc-backref"
role="doc-backlink">Subclassification page</a><a href="#subclassification-page" class="headerlink"
title="Permalink to this heading">¶</a>

| Name              | Type          | Description                                                 |
|-------------------|---------------|-------------------------------------------------------------|
| `items`           | list?         | List of items                                               |
| `permalink`       | str           | Permanent link to page                                      |
| `other_languages` | list\[tuple\] | List of triples `(other_lang, other_classification, title)` |

### <a href="template-variables.html#toc-entry-11" class="toc-backref"
role="doc-backlink">Hierarchical lists</a><a href="#hierarchical-lists" class="headerlink"
title="Permalink to this heading">¶</a>

The indenting information can be used to render the items as a tree. The
values have the following meanings:

> -   `indent levels` is a list of pairs `(current_i, count_i)` giving
>     the current position (`0`, ...,
>     <span class="pre">`count_i-1`</span>) and maximum (`count_i`) in
>     the hierarchy level `i`;
>
> -   `indent to change before` is the difference of hierarchy levels
>     between the previous and the current item; positive values
>     indicate that the current item is indented further in and can be
>     used to open HTML tags before the item;
>
> -   `indent to change after` is the difference of hierarchy levels
>     between the current and the next item; negative values indicate
>     that the current item is indented further in and can be used to
>     close HTML tags after the item.

Example:

``` code
+--- levels:[(0,3)], before:1, after:0
+-+- levels:[(1,3)], before:0, after:1
| +--- levels:[(1,3), (0,2)], before:1, after:0
| +-+- levels:[(1,3), (1,2)], before:0, after:1
|   +--- levels:[(1,3), (1,2), (0, 1)], before:1, after:-2
+-+- levels:[(2,3)], before:-2, after:1
  +- levels:[(2,3), (0,1)], before:1, after:-2
```

See `tags.tmpl` in the base themes for examples on how to render a tree
as nested unordered lists in HTML.

## <a href="template-variables.html#toc-entry-12" class="toc-backref"
role="doc-backlink">Variables available in archives</a><a href="#variables-available-in-archives" class="headerlink"
title="Permalink to this heading">¶</a>

The archive navigation variables are available only if
`create_archive_navigation` is True.

| Name                        | Type | Description                                                            |
|-----------------------------|------|------------------------------------------------------------------------|
| `kind`                      | str  | Always `"archive"`                                                     |
| `archive_name`              | str? | Name of the archive (only if using indexes)                            |
| `create_archive_navigation` | bool | `CREATE_ARCHIVE_NAVIGATION` setting                                    |
| `has_archive_navigation`    | bool | Whether or not archive navigation is available                         |
| `up_archive`                | str? | Link to the archive one level up                                       |
| `up_archive_name`           | str? | Name of the archive one level up                                       |
| `previous_archive`          | str? | Link to the previous archive                                           |
| `previous_archive_name`     | str? | Name of the previous archive                                           |
| `next_archive`              | str? | Link to the next archive                                               |
| `next_archive_name`         | str? | Name of the next archive                                               |
| `archive_nodelevel`         | int? | Level of the archive                                                   |
| `other_languages`           | list | List of tuples `(lang, path, name)` of same archive in other languages |

## <a href="template-variables.html#toc-entry-13" class="toc-backref"
role="doc-backlink">Variables available in author pages</a><a href="#variables-available-in-author-pages" class="headerlink"
title="Permalink to this heading">¶</a>

| Name              | Type          | Description                                                             |
|-------------------|---------------|-------------------------------------------------------------------------|
| `kind`            | str           | Always `"author"`                                                       |
| `author`          | str           | Author name                                                             |
| `rss_link`        | str           | Link to RSS (HTML fragment)                                             |
| `other_languages` | list\[tuple\] | List of tuples `(lang, author, name)` of same author in other languages |

## <a href="template-variables.html#toc-entry-14" class="toc-backref"
role="doc-backlink">Variables available in category pages</a><a href="#variables-available-in-category-pages" class="headerlink"
title="Permalink to this heading">¶</a>

| Name              | Type          | Description                                                                 |
|-------------------|---------------|-----------------------------------------------------------------------------|
| `kind`            | str           | Always `"category"`                                                         |
| `category`        | str           | Category name                                                               |
| `category_path`   | list\[str\]   | Category hierarchy                                                          |
| `rss_link`        | str?          | Link to RSS (HTML fragment, only if using indexes)                          |
| `subcategories`   | list          | List of subcategories (contains *name, link* tuples)                        |
| `tag`             | str           | Friendly category name                                                      |
| `other_languages` | list\[tuple\] | List of tuples `(lang, category, name)` of same category in other languages |

## <a href="template-variables.html#toc-entry-15" class="toc-backref"
role="doc-backlink">Variables available in galleries</a><a href="#variables-available-in-galleries" class="headerlink"
title="Permalink to this heading">¶</a>

| Name               | Type  | Description                                                                       |
|--------------------|-------|-----------------------------------------------------------------------------------|
| `crumbs`           | list  | Breadcrumbs for this page                                                         |
| `enable_comments`  | bool  | Whether or not comments are enabled in galleries                                  |
| `folders`          | list  | List of folders (contains *path, title* tuples)                                   |
| `permalink`        | str   | Permanent link to this page                                                       |
| `photo_array`      | list  | Photo array (contains dicts with image data: *url, url_thumb, title, size{w, h}*) |
| `photo_array_json` | str   | Photo array in JSON format                                                        |
| `post`             | Post? | The Post object for this gallery                                                  |
| `thumbnail_size`   | int   | `THUMBNAIL_SIZE` setting                                                          |

## <a href="template-variables.html#toc-entry-16" class="toc-backref"
role="doc-backlink">Variables available in listings</a><a href="#variables-available-in-listings" class="headerlink"
title="Permalink to this heading">¶</a>

| Name          | Type        | Description                             |
|---------------|-------------|-----------------------------------------|
| `code`        | str         | Highlighted source code (HTML fragment) |
| `crumbs`      | list        | Breadcrumbs for this page               |
| `folders`     | list\[str\] | List of subfolders                      |
| `files`       | list\[str\] | List of files in the folder             |
| `source_link` | str         | Link to the source file                 |

## <a href="template-variables.html#toc-entry-17" class="toc-backref"
role="doc-backlink">Variables available in tag pages</a><a href="#variables-available-in-tag-pages" class="headerlink"
title="Permalink to this heading">¶</a>

| Name              | Type          | Description                                                       |
|-------------------|---------------|-------------------------------------------------------------------|
| `kind`            | str           | Always `"tag"`                                                    |
| `tag`             | str           | Tag name                                                          |
| `other_languages` | list\[tuple\] | List of tuples `(lang, tag, name)` of same tag in other languages |

## <a href="template-variables.html#toc-entry-18" class="toc-backref"
role="doc-backlink">Variables available in the “Tags and categories”
page (<code class="docutils literal">tags.tmpl</code>)</a><a href="#variables-available-in-the-tags-and-categories-page-tags-tmpl"
class="headerlink" title="Permalink to this heading">¶</a>

| Name                    | Type | Description                                                                                                |
|-------------------------|------|------------------------------------------------------------------------------------------------------------|
| `items`                 | list | Tags *(name, link)*                                                                                        |
| `cat_items`             | list | Categories *(name, full name, path, link, indent levels, indent to change before, indent to change after)* |
| `category_titles`       | dict | `CATEGORY_TITLES` setting (dict for the current language only)                                             |
| `category_descriptions` | dict | `CATEGORY_DESCRIPTIONS` setting (dict for the current language only)                                       |
| `tag_titles`            | dict | `TAG_TITLES` setting (dict for the current language only)                                                  |
| `tag_descriptions`      | dict | `TAG_DESCRIPTIONS` setting (dict for the current language only)                                            |

For more details about hierarchies, see
<a href="template-variables.html#hierarchical-lists"
class="reference internal">Hierarchical lists</a>

## <a href="template-variables.html#toc-entry-19" class="toc-backref"
role="doc-backlink">Variables available in shortcodes</a><a href="#variables-available-in-shortcodes" class="headerlink"
title="Permalink to this heading">¶</a>

*The global context is available in templated shortcodes.*

| Name       | Type        | Description                                                              |
|------------|-------------|--------------------------------------------------------------------------|
| `lang`     | str         | Current language                                                         |
| `_args`    | list\[str\] | Arguments given to the shortcode                                         |
| `data`     | str         | Shortcode contents                                                       |
| `post`     | Post        | Post object (if available)                                               |
| `filename` | str?        | file name, if `shortcode_function.nikola_shortcode_pass_filename = True` |

## <a href="template-variables.html#toc-entry-20" class="toc-backref"
role="doc-backlink">Variables available in post lists</a><a href="#variables-available-in-post-lists-1" class="headerlink"
title="Permalink to this heading">¶</a>

*The global context is NOT available in post lists.*

| Name           | Type         | Description                          |
|----------------|--------------|--------------------------------------|
| `posts`        | list\[Post\] | Posts that are on the list           |
| `lang`         | str          | Current language                     |
| `date_format`  | str          | The date format for current language |
| `post_list_id` | str          | GUID of post list                    |
| `messages`     | dict         | The messages dictionary              |
| `_link`        | function     | `Nikola.link` function               |

## <a href="template-variables.html#toc-entry-21" class="toc-backref"
role="doc-backlink">Post object attributes</a><a href="#post-object-attributes" class="headerlink"
title="Permalink to this heading">¶</a>

*Usable anywhere post objects are accessible.*

This list only includes variables that make sense for templates. Some
function signatures have been shortened to save space, `?` means the
argument has default value.

More docs: <a
href="https://nikola.readthedocs.io/en/latest/nikola.html#nikola.post.Post"
class="reference external">nikola.post.Post on ReadTheDocs</a>. Check
out the source of the Post class as well.

| Name                                                                                                                                                                                | Type        | Description                                                  |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|--------------------------------------------------------------|
| `alltags`                                                                                                                                                                           | list\[str\] | All tags for the post                                        |
| `author(lang=None)`                                                                                                                                                                 | str         | Localized author or `BLOG_AUTHOR`                            |
| `base_path`                                                                                                                                                                         | str         | `cache` path with local `os.sep`                             |
| `category_from_destpath`                                                                                                                                                            | bool        | If category was set by `CATEGORY_DESTPATH_AS_DEFAULT`        |
| `data(key, lang=None)`                                                                                                                                                              | ?           | Access to post data                                          |
| `date`                                                                                                                                                                              | datetime    | Date of post (from meta)                                     |
| `description(key, lang=None)`                                                                                                                                                       | str         | Description of post (from meta)                              |
| <span class="pre">`destination_path(lang?,`</span>` `<span class="pre">`extension?,`</span>` `<span class="pre">`sep?)`</span>                                                      | str         | Destination path of post                                     |
| `formatted_date(date_format, date=None)`                                                                                                                                            | str         | Format a date (default: post date)                           |
| `formatted_updated(date_format)`                                                                                                                                                    | str         | Format the last update date                                  |
| `guid(lang=None)`                                                                                                                                                                   | str         | GUID of post (used for feeds)                                |
| `has_math`                                                                                                                                                                          | bool        | If the post has math                                         |
| `has_pretty_url(lang)`                                                                                                                                                              | bool        | If the post has a pretty URL                                 |
| `is_draft`                                                                                                                                                                          | bool        | If the post is a draft                                       |
| `is_post`                                                                                                                                                                           | bool        | If the post is not a page                                    |
| `is_private`                                                                                                                                                                        | bool        | If the post is private                                       |
| `is_translation_available(lang)`                                                                                                                                                    | bool        | If the post is available in (translated to) a given language |
| `is_two_file`                                                                                                                                                                       | bool        | If the post uses two-file metadata                           |
| `meta(key, lang=None)`                                                                                                                                                              | ?           | Metadata of the post (assumes current language)              |
| `next_post`                                                                                                                                                                         | Post        | Next post in the order                                       |
| `paragraph_count`                                                                                                                                                                   | int         | Paragraph count for a post                                   |
| <span class="pre">`permalink(lang?,`</span>` `<span class="pre">`absolute?,`</span>` `<span class="pre">`extension?,`</span>` `<span class="pre">`query?)`</span>                   | str         | Permanent link for a post                                    |
| `post_name`                                                                                                                                                                         | str         | Source path, without extension                               |
| `post_status`                                                                                                                                                                       | str         | Post status meta field (published, featured, private, draft) |
| `prev_post`                                                                                                                                                                         | Post        | Previous post in the order                                   |
| `previewimage`                                                                                                                                                                      | str         | Preview image of the post                                    |
| `publish_later`                                                                                                                                                                     | bool        | True if the post is not yet published (due to date)          |
| `reading_time`                                                                                                                                                                      | int         | Approximate reading time in minutes (220 wpm)                |
| `remaining_paragraph_count`                                                                                                                                                         | int         | Paragraph count after the teaser                             |
| `remaining_reading_time`                                                                                                                                                            | int         | Reading time after the teaser                                |
| `source_link`                                                                                                                                                                       | str         | Absolute link to the post's source                           |
| `tags`                                                                                                                                                                              | list\[str\] | Tags for the current language                                |
| `tags_for_language(lang)`                                                                                                                                                           | list\[str\] | Tags for a given language                                    |
| <span class="pre">`text(lang?,`</span>` `<span class="pre">`teaser_only?,`</span>` `<span class="pre">`strip_html?,`</span>` `<span class="pre">`show_read_more_link?,`</span>` …)` | str         | The text of a post                                           |
| `title(lang=None)`                                                                                                                                                                  | str         | Localized title of post                                      |
| `translated_to`                                                                                                                                                                     | list\[str\] | List of languages of post                                    |
| `updated`                                                                                                                                                                           | datetime    | Date of last update (from meta)                              |
| `use_in_feeds`                                                                                                                                                                      | bool        | If this post should be displayed in feeds                    |

Contents © 2012–2025 [Roberto Alsina and the Nikola
contributors](contact.html)  \|  Powered by Nikola itself  \|   [Follow
Nikola on
Twitter](https://twitter.com/intent/user?screen_name=GetNikola)  \|  Theme
is [Cerulean](https://bootswatch.com/cerulean/)

<a href="https://statcounter.com/tumblr/" target="_blank" title="tumblr
statistics"><img src="https://c.statcounter.com/7842875/0/3421486a/1/"
class="statcounter" alt="tumblr statistics" /></a>
