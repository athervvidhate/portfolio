# Portfolio design exploration

Question: which structure best represents Atherv's data science and engineering work while staying readable?

These are disposable UI prototypes on the existing home route, selected with `?variant=atlas`, `?variant=index`, or `?variant=studio`. Run `npm run prototype`. The normal home page and production build retain the existing portfolio. No design decision has been approved yet.

## Research

- [Anthropic, November 2025](https://claude.com/blog/improving-frontend-design-through-skills) describes repeated Inter typography, purple gradients, and predictable layouts.
- [Interrogating Design Homogenization in Web Vibe Coding, March 2026](https://arxiv.org/abs/2603.13036) investigates convergence across generated web designs. It supports concern about homogenization, not a definitive model-by-model aesthetic timeline.
- [Nimble, 2026](https://www.nimblestudio.com/story/creating-an-anti-ai-brand-in-times-of-artificial-everything) describes warm cream, terracotta, serif type, simulated handmade marks, and film grain becoming shared tech-brand conventions.
- [JYNLAB, September 2026](https://jynlab.com/website-that-doesnt-look-ai/) lists both older purple-gradient defaults and newer cream/serif/terracotta combinations.

My interpretation: refusing one palette is insufficient. Replacement templates become recognizable too. Give the actual work control over hierarchy and imagery. No claims that a style proves AI authorship, and no invented generational chronology.

## Directions

### Atlas

Research-led, with the real Shaver Lake canopy map as the main visual. A wide split introduction, large research feature, then compact project entries and a readable career section. Left-aligned throughout. Palette: ocean #173b66, white #ffffff, mist #edf3f8, ink #192f42, muted #536779. Avenir Next and Georgia for the project title only. Diagram: `[identity | navigation] [intro | real canopy figure] [project list] [experience | education]`.

### Index

Project-led, with a large plum masthead and a browsable catalog. A vertical selection list controls one detailed project panel. The first view shows the depth of the work without eight competing boxes. Palette: plum #4a173a, pale pink #f7e9ef, white #ffffff, raspberry #982c58, grey #625760. Helvetica Neue throughout, with unusually large but restrained title typography. Diagram: `[large name + compact bio] [project index | selected project] [career rows]`.

### Studio

Person-led, with a blue side navigation, an asymmetric portrait introduction, and wide alternating project stories. Palette: sky #dcebf8, navy #193953, white #ffffff, butter #f5e58b, slate #526579. Trebuchet MS for headings, Avenir Next for body. Diagram: `[persistent profile rail | portrait introduction / project stories / experience]`.

## Critique before building

Dropped a newspaper concept because hairline grids, numbered entries, and oversized serif text are now common anti-slop defaults themselves. Dropped a terminal concept because it makes technical work harder to read for recruiters. Each remaining concept has a different first action: read a research project, browse the project catalog, or meet the person. Shared content and factual links come from the current portfolio. New copy is draft copy for review. No new outcome claims.

## Review

Use the bottom switcher or left/right arrow keys. Filters, project selection, disclosures, navigation, resume, and contact links work. External project destinations are the existing site's links. The original forest case study remains available.

## Verification

TypeScript and the production build pass. Browser checks covered all three desktop and phone layouts, atlas category filtering, index project selection, expandable experience entries, keyboard cycling with wraparound, and browser back navigation. No horizontal page overflow was observed at the phone size, and the browser reported no JavaScript errors. The studio phone layout was revised after screenshot review. No new dependencies were added.

## Second round

The user initially preferred Atlas and Studio, then clarified that all three layouts are useful and colors can change later. Preserve all three options. The next directions should add character and useful interaction. Add two structures, bringing the comparison to five.

References checked September 2026:
- [It's Nice That web design collection](https://www.itsnicethat.com/media/web-design): recent work includes experimental publishing and technology-led fashion collaborations. Useful for looking beyond portfolio templates.
- [Michael Kolesidis's portfolio source](https://github.com/michaelkolesidis/michaelkolesidis.com): its author describes draggable objects, stacking, and an early-web influence. Borrow the idea of letting visitors manipulate the work, not its visual treatment.
- [ITom's portfolio](https://itomdev.com/): a contemporary developer portfolio built around interactive work. Awards or appearance cannot establish whether AI was involved.

### Workbench, option 4

A personal worktable with actual project artifacts, a small portrait, differently shaped project covers, and a spread/tidy control. Clicking a cover opens a native dialog with project details. Dense enough to feel inhabited; body copy remains straight and readable. Palette: pale blue #cbdde5, bottle ink #24382f, chartreuse paper #e1e89e, chalk #fcfcf7, faded orange #cf6847. Georgia for the name, Avenir Next for readable copy. Structure: `[identity + nav] [short personal intro] [movable-layout artifact board] [all projects + career]`.

### Model playground, option 5

A portfolio that begins with a tiny working regression experiment. Visitors adjust a line and see residuals change, then open project drawers. Large blue type and uneven inset panels reference educational exhibits rather than a dashboard. Palette: cobalt #233faa, lemon #f1ec9a, light blue #dce9f3, white #ffffff, ink #1b2940. Trebuchet MS headings and Helvetica Neue body. Structure: `[wordmark + nav] [oversized intro | hands-on model] [full-width project drawers] [career]`. Synthetic data is explicitly labeled. No simulated live results.

Critique: abandoned more sticky-note copy and a fake terminal. Both would add a persona the source material does not support. Movement will respond to selection, rearrangement, or the regression control. No idle bouncing, hijacked scrolling, cursor replacement, or compulsory intro animation.

Second-round verification: TypeScript and production build pass. Browser checks confirmed desk rearrangement, project dialog open/close and Escape dismissal, mobile design selection, range keyboard behavior, residual visibility, and the automatic fit. The demo error falls from 10.99 to about 0.14. Both added layouts fit the tested phone viewport without horizontal page overflow. No dependencies added.


## Workbench scene revision

The user asked for a physical desk, steaming coffee, open laptop on a stand, monitor, keyboard, vertical mouse, and framed portrait. Option 4 now uses a responsive SVG room with HTML project buttons on the screens and papers. Cadence replaces Fire-Ready Forests as the featured desk project. The four remaining projects are clickable book covers on a timber shelf, flanked by decorative books on desktop. The other four layout options remain available.

The steam can be paused and respects reduced-motion settings. Phone layouts include readable project buttons beneath the scaled scene. No generated raster assets or dependencies were needed. Verified the Cadence dialog, forest project on the shelf, Escape dismissal, steam pause, desktop composition, and phone layout without horizontal overflow.

## Desk correction pass

Updated GPA to 3.91 in both portfolio views and changed the workbench education panel to muted gray-green. Removed the SVG wall and light patches so the page background continues through the scene. Replaced patterned keyboard keys with explicit rows and a separate bottom-row spacebar. Straightened the laptop and its stand, placed the photo frame upright at table height, reversed the mouse orientation, and aligned the mug base and saucer. Both project cards now sit inside the tabletop boundaries.

Fitness recommendations now occupies the monitor; Concert Scout stays on the laptop. Fire-Ready Forests and Cadence occupy the desk cards. Multiple Linear Regression is on the shelf and uses that full title throughout the prototype. The decorative book spines now use the user's supplied reading list: Parable of the Sower, Disney War, Meditations, The Andromeda Strain, and Atomic Habits. All five reading titles remain visible on phones.

Verified the desktop geometry, mobile shelf, fitness and regression dialogs, GPA text, and lack of horizontal overflow. TypeScript and production build pass.

## Personal details and second shelf

Replaced the portrait with the user-provided canyon photo, copied as `public/atherv-canyon.jpeg`. The framed crop focuses on the person. Changed labels to Resume and 3.91 GPA. Made the cup taller and reduced its handle. Reading books now stand upright. Project covers use two shelves and wider proportions, without cover pictures.

Added Avid Autofill and FitBuddy as current side projects after reading their public GitHub READMEs:
- https://github.com/athervvidhate/avid-autofill
- https://github.com/athervvidhate/fitbuddy

Book palettes use specific publisher editions, softened for the page. They may differ from the user's own editions:
- Parable of the Sower, Seven Stories 9781609807191: gold, ivory, dark green. https://www.sevenstories.com/books/3927-parable-of-the-sower
- DisneyWar, Simon & Schuster 9780743267090: navy/blue, gold, white. https://www.simonandschuster.com/books/DisneyWar/James-B-Stewart/9780743267090
- Meditations, Penguin Classics 9780140449334: dark teal, gray-green, ivory. https://www.penguin.co.uk/books/35489/meditations-by-aurelius-marcus/9780140449334
- The Andromeda Strain, Vintage 9781101974490: ivory, black, cyan-blue. https://www.penguinrandomhouse.com/books/33522/the-andromeda-strain-by-michael-crichton/
- Atomic Habits, Avery 9780735211292: ivory and tan-gold. https://www.penguinrandomhouse.com/books/543993/atomic-habits-by-james-clear/

A bookmark on Disney War reveals Currently reading on hover or keyboard focus. Further ideas proposed, not implemented: refill the coffee, wake the monitor with the keyboard, and open the framed photo. All essential navigation should remain direct and independent of discoveries.

## Desk discoveries

- Coffee takes three clicks to empty; the next click refills it. Steam disappears while empty. The existing pause control still applies.
- Three clicks on the red Escape key reveal Desk Dino on the monitor. Space, Up, or tapping jumps over books. Collision ends the run; tap restarts; Escape or the close control restores the project monitor and keyboard focus.
- The game uses a larger overlay on narrow screens so it remains playable.
- Framed photo uses reduced saturation and contrast in CSS. Original photo file is preserved.
- Verified coffee empty/refill, two-click versus three-click reveal, keyboard jump, collision, restart, Escape/focus restoration, and mobile overflow in the browser. TypeScript and build pass. Runnable physics check: `node scripts/check-desk-runner.cjs`.

## Approved workbench release

The workbench is now the default production homepage. Other design options remain available through the development-only variant switcher. Avid Autofill and FitBuddy are labeled Currently building. The frame opens the uncropped photo in a native dialog, the desk projects are a field notebook and clipboard, and the laptop has a keyboard deck and front edge. Project placement was checked at desktop and phone widths. The runner uses a shorter jump and faster starting speed, covered by the physics check.

Verified the production build at the root URL with no design controls, plus TypeScript and the runner check before pushing main.
