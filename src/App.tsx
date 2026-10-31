import React, { useState, useEffect, useMemo } from 'react';
import { ElaborationRow, RubricConfig } from './types/rubric';
import { STANDARDS_DATA, DEFAULT_CONFIG } from './data/standardsData';
import { Header } from './components/Header';
import { ElaborationSelector } from './components/ElaborationSelector';
import { RubricPreview } from './components/RubricPreview';
import { copyForGoogleDocs, groupSelectedRows } from './utils/exportUtils';

export default function App() {
  // Selected row IDs for current rubric - starts empty or from saved session
  const [selectedRowIds, setSelectedRowIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('acara_selected_dot_points_v5');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved selections:', e);
      }
    }
    // Blank by default, or you can pick any criteria
    return [];
  });

  // Filter state for selector: Learning Area, Subject, and Year/Band
  const [selectedArea, setSelectedArea] = useState<string>('Science');
  const [selectedSubject, setSelectedSubject] = useState<string>('Science');
  const [selectedYear, setSelectedYear] = useState<string>('Year 8');

  // Custom user-imported rows from PDF text
  const [customRows, setCustomRows] = useState<ElaborationRow[]>(() => {
    const saved = localStorage.getItem('acara_custom_rows_v5');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse custom rows:', e);
      }
    }
    return [];
  });

  const standards = useMemo(() => {
    return [...STANDARDS_DATA, ...customRows];
  }, [customRows]);

  const handleAddCustomRows = (newRows: ElaborationRow[]) => {
    setCustomRows(prev => {
      const updated = [...prev, ...newRows];
      localStorage.setItem('acara_custom_rows_v5', JSON.stringify(updated));
      return updated;
    });
    // Auto-select the newly added rows
    setSelectedRowIds(prev => [...prev, ...newRows.map(r => r.id)]);
  };

  // Rubric Configuration
  const [config, setConfig] = useState<RubricConfig>(() => {
    const saved = localStorage.getItem('acara_rubric_config_v5');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved config:', e);
      }
    }
    return DEFAULT_CONFIG;
  });

  // Current active navigation tab: 'select' | 'preview'
  const [activeTab, setActiveTab] = useState<'select' | 'preview'>(() => {
    return selectedRowIds.length > 0 ? 'preview' : 'select';
  });
  const [copied, setCopied] = useState(false);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('acara_selected_dot_points_v5', JSON.stringify(selectedRowIds));
  }, [selectedRowIds]);

  useEffect(() => {
    localStorage.setItem('acara_rubric_config_v5', JSON.stringify(config));
  }, [config]);

  // Selected rows in order: either strict QCAA document order or custom user sequence
  const selectedRows = useMemo(() => {
    const rowMap = new Map(standards.map(r => [r.id, r]));
    const rows = selectedRowIds
      .map(id => rowMap.get(id))
      .filter((r): r is ElaborationRow => r !== undefined);

    if (config.sortByQcaaOrder) {
      return rows.sort((a, b) => a.orderIndex - b.orderIndex);
    }
    return rows;
  }, [standards, selectedRowIds, config.sortByQcaaOrder]);

  // Handlers for Row Selection
  const handleToggleRow = (id: string) => {
    setSelectedRowIds(prev => 
      prev.includes(id) ? prev.filter(rId => rId !== id) : [...prev, id]
    );
  };

  const handleSelectMultiple = (ids: string[], select: boolean) => {
    setSelectedRowIds(prev => {
      if (select) {
        const newIds = ids.filter(id => !prev.includes(id));
        return [...prev, ...newIds];
      } else {
        return prev.filter(id => !ids.includes(id));
      }
    });
  };

  const handleUpdateConfig = (updated: Partial<RubricConfig>) => {
    setConfig(prev => ({ ...prev, ...updated }));
  };

  // Reorder custom combined rows
  const handleReorderCustomRow = (fromIndex: number, toIndex: number) => {
    const combinedRows = groupSelectedRows(selectedRows, false);
    const updatedCombined = [...combinedRows];
    const [moved] = updatedCombined.splice(fromIndex, 1);
    updatedCombined.splice(toIndex, 0, moved);
    const newRowIds = updatedCombined.flatMap(group => group.rowIds);
    setSelectedRowIds(newRowIds);
    if (config.sortByQcaaOrder) {
      setConfig(prev => ({ ...prev, sortByQcaaOrder: false }));
    }
  };

  const handleRemoveRowGroup = (rowIdsToRemove: string[]) => {
    setSelectedRowIds(prev => prev.filter(id => !rowIdsToRemove.includes(id)));
  };

  // RESET BUTTON: Blanks everything completely as requested
  const handleResetAll = () => {
    localStorage.removeItem('acara_selected_dot_points_v5');
    localStorage.removeItem('acara_rubric_config_v5');
    setSelectedRowIds([]); // BLANK EVERYTHING (0 criteria selected)
    setConfig(DEFAULT_CONFIG);
  };

  const handleCopyTable = async () => {
    if (selectedRows.length === 0) return;
    const ok = await copyForGoogleDocs(selectedRows, config);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedCount={selectedRowIds.length}
        onCopyTable={handleCopyTable}
        onResetAll={handleResetAll}
        copied={copied}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-5">
        {activeTab === 'select' && (
          <ElaborationSelector
            standards={standards}
            selectedRowIds={selectedRowIds}
            onToggleRow={handleToggleRow}
            onSelectMultiple={handleSelectMultiple}
            selectedArea={selectedArea}
            onSelectArea={setSelectedArea}
            selectedSubject={selectedSubject}
            onSelectSubject={setSelectedSubject}
            selectedYear={selectedYear}
            onSelectYear={setSelectedYear}
            onProceedToPreview={() => setActiveTab('preview')}
            onCopyTableQuick={handleCopyTable}
            onResetAll={handleResetAll}
            onAddCustomRows={handleAddCustomRows}
            copiedQuick={copied}
          />
        )}

        {activeTab === 'preview' && (
          <RubricPreview
            config={config}
            onUpdateConfig={handleUpdateConfig}
            selectedRows={selectedRows}
            onReorderCustomRow={handleReorderCustomRow}
            onRemoveRowGroup={handleRemoveRowGroup}
            onResetAll={handleResetAll}
            onBackToSelect={() => setActiveTab('select')}
          />
        )}
      </main>

      {/* Clean minimal footer */}
      <footer className="bg-white border-t border-slate-200 py-3 text-center text-xs text-slate-500 no-print mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-1 text-[11px]">
          <div>
            Australian Curriculum in Queensland (ACiQ) v9.0 · Official Standards Elaborations
          </div>
          <div className="text-slate-400">
            Selected criteria from the same area are automatically combined with hyphen dashes (<kbd className="font-mono text-[10px]">-</kbd>) for clean Google Docs pasting
          </div>
        </div>
      </footer>
    </div>
  );
}
