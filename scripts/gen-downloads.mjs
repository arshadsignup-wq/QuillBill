/**
 * Generates the downloadable invoice and quotation templates.
 *
 * Most people searching "free invoice template" want a file they can keep and
 * fill in, not a web app. The site had fifteen on-screen layouts and zero
 * files. These are real .docx and .xlsx documents — the spreadsheets carry live
 * formulas so the totals recalculate as the user edits them.
 *
 * Run as part of the build; output lands in dist/downloads/.
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { docx, xlsx } from './lib/ooxml.mjs';

const { para, table, row, cell } = docx;

const outDir = process.argv[2] ?? 'dist';
const dir = join(outDir, 'downloads');
mkdirSync(dir, { recursive: true });

const BLANK = '';

function wordDocument({ heading, numberLabel, dateLabel, thirdLabel, terms, closing }) {
  return docx([
    para(heading, { bold: true, size: 44, after: 240 }),
    table([
      row([cell('From', { bold: true, width: 4680 }), cell('To', { bold: true, width: 4680 })]),
      row([
        cell('[Your business name]\n[Address]\n[Email]  [Phone]\n[Tax / VAT number]', { width: 4680 }),
        cell('[Client business name]\n[Address]\n[Email]  [Phone]', { width: 4680 }),
      ]),
    ]),
    para(BLANK, { after: 200 }),
    table([
      row([
        cell(numberLabel, { bold: true, width: 3120 }),
        cell(dateLabel, { bold: true, width: 3120 }),
        cell(thirdLabel, { bold: true, width: 3120 }),
      ]),
      row([cell('[001]', { width: 3120 }), cell('[  /  /    ]', { width: 3120 }), cell('[  /  /    ]', { width: 3120 })]),
    ]),
    para(BLANK, { after: 200 }),
    table([
      row([
        cell('Description', { bold: true, width: 4200 }),
        cell('Qty', { bold: true, width: 900, align: 'right' }),
        cell('Unit', { bold: true, width: 1060 }),
        cell('Rate', { bold: true, width: 1600, align: 'right' }),
        cell('Amount', { bold: true, width: 1600, align: 'right' }),
      ]),
      ...Array.from({ length: 8 }, () =>
        row([
          cell(BLANK, { width: 4200 }),
          cell(BLANK, { width: 900, align: 'right' }),
          cell(BLANK, { width: 1060 }),
          cell(BLANK, { width: 1600, align: 'right' }),
          cell(BLANK, { width: 1600, align: 'right' }),
        ]),
      ),
      row([
        cell(BLANK, { width: 6160 }),
        cell(BLANK, { width: 1600 }),
        cell('Subtotal', { bold: true, width: 1600, align: 'right' }),
        cell(BLANK, { width: 1600, align: 'right' }),
      ]),
      row([
        cell(BLANK, { width: 6160 }),
        cell(BLANK, { width: 1600 }),
        cell('Discount', { bold: true, width: 1600, align: 'right' }),
        cell(BLANK, { width: 1600, align: 'right' }),
      ]),
      row([
        cell(BLANK, { width: 6160 }),
        cell(BLANK, { width: 1600 }),
        cell('Tax (   %)', { bold: true, width: 1600, align: 'right' }),
        cell(BLANK, { width: 1600, align: 'right' }),
      ]),
      row([
        cell(BLANK, { width: 6160 }),
        cell(BLANK, { width: 1600 }),
        cell('Total', { bold: true, width: 1600, align: 'right' }),
        cell(BLANK, { width: 1600, align: 'right' }),
      ]),
    ]),
    para(BLANK, { after: 240 }),
    para(terms, { bold: true, size: 20, after: 80 }),
    para('[Payment terms, for example: payment due within 30 days of the invoice date.]', { after: 80 }),
    para('[Bank name, account number, sort code / routing number, IBAN, SWIFT.]', { after: 240 }),
    para(closing, { size: 18 }),
  ]);
}

function spreadsheet({ sheetName, numberLabel, dateLabel, thirdLabel }) {
  const rows = [];
  // Row numbers are derived from the array as it is built rather than written
  // as constants. Hard-coding them put every formula one row above the cell it
  // was meant to reference, so the subtotal summed the header.
  const push = (cells = []) => rows.push(cells);
  const rowNum = () => rows.length; // 1-based number of the row just pushed

  push([sheetName.toUpperCase()]);
  push();
  push(['From', null, null, 'To']);
  push(['[Your business name]', null, null, '[Client business name]']);
  push(['[Address]', null, null, '[Address]']);
  push(['[Email]', null, null, '[Email]']);
  push(['[Tax / VAT number]', null, null, '[Phone]']);
  push();
  push([numberLabel, '[001]', null, dateLabel, '[  /  /    ]']);
  push([thirdLabel, '[  /  /    ]']);
  push();
  push(['Description', 'Qty', 'Unit', 'Rate', 'Amount']);

  const firstItem = rowNum() + 1;
  for (let i = 0; i < 10; i++) {
    push();
    const r = rowNum();
    rows[r - 1] = [null, null, null, null, `=IF(B${r}="","",B${r}*D${r})`];
  }
  const lastItem = rowNum();

  push();
  push([null, null, null, 'Subtotal', `=SUM(E${firstItem}:E${lastItem})`]);
  const subtotalRow = rowNum();
  push([null, null, null, 'Discount', 0]);
  const discountRow = rowNum();
  push([null, null, null, 'Tax rate %', 0]);
  const taxRateRow = rowNum();
  push([null, null, null, 'Tax', `=(E${subtotalRow}-E${discountRow})*E${taxRateRow}/100`]);
  const taxRow = rowNum();
  push([null, null, null, 'Total', `=E${subtotalRow}-E${discountRow}+E${taxRow}`]);

  push();
  push(['Payment terms']);
  push(['[Payment due within 30 days of the invoice date.]']);
  push(['[Bank name, account number, sort code / routing number, IBAN, SWIFT.]']);

  return xlsx({ name: sheetName, rows, widths: [38, 8, 10, 14, 14] });
}

const files = [
  {
    file: 'quillbill-invoice-template.docx',
    data: wordDocument({
      heading: 'INVOICE',
      numberLabel: 'Invoice number',
      dateLabel: 'Invoice date',
      thirdLabel: 'Payment due',
      terms: 'Payment terms',
      closing: 'Template by QuillBill — quill-bill.com. Free to use and modify.',
    }),
  },
  {
    file: 'quillbill-quotation-template.docx',
    data: wordDocument({
      heading: 'QUOTATION',
      numberLabel: 'Quotation number',
      dateLabel: 'Issue date',
      thirdLabel: 'Valid until',
      terms: 'Terms',
      closing: 'Template by QuillBill — quill-bill.com. Free to use and modify.',
    }),
  },
  {
    file: 'quillbill-invoice-template.xlsx',
    data: spreadsheet({
      sheetName: 'Invoice',
      numberLabel: 'Invoice number',
      dateLabel: 'Invoice date',
      thirdLabel: 'Payment due',
    }),
  },
  {
    file: 'quillbill-quotation-template.xlsx',
    data: spreadsheet({
      sheetName: 'Quotation',
      numberLabel: 'Quotation number',
      dateLabel: 'Issue date',
      thirdLabel: 'Valid until',
    }),
  },
];

for (const { file, data } of files) {
  writeFileSync(join(dir, file), data);
  console.log(`  download  ${file.padEnd(38)} ${(data.length / 1024).toFixed(1)} KB`);
}
