import type { ReactNode } from 'react';

export interface StartScreenProps {
  onClose: () => void;
  expandedTileId: number | null;
  setExpandedTileId: (id: number | null) => void;
}

export interface Project {
  id: number;
  title: string;
  color: string;
  icon: ReactNode;
  colSpan?: number;
  rowSpan?: number;
  isExpandable?: boolean;
  isModalExpandable?: boolean;
  expandedContent?: ReactNode;
  backContent?: string;
  expandedColSpan?: number;
  expandedRowSpan?: number;
} 