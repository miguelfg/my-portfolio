# Remove Obsolete `src` Branch References Design

## Goal

Make the repository consistently use its active Nikola deployment model:
`main` as the source branch and `gh-pages` as the generated-site branch.

## Scope

- Remove the local and remote `src` deletion commands from `Makefile`.
- Update `AGENTS.md` so deployment preparation and Git conflict recovery refer
  to `main`.
- Update `CLAUDE.md` so its deployment warning documents `main → gh-pages` and
  no longer claims that deployment deletes `src`.
- Do not edit vendored `docs/nikola-docs/` examples or unrelated uses of the
  word `src` in code/documentation.
- Do not delete a branch: current local and remote branch inventories contain
  no `src` ref.

## Resulting workflow

`make nk-github-deploy` will execute Nikola’s `github_deploy` command directly.
Nikola will use `GITHUB_SOURCE_BRANCH = 'main'` and
`GITHUB_DEPLOY_BRANCH = 'gh-pages'` from `portfolio/conf.py`.

## Verification

1. Search project-maintained deployment instructions and Makefile for obsolete
   `src` branch references.
2. Run `python3 -m py_compile portfolio/conf.py`.
3. Run `make nk-build`.
4. Inspect `git diff --check` and the scoped diff.
