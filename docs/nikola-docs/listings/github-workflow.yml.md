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
    data-cfemail="bfd1d6d4d0d3deffd3d6dddacdde91dcd7decb">[email protected]</span>)</a>
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

-   <a href="github-workflow.yml" id="sourcelink"
    class="nav-link">Source</a>

-   [listings](.)
-   github-workflow.yml

# github-workflow.yml <span class="small">[(Source)](github-workflow.yml)</span>

|                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [](#listingsgithub-workflowyml-1)  | <span id="listingsgithub-workflowyml-1"></span><span class="nt">`on`</span><span class="p">`:`</span><span class="w">` `</span><span class="p p-Indicator">`[`</span><span class="nv">`push`</span><span class="p p-Indicator">`]`</span>` `                                                                                                                                                                                          |
| [](#listingsgithub-workflowyml-2)  | <span id="listingsgithub-workflowyml-2"></span>` `                                                                                                                                                                                                                                                                                                                                                                                    |
| [](#listingsgithub-workflowyml-3)  | <span id="listingsgithub-workflowyml-3"></span><span class="nt">`jobs`</span><span class="p">`:`</span>` `                                                                                                                                                                                                                                                                                                                            |
| [](#listingsgithub-workflowyml-4)  | <span id="listingsgithub-workflowyml-4"></span><span class="w">`  `</span><span class="nt">`nikola_build`</span><span class="p">`:`</span>` `                                                                                                                                                                                                                                                                                         |
| [](#listingsgithub-workflowyml-5)  | <span id="listingsgithub-workflowyml-5"></span><span class="w">`    `</span><span class="nt">`runs-on`</span><span class="p">`:`</span><span class="w">` `</span><span class="l l-Scalar l-Scalar-Plain">`ubuntu-latest`</span>` `                                                                                                                                                                                                    |
| [](#listingsgithub-workflowyml-6)  | <span id="listingsgithub-workflowyml-6"></span><span class="w">`    `</span><span class="nt">`name`</span><span class="p">`:`</span><span class="w">` `</span><span class="s">`'Deploy`</span><span class="nv">` `</span><span class="s">`Nikola`</span><span class="nv">` `</span><span class="s">`to`</span><span class="nv">` `</span><span class="s">`GitHub`</span><span class="nv">` `</span><span class="s">`Pages'`</span>` ` |
| [](#listingsgithub-workflowyml-7)  | <span id="listingsgithub-workflowyml-7"></span><span class="w">`    `</span><span class="nt">`steps`</span><span class="p">`:`</span>` `                                                                                                                                                                                                                                                                                              |
| [](#listingsgithub-workflowyml-8)  | <span id="listingsgithub-workflowyml-8"></span><span class="w">`    `</span><span class="p p-Indicator">`-`</span><span class="w">` `</span><span class="nt">`name`</span><span class="p">`:`</span><span class="w">` `</span><span class="l l-Scalar l-Scalar-Plain">`Check out`</span>` `                                                                                                                                           |
| [](#listingsgithub-workflowyml-9)  | <span id="listingsgithub-workflowyml-9"></span><span class="w">`      `</span><span class="nt">`uses`</span><span class="p">`:`</span><span class="w">` `</span><span class="l l-Scalar l-Scalar-Plain">`actions/checkout@v2`</span>` `                                                                                                                                                                                               |
| [](#listingsgithub-workflowyml-10) | <span id="listingsgithub-workflowyml-10"></span><span class="w">`    `</span><span class="p p-Indicator">`-`</span><span class="w">` `</span><span class="nt">`name`</span><span class="p">`:`</span><span class="w">` `</span><span class="l l-Scalar l-Scalar-Plain">`Build and Deploy Nikola`</span>` `                                                                                                                            |
| [](#listingsgithub-workflowyml-11) | <span id="listingsgithub-workflowyml-11"></span><span class="w">`      `</span><span class="nt">`uses`</span><span class="p">`:`</span><span class="w">` `</span><span class="l l-Scalar l-Scalar-Plain">`getnikola/nikola-action@v2`</span>` `                                                                                                                                                                                       |

Contents © 2012–2025 [Roberto Alsina and the Nikola
contributors](../contact.html)  \|  Powered by Nikola itself  \|  
[Follow Nikola on
Twitter](https://twitter.com/intent/user?screen_name=GetNikola)  \|  Theme
is [Cerulean](https://bootswatch.com/cerulean/)

<a href="https://statcounter.com/tumblr/" target="_blank" title="tumblr
statistics"><img src="https://c.statcounter.com/7842875/0/3421486a/1/"
class="statcounter" alt="tumblr statistics" /></a>
