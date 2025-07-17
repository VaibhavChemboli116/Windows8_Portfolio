import styled from '@emotion/styled'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Taskbar from './components/Taskbar'
import StartScreen from './components/StartScreen'
import Desktop from './components/Desktop'
import './App.css'
import backgroundImage from './assets/windows_bg.jpeg'; // Assuming the image is named windows_bg.jpg
import { projects } from './data/projects';
import { ExpandedContent, mobileStyles } from './styles/StartScreen.styles';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react';
import { RandomFactsTile } from './components/RandomFactsTile';
import { fetchAIFact } from './services/aiFactsService';
import { useState, useEffect } from 'react';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;

  @media (max-width: 600px) {
    background-position: bottom right 15%;
    background-size: cover;
  }
`

const CenteredModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 24px;
  padding: 15px 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.2s ease;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  height: 50px;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    transform: translateY(-50%);
  }

  &.prev {
    left: 20px;
  }

  &.next {
    right: 20px;
  }

  @media (max-width: 600px) {
    padding: 10px 8px;
    font-size: 18px;
    min-width: 40px;
    height: 40px;

    &.prev {
      left: 10px;
    }

    &.next {
      right: 10px;
    }
  }
`;

const App = () => {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false)
  const [expandedTileId, setExpandedTileId] = useState<number | null>(null);
  const isMobile = window.innerWidth <= 600;

  // Add state for Random Facts tile
  const [currentFact, setCurrentFact] = useState<string>('Loading...');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch a new fact
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

  // Fetch a fact on mount if Random Facts is opened
  useEffect(() => {
    if (expandedTileId === 29) {
      getNewFact();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expandedTileId]);

  const handleCloseExpandedTile = () => {
    setExpandedTileId(null);
  };

  const project = expandedTileId ? projects.find(p => p.id === expandedTileId) : null;

  // Get project IDs for projects 1-14 (ids 9-22)
  const projectIds = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
  
  // Get all expandable tile IDs for mobile
  const allExpandableTileIds = isMobile ? 
    projects.filter(p => p.isExpandable).map(p => p.id) :
    projectIds;
  
  const isProjectModal = expandedTileId && (projectIds.includes(expandedTileId) || isMobile);
  const currentTileIndex = allExpandableTileIds.indexOf(expandedTileId!);
  
  const handlePreviousProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentTileIndex > 0) {
      setExpandedTileId(allExpandableTileIds[currentTileIndex - 1]);
    }
  };

  const handleNextProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentTileIndex < allExpandableTileIds.length - 1) {
      setExpandedTileId(allExpandableTileIds[currentTileIndex + 1]);
    }
  };

  return (
    <>
      <Global styles={mobileStyles} />
      <AppContainer>
        <Desktop />
        <Taskbar
          onStartClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
          isStartMenuOpen={isStartMenuOpen}
          setIsStartMenuOpen={setIsStartMenuOpen}
          expandedTileId={expandedTileId}
          setExpandedTileId={setExpandedTileId}
        />
        <AnimatePresence>
          {isStartMenuOpen && (
            <StartScreen 
              onClose={() => setIsStartMenuOpen(false)}
              expandedTileId={expandedTileId}
              setExpandedTileId={setExpandedTileId}
            />
          )}
        </AnimatePresence>

        {expandedTileId && project && ReactDOM.createPortal(
          <AnimatePresence>
            <CenteredModalOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseExpandedTile}
            >
              <ExpandedContent
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="expanded"
                onClick={(e) => e.stopPropagation()}
              >
                {expandedTileId === 29 ? (
                  <RandomFactsTile
                    currentFact={currentFact}
                    isLoading={isLoading}
                    error={error}
                    onAnotherFact={getNewFact}
                  />
                ) : (
                  project.expandedContent
                )}
              </ExpandedContent>
              
              {/* Navigation arrows for projects or all tiles on mobile */}
              {(isProjectModal || isMobile) && (
                <>
                  <NavigationButton
                    className="prev"
                    onClick={handlePreviousProject}
                    disabled={currentTileIndex <= 0}
                    title="Previous"
                  >
                    <FaChevronLeft />
                  </NavigationButton>
                  <NavigationButton
                    className="next"
                    onClick={handleNextProject}
                    disabled={currentTileIndex >= allExpandableTileIds.length - 1}
                    title="Next"
                  >
                    <FaChevronRight />
                  </NavigationButton>
                </>
              )}
            </CenteredModalOverlay>
          </AnimatePresence>,
          document.body
        )}
      </AppContainer>
    </>
  )
};

export default App