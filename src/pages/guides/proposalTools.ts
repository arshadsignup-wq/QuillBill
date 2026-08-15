import type { GuideConfig } from './types';

/**
 * The proposal cluster. /how-to-write-a-business-proposal owns "how do I
 * write one". These own tooling (AI generators, proposal software), template
 * choice, and the structural format question.
 */

export const aiProposalGeneratorGuide: GuideConfig = {
  slug: 'ai-proposal-generator',
  cluster: 'Proposals',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'What AI proposal generators do well, the four things they reliably get wrong, and how to use one without sending a proposal that reads like everyone else\'s.',
  keyTakeaways: [
    'AI is genuinely good at structure and first drafts, and genuinely bad at pricing and specifics.',
    'The executive summary is the section AI writes worst and the section clients read first.',
    'Never let a generator invent scope, timelines or figures — those are commitments you are signing.',
    'Treat the output as a scaffold to fill with client-specific evidence, not a document to send.',
  ],
  seo: {
    title: 'AI Proposal Generator: What It Gets Right and Wrong',
    description:
      'How AI proposal generators work, what they genuinely speed up, the four things they get wrong, and how to edit the output into a proposal that wins.',
    canonical: '/ai-proposal-generator',
  },
  h1: 'AI Proposal Generator: Useful Scaffold, Dangerous Final Draft',
  intro:
    'AI proposal generators have become the default first step for a lot of people writing a business proposal, and for good reason: staring at a blank page is the expensive part, and a language model removes it in seconds. The risk is subtler than "AI writes badly". Modern models write fluently. What they cannot do is know your costs, your capacity or your client — and a proposal is a document where being confidently wrong about any of those is a contract you have to honour. This guide covers what these tools genuinely do well, where they fail, and how to use one properly.',
  sections: [
    {
      heading: 'How AI proposal generators actually work',
      body: [
        'Nearly all of them are the same three components: a large language model, a set of proposal-shaped templates, and prompt scaffolding that turns your short description into a structured request. You describe the project in a few sentences, and the tool returns a draft with an executive summary, a proposed approach, deliverables, a timeline and a pricing table.',
        'Some are standalone tools, some are features inside proposal software, and some are design-first products that produce a laid-out document rather than plain text. The differences in output quality between them are smaller than the marketing suggests, because they are largely drawing on the same underlying models.',
        'What varies more usefully is what happens after the draft: whether you can edit it properly, whether it exports to something a client will actually open, and whether it plugs into tracking, e-signature and your existing pricing.',
      ],
    },
    {
      heading: 'What they are genuinely good at',
      body: [
        'It is worth being specific about the wins, because they are real and they save meaningful time.',
        'Structure is the big one. A model will not forget the sections a proposal needs. If your proposals have historically been three paragraphs and a price, a generated skeleton is a straightforward upgrade.',
        'Overcoming the blank page is the second. Editing a mediocre draft is psychologically far easier than writing from nothing, and for many people that difference decides whether the proposal goes out today or next week.',
        'Tone consistency is the third, particularly useful if several people in a small business write proposals and they currently read like different companies.',
        'Coverage of the obvious is the fourth. Models reliably remember to mention assumptions, out-of-scope items and next steps — sections that busy humans routinely drop and then regret.',
      ],
    },
    {
      heading: 'The four things they consistently get wrong',
      body: [
        'These are not model quality problems that will disappear with the next release. They are structural: the tool does not have the information.',
        'Pricing. A generator does not know your cost base, your utilisation, your minimum viable margin or what this client paid last time. Any figure it produces is a plausible-looking guess, and a proposal is where a plausible-looking guess becomes a binding number. Always replace generated pricing entirely.',
        'Timelines. The model does not know your current workload or your dependencies. Generated timelines skew optimistic, because the training data is full of confident project plans. A deadline in a proposal is a commitment, and this is the most common way AI-drafted proposals cause real damage.',
        'Specificity about the client. The output will say "your organisation\'s unique challenges" because it does not know what those are. This is the difference between a proposal that reads as written for someone and one that reads as generated, and clients who read a lot of proposals spot it instantly.',
        'Claims about you. Models will happily assert experience, certifications and case study results you do not have. Every factual claim about your business needs verifying before it goes out, and inventing credentials in a document that forms part of a contract is a serious problem, not a stylistic one.',
      ],
      table: {
        head: ['Section', 'AI draft quality', 'What you must do'],
        rows: [
          ['Overall structure', 'Good', 'Reorder to match client priorities'],
          ['Executive summary', 'Poor', 'Rewrite entirely from the client\'s brief'],
          ['Problem statement', 'Fair', 'Replace with their words from the call'],
          ['Proposed approach', 'Good', 'Add specifics only you would know'],
          ['Deliverables', 'Good', 'Tighten so each is unambiguous'],
          ['Timeline', 'Poor', 'Replace with your real capacity'],
          ['Pricing', 'Do not use', 'Replace entirely from your own costs'],
          ['Credentials and case studies', 'Dangerous', 'Verify every claim, delete inventions'],
        ],
      },
    },
    {
      heading: 'The executive summary problem',
      body: [
        'This deserves its own section because of a mismatch: the executive summary is the section AI writes worst and the section that most influences the decision.',
        'A good executive summary demonstrates that you understood the problem as the client experiences it, in their language, referencing what they actually told you. It is the proof that you listened. A generated one restates the project category in industry-standard phrasing, which proves nothing.',
        'The practical fix costs about ten minutes. Open your notes from the discovery call. Find the two or three phrases the client used to describe their problem — their words, including the imprecise ones. Write the summary using those phrases. Then let the model draft the rest.',
        'This single habit does more for win rate than any tool choice, because it is the part of the proposal a competitor using the same generator will not have.',
      ],
    },
    {
      heading: 'A workflow that uses AI without the risks',
      body: [
        'The order matters. Most people prompt first and edit after, which anchors the whole document to the model\'s assumptions.',
      ],
      list: [
        'Write your pricing and timeline first, before opening any generator, based on your real costs and capacity',
        'Pull three to five direct quotes from your discovery call notes',
        'Prompt the generator with the actual client context, not a generic category description',
        'Delete every generated number and date, replacing them with the figures you prepared',
        'Rewrite the executive summary yourself using the client\'s own phrasing',
        'Fact-check every claim about your experience, clients and results',
        'Cut roughly a third — generated drafts are almost always padded',
        'Read it aloud once; anything you would not say in a meeting comes out',
      ],
    },
    {
      heading: 'Where a template beats a generator',
      body: [
        'For a lot of businesses, an AI generator is solving a problem they do not have. If you do similar work repeatedly, your proposals differ in a handful of variables — client, scope, price, timeline — and everything else is stable. In that situation a good template you refine over time beats a fresh generation every time, because the template accumulates the phrasing that has actually won work.',
        'Generators earn their place when the work varies a lot, when you are proposing into an unfamiliar sector, or when you write proposals rarely enough that you have no accumulated template.',
        'If a template is the better fit, [free business proposal templates](/free-business-proposal-template) covers choosing one, and [QuillBill\'s proposal templates](/proposal-templates) are 15 layouts with the pricing table and totals already calculated. For the writing itself, [how to write a business proposal](/how-to-write-a-business-proposal) goes section by section.',
      ],
    },
    {
      heading: 'Disclosure, confidentiality and the boring risks',
      body: [
        'Two practical cautions that rarely appear on tool marketing pages.',
        'Check what happens to what you paste in. If you are describing a client\'s confidential situation to a third-party tool, you may be disclosing information you agreed to protect, and some NDAs are drafted broadly enough to cover exactly this. Read the tool\'s data policy, and prefer options that do not retain input for training.',
        'Some public sector and enterprise procurement processes now ask whether submissions were AI-generated, and a few restrict it. If you are responding to a formal RFP, check the rules before you draft rather than after.',
      ],
    },
  ],
  answersHeading: 'AI proposal questions, answered',
  answers: [
    {
      question: 'What is an AI proposal generator?',
      answer:
        'A tool that turns a short description of your project into a structured proposal draft, using a language model plus proposal-shaped templates. It typically returns an executive summary, approach, deliverables, timeline and a pricing table you then edit.',
    },
    {
      question: 'Can AI write a business proposal?',
      answer:
        'It can write a competent draft of the structural sections. It cannot supply what it does not know: your costs, your capacity, your client\'s actual situation or your real credentials. Those four things are where proposals are won and lost, and all four need you.',
    },
    {
      question: 'Is it safe to use AI for client proposals?',
      answer:
        'Check two things first. Whether the tool retains your inputs, since describing a client\'s confidential situation to a third-party service may breach an NDA you signed. And whether the submission process permits AI, as some public sector RFPs now ask or restrict.',
    },
    {
      question: 'What prompt should I use for a proposal generator?',
      answer:
        'Give it the real client context rather than a category: what they told you their problem was, in their words, what you are proposing to do, and the constraints. Generic prompts produce generic proposals, which is the main reason AI drafts read as AI drafts.',
    },
    {
      question: 'Will a client know my proposal was AI-generated?',
      answer:
        'Often, yes — particularly clients who read many proposals. The tell is rarely prose quality; it is the absence of anything specific to them. A proposal quoting their own words and referencing your actual conversation does not read as generated, whatever drafted it.',
    },
    {
      question: 'Should I disclose that I used AI to write a proposal?',
      answer:
        'Usually unnecessary in ordinary commercial work. Some formal RFP processes, especially in the public sector, now ask about it or restrict it, so check the submission rules for anything competitive or regulated. Either way you remain responsible for every claim in the document.',
    },
    {
      question: 'Can AI generate the pricing for a proposal?',
      answer:
        'It can produce a figure, and you should never use it. The model has no knowledge of your cost base, utilisation or minimum margin, so its number is a plausible-looking guess — and in a proposal, a guess becomes a binding commitment the moment the client accepts.',
    },
    {
      question: 'What is the best free AI proposal generator?',
      answer:
        'The differences between them are smaller than the marketing implies, because most draw on the same underlying models. Choose on what happens after the draft: whether you can edit properly, whether it exports to a format clients will open, and whether inputs are retained.',
    },
    {
      question: 'How long does it take to write a proposal with AI?',
      answer:
        'The draft appears in seconds; the work is the editing. Budget an hour or so to replace the pricing and timeline, rewrite the executive summary in the client\'s language, verify every claim about your business, and cut the roughly one-third that is padding.',
    },
  ],
  faqs: [
    {
      question: 'Are AI proposal generators any good?',
      answer:
        'They are good at structure, tone and getting past the blank page, which is genuinely most of the friction. They are unreliable on anything requiring knowledge they do not have: your pricing, your capacity, your client\'s specific situation and your actual credentials. Use the draft as a scaffold and replace those parts entirely.',
    },
    {
      question: 'Can I send an AI-generated proposal to a client as it is?',
      answer:
        'No. Beyond reading generic, the draft will contain invented pricing and timelines that become commitments the moment the client accepts, and may assert experience you do not have. Every number, date and factual claim needs replacing or verifying before it leaves your hands.',
    },
    {
      question: 'Will clients know a proposal was written by AI?',
      answer:
        'Frequently, yes — particularly clients who read many proposals. The tell is rarely the prose quality; it is the absence of anything specific to them. A proposal that quotes their own words back and references details from your conversation does not read as generated, whatever drafted it.',
    },
    {
      question: 'Is it safe to put client information into an AI proposal tool?',
      answer:
        'Check the tool\'s data retention policy first, and check your own confidentiality obligations. If you are under an NDA, pasting the client\'s situation into a third-party service may breach it. Prefer tools that state clearly that inputs are not retained or used for training.',
    },
    {
      question: 'What is the difference between an AI proposal generator and proposal software?',
      answer:
        'A generator produces the draft text. Proposal software manages the whole lifecycle: templates, content libraries, approvals, e-signature, and tracking of whether the client opened it. Increasingly the software includes a generator as one feature, which is generally the more useful packaging.',
    },
    {
      question: 'Does using AI to write proposals need to be disclosed?',
      answer:
        'Usually not in ordinary commercial work. Some formal RFP processes, particularly in the public sector, now ask about it or restrict it, so check the submission rules for anything competitive or regulated. Regardless of disclosure, you remain fully responsible for every claim in the document.',
    },
  ],
  ctaHeading: 'Build the proposal document itself',
  ctaText: 'Open the Proposal Generator',
  ctaLink: '/?mode=proposal',
  crossLinks: [
    { title: 'How to Write a Business Proposal', description: 'The sections, in order, with what each is for.', href: '/how-to-write-a-business-proposal' },
    { title: 'Proposal Generation Software', description: 'What the full-lifecycle tools add.', href: '/proposal-generation-software' },
    { title: 'Free Business Proposal Templates', description: 'When a template beats a generator.', href: '/free-business-proposal-template' },
  ],
};

export const proposalGenerationSoftwareGuide: GuideConfig = {
  slug: 'proposal-generation-software',
  cluster: 'Proposals',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'What proposal generation software does beyond documents, the features worth paying for, and why regulated industries like financial advice need different tools.',
  keyTakeaways: [
    'Content libraries and analytics are what you are paying for, not the document editor.',
    'Knowing when a client opened a proposal changes when you follow up, which changes win rate.',
    'Regulated sectors need compliance controls that general proposal tools do not have.',
    'Under about five proposals a month, software is overhead — a template does the job.',
  ],
  seo: {
    title: 'Proposal Generation Software: What Is Worth Paying For',
    description:
      'What proposal software adds over a template: content libraries, approval workflows, e-signature and open tracking. Plus the regulated-industry case.',
    canonical: '/proposal-generation-software',
  },
  h1: 'Proposal Generation Software: What You Are Actually Paying For',
  intro:
    'Proposal generation software is not sold on making documents. You can make a document for free. It is sold on everything around the document: reusable content that stays current, approval steps that stop an unapproved discount going out, signatures that do not require a printer, and analytics that tell you the client opened your proposal three times and spent most of it on the pricing page. Whether that is worth a subscription depends almost entirely on your volume and how many people touch a proposal before it goes out.',
  sections: [
    {
      heading: 'The feature that actually justifies the cost',
      body: [
        'If proposal software has one killer feature, it is the content library — a maintained store of approved, reusable blocks: company background, methodology, case studies, terms, team biographies.',
        'The problem it solves is specific and expensive. Without it, every proposal is assembled by copying from the last one, which means an error introduced once propagates indefinitely, outdated case study figures circulate for years, and nobody is confident which version of the boilerplate is current. Anyone who has found a previous client\'s name left in a sent proposal knows this failure mode.',
        'A content library makes that boilerplate a single source of truth. Update the case study once and every future proposal has the current figures. For a team, this is the difference between proposals being a coordination problem and being a assembly task.',
        'For a sole trader who writes four proposals a month from one well-maintained template, this feature is solving a problem you do not have.',
      ],
    },
    {
      heading: 'What analytics change in practice',
      body: [
        'Open and engagement tracking is the feature people are most sceptical about and it is more useful than it sounds, for one narrow reason: it tells you when to follow up.',
        'Following up on a proposal the client has not opened is a different conversation from following up on one they opened four times and forwarded to a colleague. The first needs a nudge that it exists; the second needs you to address whatever they are stuck on, usually price or scope.',
        'Section-level engagement adds a little more. If clients consistently spend their time on the pricing page and skip the methodology, your methodology section is not earning its length. That is a genuinely useful editing signal that you cannot get any other way.',
        'The caution is not to over-read it. A proposal opened once and immediately accepted is not a failure of engagement, and treating tracking data as a mind-reading device leads to some awkward sales calls.',
      ],
    },
    {
      heading: 'The features, and who each one is for',
      body: [
        'Not every capability matters to every business. Matching them to your situation is what stops you paying for an enterprise tier you will not use.',
      ],
      table: {
        head: ['Feature', 'What it solves', 'Who needs it'],
        rows: [
          ['Content library', 'Stale, inconsistent boilerplate', 'Teams, anyone with case studies'],
          ['E-signature', 'The print-sign-scan stall', 'Nearly everyone'],
          ['Open tracking', 'Knowing when to follow up', 'Anyone with a real pipeline'],
          ['Approval workflow', 'Unapproved discounts going out', 'Teams with pricing authority levels'],
          ['CRM integration', 'Rekeying client data', 'Anyone already running a CRM'],
          ['Interactive pricing', 'Clients self-selecting options', 'Tiered or modular offerings'],
          ['Version control', 'Which draft did we send?', 'Negotiated, multi-round deals'],
          ['Compliance controls', 'Regulatory review and audit trail', 'Regulated industries'],
        ],
      },
    },
    {
      heading: 'Why regulated industries need something different',
      body: [
        'General proposal tools are built for sales teams. Regulated professions — financial advice, insurance, legal services, healthcare — have requirements those tools do not address, which is why a distinct category of sector-specific proposal software exists.',
        'For financial advisers specifically, a client proposal often contains recommendations that are regulated communications. In the United States, the SEC\'s [marketing rule for investment advisers](https://www.sec.gov/investment/marketing-faq) governs how performance and testimonials may be presented in advertisements, which can include proposal material. In the UK, the FCA\'s [financial promotions regime](https://www.fca.org.uk/firms/financial-promotions-adverts) requires communications to be fair, clear and not misleading, with record-keeping obligations attached.',
        'That drives requirements a general tool typically lacks: locked disclosure blocks that cannot be edited or deleted, mandatory compliance review before sending, an immutable audit trail of exactly what was sent to whom and when, and archiving that satisfies retention rules. Portfolio and planning software in this sector usually generates proposals for precisely this reason.',
        'The practical point: if your proposals contain regulated advice, do not evaluate general proposal software on features and price. Evaluate it on whether your compliance function will accept it, and involve them before you trial anything.',
      ],
    },
    {
      heading: 'The volume threshold',
      body: [
        'A rough guide, since this is the question that actually decides it.',
        'Under about five proposals a month, written by one person: a maintained template and a free generator is the right answer. The software\'s advantages all scale with volume and headcount, and at this level you have neither. Use [QuillBill\'s proposal templates](/proposal-templates) or any tool that produces a clean document, and keep your reusable blocks in a document you actually maintain.',
        'Five to twenty a month, one or two people: the value is real but marginal. E-signature and open tracking are the two features worth having; you can get both from cheaper standalone tools without buying a whole proposal platform.',
        'Above twenty a month, or any team where more than two people touch a proposal, or any regulated context: the coordination and consistency problems are what the software exists for, and assembling proposals by hand becomes the constraint on how many you can send.',
      ],
    },
    {
      heading: 'What to check on a trial',
      body: [
        'Proposal software demos well and reveals its limits slowly. These checks surface most of them inside a two-week trial.',
      ],
      list: [
        'Export a finished proposal to PDF and check it looks right — web-first tools often produce poor print output',
        'Confirm the client can view and sign without creating an account, since every added step loses acceptances',
        'Check how it looks on a phone, because a meaningful share of proposals are first opened there',
        'Test what happens when you need to revise an already-sent proposal',
        'Find out whether your content library exports if you leave',
        'Check whether pricing tables handle your actual tax situation, not just a flat percentage',
        'If regulated, have compliance review the audit trail and archiving before you commit',
      ],
    },
  ],
  answersHeading: 'Proposal software questions, answered',
  answers: [
    {
      question: 'What is a content library in proposal software?',
      answer:
        'A maintained store of approved reusable blocks — company background, methodology, case studies, terms, biographies — that proposals are assembled from. It replaces copying from your last proposal, which is how outdated figures and previous clients\' names end up in sent documents.',
    },
    {
      question: 'Is proposal software worth the cost?',
      answer:
        'Below roughly five proposals a month from one person, no — a good template covers it. The value scales with volume and headcount, because what you are buying is consistency across a team and correctly timed follow-up, neither of which matters at low volume.',
    },
    {
      question: 'What is proposal open tracking?',
      answer:
        'Notification of when a client opened your proposal and which sections they spent time on. Its real use is timing: following up on an unopened proposal is a different conversation from following up on one opened four times and forwarded to a colleague.',
    },
    {
      question: 'What is an automated proposal generation engine?',
      answer:
        'A system that assembles proposals from structured inputs without anyone drafting each one, pulling client data from a CRM and content from a rules-driven library. It suits high-volume standardised proposals such as insurance or equipment quoting, and is overkill for bespoke work.',
    },
    {
      question: 'What proposal software do financial advisers use?',
      answer:
        'Usually sector-specific tools, often built into portfolio or planning software, rather than general proposal platforms. The reason is compliance: adviser proposals frequently contain regulated communications needing locked disclosures, pre-send review and an auditable record of what was sent.',
    },
    {
      question: 'Why do regulated industries need different proposal software?',
      answer:
        'Because a proposal containing advice may be a regulated communication. That drives requirements general tools lack: disclosure blocks that cannot be edited out, mandatory compliance review before sending, an immutable audit trail, and archiving that meets retention rules.',
    },
    {
      question: 'Is there free proposal generation software?',
      answer:
        'There are free tiers, typically limiting active proposals or users and reserving e-signature and analytics for paid plans. Since those two features are the main reason to use this category, free tiers are usually better understood as extended trials.',
    },
    {
      question: 'Does proposal software integrate with CRM?',
      answer:
        'Most integrate with the major CRMs. Confirm yours specifically during a trial rather than trusting a logo on a marketing page. The integration that matters is pulling client and deal data in, so nobody rekeys details that already exist elsewhere.',
    },
    {
      question: 'What should I test during a proposal software trial?',
      answer:
        'Export a finished proposal to PDF and check the print layout, confirm clients can sign without creating an account, view it on a phone, revise an already-sent proposal, and verify your content library exports if you leave.',
    },
  ],
  faqs: [
    {
      question: 'What does proposal generation software do?',
      answer:
        'It manages the proposal lifecycle rather than just the document: a library of reusable approved content, templates, approval workflows, e-signature, and tracking of whether and how the client engaged with what you sent. The document editor is the least distinctive part.',
    },
    {
      question: 'Is proposal software worth it for a small business?',
      answer:
        'Below roughly five proposals a month written by one person, generally not — a good template and a free generator cover it. The value comes from consistency across a team and from follow-up timing, and both of those scale with volume and headcount.',
    },
    {
      question: 'What should financial advisers look for in proposal software?',
      answer:
        'Compliance features before anything else: locked disclosure blocks, mandatory pre-send review, an immutable audit trail of what was sent to whom, and archiving that meets your retention obligations. Involve your compliance function in the evaluation, since a tool they will not approve is worthless regardless of its features.',
    },
    {
      question: 'Does proposal software integrate with CRM systems?',
      answer:
        'Most integrate with the major CRMs, which is worth confirming for your specific one during a trial rather than trusting a logo on a marketing page. The integration that matters is pulling client and deal data in, so nobody is rekeying details that already exist.',
    },
  ],
  sources: [
    {
      label: 'Marketing rule frequently asked questions for investment advisers',
      publisher: 'U.S. Securities and Exchange Commission',
      url: 'https://www.sec.gov/investment/marketing-faq',
    },
    {
      label: 'Financial promotions and adverts',
      publisher: 'Financial Conduct Authority',
      url: 'https://www.fca.org.uk/firms/financial-promotions-adverts',
    },
  ],
  ctaHeading: 'Start with the document',
  ctaText: 'Create a Proposal Free',
  ctaLink: '/?mode=proposal',
  crossLinks: [
    { title: 'AI Proposal Generator', description: 'Where AI drafting helps and where it hurts.', href: '/ai-proposal-generator' },
    { title: 'How to Write a Business Proposal', description: 'The writing itself, section by section.', href: '/how-to-write-a-business-proposal' },
    { title: 'Business Proposal Format', description: 'How to structure and lay one out.', href: '/business-proposal-format' },
  ],
};

export const freeProposalTemplateGuide: GuideConfig = {
  slug: 'free-business-proposal-template',
  cluster: 'Proposals',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'How to choose a free proposal template by proposal type, the sections most free templates get wrong, and how to adapt one so it does not read like a template.',
  keyTakeaways: [
    'Solicited, unsolicited and RFP responses need genuinely different structures.',
    'Most free templates over-invest in company background and under-invest in the client\'s problem.',
    'A pricing table with options outperforms a single total in most service businesses.',
    'Replace the template\'s generic headings with the client\'s own language.',
  ],
  seo: {
    title: 'Free Business Proposal Template: How to Choose and Adapt',
    description:
      'Free business proposal templates compared by proposal type, the sections most templates get wrong, and how to adapt one so it does not read generic. No sign-up.',
    canonical: '/free-business-proposal-template',
  },
  h1: 'Free Business Proposal Templates: Choosing and Adapting One',
  intro:
    'A free business proposal template saves you the structure, which is a real saving — most proposals that lose do so because something important was missing, not because the prose was weak. But templates carry a cost of their own: they encourage you to fill in sections rather than make an argument, and a filled-in template reads exactly like a filled-in template. This guide covers picking the right one for the type of proposal you are writing, the sections free templates habitually get wrong, and how to adapt one so it sounds like you.',
  sections: [
    {
      heading: 'Three proposal types, three different structures',
      body: [
        'Most free proposal templates are built for one situation and used for all three. Getting this right matters more than the design.',
        'A solicited proposal follows a conversation. The client has told you their problem and asked what you would do. You can be brief, lead with the approach, and skip most of the persuasion — they have already decided they want someone, and are deciding whether it is you.',
        'An unsolicited proposal arrives uninvited. Nobody asked, so the entire burden is on you to establish that a problem exists and is worth money before you propose anything. These need a much longer problem section and a much shorter credentials section, which is the reverse of what most templates provide.',
        'An RFP response follows someone else\'s rules. The structure is dictated, often down to section order and page limits, and deviating gets you disqualified before anyone reads your argument. Here a template is actively unhelpful — build the document from the RFP\'s own table of contents.',
      ],
      table: {
        head: ['', 'Solicited', 'Unsolicited', 'RFP response'],
        rows: [
          ['Client asked?', 'Yes', 'No', 'Yes, formally'],
          ['Lead with', 'Your approach', 'The problem', 'Their required order'],
          ['Typical length', 'Short', 'Medium', 'As specified'],
          ['Problem section', 'Brief recap', 'The main work', 'Restate their framing'],
          ['Pricing detail', 'Itemised', 'Indicative range', 'Exactly their format'],
          ['Template useful?', 'Yes', 'Partly', 'No — follow the RFP'],
        ],
      },
    },
    {
      heading: 'What free templates habitually get wrong',
      body: [
        'Download a handful of the most popular free proposal templates and the same problems recur.',
        'Too much about you, too early. A typical template opens with company background, team biographies and a client logo wall. The client is not yet interested in you; they are interested in whether you understand their problem. Move credentials after the approach section, where they serve as evidence rather than throat-clearing.',
        'A problem statement written in your language. Templates prompt you to "describe the client\'s challenge", and most people describe it as their industry would. The client needs to recognise their own situation, in their own words, or the whole document reads as generic.',
        'A single price with no structure. Most templates give you one total. A pricing section with a core scope plus clearly priced options converts better, because it changes the question from whether to how much.',
        'Deliverables that are activities. "Ongoing consultation" and "strategic support" are not deliverables and cannot be verified as complete. A deliverable is something that either exists or does not.',
        'No stated next step. Templates end with a signature block and no instruction. Tell the client exactly what happens next and by when.',
      ],
    },
    {
      heading: 'The sections that earn their place',
      body: [
        'A proposal that includes these, in roughly this order, covers what decisions actually need. Anything else is optional.',
      ],
      list: [
        'A title page with the client\'s name, your name and the date — proposals get forwarded and misfiled',
        'An executive summary written last, in the client\'s language, that works if nothing else is read',
        'The problem, stated as they experience it, with their own phrasing where you have it',
        'Your proposed approach, specific enough that a competitor could not have written it',
        'Deliverables, each one verifiable as done or not done',
        'Timeline with milestones, based on your real capacity',
        'Pricing, itemised, with options where they exist',
        'Assumptions and what is explicitly out of scope',
        'Brief, relevant credentials — the two most relevant, not everything',
        'Terms, validity period, and exactly how to accept',
      ],
    },
    {
      heading: 'Making a template not sound like one',
      body: [
        'Four edits do most of the work, and none takes long.',
        'Rewrite the headings. "Proposed Solution" is a template heading. "Reducing your onboarding time from three weeks to four days" is a heading that only applies to this client. Headings are the most-scanned part of a document and the cheapest place to demonstrate specificity.',
        'Quote them directly. Two or three phrases from your discovery call, used verbatim, transform how the document reads. This is the single highest-leverage edit available.',
        'Cut the sections that do not apply. A template with an empty or padded section is worse than a template with the section removed. Nobody is counting.',
        'Fix the pricing table. This is the section clients spend the most time on, and it is the section free templates handle worst. Make sure the totals calculate correctly, tax is labelled properly, and any options are visually distinct from the core scope.',
      ],
    },
    {
      heading: 'Formats, and the one to avoid',
      body: [
        'Word and Google Docs suit proposals better than they suit invoices, because a proposal is mostly prose. The weakness is the pricing table, which is manual arithmetic in a document that gets revised repeatedly during negotiation.',
        'Slide decks work when you will present the proposal live, and work badly when it will be read alone — a deck built for narration is thin without the narrator.',
        'The format to avoid is a design-tool export with no calculation, where an attractive pricing table contains hand-typed numbers. It is the most common source of proposals whose line items do not sum to the stated total, and clients do check.',
        '[QuillBill\'s proposal templates](/proposal-templates) are 15 layouts with the pricing table calculated for you, filled in the browser with no sign-up and exported as PDF. That covers the pricing section properly while leaving the prose to you, which is the right division of labour.',
      ],
    },
  ],
  answersHeading: 'Proposal template questions, answered',
  answers: [
    {
      question: 'What is a business proposal?',
      answer:
        'A document that argues for a specific piece of work and prices it. Unlike a quotation, which states a figure for defined work, a proposal also sets out the problem, your approach, the deliverables and the timeline — because the approach itself still needs selling.',
    },
    {
      question: 'What are the three types of business proposal?',
      answer:
        'Solicited, where the client asked you for it after a conversation; unsolicited, where you approach them uninvited and must first establish the problem exists; and RFP responses, where the structure and often the length are dictated by the buyer.',
    },
    {
      question: 'Can I send the same proposal to more than one client?',
      answer:
        'Reuse the structure, never the content. The problem statement and executive summary are where a proposal proves you understood this specific client, and those are exactly the sections that decide the outcome. Recycling them is what makes proposals read as boilerplate.',
      detail:
        'The difference between a proposal and a quotation is covered in [invoice vs quotation](/invoice-vs-quotation), which compares all four documents you might send.',
    },
    {
      question: 'Where can I get a free business proposal template?',
      answer:
        'Plenty of sites offer them and most are usable starting points. Before sending one, check it puts the client\'s problem before your company background, that deliverables are verifiable rather than vague activities, and that the pricing table actually calculates.',
    },
    {
      question: 'What is an executive summary in a proposal?',
      answer:
        'A roughly one-page standalone section stating the problem, your approach, the outcome and the price. It appears first and must be written last, because a summary drafted before the proposal describes what the document contains rather than what you are proposing.',
    },
    {
      question: 'Do I need a title page on a business proposal?',
      answer:
        'Yes. Proposals get forwarded, downloaded and misfiled, and a title page carrying the client\'s name, your name and the date is what makes yours identifiable three weeks later in a folder of competing submissions.',
    },
    {
      question: 'How do I make a proposal template not look generic?',
      answer:
        'Rewrite the headings to describe this client\'s outcome rather than the section type, quote two or three phrases from your discovery call verbatim, delete sections that do not apply, and fix the pricing table. Headings and the client\'s own words do most of the work.',
    },
    {
      question: 'What is a proposal sample?',
      answer:
        'A completed example proposal, as opposed to a blank template. Samples are useful for seeing how the sections read when filled in, but copying one wholesale reproduces someone else\'s framing of someone else\'s problem, which is what makes proposals read as boilerplate.',
    },
    {
      question: 'Should a business proposal be free to produce?',
      answer:
        'Producing it costs your time, which is a real cost of sale. Most businesses absorb that. Where a proposal requires substantial discovery or technical work before it can be written, charging for a paid discovery phase is legitimate and often improves the eventual proposal.',
    },
  ],
  faqs: [
    {
      question: 'What should a free business proposal template include?',
      answer:
        'A title page, an executive summary, the problem stated in the client\'s terms, your approach, verifiable deliverables, a timeline, itemised pricing, assumptions and exclusions, brief relevant credentials, and clear terms with a validity date and an acceptance instruction.',
    },
    {
      question: 'Are free proposal templates good enough to win work?',
      answer:
        'The template is not what wins or loses. Proposals are decided on whether you demonstrably understood the problem and whether the price and scope fit. A free template gives you a sound structure; the specificity you add to it is what does the persuading.',
    },
    {
      question: 'Should a business proposal include pricing?',
      answer:
        'Almost always, unless an RFP specifically requires pricing in a separate sealed submission. Proposals without pricing stall, because the reader cannot make a decision and has to come back to you for the one number they most need.',
    },
    {
      question: 'Can I reuse the same proposal template for every client?',
      answer:
        'The structure yes, the content no. Reusing the structure is efficient and sensible. Reusing the problem statement and executive summary is what makes proposals read generic, and those are precisely the sections that decide the outcome.',
    },
  ],
  ctaHeading: 'Build your proposal now',
  ctaText: 'Browse Proposal Templates',
  ctaLink: '/proposal-templates',
  crossLinks: [
    { title: 'Free Proposal Templates', description: '15 layouts with calculated pricing.', href: '/proposal-templates' },
    { title: 'Business Proposal Format', description: 'Structure, order and layout rules.', href: '/business-proposal-format' },
    { title: 'How to Write a Business Proposal', description: 'The argument, section by section.', href: '/how-to-write-a-business-proposal' },
  ],
};

export const businessProposalFormatGuide: GuideConfig = {
  slug: 'business-proposal-format',
  cluster: 'Proposals',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'The standard business proposal structure, why section order should follow the client\'s decision process, and the formatting rules that make a proposal readable.',
  keyTakeaways: [
    'There is no legally standard format — order should follow how the client decides.',
    'Executive summary first on the page, written last in the process.',
    'Formatting is a readability tool: 11–12pt body, real headings, generous whitespace.',
    'Send PDF. Editable formats invite disputes about what was agreed.',
  ],
  seo: {
    title: 'Business Proposal Format: Structure, Order and Layout',
    description:
      'The standard business proposal format: which sections to include, what order to put them in, and the layout rules that make a proposal readable.',
    canonical: '/business-proposal-format',
  },
  h1: 'Business Proposal Format: Structure That Follows the Decision',
  intro:
    'There is no official business proposal format. No statute defines one, and no two industries agree on it. What exists is a widely used convention, and a more useful principle underneath it: the order of your sections should follow the order in which your client makes their decision. Get that right and the format questions mostly answer themselves. This guide covers the standard structure, when to deviate from it, and the layout rules that decide whether the document is actually read.',
  sections: [
    {
      heading: 'The conventional structure',
      body: [
        'Most business proposals use some version of this sequence. Treat it as a starting point rather than a rule, and cut anything that does not apply.',
      ],
      table: {
        head: ['Section', 'What it does', 'Include when'],
        rows: [
          ['Title page', 'Identifies the document once forwarded', 'Always'],
          ['Table of contents', 'Navigation', 'Over about six pages'],
          ['Executive summary', 'Carries the argument alone', 'Always'],
          ['Problem statement', 'Proves you understood', 'Always'],
          ['Proposed solution', 'Your approach', 'Always'],
          ['Deliverables', 'What they receive', 'Always'],
          ['Timeline', 'When, with milestones', 'Always'],
          ['Pricing', 'What it costs', 'Almost always'],
          ['Assumptions and exclusions', 'Bounds the scope', 'Always'],
          ['Credentials', 'Evidence you can do it', 'When you are unknown to them'],
          ['Terms and acceptance', 'How to say yes', 'Always'],
        ],
      },
    },
    {
      heading: 'Order the sections around the decision, not the convention',
      body: [
        'The conventional order suits a client who has already decided to buy and is choosing a supplier. It suits other situations badly.',
        'If the client does not yet believe they have a problem, the problem section has to come first and has to be substantial. Leading with your solution to a problem they have not accepted is why unsolicited proposals get deleted.',
        'If price is the client\'s dominant concern and they have said so, putting pricing on page seven is an obstacle course. Move it forward. Clients who are budget-driven will find it anyway, and making them hunt reads as evasive.',
        'If you are unknown to the client and the work is high-risk, credentials move up, because nothing else you say carries weight until they believe you can do it. If you are already their supplier, credentials can go in an appendix or be cut.',
        'The test is simple: what does this client need to believe, in what order, to say yes? Write the sections in that order.',
      ],
    },
    {
      heading: 'The executive summary is written last and read first',
      body: [
        'This is the most consequential formatting rule in the document, and the one most often broken.',
        'The executive summary appears first and must work as a standalone document, because in many organisations it is the only part the actual decision-maker reads — the rest goes to whoever is doing the evaluation. It should state the problem, your approach, the outcome and the price, in about a page.',
        'It must be written after everything else. Written first, it becomes an introduction to a document you have not written yet, which is why so many summaries describe what the proposal contains rather than what you are proposing. "This proposal outlines our approach to..." is the signature of a summary written first.',
        'A good test: delete every other section and hand someone only the summary. If they can tell you what is being proposed, for how much, and why it is a good idea, it works.',
      ],
    },
    {
      heading: 'Formatting rules that affect whether it gets read',
      body: [
        'Typography in a proposal is not decoration; it is what makes a document skimmable by someone who will not read every word.',
        'Body text at 11 or 12 point, headings at 14 to 16. Smaller body text to fit more on a page is a false economy — the reader just skips more.',
        'Use real heading styles rather than bold text, so the document generates a navigable structure and a working table of contents. This matters for accessibility too: screen readers navigate by heading structure, and some public sector buyers have accessibility requirements for submitted documents.',
        'Keep paragraphs to three or four lines. Dense blocks get skipped, and the information in them is effectively not in the proposal.',
        'Leave whitespace. A page at 60% density reads as considered; a page at 90% reads as a wall and signals that you did not edit.',
        'Use your branding sparingly and consistently — logo, one accent colour, one typeface. Heavy design in a proposal tends to read as compensating.',
      ],
      list: [
        'Body 11–12pt, headings 14–16pt, one typeface throughout',
        'Real heading styles, not bold paragraphs, so structure is navigable',
        'Paragraphs of three or four lines maximum',
        'Page numbers and your client\'s name in the footer of every page',
        'Pricing in a table, never in prose',
        'Consistent number and date formats, especially currency',
        'One accent colour, used for headings and table rules only',
        'Enough contrast that it prints legibly in greyscale',
      ],
    },
    {
      heading: 'The pricing section deserves its own rules',
      body: [
        'Clients spend more time on this page than any other, and it is where formatting errors are least forgivable.',
        'Always a table, never a paragraph. Line item, quantity where relevant, unit price, line total, then subtotal, tax and total. A price buried in prose looks like it is hiding something.',
        'Label the tax correctly for the jurisdiction — VAT, GST, sales tax — with the rate stated. A client who cannot see the tax treatment cannot approve the spend.',
        'State the currency explicitly rather than relying on a symbol, particularly for cross-border work where a dollar sign is ambiguous.',
        'If there are options, separate them visually from the core scope and make clear which figures are included in the headline total. Ambiguity here produces a client who believes they are buying more than you have priced.',
        'Add a validity date to the pricing itself, not just the document, so it is unambiguous what expires.',
      ],
    },
    {
      heading: 'File format and delivery',
      body: [
        'Send a PDF. It renders identically everywhere, prints correctly, cannot be casually edited, and is what procurement systems expect.',
        'Avoid sending editable Word documents unless specifically asked. Beyond formatting drift, an editable proposal creates genuine ambiguity about which version was agreed, and that ambiguity always resolves in favour of whoever has the better records.',
        'Name the file so it survives being downloaded into a folder of thirty others: Proposal-YourCompany-ClientName-2026-08.pdf. "Proposal_final_v3.pdf" is not a filename you want on a decision-maker\'s desktop.',
        'Check the PDF opens correctly on a phone before sending. A significant share of proposals are first opened on mobile, and a layout that requires horizontal scrolling loses the reader immediately.',
      ],
    },
  ],
  answersHeading: 'Proposal format questions, answered',
  answers: [
    {
      question: 'How do you format a business proposal?',
      answer:
        'Body text at 11 or 12 point with headings at 14 to 16, one typeface throughout, real heading styles rather than bold paragraphs, paragraphs of three or four lines, pricing in a table, and enough whitespace that the page does not read as a wall.',
    },
    {
      question: 'What are the seven parts of a business proposal?',
      answer:
        'Commonly: title page, executive summary, problem statement, proposed solution, deliverables and timeline, pricing, and terms with an acceptance section. Assumptions, exclusions and credentials are frequently added, and RFP responses follow the buyer\'s structure instead.',
    },
    {
      question: 'What order should business proposal sections be in?',
      answer:
        'Follow the order in which this client needs convincing. If they do not yet accept the problem, lead with the problem. If price is their stated concern, move pricing forward. If they do not know you, credentials move up. The conventional order is a default, not a rule.',
    },
    {
      question: 'Should a business proposal be a Word document or a PDF?',
      answer:
        'Write it in whatever you like and send a PDF. It renders identically everywhere, prints correctly, cannot be casually altered, and avoids genuine ambiguity about which version was agreed — ambiguity that always resolves in favour of whoever kept better records.',
    },
    {
      question: 'Do I need a table of contents in a business proposal?',
      answer:
        'Over roughly six pages, yes, generated from real heading styles so it stays accurate through revisions. Under that it wastes a page. RFP responses often mandate one regardless of length, so check the stated requirements.',
    },
    {
      question: 'How should pricing be presented in a proposal?',
      answer:
        'Always as a table, never in prose: line item, quantity where relevant, unit price, line total, then subtotal, correctly labelled tax and total. State the currency explicitly, separate optional items visually from the core scope, and give the pricing its own validity date.',
    },
    {
      question: 'What font should a business proposal use?',
      answer:
        'Any standard readable typeface, used consistently, at 11 or 12 point for body text. The specific choice matters far less than consistency and size. Shrinking body text to fit more on a page is a false economy, because readers respond by skipping more.',
    },
    {
      question: 'Should a business proposal include images?',
      answer:
        'Only where they carry information prose cannot. A process diagram, a timeline chart or an annotated example earns its space. Decorative stock photography does not, and in a proposal it tends to read as padding rather than polish.',
    },
  ],
  faqs: [
    {
      question: 'What is the standard business proposal format?',
      answer:
        'There is no official standard. The widely used convention is title page, executive summary, problem statement, proposed solution, deliverables, timeline, pricing, assumptions and exclusions, credentials, then terms and acceptance. Adapt the order to how your specific client will make the decision.',
    },
    {
      question: 'What order should business proposal sections go in?',
      answer:
        'Follow the order in which the client needs to be convinced. If they do not yet accept the problem exists, lead with the problem. If price is their stated primary concern, move pricing forward. If they do not know you, credentials move up. The convention is a default, not a requirement.',
    },
    {
      question: 'Should a business proposal be a document or a slide deck?',
      answer:
        'A document if it will be read alone, a deck if you will present it live. A deck designed for narration reads as thin without the narrator, and a dense document is a poor presentation. If it will be both, send the document and present from a summary.',
    },
    {
      question: 'What font and size should a business proposal use?',
      answer:
        'A standard readable typeface at 11 or 12 point for body text, with headings at 14 to 16. Use one typeface throughout. The goal is that a busy reader can skim headings and still follow the argument, which matters far more than the specific font.',
    },
  ],
  ctaHeading: 'Format your proposal properly',
  ctaText: 'Create a Proposal Free',
  ctaLink: '/?mode=proposal',
  crossLinks: [
    { title: 'How to Write a Business Proposal', description: 'What to say in each section.', href: '/how-to-write-a-business-proposal' },
    { title: 'Free Business Proposal Templates', description: 'Choosing and adapting a template.', href: '/free-business-proposal-template' },
    { title: 'Free Proposal Templates', description: '15 layouts with calculated pricing.', href: '/proposal-templates' },
  ],
};
