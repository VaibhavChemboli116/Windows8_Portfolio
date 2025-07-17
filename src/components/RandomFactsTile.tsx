import React from 'react';

interface RandomFactsTileProps {
  currentFact: string;
  isLoading: boolean;
  error: string | null;
  onAnotherFact?: (e?: React.MouseEvent) => void;
}

export const RandomFactsTile: React.FC<RandomFactsTileProps> = ({ currentFact, isLoading, error, onAnotherFact }) => {
  return (
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <h3>Random Facts</h3>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '15px',
        fontSize: '14px',
        padding: '10px',
        minHeight: '100px',
        justifyContent: 'center'
      }}>
        {isLoading ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <div className="loading-dots">
              <span>.</span><span>.</span><span>.</span>
            </div>
          </div>
        ) : (
          <>
            <p>{currentFact}</p>
            {error && (
              <p style={{ fontSize: '12px', color: '#ff6b6b', marginTop: '5px' }}>
                {error}
              </p>
            )}
            <button 
              style={{ margin: '10px auto 0', padding: '6px 18px', borderRadius: '6px', border: '2px solid #000', background: '#ffb900', color: '#222', fontWeight: 600, cursor: 'pointer', fontSize: '14px' }}
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