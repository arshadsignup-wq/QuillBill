import type { GuideConfig } from './types';

/**
 * The three document types added alongside invoices, quotations and proposals.
 *
 * Each targets a search the site previously had no page for, and each is now
 * backed by a real editor mode rather than an article telling you to improvise
 * with an invoice.
 */

export const receiptTemplateGuide: GuideConfig = {
  slug: 'receipt-template',
  cluster: 'Invoicing',
  published: '2026-08-30',
  updated: '2026-08-30',
  summary:
    'What a receipt has to show, how it differs from an invoice, and when a client is entitled to one.',
  keyTakeaways: [
    'A receipt proves payment was made. An invoice requests it.',
    'Show the amount actually received, the date received and the method.',
    'A receipt for a part payment must show the balance still outstanding.',
    'Never reuse the invoice number — a receipt needs its own reference.',
  ],
  seo: {
    title: 'Free Receipt Template | What a Receipt Must Show',
    description:
      'Create a receipt free, with no sign-up. What a receipt must include, how it differs from an invoice, and how to handle part payments and refunds.',
    canonical: '/receipt-template',
  },
  h1: 'Receipt Template: What a Receipt Must Show',
  intro:
    'A receipt is the last document in the chain. The quotation offered a price, the invoice asked for the money, and the receipt confirms it arrived. It is a short document, but the wrong details on it cause real confusion — most often because someone reissued an invoice with the word "paid" stamped on it and called that a receipt.',
  sections: [
    {
      heading: 'What belongs on a receipt',
      body: [
        'A receipt records a completed transaction, so it is written in the past tense and deals in what actually happened rather than what is owed.',
      ],
      list: [
        'The word "Receipt", so it is not mistaken for a payment request',
        'Its own reference number, separate from your invoice sequence',
        'Your business name and contact details',
        'The customer name',
        'The date payment was received, which is not necessarily the invoice date',
        'What the payment was for, and the invoice number it settles',
        'The amount actually received, and the currency',
        'The payment method — bank transfer, card, cash',
        'Any balance still outstanding, where this was a part payment',
      ],
    },
    {
      heading: 'Receipt, invoice, and why the difference matters',
      body: [
        'An invoice creates a debt and asks for payment by a date. A receipt discharges that debt and proves it. Sending one when you mean the other is not a formatting error — it changes what the document says about whether money is owed.',
        'The most common mistake is treating a paid invoice as a receipt. It nearly works, but it does not show when payment arrived or how it was made, which is exactly what a receipt exists to record. If the customer needs it for expenses or an audit, that missing detail is the whole point.',
      ],
      table: {
        head: ['', 'Invoice', 'Receipt'],
        rows: [
          ['Sent', 'Before payment', 'After payment'],
          ['Says', 'This is owed', 'This was paid'],
          ['Key date', 'When payment is due', 'When payment arrived'],
          ['Amount', 'The amount payable', 'The amount received'],
          ['Numbering', 'Its own sequence', 'Its own separate sequence'],
        ],
      },
    },
    {
      heading: 'Part payments and deposits',
      body: [
        'A receipt for a deposit or a milestone should state the amount received and the balance still outstanding on the same document. A receipt that shows only the amount paid, against an invoice for a larger sum, is the sort of ambiguity that surfaces months later when someone reconciles the account.',
        'Where a project runs through several payments, keep the invoice number on every receipt. That is what lets both sides tie four receipts back to one invoice without guesswork.',
      ],
    },
    {
      heading: 'When a customer is entitled to one',
      body: [
        'Rules vary by jurisdiction, and in several a customer can require proof of payment on request. Even where no rule compels it, issuing one is worth doing: it closes the transaction in your records as well as theirs, and it is the document a client will ask for when their accountant queries an expense.',
        'For tax purposes, what matters more than the receipt is that your own records show the payment. A receipt is evidence for the customer; your bank record and your books are the evidence for you.',
      ],
    },
  ],
  answersHeading: 'Receipts: common questions',
  answers: [
    {
      question: 'What must a receipt include?',
      answer:
        'The word "Receipt", its own reference number, your business details, the customer name, the date payment was received, what it was for and the invoice it settles, the amount received, the payment method, and any balance still outstanding.',
    },
    {
      question: 'Can I use a paid invoice as a receipt?',
      answer:
        'It is not a good substitute. An invoice marked paid does not show when the money arrived or how it was paid, and those are precisely the facts a receipt exists to record for the customer\'s expense claim or audit.',
    },
    {
      question: 'Should a receipt have its own number?',
      answer:
        'Yes. Give receipts their own sequence and reference the invoice number they settle. Reusing the invoice number creates two different documents sharing one identifier, which makes reconciliation ambiguous for both sides.',
    },
    {
      question: 'How do I write a receipt for a part payment?',
      answer:
        'Show the amount actually received, the invoice it applies to, and the balance still outstanding, all on the same document. Without the outstanding balance, a receipt for a deposit reads as though the whole invoice was settled.',
    },
  ],
  faqs: [
    {
      question: 'Is a receipt the same as a proof of payment?',
      answer: 'In practice yes, though a bank statement or transfer confirmation also serves as proof.',
    },
    {
      question: 'Do I need to issue a receipt if I sent an invoice?',
      answer:
        'Not always, but it is good practice and some jurisdictions require it on request. It also closes the transaction cleanly in your own records.',
    },
  ],
  ctaHeading: 'Create a receipt now',
  ctaText: 'Create a Receipt Free',
  ctaLink: '/?mode=receipt',
  crossLinks: [
    { title: 'How to Create an Invoice', description: 'The document that comes before this one.', href: '/how-to-create-an-invoice' },
    { title: 'Deposit Invoices', description: 'Taking money up front, properly documented.', href: '/deposit-invoice' },
    { title: 'Credit Notes and Refunds', description: 'Reversing a payment you already took.', href: '/credit-note-and-refunds' },
  ],
};

export const purchaseOrderTemplateGuide: GuideConfig = {
  slug: 'purchase-order-template',
  cluster: 'Invoicing',
  published: '2026-08-30',
  updated: '2026-08-30',
  summary:
    'Writing a purchase order that a supplier can act on and an invoice can be matched against.',
  keyTakeaways: [
    'The buyer issues a purchase order. The seller issues the invoice.',
    'A PO number is what lets the eventual invoice be approved automatically.',
    'Once accepted, a purchase order is a commitment to buy.',
    'Say when and where delivery is expected, not just what is being bought.',
  ],
  seo: {
    title: 'Free Purchase Order Template | What a PO Must Include',
    description:
      'Create a purchase order free, with no sign-up. What a PO must include, how PO numbers make invoices payable, and how three-way matching works.',
    canonical: '/purchase-order-template',
  },
  h1: 'Purchase Order Template: What a PO Must Include',
  intro:
    'A purchase order runs in the opposite direction to everything else on this site. You are the buyer, you are committing to a purchase, and the document you issue is what the supplier will quote on their invoice so that it can be paid without anyone having to work out what it was for.',
  sections: [
    {
      heading: 'What a purchase order must carry',
      body: [
        'A purchase order is an instruction, so it has to be specific enough that a supplier can fulfil it without calling you, and structured enough that the invoice which comes back can be matched to it.',
      ],
      list: [
        'A unique PO number, which the supplier must quote on their invoice',
        'The issue date and the date delivery is required',
        'Your organization\'s details, and the delivery address if it differs',
        'The supplier\'s details',
        'Each item with a clear description, quantity, unit and agreed unit price',
        'The total value being committed',
        'The payment terms that will apply once the invoice arrives',
        'Who authorized the order',
      ],
    },
    {
      heading: 'Why the PO number matters so much',
      body: [
        'In any organization with an accounts payable function, the PO number is what turns an invoice into something that can be paid automatically. The invoice is matched to the purchase order and, usually, to a goods received note — three-way matching. If all three agree, payment proceeds without a human deciding anything.',
        'This is why suppliers get invoices rejected for the apparently trivial sin of leaving off a PO number. The invoice has not failed a judgement; it has failed a lookup. If you issue POs, say clearly that invoices must quote the number, and if you receive them, ask at onboarding whether one is required.',
      ],
    },
    {
      heading: 'Purchase order, quotation, invoice',
      body: [
        'The sequence for a typical purchase is: the supplier quotes a price, the buyer issues a purchase order accepting it, the goods or services are delivered, and the supplier invoices against the PO.',
        'The direction of travel is the thing to keep straight. A quotation and an invoice both come from the seller. A purchase order comes from the buyer. Once the supplier accepts it, it is a commitment to buy on the stated terms.',
      ],
      table: {
        head: ['Document', 'Issued by', 'Says'],
        rows: [
          ['Quotation', 'Seller', 'This is what it would cost'],
          ['Purchase order', 'Buyer', 'I am committing to buy this'],
          ['Invoice', 'Seller', 'This is now owed'],
          ['Receipt', 'Seller', 'This was paid'],
        ],
      },
    },
    {
      heading: 'Changing a purchase order',
      body: [
        'Do not edit a PO the supplier has already accepted. Issue an amended one with a new revision or number and tell them which version supersedes which, so the invoice can still be matched against something.',
        'If quantities change on delivery, that is usually handled at the matching stage rather than by reissuing the order. Agree the tolerance in advance — how much variance is acceptable without a new PO — because discovering you disagree at invoice time delays payment for everyone.',
      ],
    },
  ],
  answersHeading: 'Purchase orders: common questions',
  answers: [
    {
      question: 'What must a purchase order include?',
      answer:
        'A unique PO number, the issue and required delivery dates, both parties\' details, the delivery address, each item with description, quantity and agreed unit price, the total committed, the payment terms, and who authorized it.',
    },
    {
      question: 'What should a PO number look like?',
      answer:
        'Short, unique and sequential — PO-1042 rather than a date or a project name. The supplier has to quote it on their invoice and your accounts payable system has to match on it, so anything ambiguous costs both sides time.',
    },
    {
      question: 'Why do invoices get rejected without a PO number?',
      answer:
        'Because accounts payable matches the invoice to the purchase order, and often to a goods received note, before paying. Without the number there is nothing to match against, so the invoice fails a lookup rather than a judgement.',
    },
    {
      question: 'What is a purchase requisition?',
      answer:
        'An internal request to buy something, raised by whoever needs it and approved inside your own organization. It comes before the purchase order and never reaches the supplier; the PO is what actually goes out.',
    },
    {
      question: 'What is three-way matching?',
      answer:
        'Comparing the purchase order, the goods received note and the supplier invoice before payment. If all three agree on what was ordered, what arrived and what is being charged, the invoice can be paid without manual approval.',
    },
  ],
  faqs: [
    {
      question: 'Do small businesses need purchase orders?',
      answer:
        'Not usually for routine buying, but they are worth using for anything expensive or bespoke, where a written commitment protects both sides.',
    },
    {
      question: 'Can a purchase order be cancelled before delivery?',
      answer:
        'Before acceptance, generally yes. After acceptance it depends on what you agreed and how far the supplier has committed, so raise it immediately rather than at delivery.',
    },
  ],
  ctaHeading: 'Create a purchase order now',
  ctaText: 'Create a Purchase Order Free',
  ctaLink: '/?mode=purchase-order',
  crossLinks: [
    { title: 'Purchase Order vs Invoice', description: 'The difference, in more depth.', href: '/purchase-order-vs-invoice' },
    { title: 'How to Write a Quotation', description: 'The document a PO usually responds to.', href: '/how-to-write-a-quotation' },
    { title: 'Invoice Example', description: 'What the supplier sends back.', href: '/invoice-example' },
  ],
};

export const timesheetTemplateGuide: GuideConfig = {
  slug: 'timesheet-template',
  cluster: 'Getting paid',
  published: '2026-08-30',
  updated: '2026-08-30',
  summary:
    'Recording billable hours so the invoice they turn into is approved without a conversation.',
  keyTakeaways: [
    'Record the date, the task and the hours on every line.',
    'Log time as you go — reconstructed timesheets are both inaccurate and unconvincing.',
    'Describe the outcome, not the activity. "Meeting" tells an approver nothing.',
    'Round consistently and say what your rounding rule is.',
  ],
  seo: {
    title: 'Free Timesheet Template | Billable Hours That Get Approved',
    description:
      'Create a timesheet free, with no sign-up. What to record against each entry, how to describe work so it is approved, and how to turn hours into an invoice.',
    canonical: '/timesheet-template',
  },
  h1: 'Timesheet Template for Billable Hours',
  intro:
    'A timesheet is the evidence behind an hourly invoice. When it is good, the invoice gets approved without discussion. When it is vague, every line becomes a question, and the questions arrive after you have already done the work and want to be paid for it.',
  sections: [
    {
      heading: 'What each line needs',
      body: [
        'Three things make a timesheet line useful to the person approving it: when the work happened, what it produced, and how long it took. Drop any one of them and the line invites a query.',
      ],
      list: [
        'The date the work was done',
        'A description written as an outcome, not an activity',
        'The hours, at whatever precision you bill in',
        'The rate, where different work is billed at different rates',
        'A project or task reference, where the client uses them',
      ],
    },
    {
      heading: 'Describing the work',
      body: [
        '"Meeting" is not a description. "Client meeting" is barely better. "Kickoff call — agreed scope and milestone dates" tells an approver what they got for the money, and it takes the same three seconds to write if you write it on the day.',
        'The person signing off is frequently not the person you worked with. Your day-to-day contact remembers the call; the finance manager approving the invoice does not, and cannot approve what they cannot recognize. Write for the second reader.',
      ],
    },
    {
      heading: 'Rounding and precision',
      body: [
        'Most freelancers bill in six, ten or fifteen minute increments. Any of those is fine. What matters is that you use one consistently and that the client knows which, because a timesheet that mixes precise entries with suspiciously round ones reads as estimated after the fact.',
        'If you round up to a minimum charge for short pieces of work — a fifteen minute minimum for a five minute call — say so in your terms rather than letting the client discover it from a timesheet.',
      ],
    },
    {
      heading: 'Turning a timesheet into an invoice',
      body: [
        'For a short period, the timesheet lines can become the invoice lines directly: each date and task is a line, the hours are the quantity, and your rate is the rate. That gives the client the full detail on the document they are paying.',
        'For a long period, summarize on the invoice and attach the timesheet. Forty lines of individual entries on an invoice is harder to approve than four grouped lines with the detail available underneath. Group by project or by week, keep the total identical, and send both.',
      ],
    },
    {
      heading: 'Log it as you go',
      body: [
        'Time reconstructed at the end of the month is wrong in both directions, and the client can usually tell. Entries appear in suspiciously neat blocks, work that took twenty minutes gets rounded to an hour, and small pieces of work vanish entirely because you cannot remember them.',
        'The habit is worth more than the tool. Anything that captures the date, the task and the duration at the moment you stop working will beat a perfect system you fill in three weeks later.',
      ],
    },
  ],
  answersHeading: 'Timesheets: common questions',
  answers: [
    {
      question: 'What should a timesheet include?',
      answer:
        'The date of each entry, a description written as an outcome rather than an activity, the hours worked, the rate where it varies, and a project reference if the client uses them. Plus the period covered and the total hours.',
    },
    {
      question: 'How detailed should timesheet descriptions be?',
      answer:
        'Detailed enough for someone who was not there to recognize what they are paying for. "Kickoff call — agreed scope and milestone dates" is approved; "meeting" generates a question, usually a week after you sent the invoice.',
    },
    {
      question: 'What time increment should I bill in?',
      answer:
        'Six, ten or fifteen minutes are all normal. Pick one, use it consistently, and state any minimum charge in your terms. Mixing precise entries with round ones is what makes a timesheet look reconstructed.',
    },
    {
      question: 'Should I attach a timesheet to my invoice?',
      answer:
        'For a long period, yes — summarize on the invoice and attach the detail. For a short one, put the entries on the invoice itself. Either way the totals must match exactly, or you have created the dispute you were trying to avoid.',
    },
  ],
  faqs: [
    {
      question: 'Do I need a timesheet if I charge a fixed price?',
      answer:
        'Not for billing, but tracking hours tells you whether your fixed prices are actually profitable, which is worth knowing before you quote the next one.',
    },
    {
      question: 'How long should I keep timesheets for?',
      answer:
        'Keep them as long as the invoices they support, since they are the evidence behind the amounts you charged.',
    },
  ],
  ctaHeading: 'Create a timesheet now',
  ctaText: 'Create a Timesheet Free',
  ctaLink: '/?mode=timesheet',
  crossLinks: [
    { title: 'Freelance Hourly Rate Calculator', description: 'What those hours should be worth.', href: '/freelance-hourly-rate-calculator' },
    { title: 'Freelance Invoicing Guide', description: 'Turning hours into a paid invoice.', href: '/freelance-invoicing-guide' },
    { title: 'Retainer and Recurring Invoices', description: 'When the hours repeat every month.', href: '/retainer-recurring-invoice' },
  ],
};
