# TECHNOVA 2K26 — Website

Static site (HTML + CSS + JS). No backend, no build step, no dependencies.

```
technova-2k26/
├── index.html      page structure (you rarely need to edit this)
├── styles.css      colours, fonts, layout
├── script.js       ★ ALL CONTENT lives at the top of this file ★
├── README.md
└── assets/
    ├── technova-logo.png     small mark used in the header
    ├── hero-art.png          big fest artwork in the hero
    ├── college-logo.png      PLACEHOLDER – replace with your logo
    ├── college-campus.jpg    PLACEHOLDER – replace with a campus photo
    └── favicon.png           browser tab icon
```

## Start (2 minutes)
1. Unzip the folder.
2. Open `script.js` in any editor (VS Code, Notepad). Find `EDIT HERE` at the top.
3. Replace each `[PLACEHOLDER]` with real text. Save.
4. Double-click `index.html` to preview in your browser.

## How to change things (all in `script.js`, top block)
- **Replace images:** overwrite the file in `assets/` with your own, keeping the same file name (PNG/JPG, ideally under 500 KB).
- **Event names / descriptions / dates / fees:** edit the matching line inside `events: [ ... ]`. Add an event by copying one `{ ... },` line; delete a line to remove it.
- **Google Form links:** paste the form link into that event's `registerUrl`. The Register button opens it in a new tab. If the link is empty or not `https://...`, the button shows "Registration opens soon" instead of a broken link.
- **Payment / registration links:** paste the payment or registration page URL as `registerUrl`, or use `paymentInfoUrl` for a general payment-info link.
- **Social links:** `social.instagram` and `social.linkedin`. Icons appear only when a real link is pasted.
- **Google Drive documents:** `brochureUrl`, `rulebookUrl`, `scheduleUrl`, `driveFolderUrl`. Each shows as a small button next to "Events" only when filled. Set Drive sharing to "Anyone with the link can view".
- **Workshop:** edit the `workshop` block; set `enabled: false` to hide it.
- **Maps:** paste a Google Maps share link into `mapsUrl` to show "Open in Google Maps".
- **Contacts:** edit the three `contacts` lines. Phone numbers become tap-to-call.

## Deploy (no server needed)
- **Netlify:** app.netlify.com/drop → drag the whole folder in.
- **Vercel:** push to GitHub → Add New Project → Import → Framework "Other" → Deploy.
- **GitHub Pages:** push to GitHub → Settings → Pages → Deploy from branch `main` / root.
- **Cloudflare Pages:** Connect repo → Framework "None", build command empty, output directory `/`.

## Notes
- The Manrope font loads from Google Fonts; the site falls back to system fonts offline.
- Animations switch off automatically for visitors using "reduce motion".
