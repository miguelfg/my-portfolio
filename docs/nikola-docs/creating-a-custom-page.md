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
    data-cfemail="abc5c2c0c4c7caebc7c2c9ced9ca85c8c3cadf">[email protected]</span>)</a>
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

-   <a href="creating-a-custom-page.rst" id="sourcelink"
    class="nav-link">Page Source</a>

# <a href="#" class="u-url">Creating a Custom Page</a>

The Nikola team tries very hard to make Nikola be simple, in a very
specific way: once the user has things setup, doing the same thing again
should take no work. So, if you have done one image gallery, doing a
second one should be just creating a folder and putting images in it. If
you have written a blog post, writing a new one is running one command
and editing the text you want to publish. And so on.

But sometimes, you don’t want to do the same thing you have been doing.
Sometimes you want to make a one-off, a special thing, and Nikola should
not get in the way of you doing that. Rather, it should let you get your
hands as dirty as you want.

So, this tutorial is about how to create a page that is totally
different from all the other pages in your site. A custom page.

Our goal for today is to make a page where it’s nice to read a book.
Specifically, a book of late Victorian fiction called “Dr. Nikola’s
Vendetta” <a href="creating-a-custom-page.html#footnote-1"
id="footnote-reference-1" class="brackets" role="doc-noteref"><span
class="fn-bracket">[</span>1<span class="fn-bracket">]</span></a>
because, how could we resist using that one, right? And to make it
maintain, within reason, the “style” of the original book.

It’s the first in a series of five books about Dr. Nikola, one of the
first recognizable archvillains, and … well, they are not all that
great, but they are available at
<a href="http://www.gutenberg.org/ebooks/author/3587"
class="reference external">Project Gutenberg</a> and
<a href="https://openlibrary.org/search?q=guy+boothby"
class="reference external">Open Library</a> if you want to read them.

The Open Library has <a
href="https://archive.org/stream/bidforfortunenov00bootiala#page/n9/mode/2up"
class="reference external">a lovely scan</a> of the original book we can
use for some design guidance. On the other hand, Project Gutenberg has
<a href="http://www.gutenberg.org/ebooks/21640"
class="reference external">the text</a> which we can use for
actual content!

So, I took the prologue of the book, did some very light editing to turn
it into reStructuredText, added a picture of Dr. Nikola himself I found
on Wikipedia, and put it here for display.
<a href="dr-nikola-v1.html" class="reference external">Behold!</a>

That is very… bad? While Nikola does the job, the default template is
simply not meant for this sort of thing.

The problems are many, from a book-reading point of view:

1.  The column is too wide

2.  The typesetting is all wrong

3.  The sans-serif font is a very wrong idea for book material

4.  it’s so … long!

So, let’s fix them!

## Custom Template<a href="#custom-template" class="headerlink"
title="Permalink to this heading">¶</a>

Like all pages, that one is shown using `story.tmpl`:

<a href="listings/story.tmpl.html"
class="reference external">story.tmpl</a>
<a href="listings/story.tmpl" class="reference external">(Source)</a>

``` code
## -*- coding: utf-8 -*-
<%namespace name="helper" file="post_helper.tmpl"/>
<%namespace name="pheader" file="post_header.tmpl"/>
<%namespace name="comments" file="comments_helper.tmpl"/>
<%inherit file="post.tmpl"/>

<%block name="content">
<article class="storypage" itemscope="itemscope" itemtype="http://schema.org/Article">
    <header>
        ${pheader.html_title()}
        ${pheader.html_translations(post)}
    </header>
    <div class="e-content entry-content" itemprop="articleBody text">
    ${post.text()}
    </div>
    %if site_has_comments and enable_comments and not post.meta('nocomments'):
        <section class="comments">
        <h2>${messages("Comments")}</h2>
        ${comments.comment_form(post.permalink(absolute=True), post.title(), post.base_path)}
        </section>
    %endif
    ${helper.mathjax_script(post)}
</article>
</%block>
```

That has a lot of code in it that we don’t really need. We know there
will be no math here, and I don’t want comments on a book. Also, I saw a
<a href="https://css-tricks.com/guide-responsive-friendly-css-columns/"
class="reference external">nice tutorial about columns in <span
class="caps">CSS</span></a> so I want to style things up a little.

So, I will create a `templates/book.tmpl` in my site, and make this
story use that by setting the template metadata in the page to use it:

``` literal-block
.. template:: book.tmpl
```

Here is my new `book.tmpl` with comments:

<a href="listings/book1.tmpl.html"
class="reference external">book1.tmpl</a>
<a href="listings/book1.tmpl" class="reference external">(Source)</a>

``` code
## -*- coding: utf-8 -*-
<%namespace name="helper" file="post_helper.tmpl"/>
<%namespace name="pheader" file="post_header.tmpl"/>
<%namespace name="comments" file="comments_helper.tmpl"/>
<%inherit file="post.tmpl"/>

## This redefines the extra_head block which goes at the end of <head>
<%block name="extra_head">
    ${parent.extra_head()}
    <style>
        ## This shows the content in columns with a height
        ## somewhat smaller than the viewport height (90vh)
        ## to give a "book" feeling instead of a wall of text.
        .chapter {
            width: 100%;
            padding: 10px;
            -webkit-column-gap: 40px;
               -moz-column-gap: 40px;
                    column-gap: 40px;
            -webkit-column-width: 400px;
               -moz-column-width: 400px;
                    column-width: 400px;
            -webkit-column-count: 2;
               -moz-column-count: 2;
                    column-count: 2;
            -webkit-column-rule: 1px solid #ddd;
               -moz-column-rule: 1px solid #ddd;
                    column-rule: 1px solid #ddd;
            height: 90vh;
            font-color: #2d2e2e;
            font-weight: 500;
        }

        ## A wrapper that hides most of the columns
        div.frame {
            overflow: hidden;
            padding: 0;
            margin: 0;
        }

        ## A wrapper to let you scroll across columns
        div.scrolling-cont {
            overflow-x: scroll;
            padding: 0;
            margin: 0;
        }
    </style>
</%block>

<%block name="content">
<article class="storypage" itemscope="itemscope" itemtype="http://schema.org/Article">
    ## Wrap the post's text in the needed divs
    <div class="frame">
    <div class="scrolling-cont" id="scrolling-cont" name="scrolling-cont">
    <div class="e-content entry-content chapter" itemprop="articleBody text">
    ## Moved the title inside the flow of the book
    <h1>${post.title()}</h1>
    ${post.text()}
    </div>
    </div>
    </div>
</article>
</%block>
```

And here is
<a href="dr-nikola-v2.html" class="reference external">the resulting
page</a> It’s better, but it’s far from awesome. So, let’s continue!

## Typesetting<a href="#typesetting" class="headerlink"
title="Permalink to this heading">¶</a>

Paragraph layout: Fiction books that are not fully justified feel wrong
to me. So we should set
<span class="pre">`text-align:`</span>` justify;` in the
<span class="caps">CSS</span>. But to achieve proper justification, you
also need hyphenation. To have that in Nikola, you need to either enable
it for the whole site (maybe not a great idea) or just for this page
using the hyphenate metadata:

``` literal-block
.. hyphenate: yes
```

Also, the original book has no space between paragraphs, and has
bleeding in the first line, so more
<span class="caps">CSS</span> tweaks.

Proper “quotes”! And —dashes—! Nice, curly quotes are a must. Nikola has
the typogrify filter to achieve that. Again, you can enable it for your
whole site, or just for this page using metadata:

``` literal-block
.. filters: filters.typogrify
```

Please note that the filter requires the `typogrify` package, which is
not included with the basic Nikola distribution. You need to install it
yourself (usually from `pip`).

Choosing the right font for a page or a site is an art. One I suck at,
so I just went with a font that was similar to the one used in the
original book. There are a number of those, but I chose
<a href="https://www.google.com/fonts/specimen/Gentium+Basic"
class="reference external">Gentium Basic</a>. You can, of course, choose
whatever you want. Using it via Google Fonts is very simple.

Even with the nicer font, and the dual columns, the font size is too
small, there is too many letters per line. We *could* tweak that using
<span class="caps">CSS</span> font sizes, but let’s go crazy and use a
JavaScript solution: <a href="http://simplefocus.com/flowtype/"
class="reference external">FlowType.<span class="caps">JS</span></a>

Why FlowType.<span class="caps">JS</span>? It dynamically adjust the
font size so that columns always have the right font size for their
width. That’s just nice. To do that, we need to add jQuery and run a
little <span class="caps">JS</span> in a `<script>` tag at the end of
the page.

For that, the template offers the `extra_js` block. Since the bootstrap3
theme we are using already loads jQuery, there is no need to do that, so
it’s just a matter of loading FlowType.<span class="caps">JS</span> and
initializing it.

Figures: figures and multicolumn layout don’t go along very well, they
may even get split between columns! The easiest solution is to make them
fit in a “page”, so, some more <span class="caps">CSS</span> for that.

Also, minor things like styling titles, subtitles, making the 1st word
in the section small caps, and so on, but hey, this is just
<span class="caps">CSS</span> tweaking, we could do this forever.

So, here is our second attempt at a “book-like” template with comments
about all the above:

<a href="listings/book2.tmpl.html"
class="reference external">book2.tmpl</a>
<a href="listings/book2.tmpl" class="reference external">(Source)</a>

``` code
## -*- coding: utf-8 -*-
<%namespace name="helper" file="post_helper.tmpl"/>
<%namespace name="pheader" file="post_header.tmpl"/>
<%namespace name="comments" file="comments_helper.tmpl"/>
<%inherit file="post.tmpl"/>

<%block name="extra_head">
    ${parent.extra_head()}

    ## Get the Gentium Basic font from Google
    <link href='https://fonts.googleapis.com/css?family=Gentium+Book+Basic' rel='stylesheet' type='text/css'>
    <style>
        .chapter {
            width: 100%;
            padding: 10px;
            -webkit-column-gap: 40px;
               -moz-column-gap: 40px;
                    column-gap: 40px;
            -webkit-column-width: 400px;
               -moz-column-width: 400px;
                    column-width: 400px;
            -webkit-column-count: 2;
               -moz-column-count: 2;
                    column-count: 2;
            -webkit-column-rule: 1px solid #ddd;
               -moz-column-rule: 1px solid #ddd;
                    column-rule: 1px solid #ddd;
            height: 90vh;
            ## Use Gentium for the text
            font-family: 'Gentium Book Basic', serif;
            color: #2d2e2e;
            font-weight: 500;
        }
        div.frame {
            overflow: hidden;
            padding: 0;
            margin: 0;
        }
        div.scrolling-cont {
            overflow-x: scroll;
            padding: 0;
            margin: 0;
        }
        ## The document uses a smallcaps role/class. This makes it actual smallcaps.
        .smallcaps {
            font-variant: small-caps;
        }
        ## Titles in bold, centered, very black Gentium
        h1, h2, h3, h4 {
            text-align: center;
            width: 100%;
            font-family: 'Gentium Book Basic', serif;
            font-size: 120%;
            font-weight: 900;
        }
        h1 {
            font-size: 150%;
        }
        .subtitle {
            text-align: center;
            width: 100%;
        }

        ## Images in figures are as large as they can be
        ## respecting aspect ratio
        .bookfig {
            width: 100%;
            height: auto;
            max-width: 100%;
            max-height: 100%;
        }

        ## Figures are slightly smaller than a page, so they
        ## will use one fully.
        div.figure {
            height: 88vh;
            margin: 0;
        }

        ## Minor tweak
        div.topic {
            margin: 0;
        }

        ## Follow paragraph typesetting conventions from the original book.
        div.section > p {
            text-indent: 1em;
            margin-bottom: 0;
            text-align: justify;
        }
    </style>
</%block>

<%block name="content">
<article class="storypage" itemscope="itemscope" itemtype="http://schema.org/Article">
    <div class="frame">
    <div class="scrolling-cont" id="scrolling-cont" name="scrolling-cont">
    <div class="e-content entry-content chapter" itemprop="articleBody text">
    <h1>${post.title()}</h1>
    ${post.text()}
    </div>
    </div>
    </div>
</article>
</%block>

## The extra_js block goes always at the end, right before closing the <body> tag.
<%block name="extra_js">
    ## Load FlowType.JS and apply it to the main text.
    <script src="//cdnjs.cloudflare.com/ajax/libs/Flowtype.js/1.1.0/flowtype.min.js"></script>
    <script>
        $('#scrolling-cont').flowtype({
            minimum: 500,
            maximum: 1200,
            minFont: 20,
            maxFont: 40,
            fontRatio: 50
        });
    </script>
</%block>
```

And here’s our
<a href="dr-nikola-v3.html" class="reference external">much more nicely
typeset book</a>.

## Interaction<a href="#interaction" class="headerlink"
title="Permalink to this heading">¶</a>

Pages are not just text anymore. They need to interact with the user in
the right way. In this case, the scrolling horizontally to read another
page is horrible:

-   It’s hard to stop at the right place

-   You end up between pages 99% of the time

So, let’s fix that with a little more <span class="caps">JS</span> at
the end of the template:

``` code
$(document).ready(function() {
    var elem = $('#scrolling-cont');
    elem.click(function(event) {
        var x1 = elem.position().left;
        var pw = elem.width() + 20;
        var x2 = event.pageX;
        if (x2 - x1 < pw / 2) {
            pw = -pw;
        }
        elem.animate({
            scrollLeft: '+=' + pw
        }, 500)
    });
});
```

If you click on the right half of the book, it moves 2 pages to the
right. If you click on the left half it moves two pages to the left.
Improvements are left as exercise to the reader, but please share!

And here’s the final result:
<a href="dr-nikola-final.html" class="reference external">A Bid For
Fortune; Or; Dr. Nikola’s Vendetta</a> and the template I used:
<a href="listings/book.tmpl.html"
class="reference external">book.tmpl</a>

## Final Note<a href="#final-note" class="headerlink"
title="Permalink to this heading">¶</a>

Eventually, you will find something Nikola simply doesn’t let you do.
For example, while doing this, I found that
<a href="https://github.com/getnikola/nikola/issues/2064"
class="reference external">enabling typogrify from a page’s metadata did
not work well,</a> that
<a href="https://github.com/getnikola/nikola/issues/2080"
class="reference external">using magic links to listings is buggy</a>
and, while there is a way around it, filed a feature request about
<a href="https://github.com/getnikola/nikola/issues/2062"
class="reference external">not double-loading JQuery.</a>

And you know what happened? I fixed the bugs, and I will implement the
feature request! And if you try to do cool crazy stuff with Nikola, you
will find bugs, and will ask for features, and there is a pretty good
chance we will fix them, or find workarounds. After all we have already
done it at least <a
href="https://github.com/getnikola/nikola/issues?q=is%3Aissue+is%3Aclosed"
class="reference external">1179 times.</a>

So, please enjoy, experiment, and communicate. Everyone wins.

------------------------------------------------------------------------

<span class="label"><span class="fn-bracket">\[</span><a href="creating-a-custom-page.html#footnote-reference-1"
role="doc-backlink">1</a><span class="fn-bracket">\]</span></span>

Sadly, the title is actually “A Bid For Fortune” and “Dr. Nikola’s
Vendetta” is the subtitle, but it works for me.

Contents © 2012–2025 [Roberto Alsina and the Nikola
contributors](contact.html)  \|  Powered by Nikola itself  \|   [Follow
Nikola on
Twitter](https://twitter.com/intent/user?screen_name=GetNikola)  \|  Theme
is [Cerulean](https://bootswatch.com/cerulean/)

<a href="https://statcounter.com/tumblr/" target="_blank" title="tumblr
statistics"><img src="https://c.statcounter.com/7842875/0/3421486a/1/"
class="statcounter" alt="tumblr statistics" /></a>
