Setting up a Nikola site is really easy. You will need a few minutes’
time and a Python 3 interpreter.

## Step 1. Install Nikola

Nikola is free open-source software, under the [MIT
license](/license.html).

-   <a href="#installAny" class="btn btn-primary"><em></em> Any OS</a>
-   <a href="#installWindows" class="btn btn-secondary"><em></em>
    Windows</a>
-   <a href="#installMac" class="btn btn-secondary"><em></em> macOS</a>
-   <a href="#installLinux" class="btn btn-secondary"><em></em> Linux <span
    class="small">packages</span></a>

<!-- -->

-   <a href="#installGitHub" class="btn btn-dark"><em></em> GitHub <span
    class="small">bleeding edge</span></a>
-   <a href="#installCExtensions" class="btn btn-secondary"><em></em> C
    extension issues</a>
-   <a href="#installDocker" class="btn btn-secondary"><em></em> Docker</a>

###  Any OS/general instructions

The best way to install Nikola is to use `pip` in a virtual environment.
We recommend installing the `"Nikola[extras]"` distribution to access
all built-in Nikola features. **Follow instructions
<span class="d-print-none d-none d-md-inline">on the
right</span><span class="d-none">/</span><span class="d-inline d-md-none">below</span>.**

If you’ve never worked with Python virtual environments, you might want
to read [Python Virtual Environments in Five
Minutes](https://chriswarrick.com/blog/2018/09/04/python-virtual-environments/).

Installing `"Nikola[extras]"` as explained above installs software that
Nikola *might* use. This is quite a lot of software. Alternatively, you
can drop the `[extras]` specifier and install such software later, as
you find out you want it. Nikola makes this reasonably convenient, as
explained [below](#extrasExplained).

We don’t recommend using Pipenv, Poetry, or PDM to manage Nikola. Those
package managers are aimed at people developing software using Python,
not running software written in Python, so using them will not offer a
good user experience.

###  Windows support

Nikola supports Windows! Here are a few things to keep in mind:

1.  If you are installing from Git, it is recommended to enable
    Developer Mode in Windows and run
    `git config --global core.symlinks true` before cloning the Nikola
    repo (recent versions of the git installer offer to do this for
    you). Nikola will work either way, but if you don’t enable symlinks,
    Nikola will have to fix them, which changes the working tree.
2.  Nikola can work with both the Windows Python install and WSL. Both
    setups are fully supported and stable, and all Nikola features
    should work in both setups.
3.  Windows has some differences over POSIX, which may cause some
    features to work incorrectly under Windows. If any problems occur,
    please do not hesitate to report them. Some of the differences that
    can cause problems include:
    -   `\` as path separator (instead of `/`)
    -   the concept of HDD partitions and letters (instead of seamless
        mounting under one root)
    -   some characters in paths are disallowed
    -   CR+LF (aka `\r\n`) as the line separator (instead of LF `\n`)
    -   Certain OS and Python features being unavailable under Windows
4.  We run our test suite on Windows (as well as Linux and macOS), but
    not all Windows-specific bugs might be caught by it.

###  Installing on macOS

Installing Nikola on macOS is easy. You can use Homebrew, MacPorts,
Fink, or the Apple-provided Python 3 interpreter.

We recommend using [Homebrew](http://brew.sh/). After you install it,
you can run `brew install python3` to install Python 3. You can then
follow the instructions <span class="d-print-none d-none d-md-inline">on
the
right</span><span class="d-none">/</span><span class="d-inline d-md-none">below</span>.
Your venvs may require
[fixing](https://github.com/Kwpolska/scripts/blob/master/fix-venvs.sh),
[reconfiguration](https://github.com/Kwpolska/scripts/blob/master/venv-set-opt-link.sh)
or recreating if you update Python.

Other package/port managers, such as MacPorts or Fink may be used if you
prefer them and have those installed. Make sure to use only one manager
to avoid conflicts.

The Apple-provided Python 3 will work too. Starting with Catalina,
Python 3 is available, and it seems to be updated reasonably often. You
might need to install Xcode Command Line Tools
(`xcode-select --install`), or possibly the full Xcode environment (from
the App Store), to use it.

###  Linux packages

Nikola is packaged for some Linux distributions, you may get that
instead of installing via `pip` (which is the recommended way). Keep in
mind that those packages might be **outdated** and that we don’t support
versions that are too old. Proceed with care!

-   Arch Linux:
    <a href="https://www.archlinux.org/packages/community/any/nikola/"
    class="reference external">nikola</a> (\[community\] repo) for the
    latest stable release or
    <a href="https://aur.archlinux.org/packages/nikola-git/"
    class="reference external">nikola-git</a> for the GitHub master
    (AUR)
-   Gentoo:
    <a href="https://packages.gentoo.org/package/www-apps/nikola"
    class="reference external">www-apps/nikola</a>
-   The Ubuntu package is **broken and outdated**. The Nikola developers
    strongly discourage using it and do not support this method of
    install — please install via pip instead.

###  GitHub (bleeding edge) installs

You can also install Nikola from GitHub. This will get you the code that
is still under development. It probably has bugs, but there are often
new features or bugfixes. Start by creating and activating a virtual
environment.

``` gs-console
$ pip install "git+https://github.com/getnikola/nikola#egg=Nikola[extras]"
```

For development work, or if you otherwise want a local clone of the
repository, use this:

``` gs-console
$ git clone https://github.com/getnikola/nikola  # wherever you store your projects; you may also use a ssh remote address
$ cd nikola
$ pip install -e ".[extras]"
```

###  Issues with compiling C extensions (Python.h, lxml, Pillow)

You should not need to compile any C extension modules to run Nikola.
Both lxml and Pillow have pre-compiled wheels available for Windows,
macOS and Linux (compatible with *all* distributions).

However, if pip still attempts to compile those packages, you may need
to do the following:

1.  Upgrade pip, setuptools, and wheel:
    `pip install -U pip setuptools wheel` (on Windows, use `py -m pip`)
2.  Wait a few days or try installing an older version of lxml/Pillow
    (wheels are not always available at the time of release)
3.  Install manually. **Do this only if all other things fail.** Here
    are some tips:
    -   If you are getting errors about missing `Python.h`, you need to
        install development packages for Python (eg. python3-dev or
        python3-devel).
    -   Install libxml2, libxslt, zlib and their development headers.
    -   Use your package manager’s option to install build dependencies
        for their lxml and Pillow packages.
    -   If you run out of RAM during the install (gcc/cc1 are killed),
        use a swap file.

###  Docker (unofficial)

There are unofficial [Docker images by Olaf
Meeuwissen](https://gitlab.com/paddy-hack/nikola) (based on Alpine
Linux) available:

``` gs-console
$ docker pull registry.gitlab.com/paddy-hack/nikola
$ docker run --rm -it -v $PWD:/site -w /site -u $(id -u):$(id -g) \
    registry.gitlab.com/paddy-hack/nikola nikola init .
```

Check out [the image’s README](https://gitlab.com/paddy-hack/nikola) for
details and usage hints.

There is also a [Dockerfile by Rob
Brewer](https://github.com/rbrewer123/docker_nikola), based on Arch
Linux and official Arch packages.

### Other options

There are also [Snapcraft](https://snapcraft.io/) packages
(`snap install nikola --edge`), but those inherit many limitations of
the platform and are not recommended for daily use.

### What is this \[extras\]?

The easy way to install Nikola is to include, in the installation, a lot
of additional software that you may or may not need. This is what
happens when installing `Nikola[extras]` as mentioned above, and is
recommended for casual and first-time users.

Maybe you have reason to be careful about which packages you download
and install. If so, you can choose to install plain `Nikola` without
`[extras]`. This will get you going. When, later, you ask Nikola to
provide functionality that needs a dependency (i.e., additional software
on which that Nikola functionality depends), and that dependency has not
yet been installed, you will receive a helpful error message telling you
what is missing. E.g., when using `nikola auto --browser` for the first
time, you might see error message text telling you `aiohttp` and
`watchdog` are needed to proceed:

``` gs-console
In order to use the "auto" command, you must install the "aiohttp" and "watchdog" Python packages.
Exiting due to missing dependencies.
```

In this situation, run `pip install aiohttp watchdog` and then repeat
your original `nikola auto --browser`.

#### Install on Linux/\*nix/macOS

``` gs-console
First, make sure Python 3 is installed.
On macOS, we recommend getting Python from Homebrew.
On Debian/Ubuntu, you also need the python3-venv package.

When you are done installing, run:
$ python3 -m venv nikola-env
$ cd nikola-env
$ bin/python -m pip install -U pip setuptools wheel
$ bin/python -m pip install -U "Nikola[extras]"
...snip...
Successfully installed Nikola

You can now use Nikola by launching the script directly:
$ bin/nikola

Or you can activate the environment before working
with Nikola and use the nikola command:
$ source bin/activate
$ nikola
```

#### Install on Windows

``` gs-console
First, install Python 3. Then you can run:
> py -m venv nikola-env
> cd nikola-env
> Scripts\python -m pip install -U pip setuptools wheel
> Scripts\python -m pip install -U "Nikola[extras]"
...snip...
Successfully installed Nikola

You can now use Nikola by launching the script directly:
> Scripts\nikola

Or you can activate the environment before working
with Nikola and use the nikola command:
> Scripts\activate
> nikola
```

## Step 2. Initialize a site

After installing Nikola, you should create a site. A site is a
collection of all assets needed to create your site: configuration,
posts, pages, images, and all other files and customizations. This is
the important data, so put it where you put that kind of things.

To create a site, you need to run `nikola init --demo <directory_name>`.
A friendly wizard will be launched, letting you configure your site
easily. The `--demo` option is used to fill your site with some demo
content. (If you do not want the wizard, use the `--quiet` argument.)

If you’re using a **virtual environment**, you should use the path to
the Nikola script in your virtual environment
(`bin/nikola `<span class="gs-input">`init`</span> on \*nix,
`Scripts\nikola `<span class="gs-input">`init`</span> on Windows), or
alternatively, you can activate the environment (`source bin/activate`
on \*nix, `Scripts\activate` on Windows) and use the `nikola` command
directly.

**Do not** store your site inside your virtual environment. Virtual
environments are meant to be ephemeral (you should be able to delete and
recreate one at any time).

``` gs-console
$ nikola init --demo my_first_site
Creating Nikola Site
====================

This is Nikola.  We will now ask you a few easy questions about your new site.
If you do not want to answer and want to go with the defaults instead, simply restart with the `-q` parameter.
--- Questions about the site ---
Site title [My Nikola Site]: My First Nikola Site
...a couple more questions...

That's it, Nikola is now configured.  Make sure to edit conf.py to your liking.
If you are looking for themes and addons, check out https://themes.getnikola.com/ and https://plugins.getnikola.com/.
Have fun!
INFO: init: A new site with example data has been created at my_first_site.
INFO: init: See README.txt in that folder for more information.
```

## Step 3. Build your site

You can now build the site you created. Just run `nikola build` inside
your site directory. The output directory will then be filled with the
contents of your site, which is now **ready to deploy**.

``` gs-console
$ cd my_first_site
$ nikola build
Scanning posts....done!
.  render_galleries:output/galleries
.  render_galleries:output/galleries/demo
.  render_galleries:output/galleries/index.html
.  render_galleries:output/galleries/rss.xml
.  render_galleries:output/galleries/demo/tesla4_lg.thumbnail.jpg
...and many more files in between...
.  render_tags:output/categories/cat_nikola.xml
.  render_pages:output/stories/social_buttons/index.html
.  render_pages:output/stories/quickref/index.html
.  render_tags:output/categories/python.xml
.  generate_rss:output/rss.xml
.  render_pages:output/stories/a-study-in-scarlet/index.html
.  sitemap:output/sitemap.xml
.  sitemap:output/sitemapindex.xml
.  robots_file:output/robots.txt
```

## Step 4. Write your first post

Your site currently contains demo content — that is, some Nikola
documentation, a demo gallery and listing, and a blog post welcoming
you.

You should make it more interesting and personal. Write your own post!

To do that, you can just use `nikola new_post -e`. (The `-e` option will
open the post in your text editor of choice; many more options are
available)

The command will create the file for you in the right place, with the
metadata headers and a writing prompt.

By default, Nikola creates posts in reStructuredText. You can read [the
reStructuredText Primer](https://getnikola.com/quickstart.html) to get
accustomed to the syntax.

If you prefer Markdown, it is also available and configured by default:
run `nikola new_post -e -f markdown` to create a new Markdown post.

You can also use many other input formats; to do this, your site needs
[some special configuration](#markup).

#### What if I don’t want a blog?

If you want a static site that does not have any blog-related elements,
see our [Creating a Site (Not a Blog) with
Nikola](https://getnikola.com/creating-a-site-not-a-blog-with-nikola.html)
guide.

``` gs-console
$ nikola new_post -e
Creating New Post
-----------------

Title: My First Blog Post!
Scanning posts....done!
INFO: new_post: Your post's text is at: posts/my-first-blog-post.rst
```

## Step 5. Rebuild your site

When you’re done writing your post, you must rebuild your site to make
it visible on your site. Run `nikola build` again.

Note that the list of files is much **shorter** now: Nikola does [fast,
incremental rebuilds](/features/fast.html) (courtesy of
[doit](http://pydoit.org/)). Nikola built only the pages for this post,
the indexes, the feeds, and the previous post (to add a *Next post*
navigation button). All the demo pages and assets were left
**untouched**, saving you time and resources (it does not have to work
on building some larger things, and `rsync` will not have to upload
everything)

``` gs-console
$ nikola build
Scanning posts....done!
.  render_posts:timeline_changes
.  render_posts:cache/posts/my-first-blog-post.html
.  render_sources:output/posts/my-first-blog-post/index.rst
.  render_archive:output/2018/index.html
.  render_archive:output/archive.html
.  render_indexes:output/index.html
.  render_pages:output/posts/welcome-to-nikola/index.html
.  generate_rss:output/rss.xml
.  render_pages:output/posts/my-first-blog-post/index.html
.  sitemap:output/sitemap.xml
.  sitemap:output/sitemapindex.xml
```

## Step 6. Start the development server

You’re done! You just created a Nikola site, wrote your first post and
built your site. Congratulations!

Run `nikola serve --browser` to start the development server and open
your site in a web browser. Press <span class="kbd">Ctrl+C</span> to
stop the server.

You can also use [a server with automatic rebuilds](/features/auto.html)
by running `nikola auto --browser`. Note that both servers should be
used for development only; use [other deployment solutions](#deploy)
instead.

``` gs-console
$ nikola serve --browser
INFO: serve: Serving HTTP on 0.0.0.0 port 8000...
INFO: serve: Opening http://0.0.0.0:8000/ in the default web browser...
```

## Next steps

### Explore!

-   Check out the demo content installed with the site to see what
    Nikola can do — and that’s not all it has to offer!
-   Find out what other commands are available by using `nikola help`.
-   Read the **[Nikola Handbook](/handbook.html)** to learn more about
    Nikola.
-   Edit the `conf.py` file to your liking.
-   Check out [themes](https://themes.getnikola.com/) and
    [plugins](https://plugins.getnikola.com/) for Nikola, or write your
    own.

### Configuring other markup formats

Input formats other than reStructuredText, Markdown, and raw HTML need
some configuration, which has been described in [The Nikola
Handbook](/handbook.html#configuring-other-input-formats).

### Removing demo content

When you’re done exploring, you should remove the demo content before
deploying it to your server. Remove the demo stories, welcome post, demo
gallery and listing manually. Run `nikola build` to make them disappear
from the archives. Note that this is not enough; you need to delete the
now orphaned files. Nikola can do it for you — run
`nikola check --clean-files`. Note that this command will delete all
files in the output directory it does not know about, which can be
dangerous — please back up your files or find out what will be deleted
by using `nikola orphans`.

*Hint:* files in the `files/` directory are copied to the output
directory as-is.

### Deployment

The development server (`nikola serve`) should not be used outside of
your local network. Instead, you should use a more serious web server.
Nikola sites work on any web server which can host html files. You can
use shared hosting, your own server (VPS/dedicated), GitHub Pages, or
any other service that lets you host a website. For more details on
deployment and related configuration, see the
[Deployment](/handbook.html#deployment) section in the Handbook.
