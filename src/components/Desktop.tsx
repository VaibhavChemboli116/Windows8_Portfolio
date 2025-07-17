import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import recycleBinIcon from '../assets/Recycle_bin_full.png';
import myComputerIcon from '../assets/my_com.png';
import WelcomeNote from './WelcomeNote';

const DesktopContainer = styled.div`
  width: 100%;
  height: calc(100vh - 40px);
  padding: 20px 0 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  gap: 20px;
  align-content: start;
  position: absolute;
  top: 0;
  left: 0;
  /* background-color: rgba(255, 0, 0, 0.5); */
`;

const DesktopIcon = styled(motion.div)`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: white;
  text-align: center;
`;

const IconImage = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
`;

const IconName = styled.span`
  margin-top: 8px;
  color: white;
  font-size: 12px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const MessageOverlay = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 20px;
  border-radius: 8px;
  z-index: 1000;
`;

const desktopIcons = [
  { id: 1, name: 'Recycle Bin', icon: <IconImage src={recycleBinIcon} alt="Recycle Bin" /> },
  { id: 2, name: 'My Computer', icon: <IconImage src={myComputerIcon} alt="My Computer" /> },
];

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

const Desktop = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const isMobile = useIsMobile();

  const handleIconClick = () => {
    setMessage('Click on windows icon');
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
      setMessage('');
    }, 3000);
  };

  return (
    <>
      <DesktopContainer>
        {!isMobile && desktopIcons.map((icon) => (
          <DesktopIcon
            key={icon.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleIconClick()}
          >
            {icon.icon}
            <IconName>{icon.name}</IconName>
          </DesktopIcon>
        ))}
      </DesktopContainer>
      <WelcomeNote />
      <MessageOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: showMessage ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: showMessage ? 'auto' : 'none' }}
      >
        {message}
      </MessageOverlay>
    </>
  );
};

export default Desktop;