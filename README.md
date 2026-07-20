# TechTide Solutions — Company Website

## Project Title
TechTide Solutions — Multi-Page Responsive Company Website (HTML + CSS + JS)

**TechTide Summer Internship 2026**
Final CSS Assignment — Complete Responsive Company Website

## Project Description
A four-page, fully responsive company website for a fictional technology
consultancy, TechTide Solutions. The project takes an existing HTML-only
site and applies a complete modern CSS treatment: a professional
charcoal-and-muted-gold color system, custom typography, Flexbox and Grid
layouts, animated components, dark/light mode, and full responsiveness
from desktop down to mobile.

## Pages

| Page     | File            | Description                                                                 |
|----------|-----------------|-------------------------------------------------------------------------------|
| Home     | `index.html`    | Hero, infinite-scroll capability marquee, Who We Are, Featured Services cards, Featured Content cards, intro video, Testimonial cards |
| About    | `about.html`    | Company overview, Mission/Vision, Team Member cards, Workspace & Culture gallery |
| Services | `services.html` | Five services as alternating rows, Pricing section, FAQ accordion            |
| Contact  | `contact.html`  | Office banner, Contact Information cards, embedded map, contact form         |

## Features Implemented

**Typography & Color Theme**
- Google Fonts: Fraunces (display/serif) + Manrope (body/sans)
- Full type hierarchy (h1–h4, lead text, eyebrow labels) with deliberate
  line-height and letter-spacing
- Professional charcoal & muted-gold palette, defined entirely with CSS
  custom properties (`:root`) and reused consistently across every page
- Dark theme by default, with a light-theme override driven by the same
  variable set

**Navigation**
- Responsive Flexbox navigation bar
- Hover effects with an animated underline
- Active-page indicator (gold pill background)
- Sticky navigation on scroll
- Mobile menu via a CSS-only checkbox toggle

**Hero Section**
- Gradient background with a subtle drifting texture image
- Heading, supporting description, and call-to-action buttons
- Consistent spacing system reused on every page's hero/page-hero

**Cards**
- Service cards, Team Member cards, Featured Content cards, Contact
  cards, Pricing cards, and **Testimonial cards** — each with border
  radius, box shadow, hover lift, and smooth transitions

**Buttons**
- Primary (gradient) and ghost button styles
- Hover color/shadow transitions, rounded pill corners, consistent use
  across every page

**Layout**
- Flexbox: header, footer, marquee, button groups, form rows
- CSS Grid: card grids, split layouts, pricing grid, pillars
- Consistent `.wrap` container, spacing scale, and section "bands"

**Responsive Design**
- Tested and adjusted at Desktop (1200px+), Laptop (992px+),
  Tablet (768px+), and Mobile (≤576px) breakpoints via media queries

**Animations & Effects** *(6 implemented)*
- Fade-in / slide-in on scroll (IntersectionObserver + `.reveal` classes)
- Card lift + shadow-glow hover effect
- Image zoom on hover (content & culture cards)
- Button hover/transition effects
- Navigation underline animation
- Icon-badge rotate/scale animation on hover

**Footer**
- Company information, quick links (social), contact email, copyright —
  arranged with Flexbox

## Bonus Challenges Completed
- **Dark Mode toggle** using CSS variables (`[data-theme="light"]`
  override), persisted with `localStorage`
- **Scroll-to-top functionality** — HTML + CSS + JavaScript, fades in
  after scrolling past the hero and smooth-scrolls back to `#top`
- **FAQ section** — CSS-only accordion built with native
  `<details>`/`<summary>`
- **Modern pricing section** — three-tier Flexbox/Grid pricing cards on
  the Services page
- **Infinite-scroll marquee** — a looping capability strip under the
  header on every page (pure CSS keyframe animation, pauses on hover)

## Technologies Used
- HTML5
- CSS3 (Flexbox, Grid, custom properties, keyframe animations,
  `backdrop-filter`, media queries)
- Vanilla JavaScript (`js/site.js`) for the theme toggle, scroll
  progress bar, back-to-top visibility, and scroll-reveal animations
- Google Fonts (Fraunces, Manrope)

## Project Structure

```
techtide-website/
├── index.html
├── about.html
├── services.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── site.js
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

## How to Run the Project

1. Download or unzip this project, keeping the folder structure intact
   (`css/`, `js/`, `images/`, and `videos/` must stay alongside the HTML
   files).
2. Open `index.html` in any modern web browser (or serve the folder with
   a local server, e.g. `python -m http.server`, for the smoothest
   experience with the video and map embed).
3. Use the navigation bar to move between Home, About, Services, and
   Contact — the current page is highlighted automatically.
4. Click the sun/moon icon in the header to toggle dark/light mode; your
   preference is remembered on your next visit.
5. Scroll down on any page to see the fade-in animations, the scroll
   progress bar fill in at the top of the screen, and the back-to-top
   button appear in the bottom-right corner.
6. An internet connection is needed the first time each page loads so
   Google Fonts and the embedded Contact-page map can load; the images
   and video are all local files and work fully offline.

## GitHub Repository
`https://github.com/<your-username>/techtide-website` — replace with your
actual repository link before submission.

## Author
TechTide Summer Internship 2026 — Intern Submission
