# Batyrbek Amangaliyev — CV website

Live: https://batyraman.github.io/cv/

## Source of truth

The site is plain static HTML/CSS/JS in `dist/`. There is no build step. Edit these files directly:

- `dist/index.html`: all content
- `dist/css/styles.css`: styles (no CSS framework)
- `dist/js/scripts.js`: mobile navigation and active-section highlighting
- `dist/assets/img/`: favicon and profile photo (`profile-640.jpg` / `.webp` are resized copies of `profile.jpg`)

## Deployment

### GitHub Pages
Pushing to `main` runs `.github/workflows/deploy.yml`, which uploads `dist/` (adding `.nojekyll`) and deploys it to GitHub Pages.
