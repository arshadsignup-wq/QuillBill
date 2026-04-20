# Churned User Personas

These personas represent users who evaluated QuillBill but ultimately chose a competitor due to missing features. Understanding their needs helps prioritize the product roadmap.

---

## 1. Priya Mehta — The International Freelancer

**Background:** UI/UX designer based in Bangalore, works with clients across India, the UK, and the Middle East. Bills in INR, GBP, and AED depending on the client.

**Goals:**
- Generate invoices in multiple currencies without switching a global setting
- Display currency-specific formatting (e.g., ₹1,00,000 vs £1,000)
- Include exchange rate references for cross-border invoices

**Pain Points with QuillBill:**
- QuillBill has a single global currency selector — changing it for one client resets all drafts
- No per-invoice currency means she can't keep a consistent set of templates
- Had to manually type currency symbols into line items as a workaround

**Competitor Chosen:** Zoho Invoice — supports multi-currency per invoice with automatic exchange rate lookup.

**What Would Win Her Back:**
- Per-invoice currency selection (already exists) plus multi-currency line items
- Currency formatting that respects locale conventions (Indian numbering, etc.)
- Optional exchange rate field on the invoice

---

## 2. Marcus Chen — The Subscription Agency Owner

**Background:** Runs a 6-person digital marketing agency in Austin, TX. Most clients are on monthly retainers billed on the 1st of each month.

**Goals:**
- Set up recurring invoices that auto-generate monthly
- Send invoice reminders to clients with overdue payments
- Track which invoices are paid vs. outstanding

**Pain Points with QuillBill:**
- Every month he manually recreates the same 12 invoices by loading JSON exports
- No concept of "paid" vs "unpaid" status — just a static document
- The "Duplicate as Invoice" feature helps but still requires manual date changes and re-sharing

**Competitor Chosen:** Wave — free recurring invoices with email delivery and payment tracking.

**What Would Win Him Back:**
- Recurring invoice scheduling (even if just "clone with next month's dates" automation)
- Invoice status tracking (draft → sent → paid)
- Email delivery or at least a "mark as sent" workflow

---

## 3. Sofia Andersson — The Compliance-Conscious Accountant

**Background:** Bookkeeper for 15+ small businesses in Stockholm, Sweden. Needs invoices that comply with EU invoicing regulations and integrate with her accounting software.

**Goals:**
- Generate invoices in Swedish with proper VAT fields
- Export invoice data in a format her accounting software can import (SIE, CSV with specific columns)
- Maintain a searchable client database so she doesn't re-enter details

**Pain Points with QuillBill:**
- English-only interface and templates — clients expect Swedish labels
- No client database — she re-types the same company details for every invoice
- JSON export is not compatible with any accounting software she uses
- No dedicated VAT number or tax ID field (had to use "Notes" as a workaround)

**Competitor Chosen:** Fortnox — Swedish accounting platform with invoicing, client management, and SIE export.

**What Would Win Her Back:**
- Multi-language support (at minimum, customizable field labels)
- Client/contact database that auto-fills the "Bill To" section
- CSV export option with standard accounting columns
- Dedicated tax ID / VAT number fields

---

## 4. James Okafor — The Growing E-commerce Seller

**Background:** Runs a Shopify store selling handmade leather goods from Lagos, Nigeria. Ships internationally and needs to track payments across PayPal, Stripe, and bank transfers.

**Goals:**
- Include payment links (PayPal.me, Stripe payment link) directly on invoices
- Track which invoices have been paid and through which channel
- See a dashboard of monthly revenue from invoicing

**Pain Points with QuillBill:**
- Bank details field was missing (now added!), but no clickable payment links
- No payment status tracking — he uses a separate spreadsheet
- No dashboard or analytics — can't see total invoiced amount per month
- Share links work great, but clients can't click to pay directly from the invoice

**Competitor Chosen:** PayPal Business Invoicing — built-in payment buttons, automatic payment tracking, and revenue dashboard.

**What Would Win Him Back:**
- Clickable payment link field (PayPal.me, Stripe link) rendered as a button on the invoice
- Simple invoice status tracking (unpaid → paid, with date)
- Basic analytics: total invoiced this month, outstanding amount, number of invoices

---

## 5. Rachel Torres — The Team Lead at a Design Studio

**Background:** Creative director at a 12-person design studio in Brooklyn. Multiple designers create invoices for different clients, and she needs to review and approve them before sending.

**Goals:**
- Team members create invoices using shared company branding and templates
- She reviews and approves invoices before they go to clients
- Centralized view of all invoices across the team

**Pain Points with QuillBill:**
- No user accounts means no team collaboration — everyone works in their own browser
- Shared links help, but there's no approval workflow
- Each team member has different localStorage drafts with no central visibility
- No role-based access (designer creates, manager approves, admin exports)

**Competitor Chosen:** FreshBooks — team accounts with role-based permissions, approval workflows, and centralized invoice management.

**What Would Win Her Back:**
- Optional cloud accounts with team workspaces (while keeping the no-login mode for solo users)
- Shared template library that the whole team uses
- Simple approval workflow: draft → pending review → approved → sent
- Team dashboard showing all invoices across members
