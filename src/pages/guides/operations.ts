import type { GuideConfig } from './types';

/**
 * The invoicing-as-a-process cluster: the mechanics you set up once and then
 * live with. Numbering, recurring billing, the covering email, retention, and
 * getting paid across borders.
 */

export const invoiceNumberingGuide: GuideConfig = {
  slug: 'invoice-numbering-system',
  cluster: 'Invoicing',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'Designing an invoice numbering system that survives an audit: sequential vs dated schemes, why gaps matter, resetting annually, and what to do after a mistake.',
  keyTakeaways: [
    'Sequential and gap-free is the only universal requirement. Everything else is preference.',
    'Never reuse a number, and never fill a gap retrospectively.',
    'Client codes in the number leak information and make sequences hard to audit.',
    'Decide your scheme before invoice one — changing it later is genuinely painful.',
  ],
  seo: {
    title: 'Invoice Numbering System: Sequences That Survive Audit',
    description:
      'How to design an invoice numbering system: sequential vs date-based schemes, why gaps matter, annual resets, multi-entity numbering and fixing mistakes.',
    canonical: '/invoice-numbering-system',
  },
  h1: 'Invoice Numbering Systems That Survive an Audit',
  intro:
    'Invoice numbering looks like the most trivial decision in your whole billing process, and it is the one you are least able to change later. By the time a scheme is inconvenient you have three years of records in it, a client base that recognises it, and an accountant who has built reports around it. Ten minutes of thought at the start is worth a great deal, and the requirements are simpler than the number of competing conventions suggests.',
  sections: [
    {
      heading: 'The only rules that are actually rules',
      body: [
        'Across almost every jurisdiction, two requirements are universal and everything else is convention.',
        'Numbers must be unique. No two invoices ever carry the same reference, forever, including across years.',
        'Numbers must be sequential without unexplained gaps. This is the one that surprises people, and the reason is simple: sequence integrity is how tax authorities test whether invoices have been suppressed. If your records run 001, 002, 004, the obvious question is what happened to 003, and "I cancelled it" is only a good answer if you can produce the cancelled document.',
        'Some jurisdictions add specifics. India caps the serial at 16 characters and requires uniqueness within the financial year. Others require the sequence to be continuous across the life of the business. Check your own rules, but design for unique and gap-free and you will satisfy most of them.',
      ],
    },
    {
      heading: 'Four schemes that work',
      body: [
        'Pick one, write it down, and stay with it.',
        'Pure sequential — INV-001, INV-002. Simplest possible, works forever, reveals nothing. Its only weakness is that it tells you nothing at a glance and, at very low numbers, quietly signals how new you are. Starting at 100 rather than 001 is harmless if that bothers you; starting at 5000 to look established is a transparent fiction to anyone who has seen it before.',
        'Year-prefixed — 2026-001, resetting each January. Makes the year obvious, keeps numbers short, and matches how most accounting periods work. This is the best default for most businesses.',
        'Financial-year prefixed — INV/26-27/001. Required in effect where numbering resets with the tax year rather than the calendar, as in India. Slightly longer but unambiguous about which return period an invoice belongs to.',
        'Date-based — 20260816-01. Sortable, unique, and immediately informative. The drawback is length and that it exposes your invoice volume: a client seeing 20260816-01 knows they were your first invoice that day.',
      ],
      table: {
        head: ['Scheme', 'Example', 'Resets', 'Best for'],
        rows: [
          ['Pure sequential', 'INV-0042', 'Never', 'Simplicity, low volume'],
          ['Year-prefixed', '2026-042', 'Annually', 'Most businesses'],
          ['Financial year', 'INV/26-27/042', 'Tax year', 'India, UK-style FY reporting'],
          ['Date-based', '20260816-01', 'Daily', 'High volume, sortable records'],
          ['Client-coded', 'ACME-042', 'Per client', 'Generally avoid'],
        ],
      },
    },
    {
      heading: 'Why client codes in the number are a bad idea',
      body: [
        'It is tempting to encode the client — ACME-001, ACME-002 — because it looks organised. Three problems follow, and they all arrive later.',
        'The sequence stops being auditable. There is no single running order any more, just dozens of parallel ones, and demonstrating that no invoice is missing becomes much harder.',
        'It leaks information. A client who sees ACME-001 knows they are your first invoice to them, which is fine, and a client who sees ACME-047 alongside a colleague\'s BETA-003 can infer relative volumes. That is your business information, not theirs.',
        'It breaks when relationships change. Clients rename, merge, get acquired, or turn out to be two entities. A number containing a client identity becomes wrong, and you cannot change an issued invoice.',
        'Put the client in a separate reference field instead. Every accounting system has one, and it gives you the sortability without embedding it in the immutable identifier.',
      ],
    },
    {
      heading: 'When you get it wrong',
      body: [
        'Three common mistakes, each with a specific fix.',
        'A skipped number. Do not fill the gap with a later invoice — that puts documents out of chronological order and looks worse than the gap. Record a note explaining the skip, or issue a cancelled invoice carrying that number with a zero value and "issued in error" on it, so the sequence is complete.',
        'A duplicated number. Two live invoices sharing a reference is a genuine problem because payments cannot be allocated reliably. Credit note the later one in full, reissue it with the correct next number, and tell the client what you have done.',
        'A scheme you have outgrown. Do not renumber history — that is worse than the inconsistency. Close the old sequence cleanly at a period boundary and start the new one from the following period, with a note in your records explaining the change. An auditor will accept a documented, dated transition; they will not accept retrospectively rewritten numbers.',
        'For corrections generally, see [credit notes and refunds](/credit-note-and-refunds).',
      ],
    },
  ],
  answersHeading: 'Invoice numbering questions, answered',
  answers: [
    {
      question: 'What number should I start my invoices at?',
      answer:
        'Anything, provided you then run sequentially. INV-001 is the honest default; starting at 100 or 1000 is harmless. Starting very high to appear established fools nobody who deals with invoices regularly and gains you nothing.',
    },
    {
      question: 'Do invoice numbers have to be sequential?',
      answer:
        'Yes in most jurisdictions, and unique everywhere. Sequence integrity is how tax authorities test whether invoices have been suppressed, which is why an unexplained gap attracts a question that a documented cancellation does not.',
    },
    {
      question: 'Can I reuse an invoice number?',
      answer:
        'Never, including for a cancelled invoice. The number identifies that specific document permanently. If an invoice is cancelled, credit note it and move to the next number — do not recycle the reference for a different sale.',
    },
    {
      question: 'Should invoice numbers reset each year?',
      answer:
        'It is a common and accepted convention, provided the year is part of the reference so uniqueness is preserved — 2026-001 rather than plain 001 again. Some jurisdictions require a reset with the tax year; others expect one continuous sequence.',
    },
    {
      question: 'Can invoice numbers contain letters?',
      answer:
        'Yes, and prefixes such as INV or QUO are useful for distinguishing document types at a glance. Some jurisdictions restrict the character set and the length — India, for example, permits letters, numerals, hyphens and slashes within 16 characters.',
    },
    {
      question: 'What is a gap in the invoice sequence and does it matter?',
      answer:
        'A missing number in an otherwise continuous run. It matters because the obvious inference is that an invoice existed and was removed. Record why the number was skipped, or issue a zero-value cancelled invoice carrying it, so the sequence is complete.',
    },
    {
      question: 'How should I number quotations and invoices differently?',
      answer:
        'Use separate sequences with distinct prefixes — QUO-001 and INV-001. This keeps your invoice sequence unbroken for tax purposes and lets you measure how many quotes converted, which a shared sequence makes impossible to see.',
    },
    {
      question: 'How do I number credit notes?',
      answer:
        'Either continue your invoice sequence, or run a separate CN sequence. Both are accepted. Whichever you choose, the credit note needs its own unique number and must reference the number and date of the invoice it corrects.',
    },
    {
      question: 'How do I number invoices across multiple companies?',
      answer:
        'Each legal entity keeps its own independent sequence, since each files its own returns. Distinguish them by prefix — ACL-2026-001 and BCL-2026-001 — but never merge them into one running order across entities.',
    },
    {
      question: 'Can I change my invoice numbering system?',
      answer:
        'Yes, at a clean period boundary, with a note in your records explaining the change and its date. Never renumber history — a documented transition is accepted, retrospectively rewritten numbers are not.',
    },
    {
      question: 'What if I accidentally issue two invoices with the same number?',
      answer:
        'Credit note the later one in full, reissue it with the correct next number, and tell the client which reference now stands. Duplicate live references break payment allocation, so fix it as soon as you notice rather than letting it settle.',
    },
    {
      question: 'Should the invoice number appear on the payment reference?',
      answer:
        'Yes, and ask the client to use it. Payments arriving with no reference are among the most tedious things to reconcile, particularly where a client pays several invoices in one transfer. Put the requested reference on the invoice itself.',
    },
  ],
  faqs: [
    {
      question: 'Does the invoice number need to appear on the PDF filename?',
      answer:
        'Not required, but strongly recommended. Invoice-INV-0042-YourBusiness.pdf survives being downloaded into a folder of thirty attachments, where invoice.pdf does not. It also makes the client\'s accounts payable process slightly easier, which quietly helps you get paid.',
    },
    {
      question: 'How do I number recurring invoices?',
      answer:
        'Each issue takes the next number in your normal sequence, exactly like any other invoice. Reference the underlying agreement and the period covered in a separate field, rather than trying to encode the recurrence into the number itself.',
    },
    {
      question: 'What is an invoice reference versus an invoice number?',
      answer:
        'The number is your unique sequential identifier. A reference is usually the client\'s — their purchase order or job code — which you quote so their system can match your invoice to their commitment. Many invoices carry both, in separate fields.',
    },
  ],
  ctaHeading: 'Set up your numbering',
  ctaText: 'Create an Invoice Free',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'Credit Notes and Refunds', description: 'Correcting without breaking the sequence.', href: '/credit-note-and-refunds' },
    { title: 'Invoice Record Keeping', description: 'What to retain, and for how long.', href: '/invoice-record-keeping' },
    { title: 'How to Create an Invoice', description: 'Every field, explained.', href: '/how-to-create-an-invoice' },
  ],
};

export const retainerInvoiceGuide: GuideConfig = {
  slug: 'retainer-recurring-invoice',
  cluster: 'Getting paid',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'Billing the same client every month: retainer models, invoicing in advance, rollover policy, price rises, and cancelling without a fight.',
  keyTakeaways: [
    'Bill retainers in advance. It converts a collections problem into a service-suspension decision.',
    'Say whether unused time rolls over. Ambiguity here causes most retainer disputes.',
    'Define what the retainer excludes as carefully as what it includes.',
    'Agree the notice period at the start, when nobody is leaving.',
  ],
  seo: {
    title: 'Retainer Invoices: Recurring Billing Done Properly',
    description:
      'How to invoice a retainer: billing in advance, availability vs hours models, rollover policy, scope boundaries, raising prices and cancellation terms.',
    canonical: '/retainer-recurring-invoice',
  },
  h1: 'Retainer and Recurring Invoices',
  intro:
    'A retainer is the most valuable billing arrangement a service business can have — predictable revenue, no repeated selling, a client who plans around you. It is also the arrangement that goes wrong most quietly, because the failure is rarely a refusal to pay. It is a slow drift in which the client uses more than was agreed, or uses nothing and starts wondering what they are paying for. Both are prevented by the same thing: writing down what the retainer actually buys.',
  sections: [
    {
      heading: 'Three retainer models, three different invoices',
      body: [
        'People say "retainer" to mean at least three arrangements that behave differently.',
        'An availability retainer buys access. The client pays for you to be reachable and to prioritise their work, whether or not they use it. This is the cleanest model and the easiest to defend in a quiet month, because availability is the product.',
        'A block-of-hours retainer buys a defined quantity — twenty hours a month, drawn down as needed. Clear and easy to sell, and it invites the rollover argument every time a month is quiet.',
        'A deliverables retainer buys defined outputs: four blog posts, a monthly report, a maintenance cycle. Easiest to evidence, since the client can see what arrived, but it turns into piecework if the deliverables are trivially countable.',
        'The invoice differs by model. Availability states the period and the scope of access. Hours states hours included, used and remaining. Deliverables lists what was produced.',
      ],
      table: {
        head: ['Model', 'Client is buying', 'Invoice shows', 'Argument risk'],
        rows: [
          ['Availability', 'Access and priority', 'Period, scope of access', 'Quiet months feel unearned'],
          ['Block of hours', 'A quantity of time', 'Hours used and remaining', 'Rollover of unused hours'],
          ['Deliverables', 'Defined outputs', 'What was produced', 'Becomes piecework'],
          ['Hybrid', 'Base plus overage', 'Base, usage, overage', 'Overage disputes'],
        ],
      },
    },
    {
      heading: 'Invoice in advance, without exception',
      body: [
        'This is the structural decision that determines whether retainers are pleasant or painful.',
        'Invoice for a period before it begins. September\'s retainer goes out in late August, due before September starts. Work in September happens because the invoice was paid.',
        'The benefit is not administrative, it is positional. If a client stops paying, you stop working — immediately, and without having to chase anything. Compare that with billing in arrears, where a client who does not pay for September has already received September, and you are now a creditor trying to recover value you have already handed over.',
        'It also removes the monthly negotiation about whether the amount was justified, because the payment precedes the work rather than being judged against it.',
        'Set it up as a standing order or a card subscription where you can. Every manual step in a recurring payment is a monthly opportunity for it to be forgotten.',
      ],
    },
    {
      heading: 'Rollover, scope creep and the quiet month',
      body: [
        'Two failure modes sit at opposite ends of the same problem, and both are solved on the invoice.',
        'The client who uses too much. Retainers drift: a small extra request each month, none individually worth objecting to, until you are delivering half again what was agreed. Prevent it by stating what the retainer covers and what falls outside, and by showing usage on the invoice where the model is hours-based. Visibility does most of the work — clients who can see they used 26 of 20 hours usually raise it themselves.',
        'The client who uses nothing. A quiet month makes the invoice feel unearned, and this is where cancellations originate. The answer is to have sold availability rather than hours in the first place, and to state on the invoice what was included. A one-line summary of the period — even "no requests raised; capacity held and monitoring in place" — costs nothing and changes how the invoice reads.',
        'On rollover: pick a policy and put it on every invoice. Most retainers do not roll over, because the fee buys availability that expired. If you do allow it, cap it — one month, or 25% of the block — so the liability cannot accumulate indefinitely.',
      ],
    },
    {
      heading: 'Price rises and endings',
      body: [
        'Retainers get stale. The client\'s needs grow, your rates rise, and an arrangement set two years ago quietly becomes your worst-paid work.',
        'Review annually on a fixed date, and give notice well before the change — a full billing cycle at minimum. Apply the increase at a natural boundary such as the anniversary or a quarter start, and state the new rate on the first invoice that uses it. A rate rise that appears unannounced on an invoice generates far more resistance than the increase itself warrants.',
        'Agree the notice period at the start, when nobody is leaving and it is an abstract question. Thirty days is common for smaller retainers, sixty or ninety where you have committed capacity. Make it mutual — a notice period that binds only the client reads as a trap.',
        'Handle the ending well. Confirm the final period in writing, invoice it normally, hand over cleanly, and say the door is open. Retainer clients who leave on good terms return more often than almost any other kind of lead.',
      ],
    },
  ],
  answersHeading: 'Retainer invoicing questions, answered',
  answers: [
    {
      question: 'What is a retainer invoice?',
      answer:
        'An invoice for an ongoing arrangement covering a period rather than a specific piece of work. It states the period, what the retainer includes, and usually the usage where hours are involved. It is normally issued before the period begins.',
    },
    {
      question: 'Should retainers be billed in advance or arrears?',
      answer:
        'In advance, without exception. Billing before the period means a client who stops paying simply stops receiving service, rather than leaving you a creditor for work already delivered. It converts collections into a service decision.',
    },
    {
      question: 'Do unused retainer hours roll over?',
      answer:
        'Only if you say they do. Most retainers do not roll over because the fee buys availability that has expired. If you do allow it, cap the accumulation — one month, or a percentage of the block — so the liability cannot build indefinitely.',
    },
    {
      question: 'What should a retainer agreement include?',
      answer:
        'The monthly fee, the period, what is included and explicitly excluded, any hours or deliverables cap, the rollover policy, response-time commitments, the notice period for both sides, and how additional work beyond the retainer is priced.',
    },
    {
      question: 'How do I stop a retainer becoming scope creep?',
      answer:
        'State what falls outside it, and show usage on the invoice where the model is hours-based. Visibility does most of the work — a client who can see they used 26 of 20 included hours will usually raise it before you have to.',
    },
    {
      question: 'How do I justify a retainer in a quiet month?',
      answer:
        'By having sold availability rather than hours, and by summarising the period on the invoice. Even a single line — capacity held, monitoring in place, no requests raised — changes how the invoice reads compared with a bare figure.',
    },
    {
      question: 'How do I raise the price of a retainer?',
      answer:
        'Give at least one full billing cycle of notice, apply it at a natural boundary such as the anniversary or a quarter start, and state the new rate on the first invoice using it. Unannounced increases on an invoice generate resistance out of all proportion to the amount.',
    },
    {
      question: 'What notice period should a retainer have?',
      answer:
        'Thirty days for smaller arrangements, sixty or ninety where you hold significant capacity for the client. Make it mutual, and agree it at the start when nobody is leaving — a notice period negotiated during a cancellation never lands well.',
    },
    {
      question: 'Can I charge for work beyond the retainer?',
      answer:
        'Yes, and you should, at a stated overage rate agreed in advance. Absorbing overage silently is how retainers become unprofitable. Flag it when it happens rather than at the end of the month, so the client can decide before the cost is incurred.',
    },
    {
      question: 'How do I set up recurring invoices?',
      answer:
        'Generate each period\'s invoice with the next number in your normal sequence, and automate the payment side through standing order or card subscription. Every manual step in a recurring payment is a monthly chance for it to be forgotten.',
    },
    {
      question: 'Is a retainer the same as a subscription?',
      answer:
        'Commercially they behave similarly — a fixed recurring fee for ongoing access. Subscription usually implies a productised, self-serve offering with standard tiers; retainer implies a negotiated arrangement with a named person delivering it.',
    },
    {
      question: 'What happens to a retainer if I go on holiday?',
      answer:
        'Say so in the agreement. Common approaches are a stated number of weeks per year during which cover is arranged or response times relax, or a pro-rata reduction. Silence produces resentment at exactly the moment you are least able to address it.',
    },
  ],
  faqs: [
    {
      question: 'Is a retainer refundable?',
      answer:
        'Usually not once the period has begun, because the fee bought availability you then held. Practice differs for unused blocks of hours, which is precisely why the rollover and refund position should be stated on the invoice rather than left to be argued.',
    },
    {
      question: 'How long should a retainer commitment be?',
      answer:
        'Three to six months is a common minimum, long enough to be worth setting up and short enough that clients will commit. Longer lock-ins raise resistance at sale and rarely help — a client who wants to leave at month two will be a difficult client for the next four.',
    },
    {
      question: 'Should a retainer invoice show the hourly rate?',
      answer:
        'Generally no. Showing an implied rate invites the client to recalculate the retainer against usage in a quiet month, which is the argument you are trying to avoid. State what is included instead, and keep the rate for overage pricing.',
    },
  ],
  ctaHeading: 'Create a retainer invoice',
  ctaText: 'Create an Invoice Free',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'Consultant Invoice', description: 'Day rates, retainers and approvals.', href: '/consultant-invoice' },
    { title: 'Invoice Payment Terms', description: 'Terms that get you paid on time.', href: '/invoice-payment-terms' },
    { title: 'Deposit and Advance Payment', description: 'Taking money before you start.', href: '/deposit-invoice' },
  ],
};

export const invoiceEmailGuide: GuideConfig = {
  slug: 'invoice-email',
  cluster: 'Getting paid',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'The email that carries the invoice: subject lines that survive a full inbox, what to put in the body, who to send it to, and a follow-up sequence that works.',
  keyTakeaways: [
    'Put the amount and due date in the email body, not only in the attachment.',
    'Send to whoever approves payment, and copy your day-to-day contact.',
    'Attach a PDF named with your business and the invoice number.',
    'Follow up on a schedule, not on how annoyed you feel.',
  ],
  seo: {
    title: 'Invoice Email: What to Write and When to Follow Up',
    description:
      'How to write the email that carries your invoice: subject lines, body content, who to send it to, attachment naming, and a follow-up sequence that gets replies.',
    canonical: '/invoice-email',
  },
  h1: 'The Invoice Email: What to Write and When to Follow Up',
  intro:
    'A great invoice attached to a bad email gets paid late. The email is what determines whether the invoice reaches the person who can approve it, whether they understand what it is without opening anything, and whether it resurfaces when it needs to. It is thirty seconds of writing that materially changes when the money arrives, and most people spend those thirty seconds writing "Please find attached."',
  sections: [
    {
      heading: 'Send it to the right person',
      body: [
        'The most common reason an invoice sits unpaid is not reluctance. It is that it arrived in the inbox of someone with no authority to pay it, who fully intended to forward it.',
        'Your day-to-day contact is usually not the approver. In anything larger than a very small business, invoices go to accounts payable, a finance mailbox, or a manager with budget authority. Ask during onboarding: who should invoices go to, is there a shared mailbox, is a purchase order number needed, and when is the payment run.',
        'Then send to the approver and copy your contact. The copy matters — your contact is the person who cares whether you are happy, and they are the one who will chase internally when you follow up.',
        'Where a client uses a portal rather than email, use the portal. Invoices emailed to a client with an AP system frequently never get entered at all.',
      ],
    },
    {
      heading: 'The subject line does real work',
      body: [
        'Subject lines get scanned in a list of forty. Yours needs to be identifiable and searchable months later.',
        'Include your business name, the word Invoice, the number, and the amount. "Invoice INV-0042 from Ashgrove Design — £2,400 due 14 September" tells the reader everything before they open anything, and it is findable by amount, number or name when someone searches for it later.',
        'Avoid "Invoice attached" and "Payment request", which are indistinguishable from every other invoice in the inbox and from a fair amount of spam.',
        'For follow-ups, keep the same thread rather than starting a new one. The history is the point — it shows the original send date without you having to assert it.',
      ],
      list: [
        'Invoice INV-0042 from [Your Business] — £2,400 due 14 September',
        'Invoice INV-0042 — [Client] project, £2,400, due 14 September',
        'Reminder: Invoice INV-0042 — £2,400, due tomorrow',
        'Overdue: Invoice INV-0042 — £2,400, 14 days past due',
      ],
    },
    {
      heading: 'What goes in the body',
      body: [
        'Repeat the essentials in the email body. Not everyone opens the attachment before deciding what to do with the message, and some AP systems display only the body text.',
        'Four things: what the invoice is for, the amount, the due date, and how to pay. Three sentences. Then a line thanking them, and stop.',
        'Do not apologise for invoicing. "Sorry to chase" and "I hope you don\'t mind" undermine a routine commercial request and, in practice, make it easier to deprioritise. You did the work; the invoice is the expected next step.',
        'Do not put payment terms up for negotiation by asking "let me know if that works". State the due date as a fact. If a client needs different terms they will say so, and that is a conversation worth having explicitly rather than inviting by default.',
      ],
    },
    {
      heading: 'A follow-up sequence that works',
      body: [
        'Follow up on a schedule, not on emotion. A schedule means it happens consistently, at the right intervals, without you having to decide each time whether you are being pushy.',
        'Three days before the due date, send a short courtesy note. This is the highest-value message in the sequence and almost nobody sends it. It catches invoices that were never entered, arrives while the client feels helpful rather than defensive, and is genuinely appreciated.',
        'On the due date, if unpaid, reply in-thread noting it is due today and asking for a payment date.',
        'Seven days after, reply again asking for a specific date and whether anything is blocking approval. Asking what is blocking it often surfaces a missing PO number or a wrong address in seconds.',
        'Fourteen days after, change register: a firm, plain message stating the amount, the days overdue, and a deadline. Copy your contact if you have not been.',
        'Beyond thirty days you are into escalation, covered in [how to chase an unpaid invoice](/how-to-chase-an-unpaid-invoice).',
      ],
      table: {
        head: ['When', 'Tone', 'Ask for'],
        rows: [
          ['3 days before due', 'Courtesy', 'Confirmation it is scheduled'],
          ['Due date', 'Neutral', 'A payment date'],
          ['+7 days', 'Direct', 'A date, and what is blocking it'],
          ['+14 days', 'Firm', 'Payment by a stated deadline'],
          ['+30 days', 'Formal', 'Payment, with next steps stated'],
        ],
      },
    },
  ],
  answersHeading: 'Invoice email questions, answered',
  answers: [
    {
      question: 'What should I write when sending an invoice by email?',
      answer:
        'Three sentences: what the invoice covers, the amount and due date, and how to pay. Attach the PDF, thank them, and stop. Repeat the amount and date in the body, since not everyone opens the attachment before deciding what to do.',
    },
    {
      question: 'What is a good subject line for an invoice email?',
      answer:
        'Include your business name, the word Invoice, the number and the amount — "Invoice INV-0042 from Ashgrove Design — £2,400 due 14 September". It is identifiable in a crowded inbox and findable by any of those terms months later.',
    },
    {
      question: 'Who should I send my invoice to?',
      answer:
        'The person or mailbox that approves payment, copying your day-to-day contact. Ask at onboarding whether there is an accounts payable address, a portal, or a purchase order requirement — invoices sent only to your contact routinely stall in forwarding.',
    },
    {
      question: 'Should I send my invoice as a PDF or in the email body?',
      answer:
        'Attach a PDF and summarise it in the body. The PDF is the record and is what AP systems expect; the body summary means the essentials are visible without opening anything, which matters more than people assume.',
    },
    {
      question: 'What should I name my invoice file?',
      answer:
        'Something that survives being downloaded into a folder of thirty others: Invoice-INV-0042-YourBusiness.pdf. A file called invoice.pdf or document.pdf gets lost, and lost invoices get paid late through nobody\'s ill will.',
    },
    {
      question: 'When should I follow up on an unpaid invoice?',
      answer:
        'Three days before the due date as a courtesy, on the due date, then at seven and fourteen days overdue. Following up on a schedule rather than on how annoyed you feel means it happens consistently and stays professional.',
    },
    {
      question: 'Should I apologise for chasing an invoice?',
      answer:
        'No. Requesting payment for completed work is a routine commercial act, not an imposition. Apologetic framing signals the request is negotiable and makes it easier to deprioritise. Be polite and plain rather than sorry.',
    },
    {
      question: 'Is it rude to send a reminder before the invoice is due?',
      answer:
        'Not at all, and it is the most effective message in the sequence. A short note a few days ahead catches invoices that were never entered into the client\'s system, and it arrives while everyone still feels cooperative.',
    },
    {
      question: 'Should I email or use the client\'s invoicing portal?',
      answer:
        'Use the portal where one exists. Clients with AP systems frequently never enter emailed invoices at all, and portal submissions are timestamped, which gives you a record of when the clock actually started.',
    },
    {
      question: 'How do I write a final payment reminder?',
      answer:
        'Plainly and without hostility: the invoice number, the amount, how many days overdue, what you want, and by when. Drop the softening language, keep the professionalism, and state clearly what happens if the deadline passes.',
    },
    {
      question: 'Should I copy my main contact on chasing emails?',
      answer:
        'Yes, from the second follow-up onward. Your contact is the person who cares about the relationship and is best placed to chase internally. Escalating above them without telling them first is what damages relationships, not the copy itself.',
    },
    {
      question: 'How many times should I follow up before escalating?',
      answer:
        'Three or four spaced messages over roughly a month, then move to a formal written demand. Sending the same soft reminder weekly for three months trains the client that nothing follows from ignoring you.',
    },
  ],
  faqs: [
    {
      question: 'Should I send invoices at a particular time of day?',
      answer:
        'Mid-morning on a Tuesday to Thursday tends to land better than late Friday, when it will be reviewed on Monday alongside everything else. It is a marginal effect, well behind sending to the right person and invoicing promptly.',
    },
    {
      question: 'Should I use read receipts on invoice emails?',
      answer:
        'Generally not. They read as distrustful, are widely ignored or blocked, and prove little — a read receipt does not show the invoice reached the approver. If you need proof of delivery, a client portal timestamp is far better evidence.',
    },
    {
      question: 'What if the client says they never received the invoice?',
      answer:
        'Resend it immediately with the original number and date unchanged, and copy a second contact. Do not reissue with a new date, which restarts the payment clock in their favour. Then ask whether there is a portal or AP address you should be using instead.',
    },
  ],
  ctaHeading: 'Create an invoice to send',
  ctaText: 'Create an Invoice Free',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'How to Chase an Unpaid Invoice', description: 'When the follow-ups run out.', href: '/how-to-chase-an-unpaid-invoice' },
    { title: 'Invoice Payment Terms', description: 'The terms behind the due date.', href: '/invoice-payment-terms' },
    { title: 'Disputed Invoices', description: 'When the reply is a complaint.', href: '/disputed-invoice' },
  ],
};

export const recordKeepingGuide: GuideConfig = {
  slug: 'invoice-record-keeping',
  cluster: 'Invoicing',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'How long to keep invoices, what counts as an acceptable record, digital versus paper, and building a filing system you can actually search under pressure.',
  keyTakeaways: [
    'Five to seven years is the common range, but the clock often runs from the return, not the invoice.',
    'Digital copies are accepted almost everywhere, provided they are complete and legible.',
    'Keep the evidence supporting the invoice, not only the invoice.',
    'Your records must survive losing your invoicing tool, your laptop and your accountant.',
  ],
  seo: {
    title: 'Invoice Record Keeping: How Long to Keep Invoices',
    description:
      'How long to keep invoices and what to retain: retention periods by jurisdiction, digital vs paper records, what supporting evidence to keep, and filing systems.',
    canonical: '/invoice-record-keeping',
  },
  h1: 'Invoice Record Keeping: What to Keep and For How Long',
  intro:
    'Record keeping is the part of invoicing nobody thinks about until the year they need it, at which point they discover that the tool holding four years of billing history has changed its export policy, or that the PDFs are in a folder on a laptop that died. The requirements themselves are not onerous. What matters is building something that survives the ordinary disasters — a tool shutting down, a device failing, an accountant moving on.',
  sections: [
    {
      heading: 'How long, and from when',
      body: [
        'Retention periods cluster in the five-to-seven year range, but the detail that catches people out is when the clock starts. It is frequently not the invoice date.',
        'The [IRS ties retention to the return the record supports](https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records), commonly three years from filing but longer in several circumstances, and indefinitely where no return was filed. In the UK, [HMRC requires company records to be kept for six years](https://www.gov.uk/running-a-limited-company/company-and-accounting-records) from the end of the accounting period. India\'s GST law works to 72 months from the annual return due date. The UAE generally requires five years, and Nigeria six for e-invoicing records.',
        'Because the trigger differs, the safe practical rule for a small business is to keep everything for seven years from the end of the accounting period it falls in, and never delete anything relating to an open dispute, an asset you still hold, or a period under enquiry.',
        'Some records outlive the general rule entirely — anything relating to property, capital assets or long-running contracts may need keeping until well after disposal.',
      ],
      table: {
        head: ['Jurisdiction', 'Typical period', 'Runs from'],
        rows: [
          ['United States', '3–7 years', 'The return the record supports'],
          ['United Kingdom', '6 years', 'End of the accounting period'],
          ['India (GST)', '72 months', 'Annual return due date'],
          ['UAE', '5 years', 'End of the tax period'],
          ['Nigeria (e-invoice)', '6 years', 'Invoice issue'],
          ['EU', '6–10 years', 'Set nationally'],
        ],
      },
    },
    {
      heading: 'Keep the evidence, not just the invoice',
      body: [
        'The invoice is a claim. What supports the claim is what gets asked for when anything is questioned, and it is what most people fail to keep.',
        'For each invoice you want the document itself, the record of what it relates to, and evidence that the work or supply happened. For anything with unusual tax treatment, keep whatever supports that treatment — a VIES check for a zero-rated EU supply, transport evidence for an intra-Community movement, a customer\'s registration number.',
        'For your own purchases, keep supplier invoices as well as receipts. Card statements are not sufficient in most systems, because they show that money moved but not what was bought or what tax was charged.',
      ],
      list: [
        'The invoice PDF as sent, not just the data in a tool',
        'The quotation or contract it relates to',
        'Written approvals for variations and change requests',
        'Proof of delivery, completion or supply',
        'Evidence supporting any special tax treatment',
        'Credit notes and the invoices they correct',
        'Remittance advice and bank records showing payment',
        'Correspondence about disputes and their resolution',
      ],
    },
    {
      heading: 'Digital records are fine, with conditions',
      body: [
        'Almost every jurisdiction now accepts digital records, and several actively require them. The conditions are consistent: records must be complete, legible, and available to the authority on request within a reasonable time.',
        'That last point matters more than it sounds. Records that exist but cannot be produced quickly are treated, practically, as records you do not have. If your archive is a decade of PDFs in one folder named by timestamp, you technically comply and will still have a miserable week when someone asks for the third quarter of 2024.',
        'Some regimes have specific requirements — the Philippines expects initial years in hard copy with later years permitted electronically, and Nigeria requires the human-readable version of an e-invoice to be stored, not just the structured data. Check your own rules before going paperless.',
        'Do not rely on a single invoicing tool as your archive. Tools get acquired, change pricing, restrict exports, or shut down. Export your records annually to files you control and store independently.',
      ],
    },
    {
      heading: 'A filing system that works under pressure',
      body: [
        'The test of a filing system is not how tidy it looks. It is whether you can find one specific invoice from three years ago in under two minutes while someone waits.',
        'Folder per financial year, subfolder for sales and purchases, files named with the date, number and client: 2026-03-14_INV-0042_Acme.pdf. That sorts chronologically, searches by any element, and needs no software to interpret.',
        'Keep a simple ledger alongside — a spreadsheet with number, date, client, net, tax, gross and paid status. It takes seconds per invoice, gives you a searchable index independent of any tool, and is what lets you answer questions about totals without opening a single PDF.',
        'Back up in two places, one of them off-site or in cloud storage. Records lost to a hardware failure are not an excuse anywhere.',
        'Finally, write down where everything is. If you are unavailable, someone else — an accountant, a partner, an executor — needs to be able to find your records without reconstructing your habits.',
      ],
    },
  ],
  answersHeading: 'Record keeping questions, answered',
  answers: [
    {
      question: 'How long should I keep invoices?',
      answer:
        'Commonly five to seven years, though the trigger varies — the US ties it to the return the record supports, the UK to the end of the accounting period, India to the annual return due date. Seven years from the end of the accounting period is a safe general rule.',
    },
    {
      question: 'Can I keep invoices digitally instead of on paper?',
      answer:
        'In almost every jurisdiction, yes, provided the records are complete, legible and can be produced on request within a reasonable time. A few regimes have specific rules, so check yours before disposing of paper originals.',
    },
    {
      question: 'Do I need to keep paper copies of invoices?',
      answer:
        'Generally no, with exceptions. The Philippines expects initial years in hard copy, and some regimes require the human-readable form of an e-invoice to be retained. Where paper is not required, a legible digital copy is sufficient almost everywhere.',
    },
    {
      question: 'What records do I need besides the invoice?',
      answer:
        'The quotation or contract, written approvals for variations, evidence the work or supply happened, anything supporting a special tax treatment, credit notes, remittance advice, and correspondence about disputes. The invoice is a claim; the rest is what supports it.',
    },
    {
      question: 'Are bank statements enough proof of business expenses?',
      answer:
        'No, in most systems. A statement shows money moved but not what was bought or what tax was charged. Keep the supplier invoice or receipt, since that is the document that supports both the deduction and any input tax recovery.',
    },
    {
      question: 'What happens if I lose an invoice?',
      answer:
        'Ask the supplier for a copy — most can reissue one, marked as a duplicate. For your own sales invoices, your accounting records and the client\'s copy can usually reconstruct the position. Persistent gaps are treated far more seriously than isolated ones.',
    },
    {
      question: 'Should I keep records after closing my business?',
      answer:
        'Yes. Retention obligations survive closure and typically run for the same period from the final return. Someone must remain able to produce them, which is worth arranging deliberately rather than leaving to chance.',
    },
    {
      question: 'How should I name and organise invoice files?',
      answer:
        'Folder per financial year, split into sales and purchases, files named date-number-client: 2026-03-14_INV-0042_Acme.pdf. That sorts chronologically, searches by any element, and requires no particular software to make sense of.',
    },
    {
      question: 'Can I rely on my invoicing software to keep my records?',
      answer:
        'Not alone. Tools change pricing, restrict exports, get acquired or shut down, and any of those can put your archive behind a paywall at a bad moment. Export annually to files you control and store independently of the tool.',
    },
    {
      question: 'Do I need to keep quotations as well as invoices?',
      answer:
        'Yes, particularly where an invoice was later disputed. The quotation is what establishes the agreed scope and price, and it is the first document anyone asks for when a client argues about what an invoice covers.',
    },
    {
      question: 'What is an audit trail?',
      answer:
        'The chain of documents linking a transaction from agreement to payment: quotation, invoice, delivery evidence, remittance, bank entry. Auditors follow the chain rather than examining documents in isolation, which is why keeping only invoices is insufficient.',
    },
    {
      question: 'How long should I keep records of disputed invoices?',
      answer:
        'Until well after resolution, and longer than your ordinary retention period. Limitation periods for contract claims commonly run six years or more, so a resolved dispute can still resurface long after the accounting period is closed.',
    },
  ],
  faqs: [
    {
      question: 'Is cloud storage acceptable for tax records?',
      answer:
        'Generally yes, provided the records remain complete, legible and retrievable on request. Some jurisdictions have views on data residency or require that records be accessible from within the country, which matters if your provider stores data elsewhere.',
    },
    {
      question: 'Do I need to keep records in a specific format?',
      answer:
        'Rarely, though e-invoicing regimes increasingly specify structured formats and require the human-readable version alongside. PDF is universally accepted for ordinary invoices. Avoid proprietary formats that require a specific tool to open.',
    },
    {
      question: 'What is the penalty for poor record keeping?',
      answer:
        'It varies from fixed penalties to assessments based on estimated figures where records are inadequate. The practical risk is worse than the fine — without records you cannot substantiate deductions or input tax, so the authority\'s estimate stands.',
    },
  ],
  sources: [
    {
      label: 'How long should I keep records?',
      publisher: 'Internal Revenue Service',
      url: 'https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records',
    },
    {
      label: 'Company and accounting records',
      publisher: 'GOV.UK',
      url: 'https://www.gov.uk/running-a-limited-company/company-and-accounting-records',
    },
  ],
  ctaHeading: 'Create invoices you can archive',
  ctaText: 'Create an Invoice Free',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'Invoice Numbering Systems', description: 'Sequences that survive an audit.', href: '/invoice-numbering-system' },
    { title: 'Credit Notes and Refunds', description: 'Correcting without breaking the trail.', href: '/credit-note-and-refunds' },
    { title: 'How to Create an Invoice', description: 'Every field, explained.', href: '/how-to-create-an-invoice' },
  ],
};

export const internationalInvoiceGuide: GuideConfig = {
  slug: 'international-invoicing-currency',
  cluster: 'Invoicing',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'Invoicing across borders: choosing the currency, who pays the transfer fees, exchange rate risk, and getting paid without losing a chunk to intermediary banks.',
  keyTakeaways: [
    'Whoever invoices in a foreign currency carries the exchange rate risk. Decide that deliberately.',
    'Specify OUR, SHA or BEN on the invoice, or intermediary banks will decide for you.',
    'State the currency in ISO code — $ and £ are ambiguous across several countries.',
    'Record the rate you used at invoice date; your accounts need it even if the client does not.',
  ],
  seo: {
    title: 'International Invoicing: Currency, Fees and Exchange Rates',
    description:
      'How to invoice international clients: choosing the currency, exchange rate risk, who pays bank charges, intermediary fees, and getting paid across borders.',
    canonical: '/international-invoicing-currency',
  },
  h1: 'International Invoicing: Currency, Fees and Getting Paid',
  intro:
    'Invoicing a client in another country introduces three costs that domestic invoicing does not have, and all three are usually discovered after the money arrives short. There is the exchange rate, which moves between invoicing and payment. There are the transfer fees, which can be deducted by up to three separate banks. And there is the question of who bears each — which nobody discusses until the first payment lands smaller than expected.',
  sections: [
    {
      heading: 'Whose currency?',
      body: [
        'Invoicing in your own currency means the client bears the exchange risk and the conversion cost. Invoicing in theirs means you do. There is no neutral option; someone always carries it.',
        'Invoice in your own currency where you can. Your costs are in it, your tax is in it, and your margin should not depend on a rate you cannot control. Clients accept this more readily than people expect, particularly for services.',
        'Invoice in the client\'s currency when it wins you the work, when they are much larger than you and it is effectively a condition, or when their market convention requires it. If you do, build a margin buffer into the price — a few percent — rather than discovering that a rate move ate your profit on a three-month project.',
        'A third currency is sometimes the sensible answer. US dollars are widely used between parties who share neither currency, and both sides accept an equal, visible cost rather than one side carrying it invisibly.',
        'Whichever you pick, state it in ISO code next to the total. "$" means at least five different currencies and "£" more than one. USD 4,200 is unambiguous; $4,200 is a question.',
      ],
    },
    {
      heading: 'Who pays the bank charges',
      body: [
        'International transfers carry fees at up to three points: the sending bank, one or more intermediary correspondent banks, and the receiving bank. Which of you pays is a field on the payment instruction, and if you do not specify it, your client\'s bank chooses a default.',
        'The codes are worth knowing because they explain almost every "the client paid but I received less" situation.',
        'OUR means the sender pays all charges, including intermediary fees, and you receive the full invoiced amount. SHA means charges are shared — the sender pays their bank, and you absorb the intermediary and receiving fees. BEN means you pay everything, deducted from the transfer.',
        'SHA is the common default, and it is why payments routinely arrive twenty to forty units short. That shortfall is not a short payment and should not be treated as one.',
        'State your requirement on the invoice: "Please remit under OUR charges so the full invoiced amount is received." Then price accordingly — if a client insists on SHA, either add a handling line or accept the deduction knowingly rather than being surprised each time.',
      ],
      table: {
        head: ['Code', 'Sender pays', 'You pay', 'You receive'],
        rows: [
          ['OUR', 'All charges', 'Nothing', 'The full invoiced amount'],
          ['SHA', 'Their own bank', 'Intermediary + receiving', 'Slightly less, unpredictably'],
          ['BEN', 'Nothing', 'All charges', 'Noticeably less'],
        ],
      },
    },
    {
      heading: 'Exchange rates and your own books',
      body: [
        'Even where the client bears the risk, you still need a rate for your own accounting.',
        'Record the rate at the invoice date, since that is generally when the sale is recognised. When payment arrives at a different rate, the difference is a foreign exchange gain or loss — a real line in your accounts, not an error to be smoothed over.',
        'Where tax applies, most systems require the tax amount in local currency regardless of the invoice currency. The UAE requires the VAT shown in AED at a Central Bank rate; EU states require the VAT in the currency of the country where it is due. Note the rate and its source on the invoice.',
        'For long projects, consider invoicing in stages rather than one payment at the end. It reduces exposure to any single rate movement, quite apart from its cashflow benefits — see [milestone and partial payments](/milestone-partial-payment-invoice).',
      ],
    },
    {
      heading: 'Getting the money to actually arrive',
      body: [
        'A few practical things reduce the friction more than anything on the invoice design.',
        'Give complete payment details. IBAN and BIC/SWIFT for most of the world, routing and account numbers for the US, plus your full legal name and address exactly as your bank holds them. A mismatch between the name on the invoice and the name on the account causes returns and delays, and looks like a fraud flag.',
        'Ask the client to send the invoice number as the payment reference. Unreferenced international payments are the hardest of all to reconcile.',
        'Consider a multi-currency account or a specialist transfer service if you invoice abroad regularly. Receiving in local currency and converting on your own terms is usually meaningfully cheaper than a correspondent bank chain.',
        'Finally, be aware that invoice payment fraud disproportionately targets international transfers, where an unusual account is less obviously wrong. Confirm any change of bank details by phone using a number you already had — never one supplied in the email requesting the change.',
      ],
    },
  ],
  answersHeading: 'International invoicing questions, answered',
  answers: [
    {
      question: 'What currency should I invoice in?',
      answer:
        'Your own, where you can. Your costs and taxes are in it, so your margin should not depend on a rate you cannot control. Invoice in the client\'s currency only when it wins the work, and build a buffer into the price when you do.',
    },
    {
      question: 'Who pays international bank transfer fees?',
      answer:
        'Whoever the payment instruction specifies. OUR means the sender pays everything and you receive the full amount; SHA splits them and is the common default; BEN means you pay all of them. State your requirement on the invoice.',
    },
    {
      question: 'Why did my international client pay less than the invoice?',
      answer:
        'Almost always bank charges deducted in transit under SHA terms, or a withholding tax deduction in the client\'s country. Check the shortfall against typical intermediary fees and applicable withholding rates before treating it as a short payment.',
    },
    {
      question: 'What are OUR, SHA and BEN on a payment?',
      answer:
        'Charge codes on an international transfer. OUR: the sender pays all fees. SHA: shared, so you absorb the intermediary and receiving fees. BEN: you pay everything. SHA is the usual default and explains most unexpectedly short payments.',
    },
    {
      question: 'What exchange rate should I use on an invoice?',
      answer:
        'The rate at the invoice date, recorded with its source, since that is generally when the sale is recognised. Where tax applies, many jurisdictions specify which rate must be used for the tax amount, so check rather than assuming.',
    },
    {
      question: 'Do I charge VAT or sales tax to an overseas client?',
      answer:
        'It depends on where the supply is treated as taking place and on your customer\'s status. B2B services across borders often shift the obligation to the customer under a reverse charge. B2C sales frequently create a registration obligation in the customer\'s country.',
    },
    {
      question: 'Should I put my currency as a symbol or a code?',
      answer:
        'ISO code, always — USD, GBP, AUD, CAD. The dollar sign is used by at least five currencies and the pound sign by more than one, so a symbol alone leaves genuine ambiguity about what you are actually asking for.',
    },
    {
      question: 'What details do I need for an international payment?',
      answer:
        'IBAN and BIC/SWIFT for most of the world, or routing and account numbers for the US, plus your legal name and address exactly as your bank holds them. A name mismatch causes returns, delays and sometimes a fraud flag.',
    },
    {
      question: 'How do I avoid losing money on exchange rates?',
      answer:
        'Invoice in your own currency where possible, invoice in stages on long projects to spread rate exposure, and consider a multi-currency account so you can convert on your own timing rather than at whatever rate the transfer applies.',
    },
    {
      question: 'What is withholding tax on an international invoice?',
      answer:
        'Tax the client\'s country requires them to deduct from your payment and remit locally. You invoice the full amount and receive the balance. Ask for the withholding certificate — it usually offsets your own tax liability under a double taxation treaty.',
    },
    {
      question: 'Do I need to state my tax number on an international invoice?',
      answer:
        'Where you have one, yes, and for EU cross-border B2B supplies both parties\' VAT numbers are required. It also helps the client\'s finance team establish the correct tax treatment, which reduces the chance of the invoice being queried.',
    },
    {
      question: 'How long do international payments take?',
      answer:
        'Typically two to five working days through the correspondent banking network, longer where currency controls or compliance checks apply. Build that into your payment terms rather than treating day-one silence after the due date as a problem.',
    },
  ],
  faqs: [
    {
      question: 'Should I use PayPal or a bank transfer for international invoices?',
      answer:
        'Compare the true cost, which is the fee plus the exchange margin rather than the headline fee alone. Payment platforms are convenient and often apply a spread well above the mid-market rate. Specialist transfer services usually beat both on larger amounts.',
    },
    {
      question: 'Can I invoice a foreign client in their local language?',
      answer:
        'Yes, and a dual-language invoice is common in some markets. Ensure the figures, currency code and tax treatment are unambiguous in both versions, and state which version governs if there is any discrepancy.',
    },
    {
      question: 'What is an invoice payment fraud risk on international transfers?',
      answer:
        'Fraudsters intercept or spoof invoice emails and substitute their own bank details, which is harder to spot on an international payment where an unfamiliar account looks normal. Confirm any change of details by phone on a number you already held.',
    },
  ],
  ctaHeading: 'Create a multi-currency invoice',
  ctaText: 'Create an Invoice Free',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'EU VAT and Reverse Charge', description: 'Cross-border rules inside the EU.', href: '/eu-vat-invoice-cross-border' },
    { title: 'Milestone and Partial Payments', description: 'Spreading exchange rate exposure.', href: '/milestone-partial-payment-invoice' },
    { title: 'UAE Tax Invoice Format', description: 'Currency rules with a local tax regime.', href: '/vat-invoice-format-uae' },
  ],
};
