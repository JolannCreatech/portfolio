# Adding a project page

Project pages are plain HTML and share the global navigation, typography, spacing, page turn and responsive rules in `../styles/`.

Copy an existing page in this folder and keep its `<nav>`, skip link and footer. Replace the title, description, project metadata and chapter links. Compose the body from only the panels the project needs:

- `.project-panel--hero` for one opening image or an illustration-ready scene.
- `.project-panel--text` for a short introduction or project question.
- `.project-panel--split` for an image alongside a concise explanation.
- `.project-panel--triptych` for a small set of related images or notes.
- `.project-video-panel` and `.project-video` for a video with native controls.
- `.project-nav` for links to the previous and next relevant pages.

Use the real files in `` as source material. Put display derivatives in `Website/assets/images/` and leave originals in place. Give each image descriptive alt text and a short caption. Label concept diagrams as illustrations so they are not mistaken for experimental results. Only include facts supported by the brief, project files or existing documentation.

After adding a page, link it from the relevant collection and check that its direct URL, assets, keyboard focus and mobile layout work.
