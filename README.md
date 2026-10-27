# Jolann Narcisse — Portfolio

The portfolio is a static HTML, CSS and JavaScript site in `Website/`. It has no build step or package dependencies. Original project material remains in `content/`.

## Preview locally

From this folder, run:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000/Website/`.

The home page is `Website/index.html`; shared styles and interactions are in `Website/styles/` and `Website/scripts/`. Projects have their own `index.html` pages under `Website/projects/`. Use `Website/projects/PROJECT_TEMPLATE.md` when adding a project page.

## Repository layout

- `Website/` is self-contained. Every image, video, document and stylesheet used by the site lives in `Website/assets/`, `Website/styles/` or `Website/scripts/`, so this folder can be deployed on its own.
- `content/` is the local source archive, ignored by git and not deployed. It keeps the original project material; `content/_originals/` holds the high-resolution sources that predate the current web exports.
- `Inspirations/` is also local-only and ignored by git.
- `tools/` holds local analysis scripts and is ignored by git as well.

When preparing a display image or video, add the web-ready copy under `Website/assets/` and keep the original in `content/`. Do not replace source files in `content/`.
