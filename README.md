# BA Portfolio — Clean Local Version

This is the cleaned, standalone version of the portfolio site. Replit-only dependencies and environment requirements were removed.

## Requirements

Install Node.js 18 or newer.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Build for deployment

```bash
npm run build
npm run preview
```

The production files will be generated in `dist/`.

## Where to edit website information

Most website text is stored directly in these files:

- `src/components/sections/hero.tsx` — name, headline, hero intro, CTA buttons
- `src/components/navigation.tsx` — initials/logo and menu labels
- `src/components/sections/competencies.tsx` — core competency cards
- `src/components/sections/odoo-expertise.tsx` — Odoo expertise text and badges
- `src/components/sections/experience.tsx` — timeline / work experience
- `src/components/sections/industries.tsx` — industries section
- `src/components/sections/resume.tsx` — resume data and PDF download content
- `src/components/sections/contact.tsx` — email, LinkedIn, GitHub, location
- `src/pages/home.tsx` — footer name
- `index.html` — browser title and meta description

## Common edits

Change the name everywhere by searching for:

```text
John Doe
```

Change contact placeholders by searching for:

```text
hello@yourname.com
linkedin.com/in/yourname
github.com/yourname
```

Change the PDF file name in `src/components/sections/resume.tsx` by editing:

```ts
pdf.save("John_Doe_BA_Resume.pdf");
```
