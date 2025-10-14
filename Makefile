.PHONY: nk-build nk-serve nk-clean nk-new-post nk-new-page nk-github-deploy nk-auto nk-check nk-deploy

nk-build:
	cd portfolio && uv run nikola build

nk-serve:
	cd portfolio && uv run nikola serve --browser

nk-clean:
	cd portfolio && uv run nikola clean

nk-new-post:
	cd portfolio && uv run nikola new_post

nk-new-page:
	cd portfolio && uv run nikola new_page

nk-github-deploy:
	gti branch -D src
	git push origin --delete src
	cd portfolio && uv run nikola github_deploy

nk-auto:
	cd portfolio && uv run nikola auto --browser

nk-check:
	cd portfolio && uv run nikola check --check-links

nk-status:
	cd portfolio && uv run nikola status

nk-console:
	cd portfolio && uv run nikola console

nk-themes:
	cd portfolio && uv run nikola theme -l

nk-install_theme:
	cd portfolio && uv run nikola theme -i $(THEME)

nk-plugins:
	cd portfolio && uv run nikola plugin -l

nk-install_plugin:
	cd portfolio && uv run nikola plugin -i $(PLUGIN)

nk-deploy:
	cd portfolio && uv run nikola deploy

nk-help:
	cd portfolio && uv run nikola help
