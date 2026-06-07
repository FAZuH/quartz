# Migration Plan: `v4-fazuh-base` to `v5`

## 1. Title Aliasing (Unified Transformer)
*   Create a local transformer plugin (e.g., `quartz/plugins/local/title-alias.ts`). 
*   This will run early in the build pipeline to dynamically rewrite `file.data.frontmatter.title` based on `aliases`, `alias`, and strip `.md`. This natively fixes the title in Breadcrumbs, Search, Backlinks, and PageTitle without needing to fork those components.

## 2. Custom Breadcrumbs
*   Clone `github:quartz-community/breadcrumbs` into `quartz/plugins/local/custom-breadcrumbs`.
*   Inject custom `parent` ancestry traversal logic into it.
*   Update `quartz.config.yaml` to use this local source.

## 3. Search Enhancements
*   Clone `github:quartz-community/search` into `quartz/plugins/local/custom-search`.
*   Modify the client-side JavaScript to include the `(e.key === "/" && (e.ctrlKey || e.metaKey))` listener for the search bar.

## 4. Layout & Configuration Settings
*   Update `quartz.config.yaml`:
    *   Set `pageTitle: "FAZuH's Notes"` and `baseUrl: "notes.fazuh.com"`.
    *   Disable the file explorer (`enabled: false`).
    *   Enable `github:quartz-community/recent-notes`, set `limit: 5`, and place it in `afterBody`.
    *   Set Table of Contents to `display: mobile-only`.
    *   Disable `canvas-page` and `note-properties` (as properties are not published).

## 5. Styling and Theming
*   Copy the `quartz/styles/themes/` directory into the v5 branch.
*   Copy over `quartz/styles/custom.scssr`.
*   Edit `quartz/styles/custom.scss` to include `@use "./themes";`.

## 6. Transclusions & OFM (Obsidian Flavored Markdown)
*   Clone `github:quartz-community/obsidian-flavored-markdown` to `quartz/plugins/local/custom-ofm`.
*   Re-inject logic that appends the `"embed"` class to blockquote transcludes starting with `!`.

## 7. Repo & Infrastructure
*   Port `.github/workflows/deploy.yml` and `.github/workflows/docker-build-push.yaml`.
*   Update `.gitignore`.
*   Port over **`AGENTS.md`** (renamed from `GEMINI.md` in v4).

## Deviations from Initial Plan
*(Add any deviations here as the migration progresses)*
