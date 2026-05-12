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
    data-cfemail="422c2b292d2e23022e2b202730236c212a2336">[email protected]</span>)</a>
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

-   <a href="social_buttons.rst" id="sourcelink" class="nav-link">Page
    Source</a>

# <a href="#" class="u-url">Using Alternative Social Buttons with
Nikola</a>

Version<span class="colon">:</span>  
8.3.2

<a href="social_buttons.html#top"
class="reference internal">Contents</a>

-   <a href="social_buttons.html#the-default" id="toc-entry-1"
    class="reference internal">The Default</a>

-   <a href="social_buttons.html#sharenice" id="toc-entry-2"
    class="reference internal">ShareNice</a>

-   <a href="social_buttons.html#socialshareprivacy" id="toc-entry-3"
    class="reference internal">SocialSharePrivacy</a>

    -   <a href="social_buttons.html#the-hard-way" id="toc-entry-4"
        class="reference internal">The Hard Way</a>

    -   <a href="social_buttons.html#the-easy-way" id="toc-entry-5"
        class="reference internal">The Easy Way</a>

## <a href="social_buttons.html#toc-entry-1" class="toc-backref"
role="doc-backlink">The Default</a><a href="#the-default" class="headerlink"
title="Permalink to this heading">¶</a>

By Default, the themes provided with Nikola will add to your pages a
"slide in" widget at the bottom right of the page, provided by Addthis.
This is the HTML code for that:

``` code
<!-- Social buttons -->
<div id="addthisbox" class="addthis_toolbox addthis_peekaboo_style
    addthis_default_style addthis_label_style addthis_32x32_style">
<a class="addthis_button_more">Share</a>
<ul><li><a class="addthis_button_facebook"></a>
<li><a class="addthis_button_google_plusone_share"></a>
<li><a class="addthis_button_linkedin"></a>
<li><a class="addthis_button_twitter"></a>
</ul>
</div>
<script src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-4f7088a56bb93798"></script>
<!-- End of social buttons -->
"""
```

You can change that using the `SOCIAL_BUTTONS_CODE` option in your
conf.py. In some cases, just doing that will be enough but in others, it
won't. This document tries to describe all the bits involved in making
this work correctly.

Part 1: `SOCIAL_BUTTONS_CODE`  
Social sharing services like addthis and others will provide you a HTML
snippet. If it is self-contained, then just setting
`SOCIAL_BUTTONS_CODE` may be enough. Try :-)

Part 2: The theme  
The `SOCIAL_BUTTONS_CODE` HTML fragment will be embedded *somewhere* by
the theme. Whether that is the correct place or not is not something the
theme author can truly know, so it is possible that you may have to
tweak the `base.html` template to make it look good.

Part 3: `BODY_END` and `EXTRA_HEAD_DATA`  
Some social sharing code requires JS execution that depends on JQuery
being available (example:
<a href="https://github.com/panzi/SocialSharePrivacy"
class="reference external">SocialSharePrivacy</a>). It's good practice
(and often, the only way that will work) to put those at the end of
`<BODY>`, and one easy way to do that is to put them in `BODY_END`

On the other hand, it's possible that it requires you to load some CSS
files. The right place for that is in the document's `<HEAD>` so they
should be added in `EXTRA_HEAD_DATA`

Part 4: assets  
For sharing code that doesn't rely on a social sharing service, you may
need to add CSS, Image, or JS files to your site

## <a href="social_buttons.html#toc-entry-2" class="toc-backref"
role="doc-backlink">ShareNice</a><a href="#sharenice" class="headerlink"
title="Permalink to this heading">¶</a>

<a href="https://graingert.co.uk/shareNice/"
class="reference external">ShareNice</a> is "written in order to provide
social sharing features to web developers and website administrators who
wish to maintain and protect their users' privacy" which sounds cool to
me.

Let's go step by step into integrating the hosted version of ShareNice
into a Nikola site.

For testing purposes, let's do it on a demo site:

``` literal-block
$ nikola init --demo sharenice_test
A new site with example data has been created at sharenice_test.
See README.txt in that folder for more information.
$ cd sharenice_test/
```

To see what's going on, let's start Nikola in "auto mode". This should
build the site and open a web browser showing the default configuration,
with the AddThis widget:

``` literal-block
$ nikola auto -b
```

First, let's add the HTML snippet that will show the sharing options. In
your conf.py, set this, which is the HTML code suggested by ShareNice:

``` code
SOCIAL_BUTTONS_CODE = """<div id="shareNice" data-share-label="Share"
    data-color-scheme="black" data-icon-size="32" data-panel-bottom="plain"
    data-services="plus.google.com,facebook.com,digg.com,email,delicious.com,twitter.com"
    style="float:right"></div>"""

BODY_END = """<script src="https://graingert.co.uk/shareNice/code.js"></script>"""
```

And you should now see a sharing box at the bottom right of the page.

Main problem remaining is that it doesn't really look good and
integrated in the page layout. I suggest changing the code to this which
looks nicer, but still has some placement issues:

``` code
SOCIAL_BUTTONS_CODE = """<div id="shareNice" data-share-label="Share"
    data-color-scheme="black" data-icon-size="32" data-panel-bottom="plain"
    data-services="plus.google.com,facebook.com,email,twitter.com"
    style="position: absolute; left: 20px; top: 60px;"></div>"""
```

If anyone comes up with a better idea of styling/placement, just let me
know ;-)

One bad bit of this so far is that you are now using a script from
another site, and that doesn't let Nikola perform as many optimizations
to your page as it could. So, if you really want to go the extra mile to
save a few KB and round trips, you *could* install your own copy from
the <a href="https://github.com/mischat/shareNice"
class="reference external">github repo</a> and use that instead of the
copy at <a href="https://graingert.co.uk/shareNice"
class="reference external">ShareNice</a>.

Then, you can create your own theme inheriting from the one you are
using and add the CSS and JS files from ShareNice into your `bundles`
configuration so they are combined and minified.

## <a href="social_buttons.html#toc-entry-3" class="toc-backref"
role="doc-backlink">SocialSharePrivacy</a><a href="#socialshareprivacy" class="headerlink"
title="Permalink to this heading">¶</a>

### <a href="social_buttons.html#toc-entry-4" class="toc-backref"
role="doc-backlink">The Hard Way</a><a href="#the-hard-way" class="headerlink"
title="Permalink to this heading">¶</a>

<a href="https://github.com/panzi/SocialSharePrivacy"
class="reference external">SocialSharePrivacy</a> is "a jQuery plugin
that lets you add social share buttons to your website that don't allow
the social sites to track your users." Nice!

Let's go step-by-step into integrating SocialSharePrivacy into a Nikola
site. To improve privacy, they recommend you not use the hosted service
so we'll do it the hard way, by getting and distributing everything in
our own site.

<a href="https://github.com/panzi/SocialSharePrivacy"
class="reference external">https://github.com/panzi/SocialSharePrivacy</a>

For testing purposes, let's do it on a demo site:

``` literal-block
$ nikola init --demo ssp_test
A new site with example data has been created at ssp_test.
See README.txt in that folder for more information.
$ cd ssp_test/
```

To see what's going on, let's start Nikola in "auto mode". This should
build the site and open a web browser showing the default configuration,
with the AddThis widget:

``` literal-block
$ nikola auto -b
```

Now, download
<a href="https://github.com/panzi/SocialSharePrivacy/archive/master.zip"
class="reference external">the current version</a> and unzip it. You
will have a <span class="pre">`SocialSharePrivacy-master`</span> folder
with lots of stuff in it.

First, we need to build it (this requires a working and modern uglifyjs,
this may not be easy):

``` literal-block
$ cd SocialSharePrivacy-master
$ sh build.sh -m gplus,twitter,facebook,mail -s "/assets/css/socialshareprivacy.css" -a off
```

You will now have several files in a `build` folder. We need to bring
them into the site:

``` literal-block
$ cp -Rv SocialSharePrivacy-master/build/* files/
$ cp -R SocialSharePrivacy-master/images/ files/assets/
```

Edit your `conf.py`:

``` code
BODY_END = """
<script src="/javascripts/jquery.socialshareprivacy.min.js"></script>
<script>
$(document).ready(function () {
    $('.share').socialSharePrivacy();
});
</script>
"""

SOCIAL_BUTTONS_CODE = """<div class="share"></div>"""
```

In my experience this produces a broken, duplicate, semi-working thing.
YMMV and if you make it work correctly, let me know how :-)

### <a href="social_buttons.html#toc-entry-5" class="toc-backref"
role="doc-backlink">The Easy Way</a><a href="#the-easy-way" class="headerlink"
title="Permalink to this heading">¶</a>

Go to <a href="https://panzi.github.io/SocialSharePrivacy/"
class="reference external">https://panzi.github.io/SocialSharePrivacy/</a>
and use the provided form to get the code. Make sure you check "I
already use JQuery" if you are using one of the themes that require it,
like site or default, select the services you want, and use your disqus
name if you have one.

It will give you 3 code snippets:

"Insert this once in the head of your page"  
Put it in `BODY_END`

"Insert this wherever you want a share widget displayed"  
Put it in `SOCIAL_BUTTONS_CODE`

"Insert this once anywhere after the other code"  
Put it in `BODY_END`

That should give you a working integration (not tested)

Contents © 2012–2025 [Roberto Alsina and the Nikola
contributors](contact.html)  \|  Powered by Nikola itself  \|   [Follow
Nikola on
Twitter](https://twitter.com/intent/user?screen_name=GetNikola)  \|  Theme
is [Cerulean](https://bootswatch.com/cerulean/)

<a href="https://statcounter.com/tumblr/" target="_blank" title="tumblr
statistics"><img src="https://c.statcounter.com/7842875/0/3421486a/1/"
class="statcounter" alt="tumblr statistics" /></a>
