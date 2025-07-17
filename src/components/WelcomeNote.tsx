import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

const NotepadContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  max-width: 90vw;
  background: #1a1a1a;
  border: 1px solid #333;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 100;
  border-radius: 4px;
  overflow: hidden;
  border-top: 4px solid #ffd700;

  @media (max-width: 600px) {
    width: 90vw;
    height: auto;
    max-height: 80vh;
  }
`;

const NotepadHeader = styled.div`
  background: #2a2a2a;
  padding: 8px 16px;
  border-bottom: 1px solid #333;
  font-family: 'Segoe UI', sans-serif;
  font-size: 14px;
  color: #fff;
  display: flex;
  align-items: center;
`;

const NotepadContent = styled.div`
  padding: 20px;
  font-family: 'Segoe UI', sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: #fff;
  white-space: pre-wrap;
  height: auto;
  background: #1a1a1a;
  letter-spacing: 0.3px;
  text-align: justify;
  text-justify: inter-word;
`;

const WelcomeNote = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const desktopContent = `Welcome to my portfolio. This site is inspired by the Windows 8 interface, reflecting my fond memories of my first laptop, which ran on Windows 8. I have always been intrigued by its unique UI elements, particularly the dynamic flipping tiles, a feature also familiar to users of the Nokia Lumia 535. I appreciate your understanding of my design choice and invite you to click the Windows icon to explore my portfolio. For convenient navigation, the Projects section includes arrow buttons that allow you to move seamlessly between different projects. I have taken great care to ensure a smooth and engaging user experience throughout the site. Thank you for visiting. This portfolio was created with both passion ❤️ and a touch of nostalgia.`;

  const mobileContent = `Welcome to my portfolio. This site is inspired by the Windows 8 interface, reflecting my fond memories of my first laptop, which ran on Windows 8. I have always been intrigued by its unique UI elements, particularly the dynamic flipping tiles, a feature also familiar to users of the Nokia Lumia 535. I appreciate your understanding of my design choice and invite you to click the Windows icon to explore my portfolio. For convenient navigation, all the tiles include arrow buttons that allow you to move seamlessly between different sections. I have taken great care to ensure a smooth and engaging user experience throughout the site. For the best experience, I recommend visiting this site on a laptop. Thank you for visiting. This portfolio was created with both passion ❤️ and a touch of nostalgia.`;

  return (
    <NotepadContainer>
      <NotepadHeader>Welcome Note - Sticky Notes</NotepadHeader>
      <NotepadContent>
        {isMobile ? mobileContent : desktopContent}
        <br />
        <br />
        - VC
      </NotepadContent>
    </NotepadContainer>
  );
};

export default WelcomeNote;
