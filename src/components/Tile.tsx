import React from 'react';
import { motion } from 'framer-motion';
import { Tile as StyledTile, TileContent as StyledTileContent, TileBack, TileIcon, TileTitle, ExpandedContent } from '../styles/StartScreen.styles';
import type { Project } from '../types/startScreen';

interface TileProps {
  project: Project;
  isExpanded: boolean;
  isInTileExpanded: boolean;
  isFlipped: boolean;
  isFlipping: boolean;
  onTileClick: (projectId: number, event: React.MouseEvent) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  expandedColSpan?: number;
  expandedRowSpan?: number;
  isMobile?: boolean;
}

export const Tile: React.FC<TileProps> = ({
  project,
  isExpanded,
  isInTileExpanded,
  isFlipped,
  isFlipping,
  onTileClick,
  onMouseEnter,
  onMouseLeave,
  isMobile,
}) => {
  // IDs of tiles that should be modal on mobile and in-tile on desktop
  const mobileModalTiles = [1, 4, 8, 21, 22, 23, 25, 26, 28];
  return (
    <StyledTile
      bgColor={project.color}
      colSpan={isInTileExpanded ? (project.expandedColSpan || 2) : project.colSpan}
      rowSpan={isInTileExpanded ? (project.expandedRowSpan || 2) : project.rowSpan}
      isExpanded={isExpanded}
      isInTileExpanded={isInTileExpanded}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{ 
        rotateY: isFlipped || isFlipping ? 180 : 0
      }}
      transition={{ duration: 0.6 }}
      onClick={(e) => onTileClick(project.id, e)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {!isInTileExpanded && (
        <StyledTileContent>
        {project.icon && <TileIcon>{project.icon}</TileIcon>}
        <TileTitle>{project.title}</TileTitle>
        </StyledTileContent>
      )}
      {project.backContent && (
        <TileBack>
          {project.backContent}
        </TileBack>
      )}
      {/* Only render in-tile expansion for these tiles if not on mobile */}
      {project.isExpandable && !project.isModalExpandable && isInTileExpanded &&
        (
          // For special tiles, only allow in-tile expansion if not mobile
          (!mobileModalTiles.includes(project.id) && !project.isModalExpandable) ||
          (mobileModalTiles.includes(project.id) && !isMobile)
        ) && (
        <ExpandedContent
          isTileContent={true}
          className={isInTileExpanded ? 'expanded' : ''}
        >
          {project.expandedContent}
        </ExpandedContent>
      )}
    </StyledTile>
  );
};