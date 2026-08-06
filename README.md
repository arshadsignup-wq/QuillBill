# QuillBill

**A free invoice, quotation and proposal generator that runs entirely in your browser.**

No sign-up. No login. No watermarks. No backend. Your client names, rates and
totals never leave your device — there is no server to send them to.

### → [Try it at www.quill-bill.com](https://www.quill-bill.com)

![QuillBill invoice editor](./screenshot%201.png)

---

## Why this exists

Every free invoice generator asks for an email before it will show you a PDF,
stamps a watermark on the result, or quietly stores your client list on someone
else's server. QuillBill does none of those things.

The entire app is client-side. Open the page, fill in the fields, export a PDF.
That's it. If you close the tab, your draft stays in your own browser's local
storage and nowhere else.

## Features

- **Three document types** — invoices, quotations and proposals from one editor
- **15 templates** — Minimal, Modern, Classic, Compact, Elegant, Bold, Stripe,
  Executive, Clean, Sidebar, Professional, Creative, Letterhead, Receipt and
  Gradient, each with a customisable accent colour
- **PDF export** — clean A4/Letter output via the browser's print pipeline, with
  no watermark and no branding added to your document
- **Your logo** — upload once, stored locally as a data URL
- **Automatic totals** — line items, per-item discounts, tax/VAT rates and
  shipping, all recalculated as you type
- **Any currency** — bill clients anywhere
- **Shareable links** — the document is compressed and encoded into the URL
  itself, so sharing still involves no server
- **Proposal mode** — executive summary, proposed solution, scope of work,
  deliverables, timeline and signature blocks
- **Works offline** once loaded

## Privacy

There is no analytics on your document data, no database, and no account
system. The only network requests the app makes are for its own static assets
and fonts. Shareable links encode the document into the URL fragment rather
than storing it anywhere.

Read the full [privacy policy](https://www.quill-bill.com/privacy).

## Free templates and guides

- [Free invoice templates](https://www.quill-bill.com/invoice-templates) — all 15 formats
- [Free quotation templates](https://www.quill-bill.com/quotation-templates)
- [Free business proposal templates](https://www.quill-bill.com/proposal-templates)
- [How to create an invoice](https://www.quill-bill.com/how-to-create-an-invoice) — step-by-step guide
- [Invoice vs quotation](https://www.quill-bill.com/invoice-vs-quotation) — which to send, and when

## Tech stack

React 19 · TypeScript · Vite 7 · Tailwind CSS 4 · React Router 7

No backend, no database, no external state. Routes are prerendered to static
HTML at build time (`scripts/prerender.mjs`) so each page ships real content and
its own metadata.

## Running locally

```bash
git clone https://github.com/arshadsignup-wq/QuillBill.git
cd QuillBill
npm install
npm run dev
```

Build for production (type-check, bundle, prerender every route, generate
`sitemap.xml` and `robots.txt`):

```bash
npm run build
npm run preview
```

## Project layout

```
src/
  pages/            route components (editor, landing, templates, guides)
  components/       editor, preview and document template components
  seo/              route manifest + JSON-LD builders
  lib/              codec, storage, calculations, export
  entry-server.tsx  build-time prerender entry
scripts/
  prerender.mjs     renders each route to static HTML at build time
```

## Contributing

Issues and pull requests are welcome — bug reports, new document templates and
currency/locale fixes especially. Open an
[issue](https://github.com/arshadsignup-wq/QuillBill/issues) to discuss anything
substantial first.

## License

MIT — see [LICENSE](./LICENSE).
