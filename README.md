# Sampson — Senior Media Designer

Personal portfolio site. Single-page, static, no build step.

## What's in here

```
site/
├── index.html        # the whole site
├── styles.css        # all styles
├── script.js         # minimal interactivity
└── assets/
    ├── portrait.jpg
    ├── portrait-square.jpg
    ├── 01_Bournemouth.pdf                    # case study deck
    ├── 02_Premier_League.pdf                 # case study deck
    ├── AFC_Bournemouth_case_study.pptx       # downloadable source
    └── Rise_of_the_Mid_case_study.pptx       # downloadable source
```

## Run locally

The site is plain HTML/CSS/JS — open `index.html` directly in a browser, or serve it from any local server.

```bash
# Quick preview with Python
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

Three quick paths, in order of "least effort":

### 1. Netlify drop

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag this entire `site/` folder onto the page
3. Done — you'll get a `*.netlify.app` URL in seconds. Free, with HTTPS.

### 2. Vercel

If you have a GitHub account:

1. Push this folder to a GitHub repo (e.g. `sampson-portfolio`)
2. Go to [vercel.com/new](https://vercel.com/new), import the repo
3. Framework preset: **Other** (no build step)
4. Output directory: `.` (the root)
5. Deploy — you'll get a `*.vercel.app` URL

Or via CLI:

```bash
npm install -g vercel
cd site/
vercel
```

### 3. GitHub Pages

1. Push this folder to a public GitHub repo
2. In the repo, **Settings → Pages**
3. Source: **Deploy from branch**, branch: `main`, folder: `/ (root)`
4. Wait ~1 minute → site live at `https://<username>.github.io/<repo>/`

## Custom domain

After deploying to Netlify or Vercel, both let you attach a custom domain (e.g. `sampson.design`) for free in their dashboard. Point your DNS at their nameservers and the SSL cert is automatic.

## Editing

The site is intentionally one HTML file plus one CSS file plus one JS file. To change copy, hours, contact info, or stats — edit `index.html` directly. To change colors, fonts, or spacing — open `styles.css` and look at the `:root` variables at the top.

To swap the case-study PDFs, replace the files inside `assets/` keeping the same names.

## Browser support

- Chrome, Safari, Edge, Firefox — last two major versions
- PDF embedding works natively in all modern desktop browsers; on iOS the user taps the embed to open the PDF in a new tab (the fallback button takes care of older browsers)

## Credits

Designed and built by Sampson, May 2026.
