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
    data-cfemail="5a34333135363b1a3633383f283b7439323b2e">[email protected]</span>)</a>
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

-   <a href="quickstart.rst" id="sourcelink" class="nav-link">Page
    Source</a>

# <a href="#" class="u-url">A reStructuredText Primer</a>

## <a href="quickstart.html#toc-entry-1" class="toc-backref"
role="doc-backlink">A ReStructuredText Primer</a><a href="#a-restructuredtext-primer" class="headerlink"
title="Permalink to this heading">¶</a>

Author<span class="colon">:</span>  
Richard Jones

Version<span class="colon">:</span>  
$Revision: 5801 $

Copyright<span class="colon">:</span>  
This document has been placed in the public domain.

<a href="quickstart.html#top" class="reference internal">Contents</a>

-   <a href="quickstart.html#a-restructuredtext-primer" id="toc-entry-1"
    class="reference internal">A ReStructuredText Primer</a>

    -   <a href="quickstart.html#structure" id="toc-entry-2"
        class="reference internal">Structure</a>

    -   <a href="quickstart.html#text-styles" id="toc-entry-3"
        class="reference internal">Text styles</a>

    -   <a href="quickstart.html#lists" id="toc-entry-4"
        class="reference internal">Lists</a>

    -   <a href="quickstart.html#preformatting-code-samples" id="toc-entry-5"
        class="reference internal">Preformatting (code samples)</a>

    -   <a href="quickstart.html#sections" id="toc-entry-6"
        class="reference internal">Sections</a>

        -   <a href="quickstart.html#document-title-subtitle" id="toc-entry-7"
            class="reference internal">Document Title / Subtitle</a>

    -   <a href="quickstart.html#images" id="toc-entry-8"
        class="reference internal">Images</a>

    -   <a href="quickstart.html#what-next" id="toc-entry-9"
        class="reference internal">What Next?</a>

The text below contains links that look like
"(<a href="quickref.html" class="reference external">quickref</a>)".
These are relative links that point to the
<a href="quickref.html" class="reference external">Quick
reStructuredText</a> user reference. If these links don't work, please
refer to the
<a href="http://docutils.sourceforge.net/docs/user/rst/quickref.html"
class="reference external">master quick reference</a> document.

Note

This document is an informal introduction to reStructuredText. The
<a href="quickstart.html#what-next" class="reference internal">What
Next?</a> section below has links to further resources, including a
formal reference.

### <a href="quickstart.html#toc-entry-2" class="toc-backref"
role="doc-backlink">Structure</a><a href="#structure" class="headerlink"
title="Permalink to this heading">¶</a>

From the outset, let me say that "Structured Text" is probably a bit of
a misnomer. It's more like "Relaxed Text" that uses certain consistent
patterns. These patterns are interpreted by a HTML converter to produce
"Very Structured Text" that can be used by a web browser.

The most basic pattern recognised is a **paragraph**
(<a href="quickref.html#paragraphs"
class="reference external">quickref</a>). That's a chunk of text that is
separated by blank lines (one is enough). Paragraphs must have the same
indentation -- that is, line up at their left edge. Paragraphs that
start indented will result in indented quote paragraphs. For example:

``` literal-block
This is a paragraph.  It's quite
short.

   This paragraph will result in an indented block of
   text, typically used for quoting other text.

This is another one.
```

Results in:

> This is a paragraph. It's quite short.
>
> > This paragraph will result in an indented block of text, typically
> > used for quoting other text.
>
> This is another one.

### <a href="quickstart.html#toc-entry-3" class="toc-backref"
role="doc-backlink">Text styles</a><a href="#text-styles" class="headerlink"
title="Permalink to this heading">¶</a>

(<a href="quickref.html#inline-markup"
class="reference external">quickref</a>)

Inside paragraphs and other bodies of text, you may additionally mark
text for *italics* with "`*italics*`" or **bold** with "`**bold**`".
This is called "inline markup".

If you want something to appear as a fixed-space literal, use
"``` ``double  ```<span class="pre">``` back-quotes`` ```</span>". Note
that no further fiddling is done inside the double back-quotes -- so
asterisks "`*`" etc. are left alone.

If you find that you want to use one of the "special" characters in
text, it will generally be OK -- reStructuredText is pretty smart. For
example, this lone asterisk \* is handled just fine, as is the asterisk
in this equation: 5\*6=30. If you actually want text \*surrounded by
asterisks\* to **not** be italicised, then you need to indicate that the
asterisk is not special. You do this by placing a backslash just before
it, like so "`\*`"
(<a href="quickref.html#escaping" class="reference external">quickref</a>),
or by enclosing it in double back-quotes (inline literals), like this:

``` literal-block
``*``
```

Tip

Think of inline markup as a form of (parentheses) and use it the same
way: immediately before and after the text being marked up. Inline
markup by itself (surrounded by whitespace) or in the middle of a word
won't be recognized. See the <a
href="http://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html#inline-markup"
class="reference external">markup spec</a> for full details.

### <a href="quickstart.html#toc-entry-4" class="toc-backref"
role="doc-backlink">Lists</a><a href="#lists" class="headerlink"
title="Permalink to this heading">¶</a>

Lists of items come in three main flavours: **enumerated**, **bulleted**
and **definitions**. In all list cases, you may have as many paragraphs,
sublists, etc. as you want, as long as the left-hand side of the
paragraph or whatever aligns with the first line of text in the list
item.

Lists must always start a new paragraph -- that is, they must appear
after a blank line.

**enumerated** lists (numbers, letters or roman numerals; <a href="quickref.html#enumerated-lists"
class="reference external">quickref</a>)  
Start a line off with a number or letter followed by a period ".", right
bracket ")" or surrounded by brackets "( )" -- whatever you're
comfortable with. All of the following forms are recognised:

``` literal-block
1. numbers

A. upper-case letters
   and it goes over many lines

   with two paragraphs and all!

a. lower-case letters

   3. with a sub-list starting at a different number
   4. make sure the numbers are in the correct sequence though!

I. upper-case roman numerals

i. lower-case roman numerals

(1) numbers again

1) and again
```

Results in (note: the different enumerated list styles are not always
supported by every web browser, so you may not get the full effect
here):

1.  numbers

1.  upper-case letters and it goes over many lines

    with two paragraphs and all!

1.  lower-case letters

    1.  with a sub-list starting at a different number

    2.  make sure the numbers are in the correct sequence though!

1.  upper-case roman numerals

1.  lower-case roman numerals

1.  numbers again

1.  and again

**bulleted** lists (<a href="quickref.html#bullet-lists"
class="reference external">quickref</a>)  
Just like enumerated lists, start the line off with a bullet point
character - either "-", "+" or "\*":

``` literal-block
* a bullet point using "*"

  - a sub-list using "-"

    + yet another sub-list

  - another item
```

Results in:

-   a bullet point using "\*"

    -   a sub-list using "-"

        -   yet another sub-list

    -   another item

**definition** lists (<a href="quickref.html#definition-lists"
class="reference external">quickref</a>)  
Unlike the other two, the definition lists consist of a term, and the
definition of that term. The format of a definition list is:

``` literal-block
what
  Definition lists associate a term with a definition.

*how*
  The term is a one-line phrase, and the definition is one or more
  paragraphs or body elements, indented relative to the term.
  Blank lines are not allowed between term and definition.
```

Results in:

what  
Definition lists associate a term with a definition.

*how*  
The term is a one-line phrase, and the definition is one or more
paragraphs or body elements, indented relative to the term. Blank lines
are not allowed between term and definition.

### <a href="quickstart.html#toc-entry-5" class="toc-backref"
role="doc-backlink">Preformatting (code samples)</a><a href="#preformatting-code-samples" class="headerlink"
title="Permalink to this heading">¶</a>

(<a href="quickref.html#literal-blocks"
class="reference external">quickref</a>)

To just include a chunk of preformatted, never-to-be-fiddled-with text,
finish the prior paragraph with "`::`". The preformatted block is
finished when the text falls back to the same indentation level as a
paragraph prior to the preformatted block. For example:

``` literal-block
An example::

    Whitespace, newlines, blank lines, and all kinds of markup
      (like *this* or \this) is preserved by literal blocks.
  Lookie here, I've dropped an indentation level
  (but not far enough)

no more example
```

Results in:

> An example:
>
> ``` literal-block
>   Whitespace, newlines, blank lines, and all kinds of markup
>     (like *this* or \this) is preserved by literal blocks.
> Lookie here, I've dropped an indentation level
> (but not far enough)
> ```
>
> no more example

Note that if a paragraph consists only of "`::`", then it's removed from
the output:

``` literal-block
::

    This is preformatted text, and the
    last "::" paragraph is removed
```

Results in:

``` literal-block
This is preformatted text, and the
last "::" paragraph is removed
```

### <a href="quickstart.html#toc-entry-6" class="toc-backref"
role="doc-backlink">Sections</a><a href="#sections" class="headerlink"
title="Permalink to this heading">¶</a>

(<a href="quickref.html#section-structure"
class="reference external">quickref</a>)

To break longer text up into sections, you use **section headers**.
These are a single line of text (one or more words) with adornment: an
underline alone, or an underline and an overline together, in dashes
"<span class="pre">`-----`</span>", equals
"<span class="pre">`======`</span>", tildes
"<span class="pre">`~~~~~~`</span>" or any of the non-alphanumeric
characters `` = - ` : ' " ~ ^ _ * + # < > `` that you feel comfortable
with. An underline-only adornment is distinct from an
overline-and-underline adornment using the same character. The
underline/overline must be at least as long as the title text. Be
consistent, since all sections marked with the same adornment style are
deemed to be at the same level:

``` literal-block
Chapter 1 Title
===============

Section 1.1 Title
-----------------

Subsection 1.1.1 Title
~~~~~~~~~~~~~~~~~~~~~~

Section 1.2 Title
-----------------

Chapter 2 Title
===============
```

This results in the following structure, illustrated by simplified
pseudo-XML:

``` literal-block
<section>
    <title>
        Chapter 1 Title
    <section>
        <title>
            Section 1.1 Title
        <section>
            <title>
                Subsection 1.1.1 Title
    <section>
        <title>
            Section 1.2 Title
<section>
    <title>
        Chapter 2 Title
```

(Pseudo-XML uses indentation for nesting and has no end-tags. It's not
possible to show actual processed output, as in the other examples,
because sections cannot exist inside block quotes. For a concrete
example, compare the section structure of this document's source text
and processed output.)

Note that section headers are available as link targets, just using
their name. To link to the
<a href="quickstart.html#lists" class="reference internal">Lists</a>
heading, I write "`Lists_`". If the heading has a space in it like
<a href="quickstart.html#text-styles" class="reference internal">text
styles</a>, we need to quote the heading "`` `text styles`_ ``".

#### <a href="quickstart.html#toc-entry-7" class="toc-backref"
role="doc-backlink">Document Title / Subtitle</a><a href="#document-title-subtitle" class="headerlink"
title="Permalink to this heading">¶</a>

The title of the whole document is distinct from section titles and may
be formatted somewhat differently (e.g. the HTML writer by default shows
it as a centered heading).

To indicate the document title in reStructuredText, use a unique
adornment style at the beginning of the document. To indicate the
document subtitle, use another unique adornment style immediately after
the document title. For example:

``` literal-block
================
 Document Title
================
----------
 Subtitle
----------

Section Title
=============

...
```

Note that "Document Title" and "Section Title" above both use equals
signs, but are distinct and unrelated styles. The text of
overline-and-underlined titles (but not underlined-only) may be inset
for aesthetics.

### <a href="quickstart.html#toc-entry-8" class="toc-backref"
role="doc-backlink">Images</a><a href="#images" class="headerlink"
title="Permalink to this heading">¶</a>

(<a href="quickref.html#directives"
class="reference external">quickref</a>)

To include an image in your document, you use the the `image`
<a href="http://docutils.sourceforge.net/docs/ref/rst/directives.html"
class="reference external">directive</a>. For example:

``` literal-block
.. image:: /images/nikola.png
```

results in:

![/images/nikola.png](images/nikola.png)

The `/images/nikola.png` part indicates the filename of the image you
wish to appear in the document. There's no restriction placed on the
image (format, size etc). If the image is to appear in HTML and you wish
to supply additional information, you may:

``` literal-block
.. image:: /images/nikola.png
   :height: 100
   :width: 200
   :scale: 50
   :alt: alternate text
```

See the full <a
href="http://docutils.sourceforge.net/docs/ref/rst/directives.html#images"
class="reference external">image directive documentation</a> for more
info.

### <a href="quickstart.html#toc-entry-9" class="toc-backref"
role="doc-backlink">What Next?</a><a href="#what-next" class="headerlink"
title="Permalink to this heading">¶</a>

This primer introduces the most common features of reStructuredText, but
there are a lot more to explore. The
<a href="quickref.html" class="reference external">Quick
reStructuredText</a> user reference is a good place to go next. For
complete details, the <a
href="http://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html"
class="reference external">reStructuredText Markup Specification</a> is
the place to go
<a href="quickstart.html#footnote-1" id="footnote-reference-1"
class="brackets" role="doc-noteref"><span
class="fn-bracket">[</span>1<span class="fn-bracket">]</span></a>.

Users who have questions or need assistance with Docutils or
reStructuredText should post a message to the <a
href="http://docutils.sourceforge.net/docs/user/mailing-lists.html#docutils-users"
class="reference external">Docutils-users</a> mailing list.

<span class="label"><span class="fn-bracket">\[</span><a href="quickstart.html#footnote-reference-1" role="doc-backlink">1</a><span class="fn-bracket">\]</span></span>

If that relative link doesn't work, try the master document: <a
href="http://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html"
class="reference external">http://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html</a>.

Contents © 2012–2025 [Roberto Alsina and the Nikola
contributors](contact.html)  \|  Powered by Nikola itself  \|   [Follow
Nikola on
Twitter](https://twitter.com/intent/user?screen_name=GetNikola)  \|  Theme
is [Cerulean](https://bootswatch.com/cerulean/)

<a href="https://statcounter.com/tumblr/" target="_blank" title="tumblr
statistics"><img src="https://c.statcounter.com/7842875/0/3421486a/1/"
class="statcounter" alt="tumblr statistics" /></a>
