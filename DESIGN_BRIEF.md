INTERACTIVE COMIC PORTFOLIO

Design and Implementation Brief

1. Mission

Rebuild the existing portfolio from the ground up as an interactive, comic-book-inspired editorial experience.

This is the personal portfolio of Jolann Narcisse, an engineering student in Creative Technologies working across software, electronics, interaction design, physical prototyping and visual arts.

The website must communicate technical ability, curiosity, adaptability and visual sensibility.

It must feel like a carefully art-directed graphic novel that happens to be a website, not a conventional portfolio decorated with comic-book graphics.

The central concept is:

A portfolio that can be read, explored and navigated like an interactive graphic novel.

The visitor should discover a coherent personal story by moving between pages and projects. The story does not need to be strictly chronological. Each page should reveal another part of the same character and practice.

This is a real portfolio intended for recruiters, studios and engineering/design teams. Visual ambition must not compromise clarity, usability or credibility.

2. First Rule: Inspect Before Modifying

Before implementing anything:

1. Inspect the current repository and its actual directory structure.
2. Identify the existing website, source assets, project media, CV and personal photograph.
3. Determine which files belong to the previous implementation and which are original source material.
4. Inventory the available images and videos, including their dimensions and formats where useful.
5. Identify existing project information and distinguish verified facts from missing information.
6. Check which development tools and browser-testing capabilities are already available.

Do not assume the previous implementation is worth preserving.

Do not assume the directory structure described in this document exactly matches the repository.

Do not delete, overwrite or move original project assets merely to simplify the implementation.

If a clean rebuild is appropriate, isolate the new website in the Website/ directory and leave original content intact.

Do not begin by generating all pages. First establish the design system, page model and navigation architecture.

3. Creative Direction

3.1 Core visual language

The primary reference is the visual language of contemporary graphic novels, particularly the work of Mathieu Bablet.

Translate these principles into web design:

* Strong graphic compositions.
* Deliberate asymmetry.
* Panels with varied proportions and shapes.
* Large areas of controlled colour.
* Cinematic framing.
* Architecture and environments used to establish atmosphere.
* A balance between quiet, spacious pages and dense, information-rich compositions.
* Visual storytelling through the relationship between adjacent panels.
* Distinctive page compositions that still belong to one visual universe.

Use the references supplied by the owner as inspiration for specific qualities, not as templates to copy.

The result must be an original visual identity.

3.2 Colour

The owner will provide additional colour references.

Until those references are available, use a restrained, editorial palette built around a small number of deliberate colours.

Explore broad fields of colour, contrasting page atmospheres and occasional monochromatic sequences.

Do not default to a generic futuristic palette.

Explicitly avoid:

* Purple and electric-blue gradients.
* Cyberpunk neon.
* Generic dark-mode developer aesthetics.
* Excessive glassmorphism.
* Random decorative gradients.
* Colours selected merely because they look technological.

Colour must contribute to the narrative and composition.

3.3 Illustration

The owner intends to create or supply custom illustrations later.

Design the site so custom illustrations can replace temporary imagery without requiring structural changes.

Use existing project photographs, screenshots, videos and other real assets wherever possible.

For missing illustrations, create deliberate placeholders that establish the intended composition, dimensions and colour treatment.

Do not generate fake project photographs or present invented artwork as an existing project asset.

Do not scatter generic illustrations across every available space.

Illustrations should have a purpose: establish a scene, introduce a section, explain a mechanism or connect parts of the story.

3.4 Typography

Treat typography as part of the comic-book art direction.

Establish a compact system for:

* Page titles.
* Panel headings.
* Short narrative captions.
* Body text.
* Technical annotations.
* Navigation and metadata.

Use expressive typography selectively. Readability remains essential.

Avoid the generic combination of an oversized sans-serif heading, tiny grey paragraph and rounded card.

3.5 Shape and composition

The layout must not resemble a uniform grid of rectangular cards.

Use a deliberate vocabulary of panels:

* Different aspect ratios.
* Asymmetric arrangements.
* Controlled offsets.
* Angled edges where compositionally appropriate.
* Occasional full-width or full-height panels.
* Overlapping visual layers when they improve the composition.

Irregularity must look intentional.

Do not randomly rotate every element or distort panels simply to make the page look unconventional.

The underlying layout must remain robust and responsive.

1. The Book Metaphor

The book is the structural foundation of the experience.

It must influence:

* The entrance.
* The overall page system.
* Transitions between pages.
* The composition of the homepage.
* The presentation of projects.
* The About page.
* The visitor’s understanding of the site’s navigation.

Avoid literal book decorations everywhere.

Do not put a fake paper texture, spine, page number and drop shadow on every component.

The book should feel like a coherent physical object through its behaviour, composition and transitions.

5. Information Architecture

The intended hierarchy is:

Portfolio

* Content
    * Original images and videos
    * Personal assets
    * Project assets
* Website
    * Home
    * Projects
        * Project index
        * Reusable project-page framework
        * Individual project pages
    * About

The owner has specified the following homepage categories:

1. Between Threads
2. Foreign Geometry
3. Hardware
4. Software
5. Free Time

The first two are the primary projects and must receive greater visual importance.

The categories are conceptual groupings, not five interchangeable cards.

Additional individual projects can be accessible through the Projects section.

The navigation must remain understandable without requiring visitors to discover every page through scrolling.

6. Entrance: The Cover

The first screen is the cover of the book.

It is not a conventional hero section with a name, a subtitle and a row of buttons.

Intended scene

The eventual illustration will depict a cyclist moving through a city under construction.

The city suggests experimentation, construction, movement and an unfinished environment.

The composition and colour treatment will be defined further using references supplied by the owner.

For now, build the cover around an illustration-ready visual area with a deliberate placeholder treatment.

Behaviour

The visitor arrives at the cover.

A short loading or preparation sequence may establish the feeling of entering an illustrated book, but it must not become a fake loading screen.

If there is nothing meaningful to load, do not manufacture an unnecessarily long loading delay.

The visitor can enter by scrolling or clicking.

The transition should suggest that the book is placed on a table and opens to reveal the homepage.

The animation should feel physical, deliberate and cinematic.

It must not prevent the visitor from reaching the actual content quickly.

Support keyboard activation, reduced-motion preferences and touch input.

The cover must not become an inaccessible gate that blocks the rest of the website.

7. Homepage: The First Open Spread

The homepage is the first interior spread of the book.

It contains three main parts.

7.1 Top navigation

Create a restrained navigation area containing the essential destinations:

* Home.
* Projects.
* About.

The navigation must be visually integrated into the book.

It must not resemble a generic SaaS navbar.

It must remain usable on mobile and must provide clear access to the principal sections.

7.2 Introductory panel

Create one dominant introductory panel.

It should contain:

* An illustration or portrait of Jolann, intended to be replaced with a custom drawing.
* His name.
* A concise professional introduction.
* A link to the About page.

The portrait should feel like a character introduction within a graphic novel.

The text must remain professional and concrete.

Do not invent personal characteristics, achievements or biographical information.

The initial copy can be based on this positioning:

“Engineer working across software, electronics and interaction design, with a particular interest in technology and product innovation.”

The owner may refine the wording later.

7.3 Five editorial panels

Arrange five major panels below or around the introductory panel.

The intended hierarchy is:

Panel 1: Between Threads

A major project combining a tangible puppet theatre, computer vision and interaction between physical and virtual worlds.

Give it a strong, distinctive composition.

Panel 2: Foreign Geometry

A project exploring what happens when a human imposes a different geometry on a machine-learned latent space.

Give it visual importance comparable to Between Threads.

Do not reduce it to an abstract card containing technical jargon.

Panel 3: Hardware

A collection of physical projects involving fabrication, electronics, mechanical systems and experimentation.

Panel 4: Software

A collection of software, computer vision, sensing and other technical experiments.

Panel 5: Free Time

A more personal section that may include photography, drawing, visual arts, cycling, mechanical interests and other material supplied by the owner.

Do not invent personal photographs or activities.

The final compositions should be asymmetrical and visually connected.

The first two panels should clearly dominate the hierarchy.

The three remaining panels should feel related without being identical.

Each panel needs its own visual identity while sharing the same design system.

7.4 Panel interactions

On hover, a panel should become slightly larger or otherwise gain visual emphasis.

The change must feel deliberate and tactile.

The panel must not collide with neighbouring content or become clipped by its container.

On touch devices, provide an equivalent interaction without relying on hover.

Panel activation must navigate to the correct destination.

Use visual changes, framing, colour or scale to communicate interactivity.

Do not make every panel continuously animate.

7.5 Footer

Use a small, restrained footer containing relevant navigation and contact links.

It should conclude the page without competing with the main compositions.

8. Page Transitions: Turning Pages

Transitions between major destinations are a defining feature of the website.

When navigating forward in the site’s hierarchy, the visitor should experience a forward page-turning transition.

When navigating back, the transition should feel like turning a page backwards.

The transition should suggest a physical sheet rotating in three-dimensional space.

Implementation principles

* Use CSS 3D transforms where they are sufficient.
* Use JavaScript to coordinate transition states and navigation.
* Use perspective, transform origins, shading and carefully timed movement.
* Keep the transition short enough to preserve navigation speed.
* Avoid complex WebGL unless there is a demonstrated need.
* Do not implement an elaborate simulated book engine merely to achieve a page-turn effect.

The visual result must feel intentional, not like a generic carousel.

Technical requirements

Page transitions must:

* Work across the supported pages.
* Work with direct navigation and browser history.
* Preserve sensible back and forward behaviour.
* Avoid trapping the visitor in a transition state.
* Avoid duplicate navigation when a transition is already running.
* Respect reduced-motion preferences.
* Degrade gracefully when JavaScript is unavailable.
* Never prevent the destination from loading if an animation fails.

Use a coherent navigation model rather than implementing unrelated animations independently on every page.

The transition must not be required for the site to function.

9. Scroll: Panels Become More Important

Scrolling should influence the visual storytelling.

The primary behaviour is that selected panels grow, expand or become more prominent as they enter the relevant part of the viewport.

The visitor should feel that they are moving through a composed comic page rather than scrolling through a stack of ordinary website sections.

Possible behaviours include:

* A panel expanding as it approaches the centre of the viewport.
* A small image becoming a dominant scene.
* Adjacent panels changing their relative visual importance.
* A caption appearing when a scene becomes prominent.
* A large image taking over a section before the next composition appears.

Use these behaviours selectively.

Not every panel needs to grow.

The relationship between scrolling and composition must be consistent and understandable.

Implementation

Prefer native scrolling and modern browser APIs such as Intersection Observer where suitable.

Use scroll-linked animations only when their behaviour is reliable in the target browsers.

Avoid unnecessary animation libraries.

Do not hijack the scroll wheel.

Do not force horizontal scrolling.

Do not make the visitor wait for an animation to finish before continuing.

The experience must remain natural on trackpads, mouse wheels, touchscreens and keyboards.

10. Project Pages: Every Project Is a New Page

Every major project should be presented as a composed comic-book page.

Do not use one generic project template that produces the same sequence of identical rectangles for every project.

Create a shared framework for typography, navigation, spacing, transitions, responsive behaviour and reusable components.

Allow individual projects to use different panel compositions according to their content.

A project page may include:

* An opening scene or title panel.
* A short introduction.
* Large project images.
* Process photographs.
* Videos.
* Technical details.
* Diagrams or illustrations.
* A concise explanation of the problem, approach and result.
* Links to relevant external resources.
* Navigation to other projects.

The order and proportions of panels should depend on the project.

A physical prototype should not be presented in exactly the same way as a virtual environment or a visual-art archive.

Project storytelling

Each project should answer, where the available information supports it:

1. What is it?
2. Why was it made?
3. What did the owner contribute?
4. How does it work?
5. What is worth seeing or understanding?
6. What was the outcome?

Do not force every project into these questions if the available material does not support them.

Avoid long blocks of explanatory prose.

Use captions, short paragraphs and technical annotations.

Let the images do most of the work when they are informative.

Do not fabricate project outcomes, measurements, responsibilities or technologies.

11. Project Content

11.1 Between Threads

Year: 2026

Description:

“Computer vision controlled tangible puppet theatre to explore storytelling across virtual and real worlds.”

The project combines a physical puppet theatre, servomotors, computer vision, hand tracking and a virtual interface.

The available material is located in the existing Between Threads content directory.

GitHub:
https://github.com/Between-Threads-Project/Overview

This is one of the two most important projects.

Its page should establish a strong relationship between the physical stage, the human operator, the digital interface and the puppet.

Use the actual available project imagery and videos.

Do not invent a visual result that is not supported by the assets.

11.2 Foreign Geometry

This project explores the question:

“What happens to semantic structure when a human imposes foreign geometry onto a machine-learned latent space?”

The project investigates the relationship between human-imposed constraints and machine-learned representations.

The precise final implementation and available assets must be verified in the repository before writing detailed technical claims.

The page should make the idea visually understandable without pretending the underlying problem is simple.

Do not invent results or present an unfinished concept as a completed experiment.

Give this project the same level of visual ambition as Between Threads.

11.3 A Place to Leave a Mark

Year: 2025

Description:

“Unity virtual world to simulate a street artist’s environment and expose artworks.”

Video:
https://www.youtube.com/watch?v=El01vBuoyyc

Use the available project assets.

The page should communicate the virtual environment, the relationship between space and artwork, and the interactive experience.

11.4 Visual Arts

Description:

“A large part of my practice happens outside engineering.”

Available categories:

* Photo editing.
* Drawing.
* Logos and moodboards.

Use the actual image collections.

Treat this section as a visual archive or editorial sequence, not a conventional technical case study.

The imagery should dominate.

Use restrained labels and short captions where useful.

11.5 Hardware

This category contains four projects.

Kapsul

Innovative, environmentally conscious socket covers designed for young children.

Year: 2026.

Creatruck

A rapid-fabrication prototype of a functioning remote-controlled car.

Video:
https://www.youtube.com/watch?v=fSvw61P6LVU

Bike Restoration

Restoration of a 1980s special CNC road bike and modernization of its components.

Year: 2026.

Video Effect

Physical manipulation of a video signal using a Raspberry Pi and a custom electronic circuit.

Use the actual assets for each project.

The category should communicate physical making, experimentation, fabrication and the relationship between hardware and software.

Do not turn every project into a long engineering report.

11.6 Software

This category includes smaller software and technical experiments.

Phone Number: Human Pyramid

Participants form a human pyramid corresponding to a phone number.

Phone Number: Animal Sounds

Animal sounds activate corresponding segments of a seven-segment display.

Plane Detection

A Raspberry Pi and a 1090 MHz ADS-B receiver are used to detect aircraft in the Paris region.

Body Sensors

BITalino body sensors control a Unity environment.

Use the actual assets and verify the details available in the repository.

These projects should demonstrate breadth and experimentation without competing with the two main projects.

11.7 Free Time

This section is intended for personal interests and creative practice.

Use only material supplied by the owner.

Possible themes include photography, drawing, cycling, mechanical interests and other personal projects.

Do not fabricate a lifestyle, photographs, achievements or personal stories.

The page should feel more informal than the main engineering projects while remaining visually consistent with the book.

12. About Page: A Profile Inside the Book

The About page should feel like a personal editorial spread.

It should contain:

* A portrait or illustration.
* A concise professional introduction.
* Education.
* Professional experience.
* Skills.
* Contact details.
* LinkedIn.
* A link to the CV.

Use illustrations, small panels and graphic annotations to connect the sections.

The CV must be accessible directly from this page and should open in a new browser tab.

Use the actual CV supplied in the repository.

Do not recreate the entire CV as a wall of HTML text unless there is a specific reason.

A readable HTML summary may complement the PDF, but it must not replace the PDF download or viewing option.

Education and experience

Use concise timelines or editorial sequences.

For each entry, show the date or period, institution or organisation, role or qualification, and a short description where relevant.

Verify dates and names against the available source material.

Do not invent missing information.

Contact

Include the owner’s verified contact information and professional links.

Do not guess an email address.

If the address cannot be verified, leave a clearly identifiable placeholder for the owner to complete.

13. Responsive Behaviour

Desktop and mobile are both first-class versions of the experience.

Do not merely shrink the desktop layout.

Desktop

Take advantage of:

* Large compositions.
* Asymmetrical panels.
* Spacious colour fields.
* Layered images.
* Controlled 3D page transitions.
* Scroll-driven changes in panel prominence.

Mobile

Preserve the comic-book identity using:

* Reconfigured panel layouts.
* Strong aspect-ratio choices.
* Clear visual hierarchy.
* Touch-friendly navigation.
* Appropriate image crops.
* Simplified transitions when necessary.

Avoid:

* Tiny text.
* Panels that extend beyond the viewport.
* Hover-dependent content.
* Horizontal scrolling without a deliberate, accessible reason.
* Animations that make scrolling difficult.
* Desktop compositions compressed into unreadable columns.

The content must remain available even if complex motion is disabled.

14. Motion and Interaction Principles

Motion should communicate physicality, hierarchy or narrative.

Use it for:

* Opening the book.
* Turning pages.
* Emphasising a selected panel.
* Revealing relevant visual details.
* Changing the relative importance of panels during scrolling.

Use a consistent motion language.

Avoid:

* Particles following the cursor.
* Animated particle trails.
* Endless floating objects.
* Random parallax.
* Unnecessary looping animations.
* Scroll hijacking.
* Forced horizontal scrolling.
* Large WebGL scenes without a clear purpose.
* Fake loading delays.
* Animations that make content harder to read.

Provide a reduced-motion mode.

When reduced motion is enabled, replace elaborate transitions with short fades or immediate navigation.

The site must remain fully usable without animation.

15. Technical Architecture

Prefer a small, maintainable implementation using HTML, CSS and JavaScript.

Do not introduce React, Next.js, Vue or another framework unless a concrete technical requirement justifies it.

Do not add dependencies merely because they are familiar.

Use semantic HTML and reusable CSS patterns.

Separate the implementation into understandable files.

A possible structure is:

Website/

* index.html
* assets/
* styles/
    * tokens.css
    * global.css
    * book.css
    * components.css
    * responsive.css
* scripts/
    * navigation.js
    * transitions.js
    * scroll-panels.js
* home/
* projects/
    * index.html
    * project-template/
    * individual project pages
* about/

This is a suggested architecture, not a requirement to create unnecessary files.

Use the simplest structure that supports the actual implementation.

Individual pages may have their own HTML, CSS or JavaScript when that improves clarity, but shared behaviour should not be duplicated without reason.

Reusable project framework

Create a reusable project-page framework.

It should make it easy to:

* Add a new project.
* Replace or add images.
* Add a video.
* Change the panel composition.
* Add captions and technical annotations.
* Set project metadata.
* Link to related projects.

Document the intended extension points.

Comments should explain reusable mechanisms and where future content should be added, not describe obvious syntax.

Asset management

Use actual local assets.

Create optimised derivatives where useful, but preserve the originals.

Use sensible image dimensions and formats.

Do not load full-resolution source images when a smaller derivative is sufficient.

Use lazy loading for appropriate below-the-fold images.

Avoid downloading remote imagery or relying on external services for core page content.

The website must remain functional when external image-hosting services are unavailable.

Navigation and URLs

Use understandable URLs and stable navigation.

Every main destination should work when opened directly.

Internal navigation must not depend on arriving from the homepage first.

Browser back and forward navigation must remain functional.

The page-turn effect must enhance navigation rather than replace it.

Accessibility

Use semantic landmarks, descriptive link labels, appropriate image descriptions and visible keyboard focus.

Provide keyboard-accessible controls.

Do not use colour as the only means of communicating a state.

Respect prefers-reduced-motion.

Ensure sufficient text contrast and practical touch-target sizes.

Performance

Prioritise the visual experience without making the website unnecessarily heavy.

Avoid large libraries when native browser capabilities are sufficient.

Avoid rendering complex 3D scenes on every frame when a CSS transition would achieve the intended effect.

Keep images optimised and animations efficient.

16. Browser Testing Is Part of the Work

A successful build is not a successful visual implementation.

Do not declare the website complete based only on syntax checks, HTTP responses or file existence.

Before implementation, determine whether a browser-testing tool is available.

Prefer an actual browser-rendering pass using an available browser automation tool such as Playwright.

If no suitable tool is installed:

1. Check whether an existing local browser or testing setup can be used.
2. If necessary, determine whether a project-local browser-testing setup can be installed.
3. Do not silently claim visual verification if it was not performed.
4. If visual testing remains unavailable, state the limitation and provide exact steps for the owner to verify the result locally.

When browser testing is available, inspect:

* The cover.
* The opening transition.
* The homepage.
* At least one major project page.
* The About page.
* A representative mobile viewport.
* Navigation forward and backward.
* Page-turn animation completion.
* Scrolling behaviour.
* Reduced-motion behaviour.

Check for:

* Broken images and videos.
* Incorrect asset paths.
* Layout overflow.
* Text clipping.
* Panels overlapping unintentionally.
* Animations that do not complete.
* Navigation that fails after direct page loading.
* Console errors.
* Excessive loading or stuttering.

Fix the problems discovered during testing before declaring completion.

17. Implementation Workflow

Work in distinct stages.

Stage 1: Repository audit

Inspect the repository and produce a concise report containing:

* The actual directory structure.
* Existing source assets.
* Existing website files.
* Verified project information.
* Available development and browser-testing tools.
* A proposed clean implementation structure.

Do not modify the website yet.

Do not ask the owner to repeat information already available in the repository.

Stage 2: Visual system and architecture

Define:

* The colour and typography system.
* The panel layout vocabulary.
* The book’s visual and navigation model.
* The page-transition mechanism.
* The scroll interaction model.
* The responsive strategy.
* The shared project-page framework.

Then implement a coherent first slice of the experience:

* The cover.
* The transition into the book.
* The homepage.
* The shared page-transition system.

The cover and homepage must establish the visual identity for the rest of the site.

Do not expand into every project page before this foundation works.

Stage 3: Project pages and About

Implement the project index, reusable project framework, individual project pages and About page.

Use actual assets and verified information.

Give the major projects stronger compositions than secondary experiments.

Stage 4: Visual and technical audit

Run the available checks.

Inspect the rendered pages if browser tooling is available.

Correct the most important design, interaction, responsiveness and performance issues.

Do not perform an unrelated redesign during this stage.

Stage 5: Handover

Report:

* What was implemented.
* Which files were created or changed.
* Which checks were actually performed.
* Which problems were discovered and fixed.
* What could not be verified.
* Which temporary illustrations or placeholders still need to be replaced by the owner.

Do not claim a check passed unless it was actually performed.

18. Definition of Done

The first complete version is ready for review when:

* The cover establishes a distinct visual identity.
* The entrance leads into the homepage with a convincing book-opening transition.
* The homepage has a strong introductory panel and five deliberately composed category panels.
* The first two projects have greater visual importance than the remaining categories.
* Panels respond to hover and touch appropriately.
* Selected panels change visual prominence during scrolling.
* Forward and backward navigation use coherent page-turn transitions.
* Project pages use a shared framework without becoming visually identical.
* The About page includes the available CV and verified professional information.
* All supplied assets remain intact.
* The new website is isolated from the original source material.
* Direct navigation and browser history work.
* Desktop and mobile layouts are usable.
* Reduced-motion preferences are respected.
* No known broken assets, blocking errors or accidental horizontal overflow remain.
* Browser verification has been performed where possible, and any remaining limitations are explicitly documented.

19. Final Creative Test

Before considering the work successful, ask:

1. Does this feel like a graphic novel rather than a conventional portfolio with decorative panels?
2. Does the entrance feel like entering an object?
3. Does each page have a deliberate composition?
4. Do the interactions reinforce the idea of reading and turning pages?
5. Is the visual identity distinctive without becoming exhausting?
6. Can a recruiter understand the owner’s work and navigate the site without fighting the design?
7. Could the owner replace the placeholder illustrations with custom artwork without rebuilding the site?

If the answer to the first four questions is no, the visual concept has not been implemented successfully, even if all pages work technically.

Prioritise composition, narrative, and the quality of the actual experience over the number of features implemented.