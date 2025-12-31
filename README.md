# Developer Profile — Static Site (Scaffold)

This repository contains a minimal static developer profile scaffold (plain HTML/CSS/JS) with placeholder content.

## What's included
- `index.html` — main page with sections: Hero, About, Projects, Skills, Contact
- `assets/css/style.css` — minimal responsive styles
- `assets/js/main.js` — theme toggle and small utilities
- `assets/img/` — placeholder images
- `.github/workflows/pages.yml` — GitHub Pages deploy workflow

## Edit content
- Replace text in `index.html` with your real name, bio, projects, links.
- Replace images in `assets/img/` or add new ones.
- Update `mailto:` link in the Contact section.

## Deploy to GitHub Pages
Option A — simple (no workflow):
1. In repository settings → Pages, select branch `main` and folder `/ (root)` and save.
2. Your site will be served at `https://<username>.github.io/<repo>`.

Option B — deploy with GitHub Actions (already included):
- The workflow `.github/workflows/pages.yml` will deploy the current repository root to GitHub Pages automatically on push to `main`.

## Customize
- Colors & fonts are defined in `assets/css/style.css` variables.
- `assets/js/main.js` controls theme preference (saved to localStorage).

## Next steps
- Provide your real content (projects, avatar, links) and I can update the site for you or add a polished design.

---
Made with ❤️ — replace content and customize as you like.