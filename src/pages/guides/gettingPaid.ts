import type { GuideConfig } from './types';

export const paymentTermsGuide: GuideConfig = {
  slug: 'invoice-payment-terms',
  cluster: 'Getting paid',
  published: '2026-08-06',
  updated: '2026-08-06',
  summary:
    'What Net 30, Net 15, due on receipt and 2/10 Net 30 actually mean, and which terms get you paid fastest.',
  seo: {
    title: 'Invoice Payment Terms Explained | Net 30, Net 15 & More',
    description:
      'What Net 30, Net 15, due on receipt and 2/10 Net 30 mean on an invoice, how to choose payment terms, and how to word them so clients actually pay on time.',
    canonical: '/invoice-payment-terms',
  },
  h1: 'Invoice Payment Terms Explained',
  intro:
    'Payment terms are the part of an invoice that says when you expect to be paid and what happens if you are not. They are also the part most small businesses copy from a template without thinking about, which is why so many invoices sit unpaid for 60 days. This guide explains what the common terms mean, which ones actually work, and how to word them.',
  keyTakeaways: [
    'Net 30 means payment is due 30 days after the invoice date, not 30 working days.',
    'Shorter terms genuinely get you paid sooner. Net 14 or due on receipt suits most freelance and small business work.',
    'The due date must appear as an actual calendar date, not only as a term like "Net 30".',
    'Early payment discounts such as 2/10 Net 30 work, but only if the discount is worth less to you than the cash flow.',
    'Late payment fees are only enforceable if the client agreed to them before the work started.',
  ],
  sections: [
    {
      heading: 'What "Net" actually means',
      body: [
        'The word Net followed by a number means the full invoice amount is due that many days after the invoice date. Net 30 means the balance is payable within 30 calendar days of the date on the invoice.',
        'Two details cause most of the arguments. First, the clock usually starts from the invoice date, not the date the client opened the email or the date the work finished, so send invoices promptly. Second, the count is in calendar days unless you explicitly say working days. If you mean business days, write it out.',
      ],
      table: {
        head: ['Term', 'Meaning', 'Best for'],
        rows: [
          ['Due on receipt', 'Payable immediately when the invoice arrives', 'One-off jobs, new clients, small amounts'],
          ['Net 7', 'Due within 7 calendar days', 'Freelancers with tight cash flow'],
          ['Net 14', 'Due within 14 calendar days', 'The practical default for most small businesses'],
          ['Net 30', 'Due within 30 calendar days', 'Corporate clients whose finance teams run monthly cycles'],
          ['Net 60 / Net 90', 'Due within 60 or 90 days', 'Large enterprise contracts. Avoid unless forced'],
          ['2/10 Net 30', '2% discount if paid within 10 days, otherwise full amount at 30', 'Encouraging early payment when margins allow'],
          ['50% upfront', 'Half before work starts, balance on delivery', 'Larger projects and new client relationships'],
          ['CIA', 'Cash in advance, paid in full before work begins', 'High-risk or first-time clients'],
        ],
      },
    },
    {
      heading: 'Which terms should you actually use',
      body: [
        'For most freelancers and small businesses, Net 14 is the sweet spot. It is short enough to protect your cash flow and long enough that no reasonable client objects. Net 30 has become a default largely through inertia, not because it serves the person sending the invoice.',
        'The exception is invoicing large companies. Corporate accounts payable departments typically run payment runs on a fixed schedule, and an invoice marked Net 7 will still be paid on their cycle. In that situation, the term matters less than getting the invoice into their system correctly and early, with a valid purchase order number if they use one.',
        'For projects above a few thousand, split the payment. A deposit before work starts and the balance on delivery protects you from doing the entire job unpaid, and clients are used to it.',
      ],
    },
    {
      heading: 'Always show a real due date',
      body: [
        'Writing only "Net 30" pushes the arithmetic onto the client, and anything that requires effort delays payment. Put the actual calendar date on the invoice: "Payment due 5 September 2026."',
        'Show both if you like. "Net 30 — payment due 5 September 2026" is unambiguous and leaves nothing to interpret. Every template in QuillBill has a dedicated due date field for exactly this reason.',
      ],
    },
    {
      heading: 'Early payment discounts',
      body: [
        'The notation 2/10 Net 30 means the client may deduct 2% if they pay within 10 days, otherwise the full amount is due at 30 days. It is common in wholesale and manufacturing and rare in services.',
        'Run the numbers before offering one. Giving up 2% to be paid 20 days sooner is an annualised cost well above most borrowing rates. It makes sense if you are genuinely cash constrained or if late payment is costing you more in chasing time. It rarely makes sense simply as a courtesy.',
      ],
    },
    {
      heading: 'Late payment fees and interest',
      body: [
        'You can charge interest or a fixed fee on overdue invoices, but only if the client agreed to it before the work began. A charge that appears for the first time on an overdue reminder is generally unenforceable and tends to damage the relationship without recovering anything.',
        'Put the term in your quotation or contract, then restate it on every invoice from the first one. Something like: "Overdue accounts may be charged interest at 1.5% per month" is clear and standard.',
        'Many countries have statutory late payment rules for business-to-business transactions that give you a right to interest and recovery costs even without a contract term. The rates and conditions vary considerably, so check the rules where you and your client are based rather than assuming.',
      ],
    },
    {
      heading: 'Wording that reduces disputes',
      body: [
        'Keep the terms in plain language and put them somewhere the client will actually read, which usually means directly under the total rather than in small print at the bottom.',
      ],
      list: [
        'State the due date as a calendar date',
        'Name the accepted payment methods, and give full bank or payment details',
        'Include your reference so the client can quote it on the transfer',
        'State any late payment interest that was previously agreed',
        'For deposits, say clearly what triggers the balance becoming due',
        'If work stops on non-payment, say so before it happens, not after',
      ],
    },
    {
      heading: 'The terms matter less than the habits',
      body: [
        'Invoices get paid late for boring reasons far more often than difficult ones. The invoice went to the wrong person. It arrived three weeks after the work finished. It had no due date. The bank details were missing. There was no purchase order number on an invoice that needed one.',
        'Send the invoice the day the work is done, address it to whoever actually processes payments rather than your day-to-day contact, and confirm receipt. Those three habits will do more for your cash flow than any change of terms.',
      ],
    },
  ],
  faqs: [
    {
      question: 'What does Net 30 mean on an invoice?',
      answer:
        'Net 30 means the full invoice amount is due within 30 calendar days of the invoice date. It is calendar days rather than working days unless the invoice explicitly says otherwise.',
    },
    {
      question: 'What are the best payment terms for a freelancer?',
      answer:
        'Net 14 works well for most freelance work. It protects your cash flow without seeming unreasonable. For new clients or larger projects, ask for a deposit upfront and the balance on delivery.',
    },
    {
      question: 'Can I charge a late fee on an unpaid invoice?',
      answer:
        'Only if the client agreed to it before the work began, normally through your quotation or contract, and it should be restated on every invoice. Adding a fee for the first time on an overdue reminder is usually unenforceable. Some countries also grant statutory interest on late business payments, so check your local rules.',
    },
    {
      question: 'What does 2/10 Net 30 mean?',
      answer:
        'The client may deduct 2% from the total if they pay within 10 days. Otherwise the full amount is due within 30 days.',
    },
    {
      question: 'Should I ask for payment upfront?',
      answer:
        'For new clients, larger projects, or work with significant costs of your own, yes. A 50% deposit with the balance on delivery is standard and widely accepted. Full payment in advance is reasonable for small jobs and first-time clients.',
    },
    {
      question: 'Do payment terms need to be on the invoice itself?',
      answer:
        'Yes. Even when the terms are in a signed contract, restating them on the invoice removes any excuse for confusion and makes chasing a late payment much simpler.',
    },
  ],
  ctaHeading: 'Put clear terms on your next invoice',
  ctaText: 'Create Invoice Free',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'How to Chase an Unpaid Invoice', description: 'A calm escalation sequence that works.', href: '/how-to-chase-an-unpaid-invoice' },
    { title: 'How to Create an Invoice', description: 'Step-by-step guide to invoicing correctly.', href: '/how-to-create-an-invoice' },
    { title: 'Free Invoice Templates', description: 'Browse 15 printable invoice templates.', href: '/invoice-templates' },
  ],
};

export const chasePaymentGuide: GuideConfig = {
  slug: 'how-to-chase-an-unpaid-invoice',
  cluster: 'Getting paid',
  published: '2026-08-06',
  updated: '2026-08-06',
  summary:
    'A calm, escalating sequence for recovering late payments without damaging the client relationship.',
  seo: {
    title: 'How to Chase an Unpaid Invoice | Polite Escalation Guide',
    description:
      'What to do when a client has not paid. A step-by-step escalation sequence with email templates, when to stop work, and when to escalate formally.',
    canonical: '/how-to-chase-an-unpaid-invoice',
  },
  h1: 'How to Chase an Unpaid Invoice',
  intro:
    'Almost every business eventually sends an invoice that is not paid on time. The instinct is either to say nothing for weeks out of awkwardness, or to fire off something sharp. Neither works. What does work is a predictable, unemotional escalation that starts early and gets firmer on a schedule. This guide sets out that sequence, with wording you can adapt.',
  keyTakeaways: [
    'Chase early. A short note the day after the due date is normal and expected, not rude.',
    'Assume administrative error first. Most late payments are oversights, not refusals.',
    'Escalate on a fixed schedule so you are never deciding in the moment whether to chase.',
    'Get the invoice in front of accounts payable, not only your day-to-day contact.',
    'Stopping work is powerful leverage, but only if you warned that it would happen.',
  ],
  howTo: {
    name: 'How to chase an unpaid invoice',
    description:
      'A five-stage escalation from a friendly reminder through to formal recovery, designed to recover payment while keeping the relationship intact where possible.',
    steps: [
      {
        title: 'Day 1 after due date: a short, friendly nudge',
        description:
          'Assume it was missed. Reattach the invoice, restate the amount and the due date, and ask whether it reached the right person. Keep it to three sentences and do not apologise for asking.',
      },
      {
        title: 'Day 7: confirm it is in the system',
        description:
          'Ask a specific question rather than repeating the request: has the invoice been entered for payment, and is there a payment run date? This surfaces missing purchase order numbers and wrong billing contacts, which cause most delays.',
      },
      {
        title: 'Day 14: escalate to accounts payable',
        description:
          'Contact the finance or accounts payable address directly and copy your usual contact. State the invoice number, amount, original due date and how many days overdue it is. Keep the tone factual.',
      },
      {
        title: 'Day 30: formal notice',
        description:
          'Send a clearly labelled final reminder stating the amount outstanding, referencing the agreed payment terms and any previously agreed late payment interest, and giving a specific deadline. Say what happens next if the deadline passes.',
      },
      {
        title: 'Day 45+: escalate externally',
        description:
          'Depending on the amount, options are a formal letter before action, a debt recovery service, or a small claims process. Weigh the cost and time against the sum owed before starting.',
      },
    ],
  },
  sections: [
    {
      heading: 'Start before it is late',
      body: [
        'The cheapest chase is the one you never have to send. A short message a few days before the due date, framed as a courtesy rather than a demand, catches most administrative problems while there is still time to fix them.',
        'Something as simple as "Just a heads up that invoice INV-042 is due on Friday. Let me know if you need anything from me to get it processed" will surface a missing purchase order number or a wrong billing address before it becomes an overdue account.',
      ],
    },
    {
      heading: 'The first reminder',
      body: [
        'Keep it short, warm and specific. Do not open with an apology, and do not explain why you need the money. The invoice is due, that is reason enough.',
        'Hi {name}, hope you are well. Invoice INV-042 for $1,200 was due on 5 September and I have not seen it come through yet. I have attached it again in case it got lost. Could you let me know if it has been received? Thanks.',
      ],
    },
    {
      heading: 'Why most invoices are actually late',
      body: [
        'Before assuming bad faith, rule out the ordinary explanations. In practice the great majority of late payments come down to something procedural.',
      ],
      list: [
        'The invoice went to your day-to-day contact, who never forwarded it to finance',
        'The client requires a purchase order number and the invoice does not have one',
        'The billing entity or address on the invoice does not match their records',
        'The invoice arrived after their monthly cut-off and rolled into the next cycle',
        'It went to spam, or to an individual who has since left',
        'Bank details were missing, unclear, or in a format their system rejected',
      ],
    },
    {
      heading: 'Escalating without burning the relationship',
      body: [
        'The tonal shift from reminder to formal notice should be gradual and impersonal. Each message gets slightly shorter, slightly more factual, and slightly more explicit about consequences. What you are avoiding is the jump from silence straight to anger, which is what happens when you leave it three weeks and then write while frustrated.',
        'A useful discipline is to decide the schedule in advance and follow it regardless of how you feel on the day. When chasing is a process rather than a decision, it stops being uncomfortable.',
        'Move the conversation to the phone at around the two week mark if you can. A two minute call to accounts payable frequently resolves what four emails have not.',
      ],
    },
    {
      heading: 'Stopping work',
      body: [
        'Pausing delivery is the strongest leverage most small suppliers have, and it is entirely reasonable when an account is significantly overdue. It only works cleanly if you flagged it in advance, both in your original terms and in the escalation messages, rather than springing it as a surprise.',
        'Where the work is ongoing, be specific and neutral: "As invoice INV-042 is now 30 days overdue, I will need to pause work on the current phase until the account is settled." Then actually pause. A threat you do not follow through on removes the leverage entirely.',
      ],
    },
    {
      heading: 'When to escalate formally',
      body: [
        'If a genuinely uncooperative client has ignored a formal notice, the practical options are a letter before action, a commercial debt recovery service, or a small claims process. Which is proportionate depends heavily on the amount and on where both parties are based.',
        'Be realistic about economics. Recovery services typically take a percentage, and court processes cost time even when fees are modest. For small sums, a firm final notice recovers more in practice than a process that costs more than the debt.',
        'Whatever route you take, having the paper trail helps enormously: the accepted quotation, the invoice with its terms, and the dated chase messages.',
      ],
    },
    {
      heading: 'Reducing the odds next time',
      body: [
        'Late payment is partly a systems problem, and the fixes are unglamorous but effective.',
      ],
      list: [
        'Invoice the day the work is finished, not at the end of the month',
        'Ask at the start who processes invoices, and send it to them directly',
        'Ask whether a purchase order number is required before you invoice',
        'Take a deposit on anything substantial',
        'Put payment terms and any late interest in the quotation, before work begins',
        'Shorten your terms — Net 14 rather than Net 30',
        'Make paying easy: full bank details, a clear reference, and a payment link if you have one',
      ],
    },
  ],
  faqs: [
    {
      question: 'How soon should I chase an unpaid invoice?',
      answer:
        'The day after the due date. Chasing promptly is normal business practice and signals that you track your accounts. Waiting weeks makes the conversation harder and suggests the deadline was not real.',
    },
    {
      question: 'How often should I follow up?',
      answer:
        'Roughly weekly, escalating each time. A common rhythm is a friendly nudge at day one, a specific process question at day seven, contact with accounts payable at day fourteen, and a formal notice at day thirty.',
    },
    {
      question: 'Should I stop work if a client has not paid?',
      answer:
        'It is reasonable once an account is significantly overdue, provided you gave notice first, both in your original terms and in your reminders. Announce it plainly, then follow through, or the leverage disappears.',
    },
    {
      question: 'Can I charge interest on the overdue amount?',
      answer:
        'Yes if the client agreed to it before the work started and it appeared on the invoice. Many jurisdictions also give a statutory right to interest on late business-to-business payments, but the rates and conditions vary, so check your local rules.',
    },
    {
      question: 'What should I do if the client simply stops replying?',
      answer:
        'Send a clearly labelled final notice with a specific deadline to a verified address, and copy any other contact you have at the business. If that produces nothing, weigh a debt recovery service or small claims against the amount owed.',
    },
    {
      question: 'How do I avoid this happening again?',
      answer:
        'Take deposits, shorten your terms, invoice immediately on completion, confirm who processes payments before you invoice, and check whether a purchase order number is required.',
    },
  ],
  ctaHeading: 'Send a clear, chase-proof invoice',
  ctaText: 'Create Invoice Free',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'Invoice Payment Terms Explained', description: 'Net 30, Net 14 and which terms get you paid.', href: '/invoice-payment-terms' },
    { title: 'How to Create an Invoice', description: 'What every invoice needs to include.', href: '/how-to-create-an-invoice' },
    { title: 'Freelance Invoicing Guide', description: 'Invoicing as a freelancer, start to finish.', href: '/freelance-invoicing-guide' },
  ],
};
