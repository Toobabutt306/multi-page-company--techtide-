# TechTide Solutions – Company Website

## Project Title
TechTide Solutions — Multi-Page Company Website (HTML + CSS)

**TechTide Summer Internship 2026**
Day 2 Assignment — CSS Box Model & Layout (building on Day 1's CSS Fundamentals)

## Objective
Enhance the existing multi-page website by applying the CSS Box Model
(margin, padding, border, box-sizing) and improving overall layout —
containers, card designs, button states, navigation, and footer — while
keeping everything in a single external stylesheet.

## Pages

| Page     | File            | Description                                                                 |
|----------|-----------------|-------------------------------------------------------------------------------|
| Home     | `index.html`    | Hero (with background image), Featured Services cards, **Featured Content cards**, **video** |
| About    | `about.html`    | Overview, mission, vision, Team Member cards with photos, **Workspace & Culture gallery** |
| Services | `services.html` | Five services, each with an icon, styled as individual cards                  |
| Contact  | `contact.html`  | Office banner image, Contact Information cards, embedded map, contact form    |

## Project Structure

```
techtide-website/
├── index.html
├── about.html
├── services.html
├── contact.html
├── css/
│   └── style.css
├── images/
│   ├── hero-bg.jpg
│   ├── office-building.jpg
│   ├── company-intro-poster.jpg
│   ├── team-sara.png / team-bilal.png / team-ayesha.png / team-hamza.png
│   ├── icons/
│   │   ├── icon-web-development.png
│   │   ├── icon-cloud-consulting.png
│   │   ├── icon-digital-marketing.png
│   │   ├── icon-it-support.png
│   │   └── icon-mobile-app.png
│   └── gallery/
│       ├── featured-case-study.jpg / featured-blog.jpg / featured-whitepaper.jpg
│       └── about-collaboration.jpg / about-innovation.jpg / about-growth.jpg
├── videos/
│   └── company-intro.mp4
└── README.md
```

All images and the video were generated specifically for this project (no
external/copyrighted media), so there are no licensing concerns.

## CSS Concepts Used

**Carried over from Day 1:** external stylesheet only, Google Fonts,
CSS variables, universal reset, full typography scale, sticky navigation,
gradient hero section, table-based card grids, styled forms, responsive
media query.

**New in Day 2:**
- **Box Model applied deliberately throughout** — every card, section,
  button, and form field now has explicit `margin`, `padding`, `border`,
  and (where relevant) `border-radius`, documented with inline comments
  in `style.css` next to each property.
- **Main content container** — `<main>` has a fixed `max-width: 1100px`,
  is centered with `margin: 0 auto`, and controls inner spacing with
  `padding` (this was introduced in Day 1 and is now explicitly called
  out as the "container" per the Day 2 requirement).
- **Bordered sections** — every `<section>` gets a left border + left
  padding, visually separating page regions.
- **Three card systems**, each with border + border-radius + padding +
  margin + box-shadow:
  1. `main > section > article` — single-column cards (Who We Are,
     Mission, Vision, and each Service on the Services page).
  2. `table td` — grid cards (Featured Services, Team Members, Featured
     Content, Contact Information).
  3. `.read-more-link` — a small pill-button call-to-action inside the
     Featured Content cards.
- **Buttons** — background color, padding, border-radius, `cursor:
  pointer`, and a hover state (color change + lift) on every `<button>`
  and `input[type="submit"]`.
- **Improved navigation** — spacing between menu items (`gap`), a new
  `.active` state that highlights the current page, and refined hover
  underline effects.
- **Image system** — a base `img` rule plus purpose-built variants:
  `.avatar` (circular team photos), `.icon-img` (small service icons),
  `.card-img` (rectangular content thumbnails), and `.banner-img` (wide
  banner image), so every image type is sized and cropped consistently.
- **Video styling** — a `.video-wrapper` / `.intro-video` rule set that
  keeps the embedded video responsive, rounded, and shadowed like the
  other cards.
- **Clean footer layout** — flexbox arrangement of copyright/contact
  info against the social links, with a seafoam top border accent.
- **CSS-only "Back to Top" button** *(Bonus)* — a `position: fixed`
  circular button linking to `#top`, no JavaScript required.

## Features Added in Day 2

- Applied the box model (margin/padding/border) consistently across
  sections, cards, buttons, and form fields.
- Turned every major content block into a card with border, radius,
  padding, margin, and shadow — including the individual Services page
  entries, which were previously plain text blocks.
- Added a **Featured Content** card section to the Home page (case
  study, blog post, whitepaper), completing the three required card
  categories (Services, Team Members, Featured Content).
- Added an original hero background image, five custom service icons,
  three "workspace & culture" illustrations on the About page, three
  Featured Content thumbnails, and an office-building illustration on
  the Contact page — all generated specifically for this project.
- Added a short **company intro video** (`videos/company-intro.mp4`,
  ~8 seconds, self-produced) embedded on the Home page with a poster
  image and native HTML5 video controls.
- Added **active-page highlighting** in the navigation bar.
- Added a **CSS-only "Back to Top" button** *(Bonus challenge)*.
- Refined the footer into a clean two-column flex layout.
- Extra responsive rules for the new sections, footer, and back-to-top
  button at narrow widths.

## How to Run the Project

1. Download or clone this repository, keeping the folder structure intact
   (`css/`, `images/`, and `videos/` must stay alongside the HTML files).
2. Open `index.html` in any modern web browser.
3. Use the navigation bar to move between Home, About, Services, and
   Contact — the current page is highlighted automatically.
4. Click the circular arrow button in the bottom-right corner at any time
   to jump back to the top of the page.
5. An internet connection is needed the first time each page loads so the
   Google Fonts and the embedded Contact-page map can load; the images
   and video are all local files and work fully offline.

## Notes on the "Cards Without a CSS Framework" Approach

No Bootstrap or CSS framework is used anywhere. All card grids are plain
HTML `<table>` elements (from the original HTML-only assignment) or plain
`<article>` elements, styled entirely through custom CSS in
`css/style.css` — borders, spacing, rounded corners, shadows, and hover
lift are hand-written rules, not framework classes.

## Author

TechTide Summer Internship 2026 — Intern Submission
