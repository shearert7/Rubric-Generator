export type GradeLevel = 'A' | 'B' | 'C' | 'D' | 'E';

export type ScaleType = 'letters' | 'qcaa_elaborations';

export interface ElaborationRow {
  id: string;
  orderIndex: number;
  learningArea: string; // e.g. 'Science', 'Technologies', 'The Arts', 'HASS', 'English', 'Mathematics', 'Health & Physical Education', 'Languages'
  subject: string; // e.g. 'Science', 'Design and Technologies', 'Digital Technologies', 'Music', 'Visual Arts', 'Drama', 'English', 'Mathematics', 'History', 'Geography', etc.
  yearLevel: string; // 'Year 7' | 'Year 8' | 'Year 9' | 'Year 10' | 'Years 7–8' | 'Years 9–10'
  strand: string; // e.g. 'Science understanding', 'Exploring and responding', 'Knowledge and understanding'
  subStrand?: string; // e.g. 'Physical sciences', 'Technologies contexts' (optional if strand is top-level like in Music)
  descriptors: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
}

export interface CombinedRubricRow {
  id: string;
  learningArea: string;
  subject: string;
  yearLevel: string;
  strand: string;
  subStrand?: string;
  orderIndex: number;
  rowIds: string[];
  items: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  }[];
}

export interface RubricConfig {
  learningArea: string;
  subject: string;
  yearLevel: string;
  scaleType: ScaleType;
  includeSubheader: boolean;
  subheaderText: string;
  sortByQcaaOrder: boolean;
}
