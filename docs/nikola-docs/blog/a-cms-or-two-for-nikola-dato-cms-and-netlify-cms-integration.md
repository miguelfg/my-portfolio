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
    data-cfemail="4b25222024272a0b2722292e392a6528232a3f">[email protected]</span>)</a>
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
-   <a href="index.html" class="nav-link">Blog</a>
-   <a href="https://users.getnikola.com" class="nav-link">Users</a>

<!-- -->

-   <a
    href="a-cms-or-two-for-nikola-dato-cms-and-netlify-cms-integration.txt"
    id="sourcelink" class="nav-link">Page Source</a>

# <a href="#" class="u-url">A CMS (or two) for Nikola: Dato CMS and
Netlify CMS integration</a>

<span class="byline-name fn p-name" itemprop="author">
<a href="../authors/chris-warrick.html" class="u-url">Chris Warrick</a>
</span>

<a href="#" rel="bookmark">2017-12-05 19:15</a>

<a
href="a-cms-or-two-for-nikola-dato-cms-and-netlify-cms-integration.html#disqus_thread"
data-disqus-identifier="cache/posts/a-cms-or-two-for-nikola-dato-cms-and-netlify-cms-integration.html">Comments</a>

<a
href="a-cms-or-two-for-nikola-dato-cms-and-netlify-cms-integration.txt"
class="sourcelink">Source</a>

One of the many complaints users have about static site generators is
the fact that non-tech-savvy users who don’t understand the command line
or don’t want to learn Markdown/reST can’t use SSGs. We’ve tried to
solve this before with Coil CMS, but that project is now dead, and was
hard to configure properly. The problem was not solved, *until now*.

Roberto Alsina and Chris Warrick independently built integrations for
**Dato CMS**, **Netlify CMS** and **Contentful**. Here they are:

-   <a href="https://plugins.getnikola.com/v8/datocms/"
    class="reference external">https://plugins.getnikola.com/v8/datocms/</a>

-   <a href="https://github.com/getnikola/nikola-netlify-cms"
    class="reference external">https://github.com/getnikola/nikola-netlify-cms</a>

-   <a href="https://plugins.getnikola.com/v8/contentful/"
    class="reference external">https://plugins.getnikola.com/v8/contentful/</a>

Both CMSes offer facilities for non-technical editors to write content,
including a **WYSIWYG** editor.

**Dato CMS** may require a bit more work at first, but you can automate
it (eg. with Travis CI, or Netlify). Our integration lets you deploy
your site anywhere.

**Netlify CMS** can be deployed with one click (and a few configuration
changes), and includes automation and hosting at Netlify (and GitHub).
You can also use some other hosting service, but that will require some
extra work on your side.

**Contentful** does not require a local install of Node to work, which
makes it easier to use and automate, while leaving the hosting up to
you.

Make sure to check them both out — have fun!

*(Updated 2017-12-06 to add Contentful support)*

-   <a href="../categories/contentful.html" class="tag p-category"
    rel="tag">contentful</a>
-   <a href="../categories/datocms.html" class="tag p-category"
    rel="tag">datocms</a>
-   <a href="../categories/netlify.html" class="tag p-category"
    rel="tag">netlify</a>
-   <a href="../categories/nikola.html" class="tag p-category"
    rel="tag">nikola</a>
-   <a href="../categories/planet.html" class="tag p-category"
    rel="tag">planet</a>

<!-- -->

-   <a href="nikola-v7810-is-out-maintenance-release.html" rel="prev"
    title="Nikola v7.8.10 is out! (maintenance release)">Previous post</a>
-   <a href="nikola-v7811-is-out-maintenance-release.html" rel="next"
    title="Nikola v7.8.11 is out! (maintenance release)">Next post</a>

## Comments

Please enable JavaScript to view the
<a href="https://disqus.com/?ref_noscript" rel="nofollow">comments
powered by Disqus.</a>

<a href="https://disqus.com" class="dsq-brlink" rel="nofollow">Comments
powered by <span class="logo-disqus">Disqus</span></a>

Contents © 2012–2025 [Roberto Alsina and the Nikola
contributors](../contact.html)  \|  Powered by Nikola itself  \|  
[Follow Nikola on
Twitter](https://twitter.com/intent/user?screen_name=GetNikola)  \|  Theme
is [Cerulean](https://bootswatch.com/cerulean/)

<a href="https://statcounter.com/tumblr/" target="_blank" title="tumblr
statistics"><img src="https://c.statcounter.com/7842875/0/3421486a/1/"
class="statcounter" alt="tumblr statistics" /></a>
