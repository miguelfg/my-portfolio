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
    <a href="#" class="dropdown-item active">Extending <span
    class="sr-only">(active)</span></a>
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
    data-cfemail="036d6a686c6f62436f6a616671622d606b6277">[email protected]</span>)</a>
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

-   <a href="extending.rst" id="sourcelink" class="nav-link">Page Source</a>

# <a href="#" class="u-url">Extending Nikola</a>

Version<span class="colon">:</span>  
8.3.2

Author<span class="colon">:</span>  
Roberto Alsina \<<a
href="/cdn-cgi/l/email-protection#2351424f504a4d42634d46574e424d42444651500d404c4e0d4251"
class="reference external"><span class="__cf_email__"
data-cfemail="bbc9dad7c8d2d5dafbd5decfd6dad5dadcdec9c895d8d4d695dac9">[email protected]</span></a>\>

<a href="extending.html#top" class="reference internal">Contents</a>

-   <a href="extending.html#available-plugin-categories" id="toc-entry-1"
    class="reference internal">Available Plugin Categories</a>

    -   <a href="extending.html#command-plugins" id="toc-entry-2"
        class="reference internal">Command Plugins</a>

    -   <a href="extending.html#templatesystem-plugins" id="toc-entry-3"
        class="reference internal">TemplateSystem Plugins</a>

    -   <a href="extending.html#task-plugins" id="toc-entry-4"
        class="reference internal">Task Plugins</a>

    -   <a href="extending.html#pagecompiler-plugins" id="toc-entry-5"
        class="reference internal">PageCompiler Plugins</a>

    -   <a href="extending.html#metadataextractor-plugins" id="toc-entry-6"
        class="reference internal">MetadataExtractor Plugins</a>

    -   <a href="extending.html#restextension-plugins" id="toc-entry-7"
        class="reference internal">RestExtension Plugins</a>

    -   <a href="extending.html#markdownextension-plugins" id="toc-entry-8"
        class="reference internal">MarkdownExtension Plugins</a>

    -   <a href="extending.html#signalhandler-plugins" id="toc-entry-9"
        class="reference internal">SignalHandler Plugins</a>

    -   <a href="extending.html#configplugin-plugins" id="toc-entry-10"
        class="reference internal">ConfigPlugin Plugins</a>

    -   <a href="extending.html#commentsystem-plugins" id="toc-entry-11"
        class="reference internal">CommentSystem Plugins</a>

    -   <a href="extending.html#shortcode-plugins" id="toc-entry-12"
        class="reference internal">Shortcode Plugins</a>

    -   <a href="extending.html#postscanner-plugins" id="toc-entry-13"
        class="reference internal">PostScanner Plugins</a>

-   <a href="extending.html#plugin-index" id="toc-entry-14"
    class="reference internal">Plugin Index</a>

-   <a href="extending.html#path-link-resolution-mechanism"
    id="toc-entry-15" class="reference internal">Path/Link Resolution
    Mechanism</a>

-   <a href="extending.html#template-hooks" id="toc-entry-16"
    class="reference internal">Template Hooks</a>

-   <a href="extending.html#shortcodes" id="toc-entry-17"
    class="reference internal">Shortcodes</a>

    -   <a href="extending.html#template-based-shortcodes" id="toc-entry-18"
        class="reference internal">Template-based Shortcodes</a>

-   <a href="extending.html#state-and-cache" id="toc-entry-19"
    class="reference internal">State and Cache</a>

-   <a href="extending.html#logging" id="toc-entry-20"
    class="reference internal">Logging</a>

-   <a href="extending.html#template-and-dependency-injection"
    id="toc-entry-21" class="reference internal">Template and Dependency
    Injection</a>

Nikola is extensible. Almost all its functionality is based on plugins,
and you can add your own or replace the provided ones.

Plugins consist of a metadata file (with `.plugin` extension) and a
Python module (a `.py` file) or package (a folder containing a
`__init__.py` file.

To use a plugin in your site, you just have to put it in a `plugins`
folder in your site.

Plugins come in various flavours, aimed at extending different aspects
of Nikola.

## <a href="extending.html#toc-entry-1" class="toc-backref"
role="doc-backlink">Available Plugin Categories</a><a href="#available-plugin-categories" class="headerlink"
title="Permalink to this heading">¶</a>

### <a href="extending.html#toc-entry-2" class="toc-backref"
role="doc-backlink">Command Plugins</a><a href="#command-plugins" class="headerlink"
title="Permalink to this heading">¶</a>

When you run `nikola `<span class="pre">`--help`</span> you will see
something like this:

``` code
$ nikola help
Nikola is a tool to create static websites and blogs.
For full documentation and more information, please visit https://getnikola.com/

Available commands:
  nikola auto                 builds and serves a site; automatically detects site changes,
                              rebuilds, and optionally refreshes a browser
  nikola build                run tasks
  nikola check                check links and files in the generated site
  nikola clean                clean action / remove targets
  nikola console              start an interactive Python console with access to your site
  nikola default_config       Print the default Nikola configuration.
  nikola deploy               deploy the site
  nikola dumpdb               dump dependency DB
  nikola forget               clear successful run status from internal DB
  nikola github_deploy        deploy the site to GitHub Pages
  nikola help                 show help
  nikola ignore               ignore task (skip) on subsequent runs
  nikola import_wordpress     import a WordPress dump
  nikola info                 show info about a task
  nikola init                 create a Nikola site in the specified folder
  nikola list                 list tasks from dodo file
  nikola new_page             create a new page in the site
  nikola new_post             create a new blog post or site page
  nikola orphans              list all orphans
  nikola plugin               manage plugins
  nikola reset-dep            recompute and save the state of file dependencies
                              without executing actions
  nikola rst2html             compile reStructuredText to HTML files
  nikola serve                start the test webserver
  nikola status               display site status
  nikola strace               use strace to list file_deps and targets
  nikola subtheme             given a swatch name from bootswatch.com or hackerthemes.com
                              and a parent theme, creates a custom theme
  nikola tabcompletion        generate script for tab-completion
  nikola theme                manage themes
  nikola version              print the Nikola version number

  nikola help                 show help / reference
  nikola help <command>       show command usage
  nikola help <task-name>     show task usage
```

That will give you a list of all available commands in your version of
Nikola. Each and every one of those is a plugin. Let's look at a typical
example:

First, the `serve.plugin` file:

``` code
[Core]
Name = serve
Module = serve

[Documentation]
Author = Roberto Alsina
Version = 0.1
Website = https://getnikola.com
Description = Start test server.
```

Note

If you want to publish your plugin on the Plugin Index,
<a href="https://github.com/getnikola/plugins/blob/master/README.md"
class="reference external">read the docs for the Index</a> (and the
.plugin file examples and explanations).

For your own plugin, just change the values in a sensible way. The
`Module` will be used to find the matching Python module, in this case
`serve.py`, from which this is the interesting bit:

``` code
from nikola.plugin_categories import Command

# You have to inherit Command for this to be a
# command plugin:

class CommandServe(Command):
    """Start test server."""

    name = "serve"
    doc_usage = "[options]"
    doc_purpose = "start the test webserver"

    cmd_options = (
        {
            'name': 'port',
            'short': 'p',
            'long': 'port',
            'default': 8000,
            'type': int,
            'help': 'Port number',
        },
        {
            'name': 'address',
            'short': 'a',
            'long': '--address',
            'type': str,
            'default': '127.0.0.1',
            'help': 'Address to bind',
        },
    )

    def _execute(self, options, args):
        """Start test server."""
        out_dir = self.site.config['OUTPUT_FOLDER']
        if not os.path.isdir(out_dir):
            print("Error: Missing '{0}' folder?".format(out_dir))
            return 1  # Exit code on failure. (return 0 not necessary)
        else:
            os.chdir(out_dir)
            httpd = HTTPServer((options['address'], options['port']),
                            OurHTTPRequestHandler)
            sa = httpd.socket.getsockname()
            print("Serving HTTP on", sa[0], "port", sa[1], "...")
            httpd.serve_forever()
```

As mentioned above, a plugin can have options, which the user can see by
doing `nikola help command` and can later use, for example:

``` code
$ nikola help serve
nikola serve [options]
start the test webserver

Options:
    -p ARG, --port=ARG
        Port number [default: 8000]
    -a ARG, --address=ARG
        Address to bind [default: 127.0.0.1]

$ nikola serve -p 9000
Serving HTTP on 127.0.0.1 port 9000 ...
```

So, what can you do with commands? Well, anything you want, really. I
have implemented a sort of planet using it. So, be creative, and if you
do something interesting, let me know ;-)

### <a href="extending.html#toc-entry-3" class="toc-backref"
role="doc-backlink">TemplateSystem Plugins</a><a href="#templatesystem-plugins" class="headerlink"
title="Permalink to this heading">¶</a>

Nikola supports Mako and Jinja2. If you prefer some other templating
system, then you will have to write a `TemplateSystem` plugin. Here's
how they work. First, you have to create a `.plugin` file. Here's the
one for the Mako plugin:

``` code
[Core]
Name = mako
Module = mako

[Documentation]
Author = Roberto Alsina
Version = 0.1
Website = https://getnikola.com
Description = Support for Mako templates.
```

Note

If you want to publish your plugin on the Plugin Index,
<a href="https://github.com/getnikola/plugins/blob/master/README.md"
class="reference external">read the docs for the Index</a> (and the
.plugin file examples and explanations).

You will have to replace "mako" with your template system's name, and
other data in the obvious ways.

The "Module" option is the name of the module, which has to look
something like this, a stub for a hypothetical system called
"Templater":

``` code
from nikola.plugin_categories import TemplateSystem

# You have to inherit TemplateSystem

class TemplaterTemplates(TemplateSystem):
    """Wrapper for Templater templates."""

    # name has to match Name in the .plugin file
    name = "templater"

    # A list of directories where the templates will be
    # located. Most template systems have some sort of
    # template loading tool that can use this.
    def set_directories(self, directories, cache_folder):
        """Sets the list of folders where templates are located and cache."""
        pass

    # You *must* implement this, even if to return []
    # It should return a list of all the files that,
    # when changed, may affect the template's output.
    # usually this involves template inheritance and
    # inclusion.
    def template_deps(self, template_name):
        """Returns filenames which are dependencies for a template."""
        return []

    def render_template(self, template_name, output_name, context):
        """Renders template to a file using context.

        This must save the data to output_name *and* return it
        so that the caller may do additional processing.
        """
        pass

    # The method that does the actual rendering.
    # template_name is the name of the template file,
    # context is a dictionary containing the data the template
    # uses for rendering.
    def render_template_to_string(self, template, context):
        """Renders template to a string using context. """
        pass

    def inject_directory(self, directory):
        """Injects the directory with the lowest priority in the
        template search mechanism."""
        pass
```

You can see a real example in <a
href="https://github.com/getnikola/nikola/blob/master/nikola/plugins/template/jinja.py"
class="reference external">the Jinja plugin</a>

### <a href="extending.html#toc-entry-4" class="toc-backref"
role="doc-backlink">Task Plugins</a><a href="#task-plugins" class="headerlink"
title="Permalink to this heading">¶</a>

If you want to do something that depends on the data in your site, you
probably want to do a `Task` plugin, which will make it be part of the
`nikola build` command. These are the currently available tasks, all
provided by plugins:

Other Tasks

There are also `LateTask` plugins, which are executed later, and
`TaskMultiplier` plugins that take a task and create more tasks out of
it.

``` code
$ nikola list
Scanning posts....done!
copy_assets
copy_files
create_bundles
post_render
redirect
render_galleries
render_listings
render_pages
render_posts
render_site
render_sources
render_taxonomies
robots_file
scale_images
sitemap
```

These have access to the `site` object which contains your timeline and
your configuration.

The critical bit of Task plugins is their `gen_tasks` method, which
`yields`
<a href="https://pydoit.org/tasks.html" class="reference external">doit
tasks</a>.

The details of how to handle dependencies, etc., are a bit too much for
this document, so I'll just leave you with an example, the `copy_assets`
task. First the `task_copy_assets.plugin` file, which you should copy
and edit in the logical ways:

``` code
[Core]
Name = copy_assets
Module = task_copy_assets

[Documentation]
Author = Roberto Alsina
Version = 0.1
Website = https://getnikola.com
Description = Copy theme assets into output.
```

Note

If you want to publish your plugin on the Plugin Index,
<a href="https://github.com/getnikola/plugins/blob/master/README.md"
class="reference external">read the docs for the Index</a> (and the
.plugin file examples and explanations).

And the `task_copy_assets.py` file, in its entirety:

``` code
import os

from nikola.plugin_categories import Task
from nikola import utils

# Have to inherit Task to be a task plugin
class CopyAssets(Task):
    """Copy theme assets into output."""

    name = "copy_assets"

    # This yields the tasks
    def gen_tasks(self):
        """Create tasks to copy the assets of the whole theme chain.

        If a file is present on two themes, use the version
        from the "youngest" theme.
        """

        # I put all the configurations and data the plugin uses
        # in a dictionary because utils.config_changed will
        # make it so that if these change, this task will be
        # marked out of date, and run again.

        kw = {
            "themes": self.site.THEMES,
            "output_folder": self.site.config['OUTPUT_FOLDER'],
            "filters": self.site.config['FILTERS'],
        }

        tasks = {}
        for theme_name in kw['themes']:
            src = os.path.join(utils.get_theme_path(theme_name), 'assets')
            dst = os.path.join(kw['output_folder'], 'assets')
            for task in utils.copy_tree(src, dst):
                if task['name'] in tasks:
                    continue
                tasks[task['name']] = task
                task['uptodate'] = task.get('uptodate', []) + \
                    [utils.config_changed(kw)]
                task['basename'] = self.name
                # If your task generates files, please do this.
                yield utils.apply_filters(task, kw['filters'])
```

### <a href="extending.html#toc-entry-5" class="toc-backref"
role="doc-backlink">PageCompiler Plugins</a><a href="#pagecompiler-plugins" class="headerlink"
title="Permalink to this heading">¶</a>

These plugins implement markup languages, they take sources for posts or
pages and create HTML or other output files. A good example is
<a href="https://github.com/getnikola/plugins/tree/master/v8/misaka"
class="reference external">the misaka plugin</a> or the built-in
compiler plugins.

They must provide:

`compile`  
Function that builds a file.

`create_post`  
Function that creates an empty file with some metadata in it.

If the compiler produces something other than HTML files, it should also
implement `extension` which returns the preferred extension for the
output file.

These plugins can also be used to extract metadata from a file. To do
so, the plugin must set `supports_metadata` to `True` and implement
`read_metadata` that will return a dict containing the metadata
contained in the file. Optionally, it may list `metadata_conditions`
(see <a href="extending.html#metadataextractor-plugins"
class="reference internal">MetadataExtractor Plugins</a> below)

### <a href="extending.html#toc-entry-6" class="toc-backref"
role="doc-backlink">MetadataExtractor Plugins</a><a href="#metadataextractor-plugins" class="headerlink"
title="Permalink to this heading">¶</a>

Plugins that extract metadata from posts. If they are based on post
content, they must implement `_extract_metadata_from_text` (takes source
of a post returns a dict of metadata). They may also implement
`split_metadata_from_text`, `extract_text`. If they are based on
filenames, they only need `extract_filename`. If `support_write` is set
to True, `write_metadata` must be implemented.

Every extractor must be configured properly. The `name`, `source` (from
the `MetaSource` enum in `metadata_extractors`) and `priority`
(`MetaPriority`) fields are mandatory. There might also be a list of
`conditions` (tuples of `MetaCondition, arg`), used to check if an
extractor can provide metadata, a compiled regular expression used to
split metadata (`split_metadata_re`, may be `None`, used by default
`split_metadata_from_text`), a list of `requirements` (3-tuples: import
name, pip name, friendly name), `map_from` (name of `METADATA_MAPPING`
to use, if any) and `supports_write` (whether the extractor supports
writing metadata in the desired format).

For more details, see the definition in `plugin_categories.py` and
default extractors in `metadata_extractors.py`.

### <a href="extending.html#toc-entry-7" class="toc-backref"
role="doc-backlink">RestExtension Plugins</a><a href="#restextension-plugins" class="headerlink"
title="Permalink to this heading">¶</a>

Implement directives for reStructuredText, see <a
href="https://github.com/getnikola/nikola/blob/master/nikola/plugins/compile/rest/media.py"
class="reference external">media.py</a> for a simple example.

If your output depends on a config value, you need to make your post
record a dependency on a pseudo-path, like this:

``` code
####MAGIC####CONFIG:OPTIONNAME
```

Then, whenever the `OPTIONNAME` option is changed in conf.py, the file
will be rebuilt.

If your directive depends or may depend on the whole timeline (like the
<span class="pre">`post-list`</span> directive, where adding new posts
to the site could make it stale), you should record a dependency on the
pseudo-path <span class="pre">`####MAGIC####TIMELINE`</span>.

### <a href="extending.html#toc-entry-8" class="toc-backref"
role="doc-backlink">MarkdownExtension Plugins</a><a href="#markdownextension-plugins" class="headerlink"
title="Permalink to this heading">¶</a>

Implement Markdown extensions, see <a
href="https://github.com/getnikola/nikola/blob/master/nikola/plugins/compile/markdown/mdx_nikola.py"
class="reference external">mdx_nikola.py</a> for a simple example.

Note that Python markdown extensions are often also available as
separate packages. This is only meant to ship extensions along with
Nikola.

### <a href="extending.html#toc-entry-9" class="toc-backref"
role="doc-backlink">SignalHandler Plugins</a><a href="#signalhandler-plugins" class="headerlink"
title="Permalink to this heading">¶</a>

These plugins extend the `SignalHandler` class and connect to one or
more signals via <a href="https://pythonhosted.org/blinker/"
class="reference external">blinker</a>.

The easiest way to do this is to reimplement `set_site()` and just
connect to whatever signals you want there.

Currently Nikola emits the following signals:

`sighandlers_loaded`  
Right after SignalHandler plugin activation.

`initialized`  
When all tasks are loaded.

`configured`  
When all the configuration file is processed. Note that plugins are
activated before this is emitted.

`scanned`  
After posts are scanned.

`new_post` / `new_page`  
When a new post is created, using the
`nikola new_post`/`nikola new_page` commands. The signal data contains
the path of the file, and the metadata file (if there is one).

`existing_post` / `existing_page`  
When a new post fails to be created due to a title conflict. Contains
the same data as `new_post`.

`deployed`  
When the `nikola deploy` command is run, and there is at least one new
entry/post since `last_deploy`. The signal data is of the form:

``` literal-block
{
 'last_deploy: # datetime object for the last deployed time,
 'new_deploy': # datetime object for the current deployed time,
 'clean': # whether there was a record of a last deployment,
 'deployed': # all files deployed after the last deploy,
 'undeployed': # all files not deployed since they are either future posts/drafts
}
```

`compiled`  
When a post/page is compiled from its source to html, before anything
else is done with it. The signal data is in the form:

``` literal-block
{
 'source': # the path to the source file
 'dest': # the path to the cache file for the post/page
 'post': # the Post object for the post/page
}
```

One example is the <a
href="https://github.com/getnikola/plugins/tree/master/v7/deploy_hooks"
class="reference external">deploy_hooks plugin.</a>

### <a href="extending.html#toc-entry-10" class="toc-backref"
role="doc-backlink">ConfigPlugin Plugins</a><a href="#configplugin-plugins" class="headerlink"
title="Permalink to this heading">¶</a>

Does nothing specific, can be used to modify the site object (and thus
the config).

Put all the magic you want in `set_site()`, and don’t forget to run the
one from `super()`. Example plugin:
<a href="https://github.com/getnikola/plugins/tree/master/v7/navstories"
class="reference external">navstories</a>

### <a href="extending.html#toc-entry-11" class="toc-backref"
role="doc-backlink">CommentSystem Plugins</a><a href="#commentsystem-plugins" class="headerlink"
title="Permalink to this heading">¶</a>

Can be used to add a new comment system. (It doesn’t do anything by
itself.) It’s expected to provide templates named
`comment_helper_foo.tmpl`.

Example plugin: <a
href="https://github.com/getnikola/plugins/tree/master/v8/cactuscomments"
class="reference external">cactuscomments</a>

### <a href="extending.html#toc-entry-12" class="toc-backref"
role="doc-backlink">Shortcode Plugins</a><a href="#shortcode-plugins" class="headerlink"
title="Permalink to this heading">¶</a>

Shortcode Plugins are a simple way to create a custom shortcode handler.
By default, the `set_site` method will register the `handler` method as
a shortcode with the plugin’s `name` as the shortcode name.

See the <a href="extending.html#shortcodes"
class="reference internal">Shortcodes</a> section for more details on
shortcodes.

### <a href="extending.html#toc-entry-13" class="toc-backref"
role="doc-backlink">PostScanner Plugins</a><a href="#postscanner-plugins" class="headerlink"
title="Permalink to this heading">¶</a>

Get posts and pages from "somewhere" to be added to the timeline. There
are currently two plugins for this: the built-in `scan_posts`, and
`pkgindex_scan` (in the Plugin Index), which is used to treat
.plugin/.theme + README.md as posts to generate the Plugin and Theme
Indexes.

## <a href="extending.html#toc-entry-14" class="toc-backref"
role="doc-backlink">Plugin Index</a><a href="#plugin-index" class="headerlink"
title="Permalink to this heading">¶</a>

There is a <a href="https://plugins.getnikola.com/"
class="reference external">plugin index</a>, which stores all of the
plugins for Nikola people wanted to share with the world.

You may want to read the
<a href="https://github.com/getnikola/plugins/blob/master/README.md"
class="reference external">README for the Index</a> if you want to
publish your package there.

## <a href="extending.html#toc-entry-15" class="toc-backref"
role="doc-backlink">Path/Link Resolution Mechanism</a><a href="#path-link-resolution-mechanism" class="headerlink"
title="Permalink to this heading">¶</a>

Any plugin can register a function using `Nikola.register_path_handler`
to allow resolution of paths and links. These are useful for templates,
which can access them via `_link`.

For example, you can always get a link to the path for the feed of the
"foo" tag by using <span class="pre">`_link('tag_rss',`</span>` 'foo')`
or the <span class="pre">`link://tag_rss/foo`</span> URL.

Here's the relevant code from the tag plugin.

``` code
# In set_site
site.register_path_handler('tag_rss', self.tag_rss_path)

# And these always take name and lang as arguments and return a list of
# path elements.
def tag_rss_path(self, name, lang):
    return [_f for _f in [self.site.config['TRANSLATIONS'][lang],
                          self.site.config['TAG_PATH'], self.slugify_name(name, lang) + ".xml"] if
            _f]
```

## <a href="extending.html#toc-entry-16" class="toc-backref"
role="doc-backlink">Template Hooks</a><a href="#template-hooks" class="headerlink"
title="Permalink to this heading">¶</a>

Plugins can use a hook system for adding stuff into templates. In order
to use it, a plugin must register itself. The following hooks currently
exist:

-   `extra_head` (not equal to the config option!)

-   `body_end` (not equal to the config option!)

-   `page_header`

-   `menu`

-   `menu_alt` (right-side menu in bootstrap, after `menu` in base)

-   `page_footer`

For example, in order to register a script into `extra_head`:

``` code
# In set_site
site.template_hooks['extra_head'].append('<script src="/assets/js/fancyplugin.js">')
```

There is also another API available. It allows use of dynamically
generated HTML:

``` code
# In set_site
def generate_html_bit(name, ftype='js'):
    """Generate HTML for an asset."""
    return '<script src="/assets/{t}/{n}.{t}">'.format(n=name, t=ftype)

site.template_hooks['extra_head'].append(generate_html_bit, False, 'fancyplugin', ftype='js')
```

The second argument to `append()` is used to determine whether the
function needs access to the current template context and the site. If
it is set to `True`, the function will also receive `site` and `context`
keyword arguments. Example use:

``` code
# In set_site
def greeting(addr, endswith='', site=None, context=None):
    """Greet someone."""
    if context['lang'] == 'en':
        greet = u'Hello'
    elif context['lang'] == 'es':
        greet = u'¡Hola'

    t = u' BLOG_TITLE = {0}'.format(site.config['BLOG_TITLE'](context['lang']))

    return u'<h3>{greet} {addr}{endswith}</h3>'.format(greet=greet, addr=addr,
    endswith=endswith) + t

site.template_hooks['page_header'].append(greeting, True, u'Nikola Tesla', endswith=u'!')
```

Dependencies for template hooks:

-   if the input is a string, the string value, alongside arguments to
    `append`, is used for calculating dependencies

-   if the input is a callable, it attempts
    `input.template_registry_identifier`, then `input.__doc__`, and if
    neither is available, it uses a static string.

Make sure to provide at least a docstring, or a identifier, to ensure
rebuilds work properly.

## <a href="extending.html#toc-entry-17" class="toc-backref"
role="doc-backlink">Shortcodes</a><a href="#shortcodes" class="headerlink"
title="Permalink to this heading">¶</a>

Some (hopefully all) markup compilers support shortcodes in these forms:

``` code
{{% foo %}}  # No arguments
{{% foo bar %}}  # One argument, containing "bar"
{{% foo bar baz=bat %}}  # Two arguments, one containing "bar", one called "baz" containing "bat"

{{% foo %}}Some text{{% /foo %}}  # one argument called "data" containing "Some text"
```

So, if you are creating a plugin that generates markup, it may be a good
idea to register it as a shortcode in addition of to restructured text
directive or markdown extension, thus making it available to all markup
formats.

To implement your own shortcodes from a plugin, you can create a plugin
inheriting `ShortcodePlugin`. By default, the `set_site` method will
register the `handler` method as a shortcode with the plugin’s `name` as
the shortcode name. To have other shortcode names, you can call
`Nikola.register_shortcode(name, func)` with the following arguments:

`name`:  
Name of the shortcode ("foo" in the examples above)

`func`:  
A function that will handle the shortcode

The shortcode handler **must** return a two-element tuple,
`(output, dependencies)`

`output`:  
The text that will replace the shortcode in the document.

`dependencies`:  
A list of all the files on disk which will make the output be considered
out of date. For example, if the shortcode uses a template, it should be
the path to the template file.

The shortcode handler **must** accept the following named arguments (or
variable keyword arguments):

`site`:  
An instance of the Nikola class, to access site state

`data`:  
If the shortcut is used as opening/closing tags, it will be the text
between them, otherwise `None`.

`lang`:  
The current language.

If the shortcode tag has arguments of the form `foo=bar` they will be
passed as named arguments. Everything else will be passed as positional
arguments in the function call.

So, for example:

``` literal-block
{{% foo bar baz=bat beep %}}Some text{{% /foo %}}
```

Assuming you registered `foo_handler` as the handler function for the
shortcode named `foo`, this will result in the following call when the
above shortcode is encountered:

``` literal-block
foo_handler("bar", "beep", baz="bat", data="Some text", site=whatever)
```

### <a href="extending.html#toc-entry-18" class="toc-backref"
role="doc-backlink">Template-based Shortcodes</a><a href="#template-based-shortcodes" class="headerlink"
title="Permalink to this heading">¶</a>

Another way to define a new shortcode is to add a template file to the
`shortcodes` directory of your site. The template file must have the
shortcode name as the basename and the extension `.tmpl`. For example,
if you want to add a new shortcode named `foo`, create the template file
as `shortcodes/foo.tmpl`.

When the shortcode is encountered, the matching template will be
rendered with its context provided by the arguments given in the
shortcode. Keyword arguments are passed directly, i.e. the key becomes
the variable name in the template namespace with a matching string
value. Non-keyword arguments are passed as string values in a tuple
named `_args`. As for normal shortcodes with a handler function, `site`
and `data` will be added to the keyword arguments.

Example:

The following shortcode:

``` code
{{% foo bar="baz" spam %}}
```

With a template in `shortcodes/foo.tmpl` with this content (using Jinja2
syntax in this example)

``` code
<div class="{{ _args[0] if _args else 'ham' }}">{{ bar }}</div>
```

Will result in this output

``` code
<div class="spam">baz</div>
```

## <a href="extending.html#toc-entry-19" class="toc-backref"
role="doc-backlink">State and Cache</a><a href="#state-and-cache" class="headerlink"
title="Permalink to this heading">¶</a>

Sometimes your plugins will need to cache things to speed up further
actions. Here are the conventions for that:

-   If it's a file, put it somewhere in
    <span class="pre">`self.site.config['CACHE_FOLDER']`</span>
    (defaults to `cache/`.

-   If it's a value, use `self.site.cache.set(key, value)` to set it and
    `self.site.cache.get(key)` to get it. The key should be a string,
    the value should be json-encodable (so, be careful with datetime
    objects)

The values and files you store there can **and will** be deleted
sometimes by the user. They should always be things you can reconstruct
without lossage. They are throwaways.

On the other hand, sometimes you want to save something that is **not**
a throwaway. These are things that may change the output, so the user
should not delete them. We call that **state**. To save state:

-   If it's a file, put it somewhere in the working directory. Try not
    to do that please.

-   If it's a value, use `self.site.state.set(key, value)` to set it and
    `self.state.cache.get(key)` to get it. The key should be a string,
    the value should be json-encodable (so, be careful with datetime
    objects)

The `cache` and `state` objects are rather simplistic, and that's
intentional. They have no default values: if the key is not there, you
will get `None` and like it. They are meant to be both threadsafe, but
hey, who can guarantee that sort of thing?

There are no sections, and no access protection, so let's not use it to
store passwords and such. Use responsibly.

## <a href="extending.html#toc-entry-20" class="toc-backref"
role="doc-backlink">Logging</a><a href="#logging" class="headerlink"
title="Permalink to this heading">¶</a>

Plugins often need to produce messages to the screen. All plugins get a
logger object (`self.logger`) by default, configured to work with Nikola
(logging level, colorful output, plugin name as the logger name). If you
need, you can also use the global (`nikola.utils.LOGGER`) logger, or you
can instantiate custom loggers with `nikola.utils.get_logger` or the
`nikola.log` module.

## <a href="extending.html#toc-entry-21" class="toc-backref"
role="doc-backlink">Template and Dependency Injection</a><a href="#template-and-dependency-injection" class="headerlink"
title="Permalink to this heading">¶</a>

Plugins have access to two injection facilities.

If your plugin needs custom templates for its features (adding pages,
displaying stuff, etc.), you can put them in the `templates/mako` and
`templates/jinja` subfolders in your plugin’s folder. Note that those
templates have a very low priority, so that users can override your
plugin’s templates with their own.

If your plugin needs to inject dependencies, the
`inject_dependency(target, dependency)` function can be used to add a
`dependency` for tasks which basename == `target`. This facility should
be limited to cases which really need it, consider other facilities
first (eg. adding post dependencies).

Contents © 2012–2025 [Roberto Alsina and the Nikola
contributors](contact.html)  \|  Powered by Nikola itself  \|   [Follow
Nikola on
Twitter](https://twitter.com/intent/user?screen_name=GetNikola)  \|  Theme
is [Cerulean](https://bootswatch.com/cerulean/)

<a href="https://statcounter.com/tumblr/" target="_blank" title="tumblr
statistics"><img src="https://c.statcounter.com/7842875/0/3421486a/1/"
class="statcounter" alt="tumblr statistics" /></a>
