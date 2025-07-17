import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { fetchAIFact } from '../services/aiFactsService';
import { projects } from '../data/projects';
import { Tile } from './Tile';
import { RandomFactsTile } from './RandomFactsTile';
import {
  StartScreenContainer,
  StartScreenHeader,
  StartText,
  UserProfile,
  TilesScrollWrapper,
  TileGrid,
} from '../styles/StartScreen.styles';
import type { StartScreenProps } from '../types/startScreen';

// Robust mobile detection hook
function useIsMobile(breakpoint = 600) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);
  return isMobile;
}

const StartScreen: React.FC<StartScreenProps> = ({ onClose, expandedTileId, setExpandedTileId }) => {
  const [flippingTileId, setFlippingTileId] = useState<number | null>(null);
  const [hoveredTileId, setHoveredTileId] = useState<number | null>(null);
  const [inTileExpandedId, setInTileExpandedId] = useState<number | null>(null);
  const [currentFact, setCurrentFact] = useState<string>("Loading...");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const intervalRef = useRef<number | null>(null);
  const [flippedTiles, setFlippedTiles] = useState<Set<number>>(new Set());
  const isMobile = useIsMobile();

  const startFlipping = useCallback(() => {
    if (intervalRef.current !== null) return;

    intervalRef.current = window.setInterval(() => {
      const availableProjects = projects.filter(project => project.id !== hoveredTileId);
      if (availableProjects.length === 0) return;

      const randomIndex = Math.floor(Math.random() * availableProjects.length);
      const randomProjectId = availableProjects[randomIndex].id;

      setFlippingTileId(randomProjectId);

      setTimeout(() => {
        setFlippingTileId(null);
      }, 600);
    }, 400);
  }, [hoveredTileId]);

  const stopFlipping = useCallback(() => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startFlipping();
    return () => {
      stopFlipping();
    };
  }, [startFlipping, stopFlipping]);

  const getNewFact = async () => {
    setIsLoading(true);
    setError(null);
    const response = await fetchAIFact();
    setCurrentFact(response.content);
    if (response.error) {
      setError(response.error);
    }
    setIsLoading(false);
  };

  const handleTileClick = async (projectId: number, event: React.MouseEvent) => {
    if ((event.target as HTMLElement).tagName === 'A') {
      return;
    }
    
    const project = projects.find(p => p.id === projectId);
    
    if (project?.backContent) {
      setFlippedTiles(prev => {
        if (prev.has(projectId)) {
          return new Set();
        }
        return new Set([projectId]);
      });
    } else {
      setFlippedTiles(new Set());
    }
    
    if (project?.isExpandable) {
      // If on mobile, always use modal expansion
      if (isMobile || project?.isModalExpandable) {
        if (projectId === 28) {
          await getNewFact();
        }
        setExpandedTileId(expandedTileId === projectId ? null : projectId);
      } else {
        setInTileExpandedId(inTileExpandedId === projectId ? null : projectId);
      }
    }
  };

  useEffect(() => {
    getNewFact();
  }, []);

  const handleRandomFactsTileClick = (e: React.MouseEvent) => {
    // If the click is on the button or inside the button, do not collapse
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    // Otherwise, collapse the tile
    setExpandedTileId(null);
  };

  const projectsWithRandomFacts = projects.map(project =>
    project.id === 29
      ? {
          ...project,
          expandedContent: (
            <div onClick={handleRandomFactsTileClick} style={{ cursor: 'pointer' }}>
              <RandomFactsTile 
                currentFact={currentFact} 
                isLoading={isLoading} 
                error={error} 
                onAnotherFact={getNewFact}
              />
            </div>
          )
        }
      : project
  );

  return (
    <StartScreenContainer
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', damping: 20 }}
    >
      <StartScreenHeader>
        <StartText>Start</StartText>
        <UserProfile>
          Vaibhav Chemboli <img src="/pp2.jpeg" alt="Profile" />
        </UserProfile>
      </StartScreenHeader>
      <TilesScrollWrapper>
        <TileGrid>
          {projectsWithRandomFacts.map((project) => {
            // On mobile, force all expandable tiles to be modal-expandable
            const forceModal = isMobile && project.isExpandable;
            return (
            <Tile
              key={project.id}
              project={{ ...project, isModalExpandable: forceModal || project.isModalExpandable }}
              isExpanded={expandedTileId === project.id}
              isInTileExpanded={inTileExpandedId === project.id}
              isFlipped={flippedTiles.has(project.id)}
              isFlipping={flippingTileId === project.id}
              onTileClick={handleTileClick}
              onMouseEnter={() => setHoveredTileId(project.id)}
              onMouseLeave={() => setHoveredTileId(null)}
              isMobile={isMobile}
            />
            );
          })}
        </TileGrid>
      </TilesScrollWrapper>
    </StartScreenContainer>
  );
};

// Add loading animation styles
const loadingDots = `
  @keyframes loading {
    0% { opacity: 0.2; }
    20% { opacity: 1; }
    100% { opacity: 0.2; }
  }

  .loading-dots span {
    animation: loading 1.4s infinite;
    animation-fill-mode: both;
  }

  .loading-dots span:nth-child(2) {
    animation-delay: 0.2s;
  }

  .loading-dots span:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

// Add the styles to the document
const style = document.createElement('style');
style.textContent = loadingDots;
document.head.appendChild(style);

export default StartScreen;