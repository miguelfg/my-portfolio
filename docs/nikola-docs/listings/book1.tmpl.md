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
    data-cfemail="294740424645486945404b4c5b48074a41485d">[email protected]</span>)</a>
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

-   <a href="book1.tmpl" id="sourcelink" class="nav-link">Source</a>

-   [listings](.)
-   book1.tmpl

# book1.tmpl <span class="small">[(Source)](book1.tmpl)</span>

|                           |                                                                                                                                                                                                                                                                                  |
|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [](#listingsbook1tmpl-1)  | <span id="listingsbook1tmpl-1"></span><span class="c">`## -*- coding: utf-8 -*-`</span>` `                                                                                                                                                                                       |
| [](#listingsbook1tmpl-2)  | <span id="listingsbook1tmpl-2"></span><span class="x">`<%namespace name="helper" file="post_helper.tmpl"/>`</span>` `                                                                                                                                                            |
| [](#listingsbook1tmpl-3)  | <span id="listingsbook1tmpl-3"></span><span class="x">`<%namespace name="pheader" file="post_header.tmpl"/>`</span>` `                                                                                                                                                           |
| [](#listingsbook1tmpl-4)  | <span id="listingsbook1tmpl-4"></span><span class="x">`<%namespace name="comments" file="comments_helper.tmpl"/>`</span>` `                                                                                                                                                      |
| [](#listingsbook1tmpl-5)  | <span id="listingsbook1tmpl-5"></span><span class="x">`<%inherit file="post.tmpl"/>`</span>` `                                                                                                                                                                                   |
| [](#listingsbook1tmpl-6)  | <span id="listingsbook1tmpl-6"></span>` `                                                                                                                                                                                                                                        |
| [](#listingsbook1tmpl-7)  | <span id="listingsbook1tmpl-7"></span><span class="c">`## This redefines the extra_head block which goes at the end of <head>`</span>` `                                                                                                                                         |
| [](#listingsbook1tmpl-8)  | <span id="listingsbook1tmpl-8"></span><span class="x">`<%block name="extra_head">`</span>` `                                                                                                                                                                                     |
| [](#listingsbook1tmpl-9)  | <span id="listingsbook1tmpl-9"></span><span class="x">`    `</span><span class="cp">`${`</span><span class="n">`parent`</span><span class="o">`.`</span><span class="n">`extra_head`</span><span class="p">`()`</span><span class="cp">`}`</span>` `                             |
| [](#listingsbook1tmpl-10) | <span id="listingsbook1tmpl-10"></span><span class="x">`    <style>`</span>` `                                                                                                                                                                                                   |
| [](#listingsbook1tmpl-11) | <span id="listingsbook1tmpl-11"></span><span class="x">`        `</span><span class="c">`## This shows the content in columns with a height`</span>` `                                                                                                                           |
| [](#listingsbook1tmpl-12) | <span id="listingsbook1tmpl-12"></span><span class="x">`        `</span><span class="c">`## somewhat smaller than the viewport height (90vh)`</span>` `                                                                                                                          |
| [](#listingsbook1tmpl-13) | <span id="listingsbook1tmpl-13"></span><span class="x">`        `</span><span class="c">`## to give a "book" feeling instead of a wall of text.`</span>` `                                                                                                                       |
| [](#listingsbook1tmpl-14) | <span id="listingsbook1tmpl-14"></span><span class="x">`        .chapter {`</span>` `                                                                                                                                                                                            |
| [](#listingsbook1tmpl-15) | <span id="listingsbook1tmpl-15"></span><span class="x">`            width: 100%;`</span>` `                                                                                                                                                                                      |
| [](#listingsbook1tmpl-16) | <span id="listingsbook1tmpl-16"></span><span class="x">`            padding: 10px;`</span>` `                                                                                                                                                                                    |
| [](#listingsbook1tmpl-17) | <span id="listingsbook1tmpl-17"></span><span class="x">`            -webkit-column-gap: 40px;`</span>` `                                                                                                                                                                         |
| [](#listingsbook1tmpl-18) | <span id="listingsbook1tmpl-18"></span><span class="x">`               -moz-column-gap: 40px;`</span>` `                                                                                                                                                                         |
| [](#listingsbook1tmpl-19) | <span id="listingsbook1tmpl-19"></span><span class="x">`                    column-gap: 40px;`</span>` `                                                                                                                                                                         |
| [](#listingsbook1tmpl-20) | <span id="listingsbook1tmpl-20"></span><span class="x">`            -webkit-column-width: 400px;`</span>` `                                                                                                                                                                      |
| [](#listingsbook1tmpl-21) | <span id="listingsbook1tmpl-21"></span><span class="x">`               -moz-column-width: 400px;`</span>` `                                                                                                                                                                      |
| [](#listingsbook1tmpl-22) | <span id="listingsbook1tmpl-22"></span><span class="x">`                    column-width: 400px;`</span>` `                                                                                                                                                                      |
| [](#listingsbook1tmpl-23) | <span id="listingsbook1tmpl-23"></span><span class="x">`            -webkit-column-count: 2;`</span>` `                                                                                                                                                                          |
| [](#listingsbook1tmpl-24) | <span id="listingsbook1tmpl-24"></span><span class="x">`               -moz-column-count: 2;`</span>` `                                                                                                                                                                          |
| [](#listingsbook1tmpl-25) | <span id="listingsbook1tmpl-25"></span><span class="x">`                    column-count: 2;`</span>` `                                                                                                                                                                          |
| [](#listingsbook1tmpl-26) | <span id="listingsbook1tmpl-26"></span><span class="x">`            -webkit-column-rule: 1px solid `</span><span class="cp">`#ddd`</span><span class="p">`;`</span>` `                                                                                                           |
| [](#listingsbook1tmpl-27) | <span id="listingsbook1tmpl-27"></span><span class="x">`               -moz-column-rule: 1px solid `</span><span class="cp">`#ddd`</span><span class="p">`;`</span>` `                                                                                                           |
| [](#listingsbook1tmpl-28) | <span id="listingsbook1tmpl-28"></span><span class="x">`                    column-rule: 1px solid `</span><span class="cp">`#ddd`</span><span class="p">`;`</span>` `                                                                                                           |
| [](#listingsbook1tmpl-29) | <span id="listingsbook1tmpl-29"></span><span class="x">`            height: 90vh;`</span>` `                                                                                                                                                                                     |
| [](#listingsbook1tmpl-30) | <span id="listingsbook1tmpl-30"></span><span class="x">`            font-color: #2d2e2e;`</span>` `                                                                                                                                                                              |
| [](#listingsbook1tmpl-31) | <span id="listingsbook1tmpl-31"></span><span class="x">`            font-weight: 500;`</span>` `                                                                                                                                                                                 |
| [](#listingsbook1tmpl-32) | <span id="listingsbook1tmpl-32"></span><span class="x">`        }`</span>` `                                                                                                                                                                                                     |
| [](#listingsbook1tmpl-33) | <span id="listingsbook1tmpl-33"></span>` `                                                                                                                                                                                                                                       |
| [](#listingsbook1tmpl-34) | <span id="listingsbook1tmpl-34"></span><span class="x">`        `</span><span class="c">`## A wrapper that hides most of the columns`</span>` `                                                                                                                                  |
| [](#listingsbook1tmpl-35) | <span id="listingsbook1tmpl-35"></span><span class="x">`        div.frame {`</span>` `                                                                                                                                                                                           |
| [](#listingsbook1tmpl-36) | <span id="listingsbook1tmpl-36"></span><span class="x">`            overflow: hidden;`</span>` `                                                                                                                                                                                 |
| [](#listingsbook1tmpl-37) | <span id="listingsbook1tmpl-37"></span><span class="x">`            padding: 0;`</span>` `                                                                                                                                                                                       |
| [](#listingsbook1tmpl-38) | <span id="listingsbook1tmpl-38"></span><span class="x">`            margin: 0;`</span>` `                                                                                                                                                                                        |
| [](#listingsbook1tmpl-39) | <span id="listingsbook1tmpl-39"></span><span class="x">`        }`</span>` `                                                                                                                                                                                                     |
| [](#listingsbook1tmpl-40) | <span id="listingsbook1tmpl-40"></span>` `                                                                                                                                                                                                                                       |
| [](#listingsbook1tmpl-41) | <span id="listingsbook1tmpl-41"></span><span class="x">`        `</span><span class="c">`## A wrapper to let you scroll across columns`</span>` `                                                                                                                                |
| [](#listingsbook1tmpl-42) | <span id="listingsbook1tmpl-42"></span><span class="x">`        div.scrolling-cont {`</span>` `                                                                                                                                                                                  |
| [](#listingsbook1tmpl-43) | <span id="listingsbook1tmpl-43"></span><span class="x">`            overflow-x: scroll;`</span>` `                                                                                                                                                                               |
| [](#listingsbook1tmpl-44) | <span id="listingsbook1tmpl-44"></span><span class="x">`            padding: 0;`</span>` `                                                                                                                                                                                       |
| [](#listingsbook1tmpl-45) | <span id="listingsbook1tmpl-45"></span><span class="x">`            margin: 0;`</span>` `                                                                                                                                                                                        |
| [](#listingsbook1tmpl-46) | <span id="listingsbook1tmpl-46"></span><span class="x">`        }`</span>` `                                                                                                                                                                                                     |
| [](#listingsbook1tmpl-47) | <span id="listingsbook1tmpl-47"></span><span class="x">`    </style>`</span>` `                                                                                                                                                                                                  |
| [](#listingsbook1tmpl-48) | <span id="listingsbook1tmpl-48"></span><span class="x">`</%block>`</span>` `                                                                                                                                                                                                     |
| [](#listingsbook1tmpl-49) | <span id="listingsbook1tmpl-49"></span>` `                                                                                                                                                                                                                                       |
| [](#listingsbook1tmpl-50) | <span id="listingsbook1tmpl-50"></span><span class="x">`<%block name="content">`</span>` `                                                                                                                                                                                       |
| [](#listingsbook1tmpl-51) | <span id="listingsbook1tmpl-51"></span><span class="x">`<article class="storypage" itemscope="itemscope" itemtype="http://schema.org/Article">`</span>` `                                                                                                                        |
| [](#listingsbook1tmpl-52) | <span id="listingsbook1tmpl-52"></span><span class="x">`    `</span><span class="c">`## Wrap the post's text in the needed divs`</span>` `                                                                                                                                       |
| [](#listingsbook1tmpl-53) | <span id="listingsbook1tmpl-53"></span><span class="x">`    <div class="frame">`</span>` `                                                                                                                                                                                       |
| [](#listingsbook1tmpl-54) | <span id="listingsbook1tmpl-54"></span><span class="x">`    <div class="scrolling-cont" id="scrolling-cont" name="scrolling-cont">`</span>` `                                                                                                                                    |
| [](#listingsbook1tmpl-55) | <span id="listingsbook1tmpl-55"></span><span class="x">`    <div class="e-content entry-content chapter" itemprop="articleBody text">`</span>` `                                                                                                                                 |
| [](#listingsbook1tmpl-56) | <span id="listingsbook1tmpl-56"></span><span class="x">`    `</span><span class="c">`## Moved the title inside the flow of the book`</span>` `                                                                                                                                   |
| [](#listingsbook1tmpl-57) | <span id="listingsbook1tmpl-57"></span><span class="x">`    <h1>`</span><span class="cp">`${`</span><span class="n">`post`</span><span class="o">`.`</span><span class="n">`title`</span><span class="p">`()`</span><span class="cp">`}`</span><span class="x">`</h1>`</span>` ` |
| [](#listingsbook1tmpl-58) | <span id="listingsbook1tmpl-58"></span><span class="x">`    `</span><span class="cp">`${`</span><span class="n">`post`</span><span class="o">`.`</span><span class="n">`text`</span><span class="p">`()`</span><span class="cp">`}`</span>` `                                    |
| [](#listingsbook1tmpl-59) | <span id="listingsbook1tmpl-59"></span><span class="x">`    </div>`</span>` `                                                                                                                                                                                                    |
| [](#listingsbook1tmpl-60) | <span id="listingsbook1tmpl-60"></span><span class="x">`    </div>`</span>` `                                                                                                                                                                                                    |
| [](#listingsbook1tmpl-61) | <span id="listingsbook1tmpl-61"></span><span class="x">`    </div>`</span>` `                                                                                                                                                                                                    |
| [](#listingsbook1tmpl-62) | <span id="listingsbook1tmpl-62"></span><span class="x">`</article>`</span>` `                                                                                                                                                                                                    |
| [](#listingsbook1tmpl-63) | <span id="listingsbook1tmpl-63"></span><span class="x">`</%block>`</span>` `                                                                                                                                                                                                     |

Contents © 2012–2025 [Roberto Alsina and the Nikola
contributors](../contact.html)  \|  Powered by Nikola itself  \|  
[Follow Nikola on
Twitter](https://twitter.com/intent/user?screen_name=GetNikola)  \|  Theme
is [Cerulean](https://bootswatch.com/cerulean/)

<a href="https://statcounter.com/tumblr/" target="_blank" title="tumblr
statistics"><img src="https://c.statcounter.com/7842875/0/3421486a/1/"
class="statcounter" alt="tumblr statistics" /></a>
