import React from 'react';
import { Copy, Check, Layers, Table, RotateCcw } from 'lucide-react';

interface HeaderProps {
  activeTab: 'select' | 'preview';
  setActiveTab: (tab: 'select' | 'preview') => void;
  selectedCount: number;
  onCopyTable: () => void;
  onResetAll: () => void;
  copied: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  selectedCount,
  onCopyTable,
  onResetAll,
  copied
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-xs no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-14 sm:h-16">
          {/* Zone 1: Single text element wordmark */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs tracking-wider">
              AC
            </div>
            <a 
              href="/" 
              className="text-base sm:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-slate-800 transition-colors"
            >
              ACARA Rubric Generator
            </a>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium">
            <button
              onClick={() => setActiveTab('select')}
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                activeTab === 'select'
                  ? 'bg-slate-100 text-slate-900 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-slate-500" />
              <span>1. Select Criteria</span>
              <span className="text-xs bg-slate-200 text-slate-700 font-mono px-1.5 py-0.2 rounded-full">
                {selectedCount}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                activeTab === 'preview'
                  ? 'bg-slate-100 text-slate-900 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Table className="w-3.5 h-3.5 text-slate-500" />
              <span>2. Rubric Table</span>
            </button>
          </nav>

          {/* Zone 3: Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onResetAll}
              title="Reset all selections and settings"
              className="hidden sm:flex text-xs font-medium text-slate-500 hover:text-rose-600 px-2.5 py-1.5 rounded-lg border border-slate-200 hover:border-rose-200 hover:bg-rose-50 transition-colors items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>

            <button
              onClick={onCopyTable}
              disabled={selectedCount === 0}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 shadow-xs active:scale-98 ${
                selectedCount > 0
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied Table!' : `Copy for Google Docs (${selectedCount})`}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
