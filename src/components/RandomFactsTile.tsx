import React from 'react';

interface RandomFactsTileProps {
  currentFact: string;
  isLoading: boolean;
  error: string | null;
  onAnotherFact?: (e?: React.MouseEvent) => void;
}

export const RandomFactsTile: React.FC<RandomFactsTileProps> = ({ currentFact, isLoading, error, onAnotherFact }) => {
  // Check if mobile
  const isMobile = window.innerWidth <= 600;
  
  return (
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <h3 style={{ fontSize: isMobile ? '16px' : '18px', margin: '0 0 10px 0' }}>Random Facts</h3>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: isMobile ? '10px' : '15px',
        fontSize: isMobile ? '12px' : '14px',
        padding: isMobile ? '8px' : '10px',
        minHeight: '100px',
        justifyContent: 'center',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        wordBreak: 'break-word',
        maxWidth: '100%',
        boxSizing: 'border-box'
      }}>
        {isLoading ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <div className="loading-dots">
              <span>.</span><span>.</span><span>.</span>
            </div>
          </div>
        ) : (
          <>
            <p style={{ 
              wordWrap: 'break-word', 
              overflowWrap: 'break-word', 
              wordBreak: 'break-word',
              margin: '0',
              lineHeight: '1.4',
              maxWidth: '100%'
            }}>{currentFact}</p>
            {error && (
              <p style={{ fontSize: '12px', color: '#ff6b6b', marginTop: '5px' }}>
                {error}
              </p>
            )}
            <button 
              style={{ 
                margin: '10px auto 0', 
                padding: isMobile ? '4px 12px' : '6px 18px', 
                borderRadius: '6px', 
                border: '2px solid #000', 
                background: '#ffb900', 
                color: '#222', 
                fontWeight: 600, 
                cursor: 'pointer', 
                fontSize: isMobile ? '11px' : '14px' 
              }}
              onClick={e => { e.stopPropagation(); onAnotherFact && onAnotherFact(e); }}
              disabled={isLoading}
            >
              Another Fact
            </button>
          </>
        )}
      </div>
    </div>
  );
}; 