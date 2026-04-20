# QuillBill — User Journey Maps

---

## Journey 1: Priya — Invoicing a Client After Project Delivery

**Scenario:** Priya just finished a logo design project for a café owner. She needs to send a professional invoice before the end of the day so she can get paid on time.

### Journey Stages

| Stage | Action | Touchpoint | Thought / Feeling | Pain / Opportunity |
| ----- | ------ | ---------- | ------------------ | ------------------ |
| **1. Trigger** | Client confirms project is complete over WhatsApp and asks for the invoice | WhatsApp | *"Great, let me send this quickly before I forget."* | Needs to act fast while the client is engaged |
| **2. Discovery / Entry** | Opens QuillBill in browser — no sign-up, lands directly on the editor | Browser → quillbill.vercel.app | *"Oh nice, I can just start. No account needed."* | Zero friction entry removes the biggest dropout point |
| **3. Template Selection** | Browses templates, picks "Modern" to match her personal brand aesthetic | Template picker | *"This one looks clean and matches my style."* | 15 options give her confidence she'll find the right fit |
| **4. Fill Details** | Enters her business name, client details, and line items (Logo Design — ₹15,000) | Editor panel | *"This is straightforward. Live preview is helpful."* | Split-pane preview lets her see the final result as she types |
| **5. Customize** | Uploads her logo, changes accent color to match her brand palette | Logo upload + color picker | *"Now it looks like it came from a real studio."* | Logo + color customization elevates perceived professionalism |
| **6. Review** | Checks the A4 preview — verifies totals, tax, and formatting | Live preview | *"Looks perfect. The math adds up."* | Auto-calculated totals prevent embarrassing errors |
| **7. Share** | Clicks "Share" → copies the view-only link | Share modal | *"I'll just paste this in our WhatsApp chat."* | Link-based sharing is ideal for her WhatsApp-heavy workflow |
| **8. Deliver** | Pastes the shareable link to the client on WhatsApp | WhatsApp | *"Done. That took less than 5 minutes."* | Client receives a clean, professional invoice instantly |
| **9. Backup** | Downloads PDF as a personal record for her tax files | PDF export (browser print) | *"Good to have a copy saved locally too."* | PDF export serves as a permanent offline backup |

### Outcome
Priya invoiced her client in under 5 minutes without creating an account, and the invoice looked polished enough to reinforce her professional brand.

### Key Moments of Delight
- No sign-up wall on first visit
- Live preview showing the final invoice as she typed
- One-click shareable link ready for WhatsApp

---

## Journey 2: Daniel — Creating a Quotation Then Converting to Invoice

**Scenario:** A local bakery asks Daniel for a quote to build their website. After the quote is approved two weeks later, he needs to convert it into a final invoice.

### Journey Stages

| Stage | Action | Touchpoint | Thought / Feeling | Pain / Opportunity |
| ----- | ------ | ---------- | ------------------ | ------------------ |
| **1. Trigger** | Bakery owner emails asking "How much would a website cost?" | Email | *"Let me put together a proper quote instead of just texting a number."* | A formal quotation builds trust and sets expectations |
| **2. Entry** | Opens QuillBill, toggles document type to "Quotation" | Mode toggle | *"Good — it says Quotation at the top, not Invoice. That matters."* | Invoice/Quotation toggle avoids misrepresenting the document |
| **3. Build Quotation** | Adds line items: Website Design ($2,000), Hosting Setup ($300), SEO Basics ($500) | Editor panel | *"Clean breakdown. They can see exactly what they're paying for."* | Itemized line items with descriptions build client confidence |
| **4. Template Choice** | Picks "Executive" template for a premium feel | Template picker | *"This makes my side gig look like a real agency."* | Template quality punches above the weight of a one-person operation |
| **5. Export JSON** | Downloads JSON backup of the quotation | JSON export | *"I'll save this in my project folder alongside the code repo."* | JSON export fits naturally into a developer's file-based workflow |
| **6. Share** | Sends view-only link to the bakery owner via email | Share modal → Email | *"They can view it without installing anything."* | Recipient experience is frictionless — just a browser link |
| **7. Wait** | Two weeks pass. Bakery owner approves the quote. | — | *"Time to turn this into an invoice."* | — |
| **8. Reload** | Opens QuillBill — auto-saved data is still there from localStorage | Browser → auto-restore | *"It remembered everything. I don't have to start over."* | Auto-save prevents data loss across sessions |
| **9. Convert** | Toggles document type from "Quotation" to "Invoice", updates date and adds payment terms | Mode toggle + editor | *"Just flipped the switch. All line items carried over."* | Seamless quotation-to-invoice conversion saves significant rework |
| **10. Deliver** | Sends final invoice link + PDF attachment to the client | Share link + PDF | *"Professional and done. No SaaS subscription needed."* | Dual delivery (link + PDF) covers all client preferences |

### Outcome
Daniel went from quotation to approved invoice without re-entering any data, using a workflow that cost him $0 and fit into his developer-friendly toolchain.

### Key Moments of Delight
- Quotation/Invoice toggle preserved all content
- JSON export let him store the quote alongside project files
- localStorage auto-save recovered his work after two weeks

---

## Journey 3: Fatima — Quoting a Catering Event With Branding

**Scenario:** A corporate client calls Fatima to cater a 50-person office lunch. She needs to send a branded quotation with itemized pricing, including tax and delivery charges.

### Journey Stages

| Stage | Action | Touchpoint | Thought / Feeling | Pain / Opportunity |
| ----- | ------ | ---------- | ------------------ | ------------------ |
| **1. Trigger** | Client calls asking for a quotation for a corporate lunch | Phone call | *"I need to send this before they contact another caterer."* | Speed matters — first quote sent often wins the deal |
| **2. Entry** | Opens QuillBill on her iPad | iPad Safari → quillbill.vercel.app | *"It works nicely on my iPad. I can do this from the kitchen."* | Responsive layout makes the iPad a viable work device |
| **3. Branding** | Uploads her catering business logo, sets accent color to her brand's gold | Logo upload + color picker | *"Now it looks like MY business, not a generic template."* | Visual branding creates instant recognition and trust |
| **4. Template** | Chooses "Elegant" template — it matches the upscale feel she wants for corporate clients | Template picker | *"This looks expensive. My client will take me seriously."* | Template choice influences how the client perceives her business |
| **5. Line Items** | Adds items: Main Course x50 (AED 35 each), Appetizers x50 (AED 15 each), Beverages x50 (AED 10 each), Dessert x50 (AED 20 each) | Editor panel | *"Easy to add items. The totals update as I type."* | Real-time total calculation prevents manual math errors |
| **6. Tax & Delivery** | Adds 5% VAT tax and AED 200 delivery/setup charge | Tax + shipping fields | *"Good, I can include VAT and delivery. Some tools don't let me do this."* | Built-in tax and shipping fields handle real-world pricing complexity |
| **7. Preview** | Reviews the full A4 preview — checks layout, branding, and final total (AED 4,400) | Live preview | *"This looks perfect. Professional and clear."* | WYSIWYG preview catches layout issues before sending |
| **8. Share** | Copies shareable link to send via WhatsApp to the client's office manager | Share modal → WhatsApp | *"They can see it right away on their phone."* | WhatsApp-friendly links match her clients' communication preference |
| **9. Follow-up** | Client approves. Fatima returns to QuillBill, switches to Invoice mode, adds payment terms | Mode toggle + editor | *"I just changed it to Invoice and added the bank details. Done."* | Quotation-to-invoice conversion saves re-entry of all 4 line items |
| **10. PDF Backup** | Downloads PDF for her records folder | PDF export | *"I keep a folder of all my invoices. This goes in there."* | PDF serves as a permanent, printable record |

### Outcome
Fatima sent a branded, itemized quotation within 15 minutes of the client's call, beating competitors to the punch. After approval, she converted it to an invoice without starting over.

### Key Moments of Delight
- Logo + accent color made the document feel uniquely hers
- Tax and shipping fields handled VAT and delivery seamlessly
- Live preview on iPad gave her full confidence before sending

---

## Journey 4: Marcus — Drafting a Quick Quotation for a Client Call

**Scenario:** Marcus has a client call in 20 minutes. The client wants a rough cost breakdown for a new mobile app project. He needs to draft a quotation fast and share it with his team lead for a quick review before the call.

### Journey Stages

| Stage | Action | Touchpoint | Thought / Feeling | Pain / Opportunity |
| ----- | ------ | ---------- | ------------------ | ------------------ |
| **1. Trigger** | Calendar reminder pops up — client call in 20 minutes, and they expect a cost estimate | Calendar notification | *"I need a quotation NOW. No time to go through finance."* | Time pressure demands a tool with zero setup time |
| **2. Entry** | Opens QuillBill in browser, selects Quotation mode | Browser → quillbill.vercel.app | *"No login. Good. I don't have time for that."* | Instant access is critical when working under pressure |
| **3. Template** | Picks "Professional" template — clean, corporate, matches the agency's style | Template picker | *"This won't embarrass us in front of the client."* | Template quality reflects directly on the agency's brand |
| **4. Quick Draft** | Rapidly enters line items: Discovery & Strategy (EUR 5,000), UI/UX Design (EUR 12,000), Development (EUR 25,000), QA & Launch (EUR 8,000) | Editor panel | *"Rough numbers but good enough for a ballpark discussion."* | Speed of entry matters more than pixel-perfection at this stage |
| **5. Internal Review** | Generates an editable share link and sends it to his team lead on Slack | Editable share link → Slack | *"Can you sanity-check these numbers before the call?"* | Editable links enable real-time team collaboration |
| **6. Feedback** | Team lead opens the link, adjusts the Development line item to EUR 30,000 | Colleague's browser | *"Good catch — I was underestimating the backend work."* | Collaborative editing prevents underquoting on calls |
| **7. Finalize** | Marcus refreshes, sees the updated total, makes one more adjustment | Editor panel | *"Alright, EUR 55,000 total. That feels right."* | Quick iteration before the deadline |
| **8. Present** | Shares screen during the video call, walks the client through the quotation | Video call + screen share | *"Here's the breakdown. As you can see..."* | Professional document on screen elevates the conversation |
| **9. Send** | After the call, generates a view-only link and emails it to the client | View-only share link → Email | *"Sent. Now it's on record."* | View-only link prevents accidental client edits |
| **10. Archive** | Downloads PDF and uploads it to the agency's project management tool | PDF export → PM tool | *"Logged in Asana for the project record."* | PDF integrates into the agency's existing documentation workflow |

### Outcome
Marcus went from zero to a team-reviewed quotation in under 15 minutes, presented it confidently on a client call, and delivered the formal document immediately after — all without touching the finance team's tools.

### Key Moments of Delight
- Editable share link turned a solo task into a team collaboration
- No login meant his team lead could jump in instantly
- The quotation looked polished enough to present on a live client call

---

## Journey 5: Aisha — Creating Monthly Tutoring Receipts on Mobile

**Scenario:** It's the end of the month. Aisha needs to send receipts to 8 parents for their children's tutoring sessions. She's doing this from her phone between classes.

### Journey Stages

| Stage | Action | Touchpoint | Thought / Feeling | Pain / Opportunity |
| ----- | ------ | ---------- | ------------------ | ------------------ |
| **1. Trigger** | Parents start asking "Can you send the receipt for this month?" on WhatsApp | WhatsApp messages | *"I need to send these today. Let me do it between classes."* | Receipts need to go out promptly to maintain trust with parents |
| **2. Entry** | Opens QuillBill on her Android phone's browser | Mobile Chrome → quillbill.vercel.app | *"It loads fast even on my data plan. Good."* | Lightweight web app doesn't drain data or storage |
| **3. First Receipt** | Fills in her details, the first parent's name, and line items: Math Tutoring — 8 sessions x KES 500 | Mobile editor | *"The mobile layout is easy to use. I can do this one-handed."* | Bottom sheet preview and responsive design make mobile usable |
| **4. Preview** | Swipes up the bottom sheet to preview the receipt | Mobile bottom sheet | *"Looks good. Clean and simple."* | Mobile preview gives confidence without switching views |
| **5. Share** | Taps Share → copies the view-only link | Share modal | *"One tap to copy. Perfect."* | Minimal taps to complete the core action |
| **6. Deliver** | Switches to WhatsApp, pastes the link in the parent's chat | WhatsApp | *"Receipt sent! Next one."* | Link delivery is instant — no file attachment complications |
| **7. Repeat** | Goes back to QuillBill — her details are auto-saved, only needs to change the parent's name and session count | Editor (auto-saved) | *"I just change the name and the number of sessions. Everything else stays."* | Auto-save means 80% of the form is pre-filled for subsequent receipts |
| **8. Batch Complete** | Repeats steps 3–7 for the remaining 7 parents over 30 minutes between classes | Mobile editor → WhatsApp (loop) | *"Done! All 8 receipts sent. That was painless."* | Repetitive invoicing becomes a fast, repeatable workflow |
| **9. Confirmation** | Parents reply with thumbs-up emojis and payment confirmations | WhatsApp | *"They got it. No questions about the format."* | Professional-looking receipts eliminate follow-up questions |

### Outcome
Aisha sent 8 professional receipts from her phone in about 30 minutes, spread across breaks between classes. Parents received clean, branded links they could open instantly — no app downloads, no confusion.

### Key Moments of Delight
- Auto-saved details meant only 2 fields changed per receipt
- Mobile-optimized layout made the phone a real productivity tool
- Parents received a link, not a heavy PDF attachment

---

## Journey Comparison Matrix

| Dimension | Priya | Daniel | Fatima | Marcus | Aisha |
| --------- | ----- | ------ | ------ | ------ | ----- |
| **Entry Device** | Laptop | MacBook | iPad | Windows laptop | Android phone |
| **Document Type** | Invoice | Quotation → Invoice | Quotation → Invoice | Quotation | Invoice (receipt) |
| **Key Workflow** | Create → Share link | Create → Export JSON → Convert later | Brand → Itemize → Share | Draft → Team review → Present | Create → Repeat for batch |
| **Delivery Channel** | WhatsApp link | Email link + PDF | WhatsApp link | Slack (internal) → Email (client) | WhatsApp link |
| **Time to Complete** | ~5 min | ~10 min (initial) + ~3 min (convert) | ~15 min | ~15 min (incl. team review) | ~4 min each, 30 min total |
| **Sessions Involved** | Single | Two (quote + invoice) | Two (quote + invoice) | Single (fast iteration) | Single (repeated 8x) |
| **Most Valued Feature** | Shareable links | JSON export + mode toggle | Logo + tax/shipping | Editable share links | Mobile layout + auto-save |
