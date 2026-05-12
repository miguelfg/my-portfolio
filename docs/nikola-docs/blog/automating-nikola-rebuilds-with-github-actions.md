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
    data-cfemail="c3adaaa8acafa283afaaa1a6b1a2eda0aba2b7">[email protected]</span>)</a>
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

-   <a href="automating-nikola-rebuilds-with-github-actions.rst"
    id="sourcelink" class="nav-link">Page Source</a>

# <a href="#" class="u-url">Automating Nikola rebuilds with GitHub
Actions</a>

<span class="byline-name fn p-name" itemprop="author">
<a href="../authors/chris-warrick.html" class="u-url">Chris Warrick</a>
</span>

<a href="#" rel="bookmark">2020-04-24 22:24</a>

<a
href="automating-nikola-rebuilds-with-github-actions.html#disqus_thread"
data-disqus-identifier="cache/posts/automating-nikola-builds-with-github-actions.html">Comments</a>

<a href="automating-nikola-rebuilds-with-github-actions.rst"
class="sourcelink">Source</a>

In this guide, we’ll set up GitHub Actions to rebuild a
<a href="https://getnikola.com/" class="reference external">Nikola</a>
website and host it on GitHub Pages.

## Why?<a href="#why" class="headerlink"
title="Permalink to this heading">¶</a>

By using GitHub Actions to build your site, you can easily blog from
anywhere you can edit text files. Which means you can blog with only a
web browser and
<a href="https://github.com" class="reference external">GitHub.com</a>.
You also won’t need to install Nikola and Python to write. You won’t
need a real computer either — a mobile phone could probably access
GitHub.com and write something.

## Caveats<a href="#caveats" class="headerlink"
title="Permalink to this heading">¶</a>

-   The build might take a couple minutes to finish (1:30 for the demo
    site; YMMV)

-   When you commit and push to GitHub, the site will be published
    unconditionally. If you don’t have a copy of Nikola for local use,
    there is no way to preview your site.

## What you need<a href="#what-you-need" class="headerlink"
title="Permalink to this heading">¶</a>

-   A computer for the initial setup that can run Nikola. You can do it
    with any OS (Linux, macOS, \*BSD, but also Windows).

-   A GitHub account (free)

## Setting up Nikola<a href="#setting-up-nikola" class="headerlink"
title="Permalink to this heading">¶</a>

Start by creating a new Nikola site and customizing it to your liking.
Follow the <a href="https://getnikola.com/getting-started.html"
class="reference external">Getting Started guide</a>. You might also
want to add support for <a
href="https://getnikola.com/handbook.html#configuring-other-input-formats"
class="reference external">other input formats</a>, namely Markdown, but
this is not a requirement.

After you’re done, you must configure
<a href="https://getnikola.com/handbook.html#deploying-to-github"
class="reference external">deploying to GitHub</a> in Nikola. There are
a few important things you need to take care of:

-   Make your first deployment from your local computer and make sure
    your site works right. Don’t forget to set up `.gitignore`.

-   The `GITHUB_COMMIT_SOURCE` and `GITHUB_REMOTE_NAME` settings are
    overridden, so you can use values appropriate for your local builds.

-   Ensure that the correct branch for GitHub Pages is set on
    GitHub.com.

If everything works, you can make some change to your site (so you see
that rebuilding works), but don’t commit it just yet.

## Setting up GitHub Actions<a href="#setting-up-github-actions" class="headerlink"
title="Permalink to this heading">¶</a>

Next, we need to set up GitHub Actions. This is really straightforward.

On your source branch, create a file named `.github/workflows/main.yml`
with the following contents:

<a href="../listings/github-workflow.yml.html"
class="reference external">github-workflow.yml</a>
<a href="../listings/github-workflow.yml"
class="reference external">(Source)</a>

|                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|-------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [](automating-nikola-rebuilds-with-github-actions.html#rest_code_350e9be37c2943ab9a28489e74a58554-1)  | <span id="rest_code_350e9be37c2943ab9a28489e74a58554-1"></span><span class="nt">`on`</span><span class="p">`:`</span><span class="w">` `</span><span class="p p-Indicator">`[`</span><span class="nv">`push`</span><span class="p p-Indicator">`]`</span>` `                                                                                                                                                                                          |
| [](automating-nikola-rebuilds-with-github-actions.html#rest_code_350e9be37c2943ab9a28489e74a58554-2)  | <span id="rest_code_350e9be37c2943ab9a28489e74a58554-2"></span>` `                                                                                                                                                                                                                                                                                                                                                                                    |
| [](automating-nikola-rebuilds-with-github-actions.html#rest_code_350e9be37c2943ab9a28489e74a58554-3)  | <span id="rest_code_350e9be37c2943ab9a28489e74a58554-3"></span><span class="nt">`jobs`</span><span class="p">`:`</span>` `                                                                                                                                                                                                                                                                                                                            |
| [](automating-nikola-rebuilds-with-github-actions.html#rest_code_350e9be37c2943ab9a28489e74a58554-4)  | <span id="rest_code_350e9be37c2943ab9a28489e74a58554-4"></span><span class="w">`  `</span><span class="nt">`nikola_build`</span><span class="p">`:`</span>` `                                                                                                                                                                                                                                                                                         |
| [](automating-nikola-rebuilds-with-github-actions.html#rest_code_350e9be37c2943ab9a28489e74a58554-5)  | <span id="rest_code_350e9be37c2943ab9a28489e74a58554-5"></span><span class="w">`    `</span><span class="nt">`runs-on`</span><span class="p">`:`</span><span class="w">` `</span><span class="l l-Scalar l-Scalar-Plain">`ubuntu-latest`</span>` `                                                                                                                                                                                                    |
| [](automating-nikola-rebuilds-with-github-actions.html#rest_code_350e9be37c2943ab9a28489e74a58554-6)  | <span id="rest_code_350e9be37c2943ab9a28489e74a58554-6"></span><span class="w">`    `</span><span class="nt">`name`</span><span class="p">`:`</span><span class="w">` `</span><span class="s">`'Deploy`</span><span class="nv">` `</span><span class="s">`Nikola`</span><span class="nv">` `</span><span class="s">`to`</span><span class="nv">` `</span><span class="s">`GitHub`</span><span class="nv">` `</span><span class="s">`Pages'`</span>` ` |
| [](automating-nikola-rebuilds-with-github-actions.html#rest_code_350e9be37c2943ab9a28489e74a58554-7)  | <span id="rest_code_350e9be37c2943ab9a28489e74a58554-7"></span><span class="w">`    `</span><span class="nt">`steps`</span><span class="p">`:`</span>` `                                                                                                                                                                                                                                                                                              |
| [](automating-nikola-rebuilds-with-github-actions.html#rest_code_350e9be37c2943ab9a28489e74a58554-8)  | <span id="rest_code_350e9be37c2943ab9a28489e74a58554-8"></span><span class="w">`    `</span><span class="p p-Indicator">`-`</span><span class="w">` `</span><span class="nt">`name`</span><span class="p">`:`</span><span class="w">` `</span><span class="l l-Scalar l-Scalar-Plain">`Check out`</span>` `                                                                                                                                           |
| [](automating-nikola-rebuilds-with-github-actions.html#rest_code_350e9be37c2943ab9a28489e74a58554-9)  | <span id="rest_code_350e9be37c2943ab9a28489e74a58554-9"></span><span class="w">`      `</span><span class="nt">`uses`</span><span class="p">`:`</span><span class="w">` `</span><span class="l l-Scalar l-Scalar-Plain">`actions/checkout@v2`</span>` `                                                                                                                                                                                               |
| [](automating-nikola-rebuilds-with-github-actions.html#rest_code_350e9be37c2943ab9a28489e74a58554-10) | <span id="rest_code_350e9be37c2943ab9a28489e74a58554-10"></span><span class="w">`    `</span><span class="p p-Indicator">`-`</span><span class="w">` `</span><span class="nt">`name`</span><span class="p">`:`</span><span class="w">` `</span><span class="l l-Scalar l-Scalar-Plain">`Build and Deploy Nikola`</span>` `                                                                                                                            |
| [](automating-nikola-rebuilds-with-github-actions.html#rest_code_350e9be37c2943ab9a28489e74a58554-11) | <span id="rest_code_350e9be37c2943ab9a28489e74a58554-11"></span><span class="w">`      `</span><span class="nt">`uses`</span><span class="p">`:`</span><span class="w">` `</span><span class="l l-Scalar l-Scalar-Plain">`getnikola/nikola-action@v2`</span>` `                                                                                                                                                                                       |

There might be a newer version of the action available, you can check
the latest version in the
<a href="https://github.com/getnikola/nikola-action"
class="reference external">getnikola/nikola-action repo on GitHub</a>.

By default, the action will install the latest stable release of
`Nikola[extras]`. If you want to use the bleeding-edge version from
`master`, or want to install some extra dependencies, you can provide a
`requirements.txt` file in the repository.

Commit everything to GitHub:

``` code
git add .
git commit -am "Automate builds with GitHub Actions"
```

Hopefully, GitHub will build your site and deploy. Check the Actions tab
in your repository or your e-mail for build details. If there are any
errors, make sure you followed this guide to the letter.

-   <a href="../categories/automation.html" class="tag p-category"
    rel="tag">automation</a>
-   <a href="../categories/github.html" class="tag p-category"
    rel="tag">GitHub</a>
-   <a href="../categories/github-actions.html" class="tag p-category"
    rel="tag">GitHub Actions</a>
-   <a href="../categories/tips.html" class="tag p-category"
    rel="tag">tips</a>

<!-- -->

-   <a href="nikola-v804-is-out.html" rel="prev"
    title="Nikola v8.0.4 is out!">Previous post</a>
-   <a href="nikola-v810-is-out.html" rel="next"
    title="Nikola v8.1.0 is out!">Next post</a>

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
