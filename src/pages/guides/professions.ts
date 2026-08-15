import type { GuideConfig } from './types';

/**
 * Invoicing by profession.
 *
 * The bar for each of these is that the line items, the payment norms and the
 * disputes are genuinely different — not one template with a job title
 * swapped. Where a profession has no real difference, it does not get a page.
 */

export const photographerInvoiceGuide: GuideConfig = {
  slug: 'photographer-invoice',
  cluster: 'By profession',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'Invoicing for photography: separating shoot fee from licensing, why usage rights belong on the invoice, and handling deposits, prints and image delivery.',
  keyTakeaways: [
    'Separate the shoot fee from the licence. They are different products and are priced differently.',
    'State usage rights on the invoice, not only in the contract — the invoice is what survives.',
    'Deliver final files after payment clears, and say so before the shoot, not after.',
    'Second shooters, travel and retouching are line items, not goodwill.',
  ],
  seo: {
    title: 'Photographer Invoice: Licensing, Usage Rights & Fees',
    description:
      'How to invoice as a photographer: separating shoot fees from licensing, stating usage rights, handling deposits, prints, travel and image delivery terms.',
    canonical: '/photographer-invoice',
  },
  h1: 'How to Invoice as a Photographer',
  intro:
    'Photography invoicing is harder than most freelance work for one structural reason: you are usually selling several different things in a single job. Your time on the day, your skill in post, physical products, and — most importantly and most often forgotten — a licence to use the images. Bundle those into one line reading "Photography services" and you have made the licence invisible, which is exactly how clients end up using your images somewhere you never agreed to.',
  sections: [
    {
      heading: 'The shoot fee and the licence are two different things',
      body: [
        'This is the single most important structural decision in a photography invoice, and it is worth being stubborn about.',
        'The shoot fee pays for your time, your equipment and your expertise on the day. The licence grants the client permission to use the resulting images in defined ways, for a defined period, in defined places. They are separately priced because they vary independently: the same day\'s work is worth far more to a national advertising campaign than to a small business website.',
        'If your invoice shows one combined figure, you have implicitly sold unlimited rights, because nothing on the document says otherwise. When the client later runs your image on a billboard, you have no line to point at.',
        'Split them. Line one: shoot fee. Line two: licence, with the scope written out. Even if the licence is generously priced at zero for a small client, having the line present establishes that rights were a separate thing you granted.',
      ],
      table: {
        head: ['Line item', 'What it covers', 'Varies with'],
        rows: [
          ['Shoot fee / day rate', 'Your time on the day', 'Hours, complexity, crew'],
          ['Licence', 'Permission to use the images', 'Media, territory, duration, exclusivity'],
          ['Retouching', 'Post-production per image', 'Number of finals, depth of edit'],
          ['Travel and expenses', 'Getting there, permits, parking', 'Distance, location fees'],
          ['Second shooter / assistant', 'Additional crew', 'Day rate per person'],
          ['Prints and products', 'Physical goods', 'Size, quantity, finish'],
          ['Rush delivery', 'Compressed turnaround', 'How much you displace'],
        ],
      },
    },
    {
      heading: 'How to write the licence line',
      body: [
        'A usable licence line answers four questions: what media, what territory, how long, and is it exclusive. You can write it in one sentence.',
        '"Licence: web and social media use, worldwide, two years from delivery, non-exclusive." That is enough to be meaningful and short enough that nobody skips it.',
        'Avoid the word "full rights" unless you genuinely mean a buyout, and if you do mean a buyout, price it as one. Clients often ask for full rights because it sounds safer, not because they need it — a conversation about what they actually plan to do with the images frequently lands somewhere much cheaper for them and better for you.',
        'For weddings and portraits the licence is usually a personal-use grant, which still deserves stating, because "personal use" excludes the client\'s employer using the photos in a company newsletter.',
      ],
    },
    {
      heading: 'Deposits and delivery: the sequence that protects you',
      body: [
        'The standard photography sequence exists because of hard experience, and departing from it is where photographers get burned.',
        'Take a booking deposit that secures the date and is non-refundable inside a stated window. For weddings and events this is normal and clients expect it; the date has a real opportunity cost because you cannot sell it twice.',
        'Deliver previews or low-resolution proofs before final payment. Deliver the high-resolution finals after payment clears. State this on the invoice and in the booking confirmation, before the shoot — a delivery condition introduced after the shoot reads as a hostage situation, while the same condition agreed up front reads as normal business.',
        'There is more on structuring the deposit itself in [deposit and advance payment invoices](/deposit-invoice).',
      ],
    },
    {
      heading: 'Sales tax on photography is unusually messy',
      body: [
        'Worth flagging because photographers get caught by this more than most freelancers.',
        'In many jurisdictions the tax treatment differs between services and tangible goods, and photography straddles the line. A digital file delivered electronically, a printed album, and the shoot itself can attract three different treatments — and in several US states, delivering any physical product can make the entire job taxable rather than just the print.',
        'This varies too much by jurisdiction for a general rule to be safe. Confirm the treatment where you operate once, with someone who knows the local rules, and then build it into your template. It is a one-off cost that prevents a recurring problem.',
      ],
    },
  ],
  answersHeading: 'Photography invoicing questions, answered',
  answers: [
    {
      question: 'What should a photography invoice include?',
      answer:
        'Your details and the client\'s, an invoice number and dates, the shoot fee, a separate licence line stating usage rights, retouching, travel and any products, plus the deposit already paid, the balance due, and your delivery terms.',
    },
    {
      question: 'How do I charge for photo licensing?',
      answer:
        'Price it by how much value the use creates: media type, territory, duration and exclusivity. A local business website licence and a national campaign licence for the same photograph are legitimately priced very differently, because what the client gains differs enormously.',
    },
    {
      question: 'Should usage rights go on the invoice or the contract?',
      answer:
        'Both, and the invoice matters more in practice. Contracts get filed and forgotten; the invoice is the document that circulates through the client\'s accounts system and gets found years later when someone asks what was actually bought.',
    },
    {
      question: 'How much deposit should a photographer take?',
      answer:
        'Between 25% and 50% is standard, higher for weddings and events where the date carries real opportunity cost. Make it non-refundable inside a stated window and say so at booking, since that is what makes it enforceable in practice.',
    },
    {
      question: 'When should I deliver photos relative to payment?',
      answer:
        'Previews or watermarked proofs before final payment, high-resolution finals after it clears. State this at booking rather than after the shoot — the same condition reads as standard practice up front and as a hostage demand afterwards.',
    },
    {
      question: 'How do I invoice for a wedding?',
      answer:
        'Usually in two or three stages: a booking deposit securing the date, an optional milestone before the day, and the balance due before final delivery. Itemise coverage hours, second shooter, album and travel separately so any changes are easy to price.',
    },
    {
      question: 'Do I charge for travel as a photographer?',
      answer:
        'Yes, as its own line rather than absorbed into the shoot fee. Mileage or fare, plus parking, permits and accommodation for distant work. Absorbing it makes your day rate look higher than it is and quietly erodes margin on out-of-town jobs.',
    },
    {
      question: 'How do I invoice for a second shooter?',
      answer:
        'As a separate line at their day rate plus your handling, so the client sees what additional coverage costs. If you are the second shooter, invoice the lead photographer rather than the couple, and agree who holds the copyright before the day.',
    },
    {
      question: 'Who owns the copyright in photographs?',
      answer:
        'In most jurisdictions the photographer owns copyright by default, and the client buys a licence to use the images rather than ownership. Employment and specific commissioning arrangements can change this, so state the position on the invoice rather than assuming it is understood.',
    },
    {
      question: 'What is a photography buyout?',
      answer:
        'A transfer of unlimited or very broad usage rights, sometimes including copyright assignment. It should be priced as a distinct product and never given away as part of a standard shoot fee, because it removes all future licensing income from that work.',
    },
    {
      question: 'How do I invoice for retouching?',
      answer:
        'Per image or per hour, with a stated number of finals included in the package and a rate for additional images. Open-ended retouching is where fixed-price photography loses money, so bound it explicitly on the invoice.',
    },
    {
      question: 'Should I charge a rush fee?',
      answer:
        'Yes, when a compressed turnaround displaces other work or requires overnight editing. Fifty percent uplift is common. Put it on the invoice as its own line so the client can see that speed was the variable, not the base price rising.',
    },
    {
      question: 'How do I invoice for stock or archive images?',
      answer:
        'There is no shoot fee, so the invoice is entirely licence: the specific images, the usage granted, the term and the fee. Reference the image file names or IDs so the grant is unambiguous years later.',
    },
  ],
  faqs: [
    {
      question: 'Can a client use my photos however they like once they have paid?',
      answer:
        'Only within the licence you granted. If the invoice does not state a licence, you are in a weak position to argue the use was outside it, which is precisely why the licence belongs on the invoice as its own line rather than in a filed contract.',
    },
    {
      question: 'What do I do if a client uses images beyond the licence?',
      answer:
        'Raise it in writing, reference the licence line on the invoice, and offer to issue an extension invoice for the additional use. Most breaches are careless rather than deliberate, and an easy path to paying for the extra use resolves them faster than a legal threat.',
    },
    {
      question: 'Do I need a contract as well as an invoice?',
      answer:
        'For anything substantial, yes. The invoice records what was bought and what is owed; the contract covers cancellation, postponement, weather, liability and what happens if you cannot attend. Weddings and commercial work in particular need both.',
    },
  ],
  ctaHeading: 'Build your photography invoice',
  ctaText: 'Create an Invoice Free',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'Deposit and Advance Payment', description: 'Structuring the booking deposit.', href: '/deposit-invoice' },
    { title: 'Freelance Invoicing Guide', description: 'Invoicing without a company.', href: '/freelance-invoicing-guide' },
    { title: 'Designer Invoice', description: 'The same IP questions, for design work.', href: '/graphic-designer-invoice' },
  ],
};

export const tradesInvoiceGuide: GuideConfig = {
  slug: 'contractor-trades-invoice',
  cluster: 'By profession',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'Invoicing for trades and construction: separating labour from materials, call-out charges, variations, retention, and documenting work that is now hidden.',
  keyTakeaways: [
    'Labour and materials go on separate lines. Combined figures are the most disputed thing in trades billing.',
    'Price variations in writing before doing the work, never on the final invoice as a surprise.',
    'Photograph everything before it is covered up — the invoice is only as strong as the evidence.',
    'Retention and staged payments need their own lines, and their own release dates.',
  ],
  seo: {
    title: 'Trades Invoice: Labour, Materials & Variations',
    description:
      'How to invoice for trades and construction: separating labour and materials, call-out fees, pricing variations, retention, staged payments and evidencing work.',
    canonical: '/contractor-trades-invoice',
  },
  h1: 'How to Invoice for Trades and Construction Work',
  intro:
    'Trades invoicing gets disputed more than almost any other kind, and the disputes are remarkably consistent: the customer expected a different number, or cannot see what they are paying for, or is being asked to pay for work they did not knowingly authorise. All three are documentation problems rather than pricing problems, and all three are solved on the invoice. This guide covers the line structure that prevents them, plus retention, variations and the evidence that makes an invoice hold up.',
  sections: [
    {
      heading: 'Always separate labour from materials',
      body: [
        'A single figure for a completed job invites the customer to evaluate it against their imagination. Separated lines invite them to evaluate it against reality, which is a much better position for you.',
        'Show labour with the hours and the hourly rate, or the agreed day rate and the days worked. Show materials as their own lines, ideally itemised for anything substantial. Show the markup on materials if you apply one, or price them at a stated supply rate — what you should not do is bury a markup inside an unexplained materials total, because customers who price-check a boiler online and find a gap they cannot explain stop trusting the whole invoice.',
        'This also matters for insurance and warranty claims, where an assessor will ask for the labour and materials split and an invoice that cannot provide it slows everything down.',
      ],
      list: [
        'Labour: hours or days, rate, and who did the work for multi-trade jobs',
        'Materials: itemised, with your supply rate or stated markup',
        'Plant and equipment hire, as its own line',
        'Call-out or first-hour charge, if you apply one',
        'Waste disposal and skip hire',
        'Permits, certificates and testing',
        'Variations, each referencing its written approval',
        'Provisional sums, clearly identified as estimates until finalised',
      ],
    },
    {
      heading: 'Variations are the biggest single cause of disputes',
      body: [
        'A variation is any work beyond the agreed scope. On almost every job of any size, something turns up: a pipe that is not where the drawings said, rot behind a panel, a customer who wants the socket moved.',
        'The failure mode is universal and avoidable. The tradesperson does the extra work because stopping is impractical, mentions it verbally, and adds it to the final invoice. The customer, who heard "there\'s a bit of extra work here" and did not hear a number, receives an invoice hundreds more than expected and disputes it.',
        'The fix costs two minutes: before doing the extra work, send a message stating what it is and what it will cost, and get a reply agreeing. A text message is enough. Then put it on the invoice as its own line referencing that approval — "Variation 2: replace corroded isolation valve, approved 14 Aug".',
        'Where work genuinely cannot wait for approval — a live safety issue — do it, then document it immediately with photographs and a written explanation of why it could not wait.',
      ],
    },
    {
      heading: 'Retention and staged payments',
      body: [
        'On larger construction work, the customer may hold back a percentage of each payment as retention, released after a defect liability period. Typically 3–5%, half released at practical completion and half at the end of the defects period.',
        'If retention applies, show it explicitly: the gross amount, the retention deducted, and the net payable. Then keep your own record of what is being held and when it falls due, because retention that nobody chases is retention that never gets paid. It is one of the most commonly written-off receivables in the trade.',
        'For staged payments, tie each stage to a verifiable milestone rather than a date — first fix complete, watertight, plastered — so there is no argument about whether the stage was reached. Dates drift; milestones are observable.',
      ],
    },
    {
      heading: 'Photograph everything before it disappears',
      body: [
        'This is the practice that most separates trades invoicing from other professions, and it is worth treating as part of the invoicing process rather than an afterthought.',
        'Most of what you install gets covered — by plasterboard, screed, backfill or tiles. Once covered, the only evidence that it exists and was done properly is what you photographed. A customer disputing an invoice for pipework they cannot see is in a very different position when you send them twelve date-stamped photographs of it going in.',
        'Photograph before, during and after. Capture meter readings, existing damage you did not cause, and the condition of the area on arrival. The last of those has saved more tradespeople from unfounded damage claims than any contract clause.',
        'Reference the photo set on the invoice where a job was substantial: "Installation photographs available on request" signals that evidence exists, which itself deters speculative disputes.',
      ],
    },
  ],
  answersHeading: 'Trades invoicing questions, answered',
  answers: [
    {
      question: 'Should I show labour and materials separately on an invoice?',
      answer:
        'Yes. Combined totals are the most disputed thing in trades billing because the customer cannot see what they are paying for. Separated lines let them check the parts of the figure they understand, which builds trust in the parts they do not.',
    },
    {
      question: 'How much should I mark up materials?',
      answer:
        'Between 10% and 25% is common, covering sourcing, collection, carrying the cost and warranty handling. What matters more than the percentage is that it is disclosed rather than hidden, since a customer who finds an unexplained gap stops trusting the whole invoice.',
    },
    {
      question: 'What is a call-out charge?',
      answer:
        'A fixed fee covering travel and the first period on site, typically the first hour, applied whether or not work proceeds. Say it exists before you attend. A call-out fee that first appears on the invoice is a dispute you created yourself.',
    },
    {
      question: 'How do I charge for a variation?',
      answer:
        'Agree it in writing before doing the work — a text message stating what it is and what it costs, with a reply agreeing, is enough. Then invoice it as its own line referencing that approval and date, so it is traceable rather than a surprise.',
    },
    {
      question: 'What is retention in construction invoicing?',
      answer:
        'A percentage the customer holds back from each payment, commonly 3–5%, released partly at practical completion and partly after the defects liability period. Show it as an explicit deduction and diarise the release dates, because unchased retention often goes unpaid.',
    },
    {
      question: 'What is a provisional sum on an invoice?',
      answer:
        'An allowance for work that could not be priced accurately when quoting, because the extent was unknown until something was opened up. Identify it clearly as provisional, and reconcile it against actual cost on the final invoice with the evidence attached.',
    },
    {
      question: 'How do I invoice for emergency call-out work?',
      answer:
        'State the emergency rate before attending, invoice it as a distinct line rather than an inflated normal rate, and record why the work was urgent. Out-of-hours multipliers are accepted when disclosed in advance and resented when discovered afterwards.',
    },
    {
      question: 'Should I take a deposit for materials?',
      answer:
        'For jobs with significant material cost, yes — funding a customer\'s materials from your own working capital is a real risk on a job you may not be paid for. A materials deposit covering the purchase is normal and widely accepted in the trade.',
    },
    {
      question: 'How do I invoice for staged payments on a long job?',
      answer:
        'Tie each stage to an observable milestone rather than a calendar date — first fix complete, watertight, plastered. Invoice on reaching each one. Milestones are verifiable by both parties; dates drift and become arguments.',
    },
    {
      question: 'What do I do if a customer disputes the hours on my invoice?',
      answer:
        'Produce your record. Daily notes of arrival and departure times, photographs with timestamps, and delivery notes give you something concrete to point at. Hours recorded contemporaneously are believed; hours reconstructed at invoicing time are argued with.',
    },
    {
      question: 'Do I need to give a certificate with my invoice?',
      answer:
        'For notifiable work in regulated trades — electrical, gas, plumbing depending on jurisdiction — yes, and the customer may need it for building control, insurance or resale. Reference the certificate number on the invoice so the two documents stay linked.',
    },
    {
      question: 'Can I charge for a quotation in the trades?',
      answer:
        'Ordinary quoting is normally free and treated as a cost of sale. Charging is reasonable where producing the quote requires substantial diagnostic work, a survey or specialist testing. Say so before attending, and credit the fee against the job if it proceeds.',
    },
    {
      question: 'How do I invoice when working as a subcontractor?',
      answer:
        'Invoice the main contractor rather than the end client, reference their purchase order or job number, and match their payment terms which are often longer than domestic ones. Construction withholding schemes may also require specific deductions to be shown.',
    },
  ],
  faqs: [
    {
      question: 'Can a customer refuse to pay because they are unhappy with the work?',
      answer:
        'They can withhold payment for genuinely defective work, but not for the entire invoice over a partial complaint. Ask specifically what is wrong, offer to inspect and remedy it, and keep the exchange in writing. Documented willingness to fix is what protects you if it escalates.',
    },
    {
      question: 'Should I invoice before or after finishing the job?',
      answer:
        'On short jobs, immediately on completion. On longer ones, stage the invoicing so you are never funding weeks of labour and materials at your own risk. Very few trades businesses fail on profitability; a great many fail on cashflow.',
    },
    {
      question: 'What is a payment schedule in construction?',
      answer:
        'A written plan of what is payable at each milestone, agreed before work starts. Some jurisdictions have statutory rules requiring payment notices and specified periods for construction contracts, so check whether your work falls within that regime.',
    },
  ],
  ctaHeading: 'Build your trades invoice',
  ctaText: 'Create an Invoice Free',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'Milestone and Partial Payments', description: 'Staging payment across a long job.', href: '/milestone-partial-payment-invoice' },
    { title: 'Disputed Invoices', description: 'When the customer pushes back.', href: '/disputed-invoice' },
    { title: 'How to Write a Quotation', description: 'Scope and exclusions before you start.', href: '/how-to-write-a-quotation' },
  ],
};

export const consultantInvoiceGuide: GuideConfig = {
  slug: 'consultant-invoice',
  cluster: 'By profession',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'Invoicing for consulting: day rates versus deliverables, billing retainers in advance, evidencing intangible work, and handling expenses and multi-stakeholder approval.',
  keyTakeaways: [
    'Invoice retainers at the start of the period, not the end. It sets the whole payment expectation.',
    'Consulting invoices need to evidence value, because there is no physical deliverable to point at.',
    'Bill expenses at cost with receipts, and agree the policy before incurring them.',
    'Find out who signs off before you invoice, not after it is stuck.',
  ],
  seo: {
    title: 'Consultant Invoice: Day Rates, Retainers & Expenses',
    description:
      'How to invoice for consulting services: day rates vs deliverables, billing retainers in advance, evidencing intangible work, expenses and approval chains.',
    canonical: '/consultant-invoice',
  },
  h1: 'How to Invoice for Consulting Services',
  intro:
    'Consulting invoices have a problem that trades and product businesses do not: there is nothing to point at. Nobody can inspect the advice, and the person approving the payment often was not in the room when the work happened. That makes the invoice itself the evidence of value, which changes how you write it — and it makes the approval chain, not the work, the most common reason consulting invoices sit unpaid.',
  sections: [
    {
      heading: 'Day rate, deliverable or retainer',
      body: [
        'The three billing models create genuinely different invoices and different risks, and picking the wrong one for the engagement causes most consulting payment friction.',
        'Day rate billing is simple and transparent, and it caps your upside at hours available. It works when scope is genuinely open. The invoice needs dates, days and a summary of what happened on them.',
        'Deliverable or fixed-fee billing decouples your income from your hours, which is where consulting economics improve. It requires tight scope definition, because every unbounded revision comes out of your margin. The invoice references the deliverable and the milestone reached.',
        'Retainer billing buys availability rather than output, and it is the most stable of the three. The critical detail is timing, covered below.',
      ],
      table: {
        head: ['Model', 'Invoice shows', 'Main risk', 'Best for'],
        rows: [
          ['Day rate', 'Days worked, rate, dates', 'Income capped by capacity', 'Open-ended scope'],
          ['Fixed fee', 'Deliverable, milestone', 'Scope creep eats margin', 'Defined outcome'],
          ['Retainer', 'Period covered, inclusions', 'Client under-uses and cancels', 'Ongoing advisory'],
          ['Value-based', 'Outcome, agreed share', 'Attribution arguments', 'Measurable impact'],
        ],
      },
    },
    {
      heading: 'Invoice retainers in advance, always',
      body: [
        'This is the single highest-leverage habit in consulting billing and it costs nothing to adopt.',
        'Invoice the retainer at the start of the period it covers, not the end. August\'s retainer is invoiced in late July, due before August begins.',
        'The reason is behavioural rather than administrative. Billing in advance establishes that payment precedes work, which means a client who stops paying stops receiving work immediately, rather than after you have already delivered a month you then have to chase. It converts a debt-collection problem into a service-suspension decision, which is a far stronger position.',
        'Clients who resist this are worth paying attention to. Established businesses pay retainers in advance routinely; strong resistance sometimes signals a cashflow situation you would rather learn about before you are owed a month.',
      ],
    },
    {
      heading: 'Evidence the value, not just the time',
      body: [
        'A consulting invoice reading "Consultancy services — £6,000" gives an approver nothing to approve with. They were not there. They are being asked to release money against a word.',
        'Add a short summary of what the period produced. Not a timesheet — a few lines of outcome. "Completed supplier assessment across 14 vendors; delivered shortlist and negotiation brief; supported two negotiation sessions." That is three lines and it transforms the invoice from an assertion into a record.',
        'This matters most when the person approving is not the person you worked with. In larger organisations that is the norm, and your day-to-day contact\'s enthusiasm does not travel with the invoice into accounts payable. The summary does.',
        'For retainers, list what was included and note that availability itself is the product, so a quiet month does not read as an unearned invoice.',
      ],
    },
    {
      heading: 'Expenses and the approval chain',
      body: [
        'Agree the expense policy before incurring anything. Whether travel is billable, at what class, whether you bill mileage or fares, whether subsistence is included, and whether there is a threshold above which pre-approval is needed. Ambiguity here produces the pettiest and most relationship-damaging disputes in consulting.',
        'Bill expenses at cost with receipts attached, as their own lines rather than folded into fees. Marking up expenses is legal in most contexts and reads badly in nearly all of them.',
        'Then find out who actually approves your invoice. Ask during onboarding: who signs this off, what do they need on it, is there a purchase order number, and what is the cut-off for the payment run. Five minutes of asking at the start saves weeks of chasing later. There is more on the chasing itself in [how to chase an unpaid invoice](/how-to-chase-an-unpaid-invoice).',
      ],
    },
  ],
  answersHeading: 'Consulting invoice questions, answered',
  answers: [
    {
      question: 'How do I invoice for consulting services?',
      answer:
        'State the engagement, the period or milestone covered, the basis of the charge — days at a rate, or a fixed fee — and a short summary of what the work produced. Add expenses at cost as separate lines, then the total, terms and payment details.',
    },
    {
      question: 'Should consultants bill hourly or by the day?',
      answer:
        'By the day for most engagements. Hourly billing invites clients to question individual hours and caps your rate at what an hour feels worth. Day rates match how consulting work actually happens and shift the conversation to value rather than time.',
    },
    {
      question: 'How do I invoice a retainer?',
      answer:
        'At the start of the period it covers, stating the period, what the retainer includes, and any usage caps. Billing in advance establishes that payment precedes work, so a client who stops paying simply stops receiving service.',
    },
    {
      question: 'What if a client does not use their full retainer?',
      answer:
        'Say up front whether unused time rolls over, and for how long. Most consultants do not roll it over, because the retainer buys availability rather than a block of hours. Whichever you choose, state it on the invoice so it is never a surprise.',
    },
    {
      question: 'Should I show my hourly rate on a consulting invoice?',
      answer:
        'Only if you are billing by time. On fixed-fee work, showing an implied hourly rate invites the client to renegotiate on efficiency — punishing you for doing the job faster, which is exactly the wrong incentive to create.',
    },
    {
      question: 'How do I bill expenses as a consultant?',
      answer:
        'At cost, with receipts, on their own lines rather than folded into fees. Agree the policy before incurring anything: what is billable, at what standard, and whether anything needs pre-approval. Do not mark expenses up.',
    },
    {
      question: 'What is value-based pricing in consulting?',
      answer:
        'Pricing against the outcome the client gains rather than the time you spend. It requires an agreed measure and a clear attribution basis, both settled in writing beforehand, since arguing about attribution after the fact is where these arrangements usually fail.',
    },
    {
      question: 'How do I invoice for a discovery or scoping phase?',
      answer:
        'As a distinct paid engagement with its own deliverable, invoiced on completion. Paid discovery filters out clients who were never going to proceed, and it means the scoping work that makes a good proposal possible is funded rather than absorbed.',
    },
    {
      question: 'Do I need a purchase order number on a consulting invoice?',
      answer:
        'In larger organisations, usually yes, and an invoice without one is frequently rejected automatically before a human sees it. Ask at onboarding whether a PO is required and get the number before you invoice, not after it bounces.',
    },
    {
      question: 'How long should consulting payment terms be?',
      answer:
        'Fourteen to thirty days is standard for independents. Large corporates often impose 60 or 90 and will not negotiate, so price that cost in rather than pretending it does not exist. A retainer billed in advance sidesteps the problem entirely.',
    },
    {
      question: 'How do I invoice when working through an agency or intermediary?',
      answer:
        'Invoice the intermediary, not the end client, and match their reference and timesheet requirements exactly, since they will reconcile against their own records. Confirm their payment terms — they are often longer than the end client\'s and are what actually govern you.',
    },
    {
      question: 'What do I put on the invoice if the work is confidential?',
      answer:
        'Describe it at a level that satisfies the approver without disclosing substance — "strategic advisory, August 2026, per engagement letter dated 3 July". Reference the engagement letter so the detail lives in a document with restricted circulation rather than in accounts payable.',
    },
    {
      question: 'Should I charge for travel time as a consultant?',
      answer:
        'Agree it in advance. Common approaches are billing travel at a reduced rate, billing it in full for long journeys, or absorbing local travel and billing anything requiring an overnight stay. What matters is that it is settled before the first trip.',
    },
  ],
  faqs: [
    {
      question: 'What is the difference between a consultant invoice and a freelancer invoice?',
      answer:
        'Structurally very little — both bill for services rendered by an individual or small firm. The practical differences are that consulting more often involves retainers, longer approval chains, purchase orders and expense policies, all of which shape how the invoice needs to be written.',
    },
    {
      question: 'Can I charge a late fee as a consultant?',
      answer:
        'Yes, where stated in your terms before the engagement rather than introduced on an overdue invoice. Many jurisdictions also provide a statutory right to interest and recovery costs on late commercial payments, which applies whether or not your contract mentions it.',
    },
    {
      question: 'How do I raise my consulting rates with existing clients?',
      answer:
        'Give notice well before the change, apply it at a natural boundary such as a contract renewal or the start of a quarter, and state the new rate on the first invoice that uses it. Rate rises that appear without warning on an invoice generate far more resistance than the increase itself warrants.',
    },
  ],
  ctaHeading: 'Build your consulting invoice',
  ctaText: 'Create an Invoice Free',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'Retainer and Recurring Invoices', description: 'Billing the same client every month.', href: '/retainer-recurring-invoice' },
    { title: 'Invoice Payment Terms', description: 'Terms that actually get you paid.', href: '/invoice-payment-terms' },
    { title: 'How to Write a Business Proposal', description: 'Winning the engagement first.', href: '/how-to-write-a-business-proposal' },
  ],
};

export const designerInvoiceGuide: GuideConfig = {
  slug: 'graphic-designer-invoice',
  cluster: 'By profession',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'Invoicing for design work: bounding revisions, when source files and IP transfer, charging for concepts, and the kill fee that protects abandoned projects.',
  keyTakeaways: [
    'State the revision count on the invoice. Unbounded revisions are how fixed-price design loses money.',
    'Source files and IP transfer on final payment, and the invoice should say so.',
    'Charge for additional concepts rather than presenting several for free.',
    'A kill fee is standard practice, not an aggressive term.',
  ],
  seo: {
    title: 'Graphic Designer Invoice: Revisions, Source Files & IP',
    description:
      'How to invoice for design work: bounding revision rounds, when source files and IP transfer, charging for concepts, kill fees and staged design payments.',
    canonical: '/graphic-designer-invoice',
  },
  h1: 'How to Invoice as a Graphic Designer',
  intro:
    'Design invoicing has one dominant failure mode, and it is not clients refusing to pay. It is the project that never quite ends — the eleventh revision, the "just one small tweak", the logo that has been finished four times. Fixed-price design work loses money in revision rounds, and revision rounds are bounded on the invoice or not at all. This guide covers that, plus the two other things design invoices routinely get wrong: source files and intellectual property.',
  sections: [
    {
      heading: 'Bound the revisions or fund them yourself',
      body: [
        'Every design invoice should state how many rounds of revision the price includes, and what an additional round costs.',
        '"Logo design — includes 3 concepts and 2 rounds of revision. Additional revision rounds £X each." That single line does more to protect design margin than any contract clause, because it is visible at the moment the client is thinking about the money.',
        'Define what a round actually is, because this is where the ambiguity lives. A round is one consolidated set of feedback, delivered together. It is not each individual email as thoughts occur. Say so: "A revision round means one consolidated set of feedback." Clients are not usually trying to exploit this — they simply do not know that sending six separate notes costs you differently from sending one list.',
        'Charging for extra rounds is rarely necessary once the limit is stated. The limit changes behaviour on its own: clients consolidate their feedback because they can see it matters.',
      ],
    },
    {
      heading: 'Source files and IP transfer on payment',
      body: [
        'Two distinct things get conflated here, and separating them is worth doing on the invoice.',
        'Source files are the working documents — the layered AI, PSD, Figma or InDesign files. Whether they are included is a commercial decision. Many designers include them for brand work and exclude them for one-off pieces, or price them separately. Whatever you decide, state it, because a client who assumed they were included and finds out otherwise months later is an avoidable argument.',
        'Intellectual property is the right to use and control the work. In most jurisdictions the designer owns copyright by default until it is assigned in writing. Standard practice is that IP transfers on receipt of final payment, and that should be a line on the invoice: "Ownership of the final artwork transfers to the client on receipt of payment in full."',
        'That single sentence is genuinely protective. It means an unpaid invoice leaves the client without the right to use the work, which is a far stronger position than being an ordinary creditor. It also gives you something concrete and non-hostile to point to when following up.',
      ],
    },
    {
      heading: 'Concepts, kill fees and abandoned projects',
      body: [
        'Presenting several initial concepts for free is common and mostly a mistake. Each concept is real work, and offering four rather than one does not improve your odds — it teaches the client that your time is free and gives them more ways to be indecisive.',
        'Present one or two well-argued directions as standard, and price additional concepts explicitly.',
        'For anything substantial, include a kill fee: if the project is cancelled after work begins, a stated percentage of the fee becomes payable, scaled by how far it progressed. This is normal professional practice, not an aggressive term, and clients who commission design regularly will expect it.',
        'Projects also die quietly rather than formally — the client goes silent mid-project and resurfaces four months later. Handle it with a dormancy clause: if a project is inactive for a stated period, work completed to date is invoiced and restarting is quoted separately. Otherwise you are carrying unbilled work indefinitely on someone else\'s indecision.',
      ],
    },
    {
      heading: 'Staging design payments',
      body: [
        'A 50/50 split — half up front, half on delivery — is the most common arrangement and works well for small to mid-size projects.',
        'For longer engagements, three stages work better: a third on commissioning, a third at concept approval, a third on final delivery. This keeps you from carrying weeks of work, and it creates a natural checkpoint at concept approval where scope changes can be repriced rather than absorbed.',
        'Tie the middle stage to approval rather than to a date, so it triggers on something observable. There is more on structuring this in [milestone and partial payments](/milestone-partial-payment-invoice).',
      ],
    },
  ],
  answersHeading: 'Design invoicing questions, answered',
  answers: [
    {
      question: 'How many revisions should a design invoice include?',
      answer:
        'Two rounds is the common default for most projects, three for brand identity work. What matters more than the number is that it is stated on the invoice along with the cost of an additional round, since an unstated limit is not a limit.',
    },
    {
      question: 'What counts as one round of revisions?',
      answer:
        'One consolidated set of feedback delivered together, not each individual email as thoughts arrive. Define it explicitly on the invoice — most clients send piecemeal notes because nobody told them it costs differently, not because they are exploiting you.',
    },
    {
      question: 'Should I include source files with design work?',
      answer:
        'It is a commercial choice, and the only real error is leaving it unstated. Many designers include them for brand identity work, exclude them for one-off pieces, or price them separately. Whatever you decide, put it on the invoice.',
    },
    {
      question: 'Who owns a logo, the designer or the client?',
      answer:
        'In most jurisdictions the designer owns copyright by default until it is assigned in writing. Standard practice is transfer on receipt of final payment, which should be stated on the invoice — it protects you far better than ordinary creditor status.',
    },
    {
      question: 'What is a kill fee in design?',
      answer:
        'A stated percentage of the project fee that becomes payable if the client cancels after work has begun, usually scaled by how far the project progressed. It is normal professional practice and experienced clients expect to see it.',
    },
    {
      question: 'How much deposit should a designer take?',
      answer:
        'Fifty percent up front is standard for small and mid-size projects. For longer engagements, a third at commissioning, a third at concept approval and a third on delivery works better, because it keeps you from carrying weeks of unpaid work.',
    },
    {
      question: 'Should I charge for initial concepts?',
      answer:
        'Present one or two well-argued directions as part of the fee, and charge for additional concepts. Offering many for free does not improve your odds — it signals your time costs nothing and multiplies the ways a client can be indecisive.',
    },
    {
      question: 'How do I invoice when a client goes silent mid-project?',
      answer:
        'Use a dormancy term: after a stated period of inactivity, work completed to date is invoiced and restarting is quoted separately. Without it you carry unbilled work indefinitely while someone else decides, which is not a risk you were paid to take.',
    },
    {
      question: 'How do I price a rush design job?',
      answer:
        'Apply a stated uplift, commonly 25% to 50%, as its own invoice line rather than a quietly raised base rate. The line makes clear that speed was the variable, which protects your normal pricing on the client\'s next project.',
    },
    {
      question: 'Do I charge for stock images and fonts?',
      answer:
        'Yes, at cost as separate lines, and make sure the licence is bought in the client\'s name where the licence terms require it. Designers who license assets under their own name and hand them on create a compliance problem the client inherits unknowingly.',
    },
    {
      question: 'How do I invoice for a retainer as a designer?',
      answer:
        'Bill at the start of the period, state what it includes — hours, deliverables or turnaround commitments — and say whether unused capacity rolls over. Retainers suit clients with steady small requests, where per-project quoting costs more in admin than it recovers.',
    },
    {
      question: 'What do I do if a client uses unapproved work?',
      answer:
        'If IP transfers on payment and payment has not been made, they have no right to use it. Raise it in writing referencing that invoice line, and offer a straightforward path to paying rather than escalating. Most such uses are misunderstanding rather than bad faith.',
    },
  ],
  faqs: [
    {
      question: 'Should design pricing be hourly or fixed?',
      answer:
        'Fixed for defined deliverables, since it rewards you for being good rather than slow and gives the client certainty. Hourly suits genuinely open-ended work such as ongoing support. Fixed pricing only works if revisions are bounded, which is why that line matters so much.',
    },
    {
      question: 'Can I show work in my portfolio before the client launches?',
      answer:
        'Agree it explicitly rather than assuming. Many clients require confidentiality until launch and some indefinitely. A short line in your terms covering portfolio use, with an embargo period, prevents an awkward conversation after you have already posted it.',
    },
    {
      question: 'What is a design brief and does it belong on the invoice?',
      answer:
        'The brief defines what you are making and belongs in its own document, referenced by the invoice rather than reproduced on it. Referencing it means the invoice ties to an agreed scope, which is what you need if the deliverable is later disputed.',
    },
  ],
  ctaHeading: 'Build your design invoice',
  ctaText: 'Create an Invoice Free',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'Photographer Invoice', description: 'The same licensing questions, for images.', href: '/photographer-invoice' },
    { title: 'Milestone and Partial Payments', description: 'Staging payment across a project.', href: '/milestone-partial-payment-invoice' },
    { title: 'Freelance Invoicing Guide', description: 'Invoicing without a company.', href: '/freelance-invoicing-guide' },
  ],
};

export const developerInvoiceGuide: GuideConfig = {
  slug: 'developer-invoice',
  cluster: 'By profession',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'Invoicing for software work: sprint and milestone billing, what happens to code ownership on non-payment, billing for maintenance, bugs and third-party costs.',
  keyTakeaways: [
    'Bill sprints in advance or at sprint close — never let three sprints accumulate unpaid.',
    'Code IP should transfer on payment, and the invoice should say so.',
    'Bug fixes inside warranty are free; changes of mind are billable. Define the line.',
    'Third-party costs are pass-throughs, and belong in the client\'s name where possible.',
  ],
  seo: {
    title: 'Developer Invoice: Sprints, Milestones, Code Ownership',
    description:
      'How to invoice for software development: sprint and milestone billing, code IP transfer on payment, warranty vs billable bugs, retainers and third-party costs.',
    canonical: '/developer-invoice',
  },
  h1: 'How to Invoice as a Software Developer',
  intro:
    'Software invoicing is complicated by two things nobody encounters in most other trades. The work is invisible until it is deployed, and the thing you built can be used whether or not you get paid, because it is already running on the client\'s infrastructure. Both problems have the same answer, and it belongs on the invoice: bill in short cycles, and make ownership conditional on payment.',
  sections: [
    {
      heading: 'Billing models and their failure modes',
      body: [
        'Development engagements use a small number of billing structures, and each fails in a specific way that you can design around.',
        'Time and materials bills actual hours or days. It is honest and flexible, and clients dislike it because there is no ceiling. It works when the work is genuinely exploratory. Invoice fortnightly or monthly and never let more than one cycle go unpaid.',
        'Fixed price bills an agreed sum for an agreed scope. Clients prefer it, and it transfers all estimation risk to you — which is severe in software, where estimates are notoriously optimistic. It only works with genuinely locked scope and a written change process.',
        'Sprint-based billing bills per iteration at an agreed rate. It is the best fit for most agile work: the client can stop after any sprint, and you are never more than one sprint out of pocket. This is the model most worth defaulting to.',
        'Retainer billing buys ongoing capacity, typically for maintenance and support after launch, and is covered in [retainer and recurring invoices](/retainer-recurring-invoice).',
      ],
      table: {
        head: ['Model', 'Estimation risk', 'Client can exit', 'Invoice cadence'],
        rows: [
          ['Time and materials', 'Client', 'Any time', 'Fortnightly or monthly'],
          ['Fixed price', 'You', 'At milestones', 'On milestone'],
          ['Sprint-based', 'Shared', 'End of any sprint', 'Per sprint'],
          ['Retainer', 'Shared', 'Notice period', 'Monthly in advance'],
        ],
      },
    },
    {
      heading: 'Code ownership should be conditional on payment',
      body: [
        'This is the leverage that software work uniquely needs, because unlike a physical deliverable you cannot repossess a deployed application.',
        'State on the invoice that intellectual property in the delivered code transfers to the client on receipt of payment in full. Until then, the client is using code they do not own. That is a materially stronger position than being an unsecured creditor, and it turns a chase into a straightforward conversation about completing a transfer.',
        'The corollary is that you must actually be able to make the claim. If you push directly to the client\'s repository from day one and hold nothing, the term is rhetorical. Approaches vary — staged handover, working in your own repository until milestone payment, or holding deployment credentials — and the right one depends on how much trust the relationship has earned.',
        'Be careful with open-source components. Code you incorporate under a permissive or copyleft licence is not yours to assign, and the invoice term should cover the work you authored rather than claiming ownership of the whole dependency tree.',
      ],
    },
    {
      heading: 'Warranty bugs versus billable changes',
      body: [
        'This distinction causes more developer-client friction than pricing does, and it is entirely definable in advance.',
        'A bug is the software failing to do what was agreed. Fixing it inside a stated warranty period — 30 to 90 days after delivery is typical — is not billable. You are completing work already paid for.',
        'A change is the client wanting something different from what was agreed, including things they now realise they wanted all along. That is billable, at your normal rate, regardless of how small it seems.',
        'Write the definition into the invoice terms in one sentence: "Defects in delivered functionality are corrected free of charge for 60 days from delivery. Changes to agreed functionality are chargeable at the standard rate." Then apply it consistently, including on the small things — the precedent set by absorbing three "tiny" changes is what makes the fourth one an argument.',
      ],
    },
    {
      heading: 'Third-party costs and infrastructure',
      body: [
        'Hosting, domains, API subscriptions, app store fees, SSL certificates, paid libraries — modern software carries a tail of third-party costs, and how you handle them matters more than the amounts suggest.',
        'Wherever possible, have the client hold these accounts in their own name and pay them directly. It avoids you funding their infrastructure, avoids the awkwardness of a service lapsing because an invoice is late, and means the client keeps access if the relationship ends.',
        'Where you do pay on their behalf, bill at cost as clearly labelled pass-through lines and attach the evidence. Do not mark them up quietly. If handling them is real work, charge a stated management fee for that work rather than inflating the underlying cost — the first is a service, the second reads as a hidden margin when discovered.',
        'Recurring costs need an explicit answer to what happens at renewal. An annual API subscription you paid for in month two is a real liability if the engagement ends in month five.',
      ],
    },
  ],
  answersHeading: 'Developer invoicing questions, answered',
  answers: [
    {
      question: 'How do I invoice for software development?',
      answer:
        'State the engagement, the sprint or milestone covered, the basis of the charge, and what was delivered in that period. Add pass-through costs separately, then the total, payment terms and your IP transfer condition.',
    },
    {
      question: 'Should I bill fixed price or hourly for development?',
      answer:
        'Sprint-based billing suits most work: the client can stop after any iteration and you are never more than one sprint out of pocket. Fixed price only works with genuinely locked scope, because software estimates are systematically optimistic and the risk lands on you.',
    },
    {
      question: 'When should I invoice for a sprint?',
      answer:
        'At the start of the sprint, or immediately at its close. Never let two sprints accumulate unpaid — that is the point at which a payment problem becomes a significant loss rather than a manageable one, and where stopping work gets emotionally harder.',
    },
    {
      question: 'Who owns the code, the developer or the client?',
      answer:
        'Whatever the contract says, and in the absence of an assignment the author generally retains copyright. Standard practice is transfer on payment in full, stated on the invoice. Note that incorporated open-source components are not yours to assign.',
    },
    {
      question: 'Should I fix bugs for free?',
      answer:
        'Inside an agreed warranty period, yes — a bug is the software failing to do what was agreed, so fixing it completes work already paid for. Thirty to ninety days is typical. Changes to agreed functionality are billable however small they seem.',
    },
    {
      question: 'What is the difference between a bug and a change request?',
      answer:
        'A bug is the software not doing what was agreed. A change is the client wanting something different from what was agreed, including things they now realise they always wanted. Define this in your terms and apply it consistently, especially on small items.',
    },
    {
      question: 'How do I bill for hosting and third-party services?',
      answer:
        'Ideally have the client hold and pay those accounts directly. Where you pay on their behalf, bill at cost as clearly labelled pass-through lines with evidence attached, and charge a stated management fee if handling them is real work.',
    },
    {
      question: 'How do I invoice for maintenance after launch?',
      answer:
        'As a monthly retainer billed in advance, stating what it covers — security updates, dependency upgrades, uptime response, a bank of hours — and what falls outside. Open-ended "support" with no definition is how maintenance retainers become unprofitable.',
    },
    {
      question: 'Should I charge for meetings and calls?',
      answer:
        'On time and materials, yes, and say so up front. On sprint or fixed pricing, a reasonable amount is built into the price. If a client\'s meeting load is genuinely disproportionate, that is a scope conversation rather than something to absorb silently.',
    },
    {
      question: 'How do I invoice for a discovery or technical spec phase?',
      answer:
        'As its own paid engagement with a concrete deliverable — an architecture document, a scoped backlog, an estimate. Paid discovery is what makes a credible fixed-price quote possible, and it filters out clients who were never going to proceed.',
    },
    {
      question: 'What if the client stops paying mid-project?',
      answer:
        'Stop work immediately and say so plainly. Continuing while unpaid increases your exposure with every commit and weakens your position. Because IP transfers on payment, the client cannot legitimately use unpaid work, which is what you point to.',
    },
    {
      question: 'How do I invoice as a subcontractor to an agency?',
      answer:
        'Invoice the agency, not the end client, matching their PO or job reference exactly. Confirm their payment terms, which are often longer than the end client\'s, and clarify who owns the delivered IP — usually the agency, who assigns it onward.',
    },
  ],
  faqs: [
    {
      question: 'Should I put my hourly rate on a fixed-price development invoice?',
      answer:
        'No. It invites the client to recalculate the fee based on how long the work took, which punishes you for being efficient. Reference the milestone and what was delivered instead, since that is what the fixed price was actually for.',
    },
    {
      question: 'Can I take an application offline if I am not paid?',
      answer:
        'Legally risky and situation-specific, particularly if the client\'s business depends on it. Withholding future work and undelivered code is the safer lever; disabling a running production system can expose you to a damages claim. Take advice before acting on live infrastructure.',
    },
    {
      question: 'How do I handle scope creep on a fixed-price project?',
      answer:
        'With a written change process agreed at the start: changes are specified, priced and approved before implementation. The process matters more than the pricing, because it makes the cost of a change visible at the moment it is requested rather than at the end.',
    },
  ],
  ctaHeading: 'Build your developer invoice',
  ctaText: 'Create an Invoice Free',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'Retainer and Recurring Invoices', description: 'Billing maintenance after launch.', href: '/retainer-recurring-invoice' },
    { title: 'Milestone and Partial Payments', description: 'Staging payment across a build.', href: '/milestone-partial-payment-invoice' },
    { title: 'Consultant Invoice', description: 'Day rates, retainers and approval chains.', href: '/consultant-invoice' },
  ],
};

export const tutorInvoiceGuide: GuideConfig = {
  slug: 'tutor-invoice',
  cluster: 'By profession',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'Invoicing for tutoring and coaching: session packages versus pay-as-you-go, cancellation policies that hold, billing parents for a student, and term-time scheduling.',
  keyTakeaways: [
    'Bill packages in advance. Pay-as-you-go after the lesson is how tutors end up chasing small sums.',
    'A cancellation policy only works if it is on the invoice before the first cancellation.',
    'Bill the person paying, not the person attending — and get that right at the start.',
    'Price the package, not the hour, so cancellations cost the client rather than you.',
  ],
  seo: {
    title: 'Tutor Invoice: Packages, Cancellations & Billing Parents',
    description:
      'How to invoice for tutoring: session packages vs pay-as-you-go, cancellation policies that hold up, billing parents for a student, and term-time scheduling.',
    canonical: '/tutor-invoice',
  },
  h1: 'How to Invoice for Tutoring and Coaching',
  intro:
    'Tutoring invoicing is low-value and high-frequency, which is its whole problem. Individual sessions are small enough that chasing them feels disproportionate, frequent enough that admin eats your margin, and personal enough that most tutors find it awkward to enforce their own terms. The fix is structural rather than a matter of being firmer: bill in advance, in packages, with the cancellation policy visible before anyone needs it.',
  sections: [
    {
      heading: 'Bill packages in advance, not sessions in arrears',
      body: [
        'The default many tutors fall into — teach the lesson, invoice afterwards, chase if it does not arrive — is the worst available arrangement. It generates the most admin per pound earned and puts you in the position of chasing small sums from people you have an ongoing personal relationship with.',
        'Sell blocks instead. Six or ten sessions, paid before the first one. One invoice, one payment, one piece of admin covering weeks of work.',
        'Packages also change the economics of cancellation in your favour without any confrontation. If a client has paid for ten sessions and misses one, the cost of that miss falls on them, because the session is drawn from a block they have already bought. With pay-as-you-go, a missed session simply means you are not paid.',
        'Price the block so it is the obvious choice — a modest discount against the single-session rate — and keep a single-session rate available at a genuine premium for people who need flexibility.',
      ],
      table: {
        head: ['', 'Pay-as-you-go', 'Package of 10'],
        rows: [
          ['Invoices per 10 sessions', '10', '1'],
          ['Chasing risk', 'Every session', 'Once, up front'],
          ['Cost of a cancellation', 'Falls on you', 'Falls on the client'],
          ['Client commitment', 'Low', 'High'],
          ['Suits', 'Occasional or trial', 'Ongoing tuition'],
        ],
      },
    },
    {
      heading: 'A cancellation policy that actually holds',
      body: [
        'Every tutor has one in their head. Far fewer have one their clients have seen, and a policy the client has not seen is not a policy.',
        'State it in three parts: the notice period, what happens inside it, and what counts as an exception. "Sessions cancelled with less than 24 hours\' notice are charged in full. One rescheduled session per term is offered as a courtesy."',
        'Put it on the invoice, not only in a welcome email. The invoice is the document that gets kept, and it is the one that will be looked at when a dispute arises.',
        'The courtesy exception is worth including deliberately. It gives you a way to be generous once without setting a precedent, which is the specific situation most tutors handle badly — either enforcing rigidly and damaging the relationship, or waiving repeatedly until the policy is meaningless.',
      ],
    },
    {
      heading: 'Bill the payer, not the student',
      body: [
        'When you tutor a child, the student and the client are different people, and the invoice must be addressed to whoever is paying.',
        'Get the billing name and contact at enrolment, along with which parent or guardian is responsible where that is not obvious. Invoices addressed to a fourteen-year-old, or to the wrong parent in a separated household, are an entirely avoidable source of both non-payment and genuine awkwardness.',
        'For adult learners funded by an employer, the client is the employer. That usually means a purchase order, a different address, longer payment terms and an approval chain, so ask at enrolment rather than discovering it when the first invoice stalls.',
        'Agency and platform work is different again — you invoice the platform, at their rates and on their terms, and the parent is not your client at all.',
      ],
    },
    {
      heading: 'Term dates, exam season and the summer problem',
      body: [
        'Tutoring income is seasonal in a way that catches new tutors out, and the invoice structure can smooth some of it.',
        'Demand concentrates before exams and collapses immediately afterwards. Summer is quiet for academic tutoring, and many families pause entirely.',
        'Two structural responses help. Sell packages that span a term rather than a month, so commitment is made when motivation is highest. And offer a retainer or holding arrangement over quiet periods for regular students — a reduced monthly fee that secures their slot for the following term. Both are ordinary invoice structures rather than anything exotic; see [retainer and recurring invoices](/retainer-recurring-invoice).',
        'State term dates on the package invoice so it is unambiguous which weeks are covered and which are breaks. Ambiguity about whether half-term was included is a small recurring argument nobody needs.',
      ],
    },
  ],
  answersHeading: 'Tutoring invoice questions, answered',
  answers: [
    {
      question: 'How should I invoice for tutoring?',
      answer:
        'In advance, as a package of sessions rather than individually in arrears. One invoice covering six or ten sessions replaces ten small invoices, removes the chasing, and shifts the cost of a missed session onto the client rather than you.',
    },
    {
      question: 'Should tutors ask for payment upfront?',
      answer:
        'Yes, and it is standard enough that clients rarely object. Payment before the first session of a block is normal practice in tutoring, and it removes almost all of the payment friction that makes the work administratively unpleasant.',
    },
    {
      question: 'What should a tutor\'s cancellation policy be?',
      answer:
        'Twenty-four hours\' notice, with late cancellations charged in full, plus one courtesy reschedule per term. Put it on the invoice rather than only in a welcome email, because the invoice is the document that gets kept and consulted.',
    },
    {
      question: 'Can I charge for a missed lesson?',
      answer:
        'Yes, where your stated policy says so and the client saw it before the missed session. A policy introduced after the event will not hold and will damage the relationship. This is why it belongs on the first invoice rather than the disputed one.',
    },
    {
      question: 'Who do I invoice when tutoring a child?',
      answer:
        'The parent or guardian responsible for payment, by name, established at enrolment. In separated households confirm which parent is billed. Invoices addressed to the student, or to the wrong parent, are an avoidable cause of both non-payment and awkwardness.',
    },
    {
      question: 'How do I price a tutoring package?',
      answer:
        'Set a single-session rate, then discount a block modestly — commonly 5% to 10% for ten sessions. The discount should make the package the obvious choice while keeping the single rate genuinely available at a premium for people who need flexibility.',
    },
    {
      question: 'Do tutoring packages expire?',
      answer:
        'Give them an expiry, typically the end of the term or three months, and say so on the invoice. Without one you carry an open-ended obligation to deliver at today\'s price indefinitely, and unredeemed sessions become an awkward liability.',
    },
    {
      question: 'How do I invoice for online tutoring?',
      answer:
        'Identically to in-person, minus travel. State the platform used and confirm who provides materials. Online work often crosses borders, so agree the currency and check whether your own tax position changes when the student is overseas.',
    },
    {
      question: 'Should I charge for lesson preparation?',
      answer:
        'Build it into the session rate rather than billing it separately — clients evaluate the hourly figure and a separate prep line reads as padding. Charge separately only for substantial one-off work such as building a bespoke course or marking mock papers.',
    },
    {
      question: 'How do I invoice a school or employer for tutoring?',
      answer:
        'Ask at enrolment for a purchase order number, the billing address and the approval contact. Institutional payment terms are typically 30 days or longer and invoices without a PO are often auto-rejected, so gather this before the first invoice rather than after.',
    },
    {
      question: 'Do I need to register as a business to tutor?',
      answer:
        'In most countries you can invoice in your own name as a sole trader without registering a company, though you must declare the income. Registration thresholds for sales tax or VAT vary, so check the position where you live once your income grows.',
    },
    {
      question: 'How do I raise my tutoring rates?',
      answer:
        'Give a term\'s notice, apply the increase at a term boundary rather than mid-block, and honour any package already paid for at the old rate. Announcing it well ahead and at a natural break generates far less resistance than the increase itself warrants.',
    },
  ],
  faqs: [
    {
      question: 'What should a tutoring invoice include?',
      answer:
        'Your details and the payer\'s, an invoice number and dates, the sessions covered with dates and duration, the rate or package price, the total, the cancellation policy, an expiry for the package, and how to pay.',
    },
    {
      question: 'Should I use a tutoring platform or invoice directly?',
      answer:
        'Platforms handle payment, chasing and often client acquisition, in exchange for a commission that is frequently substantial. Direct invoicing keeps the full fee and the client relationship but puts the admin and the credit risk on you. Many tutors use platforms to find clients and move long-term ones direct, subject to the platform\'s terms.',
    },
    {
      question: 'Do I need insurance to tutor?',
      answer:
        'Professional indemnity and public liability are common and sometimes required by schools or agencies, and working with children usually requires background clearance in your jurisdiction. These are not invoicing matters, but they are worth settling before your first paid session.',
    },
  ],
  ctaHeading: 'Build your tutoring invoice',
  ctaText: 'Create an Invoice Free',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'Retainer and Recurring Invoices', description: 'Regular billing for regular students.', href: '/retainer-recurring-invoice' },
    { title: 'Deposit and Advance Payment', description: 'Taking payment before you deliver.', href: '/deposit-invoice' },
    { title: 'Freelance Invoicing Guide', description: 'Invoicing without a company.', href: '/freelance-invoicing-guide' },
  ],
};
