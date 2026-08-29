import type { GuideConfig } from './types';

/**
 * Calculator pages.
 *
 * These target queries where the searcher wants a number, not an explanation —
 * "how much interest can I charge on a late invoice", "how do I take VAT off a
 * total". A page that makes them read 1,200 words first loses them. The tool
 * sits under the intro and the prose underneath explains the arithmetic, cites
 * the rules, and answers the follow-up questions.
 */

export const vatCalculatorGuide: GuideConfig = {
  slug: 'vat-calculator',
  cluster: 'Calculators',
  calculator: 'vat',
  published: '2026-08-30',
  updated: '2026-08-30',
  summary:
    'Add VAT or GST to a net amount, or work out the tax hidden inside a gross one, at any rate.',
  keyTakeaways: [
    'Adding tax and removing it are different sums. Removing is gross × rate ÷ (100 + rate).',
    'A 20% rate means the tax is one sixth of the gross figure, not one fifth.',
    'Invoice both figures separately: the net, the tax, then the total.',
    'Show each rate separately when one document mixes rates.',
  ],
  seo: {
    title: 'VAT & GST Calculator | Add or Remove Tax From Any Amount',
    description:
      'Free VAT and GST calculator. Add tax to a net amount or extract the tax from a gross total at any rate — 5%, 18%, 20% — with the arithmetic explained.',
    canonical: '/vat-calculator',
  },
  h1: 'VAT and GST Calculator',
  intro:
    'Add tax to a price, or work out how much tax is already inside one. The second sum is the one people get wrong, and it is the one that matters at return time. Enter the amount and the rate below, then read on for why the two directions are not symmetrical.',
  sections: [
    {
      heading: 'Adding tax to a net amount',
      body: [
        'This is the straightforward direction. Multiply the net figure by the rate and add it on. At 20%, a net 1,000 carries 200 of tax and the customer pays 1,200. At 5%, the same net figure carries 50 and the customer pays 1,050.',
        'On an invoice, show all three numbers on separate lines: the net subtotal, the tax as its own line with the rate stated, and the gross total. A single combined figure is not enough for a registered buyer to reclaim the tax, and in most jurisdictions it is not a compliant invoice.',
      ],
    },
    {
      heading: 'Removing tax from a gross amount',
      body: [
        'This is where the mistake happens. To find the tax inside a gross figure you cannot simply take the percentage of it. The rate was applied to the net amount, not to the total, so the tax is a smaller share of the gross than the rate suggests.',
        'The formula is tax = gross × rate ÷ (100 + rate). At 20%, that works out as gross ÷ 6. A gross 1,200 contains 200 of tax and 1,000 of net. Taking 20% of 1,200 gives 240, which is wrong by a fifth and would leave the return short.',
        'At 5% the divisor is 21, at 12% it is 9.33, at 18% it is 6.56. The calculator handles all of them, but the shape of the sum is worth knowing: the higher the rate, the bigger the gap between the two methods.',
      ],
      table: {
        head: ['Rate', 'Tax inside a gross 1,200', 'Wrong answer (rate × gross)'],
        rows: [
          ['5%', '57.14', '60.00'],
          ['12%', '128.57', '144.00'],
          ['18%', '183.05', '216.00'],
          ['20%', '200.00', '240.00'],
        ],
      },
    },
    {
      heading: 'When one invoice carries more than one rate',
      body: [
        'Mixed rates on a single document are normal rather than exceptional. Zero-rated delivery alongside standard-rated goods, or an Indian invoice carrying 5% on one line and 18% on another, both need each rate shown separately with the amount it was charged on.',
        'A single blended figure hides the information the buyer needs to reclaim correctly and the information a tax authority expects to see. Calculate each rate against its own base, then show the bases and the tax amounts as separate lines in the totals block.',
      ],
    },
    {
      heading: 'Rounding',
      body: [
        'Round the tax figure to two decimal places once, at the point you calculate it, rather than rounding the inputs first. Rounding a rate or a base before multiplying introduces an error that compounds across a long invoice.',
        'Where a document mixes rates, round each rate group separately and then add the results, rather than rounding a single combined total. That way each line of the breakdown adds up on its own terms, which is what a reviewer will check.',
      ],
    },
  ],
  answersHeading: 'VAT and GST calculations: common questions',
  answers: [
    {
      question: 'How do I remove VAT from a total?',
      answer:
        'Divide the gross amount by 1 plus the rate as a decimal to get the net, then subtract that from the gross to get the tax. At 20%, divide by 1.2. A shortcut for 20% is that the tax is exactly one sixth of the gross figure.',
    },
    {
      question: 'How do I calculate 20% VAT?',
      answer:
        'To add it, multiply the net by 0.2 and add the result. To find it inside a gross figure, divide the gross by 6. Those give different answers from the same starting number, so be clear which figure you are holding before you start.',
    },
    {
      question: 'Is GST calculated the same way as VAT?',
      answer:
        'The arithmetic is identical. The differences are in the rates, what each rate applies to, and the invoice fields each regime requires. India uses 5, 12, 18 and 28 percent bands and splits the tax into CGST and SGST for supplies within one state.',
    },
    {
      question: 'What is the reverse charge and does it change the sum?',
      answer:
        'Under a reverse charge the buyer accounts for the tax instead of the seller. You invoice the net amount, charge no tax, and state that the reverse charge applies. Your calculation stops at the net figure and the buyer does the rest.',
    },
    {
      question: 'Should I round tax up or down?',
      answer:
        'Round to two decimal places using normal rounding rather than always rounding up, and round once at the end of the calculation. Consistency matters more than direction; what causes problems is rounding at several stages so the lines stop reconciling.',
    },
  ],
  faqs: [
    {
      question: 'Does this calculator store what I type?',
      answer:
        'No. It runs entirely in your browser and nothing is sent anywhere. Nothing you enter is stored, logged or transmitted.',
    },
    {
      question: 'Can I use it for sales tax in the US?',
      answer:
        'The arithmetic works for any percentage tax added to a price. US sales tax differs in that it is normally added at the point of sale rather than shown as reclaimable tax on a business invoice, so treat the output accordingly.',
    },
    {
      question: 'Which rate should I be charging?',
      answer:
        'That depends on your registration status, what you are selling and where your customer is. The rate is a question for your tax authority or accountant; this tool does the arithmetic once you know it.',
    },
  ],
  ctaHeading: 'Put the numbers on an invoice',
  ctaText: 'Create an Invoice Free',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'GST Invoice Format for India', description: 'What a compliant GST invoice must carry.', href: '/gst-invoice-format-india' },
    { title: 'UAE VAT Invoice Format', description: 'The 5% regime and its required fields.', href: '/vat-invoice-format-uae' },
    { title: 'EU Cross-Border VAT Invoices', description: 'Reverse charge and intra-EU supplies.', href: '/eu-vat-invoice-cross-border' },
  ],
};

export const lateFeeCalculatorGuide: GuideConfig = {
  slug: 'late-payment-interest-calculator',
  cluster: 'Calculators',
  calculator: 'late-fee',
  published: '2026-08-30',
  updated: '2026-08-30',
  summary:
    'Work out the interest an overdue invoice has accrued, and what you can defensibly add to it.',
  keyTakeaways: [
    'Interest accrues per day elapsed, not per month started.',
    'You can only charge what your contract or invoice said you would charge.',
    'State the rate on every invoice from the first one, not the overdue one.',
    'Interest is usually worth less than the relationship — decide before you send it.',
  ],
  seo: {
    title: 'Late Payment Interest Calculator | Overdue Invoices',
    description:
      'Calculate interest on an overdue invoice from the due date, at your own rate, plus any fixed late fee. Explains what you can charge and how to word it.',
    canonical: '/late-payment-interest-calculator',
  },
  h1: 'Late Payment Interest Calculator',
  intro:
    'An invoice that is 40 days late at 8% a year has not accrued two months of interest — it has accrued 40 days of it. Enter the amount, the due date and your rate to see what is actually owed, then read on for what you can charge and how to raise it without torching the relationship.',
  sections: [
    {
      heading: 'How the interest is calculated',
      body: [
        'Interest runs from the day after payment fell due to the day it is paid. The daily amount is the outstanding balance times the annual rate divided by 365, and the total is that daily figure multiplied by the number of days elapsed.',
        'So 2,500 at 8% a year is 0.548 a day. Forty days late, that is 21.92. It is a small number, and being clear-eyed about how small it is matters: interest is rarely the point. The point is that a stated consequence makes the due date real.',
      ],
    },
    {
      heading: 'What you are allowed to charge',
      body: [
        'You can charge what the client agreed to. That means the rate must appear in the contract or on the invoice before the invoice goes overdue — not in the chaser you send afterwards. A rate that appears for the first time on day 45 is a rate the client never accepted.',
        'Several jurisdictions also give a statutory right to interest on late commercial payments even where the contract is silent, sometimes alongside a fixed recovery charge. Whether that applies to you depends on where you and your client are and what you agreed, so check the rule for your jurisdiction rather than assuming the figure here is the maximum.',
      ],
    },
    {
      heading: 'Putting it on the invoice properly',
      body: [
        'One sentence in your payment terms is enough: "Payment is due within 30 days. Overdue balances accrue interest at 8% a year, charged daily." That is unambiguous, and it is on every invoice from the first one, so nothing is a surprise.',
        'When you do raise it, invoice the interest as its own line on a separate document rather than silently increasing the original invoice. Altering a sent invoice breaks your numbering and gives the client a reason to dispute the whole thing rather than the part they disagree with.',
      ],
    },
    {
      heading: 'Whether to charge it at all',
      body: [
        'Having the right to charge interest and exercising it are separate decisions, and the second one is commercial rather than legal. On a first late payment from a client you want to keep, the stronger move is usually to waive it explicitly — saying you are waiving it is what makes the term credible next time.',
        'On a repeat offender, or a client already heading for collections, charge it. At that point the relationship is not what you are protecting and the interest is part of what you are owed.',
      ],
    },
  ],
  answersHeading: 'Late payment interest: common questions',
  answers: [
    {
      question: 'How much interest can I charge on an overdue invoice?',
      answer:
        'Whatever your contract or invoice terms state, provided the client saw those terms before the invoice went overdue. Many jurisdictions also grant a statutory rate on late commercial payments when nothing was agreed, sometimes with a fixed recovery fee alongside it.',
    },
    {
      question: 'When does interest start accruing?',
      answer:
        'From the day after the payment due date, not from the invoice date. If your terms are Net 30 and you issued on the first, interest starts on day 31 and accrues daily until the balance is paid in full.',
    },
    {
      question: 'Can I add a late fee if I did not mention one?',
      answer:
        'Generally not by contract, because the client never agreed to it. A statutory right may still exist depending on your jurisdiction. Adding an unannounced fee usually invites a dispute over the whole invoice rather than producing faster payment.',
    },
    {
      question: 'Is a percentage per month legal?',
      answer:
        'Often yes, but some jurisdictions cap the rate and treat anything above it as an unenforceable penalty. A monthly percentage also sounds far larger annually than people intend — 2% a month is 24% a year. State the annual figure too.',
    },
    {
      question: 'Should I charge interest or just chase harder?',
      answer:
        'Chase first. Most late payments are administrative rather than deliberate, and a clear reminder to the right person resolves them. Keep interest for clients who are unresponsive or repeatedly late, where the term needs to mean something.',
    },
  ],
  faqs: [
    {
      question: 'Does the calculator use 360 or 365 days?',
      answer:
        'It divides the annual rate by 365. Some finance contracts use a 360-day year, which produces a slightly higher daily figure — if yours does, the difference is about 1.4%.',
    },
    {
      question: 'Does it handle compound interest?',
      answer:
        'No. It calculates simple interest on the outstanding balance, which is what commercial late payment terms almost always specify.',
    },
    {
      question: 'How is interest calculated after a partial payment?',
      answer:
        'In two segments. Interest accrues on the full balance up to the date of the part payment, then on the remaining balance from that date onwards. Run the calculator twice and add the results.',
    },
  ],
  ctaHeading: 'Send the reminder with a proper invoice attached',
  ctaText: 'Create an Invoice Free',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'How to Chase an Unpaid Invoice', description: 'The escalation sequence that gets paid.', href: '/how-to-chase-an-unpaid-invoice' },
    { title: 'Invoice Payment Terms', description: 'Terms that shorten the wait.', href: '/invoice-payment-terms' },
    { title: 'Disputed Invoices', description: 'What to do when they say the bill is wrong.', href: '/disputed-invoice' },
  ],
};

export const hourlyRateCalculatorGuide: GuideConfig = {
  slug: 'freelance-hourly-rate-calculator',
  cluster: 'Calculators',
  calculator: 'hourly-rate',
  published: '2026-08-30',
  updated: '2026-08-30',
  summary:
    'Work backwards from the income you want to the rate that produces it, after tax, costs and unbillable time.',
  keyTakeaways: [
    'Dividing a target salary by 2,080 hours understates the rate badly.',
    'Roughly half of a full-time week is unbillable once selling and admin are counted.',
    'Gross up for tax first, then add business costs, then divide by billable hours.',
    'The output is a floor, not a price. What the work is worth is a separate question.',
  ],
  seo: {
    title: 'Freelance Hourly Rate Calculator | What You Need to Charge',
    description:
      'Calculate the hourly rate that actually delivers your target take-home income, after tax, business costs, holidays and unbillable hours.',
    canonical: '/freelance-hourly-rate-calculator',
  },
  h1: 'Freelance Hourly Rate Calculator',
  intro:
    'The rate people first pick is the one they get from dividing a salary by the hours in a working year. It is almost always too low, because it quietly assumes no tax, no costs and no unbillable time. This works backwards from what you want to take home to what you actually have to charge.',
  sections: [
    {
      heading: 'Why dividing a salary by 2,080 fails',
      body: [
        'A salaried job pays for 2,080 hours a year including the hours spent in meetings, on holiday and off sick. Freelance work pays only for hours a client agrees to be billed for, and those are a fraction of the hours you work.',
        'A realistic figure for sustained freelance work is 20 to 30 billable hours a week. The rest goes on finding work, quoting, invoicing, chasing payment, admin, and the unpaid learning that keeps you sellable. Someone billing 25 hours across 46 working weeks has 1,150 billable hours a year — barely more than half of 2,080.',
      ],
    },
    {
      heading: 'The order the sum has to happen in',
      body: [
        'Start with the take-home figure you want, because that is the only number you actually care about. Gross it up for tax: if your effective rate is 28%, divide by 0.72 rather than adding 28%, which would leave you short.',
        'Then add the annual cost of running the business — software, hardware, insurance, accountancy, workspace, devices, subscriptions. These come out of revenue before anything reaches you. Finally divide the result by your billable hours to get the rate.',
      ],
      list: [
        'Take-home target ÷ (1 − tax rate) = gross profit needed',
        'Gross profit + annual business costs = revenue you must bill',
        'Revenue ÷ (billable hours per week × working weeks) = hourly rate',
      ],
    },
    {
      heading: 'What the number is and is not',
      body: [
        'The output is a floor. It tells you the rate below which the arrangement does not deliver the income you set out to earn, which is genuinely useful — most underpricing is not a negotiation failure but an arithmetic one.',
        'It is not a price. What a client will pay depends on the value of the outcome, what alternatives cost them, and how visible your work is to whoever signs off. Plenty of freelancers can charge well above their floor, and the ones who do generally moved to project pricing rather than raising an hourly figure.',
      ],
    },
    {
      heading: 'Sanity-checking the result',
      body: [
        'Multiply the rate by eight for a day rate and see whether it reads as plausible for your market. If it looks high, the usual cause is an optimistic billable-hours figure rather than an inflated target — try the sum again at 20 hours a week.',
        'Test it against a bad year as well as a good one. A rate that only works at 30 billable hours a week is a rate that fails the moment a client pauses a project, and that happens to everyone.',
      ],
    },
  ],
  answersHeading: 'Setting a freelance rate: common questions',
  answers: [
    {
      question: 'How do I calculate my freelance hourly rate?',
      answer:
        'Divide your target take-home by one minus your tax rate, add your annual business costs, then divide by your realistic billable hours for the year. Billable hours, not hours worked — that distinction is what makes the difference.',
    },
    {
      question: 'How many billable hours should I assume?',
      answer:
        'Between 20 and 30 a week for most freelancers working full time. Selling, quoting, invoicing, admin and learning consume the rest. Assuming 40 produces a rate that looks fine on paper and leaves you short every year.',
    },
    {
      question: 'Should I charge hourly or by project?',
      answer:
        'Hourly is easier to justify and caps your upside, because working faster earns you less. Project pricing rewards speed and expertise but needs a scope you can defend. Most freelancers start hourly and move to project pricing as their estimates improve.',
    },
    {
      question: 'How do I raise my rate with existing clients?',
      answer:
        'Give notice, apply it from a clear date, and do not justify it at length. One or two sentences stating the new rate and when it starts is enough. Raising it for new clients first gives you evidence the market accepts it.',
    },
    {
      question: 'Should my day rate be eight times my hourly rate?',
      answer:
        'That is the usual starting point, though many freelancers discount a booked day slightly because it removes the scheduling gaps that make short engagements inefficient. If you discount, be deliberate about it rather than defaulting to it.',
    },
  ],
  faqs: [
    {
      question: 'What tax rate should I enter?',
      answer:
        'Your effective rate — total tax and mandatory contributions divided by profit — not your top marginal band. Your accountant or last return is the reliable source.',
    },
    {
      question: 'Should I include a pension or retirement contribution?',
      answer:
        'Yes, either inside your take-home target or as a business cost. Leaving it out is the most common omission and the most expensive one.',
    },
    {
      question: 'Does this work for agencies?',
      answer:
        'For a solo operator, yes. Once you employ people, salaries and their utilisation become the dominant variables and you need a fuller model.',
    },
  ],
  ctaHeading: 'Bill at your new rate',
  ctaText: 'Create an Invoice Free',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'Freelance Invoicing Guide', description: 'From your first invoice to international clients.', href: '/freelance-invoicing-guide' },
    { title: 'How to Write a Quotation', description: 'Quote work without underpricing it.', href: '/how-to-write-a-quotation' },
    { title: 'Retainer and Recurring Invoices', description: 'Turn a good client into predictable income.', href: '/retainer-recurring-invoice' },
  ],
};

export const dueDateCalculatorGuide: GuideConfig = {
  slug: 'payment-due-date-calculator',
  cluster: 'Calculators',
  calculator: 'due-date',
  published: '2026-08-30',
  updated: '2026-08-30',
  summary:
    'Turn Net 30, Net 60 or end-of-month terms into the actual date payment falls due.',
  keyTakeaways: [
    'Net terms run from the invoice date unless the contract says otherwise.',
    'End-of-month terms can nearly double the credit period on an invoice issued early.',
    'Always print the due date as a date, never as "Net 30".',
    'Issuing late moves the due date by exactly as long as you waited.',
  ],
  seo: {
    title: 'Payment Due Date Calculator | Net 30, Net 60 and EOM Terms',
    description:
      'Work out exactly when an invoice falls due under Net 7, Net 30, Net 60 or end-of-month terms, and how many days of credit that really gives.',
    canonical: '/payment-due-date-calculator',
  },
  h1: 'Payment Due Date Calculator',
  intro:
    'Net 30 sounds precise until you try to write the date on the invoice. End-of-month terms are worse: an invoice issued on the 2nd under EOM plus 30 days is not due in a month, it is due in nearly two. Pick the invoice date and the terms to see the real date, and how long a credit period you have actually granted.',
  sections: [
    {
      heading: 'What Net terms count from',
      body: [
        'Net terms run from the invoice date by default. Net 30 on an invoice dated the 3rd of March means payment falls due on the 2nd of April. Some contracts instead run terms from delivery, from acceptance, or from receipt of a valid invoice, and each of those pushes the date later.',
        'That last variation matters more than it looks. "30 days from receipt of a valid invoice" lets a client restart the clock by disputing a detail on day 29, which is exactly why large buyers write it that way. If your contract says it, get your invoices right first time.',
      ],
    },
    {
      heading: 'End-of-month terms',
      body: [
        'EOM terms treat the end of the invoice month as the starting point. An invoice issued on the 2nd under end-of-month plus 30 days gets 29 days to the month end, then 30 more — 59 days of credit. The same terms on an invoice issued on the 30th give 31.',
        'Buyers like EOM because it lets them run a single payment cycle. It is not unreasonable, but it means the date you invoice within the month materially changes when you get paid. If you are on EOM terms, invoice early in the month only when the work genuinely completed then.',
      ],
      table: {
        head: ['Terms', 'Invoice dated 2 March', 'Invoice dated 28 March'],
        rows: [
          ['Net 30', '1 April', '27 April'],
          ['Net 60', '1 May', '27 May'],
          ['End of month', '31 March', '31 March'],
          ['EOM + 30 days', '30 April', '30 April'],
        ],
      },
    },
    {
      heading: 'Print the date, not the terms',
      body: [
        'An invoice that says "Net 30" makes the person paying it do arithmetic before they can schedule it. An invoice that says "Due 2 April 2026" can be entered into a payment run without thinking. Print both if you like, but the date is what gets you paid.',
        'It also removes an entire category of dispute. Nobody argues about what a printed date meant, whereas "Net 30" invites a conversation about whether it ran from the invoice, the delivery or the day the invoice reached accounts payable.',
      ],
    },
    {
      heading: 'Weekends and public holidays',
      body: [
        'Most terms do not adjust for weekends, so a due date can land on a Sunday. In practice payment runs happen on working days and the money arrives the next one, which is not worth chasing over.',
        'If precision matters — a milestone that unlocks other work, say — write into the contract that a due date falling on a non-working day moves to the next working day. Otherwise expect a day or two of slippage on either side and do not treat it as a late payment.',
      ],
    },
  ],
  answersHeading: 'Payment terms and due dates: common questions',
  answers: [
    {
      question: 'What date is 30 days from my invoice date?',
      answer:
        'Count 30 calendar days forward from the invoice date, including weekends. An invoice dated 3 March falls due on 2 April. Print that date on the invoice rather than the words, so nobody has to work it out.',
    },
    {
      question: 'Does Net 30 mean 30 working days?',
      answer:
        'No. Net terms are counted in calendar days, so weekends and public holidays are included. Thirty working days would be about six weeks, which is a materially different arrangement and needs to be written that way.',
    },
    {
      question: 'What does end of month mean on an invoice?',
      answer:
        'The credit period starts at the end of the month the invoice was issued in, not the invoice date. On EOM plus 30 days, an invoice issued early in a month can carry close to 60 days of credit rather than 30.',
    },
    {
      question: 'When is an invoice actually overdue?',
      answer:
        'The day after the due date. If payment was due on 2 April, the invoice is overdue on 3 April and any interest you are entitled to starts accruing then, not from the invoice date.',
    },
    {
      question: 'Should I use Net 30 or shorter terms?',
      answer:
        'Shorter terms generally get you paid sooner, and Net 14 is normal for freelance and small business work. Net 30 is the convention for larger buyers whose payment runs assume it, and pushing against it rarely succeeds.',
    },
  ],
  faqs: [
    {
      question: 'Can I change the terms after sending the invoice?',
      answer:
        'Not unilaterally. Terms form part of what was agreed. You can agree a change with the client, but reissue the invoice so both records match.',
    },
    {
      question: 'What if I invoice late?',
      answer:
        'The due date moves out with it, because terms run from the invoice date. Invoicing two weeks after completion delays your payment by two weeks even though the work finished on time.',
    },
    {
      question: 'Does the calculator account for time zones?',
      answer:
        'Dates are treated as plain calendar dates with no time component, which is how payment terms work in practice.',
    },
  ],
  ctaHeading: 'Put a real due date on your next invoice',
  ctaText: 'Create an Invoice Free',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'Invoice Payment Terms', description: 'Choosing terms that get you paid faster.', href: '/invoice-payment-terms' },
    { title: 'How to Chase an Unpaid Invoice', description: 'What to do once the date passes.', href: '/how-to-chase-an-unpaid-invoice' },
    { title: 'How to Create an Invoice', description: 'Everything the document needs to carry.', href: '/how-to-create-an-invoice' },
  ],
};
