import { ElaborationRow, CombinedRubricRow, RubricConfig } from '../types/rubric';

export const getScaleLabel = (grade: 'A' | 'B' | 'C' | 'D' | 'E', scaleType: 'letters' | 'qcaa_elaborations'): string => {
  if (scaleType === 'qcaa_elaborations') {
    switch (grade) {
      case 'A': return 'EXT';
      case 'B': return 'ADV';
      case 'C': return 'DEM';
      case 'D': return 'DEV';
      case 'E': return 'EME';
    }
  }
  return grade;
};

/**
 * Combines selected rows that share the same criteria into a single row.
 * Preserves subject context if multiple subjects are selected.
 */
export const groupSelectedRows = (
  selectedRows: ElaborationRow[],
  sortByQcaaOrder: boolean
): CombinedRubricRow[] => {
  const rows = sortByQcaaOrder
    ? [...selectedRows].sort((a, b) => a.orderIndex - b.orderIndex)
    : selectedRows;

  const groups: CombinedRubricRow[] = [];
  const groupMap = new Map<string, CombinedRubricRow>();

  for (const row of rows) {
    const key = `${row.subject}:::${row.strand}:::${row.subStrand || ''}`;
    if (sortByQcaaOrder) {
      let existing = groupMap.get(key);
      if (!existing) {
        existing = {
          id: key,
          learningArea: row.learningArea,
          subject: row.subject,
          yearLevel: row.yearLevel,
          strand: row.strand,
          subStrand: row.subStrand,
          orderIndex: row.orderIndex,
          rowIds: [],
          items: []
        };
        groupMap.set(key, existing);
        groups.push(existing);
      }
      existing.rowIds.push(row.id);
      existing.items.push(row.descriptors);
    } else {
      // Custom order: group contiguous rows with same subject, strand & subStrand
      const last = groups[groups.length - 1];
      if (
        last &&
        last.subject === row.subject &&
        last.strand === row.strand &&
        last.subStrand === row.subStrand
      ) {
        last.rowIds.push(row.id);
        last.items.push(row.descriptors);
      } else {
        const newGroup: CombinedRubricRow = {
          id: `${key}-${groups.length}`,
          learningArea: row.learningArea,
          subject: row.subject,
          yearLevel: row.yearLevel,
          strand: row.strand,
          subStrand: row.subStrand,
          orderIndex: row.orderIndex,
          rowIds: [row.id],
          items: [row.descriptors]
        };
        groups.push(newGroup);
      }
    }
  }

  return groups;
};

/**
 * Builds clean HTML table string for Google Docs copy and Word .doc export
 * - If multiple subjects are selected, shows subject in first column. Otherwise doesn't show subject.
 * - Multiple dot points under same criteria are combined using `- `
 * - No bullet points (• or <ul><li>) to ensure flawless Google Docs pasting
 */
export const buildRubricHtml = (rows: ElaborationRow[], config: RubricConfig): string => {
  const combinedRows = groupSelectedRows(rows, config.sortByQcaaOrder);
  const grades: ('A' | 'B' | 'C' | 'D' | 'E')[] = ['A', 'B', 'C', 'D', 'E'];

  // Check if rows come from more than one subject
  const distinctSubjects = new Set(rows.map(r => r.subject));
  const showSubject = distinctSubjects.size > 1;

  const rowsHtml = combinedRows.map((combinedRow) => {
    const cells = grades.map((g) => {
      const lines = combinedRow.items
        .map(item => item[g])
        .filter(Boolean)
        .map(text => `<div style="margin: 0 0 3px 0; line-height: 1.35;">- ${text}</div>`)
        .join('');

      return `
        <td style="border: 1px solid #4b5563; padding: 6px 8px; vertical-align: top; font-size: 8.5pt; line-height: 1.35; color: #111827;">
          ${lines}
        </td>
      `;
    }).join('');

    return `
      <tr>
        <td style="border: 1px solid #4b5563; padding: 6px 8px; vertical-align: top; background-color: #f9fafb; width: 140px;">
          ${showSubject ? `<div style="font-size: 7.5pt; text-transform: uppercase; color: #4b5563; font-weight: bold; margin-bottom: 2px;">${combinedRow.subject}</div>` : ''}
          <div style="font-weight: bold; font-size: 8.5pt; color: #111827;">${combinedRow.strand}</div>
          ${combinedRow.subStrand && combinedRow.subStrand !== combinedRow.strand ? `
            <div style="font-size: 8.5pt; color: #374151; margin-top: 2px;">${combinedRow.subStrand}</div>
          ` : ''}
        </td>
        ${cells}
      </tr>
    `;
  }).join('');

  const headerCells = grades.map((g) => {
    const label = getScaleLabel(g, config.scaleType);
    return `
      <th style="border: 1px solid #374151; background-color: #374151; color: #ffffff; padding: 6px 8px; text-align: center; font-size: 9pt; font-weight: bold; width: 17%;">
        ${label}
      </th>
    `;
  }).join('');

  return `
    <table style="width: 100%; border-collapse: collapse; border: 1px solid #374151; font-family: Arial, Helvetica, sans-serif; table-layout: fixed;">
      <thead>
        <tr style="background-color: #374151; color: #ffffff;">
          <th style="border: 1px solid #374151; background-color: #374151; color: #ffffff; padding: 6px 8px; text-align: left; font-size: 8.5pt; width: 140px;">
          </th>
          ${headerCells}
        </tr>
        ${config.includeSubheader ? `
          <tr style="background-color: #f3f4f6; color: #374151;">
            <th style="border: 1px solid #4b5563; background-color: #f3f4f6; padding: 4px 6px;"></th>
            <th colspan="5" style="border: 1px solid #4b5563; background-color: #f3f4f6; color: #374151; padding: 4px 8px; font-weight: normal; font-size: 8pt; font-style: italic; text-align: left;">
              ${config.subheaderText || 'The folio of student work has the following characteristics: work has the following characteristics:'}
            </th>
          </tr>
        ` : ''}
      </thead>
      <tbody>
        ${rowsHtml}
      </tbody>
    </table>
  `;
};

/**
 * Downloads a Word Document (.doc) designed to be opened with Microsoft Word or uploaded to Google Docs
 */
export const downloadWordDoc = (rows: ElaborationRow[], config: RubricConfig): void => {
  const content = buildRubricHtml(rows, config);
  const distinctSubjects = Array.from(new Set(rows.map(r => r.subject))).join('_');
  const fileName = `QCAA_Rubric_${(distinctSubjects || config.subject).replace(/[^a-zA-Z0-9_-]/g, '_')}_${config.yearLevel.replace(/\s+/g, '_')}.doc`;

  const docHtml = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <meta charset="utf-8">
      <title>Rubric</title>
      <!--[if gte mso 9]>
      <xml>
        <w:WordDocument>
          <w:View>Print</w:View>
          <w:Zoom>100</w:Zoom>
          <w:DoNotOptimizeForBrowser/>
        </w:WordDocument>
      </xml>
      <![endif]-->
      <style>
        @page Section1 {
          size: 11.69in 8.27in;
          mso-page-orientation: landscape;
          margin: 0.4in 0.4in 0.4in 0.4in;
          mso-header-margin: 0.2in;
          mso-footer-margin: 0.2in;
          mso-paper-source: 0;
        }
        div.Section1 {
          page: Section1;
        }
        body {
          font-family: Arial, Calibri, sans-serif;
          font-size: 8.5pt;
          color: #111827;
        }
        table {
          border-collapse: collapse;
          width: 100%;
        }
        th, td {
          border: 1pt solid #4b5563;
        }
      </style>
    </head>
    <body>
      <div class="Section1">
        ${content}
      </div>
    </body>
    </html>
  `;

  const blob = new Blob(['\ufeff' + docHtml], { type: 'application/msword;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Copies clean HTML table to clipboard so user can paste straight into Google Docs
 */
export const copyForGoogleDocs = async (rows: ElaborationRow[], config: RubricConfig): Promise<boolean> => {
  const html = buildRubricHtml(rows, config);
  const combinedRows = groupSelectedRows(rows, config.sortByQcaaOrder);
  const plainText = combinedRows.map(r => `${r.strand}${r.subStrand ? ' - ' + r.subStrand : ''}:\n` + r.items.map(item => `- ${item.C}`).join('\n')).join('\n\n');

  try {
    if (navigator.clipboard && window.ClipboardItem) {
      const blobHtml = new Blob([html], { type: 'text/html' });
      const blobText = new Blob([plainText], { type: 'text/plain' });
      await navigator.clipboard.write([
        new ClipboardItem({
          'text/html': blobHtml,
          'text/plain': blobText
        })
      ]);
      return true;
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = plainText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      return true;
    }
  } catch (err) {
    console.error('Clipboard copy failed:', err);
    return false;
  }
};

/**
 * Trigger clean landscape print dialog for PDF saving
 */
export const printLandscapePdf = (): void => {
  window.print();
};
