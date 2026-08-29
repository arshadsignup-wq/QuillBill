import type { GuideConfig } from './types';

/**
 * The money-goes-wrong cluster.
 *
 * /invoice-payment-terms owns terms, /how-to-chase-an-unpaid-invoice owns
 * chasing. These own the four situations neither covers: taking money before
 * you start, splitting it across a job, giving some of it back, and being told
 * you are not owed it.
 */

export const depositInvoiceGuide: GuideConfig = {
  slug: 'deposit-invoice',
  cluster: 'Getting paid',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'Taking money before you start: how much to ask for, making a deposit non-refundable in a way that holds, and the difference between a deposit and a prepayment.',
  keyTakeaways: [
    'A deposit protects against the client disappearing; an advance funds work you must pay for.',
    'Non-refundable only holds if it reflects genuine loss, and if the client agreed before paying.',
    'Deposit invoices are still invoices — number them in sequence and account for the tax.',
    'Deduct the deposit visibly on the final invoice, or you will be asked for it twice.',
  ],
  seo: {
    title: 'Deposit Invoice: How Much to Ask For and When',
    description:
      'How to invoice for a deposit or advance payment: how much to ask, making it non-refundable properly, tax treatment, and deducting it from the final invoice.',
    canonical: '/deposit-invoice',
  },
  h1: 'Deposit and Advance Payment Invoices',
  intro:
    'Asking for money before you have done anything feels presumptuous the first few times, which is why so many small businesses skip it and then spend the next year absorbing the consequences. A deposit is not a sign of distrust. It is the ordinary mechanism by which two parties who do not yet know each other share the risk of a transaction that has not happened yet — and in most industries, not asking marks you as inexperienced rather than accommodating.',
  sections: [
    {
      heading: 'Deposit, advance, retainer or prepayment?',
      body: [
        'These four words get used interchangeably and mean different things, which matters when someone asks for their money back.',
        'A deposit secures a commitment. It is usually a proportion of the total, and its function is to make the client\'s cancellation costly enough that they turn up. Wedding photography and event work run on this.',
        'An advance payment funds work you must pay for before you can deliver — materials, subcontractors, licenses. Its function is cashflow, not commitment, and it is usually sized to the actual cost being covered rather than as a percentage of the job.',
        'A retainer buys availability over a period, and is properly covered in [retainer and recurring invoices](/retainer-recurring-invoice).',
        'A prepayment is simply the whole fee, paid up front. Common for small jobs, new clients and anything where chasing afterwards would cost more than the job is worth.',
      ],
      table: {
        head: ['', 'What it does', 'Typical size', 'Refundable?'],
        rows: [
          ['Deposit', 'Secures the booking', '20–50%', 'Usually not, inside a window'],
          ['Advance payment', 'Funds your costs', 'Cost of the inputs', 'Partly, less costs incurred'],
          ['Retainer', 'Buys availability', 'Monthly fee', 'Usually not, once the period starts'],
          ['Prepayment', 'Pays the whole fee', '100%', 'Depends on work done'],
        ],
      },
    },
    {
      heading: 'How much to ask for',
      body: [
        'The honest answer is: enough to cover what you lose if the client vanishes, and no more than the market you work in expects.',
        'Between 25% and 50% is the standard range across most service industries. Weddings and event work sit at the top of it and sometimes beyond, because a booked date genuinely cannot be resold. Design and consulting typically sit at 50% for smaller projects and lower for longer ones staged across milestones.',
        'For work with heavy material costs, size the advance to the materials rather than to a percentage. Asking for 30% of a job where materials are 60% of the cost still leaves you funding the client\'s purchase.',
        'For a first engagement with an unknown client, weight it higher than you would for someone you have worked with for three years. Deposits are a risk instrument, and risk is genuinely different in those two cases.',
      ],
    },
    {
      heading: 'Making a deposit non-refundable in a way that holds',
      body: [
        'Writing "non-refundable" on an invoice does not by itself make a deposit non-refundable. In many jurisdictions consumer protection rules will not enforce a term that amounts to a penalty rather than a genuine estimate of loss.',
        'What tends to hold is a deposit that is proportionate to what you actually lose, and that the client agreed to before paying. What tends not to hold is a large deposit retained in full for a cancellation months in advance that cost you nothing.',
        'The practical approach is a sliding scale, stated up front. Cancellation more than 90 days out refunds most of the deposit; inside 30 days retains all of it. That structure is defensible because it tracks real loss, and clients find it fair, which means it is argued with far less often.',
        'State the terms on the deposit invoice itself, not only in a contract. The invoice is the document the client keeps and the one they will look at when they want their money back.',
      ],
    },
    {
      heading: 'Tax, numbering and the final invoice',
      body: [
        'A deposit invoice is a real invoice. Give it a number from your normal sequence, not a separate one, so your numbering stays unbroken.',
        'Tax generally becomes due at the point the deposit is received, in most VAT and GST systems. That means the deposit invoice usually needs to show tax, and you account for it in that period rather than waiting for the final invoice. Getting this wrong understates your liability for a quarter and creates a correction later.',
        'On the final invoice, show the full value of the work, then deduct the deposit as a visible line, then show the balance due. Do not simply invoice the remainder with no reference to the deposit — the client\'s bookkeeper cannot reconcile that against their records, and you will be asked to explain it or, worse, asked to justify why the totals do not match the quotation.',
        'Where a deposit is retained on cancellation, that is generally a taxable supply too rather than a windfall. Check the treatment locally, because it differs between jurisdictions and between deposits and genuine compensation payments.',
      ],
    },
  ],
  answersHeading: 'Deposit invoice questions, answered',
  answers: [
    {
      question: 'What is a deposit invoice?',
      answer:
        'An invoice requesting part of the agreed price before work begins, securing the client\'s commitment and reducing your risk. It carries a number from your normal sequence, usually shows tax, and is later deducted from the final invoice as a visible line.',
    },
    {
      question: 'How much deposit should I ask for?',
      answer:
        'Between 25% and 50% covers most service work. Go higher for events where a booked date cannot be resold, and for first engagements with unknown clients. Where materials are the main cost, size the advance to the materials rather than to a percentage.',
    },
    {
      question: 'Is it normal to ask for a deposit?',
      answer:
        'Yes, in almost every service industry, and not asking often reads as inexperience rather than flexibility. Clients who commission work regularly expect a deposit and are usually more surprised by its absence than by its presence.',
    },
    {
      question: 'Can I make a deposit non-refundable?',
      answer:
        'You can, but it only holds where the amount reflects a genuine estimate of your loss and the client agreed before paying. A large sum retained for a cancellation that cost you nothing is likely to be treated as an unenforceable penalty.',
    },
    {
      question: 'What is the difference between a deposit and an advance payment?',
      answer:
        'A deposit secures commitment and is usually a proportion of the total. An advance funds costs you must incur before delivering — materials, subcontractors, licenses — and is sized to those costs. One manages risk, the other manages cashflow.',
    },
    {
      question: 'Do I charge VAT or GST on a deposit?',
      answer:
        'In most systems tax becomes due when the deposit is received, so the deposit invoice shows tax and you account for it in that period. Waiting until the final invoice understates your liability for the earlier period and creates a correction.',
    },
    {
      question: 'How do I show a deposit on the final invoice?',
      answer:
        'Show the full value of the work, then the deposit already paid as a clearly labeled deduction, then the balance due. Invoicing only the remainder with no reference leaves the client\'s bookkeeper unable to reconcile it against their records.',
    },
    {
      question: 'What is a proforma invoice for a deposit?',
      answer:
        'A request for advance payment issued before the supply takes place. It is not a tax invoice, carries no tax liability and gives no input tax recovery. Issue the real tax invoice once payment is received or the supply occurs. See our proforma invoice guide.',
    },
    {
      question: 'Should I take a deposit from a repeat client?',
      answer:
        'Often you can reduce or drop it, since the risk a deposit manages is largely unknown-client risk. Keep it where the job carries real upfront cost to you, or where the client has a history of slow payment, regardless of how long you have worked together.',
    },
    {
      question: 'What if a client refuses to pay a deposit?',
      answer:
        'Treat it as information. A client unwilling to commit anything before you start is telling you something about either their cashflow or their commitment. Consider a smaller deposit or a paid first milestone, but be wary of dropping it entirely for a new client.',
    },
    {
      question: 'Do I need to refund a deposit if I cancel?',
      answer:
        'Yes, in full, and promptly. Deposit terms protect against client cancellation. If you are the one who cannot proceed, retaining money for work you will not do is indefensible and will cost you far more in reputation than the sum involved.',
    },
    {
      question: 'When should I ask for 100% upfront?',
      answer:
        'For small jobs where chasing would cost more than the fee, for new clients with no track record, and for work delivered instantly such as digital products. Full prepayment is normal at the small end and unusual on larger engagements.',
    },
  ],
  faqs: [
    {
      question: 'Is a deposit legally binding?',
      answer:
        'Paying a deposit generally evidences acceptance of the agreement it was paid under, so it tends to strengthen rather than create a contract. What is enforceable about retaining it depends on whether the term is a genuine estimate of loss.',
    },
    {
      question: 'Can I ask for a deposit after work has started?',
      answer:
        'You can ask, but it lands badly and clients often refuse, because a deposit is understood to precede work. If you are mid-project and exposed, the better route is invoicing a milestone now rather than retrospectively requesting a deposit.',
    },
    {
      question: 'What is a security deposit versus a booking deposit?',
      answer:
        'A security deposit is held against damage or default and returned if nothing goes wrong — common in rentals and equipment hire. A booking deposit is part payment of the price and is not returned on completion, because it is absorbed into the total.',
    },
  ],
  ctaHeading: 'Create a deposit invoice',
  ctaText: 'Create an Invoice Free',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'Milestone and Partial Payments', description: 'Splitting payment across a project.', href: '/milestone-partial-payment-invoice' },
    { title: 'Proforma Invoice', description: 'Requesting payment before supply.', href: '/proforma-invoice' },
    { title: 'Invoice Payment Terms', description: 'Terms that get you paid on time.', href: '/invoice-payment-terms' },
  ],
};

export const milestoneInvoiceGuide: GuideConfig = {
  slug: 'milestone-partial-payment-invoice',
  cluster: 'Getting paid',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'Splitting payment across a long project: choosing milestones that cannot be argued with, payment plans for struggling clients, and handling part payments correctly.',
  keyTakeaways: [
    'Tie milestones to observable events, never to dates. Dates drift and become arguments.',
    'Front-load the schedule slightly — you carry the risk earliest in a project.',
    'A partial payment does not settle the invoice unless you agree it does, in writing.',
    'A payment plan is better than a bad debt, but put it in writing with a default clause.',
  ],
  seo: {
    title: 'Milestone Invoices and Partial Payment Plans',
    description:
      'How to split invoicing across a project: choosing verifiable milestones, front-loading the schedule, handling part payments, and setting up payment plans.',
    canonical: '/milestone-partial-payment-invoice',
  },
  h1: 'Milestone Invoicing and Partial Payments',
  intro:
    'Anything longer than a few weeks should not be invoiced in one lump at the end. Doing so means you fund the entire project from your own working capital, and it concentrates all of your credit risk into a single moment months away. Milestone invoicing spreads both. The difficulty is not the concept — it is choosing milestones that cannot be argued about, which is where most schedules quietly fail.',
  sections: [
    {
      heading: 'Choose milestones that are observable, not scheduled',
      body: [
        'The most common mistake is tying payments to dates: 30% on 1 September, 30% on 1 October. It looks tidy and it produces arguments, because projects slip and the moment they do, the payment schedule is disconnected from reality. The client refuses to pay for a stage not reached; you point at the contract; nobody is clearly right.',
        'Tie payments to observable states instead. Not "1 October" but "on approval of the design concept". Not "month two" but "on completion of first fix". Either the thing has happened or it has not, and both parties can see which.',
        'Where a milestone requires client approval, add a deemed-approval clause with a specific window: approval is deemed given if no feedback is received within five working days. Without it, a client who simply does not respond can stall your payment indefinitely without ever refusing anything.',
        'Keep the number of milestones proportionate. Three to five suits most projects. A dozen creates more invoicing admin than the cashflow benefit justifies.',
      ],
      table: {
        head: ['Weak milestone', 'Strong milestone', 'Why'],
        rows: [
          ['1 October', 'On concept approval', 'Survives project slippage'],
          ['50% complete', 'On delivery of the beta build', 'Percentage complete is arguable'],
          ['Month two', 'On first fix completion', 'Observable by both parties'],
          ['When client is happy', 'On sign-off, or 5 days after delivery', 'Satisfaction is not a testable state'],
          ['On launch', 'On handover of final files', 'Launch may depend on third parties'],
        ],
      },
    },
    {
      heading: 'Front-load the schedule',
      body: [
        'A schedule of 25/25/25/25 looks fair and is not, because your risk is not evenly distributed. You are most exposed early: you have committed time, turned down other work, and possibly bought materials, all before the client has demonstrated they will pay at all.',
        'Something closer to 40/30/30, or 50/25/25 on shorter projects, matches the risk better. The first payment establishes the client is real and covers your setup exposure.',
        'Resist a schedule that back-loads heavily — 10/20/70 — however much a client pushes for it. That structure leaves you funding almost the whole project and concentrates your risk at the exact point where a client who wants to avoid paying has already received most of the value.',
        'Never let the final payment be so large that walking away is attractive to the client. If the last stage is 60% of the fee, a client in difficulty may simply take what they have and disappear.',
      ],
    },
    {
      heading: 'When a client pays part of an invoice',
      body: [
        'A partial payment against an invoice is not the same as a settled invoice, and how you handle it matters more than the amounts involved.',
        'First, work out why. A part payment is usually one of three things: a genuine dispute about a portion of the work, a cashflow problem, or a deduction such as withholding tax. Each needs a different response, and treating a tax deduction as a dispute damages the relationship for nothing.',
        'Second, be careful about accepting a part payment described as being "in full and final settlement". In some jurisdictions, banking a payment on those stated terms can be treated as accepting them. If you do not agree it settles the debt, say so in writing before or immediately on receipt, and keep the record.',
        'Third, allocate it explicitly. Tell the client which invoice and which lines the payment has been applied to, and issue a statement showing the remaining balance. Ambiguous allocation across several invoices is how balances become genuinely uncertain months later.',
      ],
    },
    {
      heading: 'Payment plans for clients in difficulty',
      body: [
        'A client who cannot pay in full but will pay over time is a better outcome than a bad debt, and refusing to engage often converts the first into the second.',
        'Put the arrangement in writing: the total owed, the instalment amounts, the dates, and what happens on default. A default clause matters — typically, missing an instalment makes the whole remaining balance immediately due. Without it, you have quietly converted a due debt into a long-dated one with no consequence for missing payments.',
        'Keep the original invoice standing rather than cancelling and reissuing. The debt is the debt; the plan is how it is being paid. Reissuing muddies the audit trail and can reset limitation periods in ways that do not favour you.',
        'Stop further work while a plan is running unless it is genuinely necessary to enable payment. Continuing to deliver into an unpaid balance is how a manageable problem doubles. There is more on the wider situation in [how to chase an unpaid invoice](/how-to-chase-an-unpaid-invoice).',
      ],
    },
  ],
  answersHeading: 'Milestone and part payment questions, answered',
  answers: [
    {
      question: 'What is milestone invoicing?',
      answer:
        'Splitting a project fee into several invoices, each issued when a defined stage is reached. It reduces how much work you fund from your own capital and spreads your credit risk instead of concentrating it in one payment at the end.',
    },
    {
      question: 'How do I choose payment milestones?',
      answer:
        'Pick observable events rather than dates — concept approval, first fix complete, beta delivered. Either the thing happened or it did not, which both parties can see. Dates disconnect from reality the moment a project slips, and then they generate arguments.',
    },
    {
      question: 'How many milestones should a project have?',
      answer:
        'Three to five for most projects. Fewer leaves you carrying too much unpaid work between payments; more creates invoicing admin that outweighs the cashflow benefit. Scale with project length rather than value.',
    },
    {
      question: 'What percentage should each milestone be?',
      answer:
        'Front-load slightly, because your risk is highest early. Something like 40/30/30, or 50/25/25 on shorter work, matches exposure better than an even split. Avoid a large final payment that makes walking away attractive to a client in difficulty.',
    },
    {
      question: 'What is a deemed approval clause?',
      answer:
        'A term stating that a deliverable is treated as approved if the client does not respond within a set window, commonly five working days. Without it, a client who simply goes quiet can stall your milestone payment indefinitely without ever refusing anything.',
    },
    {
      question: 'What do I do if a client pays only part of an invoice?',
      answer:
        'Establish why first — a dispute, a cashflow problem, or a deduction such as withholding tax each need different handling. Then allocate the payment explicitly, tell the client what it was applied to, and issue a statement showing the remaining balance.',
    },
    {
      question: 'Can I refuse a partial payment?',
      answer:
        'You generally do not have to refuse it — banking it and continuing to pursue the balance is usually the practical route. The exception is a payment expressly offered in full and final settlement, where accepting may be treated as agreeing to those terms.',
    },
    {
      question: 'What does "full and final settlement" mean?',
      answer:
        'An offer to close the whole debt for less than the amount owed. In some jurisdictions banking a payment stated to be on those terms can amount to accepting them, so if you do not agree, say so in writing before or immediately on receipt.',
    },
    {
      question: 'Should I offer a payment plan?',
      answer:
        'Usually yes, where the client is engaging and the alternative is a bad debt. Put it in writing with instalment amounts, dates and a default clause making the whole balance due on a missed payment. Keep the original invoice standing rather than reissuing.',
    },
    {
      question: 'Should I keep working during a payment plan?',
      answer:
        'Generally no, unless the work is what enables the client to pay you. Continuing to deliver into an unpaid balance is how a manageable exposure doubles, and it removes any incentive for the plan to be honoured.',
    },
    {
      question: 'How do I invoice a stage that the client has not approved?',
      answer:
        'If you have a deemed approval clause and the window has passed, invoice it and reference the clause. If not, ask specifically what is outstanding and set a response deadline. Silence is not rejection, but it also is not something you should absorb indefinitely.',
    },
    {
      question: 'What is a progress invoice?',
      answer:
        'Another term for a milestone invoice, common in construction, where it usually reflects the value of work completed to date less amounts previously certified and any retention held. The principle is identical: bill as you progress rather than at the end.',
    },
  ],
  faqs: [
    {
      question: 'Should milestone invoices reference the original quotation?',
      answer:
        'Yes. Quote the quotation or contract number and state which milestone this invoice covers and what remains. It lets the client reconcile the sequence of invoices against the total they agreed, which is the most common cause of milestone invoices being queried.',
    },
    {
      question: 'What is retention in a milestone schedule?',
      answer:
        'A percentage held back from each payment, common in construction, released after a defects period. Show it as an explicit deduction on each invoice and diarise the release dates, because retention nobody chases is frequently never paid.',
    },
    {
      question: 'Can I change the milestone schedule mid-project?',
      answer:
        'Only by agreement, in writing. Scope changes often justify it, and a client asking to defer a payment is worth discussing rather than refusing outright. What you should not do is unilaterally reschedule, which undermines the agreed basis of the whole arrangement.',
    },
  ],
  ctaHeading: 'Create a milestone invoice',
  ctaText: 'Create an Invoice Free',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'Deposit and Advance Payment', description: 'Taking money before you start.', href: '/deposit-invoice' },
    { title: 'How to Chase an Unpaid Invoice', description: 'When the milestone goes unpaid.', href: '/how-to-chase-an-unpaid-invoice' },
    { title: 'Contractor and Trades Invoice', description: 'Staged payments and retention.', href: '/contractor-trades-invoice' },
  ],
};

export const creditNoteGuide: GuideConfig = {
  slug: 'credit-note-and-refunds',
  cluster: 'Getting paid',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'Correcting an invoice properly: why you never edit a sent invoice, how credit and debit notes work, handling overpayments, and the tax consequences of a refund.',
  keyTakeaways: [
    'Never edit or delete a sent invoice. Issue a credit note against it.',
    'A credit note needs its own number, and must reference the invoice it corrects.',
    'A refund and a credit note are different things — one moves money, one adjusts a balance.',
    'Correcting an invoice usually adjusts your tax position for the period it is issued in.',
  ],
  seo: {
    title: 'Credit Note vs Refund: How to Correct an Invoice',
    description:
      'How to correct an invoice: credit notes vs debit notes vs refunds, why you never edit a sent invoice, and the tax treatment of adjustments.',
    canonical: '/credit-note-and-refunds',
  },
  h1: 'Credit Notes and Refunds: Correcting an Invoice',
  intro:
    'Everyone sends a wrong invoice eventually — the wrong quantity, the wrong rate, work that was returned, a client who paid twice. The instinct is to fix the original and resend it, and that instinct is wrong in every accounting system in the world. A sent invoice is a record of something that happened. You do not revise history; you record the correction alongside it. This guide covers how, and what it does to your tax.',
  sections: [
    {
      heading: 'Why you never edit a sent invoice',
      body: [
        'Once an invoice leaves your hands it exists in two sets of books, not one. Your client has recorded it as a payable, possibly claimed input tax on it, and possibly already scheduled it for payment. Editing your copy creates a mismatch that neither of you can reconcile.',
        'It also breaks your numbering integrity. Sequence gaps and altered documents are exactly what tax authorities look for when testing whether invoices have been suppressed, and "I just corrected it" is a difficult explanation to make convincingly two years later.',
        'The correct mechanism is an adjustment document that references the original: a credit note to reduce the amount, or a debit note to increase it. The original stands, the correction is recorded, and both sets of books can be reconciled.',
        'The one exception is an invoice you have not sent. If it is still a draft on your machine, edit it freely — nothing is a record until it has been issued.',
      ],
    },
    {
      heading: 'Credit note, debit note, refund',
      body: [
        'Three different instruments, frequently confused, doing three different jobs.',
        'A credit note reduces the amount a client owes. Use it when you overcharged, when goods were returned, when a discount was agreed after invoicing, or to cancel an invoice entirely. It does not move money — it adjusts the balance.',
        'A debit note increases the amount owed, or is used by a buyer to notify a supplier of an intended reduction. Where you undercharged, some businesses issue a debit note and others simply issue a supplementary invoice; both are acceptable provided you are consistent.',
        'A refund moves money back to the client. It is what happens after a credit note when the client has already paid and there is no future work to set the credit against.',
        'The sequence for an overpaid, overcharged invoice is: credit note reducing the balance, then a refund of the resulting negative balance. Skipping the credit note and just sending money back leaves your books showing income you did not keep.',
      ],
      table: {
        head: ['Situation', 'Instrument', 'Money moves?'],
        rows: [
          ['Overcharged, not yet paid', 'Credit note', 'No'],
          ['Overcharged, already paid', 'Credit note, then refund', 'Yes'],
          ['Undercharged', 'Debit note or new invoice', 'No, increases balance'],
          ['Goods returned', 'Credit note', 'Only if already paid'],
          ['Invoice issued in error', 'Credit note cancelling it in full', 'No'],
          ['Client paid twice', 'Refund, or credit against next invoice', 'Usually yes'],
          ['Discount agreed late', 'Credit note', 'No'],
        ],
      },
    },
    {
      heading: 'What a credit note must contain',
      body: [
        'A credit note is a formal document in most tax systems, with required particulars much like an invoice.',
      ],
      list: [
        'The words "Credit Note" clearly displayed',
        'Its own unique number, from its own sequence or your invoice sequence',
        'The date of issue',
        'Your details and the client\'s, exactly as on the original invoice',
        'The number and date of the invoice being corrected',
        'The reason for the credit',
        'The lines being credited, with quantities and values',
        'The tax being reversed, at the same rate as the original',
        'The total amount credited',
      ],
    },
    {
      heading: 'The tax consequences',
      body: [
        'A credit note changes your tax position, and the timing matters.',
        'In most VAT and GST systems, an adjustment is accounted for in the period the credit note is issued, not the period the original invoice was raised. You do not go back and amend a filed return; you reflect the adjustment in the current one.',
        'The tax reversed must be at the rate originally charged, even if rates have since changed. A 2024 invoice credited in 2026 reverses at the 2024 rate.',
        'Your client makes the mirror adjustment, reducing the input tax they claimed. This is why issuing the credit note promptly matters — a client who claimed input tax on an invoice you later canceled is carrying an error until you give them the document that lets them fix it.',
        'For overpayments specifically, money a client has paid that you are not entitled to keep is not income. Holding it indefinitely is neither good practice nor, in many jurisdictions, lawful — unclaimed balances eventually fall under specific rules about what must be done with them.',
      ],
    },
  ],
  answersHeading: 'Credit note and refund questions, answered',
  answers: [
    {
      question: 'What is a credit note?',
      answer:
        'A document that reduces the amount a client owes against a previously issued invoice. It references the original invoice, states the reason and reverses the relevant tax. It adjusts a balance rather than moving money.',
    },
    {
      question: 'Can I just delete or edit an invoice I sent by mistake?',
      answer:
        'No. It exists in your client\'s books as well as yours, and possibly in a tax return already filed. Issue a credit note cancelling it in full, referencing the original number. Editing sent invoices also breaks the numbering integrity auditors check.',
    },
    {
      question: 'What is the difference between a credit note and a refund?',
      answer:
        'A credit note adjusts what is owed; a refund moves money back. If the client has not paid, a credit note alone is enough. If they have paid and there is no future work to offset, you issue the credit note and then refund the balance.',
    },
    {
      question: 'What is a debit note?',
      answer:
        'A document increasing the amount owed, used where you undercharged, or issued by a buyer to notify a supplier of a claimed reduction. Some businesses simply raise a supplementary invoice for undercharges instead; either works if applied consistently.',
    },
    {
      question: 'Does a credit note need its own number?',
      answer:
        'Yes. It is a formal document requiring a unique reference, either from its own sequence or continuing your invoice sequence. It must also carry the number and date of the invoice it corrects, so the two can be matched.',
    },
    {
      question: 'How do I cancel an invoice completely?',
      answer:
        'Issue a credit note for the full value, referencing the original invoice number and stating the reason. The invoice and the credit note both stand in your records and net to zero. Never reuse the canceled invoice number for a different sale.',
    },
    {
      question: 'What do I do if a client overpays?',
      answer:
        'Tell them immediately — do not wait to be asked. Then either refund the excess or, with their agreement, hold it as a credit against the next invoice. Money you are not entitled to keep is not income, and holding it silently is a genuine problem.',
    },
    {
      question: 'Can I offset a credit note against a future invoice?',
      answer:
        'Yes, with the client\'s agreement, and it is often simpler than a refund for an ongoing relationship. Show the credit as an explicit deduction on the next invoice referencing the credit note number, so both sides can reconcile the sequence.',
    },
    {
      question: 'When should a credit note be issued?',
      answer:
        'As soon as you know the invoice is wrong. Delay causes real problems for the client, who may have claimed input tax on an invoice that should not stand and cannot correct it until you give them the document.',
    },
    {
      question: 'How does a credit note affect my VAT return?',
      answer:
        'It reduces your output tax in the period the credit note is issued, not the period of the original invoice. You do not amend a filed return. The reversal uses the rate originally charged, even if rates have changed since.',
    },
    {
      question: 'Do I need to give a reason on a credit note?',
      answer:
        'Yes, and it should be specific — "goods returned", "invoiced in error", "agreed discount". Vague reasons attract questions during review, and a clear reason also helps your client\'s bookkeeper apply the adjustment correctly at their end.',
    },
    {
      question: 'What if a client refuses to accept a credit note?',
      answer:
        'A credit note in their favour is rarely refused, but it happens where the client believes the credit should be larger. Issue what you accept is due, keep the correspondence, and treat the remaining disagreement as a dispute in its own right.',
    },
  ],
  faqs: [
    {
      question: 'Is a credit note the same as a refund receipt?',
      answer:
        'No. A credit note adjusts the invoiced balance; a refund receipt evidences money actually returned. Where a paid invoice is credited and refunded, you may end up with both, and both belong in your records.',
    },
    {
      question: 'Can I issue a credit note years after the invoice?',
      answer:
        'Generally yes, though the practicalities get harder — your client may have closed the relevant period, and tax rules may limit how far back adjustments can be reflected. Correct errors as soon as they are found rather than letting them age.',
    },
    {
      question: 'Do I need a credit note for a discount given at the time of invoicing?',
      answer:
        'No. A discount agreed before the invoice is issued goes on the invoice as a discount line. A credit note is only needed for a reduction agreed after the invoice has already been issued.',
    },
  ],
  ctaHeading: 'Create your corrected document',
  ctaText: 'Open the Invoice Generator',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'Disputed Invoices', description: 'When the client says the invoice is wrong.', href: '/disputed-invoice' },
    { title: 'Invoice Numbering Systems', description: 'Keeping the sequence intact.', href: '/invoice-numbering-system' },
    { title: 'Invoice Record Keeping', description: 'What to retain, and for how long.', href: '/invoice-record-keeping' },
  ],
};

export const disputedInvoiceGuide: GuideConfig = {
  slug: 'disputed-invoice',
  cluster: 'Getting paid',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'What to do when a client disputes an invoice: separating real disputes from stalling, the response that resolves most of them, and when to escalate.',
  keyTakeaways: [
    'Get the dispute in writing and specific. "I\'m not happy with it" is not a dispute you can answer.',
    'Most disputes are about expectations, not quality — and were created at quoting stage.',
    'A client disputing 10% of an invoice should still pay the other 90%. Ask for it.',
    'Distinguish a dispute from a stall: a stall has no specifics and no deadline.',
  ],
  seo: {
    title: 'Disputed Invoice: What to Do When a Client Pushes Back',
    description:
      'How to handle a disputed invoice: getting the complaint in writing, separating genuine disputes from stalling tactics, partial payment, and when to escalate.',
    canonical: '/disputed-invoice',
  },
  h1: 'What to Do When a Client Disputes Your Invoice',
  intro:
    'A disputed invoice feels like an attack on your work, and that reaction is the main reason disputes go badly. Most of them are not about quality. They are about a gap between what the client thought they were buying and what they received — a gap that was created weeks earlier at quoting stage, and that is usually resolvable in a single well-handled exchange. The ones that are not resolvable need a different approach, and the first task is telling them apart.',
  sections: [
    {
      heading: 'First, make the dispute specific',
      body: [
        'You cannot answer "I\'m not happy with this invoice". Before anything else, get the complaint into a form that can be addressed: which line, what is wrong with it, and what outcome the client is looking for.',
        'Ask in writing, politely and specifically. "So I can sort this out properly, could you tell me which items on the invoice you\'re querying and what you expected them to be?" That question does three useful things at once. It moves the conversation from feeling to fact, it creates a written record, and it very often surfaces that the actual objection concerns one line rather than the whole bill.',
        'It also separates disputes from stalls. A client with a genuine grievance will answer specifically and quickly, because they want it resolved. A client who is simply not paying will stay vague, change subject, or go quiet — which tells you what you are dealing with and lets you stop treating it as a quality conversation.',
      ],
    },
    {
      heading: 'The four things disputes actually turn out to be',
      body: [
        'In practice nearly every invoice dispute is one of these, and each has a different correct response.',
        'A scope misunderstanding. The client believed something was included. This is the most common by a wide margin, and it is usually a quoting failure rather than a delivery failure. If the quotation genuinely was ambiguous, the fair resolution is usually to split the difference and then fix your quotation template, which is covered in [how to write a quotation](/how-to-write-a-quotation).',
        'A genuine defect. The work is not what was agreed. Inspect it, acknowledge what is wrong without over-apologizing, fix it, and hold the invoice until it is fixed. Do not offer a discount instead of a fix unless the client asks for one — it reads as buying your way out.',
        'A cashflow problem wearing a dispute as a costume. The client cannot pay and is generating an objection to buy time. The tell is that the objection is vague, arrives at the due date rather than on receipt, and grows when answered. Address it directly and offer a payment plan.',
        'An administrative deduction. Withholding tax, a contra charge, or a retention. Not a dispute at all, and treating it as one damages the relationship over nothing. Check the arithmetic before responding.',
      ],
      table: {
        head: ['Type', 'Tell', 'Response'],
        rows: [
          ['Scope misunderstanding', 'Points at a specific item', 'Show the quote; consider splitting'],
          ['Genuine defect', 'Specific and verifiable', 'Inspect, fix, then invoice'],
          ['Disguised cashflow', 'Vague, arrives at due date', 'Offer a written payment plan'],
          ['Administrative deduction', 'Exact percentage shortfall', 'Check WHT or retention first'],
        ],
      },
    },
    {
      heading: 'Ask for the undisputed part',
      body: [
        'This is the single most useful move available and it is routinely forgotten.',
        'If a client disputes one line worth 10% of the invoice, there is no reason for the other 90% to go unpaid. Say so plainly: "Let\'s park the design revision line while we sort it out — could you release the remaining £4,200 in the meantime?"',
        'Most clients agree immediately, because it is obviously reasonable and lets them feel they are acting in good faith. You collect the bulk of the money, your exposure drops sharply, and the remaining argument is over a small sum rather than the whole relationship.',
        'A client who refuses to pay the undisputed portion has told you something important. That is no longer a dispute about a line item — it is a refusal to pay, and it should change how you handle everything that follows. See [how to chase an unpaid invoice](/how-to-chase-an-unpaid-invoice).',
      ],
    },
    {
      heading: 'Resolving, recording and escalating',
      body: [
        'When you reach a resolution, document it in a way that closes the matter. If you agreed a reduction, issue a credit note rather than editing the invoice, as covered in [credit notes and refunds](/credit-note-and-refunds). If you agreed to fix something, confirm what and by when in writing.',
        'Escalate only when the exchange has stopped moving. The usual sequence is a firm written summary of the position with a payment deadline, then a formal letter before action, then either a small claims process or a debt recovery service. In many jurisdictions you can also add statutory interest and recovery costs to a late commercial debt.',
        'Weigh the economics honestly before escalating. Recovery takes time, sometimes money, and almost always the relationship. For a small sum with a client you value, a commercial settlement is often better than a technical win.',
        'Then do the post-mortem, because that is where the value is. Almost every dispute traces back to something ambiguous in the quotation or something never confirmed in writing. Fixing that template prevents the next five.',
      ],
    },
  ],
  answersHeading: 'Invoice dispute questions, answered',
  answers: [
    {
      question: 'What do I do if a client disputes my invoice?',
      answer:
        'Ask in writing which specific lines they are querying and what they expected. That converts a vague complaint into something answerable, creates a record, and usually reveals the objection concerns one item rather than the whole invoice.',
    },
    {
      question: 'Can a client refuse to pay an invoice?',
      answer:
        'They can withhold payment for genuinely defective or unagreed work, but not for an entire invoice over a partial complaint. Ask them to pay the undisputed portion while the disputed line is resolved — most clients agree, because it is obviously reasonable.',
    },
    {
      question: 'How do I tell a real dispute from a stalling tactic?',
      answer:
        'Specificity and timing. A genuine dispute names the item and arrives soon after the invoice. A stall is vague, surfaces at the due date rather than on receipt, and produces new objections each time you answer the previous one.',
    },
    {
      question: 'Should I still charge if the client is unhappy with the work?',
      answer:
        'Yes, but resolve the complaint first where it is genuine. Inspect what they are unhappy with, fix what is actually wrong, then invoice. Withdrawing an invoice to avoid confrontation trains the client that objecting is a discount mechanism.',
    },
    {
      question: 'What if the dispute is about something not in the quotation?',
      answer:
        'If the quotation was genuinely ambiguous, the fair outcome is usually to share the cost and then fix the template. If the item was clearly excluded, show them the exclusion. Either way the lesson is the same: exclusions belong on every quotation.',
    },
    {
      question: 'Can I charge late fees on a disputed invoice?',
      answer:
        'On the undisputed portion, generally yes. On a genuinely disputed amount it is usually counterproductive and can weaken your position if the matter escalates, since it looks like pressure applied to an unresolved question rather than a late payment.',
    },
    {
      question: 'Should I stop work when an invoice is disputed?',
      answer:
        'Pause further delivery while the dispute is open, and say so plainly rather than slowing down silently. Continuing to work into an unresolved dispute increases what is at stake and removes any urgency for the client to settle it.',
    },
    {
      question: 'How long should I give a client to respond to a dispute?',
      answer:
        'Set a specific short deadline — five working days is reasonable — for them to identify the issue. Open-ended disputes drift, and drift favours whoever is holding the money, which is not you.',
    },
    {
      question: 'What is a letter before action?',
      answer:
        'A formal written notice that you intend to begin legal proceedings unless payment is made by a stated date. It sets out the debt, the history and the deadline. In many jurisdictions sending one is expected before court, and it often prompts payment on its own.',
    },
    {
      question: 'Is it worth taking a client to small claims court?',
      answer:
        'Weigh the sum against the time, the fee and the certainty of losing the relationship. Small claims processes are designed to be usable without a lawyer, but even a successful judgment does not guarantee collection if the client has no money.',
    },
    {
      question: 'Can I add interest to a late invoice?',
      answer:
        'Where your terms provide for it, or under statutory late payment rules that exist in many jurisdictions for commercial debts and often allow a fixed recovery cost as well. State the entitlement on every invoice from the start rather than raising it once one is late.',
    },
    {
      question: 'How do I avoid invoice disputes?',
      answer:
        'Almost all of them are created at quoting stage. Itemize the scope, state exclusions and assumptions explicitly, price variations in writing before doing the work, and confirm approvals by message. Disputes are a symptom of an ambiguous quotation far more often than of poor work.',
    },
  ],
  faqs: [
    {
      question: 'Should I put a dispute deadline on my invoices?',
      answer:
        'Many businesses state that queries must be raised within a set period, commonly 7 to 14 days of receipt. It is a reasonable term and it discourages objections that surface only when payment falls due, though it does not extinguish a genuine complaint about defective work.',
    },
    {
      question: 'What records should I keep in case of a dispute?',
      answer:
        'The quotation with its exclusions, written approvals for every variation, delivery or completion evidence, timestamped photographs where relevant, and the full correspondence. Contemporaneous records are believed; reconstructions made after a dispute begins are argued with.',
    },
    {
      question: 'Can I refuse to hand over work until a disputed invoice is paid?',
      answer:
        'It depends on your terms and jurisdiction. Where intellectual property transfers on payment, unpaid work is not the client\'s to use, which is a strong position. Withholding something the client already possesses or depends on operationally is riskier — take advice before acting.',
    },
  ],
  ctaHeading: 'Invoice clearly to avoid disputes',
  ctaText: 'Create an Invoice Free',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'How to Chase an Unpaid Invoice', description: 'When it is not a dispute, just unpaid.', href: '/how-to-chase-an-unpaid-invoice' },
    { title: 'Credit Notes and Refunds', description: 'Recording an agreed reduction.', href: '/credit-note-and-refunds' },
    { title: 'How to Write a Quotation', description: 'Where most disputes are actually created.', href: '/how-to-write-a-quotation' },
  ],
};
