# Pocket — your personal workspace

A complete static website made with HTML, CSS, and vanilla JavaScript. No build step, packages, API keys, or paid services are required.

## Start using it

Open `index.html` in a modern browser, or serve this folder with a local server. For consistent browser storage, use one stable website address. Set your name, email, currency, and monthly budget in Settings.

## Using it on your phone

Open your published GitHub Pages address in Safari or Chrome. The bottom navigation gives access to all eight sections. Tap a task or checklist item's text to check it off. Editors have large fields and Save/Cancel controls. Downloaded JPG lists and backups go to your browser's download location.

On iPhone, open the published HTTPS website in Safari, choose **Share → Add to Home Screen**, enable **Open as Web App** if shown, and tap Add. Launch Pocket from its yellow home-screen icon to open it in its own app window. On Android, open it in Chrome and use **Install app / Add to Home Screen** from the browser menu. Open it online first and wait for **Ready for offline use** in Settings. Notes, tasks, checklists, plans, expenses, files, backups, and exports then work offline. Email still needs your mail app and an internet connection. Your phone has separate saved data from your computer. Use backup and restore when you want to move data between them.

## Features

- Dashboard with upcoming plans, unfinished tasks, progress, and monthly spending.
- Notes with editing, search, and email drafts.
- Tasks with six selectable colors (none, yellow, orange, pink, teal, blue), optional due dates, priorities, completion filters, email drafts, and color-preserving JPEG downloads.
- Multiple reusable checklists with completion tracking, JPEG downloads, and email drafts.
- Monthly calendar with plans displayed on their dates, previous/next month controls, a Today button, and a selected-day agenda. Tap a day and choose Add plan to create a plan for it. Editing a plan updates the calendar immediately. Calendar `.ics` export is included. Exported events use local wall-clock time and can be imported into your calendar app. No automatic reminders are sent.
- Separate Add expense and Add income buttons, editable transactions, monthly totals, budget remaining, and CSV exports. Select one currency before entering transactions; changing currency changes display labels, not exchange rates.
- File attachments of up to 10 MB per file, stored on this device, with download and remove controls.
- Full JSON backup and restore, including attachments.
- Responsive desktop and phone layouts inspired by the supplied pink, yellow, orange, and teal card reference.

## Publish with GitHub Pages

1. Sign in at https://github.com and create a repository such as `pocket-workspace`.
2. Upload `index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.json`, `service-worker.js`, `pwa.js`, `.nojekyll`, and the entire `icons/` folder to the repository root. Upload the files inside this folder, not the ZIP itself.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose **main** and **/(root)**, then Save.
6. Wait for the Pages deployment to finish. Open the URL shown in Settings → Pages, usually `https://YOUR-USERNAME.github.io/pocket-workspace/`.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## What “personal” means here

This app saves data to IndexedDB in your browser. Notes and attachments are not uploaded to GitHub or sent to a server. Do not put real personal information or backup files into the repository. The repository contains only the app code.

The website address itself is normally public on GitHub Pages, even when the source repository is private. This app does not provide secure login. Anyone using your browser profile can open its saved data. If you need an access-restricted website or encrypted cross-device sync, those require a different setup with authentication and storage services.

Data does not sync between your phone and computer. To transfer it, download a backup on one device and restore it on the other. Restore replaces the target device's workspace; download its existing backup first if needed. Browser cleanup, private browsing, storage limits, or changing website origin can remove or separate your data. Make regular backups and keep them private.

## Email

Save your email in Settings. A note or list's Email button opens a prepared message using `mailto:`. Your mail app must be configured, and you must review and press Send. Long notes may exceed your mail app's URL limits; copy the text or attach a backup/export manually in that case.

Automatic email and scheduled email cannot run reliably from a static GitHub Pages site. They need an external email service and a server or scheduled job. Never place secret email/API credentials in browser JavaScript.

## Files and maintenance

- `index.html`: app shell, navigation, editor dialog.
- `style.css`: colors, typography, cards, responsive layout.
- `app.js`: all interactions, browser persistence, file handling, and exports.
- `favicon.svg`: Pocket icon.
- `.nojekyll`: publish these files directly.

No third-party fonts or scripts are loaded. Burmese text can be entered and exported; exact font appearance depends on fonts installed on your device. Large backups and many attachments depend on available browser storage. JPEG exports capture the list content, not a screenshot of the whole dashboard.

## PWA installation and updates

Service workers require HTTPS (GitHub Pages provides it) or localhost. Opening index.html directly as a local file cannot enable offline installation. Relative paths keep the manifest and service worker within your repository subfolder.

Pocket caches only its application files. Your personal information remains in IndexedDB. Installation does not add cloud sync or login, and local data is not encrypted. Download a backup before changing browser, installing, or moving devices: storage behavior varies between browsers and installed apps.

After changing any app file, increase VERSION in service-worker.js (for example, v1 to v2) and upload the changed files. Open Pocket online to download the update. Once Settings reports an update ready, close all Pocket tabs and installed app windows, then reopen. Updates replace the application cache without deleting IndexedDB records.

Additional PWA files: manifest.json, service-worker.js, pwa.js, icons/icon-192.png, icons/icon-512.png, icons/icon-maskable-512.png, and icons/apple-touch-icon.png. Offline readiness and installation behavior still need verification in an actual phone browser.
