import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

// Custom hook to detect mobile
function useIsMobile(breakpoint = 600) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);
  return isMobile;
}

export const StartScreenContainer = styled(motion.div)`
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  height: calc(100vh - 50px);
  background: rgba(42, 42, 42, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  padding: 50px 0 50px 100px;
  overflow-y: auto;
  overflow-x: hidden;
  color: white;
  z-index: 100;

  @media (max-width: 600px) {
    padding: 20px 20px 20px 20px;
  }
`;

export const StartScreenHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  margin-bottom: 40px;
  width: 100%;
  padding-right: 100px;

  @media (max-width: 600px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    min-height: 40px;
    margin-bottom: 16px;
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export const StartText = styled.h1`
  font-size: 48px;
  font-weight: 300;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;

  img {
    margin-left: 10px;
    width: 48px;
    height: 48px;
    vertical-align: middle;
  }

  @media (max-width: 600px) {
    font-size: 13px;
    img {
      width: 32px;
      height: 32px;
      margin-left: 6px;
    }
  }
`;

export const TilesScrollWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  flex-wrap: nowrap;
  padding-bottom: 20px;
  padding-right: 0;
  
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: 600px) {
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    padding-bottom: 0;
  }
`;

export const TileGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 150px;
  grid-template-rows: repeat(3, 150px);
  gap: 15px;
  min-width: max-content;
  padding-right: 100px;

  @media (max-width: 600px) {
    grid-auto-flow: dense;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 120px;
    grid-template-rows: none;
    gap: 6px;
    min-width: 0;
    padding-right: 0;
    width: 100%;
    max-width: 100%;
  }
`;

export const Tile = styled(motion.div)<{ colSpan?: number; rowSpan?: number; bgColor?: string; isExpanded?: boolean; isInTileExpanded?: boolean }>`
  background: ${(props) => props.bgColor || '#0078d7'};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  cursor: pointer;
  padding: 10px;
  word-break: break-word;
  overflow: hidden;
  text-align: center;
  transform-style: preserve-3d;
  position: relative;
  z-index: ${props => props.isInTileExpanded ? 2 : 1};

  ${({ colSpan }) => colSpan && `grid-column: span ${colSpan};`}
  ${({ rowSpan }) => rowSpan && `grid-row: span ${rowSpan};`}
  ${({ isInTileExpanded }) => isInTileExpanded && `
    grid-column: span 2;
    grid-row: span 2;
    z-index: 2;
  `}

  a {
    pointer-events: auto;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    width: 100%;
    min-width: 0;
    max-width: 100%;
    box-sizing: border-box;
    font-size: 12px;
    padding: 4px;
    position: relative;
  }
`;

export const TileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const TileBack = styled(TileContent)`
  transform: rotateY(180deg);
  background: inherit;
  border-radius: 4px;
  padding: 20px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  word-wrap: break-word;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
`;

export const TileIcon = styled.div`
  font-size: 48px;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 22px;
    margin-bottom: 4px;
  }
`;

export const TileTitle = styled.div`
  font-size: 16px;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

export const ExpandedContent = styled(motion.div)<{ isTileContent?: boolean }>`
  ${props => props.isTileContent ? `
    position: static;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    overflow-y: auto;
    overflow-x: auto;
    padding: 15px;
    box-sizing: border-box;
    opacity: 1;
    pointer-events: auto;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  ` : `
    max-width: 60vw;
    max-height: 80vh;
    min-width: 300px;
    min-height: 200px;
    overflow: auto;
    padding: 10px;
    opacity: 0;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  `}
  background: inherit;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  cursor: default;

  &.expanded {
    opacity: 1;
    pointer-events: auto;
  }

  h3 {
    margin: 0 0 15px 0;
    font-size: 24px;
  }

  p {
    margin: 0 0 10px 0;
    line-height: 1.5;
  }

  ul {
    margin: 0 auto;
    padding: 0;
    max-width: 450px;
    text-align: left;
  }

  li {
    margin-bottom: 8px;
  }

  @media (max-width: 600px) {
    max-width: 95vw !important;
    width: 95vw !important;
    max-height: 75vh !important;
    min-width: unset !important;
    padding: 15px !important;
    margin: 10px;

    h3 {
      font-size: calc(16px + 2vw) !important;
      margin: 0 0 10px 0 !important;
    }

    p {
      font-size: calc(12px + 1vw) !important;
      line-height: 1.4 !important;
      margin: 0 0 8px 0 !important;
    }

    ul {
      max-width: 100% !important;
      padding: 0 0 0 20px !important;
    }

    li {
      font-size: calc(12px + 0.8vw) !important;
      margin-bottom: 6px !important;
    }

    img {
      max-width: 100% !important;
      height: auto !important;
      width: auto !important;
      max-height: 30vh !important;
      object-fit: contain !important;
      border-radius: 6px !important;
    }

    a {
      font-size: calc(12px + 0.8vw) !important;
    }

    div {
      max-width: 100% !important;
    }

    /* Handle column layouts better on mobile */
    [style*="column-count"] {
      column-count: 1 !important;
      column-gap: 0 !important;
    }
  }
`;

// Responsive styles for mobile
const mobileBreakpoint = '600px';

export const mobileStyles = css`
  @media (max-width: ${mobileBreakpoint}) {
    .StartScreenContainer,
    [data-emotion-css*='StartScreenContainer'] {
      padding: 20px 0 20px 0 !important;
      height: calc(100vh - 50px);
    }
    .StartScreenHeader,
    [data-emotion-css*='StartScreenHeader'] {
      flex-direction: column;
      align-items: flex-start;
      padding-right: 20px !important;
      min-height: 40px;
      margin-bottom: 20px;
    }
    .StartText,
    [data-emotion-css*='StartText'] {
      font-size: 32px !important;
    }
    .UserProfile,
    [data-emotion-css*='UserProfile'] {
      font-size: 14px !important;
    }
    .TilesScrollWrapper,
    [data-emotion-css*='TilesScrollWrapper'] {
      flex-direction: column !important;
      overflow-x: hidden !important;
      overflow-y: auto !important;
      padding-bottom: 0 !important;
      width: 100vw !important;
      min-width: 0 !important;
      max-width: 100vw !important;
    }
    .TileGrid,
    [data-emotion-css*='TileGrid'] {
      display: grid !important;
      grid-auto-flow: row !important;
      grid-auto-rows: 120px !important;
      grid-template-columns: 1fr !important;
      grid-template-rows: none !important;
      gap: 10px !important;
      min-width: 0 !important;
      padding-right: 0 !important;
      width: 100vw !important;
      max-width: 100vw !important;
    }
    .Tile,
    [data-emotion-css*='Tile'] {
      width: 95vw !important;
      min-width: 0 !important;
      max-width: 100vw !important;
      font-size: 14px !important;
      padding: 8px !important;
    }
    .TileIcon,
    [data-emotion-css*='TileIcon'] {
      font-size: 32px !important;
    }
    .TileTitle,
    [data-emotion-css*='TileTitle'] {
      font-size: 14px !important;
    }
    .ExpandedContent,
    [data-emotion-css*='ExpandedContent'] {
      min-width: 0 !important;
      min-height: 0 !important;
      max-width: 98vw !important;
      max-height: 70vh !important;
      padding: 20px !important;
    }
  }
`;

const MobileTaskbar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  z-index: 1001;
`;

const MobileTaskbarButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;