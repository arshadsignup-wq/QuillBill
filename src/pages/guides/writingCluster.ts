import type { GuideConfig } from './types';

/**
 * The "quotation" homonym cluster.
 *
 * These target keywords where the searcher means the English word rather than
 * a priced offer: punctuation, inspirational quotes, quote graphics. They sit
 * on this site because "quotation" is ambiguous and the disambiguation is
 * genuinely useful — but they are informational only, and are not expected to
 * convert. Do not add hard sales CTAs to them.
 */

export const quotationMarksGuide: GuideConfig = {
  slug: 'quotation-marks',
  cluster: 'Writing',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'How quotation marks work in American and British style, where the punctuation goes, and the rules for quoting inside business documents.',
  keyTakeaways: [
    'American style puts commas and periods inside the closing mark; British style places them by sense.',
    'Question and exclamation marks go inside only when they belong to the quoted words.',
    'Colons and semicolons go outside the closing quotation mark in both styles.',
    'A quotation in the pricing sense is a different thing entirely — no quotation marks involved.',
  ],
  seo: {
    title: 'Quotation Marks: Rules, Examples and US vs UK Style',
    description:
      'How to use quotation marks correctly: single vs double, where commas and periods go in US and UK style, quoting within quotes, and scare quotes explained.',
    canonical: '/quotation-marks',
  },
  h1: 'Quotation Marks: The Rules, With Examples',
  intro:
    'Quotation marks are the punctuation used to enclose someone else\'s exact words, the titles of short works, and words being discussed as words. Most of the confusion around them comes from one thing: American and British conventions disagree about where other punctuation goes, and both are correct in their own context. This guide sets out both, with examples, and covers the cases people actually get wrong.',
  sections: [
    {
      heading: 'First, a disambiguation',
      body: [
        'The word "quotation" carries two unrelated meanings, and search results for it mix them freely.',
        'In writing, a quotation is a passage of someone else\'s words reproduced exactly, and quotation marks are the punctuation that encloses it. That is what this page is about.',
        'In business, a quotation is a formal offer of a price for goods or services, sent before work begins. It has nothing to do with punctuation, and it is not written inside quotation marks. If that is what you were looking for, [how to write a quotation](/how-to-write-a-quotation) covers it, and [invoice vs quotation](/invoice-vs-quotation) explains where it sits relative to an invoice.',
      ],
    },
    {
      heading: 'What quotation marks are for',
      body: [
        'There are four established uses, and they are worth separating because the rules differ slightly.',
        'Direct quotation: reproducing someone\'s exact words. She said, "The delivery arrives Thursday." If you paraphrase rather than reproduce, no quotation marks are used — she said the delivery arrives Thursday.',
        'Titles of short works: articles, chapters, songs, poems and episodes take quotation marks, while longer standalone works — books, albums, films, journals — are italicised instead.',
        'Words as words: when discussing a term rather than using it. The word "invoice" derives from the French envoi.',
        'Scare quotes: signalling doubt, irony or distance from a term. The software\'s "free" plan expires after 14 days. Use these sparingly; in professional writing they read as sarcastic quickly, and in a business document they can imply an accusation you did not intend.',
      ],
    },
    {
      heading: 'Single or double?',
      body: [
        'American English uses double quotation marks for a first-level quotation and single marks for a quotation inside it. British English traditionally reverses this, using single marks first and double marks for the nested quotation — though many British publishers now use doubles, so consistency within a document matters more than picking a side.',
        'American: "He told me the client said \'send it Friday,\' so I did," she explained.',
        'British: \'He told me the client said "send it Friday", so I did,\' she explained.',
        'The practical rule for business writing: pick the convention of the country you are writing for, apply it to every document, and never mix the two in one piece. Inconsistency is far more noticeable to a reader than either convention.',
      ],
    },
    {
      heading: 'Where the other punctuation goes',
      body: [
        'This is the part that causes most of the errors, and it is where the two conventions genuinely diverge.',
        'Commas and periods. In American style they go inside the closing quotation mark, whether or not they belong to the quoted material. In British style they go inside only if they were part of the original quotation, and outside if they belong to the surrounding sentence. This British approach is sometimes called logical punctuation, and it is also the convention used in most technical writing regardless of country, because placing a stray period inside quoted code or a quoted filename changes its meaning.',
        'Question marks and exclamation marks. Both conventions agree here. They go inside if they belong to the quoted words, and outside if they belong to your sentence. Compare: She asked, "Has the invoice been paid?" against Did she really say "the invoice has been paid"?',
        'Colons and semicolons. Both conventions place these outside the closing quotation mark. He described it as "provisional"; the client read it as final.',
      ],
      table: {
        head: ['Punctuation', 'American style', 'British style'],
        rows: [
          ['Comma', 'Inside: "yes," he said', 'By sense: \'yes\', he said'],
          ['Period / full stop', 'Inside: called it "final."', 'By sense: called it \'final\'.'],
          ['Question mark', 'By sense', 'By sense'],
          ['Exclamation mark', 'By sense', 'By sense'],
          ['Colon', 'Outside', 'Outside'],
          ['Semicolon', 'Outside', 'Outside'],
          ['First-level marks', 'Double "…"', "Single '…' traditionally"],
          ['Nested quotation', "Single '…'", 'Double "…" traditionally'],
        ],
      },
    },
    {
      heading: 'Capitalisation and attribution',
      body: [
        'Capitalise the first word of a complete quoted sentence, even when it appears mid-sentence: The supplier replied, "We can deliver on Tuesday."',
        'Do not capitalise when you are quoting a fragment that flows into your own sentence: The supplier described the delay as "entirely outside our control."',
        'When the attribution interrupts a single quoted sentence, the second part does not take a capital: "We can deliver," he said, "but not before Tuesday."',
        'When the attribution separates two complete quoted sentences, the second does: "We can deliver," he said. "Tuesday is the earliest."',
      ],
    },
    {
      heading: 'Longer quotations and multiple paragraphs',
      body: [
        'A quotation running to more than about forty words is usually set as a block quotation instead: indented, on its own lines, and without quotation marks at all. The indentation does the work the marks would have done, so adding both is redundant.',
        'When quoted material runs across several paragraphs and you are not using a block quotation, open each new paragraph with quotation marks but close only at the very end of the final paragraph. The unclosed marks signal to the reader that the same speaker is continuing.',
        'If you alter a quotation, show it. Square brackets mark your insertions or changes — "[the client] approved it" — and an ellipsis marks an omission. Altering a quotation silently is a serious error in any context where the quotation matters, which in business correspondence is most of them.',
      ],
    },
    {
      heading: 'Quotation marks in business documents',
      body: [
        'A few practical points where this intersects with commercial writing.',
        'Avoid scare quotes in contracts, proposals and invoices. Writing that the client requested "urgent" delivery reads as though you are disputing that it was urgent, which may not be what you meant and is exactly what it will look like if the document is later scrutinised.',
        'When quoting a specification or a client\'s instruction into a proposal or a quotation, reproduce it exactly and mark any alteration with brackets. Paraphrasing a requirement while presenting it as a quotation is how scope disputes begin.',
        'Straight marks versus curly ones matter less than consistency, but be careful with automatic conversion. Word processors convert straight quotes to curly ones, which is fine in prose and breaks things in code, filenames and some accounting import formats.',
        'In an invoice or quotation line item, quotation marks are almost never needed. If you find yourself using them to signal that a description is approximate, the description needs rewriting instead — vague line items are the most common cause of queried invoices, as covered in [how to create an invoice](/how-to-create-an-invoice).',
      ],
    },
  ],
  answersHeading: 'Quotation mark questions, answered',
  answers: [
    {
      question: 'What are quotation marks used for?',
      answer:
        'Four things: enclosing someone\'s exact words, marking the titles of short works such as articles and songs, discussing a word as a word, and signalling irony or doubt about a term. Paraphrased speech takes no quotation marks.',
    },
    {
      question: 'When do you use single quotation marks?',
      answer:
        'In American English, for a quotation nested inside another quotation. In traditional British English, for the first-level quotation, with doubles for the nested one. Many British publishers now use doubles first, so consistency within a document matters more than the convention you pick.',
    },
    {
      question: 'Do periods go inside quotation marks?',
      answer:
        'In American English, yes, always, whether or not the period belonged to the quoted material. In British English it goes inside only if it was part of the original quotation and outside if it belongs to your sentence — an approach sometimes called logical punctuation.',
    },
    {
      question: 'Where do question marks go with quotation marks?',
      answer:
        'Inside if the question belongs to the quoted words, outside if the question is yours. Both American and British conventions agree here. She asked, "Has it shipped?" against Did he really call it "final"? The same rule governs exclamation marks.',
    },
    {
      question: 'Do you use quotation marks for book titles?',
      answer:
        'No. Longer standalone works — books, films, albums, newspapers, journals — take italics. Quotation marks are for shorter pieces contained within them: articles, chapters, songs, poems and episodes. The distinction is whole work versus part of a work.',
    },
    {
      question: 'How do you quote within a quote?',
      answer:
        'Alternate the mark types. In American style the outer quotation takes doubles and the inner takes singles; in traditional British style the reverse. If a third level is somehow needed, alternate again, though at that point rewriting the sentence is usually better.',
    },
    {
      question: 'What are scare quotes?',
      answer:
        'Quotation marks used to signal irony, doubt or distance from a word rather than to quote anyone — a "free" plan that costs money after a trial. They are legitimate but easily overused, and in contracts or proposals they can imply an accusation you did not intend.',
    },
    {
      question: 'Do you capitalise the first word after a quotation mark?',
      answer:
        'Capitalise it when the quotation is a complete sentence, even mid-sentence. Do not capitalise a fragment that flows into your own sentence. When an attribution interrupts one quoted sentence, the continuation stays lowercase: "We can deliver," he said, "but not before Tuesday."',
    },
    {
      question: 'How do you punctuate a quotation longer than one paragraph?',
      answer:
        'Open each new paragraph with quotation marks but close only at the end of the final one, which signals the same speaker is continuing. Beyond about forty words, set it as an indented block quotation instead and drop the marks entirely.',
    },
    {
      question: 'What is the difference between quotation marks and a business quotation?',
      answer:
        'They share only the word. Quotation marks are punctuation enclosing quoted words. A business quotation is a priced offer for goods or services sent before work begins, written as an ordinary document with no punctuation marks involved.',
    },
  ],
  faqs: [
    {
      question: 'Do commas go inside or outside quotation marks?',
      answer:
        'In American English, inside, whether or not the comma was part of the original quotation. In British English, inside only if it belonged to the quoted material and outside if it belongs to your own sentence. Choose the convention for your audience and apply it consistently.',
    },
    {
      question: 'Should I use single or double quotation marks?',
      answer:
        'Double marks are standard in American English, with single marks for a quotation nested inside another. British English traditionally does the reverse, though many British publishers now use doubles. Consistency within a document matters more than the choice itself.',
    },
    {
      question: 'Do question marks go inside quotation marks?',
      answer:
        'Only when the question belongs to the quoted words: She asked, "Has it shipped?" If the question is yours and the quoted part is not itself a question, the mark goes outside: Did he really call it "final"? Both American and British style agree on this.',
    },
    {
      question: 'When should I use italics instead of quotation marks for a title?',
      answer:
        'Italics for longer standalone works — books, films, albums, newspapers, journals. Quotation marks for shorter pieces contained within them — articles, chapters, songs, poems, episodes. The distinction is whole work versus part of a work.',
    },
    {
      question: 'Is a business quotation written in quotation marks?',
      answer:
        'No. A business quotation is a priced offer for goods or services, and the word shares nothing with the punctuation beyond its spelling. The document is simply headed Quotation or Quote — no punctuation marks are involved.',
    },
  ],
  sources: [
    {
      label: 'Quotation marks: general guidelines',
      publisher: 'Purdue Online Writing Lab',
      url: 'https://owl.purdue.edu/owl/general_writing/punctuation/quotation_marks/index.html',
    },
    {
      label: 'Quotation marks and direct quotations',
      publisher: 'Purdue Online Writing Lab',
      url: 'https://owl.purdue.edu/owl/general_writing/punctuation/quotation_marks/quotation_marks_with_fiction.html',
    },
    {
      label: 'Quotation marks',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Quotation_marks_in_English',
    },
  ],
  ctaHeading: 'Looking for a price quotation instead?',
  ctaText: 'See How to Write a Quotation',
  ctaLink: '/how-to-write-a-quotation',
  crossLinks: [
    { title: 'How to Write a Quotation', description: 'The business kind: pricing, scope and validity.', href: '/how-to-write-a-quotation' },
    { title: 'Invoice vs Quotation', description: 'Two documents that are constantly confused.', href: '/invoice-vs-quotation' },
    { title: 'Quotes About Change', description: 'The inspirational kind of quotation.', href: '/quotations-about-change' },
  ],
};

export const quotationsAboutChangeGuide: GuideConfig = {
  slug: 'quotations-about-change',
  cluster: 'Writing',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'Quotations about change, grouped by what you actually need them for, with attributions checked and the commonly misattributed ones flagged.',
  keyTakeaways: [
    'Several of the most-shared change quotations are misattributed, including one usually given to Darwin.',
    'Pick a quotation by the job it is doing — opening a talk, closing a memo, steadying yourself.',
    'Attribute accurately or not at all; a wrong attribution undermines the point you are making.',
    'In business communication, a quotation supports an argument. It cannot replace one.',
  ],
  seo: {
    title: 'Quotations About Change (With Accurate Attributions)',
    description:
      'Quotations about change grouped by purpose — leading it, accepting it, acting on it — with sources checked and commonly misattributed quotes flagged.',
    canonical: '/quotations-about-change',
  },
  h1: 'Quotations About Change, With the Attributions Checked',
  intro:
    'Quotations about change circulate more than almost any other category, and a striking number of them are attributed to the wrong person. This page collects the ones worth using, grouped by what you actually need them for, and flags the well-known ones whose usual attribution does not hold up. If you are going to quote someone in a presentation or a piece of writing, getting the name right is the minimum.',
  sections: [
    {
      heading: 'On change being constant',
      body: [
        'These suit openings, where you need to establish that the situation is not stable and standing still is itself a choice.',
        '"To exist is to change, to change is to mature, to mature is to go on creating oneself endlessly." — Henri Bergson',
        '"It is change, continuing change, inevitable change, that is the dominant factor in society today." — Isaac Asimov',
        '"Change is the only constant. Hanging on is the only sin." — Denise McCluggage',
        '"The only way to make sense out of change is to plunge into it, move with it and join the dance." — Alan Watts',
      ],
    },
    {
      heading: 'On acting rather than waiting',
      body: [
        'These work at the end of a piece, where the reader needs to do something rather than agree with something.',
        '"If you don\'t like something, change it. If you can\'t change it, change your attitude." — Maya Angelou',
        '"Not everything that is faced can be changed. But nothing can be changed until it is faced." — James Baldwin',
        '"Never doubt that a small group of thoughtful, committed citizens can change the world. Indeed, it is the only thing that ever has." — Margaret Mead',
      ],
    },
    {
      heading: 'Widely shared, wrongly attributed',
      body: [
        'These are the ones to be careful with. Each is repeated constantly with an attribution that does not survive checking.',
        '"It is not the strongest of the species that survives, nor the most intelligent, but the one most responsive to change." This is attributed to Charles Darwin on a very large number of slides and it is not his. It appears to originate with Leon C. Megginson, a management professor, paraphrasing Darwin in a 1963 address. It is a reasonable paraphrase of natural selection; it is not a quotation from Darwin, and citing it as one in front of an audience that knows better is costly.',
        '"Be the change you wish to see in the world." Almost universally given to Mahatma Gandhi, and not found in his collected writings in that form. His actual related remark is longer and less quotable: that if we could change ourselves, the tendencies in the world would also change. The pithy version appears to be a later condensation.',
        '"Insanity is doing the same thing over and over and expecting different results." Regularly attributed to Albert Einstein, with no evidence he said or wrote it. Its documented appearances are much later and unrelated to him.',
        'The general lesson is practical: if a quotation is unusually neat and attributed to a very famous person, that combination is itself a reason to check before using it. Quote Investigator and Wikiquote both track origins carefully and are quicker to consult than the reputational cost of getting it wrong.',
      ],
    },
    {
      heading: 'Using a quotation well',
      body: [
        'A few rules that apply whether you are writing a keynote or an internal memo.',
        'Use one. A piece with three quotations reads as though the writer had nothing of their own to say, and each additional one weakens the last.',
        'Put it where it does work, not where it decorates. A quotation at the very start often delays your actual point; the stronger position is usually just after you have made a claim, where it functions as support.',
        'Say something after it. Quotations do not conclude arguments — dropping one and moving on leaves the reader to do the work. One sentence connecting it to your specific situation is what makes it earn its place.',
        'Attribute accurately or drop the attribution. If you cannot verify who said it, either leave the name off or do not use it. In a business context, a confidently wrong attribution undermines the credibility of everything around it.',
      ],
      list: [
        'One quotation per piece, in almost all cases',
        'Placed after your claim, as support, rather than before it as decoration',
        'Followed by a sentence tying it to your actual situation',
        'Attributed accurately, or not attributed at all',
        'Checked against Wikiquote or Quote Investigator if it seems too neat',
        'Reproduced exactly, with any alteration marked in square brackets',
      ],
    },
    {
      heading: 'A note on why this page is here',
      body: [
        'QuillBill is a tool for making invoices, quotations and proposals, where "quotation" means a priced offer rather than a memorable line. The two senses of the word share a page in search results constantly, so this page exists for people who meant this one.',
        'If you arrived looking for the business kind, [how to write a quotation](/how-to-write-a-quotation) is the guide you want. On the punctuation, [quotation marks](/quotation-marks) covers the rules.',
      ],
    },
  ],
  answersHeading: 'Questions about quotations on change',
  answers: [
    {
      question: 'What is a good short quotation about change?',
      answer:
        'Denise McCluggage\'s "Change is the only constant. Hanging on is the only sin." is short, correctly attributed and rarely overused. Maya Angelou\'s "If you don\'t like something, change it. If you can\'t change it, change your attitude." works better when you need action rather than acceptance.',
    },
    {
      question: 'Who said "change is the only constant"?',
      answer:
        'The full phrasing above is Denise McCluggage\'s. The underlying idea is much older and is usually traced to Heraclitus, though the neat English wording attributed to him is a paraphrase rather than a translation of anything he wrote.',
    },
    {
      question: 'What did Darwin actually say about adaptability?',
      answer:
        'Not the famous line. "It is not the strongest of the species that survives, nor the most intelligent, but the one most responsive to change" traces to Leon C. Megginson, a management professor paraphrasing Darwin in 1963. Attribute it to him or paraphrase it yourself.',
    },
    {
      question: 'Did Gandhi really say "be the change"?',
      answer:
        'Not in that form. It does not appear in his collected writings as commonly quoted. A longer related remark of his makes a similar point about changing oneself first. The condensed version appears to be a later paraphrase that spread independently.',
    },
    {
      question: 'How do I check whether a quotation is genuine?',
      answer:
        'Wikiquote maintains sourced and disputed sections for most well-known figures, and Quote Investigator traces origins in detail. A useful heuristic: a very neat line attributed to a very famous person is exactly the combination most likely to be misattributed.',
    },
    {
      question: 'How do I use a quotation in a presentation?',
      answer:
        'Use one, place it after the claim it supports rather than before as decoration, and say something immediately afterwards connecting it to your specific situation. A quotation left to stand alone leaves the audience to do the work of making it relevant.',
    },
    {
      question: 'How many quotations should I use in a piece of writing?',
      answer:
        'Usually one. Quotations borrow authority, and borrowing repeatedly suggests you have none of your own. The exception is writing where the quotations are the subject rather than the support, such as a collection or a piece analysing them.',
    },
    {
      question: 'Is it legal to use a quotation in commercial material?',
      answer:
        'Short quotations with attribution are generally fine. Longer passages from copyrighted work are not, and song lyrics in particular are aggressively enforced even at very short lengths. Public domain sources and pre-twentieth-century writing carry far less risk.',
    },
  ],
  faqs: [
    {
      question: 'Did Darwin say the most adaptable survive?',
      answer:
        'No. The line about the most responsive to change surviving is not in Darwin\'s work. It traces to Leon C. Megginson, a management professor paraphrasing Darwin in 1963. It is a fair summary of the idea and a false quotation, so attribute it to Megginson or paraphrase it yourself.',
    },
    {
      question: 'Did Gandhi say "be the change you wish to see in the world"?',
      answer:
        'Not in that form. It does not appear in his collected writings as usually quoted. A related but longer remark of his makes a similar point about changing oneself. The condensed version appears to be a later paraphrase that spread on its own.',
    },
    {
      question: 'What is a good quotation to open a presentation about change?',
      answer:
        'Something that sets up your argument rather than substitutes for it. The Asimov and Bergson lines work for establishing that change is continuous; the Baldwin line works better if you need the audience to confront something specific. Pick for the job, and follow it immediately with your own point.',
    },
  ],
  sources: [
    { label: 'Charles Darwin: disputed and misattributed quotations', publisher: 'Wikiquote', url: 'https://en.wikiquote.org/wiki/Charles_Darwin' },
    { label: 'Mahatma Gandhi: disputed and misattributed quotations', publisher: 'Wikiquote', url: 'https://en.wikiquote.org/wiki/Mohandas_Karamchand_Gandhi' },
    { label: 'Quote Investigator', publisher: 'Quote Investigator', url: 'https://quoteinvestigator.com/' },
  ],
  ctaHeading: 'Looking for a price quotation?',
  ctaText: 'See How to Write a Quotation',
  ctaLink: '/how-to-write-a-quotation',
  crossLinks: [
    { title: 'Quotation Marks', description: 'The punctuation rules, US and UK.', href: '/quotation-marks' },
    { title: 'How to Write a Quotation', description: 'The business kind: a priced offer.', href: '/how-to-write-a-quotation' },
    { title: 'Random Quote Generators', description: 'Tools that serve quotations at random.', href: '/random-quote-generator' },
  ],
};

export const randomQuoteGeneratorGuide: GuideConfig = {
  slug: 'random-quote-generator',
  cluster: 'Writing',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'What random quote generators and quote meme makers do, the attribution and licensing problems they create, and how to build one yourself.',
  keyTakeaways: [
    'Random quote generators mostly draw on the same few uncurated public datasets.',
    'Those datasets carry a high misattribution rate, which the tools reproduce faithfully.',
    'Quote images for commercial use raise font licensing and image rights issues people miss.',
    'A basic one is about twenty lines of JavaScript — a good first project.',
  ],
  seo: {
    title: 'Random Quote Generators: How They Work and What to Watch',
    description:
      'How random quote generators and quote meme makers work, why their attributions are often wrong, the licensing traps in quote images, and how to build your own.',
    canonical: '/random-quote-generator',
  },
  h1: 'Random Quote Generators: How They Work, and Their Attribution Problem',
  intro:
    'A random quote generator serves an inspirational or humorous quotation each time you load it, usually from a database of a few thousand. A quote meme generator does the same thing and renders the result onto an image. Both are simple tools with one significant and under-discussed flaw: the datasets underneath them are largely uncurated, and the misattributions in those datasets get reproduced everywhere the tools are used. This page covers how they work, what to watch for, and how to build one.',
  sections: [
    {
      heading: 'Another disambiguation first',
      body: [
        'As with the rest of this small cluster: a "quotation generator" can mean two completely different things, and search results mix them.',
        'This page is about tools that serve quotations in the sense of memorable sayings. If you are looking for a tool that produces a priced business quotation for a client, that is [the quotation generator](/quotation-generator), and [what to look for in a quote tool](/quotation-generator-guide) covers choosing one.',
      ],
    },
    {
      heading: 'How they work',
      body: [
        'Almost all of them are the same shape. A JSON file or database holds a few thousand quotation-and-author pairs. The page picks an index at random and renders it. Some call a public quotations API instead of shipping their own data, which changes where the data comes from but not what it is.',
        'A minority now generate quotations with a language model rather than retrieving them. These produce novel, plausible-sounding lines, which is fine when the point is a placeholder or a bit of fun, and actively bad when a real attribution is attached — a model asked for an inspirational quote by a named person will often invent one in their voice.',
        'Quote meme generators add a rendering step: the text is composited onto a background image on a canvas element, usually with a choice of fonts and overlays, and exported as a PNG. The generation is client-side in most cases, which is why they work quickly and without accounts.',
      ],
    },
    {
      heading: 'The attribution problem',
      body: [
        'This is the part worth knowing about, because it affects anyone who uses the output in public.',
        'The large open quotation datasets that most of these tools draw from were assembled by scraping quotation websites, which had themselves scraped other quotation websites. Nothing in that chain verifies that the person named ever said the words. Errors introduced decades ago propagate through every dataset built afterwards.',
        'The result is that misattributions are common and consistent. The lines about adaptability attributed to Darwin, about being the change attributed to Gandhi, and about insanity attributed to Einstein appear across most of these datasets, and none of the three attributions holds up. [Quotations about change](/quotations-about-change) covers those specific cases in more detail.',
        'The practical consequence: a quote generator is fine for personal use, ambient inspiration or placeholder text. If the output is going into a presentation, a client-facing document or anything published under your name, verify the attribution against Wikiquote or Quote Investigator first. The generator will not have.',
      ],
    },
    {
      heading: 'Licensing traps in quote images',
      body: [
        'Quote meme generators produce an image, and images have rights attached in ways plain text does not. Three issues catch people out, particularly when the output is used commercially.',
        'Fonts. A font licensed for personal use only cannot be used in a commercial graphic, and many attractive free fonts are personal-use-only. If the generator lets you pick fonts, it is generally not tracking what you are permitted to do with them.',
        'Background images. Stock photography in a meme generator may be licensed to the tool rather than to you, and "free to use in the editor" is not the same as "free to use in your advertising". Check the tool\'s terms specifically for commercial output.',
        'The quotation itself. Short quotations are usually fine to reproduce, but a substantial passage from a copyrighted work — song lyrics are the classic case — does not stop being copyrighted because it was pasted into a meme. Lyrics in particular are aggressively enforced.',
        'None of this matters for something you post to a personal account. All of it matters if the image is going on a product, an advertisement or a paid campaign.',
      ],
    },
    {
      heading: 'Building your own',
      body: [
        'A random quote generator is one of the better first programming projects, because it exercises data, state and rendering with nothing complicated in the way. The core is genuinely short.',
        'Keep an array of objects, each with a text and an author. On a button click, pick a random index and write the values into the DOM. That is the entire program.',
        'Two refinements make it noticeably better and are the interesting part of the exercise. First, avoid immediate repeats by remembering the last index and re-rolling if you draw it again — true randomness feels broken to users because it repeats more often than people expect. Second, shuffle the whole array once and step through it, reshuffling when you reach the end, which guarantees every quotation appears before any repeats.',
        'If you are sourcing data, curate a small set you have verified rather than importing a large uncurated one. A hundred quotations with correct attributions is a better tool than five thousand with a meaningful error rate, and it is a more defensible thing to publish.',
      ],
      list: [
        'Store quotations as objects with text, author and ideally a source reference',
        'Prevent immediate repeats by tracking the previous index',
        'Shuffle-and-step rather than re-rolling, if you want full coverage',
        'Verify attributions before adding them, not after someone corrects you',
        'Include the source work where you know it, not just the name',
        'If rendering to an image, check your font licence covers the intended use',
      ],
    },
    {
      heading: 'What these tools are genuinely good for',
      body: [
        'It is easy to be dismissive, so worth stating the legitimate uses. Placeholder text that is more pleasant than lorem ipsum. Ambient variety on a personal dashboard or new-tab page. A daily prompt for journalling or reflection, where the accuracy of the attribution genuinely does not matter. Teaching material for a first programming exercise.',
        'What they are not good for is sourcing a quotation to put in front of an audience or a client. For that, start from a curated collection with checked attributions and pick deliberately, rather than accepting whatever the shuffle produced.',
      ],
    },
  ],
  answersHeading: 'Random quote generator questions, answered',
  answers: [
    {
      question: 'What is a random quote generator?',
      answer:
        'A tool that displays a quotation chosen at random from a stored collection, usually a few thousand inspirational or humorous lines with author names attached. Some now generate novel quotations with a language model rather than retrieving stored ones.',
    },
    {
      question: 'How do I make a random quote generator in JavaScript?',
      answer:
        'Hold an array of objects with text and author properties, pick an index with Math.floor(Math.random() * array.length) on a button click, and write the values into the DOM. That is the whole program — roughly twenty lines including the markup.',
      detail:
        'Two refinements make it feel better: remember the previous index and re-roll if you draw it again, or shuffle the array once and step through it so every quotation appears before any repeat. True randomness repeats more often than users expect it to.',
    },
    {
      question: 'Where do quote generators get their quotes?',
      answer:
        'Mostly from open datasets assembled by scraping quotation websites, which had themselves scraped other quotation websites. Nothing in that chain verifies attribution, which is why the same misattributions appear consistently across almost every tool in this category.',
    },
    {
      question: 'Is there a free quote API?',
      answer:
        'Several public quotations APIs exist and are free for modest use. They are convenient but inherit the same attribution problem as the datasets behind them, so treat anything you intend to publish as unverified until you have checked it against a sourced reference.',
    },
    {
      question: 'What is a quote meme generator?',
      answer:
        'A tool that composites a quotation onto a background image with chosen fonts and styling, then exports it as a shareable picture. Most render in the browser using a canvas element, which is why they work quickly and generally need no account.',
    },
    {
      question: 'Can I use quote images commercially?',
      answer:
        'Check three things: your font licence, since many attractive free fonts are personal-use only; the background image rights, since stock inside an editor may be licensed to the tool rather than to you; and the quotation itself, since long extracts remain copyrighted.',
    },
    {
      question: 'What is the best random quote generator?',
      answer:
        'For personal use, any of them — the differences are cosmetic. If output will be published under your name, prefer a curated collection with sourced attributions over a large uncurated one. A hundred verified quotations beats five thousand unverified ones.',
    },
    {
      question: 'Is a random quotation generator the same as a quotation generator for business?',
      answer:
        'No, and the shared word causes constant confusion in search results. A random quotation generator serves memorable sayings. A business quotation generator produces a priced offer with line items, totals, tax and a validity date.',
    },
  ],
  faqs: [
    {
      question: 'Are the quotes in random quote generators accurate?',
      answer:
        'The wording is usually close to some circulating version; the attributions frequently are not. Most of these tools draw on open datasets assembled by scraping quotation sites, with no verification step anywhere in the chain. Check anything you intend to use publicly against Wikiquote or Quote Investigator.',
    },
    {
      question: 'Can I use a quote generator image commercially?',
      answer:
        'Check three things first: the font licence, since many free fonts are personal-use only; the background image rights, since stock in the editor may be licensed to the tool rather than to you; and the quotation itself, since long extracts from copyrighted works, especially song lyrics, remain protected.',
    },
    {
      question: 'How do I build a random quote generator?',
      answer:
        'Hold an array of objects with text and author, pick a random index on a button click, and write the values into the page. Track the previous index to avoid immediate repeats, or shuffle the array and step through it so every quotation appears before any repeat.',
    },
    {
      question: 'Is a random quotation generator the same as a business quotation generator?',
      answer:
        'No, and the shared word causes constant confusion. A random quotation generator serves memorable sayings. A business quotation generator produces a priced offer for a client, with line items, totals, tax and a validity date. They have nothing in common but the noun.',
    },
  ],
  sources: [
    { label: 'Quote Investigator', publisher: 'Quote Investigator', url: 'https://quoteinvestigator.com/' },
    { label: 'Wikiquote', publisher: 'Wikimedia Foundation', url: 'https://en.wikiquote.org/' },
  ],
  ctaHeading: 'Need a business quotation instead?',
  ctaText: 'Open the Quotation Generator',
  ctaLink: '/quotation-generator',
  crossLinks: [
    { title: 'Quotations About Change', description: 'A curated set, attributions checked.', href: '/quotations-about-change' },
    { title: 'Quotation Marks', description: 'The punctuation, US and UK style.', href: '/quotation-marks' },
    { title: 'Quotation Generator Guide', description: 'The business kind of quote tool.', href: '/quotation-generator-guide' },
  ],
};
