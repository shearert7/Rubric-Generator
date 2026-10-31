import React, { useState } from 'react';
import { ElaborationRow, RubricConfig } from '../types/rubric';
import { 
  downloadWordDoc, 
  copyForGoogleDocs, 
  printLandscapePdf, 
  getScaleLabel,
  groupSelectedRows 
} from '../utils/exportUtils';
import { 
  Printer, 
  Copy, 
  Check, 
  ExternalLink, 
  FileText,
  ArrowUp,
  ArrowDown,
  Trash2,
  RotateCcw
} from 'lucide-react';

interface RubricPreviewProps {
  config: RubricConfig;
  onUpdateConfig: (updated: Partial<RubricConfig>) => void;
  selectedRows: ElaborationRow[];
  onReorderCustomRow: (fromIndex: number, toIndex: number) => void;
  onRemoveRowGroup: (rowIds: string[]) => void;
  onResetAll: () => void;
  onBackToSelect: () => void;
}

export const RubricPreview: React.FC<RubricPreviewProps> = ({
  config,
  onUpdateConfig,
  selectedRows,
  onReorderCustomRow,
  onRemoveRowGroup,
  onResetAll,
  onBackToSelect,
}) => {
  const [copied, setCopied] = useState(false);

  // Group multiple selected dot points from the same criteria into one table row
  const combinedRows = groupSelectedRows(selectedRows, config.sortByQcaaOrder);

  // Check if criteria come from multiple different subjects
  const distinctSubjects = new Set(selectedRows.map(r => r.subject));
  const showSubject = distinctSubjects.size > 1;

  const handleCopyForGoogleDocs = async () => {
    const success = await copyForGoogleDocs(selectedRows, config);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 3500);
    }
  };

  const handleDownloadDoc = () => {
    downloadWordDoc(selectedRows, config);
  };

  const handlePrint = () => {
    printLandscapePdf();
  };

  const grades: ('A' | 'B' | 'C' | 'D' | 'E')[] = ['A', 'B', 'C', 'D', 'E'];

  return (
    <div className="space-y-3.5">
      {/* Action and Control Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-3 sm:p-4 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3 no-print">
        <div className="flex items-center gap-2">
          <button
            onClick={onBackToSelect}
            className="text-xs font-semibold text-slate-700 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
          >
            ← Add / Remove Criteria ({selectedRows.length})
          </button>

          <button
            onClick={onResetAll}
            title="Clear all selections and reset"
            className="text-xs font-medium text-rose-600 hover:text-rose-800 px-2.5 py-1.5 rounded-lg border border-rose-200 hover:bg-rose-50 transition-colors flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All</span>
          </button>
        </div>

        {/* Export & Order Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* QCAA Order vs Custom Order Toggle */}
          <div className="flex items-center rounded-lg bg-slate-100 p-0.5 text-xs font-medium">
            <button
              onClick={() => onUpdateConfig({ sortByQcaaOrder: true })}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                config.sortByQcaaOrder
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              QCAA Order
            </button>
            <button
              onClick={() => onUpdateConfig({ sortByQcaaOrder: false })}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                !config.sortByQcaaOrder
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Custom Order
            </button>
          </div>

          {/* Scale Toggle: EXT/ADV/DEM/DEV/EME vs A/B/C/D/E */}
          <div className="flex items-center rounded-lg bg-slate-100 p-0.5 text-xs font-medium">
            <button
              onClick={() => onUpdateConfig({ scaleType: 'qcaa_elaborations' })}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                config.scaleType === 'qcaa_elaborations'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              EXT–EME
            </button>
            <button
              onClick={() => onUpdateConfig({ scaleType: 'letters' })}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                config.scaleType === 'letters'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              A–E
            </button>
          </div>

          {/* Subheader Toggle */}
          <button
            onClick={() => onUpdateConfig({ includeSubheader: !config.includeSubheader })}
            className={`px-2.5 py-1 text-xs rounded-lg border transition-colors ${
              config.includeSubheader
                ? 'bg-slate-50 border-slate-300 text-slate-800 font-medium'
                : 'border-slate-200 text-slate-500 hover:bg-slate-50'
            }`}
          >
            Subheader: {config.includeSubheader ? 'On' : 'Off'}
          </button>

          {/* Primary Action: Copy Table */}
          <button
            onClick={handleCopyForGoogleDocs}
            disabled={selectedRows.length === 0}
            className="px-4 py-1.5 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-all flex items-center gap-1.5 shadow-xs active:scale-98 ml-1"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied Pure Table!' : 'Copy Table for Google Docs'}</span>
          </button>

          <button
            onClick={handleDownloadDoc}
            disabled={selectedRows.length === 0}
            className="px-3 py-1.5 text-xs font-medium bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all flex items-center gap-1 shadow-xs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>.doc</span>
          </button>

          <button
            onClick={handlePrint}
            disabled={selectedRows.length === 0}
            className="px-3 py-1.5 text-xs font-medium bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-all flex items-center gap-1 shadow-xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>PDF</span>
          </button>
        </div>
      </div>

      {/* Copy notification */}
      {copied && (
        <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-3 flex items-center justify-between text-emerald-900 text-xs no-print">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              <strong>Copied without bullet points (using - dashes)!</strong> Ready to paste directly into Google Docs (<kbd className="bg-white px-1.5 py-0.5 rounded border border-emerald-300 font-mono text-[11px]">Ctrl+V</kbd> / <kbd className="bg-white px-1.5 py-0.5 rounded border border-emerald-300 font-mono text-[11px]">Cmd+V</kbd>).
            </span>
          </div>
          <a
            href="https://docs.new"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 font-semibold text-emerald-800 bg-white border border-emerald-300 hover:bg-emerald-100 rounded-md transition-colors flex items-center gap-1 shrink-0 ml-2"
          >
            <span>Open New Google Doc</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      )}

      {/* Reordering helper banner when Custom Order is active */}
      {!config.sortByQcaaOrder && combinedRows.length > 1 && (
        <div className="bg-sky-50 border border-sky-200 rounded-xl p-2.5 px-4 text-xs text-sky-900 flex items-center justify-between no-print">
          <span>
            <strong>Custom Order Active:</strong> Use the <span className="font-mono font-bold">↑</span> and <span className="font-mono font-bold">↓</span> buttons in the table's left column to rearrange criteria rows.
          </span>
          <button
            onClick={() => onUpdateConfig({ sortByQcaaOrder: true })}
            className="text-sky-700 underline font-medium hover:text-sky-900"
          >
            Reset to QCAA Order
          </button>
        </div>
      )}

      {/* THE PURE RUBRIC TABLE */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-4 sm:p-5 overflow-x-auto print:border-none print:shadow-none print:p-0">
        <div className="min-w-[850px]">
          {selectedRows.length === 0 ? (
            <div className="p-12 text-center text-slate-400">
              <div className="text-sm font-medium text-slate-600 mb-1">Your rubric table is currently empty.</div>
              <p className="text-xs text-slate-400 mb-3">Please click the button below to select standard elaborations.</p>
              <button
                onClick={onBackToSelect}
                className="px-3.5 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800"
              >
                + Select Criteria
              </button>
            </div>
          ) : (
            <table className="w-full border-collapse border border-slate-700 text-xs table-fixed print-rubric-table font-sans">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="border border-slate-700 p-2 text-left font-bold text-xs w-[140px]">
                  </th>
                  {grades.map(grade => (
                    <th key={grade} className="border border-slate-700 p-2 text-center font-bold text-xs w-[17%]">
                      {getScaleLabel(grade, config.scaleType)}
                    </th>
                  ))}
                </tr>
                {config.includeSubheader && (
                  <tr className="bg-slate-100 text-slate-800">
                    <th className="border border-slate-700 p-1.5 bg-slate-100 w-[140px]"></th>
                    <th colSpan={5} className="border border-slate-700 p-1.5 px-2 text-left font-normal text-[11px] italic">
                      {config.subheaderText || 'The folio of student work has the following characteristics: work has the following characteristics:'}
                    </th>
                  </tr>
                )}
              </thead>
              <tbody>
                {combinedRows.map((combinedRow, index) => (
                  <tr key={combinedRow.id} className="align-top hover:bg-slate-50/50">
                    {/* First column: Strand and Substrand, with subject shown ONLY if multi-subject */}
                    <td className="border border-slate-700 p-2 bg-slate-50 text-slate-900 w-[140px] strand-cell">
                      {showSubject && (
                        <div className="text-[10px] font-bold text-indigo-700 uppercase tracking-wider mb-1">
                          {combinedRow.subject}
                        </div>
                      )}
                      <div className="font-bold text-xs text-slate-900 leading-tight">
                        {combinedRow.strand}
                      </div>
                      {combinedRow.subStrand && combinedRow.subStrand !== combinedRow.strand && (
                        <div className="text-xs text-slate-700 mt-1 leading-tight">
                          {combinedRow.subStrand}
                        </div>
                      )}

                      {/* Custom Order Controls (Visible only when custom order is enabled, hidden in print) */}
                      {!config.sortByQcaaOrder && (
                        <div className="mt-2.5 pt-1.5 border-t border-slate-200 flex items-center justify-between no-print text-[11px] text-slate-500">
                          <span className="font-mono text-[10px]">#{index + 1}</span>
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => onReorderCustomRow(index, Math.max(0, index - 1))}
                              disabled={index === 0}
                              title="Move row up"
                              className="p-1 hover:bg-slate-200 rounded disabled:opacity-20 text-slate-700"
                            >
                              <ArrowUp className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => onReorderCustomRow(index, Math.min(combinedRows.length - 1, index + 1))}
                              disabled={index === combinedRows.length - 1}
                              title="Move row down"
                              className="p-1 hover:bg-slate-200 rounded disabled:opacity-20 text-slate-700"
                            >
                              <ArrowDown className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => onRemoveRowGroup(combinedRow.rowIds)}
                              title="Remove this criteria"
                              className="p-1 hover:bg-rose-100 text-rose-600 rounded ml-0.5"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      )}
                    </td>

                    {/* Descriptors: Formatted with - for multiple items, no bullet dots */}
                    {grades.map((grade) => {
                      return (
                        <td key={grade} className="border border-slate-700 p-2 text-[11px] leading-relaxed text-slate-900">
                          {combinedRow.items.map((item, itemIdx) => {
                            const desc = item[grade];
                            if (!desc) return null;
                            return (
                              <div key={itemIdx} className="mb-1 last:mb-0 leading-tight">
                                - {desc}
                              </div>
                            );
                          })}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
