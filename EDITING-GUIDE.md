# Beau Monde Salon Suites — Site Editing Guide

## Tech Stack

- **Framework:** Astro 5 with static site generation
- **Styling:** Tailwind CSS v4
- **Deployment:** GitHub Pages via GitHub Actions (auto-deploys on push to `main`)
- **Domain:** beaumondesalonsuites.com

## Project Structure

```
src/
├── assets/
│   ├── hero/           # Homepage hero background image
│   ├── logo/           # Logo files
│   ├── professionals/  # Stylist headshot photos
│   └── salon/          # Salon/building photos (used on leasing page)
├── components/
│   ├── Button.astro
│   ├── Footer.astro
│   ├── Navbar.astro
│   └── ProfessionalCard.astro
├── content/
│   └── professionals/  # One .md file per stylist (content collection)
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro           # Homepage
│   ├── leasing.astro         # Leasing info page
│   └── professionals/
│       └── [id].astro        # Individual stylist detail pages
└── styles/
    └── global.css            # Theme colors and fonts
```

## Adding a New Professional

1. Create a new `.md` file in `src/content/professionals/`. Use a kebab-case filename (e.g., `jane-doe-studio.md`). The filename becomes the URL slug (`/professionals/jane-doe-studio`).

2. Use this template for the frontmatter:

```md
---
name: "Display Name ~ Business Name"
title: "Job Title"
category: "hair"
photo: "../../assets/professionals/filename.jpg"
bio: "A short paragraph about the professional."
services:
  - "Service One"
  - "Service Two"
bookingUrl: "https://booking-link.com"
instagram: "https://www.instagram.com/handle"
facebook: "https://www.facebook.com/page"
phone: "919-555-1234"
email: "email@example.com"
suite: "Suite 1"
order: 1
---
```

3. Add their headshot photo to `src/assets/professionals/`. Use a square or near-square image for best results.

4. **Set the `order` field** — this controls the display order on the homepage grid and the previous/next navigation on detail pages. Professionals are sorted by ascending `order` value. If inserting between existing stylists, renumber the surrounding `order` values so they remain sequential.

### Required fields

| Field      | Description                                              |
|------------|----------------------------------------------------------|
| `name`     | Display name, can include business name after `~`        |
| `title`    | e.g., "Hair Stylist", "Nail Artist", "Esthetician"      |
| `category` | One of: `hair`, `nails`, `skincare`, `brows-lashes`      |
| `bio`      | Short description paragraph                               |

### Optional fields

| Field        | Description                                    |
|--------------|------------------------------------------------|
| `photo`      | Relative path to headshot in assets             |
| `services`   | List of services offered                        |
| `bookingUrl` | External booking site URL                       |
| `instagram`  | Full Instagram profile URL                      |
| `facebook`   | Full Facebook page URL                          |
| `phone`      | Phone number (shown as Call button)             |
| `email`      | Email address (shown as Email button)           |
| `suite`      | Suite identifier, e.g., "Suite 4A"             |
| `order`      | Number controlling sort order (default: 99)     |

## Changing Display Order

The `order` field in each `.md` file determines:
- The order of cards on the homepage grid
- The previous/next navigation links on each stylist's detail page

**Previous/next links are computed automatically** — you do not need to manually update any links. Just change the `order` values and the site handles the rest.

Current order (by suite number):

| Order | Suite    | Professional                      |
|-------|----------|-----------------------------------|
| 1     | Suite 1B | Moonstone & Mane                  |
| 2     | Suite 2  | Daniel & Co Hair                  |
| 3     | Suite 3  | Blaire Hair Collective            |
| 4     | Suite 4A | Chris Phillips Hair Lounge        |
| 5     | Suite 4B | Moonstone Studio (Morgan)         |
| 6     | Suite 5  | Krystal Beeler ~ Smoke and Mirrors|
| 7     | Suite 6  | Hannah ~ Studio 88                |
| 8     | Suite 7  | Nails by Ashley                   |
| 9     | Suite 8  | Boujee Hair Lounge                |
| 10    | Suite 9  | Flourish Hair Lounge              |
| 11    | Suite 10 | Vault Studio (Mindy)              |
| 12    | Suite 10 | Vault Studio (Shannon)            |
| 13    | Suite 11 | Threadmandu (Shalu)               |
| 14    | Suite 12 | Jersey Lashes                     |
| 15    | Suite 13 | Refreshed                         |

## Removing a Professional

Delete their `.md` file from `src/content/professionals/` and optionally remove their photo from `src/assets/professionals/`. No other files need to change.

## Editing the Homepage

- **Hero section** (logo, background image, location link): `src/pages/index.astro`
- **Category filter buttons**: Edit the `categories` array in `src/pages/index.astro`
- **Card appearance**: `src/components/ProfessionalCard.astro`

## Editing the Leasing Page

All leasing content is in `src/pages/leasing.astro` — amenities list, highlight cards, CTA section, and hero.

## Theme Colors

Defined in `src/styles/global.css` under `@theme`:

| Token       | Value     | Usage                    |
|-------------|-----------|--------------------------|
| `cream`     | `#FAFAF8` | Page backgrounds         |
| `gold`      | `#C9A96E` | Accent, buttons, links   |
| `gold-dark` | `#B08D4F` | Button hover states      |
| `charcoal`  | `#2C2C2C` | Headings, dark text      |
| `muted`     | `#6B7280` | Secondary text           |

## Deploying

Push to `main` and GitHub Actions will automatically build and deploy to GitHub Pages. You can also trigger a manual deploy from the Actions tab in the GitHub repo.

## Running Locally

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.
