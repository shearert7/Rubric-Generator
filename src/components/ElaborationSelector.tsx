import React, { useState, useMemo } from 'react';
import { ElaborationRow } from '../types/rubric';
import { LEARNING_AREAS } from '../data/standardsData';
import { Search, ChevronDown, ChevronUp, Copy, Check, CheckSquare, Square, RotateCcw, Plus, UploadCloud } from 'lucide-react';

interface ElaborationSelectorProps {
  standards: ElaborationRow[];
  selectedRowIds: string[];
  onToggleRow: (id: string) => void;
  onSelectMultiple: (ids: string[], select: boolean) => void;
  selectedArea: string;
  onSelectArea: (area: string) => void;
  selectedSubject: string;
  onSelectSubject: (subject: string) => void;
  selectedYear: string;
  onSelectYear: (year: string) => void;
  onProceedToPreview: () => void;
  onCopyTableQuick: () => void;
  onResetAll: () => void;
  onAddCustomRows: (newRows: ElaborationRow[]) => void;
  copiedQuick: boolean;
}

export const ElaborationSelector: React.FC<ElaborationSelectorProps> = ({
  standards,
  selectedRowIds,
  onToggleRow,
  onSelectMultiple,
  selectedArea,
  onSelectArea,
  selectedSubject,
  onSelectSubject,
  selectedYear,
  onSelectYear,
  onProceedToPreview,
  onCopyTableQuick,
  onResetAll,
  onAddCustomRows,
  copiedQuick,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeStrand, setActiveStrand] = useState<string>('all');
  const [expandedPreviewId, setExpandedPreviewId] = useState<string | null>(null);
  const [showImportModal, setShowImportModal] = useState(false);
  const [importText, setImportText] = useState('');

  // Find current learning area config
  const currentAreaConfig = useMemo(() => {
    return LEARNING_AREAS.find(a => a.name === selectedArea) || LEARNING_AREAS[0];
  }, [selectedArea]);

  // Year levels or bands based on whether current area is banded
  const availableYearsOrBands = useMemo(() => {
    if (currentAreaConfig.hasBands) {
      return ['Years 7–8', 'Years 9–10'];
    }
    return ['Year 7', 'Year 8', 'Year 9', 'Year 10'];
  }, [currentAreaConfig]);

  // Rows matching current subject & year/band
  const currentSubjectYearRows = useMemo(() => {
    return standards
      .filter(r => {
        const matchesSubject = r.subject === selectedSubject;
        // Check year match or band match
        const matchesYear = r.yearLevel === selectedYear ||
          (selectedYear === 'Years 7–8' && (r.yearLevel === 'Year 7' || r.yearLevel === 'Year 8' || r.yearLevel === 'Years 7–8')) ||
          (selectedYear === 'Years 9–10' && (r.yearLevel === 'Year 9' || r.yearLevel === 'Year 10' || r.yearLevel === 'Years 9–10')) ||
          (r.yearLevel === 'Years 7–8' && (selectedYear === 'Year 7' || selectedYear === 'Year 8')) ||
          (r.yearLevel === 'Years 9–10' && (selectedYear === 'Year 9' || selectedYear === 'Year 10'));

        return matchesSubject && matchesYear;
      })
      .sort((a, b) => a.orderIndex - b.orderIndex);
  }, [standards, selectedSubject, selectedYear]);

  const uniqueStrands = useMemo(() => {
    const strands = new Set<string>();
    currentSubjectYearRows.forEach(r => strands.add(r.strand));
    return Array.from(strands);
  }, [currentSubjectYearRows]);

  // Filtered rows
  const filteredRows = useMemo(() => {
    return currentSubjectYearRows.filter(row => {
      const matchesStrand = activeStrand === 'all' || row.strand === activeStrand;
      if (!matchesStrand) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const inSubstrand = (row.subStrand || '').toLowerCase().includes(q);
      const inStrand = row.strand.toLowerCase().includes(q);
      const inA = (row.descriptors.A || '').toLowerCase().includes(q);
      const inC = (row.descriptors.C || '').toLowerCase().includes(q);

      return inSubstrand || inStrand || inA || inC;
    });
  }, [currentSubjectYearRows, activeStrand, searchQuery]);

  const allFilteredSelected = useMemo(() => {
    if (filteredRows.length === 0) return false;
    return filteredRows.every(r => selectedRowIds.includes(r.id));
  }, [filteredRows, selectedRowIds]);

  const handleToggleSelectAllFiltered = () => {
    const ids = filteredRows.map(r => r.id);
    onSelectMultiple(ids, !allFilteredSelected);
  };

  // Custom Quick Import Handler
  const handleImportTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!importText.trim()) return;

    // Simple line parser: if tab-separated or line-separated
    const lines = importText.split('\n').map(l => l.trim()).filter(Boolean);
    const newRows: ElaborationRow[] = [];

    lines.forEach((line, idx) => {
      // Check for tab-separated (A \t B \t C \t D \t E)
      const parts = line.split('\t');
      if (parts.length >= 5) {
        newRows.push({
          id: `custom-import-${Date.now()}-${idx}`,
          orderIndex: 900 + idx,
          learningArea: selectedArea,
          subject: selectedSubject,
          yearLevel: selectedYear,
          strand: activeStrand !== 'all' ? activeStrand : 'Custom Standard',
          descriptors: {
            A: parts[0],
            B: parts[1],
            C: parts[2],
            D: parts[3],
            E: parts[4]
          }
        });
      } else {
        // Single descriptor
        newRows.push({
          id: `custom-import-${Date.now()}-${idx}`,
          orderIndex: 900 + idx,
          learningArea: selectedArea,
          subject: selectedSubject,
          yearLevel: selectedYear,
          strand: activeStrand !== 'all' ? activeStrand : 'Custom Standard',
          descriptors: {
            A: `discerning ${line}`,
            B: `effective ${line}`,
            C: line,
            D: `basic ${line}`,
            E: `statements about ${line}`
          }
        });
      }
    });

    if (newRows.length > 0) {
      onAddCustomRows(newRows);
      setImportText('');
      setShowImportModal(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* Learning Area -> Subject -> Band/Year Selectors */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs space-y-3.5">
        {/* Step 1: Learning Area */}
        <div>
          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
            1. Learning Area
          </label>
          <div className="flex flex-wrap gap-1.5">
            {LEARNING_AREAS.map(area => {
              const isSelected = selectedArea === area.name;
              return (
                <button
                  key={area.name}
                  onClick={() => {
                    onSelectArea(area.name);
                    onSelectSubject(area.subjects[0]);
                    const targetYear = area.hasBands ? 'Years 7–8' : 'Year 8';
                    onSelectYear(targetYear);
                    setActiveStrand('all');
                  }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-xs font-semibold'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {area.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Subject (Only if learning area has more than 1 subject, e.g. Technologies, The Arts, HASS) */}
        {currentAreaConfig.subjects.length > 1 && (
          <div className="pt-2 border-t border-slate-100">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
              2. Subject in {selectedArea}
            </label>
            <div className="flex flex-wrap gap-1.5">
              {currentAreaConfig.subjects.map(subj => {
                const isSelected = selectedSubject === subj;
                return (
                  <button
                    key={subj}
                    onClick={() => {
                      onSelectSubject(subj);
                      setActiveStrand('all');
                    }}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-xs font-semibold'
                        : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                    }`}
                  >
                    {subj}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 3: Year Level or Band (e.g. Years 7-8 for Music/Tech, Year 8 for Science) */}
        <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
              {currentAreaConfig.hasBands ? '3. Year Band (Banded)' : '3. Year Level'}
            </label>
            <div className="flex gap-1.5">
              {availableYearsOrBands.map(y => {
                const isSelected = selectedYear === y;
                return (
                  <button
                    key={y}
                    onClick={() => {
                      onSelectYear(y);
                      setActiveStrand('all');
                    }}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      isSelected
                        ? 'bg-sky-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {y}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action buttons: Reset & Import */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowImportModal(true)}
              className="text-xs font-medium text-slate-600 hover:text-slate-900 px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors flex items-center gap-1"
            >
              <UploadCloud className="w-3.5 h-3.5 text-slate-500" />
              <span>Import / Paste PDF Text</span>
            </button>

            <button
              onClick={onResetAll}
              title="Clear all selected criteria"
              className="text-xs font-medium text-rose-600 hover:text-rose-800 px-2.5 py-1.5 rounded-lg border border-rose-200 hover:bg-rose-50 transition-colors flex items-center gap-1 shrink-0"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset (Blank All)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Search and Strand Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search ${selectedSubject} (${selectedYear}) criteria...`}
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-900"
          />
        </div>

        {/* Strand quick filters */}
        <div className="flex items-center gap-1 overflow-x-auto pb-0.5">
          <button
            onClick={() => setActiveStrand('all')}
            className={`px-2.5 py-1 text-xs rounded-md whitespace-nowrap transition-colors ${
              activeStrand === 'all'
                ? 'bg-slate-900 text-white font-medium'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Strands ({currentSubjectYearRows.length})
          </button>
          {uniqueStrands.map(strand => (
            <button
              key={strand}
              onClick={() => setActiveStrand(strand)}
              className={`px-2.5 py-1 text-xs rounded-md whitespace-nowrap transition-colors ${
                activeStrand === strand
                  ? 'bg-slate-900 text-white font-medium'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {strand}
            </button>
          ))}
        </div>
      </div>

      {/* Bulk Select Strip & Action CTAs */}
      <div className="flex items-center justify-between text-xs text-slate-600 px-1">
        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleSelectAllFiltered}
            className="font-medium text-slate-800 hover:text-slate-900 flex items-center gap-1.5"
          >
            {allFilteredSelected ? <CheckSquare className="w-4 h-4 text-sky-600" /> : <Square className="w-4 h-4 text-slate-400" />}
            <span>{allFilteredSelected ? 'Deselect all shown' : 'Select all shown'}</span>
          </button>
          <span className="text-slate-300">|</span>
          <span>{filteredRows.length} dot points available</span>
        </div>

        {/* Quick action buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onCopyTableQuick}
            disabled={selectedRowIds.length === 0}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              selectedRowIds.length > 0
                ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            {copiedQuick ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedQuick ? 'Copied Pure Table!' : `Copy Table (${selectedRowIds.length})`}</span>
          </button>

          <button
            onClick={onProceedToPreview}
            disabled={selectedRowIds.length === 0}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              selectedRowIds.length > 0
                ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-xs'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            View Table →
          </button>
        </div>
      </div>

      {/* Discrete Dot-Point Rows List in Exact QCAA Order */}
      <div className="space-y-2">
        {filteredRows.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-8 text-center text-slate-500">
            <p className="text-sm font-medium">No criteria found matching this filter.</p>
            <p className="text-xs text-slate-400 mt-1">Try switching strands or click "Import / Paste PDF Text" to add your own.</p>
          </div>
        ) : (
          filteredRows.map((row) => {
            const isSelected = selectedRowIds.includes(row.id);
            const isExpanded = expandedPreviewId === row.id;

            return (
              <div
                key={row.id}
                className={`bg-white rounded-xl border transition-all ${
                  isSelected
                    ? 'border-sky-500 bg-sky-50/20 shadow-2xs'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div
                  className="p-3 sm:p-3.5 flex items-start justify-between gap-3 cursor-pointer"
                  onClick={() => onToggleRow(row.id)}
                >
                  {/* Left: Checkbox & Clean Label */}
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => onToggleRow(row.id)}
                      className="mt-0.5 w-4 h-4 rounded text-sky-600 focus:ring-sky-500 border-slate-300 cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 text-xs text-slate-700">
                        <span className="font-bold text-slate-900">{row.strand}</span>
                        {row.subStrand && row.subStrand !== row.strand && (
                          <>
                            <span className="text-slate-300">/</span>
                            <span className="font-medium text-slate-700">{row.subStrand}</span>
                          </>
                        )}
                      </div>
                      <div className="mt-1 text-xs text-slate-800 leading-snug">
                        <span className="font-medium text-slate-500 mr-1.5">C (Sound):</span>
                        {row.descriptors.C}
                      </div>
                    </div>
                  </div>

                  {/* Right: Expand details & Toggle button */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedPreviewId(isExpanded ? null : row.id);
                      }}
                      className="px-2 py-1 text-[11px] text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded transition-colors flex items-center gap-1"
                    >
                      <span>{isExpanded ? 'Hide' : 'A–E'}</span>
                      {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleRow(row.id);
                      }}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                        isSelected
                          ? 'bg-sky-600 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {isSelected ? '✓ In Table' : '+ Select'}
                    </button>
                  </div>
                </div>

                {/* Collapsible A-E matrix drawer without bullet points */}
                {isExpanded && (
                  <div className="border-t border-slate-100 bg-slate-50 p-3 text-xs">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                      {(['A', 'B', 'C', 'D', 'E'] as const).map(grade => {
                        const label = grade === 'A' ? 'EXT' : grade === 'B' ? 'ADV' : grade === 'C' ? 'DEM' : grade === 'D' ? 'DEV' : 'EME';
                        return (
                          <div key={grade} className="bg-white p-2.5 rounded border border-slate-200">
                            <div className="font-bold text-[11px] text-slate-800 border-b border-slate-100 pb-1 mb-1.5 flex justify-between">
                              <span>{label}</span>
                              <span className="text-slate-400 font-normal">Level {grade}</span>
                            </div>
                            <div className="text-[11px] text-slate-800 leading-snug">
                              {row.descriptors[grade]}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Import / Paste PDF Text Modal */}
      {showImportModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-5 shadow-xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <UploadCloud className="w-4 h-4 text-sky-600" />
                <span>Import / Paste QCAA Standards Text</span>
              </h3>
              <button
                onClick={() => setShowImportModal(false)}
                className="text-slate-400 hover:text-slate-600 text-sm"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-600">
              Paste lines from any QCAA PDF or document into <strong>{selectedSubject} ({selectedYear})</strong>. You can paste tab-separated A–E cells or single criteria lines:
            </p>

            <form onSubmit={handleImportTextSubmit} className="space-y-3">
              <textarea
                rows={6}
                required
                value={importText}
                onChange={(e) => setImportText(e.target.value)}
                placeholder="Paste criteria lines or tab-separated text from QCAA document..."
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-900 font-sans"
              />

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-slate-400">
                  Target: {selectedSubject} · {selectedYear}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowImportModal(false)}
                    className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-3.5 py-1.5 text-xs font-semibold bg-slate-900 text-white rounded-lg hover:bg-slate-800"
                  >
                    Add to Library
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
