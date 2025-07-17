import styled from '@emotion/styled';
import { FaWindows, FaChrome, FaFileAlt, FaCode, FaBatteryFull, FaWifi, FaVolumeUp, FaGraduationCap, FaArrowLeft, FaSearch, FaLock, FaRegEnvelope, FaChevronDown, FaUserCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TaskbarProps {
  onStartClick: () => void;
  isStartMenuOpen: boolean;
  setIsStartMenuOpen: (open: boolean) => void;
  expandedTileId: number | null;
  setExpandedTileId: (id: number | null) => void;
}

const TaskbarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  border-top: 1px solid #333;

  @media (max-width: 600px) {
    height: 40px;
    padding: 0 2px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 600px) {
    gap: 6px;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding-right: 10px;

  @media (max-width: 600px) {
    gap: 6px;
    padding-right: 2px;
  }
`;

const StartButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 32px;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  width: 42px;
  height: 42px;

  &:hover {
    background-color: #333;
  }

  svg {
    width: 28px;
    height: 28px;
  }

  @media (max-width: 600px) {
    width: 32px;
    height: 32px;
    font-size: 22px;
    padding: 2px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const AppIcon = styled(motion.div)`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: white;
  margin: 0;
  cursor: pointer;
  padding: 5px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #333;
    filter: none;
  }

  svg {
    width: 28px;
    height: 28px;
  }

  @media (max-width: 600px) {
    width: 32px;
    height: 32px;
    font-size: 22px;
    padding: 2px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const TimeDisplay = styled.div`
  color: white;
  font-size: 14px;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 80px;

  @media (max-width: 600px) {
    font-size: 10px;
    min-width: 50px;
    padding: 0 2px;
  }
`;

const DateText = styled.span`
  font-size: 12px;
  color: #999;
  margin-top: 2px;
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

const dummyApps = [
  { id: 1, icon: <FaChrome /> },
  { id: 2, icon: <FaFileAlt /> },
  { id: 3, icon: <FaCode /> },
];

// Mobile detection hook
function useIsMobile(breakpoint = 600) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);
  return isMobile;
}

// Mobile taskbar styles
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

// Glassmorphic lock screen overlay styles
const LockScreenOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(34, 34, 34, 0.55);
  backdrop-filter: blur(18px) saturate(120%);
  -webkit-backdrop-filter: blur(18px) saturate(120%);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1.5px solid rgba(255,255,255,0.12);
  border-bottom: 1.5px solid rgba(255,255,255,0.12);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;

const LockTimeWidget = styled.div`
  color: #fff;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 32px;
  letter-spacing: 2px;
`;

const LockMessageWidget = styled.div`
  background: #fff;
  color: #222;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.13);
  padding: 0;
  width: 90vw;
  max-width: 400px;
  text-align: left;
  border: none;
  margin-bottom: 16px;
  overflow: hidden;

  @media (max-width: 600px) {
    width: 85vw;
    max-width: none;
  }
`;

const LockMessageHeader = styled.div`
  background: #1976d2;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  font-size: 15px;
  font-weight: 500;
`;

const LockMessageHeaderIcon = styled.div`
  margin-right: 8px;
  font-size: 18px;
`;

const LockMessageHeaderTitle = styled.div`
  flex: 1;
`;

const LockMessageHeaderTime = styled.div`
  font-size: 13px;
  margin-right: 6px;
  color: #bbdefb;
`;

const LockMessageHeaderDropdown = styled.div`
  font-size: 13px;
`;

const LockMessageBody = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 14px 12px 14px 16px;
  max-height: calc(35vh);
  overflow: hidden;
  
  @media (max-width: 600px) {
    padding: 10px 8px 10px 12px;
    max-height: calc(30vh);
  }
`;

const LockMessageText = styled.div`
  flex: 1;
`;

const LockMessageSender = styled.div`
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 2px;
`;

const LockMessageContent = styled.div`
  font-size: 14px;
  color: #222;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  max-height: 30vh;
  overflow-y: auto;
  padding-right: 4px;
  
  @media (max-width: 600px) {
    font-size: 13px;
    max-height: 25vh;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 2px;
  }
`;

const LockMessageAvatar = styled.div`
  margin-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #90caf9;
`;

const Taskbar = ({ onStartClick, isStartMenuOpen, setIsStartMenuOpen, expandedTileId, setExpandedTileId }: TaskbarProps) => {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const isMobile = useIsMobile();
  const [locked, setLocked] = useState(() => {
    // Check if it's the first visit
    const isFirstVisit = !localStorage.getItem('hasVisited');
    // If it's mobile and first visit, start locked
    const shouldBeLocked = isMobile && isFirstVisit;
    if (isFirstVisit) {
      localStorage.setItem('hasVisited', 'true');
    }
    // Debug info in console
    console.log('Lock Screen Debug:', {
      isMobile,
      isFirstVisit,
      shouldBeLocked,
      hasVisited: localStorage.getItem('hasVisited'),
      lastVisitTime: localStorage.getItem('lastVisitTime')
    });
    return shouldBeLocked;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Auto-lock when returning to the site after 30 minutes
  useEffect(() => {
    if (isMobile) {
      const lastVisitTime = localStorage.getItem('lastVisitTime');
      const currentTime = new Date().getTime();
      
      if (lastVisitTime && (currentTime - parseInt(lastVisitTime)) > 30 * 60 * 1000) {
        setLocked(true);
      }
      
      localStorage.setItem('lastVisitTime', currentTime.toString());
    }
  }, [isMobile]);

  const handleAppClick = () => {
    setMessage('Click on windows icon');
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
      setMessage('');
    }, 3000);
  };

  const handleBack = () => {
    // If on home screen (Start menu closed), do nothing
    if (!isStartMenuOpen) return;
    // If a tile is expanded, collapse it
    if (expandedTileId) {
      setExpandedTileId(null);
      return;
    }
    // If Start menu is open and no tile is expanded, close Start menu (go to home)
    setIsStartMenuOpen(false);
  };


  const handleLock = () => {
    setLocked(true);
  };

  const handleUnlock = () => {
    setLocked(false);
  };

  const formatTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedDate = date.toLocaleDateString('en-US', { 
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
    return {
      time: `${formattedHours}:${formattedMinutes} ${ampm}`,
      date: formattedDate
    };
  };

  if (isMobile) {
    return (
      <>
        <AnimatePresence>
          {locked && (
            <LockScreenOverlay
              key="lockscreen"
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -600, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0.8, 0.2, 1] }}
              onClick={handleUnlock}
            >
              <LockTimeWidget>
                {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </LockTimeWidget>
              <LockMessageWidget>
                <LockMessageHeader>
                  <LockMessageHeaderIcon><FaRegEnvelope /></LockMessageHeaderIcon>
                  <LockMessageHeaderTitle>Messages</LockMessageHeaderTitle>
                  <LockMessageHeaderTime>now</LockMessageHeaderTime>
                  <LockMessageHeaderDropdown><FaChevronDown /></LockMessageHeaderDropdown>
                </LockMessageHeader>
                <LockMessageBody>
                  <LockMessageText>
                    <LockMessageSender>Vaibhav Chemboli</LockMessageSender>
                    <LockMessageContent>
                      Hi There!!!
                    </LockMessageContent>
                  </LockMessageText>
                  <LockMessageAvatar>
                    <FaUserCircle />
                  </LockMessageAvatar>
                </LockMessageBody>
              </LockMessageWidget>
              <div style={{ color: '#aaa', fontSize: 12, marginTop: 24 }}>(Tap anywhere to unlock)</div>
            </LockScreenOverlay>
          )}
        </AnimatePresence>
        <MobileTaskbar>
          <MobileTaskbarButton aria-label="Back" onClick={handleBack}>
            <FaArrowLeft />
          </MobileTaskbarButton>
          <MobileTaskbarButton aria-label="Start" onClick={onStartClick}>
            <FaWindows />
          </MobileTaskbarButton>
          <MobileTaskbarButton aria-label="Lock" onClick={handleLock}>
            <FaLock />
          </MobileTaskbarButton>
          <MessageOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: showMessage ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ pointerEvents: showMessage ? 'auto' : 'none' }}
          >
            {message}
          </MessageOverlay>
        </MobileTaskbar>
      </>
    );
  }

  return (
    <TaskbarContainer>
      <LeftSection>
        <StartButton onClick={onStartClick}>
          <FaWindows />
        </StartButton>
        {dummyApps.map((app) => (
          <AppIcon key={app.id} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleAppClick}>
            {app.icon}
          </AppIcon>
        ))}
      </LeftSection>
      <RightSection>
        <AppIcon>
          <FaBatteryFull />
        </AppIcon>
        <AppIcon>
          <FaWifi />
        </AppIcon>
        <AppIcon>
          <FaVolumeUp />
        </AppIcon>
        <TimeDisplay>
          {formatTime(currentTime).time}
          <DateText>{formatTime(currentTime).date}</DateText>
        </TimeDisplay>
      </RightSection>
      <MessageOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: showMessage ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: showMessage ? 'auto' : 'none' }}
      >
        {message}
      </MessageOverlay>
    </TaskbarContainer>
  );
};

export default Taskbar;