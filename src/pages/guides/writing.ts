import type { GuideConfig } from './types';

export const writeQuotationGuide: GuideConfig = {
  slug: 'how-to-write-a-quotation',
  cluster: 'Quotations',
  published: '2026-08-06',
  updated: '2026-08-06',
  summary:
    'How to write a price quotation that wins the work and cannot be argued with later.',
  seo: {
    title: 'How to Write a Quotation | Step-by-Step with Free Template',
    description:
      'How to write a professional price quotation: what to include, scoping inclusions and exclusions, setting a validity period and following up.',
    canonical: '/how-to-write-a-quotation',
  },
  h1: 'How to Write a Quotation',
  intro:
    'A quotation is a firm offer: this is what I will do, this is what it costs, and this is how long the price holds. Write it well and it wins the work and doubles as your scope agreement. Write it badly and it becomes the document you argue over three months later. This guide covers what to include, how to handle scope, and how to follow up.',
  keyTakeaways: [
    'A quotation is a fixed price. An estimate is an approximation. Label the document accurately.',
    'Always set a validity period. Fourteen to thirty days is standard.',
    'What you exclude matters as much as what you include.',
    'Itemise enough that the client can see value, but not so much that they cherry-pick.',
    'Follow up once, roughly a week later. Most quotations are lost to silence, not to price.',
  ],
  howTo: {
    name: 'How to write a quotation',
    description:
      'Produce a professional price quotation covering scope, itemised pricing, inclusions, exclusions, validity and terms.',
    steps: [
      {
        title: 'Confirm what the client actually wants',
        description:
          'Before quoting, make sure you understand the deliverable, the deadline and any constraints. Most quoting disputes trace back to a misunderstanding at this stage, not to arithmetic.',
      },
      {
        title: 'Add your business and client details',
        description:
          'Your business name, address and contact details, plus the client business name and the person who will approve the spend. Quote to the decision maker where you can.',
      },
      {
        title: 'Give it a quotation number and dates',
        description:
          'Assign a reference such as QUO-001, set the issue date, and set an expiry date for the quoted price.',
      },
      {
        title: 'Describe the work in itemised lines',
        description:
          'Break the job into line items with clear descriptions, quantities and unit rates. Write descriptions the client would recognise, not internal shorthand.',
      },
      {
        title: 'State inclusions and exclusions explicitly',
        description:
          'List what the price covers and, just as importantly, what it does not. Revisions, travel, materials, third-party fees and rush work are the usual culprits.',
      },
      {
        title: 'Add tax, discounts and the total',
        description:
          'Apply your tax or VAT rate and any agreed discount, and show the total clearly. Make it obvious whether the headline figure includes tax.',
      },
      {
        title: 'Set out payment terms and send it',
        description:
          'State your deposit requirement, payment terms and any late payment interest, then export the quotation as a PDF and send it to the decision maker.',
      },
    ],
  },
  sections: [
    {
      heading: 'Quotation, estimate or proposal?',
      body: [
        'These get used interchangeably and should not be. A quotation is a fixed price you commit to for a defined scope, and once accepted within its validity period it is generally binding. An estimate is your best approximation where the scope is genuinely not yet fixed, and it can change. A proposal is a quotation plus the persuasion: executive summary, approach, deliverables, timeline and signatures.',
        'Label the document for what it actually is. Calling an approximation a quotation is how you end up absorbing a cost overrun you never agreed to.',
      ],
    },
    {
      heading: 'What every quotation should contain',
      body: [
        'The structural elements are consistent across industries, even when the pricing model is not.',
      ],
      list: [
        'The word "Quotation" clearly on the document',
        'A unique quotation number and the issue date',
        'A validity or expiry date for the quoted price',
        'Your business name, address, contact details and tax number where applicable',
        'The client business name and the approving contact',
        'An itemised description of the work with quantities and unit rates',
        'A clear statement of what is included',
        'A clear statement of what is excluded',
        'Subtotal, any discount, the tax rate and tax amount, and the total',
        'Payment terms, including any deposit',
        'What happens if the scope changes',
      ],
    },
    {
      heading: 'The validity period is not optional',
      body: [
        'A quotation without an expiry date is an open-ended commitment. Material costs move, your availability changes, and a client can reasonably accept a six-month-old quote at a price that no longer works.',
        'Fourteen to thirty days is normal. Say it plainly: "This quotation is valid for 30 days from the issue date." For work exposed to volatile input costs, shorten it and say why.',
      ],
    },
    {
      heading: 'Exclusions are what protect you',
      body: [
        'Most scope disputes are not about what was in the quotation. They are about what the client assumed was in the quotation. The fix is to write the assumption down.',
        'If you are quoting design work, say how many rounds of revision are included and what an extra round costs. If you are quoting a physical job, say whether materials, waste disposal, travel and parking are included. If there is a deadline, say what a rush request costs.',
        'A short exclusions list reads as professional, not defensive. It tells the client you have done this before.',
      ],
    },
    {
      heading: 'How much to itemise',
      body: [
        'There is a real tension here. Too little detail and the client cannot see what they are paying for, so the price looks arbitrary. Too much and they start deleting lines, or benchmarking each one against a cheaper supplier.',
        'A reasonable default is to itemise by phase or deliverable rather than by task or hour. "Discovery and wireframes — $1,200" invites a conversation about value. "6 hours at $200" invites a conversation about your hourly rate. The first is a better conversation to have.',
        'Where a client genuinely needs a line-by-line breakdown, give it, but consider marking optional items clearly as optional so the core scope stays intact.',
      ],
    },
    {
      heading: 'Handling scope changes',
      body: [
        'Add one line covering what happens when the job changes, because it usually does. Something like: "Work outside the scope described above will be quoted separately and agreed in writing before it begins."',
        'That sentence turns an awkward mid-project conversation into a procedural one. You are not renegotiating, you are following the process the client already accepted.',
      ],
    },
    {
      heading: 'Following up',
      body: [
        'Most quotations are not rejected. They are simply never answered, because the person who requested it got busy. One short follow-up roughly a week later recovers a meaningful share of them.',
        'Keep it light and useful rather than pressing: check they received it, offer to walk through anything unclear, and mention the expiry date as a natural deadline. If the answer is no, ask what it came down to. Price, timing and scope fit are very different problems, and only one of them is about your rate.',
      ],
    },
    {
      heading: 'After it is accepted',
      body: [
        'Get the acceptance in writing, even if it is just a confirming email. Then keep the quotation, because it is now your scope document and the reference your invoice should point back to.',
        'When the work is done, invoice against the accepted quotation and reference its number. Matching the invoice to a quote the client already approved removes the most common reason invoices get queried.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Is a quotation legally binding?',
      answer:
        'In most jurisdictions a quotation becomes binding once the client accepts it within its validity period, because it is a firm offer for a defined scope. That is precisely why stating an expiry date and a clear scope matters.',
    },
    {
      question: 'How long should a quotation be valid?',
      answer:
        'Fourteen to thirty days is standard. Shorten it if your input costs are volatile, and say so on the document.',
    },
    {
      question: 'What is the difference between a quotation and an estimate?',
      answer:
        'A quotation is a fixed price you commit to. An estimate is an approximation given when the scope is not yet fully defined and may change. Label the document accurately, because clients reasonably treat a quotation as binding.',
    },
    {
      question: 'Should I include my hourly rate in a quotation?',
      answer:
        'Usually not. Quoting by deliverable or phase keeps the conversation on value rather than on your rate. Give an hourly breakdown only where the client specifically requires it.',
    },
    {
      question: 'What should I do when a client asks for a discount?',
      answer:
        'Reduce the scope rather than the price where you can. Removing a deliverable protects your rate and keeps the quotation honest. If you do discount, show it as a discount line so the original value is still visible.',
    },
    {
      question: 'Do I send an invoice after the quotation?',
      answer:
        'Yes. The quotation offers the price before work begins; the invoice requests payment once the work is done. Reference the quotation number on the invoice so the client can match the two.',
    },
  ],
  ctaHeading: 'Write your quotation now',
  ctaText: 'Create Quotation Free',
  ctaLink: '/?mode=quote',
  crossLinks: [
    { title: 'Free Quotation Templates', description: 'Browse 15 free price quote templates.', href: '/quotation-templates' },
    { title: 'Invoice vs Quotation', description: 'Which document to send, and when.', href: '/invoice-vs-quotation' },
    { title: 'How to Write a Business Proposal', description: 'When a price alone is not enough.', href: '/how-to-write-a-business-proposal' },
  ],
};

export const writeProposalGuide: GuideConfig = {
  slug: 'how-to-write-a-business-proposal',
  cluster: 'Proposals',
  published: '2026-08-06',
  updated: '2026-08-06',
  summary:
    'The structure of a proposal that wins work: executive summary, scope, deliverables, timeline and pricing.',
  seo: {
    title: 'How to Write a Business Proposal: Structure + Template',
    description:
      'How to write a business proposal that wins work: executive summary, scope, deliverables, timeline, pricing and signatures. Free template.',
    canonical: '/how-to-write-a-business-proposal',
  },
  h1: 'How to Write a Business Proposal',
  intro:
    'A proposal is what you send when a price alone will not win the work. It has to show that you understood the problem, that your approach is credible, and that the investment is proportionate to the outcome. This guide covers the structure that works, section by section, and the mistakes that lose otherwise winnable proposals.',
  keyTakeaways: [
    'Lead with the client outcome, not with your company history.',
    'The executive summary is the only section many decision makers read in full. Write it last, and make it stand alone.',
    'Specific deliverables beat impressive adjectives.',
    'Price the outcome, and give the client a choice of options where you can.',
    'Two to four pages wins more work than twenty for most freelance and agency projects.',
  ],
  howTo: {
    name: 'How to write a business proposal',
    description:
      'Structure a business or project proposal covering the executive summary, proposed solution, scope, deliverables, timeline, pricing and acceptance.',
    steps: [
      {
        title: 'Restate the problem in the client\'s words',
        description:
          'Open by showing you understood the brief. Use the language the client used when describing the problem, not your internal terminology. This single move separates tailored proposals from templated ones.',
      },
      {
        title: 'Write the executive summary',
        description:
          'A short section stating the problem, your proposed approach, the expected outcome and the headline investment. Assume it may be the only part a senior decision maker reads. Write it last.',
      },
      {
        title: 'Set out the proposed solution',
        description:
          'Explain your approach and why it fits this problem. Keep it focused on how it addresses the client situation rather than on a generic description of your methodology.',
      },
      {
        title: 'Define the scope of work',
        description:
          'State exactly what is included and what is not. Ambiguity here is the single largest cause of unprofitable projects.',
      },
      {
        title: 'List concrete deliverables',
        description:
          'Name the artefacts the client will actually receive, with enough specificity that completion is not a matter of opinion.',
      },
      {
        title: 'Give a timeline with milestones',
        description:
          'Break the work into phases with dates or durations, and state what you need from the client at each stage. Dependencies you do not flag become delays you get blamed for.',
      },
      {
        title: 'Present pricing and the acceptance step',
        description:
          'Show the investment clearly, tied to the outcome. Include payment terms and a signature block so accepting the proposal is a single, obvious action.',
      },
    ],
  },
  sections: [
    {
      heading: 'The structure that works',
      body: [
        'Proposals vary by industry, but the sequence below holds up across most professional services work. It moves from the client, to the approach, to the commercial terms, in that order. Leading with your own credentials is the most common structural mistake.',
      ],
      table: {
        head: ['Section', 'Purpose', 'Length'],
        rows: [
          ['Executive summary', 'Problem, approach, outcome, investment', '1 short page'],
          ['Understanding the problem', 'Prove you listened', '2-3 paragraphs'],
          ['Proposed solution', 'Your approach and why it fits', 'Half to one page'],
          ['Scope of work', 'What is and is not included', 'Half a page'],
          ['Deliverables', 'The concrete artefacts', 'A list'],
          ['Timeline', 'Phases, milestones, client dependencies', 'A list or simple table'],
          ['Investment', 'Pricing, options, payment terms', 'Half a page'],
          ['About us', 'Relevant proof only', 'Short, and last'],
          ['Acceptance', 'Signature blocks and next step', 'A few lines'],
        ],
      },
    },
    {
      heading: 'Write the executive summary last',
      body: [
        'The executive summary is not an introduction. It is a compressed version of the entire proposal, and for senior stakeholders who were not in the original meeting it is frequently the only section read end to end.',
        'It should stand alone: someone reading only that page should understand the problem, what you propose to do, what the client gets, roughly what it costs and how long it takes. Write it after everything else, when you know what you are summarising.',
      ],
    },
    {
      heading: 'Show that you understood the problem',
      body: [
        'The fastest way to lose a proposal is to make it obvious that it is a template with the client name substituted in. The fastest way to win one is to reflect the client situation back accurately, including the constraints they mentioned.',
        'Use their words. If they said "our invoicing takes three days every month and we keep making errors", do not translate that into "operational inefficiencies in the finance function". The former proves you were listening; the latter proves you have a thesaurus.',
      ],
    },
    {
      heading: 'Deliverables must be checkable',
      body: [
        'A deliverable is something the client receives and can verify. "A comprehensive brand strategy" is not checkable. "A 12-page brand guidelines PDF covering logo usage, colour, typography and tone of voice" is.',
        'This protects both sides. The client knows what they are buying, and you have a defensible definition of done. Vague deliverables are how projects end up with an extra month of unpaid revisions.',
      ],
    },
    {
      heading: 'Timelines and client dependencies',
      body: [
        'Almost every overrun on a professional services project has the same cause: the client did not provide something on time. Feedback, content, access, approvals, sign-off from a third party.',
        'Put those dependencies in the timeline explicitly, alongside your own milestones. "Week 3: client feedback on first draft (2 working days)" makes the dependency visible before it slips, and makes the resulting conversation a factual one rather than a blame one.',
      ],
    },
    {
      heading: 'Pricing: give a choice, not an ultimatum',
      body: [
        'A single price is a yes or no decision. Two or three options turn it into a which one decision, which is a far better position to be in and frequently increases the value of the work won.',
        'Where it fits, present a core option covering the essential scope and a broader one adding clearly valuable extras. Keep the difference substantive rather than cosmetic. Anchor on the outcome: what the work is worth to the client is a more useful frame than how many hours it takes you.',
        'State payment terms here too. A deposit before work starts and the balance on delivery, or staged payments against milestones, is standard for anything substantial.',
      ],
    },
    {
      heading: 'Length, and the "about us" trap',
      body: [
        'For most freelance and agency work, two to four pages wins more often than twenty. Length signals effort to the person writing it and signals work to the person reading it. Enterprise and public sector procurement is the exception, where formal requirements often dictate the format.',
        'Keep credentials short and relevant, and put them near the end. Case studies earn their place only when they closely match the client situation. Three pages of logos and team biographies before the client reaches the scope is a proposal about you, and clients buy proposals about them.',
      ],
    },
    {
      heading: 'Make accepting it easy',
      body: [
        'End with an unambiguous next step. A signature block for both the client and your authorised signer, with name, date and space for a signature, turns the proposal into its own acceptance document and removes a round of paperwork.',
        'Then follow up. As with quotations, most proposals that go unanswered are lost to inertia rather than to a decision. One short, useful follow-up a week later is expected, not pushy.',
      ],
    },
  ],
  faqs: [
    {
      question: 'How long should a business proposal be?',
      answer:
        'Two to four pages suits most freelance and agency work. Go longer only where formal procurement requires it. Length is not a proxy for quality, and a shorter proposal is more likely to be read in full.',
    },
    {
      question: 'What should the executive summary include?',
      answer:
        'The client problem, your proposed approach, the expected outcome and the headline investment, in about one page. Write it last and make sure it stands alone.',
    },
    {
      question: 'Should I include pricing options?',
      answer:
        'Where the work allows, yes. Two or three options change the decision from whether to hire you into which version to buy, and often increase the value of the work won.',
    },
    {
      question: 'Do I need signatures on a proposal?',
      answer:
        'Signature blocks are strongly advisable. They let the proposal double as the acceptance document, which removes a separate contract step for straightforward projects.',
    },
    {
      question: 'How soon should I follow up on a proposal?',
      answer:
        'About a week after sending. Offer to walk through anything unclear rather than simply asking for a decision. If the answer is no, ask what it came down to.',
    },
  ],
  ctaHeading: 'Build your proposal now',
  ctaText: 'Create Proposal Free',
  ctaLink: '/?mode=proposal',
  crossLinks: [
    { title: 'Free Proposal Templates', description: 'Browse 15 business and project proposal templates.', href: '/proposal-templates' },
    { title: 'How to Write a Quotation', description: 'When the client only needs a price.', href: '/how-to-write-a-quotation' },
    { title: 'Free Proposal Generator', description: 'Scope, deliverables, timeline and signatures.', href: '/proposal-generator' },
  ],
};
