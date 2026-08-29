/**
 * Minimal Word and Excel document builders.
 *
 * Both formats are ZIPs of XML parts. What is written here is the smallest set
 * of parts Word and Excel will open without a repair prompt: content types,
 * the package relationship, and the document body itself.
 */
import { zip, xmlEscape } from './zip.mjs';

const DOC_REL = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>`;

const W = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main';

const para = (text, { bold = false, size = 20, after = 120, align = 'left' } = {}) =>
  `<w:p><w:pPr><w:spacing w:after="${after}"/><w:jc w:val="${align}"/></w:pPr>` +
  `<w:r><w:rPr>${bold ? '<w:b/>' : ''}<w:sz w:val="${size}"/></w:rPr>` +
  `<w:t xml:space="preserve">${xmlEscape(text)}</w:t></w:r></w:p>`;

const cell = (text, { bold = false, width = 2000, align = 'left' } = {}) =>
  `<w:tc><w:tcPr><w:tcW w:w="${width}" w:type="dxa"/></w:tcPr>` +
  `<w:p><w:pPr><w:spacing w:after="0"/><w:jc w:val="${align}"/></w:pPr>` +
  `<w:r><w:rPr>${bold ? '<w:b/>' : ''}<w:sz w:val="18"/></w:rPr>` +
  `<w:t xml:space="preserve">${xmlEscape(text)}</w:t></w:r></w:p></w:tc>`;

const row = (cells) => `<w:tr>${cells.join('')}</w:tr>`;

const table = (rows) =>
  `<w:tbl><w:tblPr><w:tblW w:w="9360" w:type="dxa"/>` +
  `<w:tblBorders>${['top', 'left', 'bottom', 'right', 'insideH', 'insideV']
    .map((s) => `<w:${s} w:val="single" w:sz="4" w:color="D0D0D0"/>`)
    .join('')}</w:tblBorders></w:tblPr>${rows.join('')}</w:tbl>`;

/** @param {{blocks: string[]}} body */
export function docx(blocks) {
  const document = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="${W}"><w:body>${blocks.join('')}<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1134" w:right="1134" w:bottom="1134" w:left="1134"/></w:sectPr></w:body></w:document>`;

  return zip([
    {
      name: '[Content_Types].xml',
      data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>`,
    },
    { name: '_rels/.rels', data: DOC_REL },
    { name: 'word/document.xml', data: document },
  ]);
}

docx.para = para;
docx.table = table;
docx.row = row;
docx.cell = cell;

/**
 * @param {{name: string, rows: (string|number|null)[][], widths?: number[]}} sheet
 */
export function xlsx({ name, rows, widths = [] }) {
  const colName = (i) => {
    let s = '';
    for (let n = i; n >= 0; n = Math.floor(n / 26) - 1) s = String.fromCharCode(65 + (n % 26)) + s;
    return s;
  };

  const sheetRows = rows
    .map((cells, r) => {
      const xml = cells
        .map((value, c) => {
          if (value === null || value === '') return '';
          const ref = `${colName(c)}${r + 1}`;
          // Inline strings avoid a sharedStrings part entirely; formulas are
          // written as real formulas so the totals recalculate when edited.
          if (typeof value === 'number') return `<c r="${ref}"><v>${value}</v></c>`;
          if (String(value).startsWith('=')) {
            return `<c r="${ref}"><f>${xmlEscape(String(value).slice(1))}</f></c>`;
          }
          return `<c r="${ref}" t="inlineStr"><is><t xml:space="preserve">${xmlEscape(value)}</t></is></c>`;
        })
        .join('');
      return `<row r="${r + 1}">${xml}</row>`;
    })
    .join('');

  const cols = widths.length
    ? `<cols>${widths.map((w, i) => `<col min="${i + 1}" max="${i + 1}" width="${w}" customWidth="1"/>`).join('')}</cols>`
    : '';

  return zip([
    {
      name: '[Content_Types].xml',
      data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/></Types>`,
    },
    {
      name: '_rels/.rels',
      data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>`,
    },
    {
      name: 'xl/workbook.xml',
      data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="${xmlEscape(name)}" sheetId="1" r:id="rId1"/></sheets></workbook>`,
    },
    {
      name: 'xl/_rels/workbook.xml.rels',
      data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/></Relationships>`,
    },
    {
      name: 'xl/worksheets/sheet1.xml',
      data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">${cols}<sheetData>${sheetRows}</sheetData></worksheet>`,
    },
  ]);
}
