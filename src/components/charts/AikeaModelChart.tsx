import React, { useState } from 'react';

const ContourEstimatorVisual = () => {
  const blueColor = '#0065d3';
  const greyColor = 'rgb(55, 65, 81)';

  // State for hover effects
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  const getBoxStyle = (baseStyle: any, elementId: string) => {
    const isHovered = hoveredElement === elementId;
    return {
      ...baseStyle,
      transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      boxShadow: isHovered ? baseStyle.boxShadowHover : baseStyle.boxShadow,
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    };
  };

  const getUNetStyle = () => {
    const isHovered = hoveredElement === 'unet';
    return {
      background: `linear-gradient(135deg, ${greyColor} 0%, ${blueColor} 100%)`,
      color: 'white',
      padding: '20px 32px',
      borderRadius: '12px',
      boxShadow: isHovered ? '0 8px 20px rgba(0, 0, 0, 0.2)' : '0 4px 12px rgba(0, 0, 0, 0.15)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative' as const,
      overflow: 'hidden',
      transform: isHovered ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)'
    };
  };

  const inputStyle = {
    backgroundColor: greyColor,
    color: 'white',
    padding: '16px 20px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    boxShadowHover: '0 6px 12px rgba(0, 0, 0, 0.15)'
  };

  const convStyle = {
    backgroundColor: blueColor,
    color: 'white',
    padding: '16px 20px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 101, 211, 0.2)',
    boxShadowHover: '0 6px 12px rgba(0, 101, 211, 0.3)'
  };

  return (
    <div style={{ width: '100%', padding: '32px 16px', overflowX: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Main Architecture Flow */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        minWidth: 'max-content',
        gap: '16px',
        marginBottom: '48px'
      }}>
        
        {/* Input */}
        <div style={{ textAlign: 'center' }}>
          <div 
            style={getBoxStyle(inputStyle, 'input')}
            onMouseEnter={() => setHoveredElement('input')}
            onMouseLeave={() => setHoveredElement(null)}
          >
            <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>Input</div>
            <div style={{ fontSize: '11px', opacity: 0.9 }}>224 × 224 × 5</div>
            <div style={{ fontSize: '10px', opacity: 0.7, marginTop: '2px' }}>5 channels</div>
          </div>
        </div>

        {/* Arrow */}
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M8 12 L16 12 M16 12 L12 8 M16 12 L12 16" 
                stroke={greyColor} 
                strokeWidth="2" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round"/>
        </svg>

        {/* Pre-Conv 0 */}
        <div style={{ textAlign: 'center' }}>
          <div 
            style={getBoxStyle(convStyle, 'preconv0')}
            onMouseEnter={() => setHoveredElement('preconv0')}
            onMouseLeave={() => setHoveredElement(null)}
          >
            <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>Pre-Conv 0</div>
            <div style={{ fontSize: '11px', opacity: 0.9 }}>Conv2D</div>
            <div style={{ fontSize: '10px', opacity: 0.7, marginTop: '2px' }}>630 params</div>
          </div>
          <div style={{ fontSize: '10px', color: greyColor, marginTop: '4px' }}>224 × 224 × 5</div>
        </div>

        {/* Arrow */}
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M8 12 L16 12 M16 12 L12 8 M16 12 L12 16" 
                stroke={greyColor} 
                strokeWidth="2" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round"/>
        </svg>

        {/* Final Pre-Conv */}
        <div style={{ textAlign: 'center' }}>
          <div 
            style={getBoxStyle(convStyle, 'finalpreconv')}
            onMouseEnter={() => setHoveredElement('finalpreconv')}
            onMouseLeave={() => setHoveredElement(null)}
          >
            <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>Final Pre-Conv</div>
            <div style={{ fontSize: '11px', opacity: 0.9 }}>Conv2D</div>
            <div style={{ fontSize: '10px', opacity: 0.7, marginTop: '2px' }}>378 params</div>
          </div>
          <div style={{ fontSize: '10px', color: greyColor, marginTop: '4px' }}>224 × 224 × 3</div>
        </div>

        {/* Arrow */}
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M8 12 L16 12 M16 12 L12 8 M16 12 L12 16" 
                stroke={greyColor} 
                strokeWidth="2" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round"/>
        </svg>

        {/* UNet Block */}
        <div style={{ textAlign: 'center' }}>
          <div 
            style={getUNetStyle()}
            onMouseEnter={() => setHoveredElement('unet')}
            onMouseLeave={() => setHoveredElement(null)}
          >
            <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '6px' }}>UNet</div>
            <div style={{ fontSize: '12px', opacity: 0.95 }}>Functional</div>
            <div style={{ fontSize: '11px', opacity: 0.8, marginTop: '4px' }}>16.1M params</div>
            <div style={{ fontSize: '10px', opacity: 0.7, marginTop: '2px' }}>61.48 MB</div>
          </div>
          <div style={{ fontSize: '10px', color: greyColor, marginTop: '4px' }}>224 × 224 × 2</div>
        </div>

        {/* Arrow */}
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M8 12 L16 12 M16 12 L12 8 M16 12 L12 16" 
                stroke={greyColor} 
                strokeWidth="2" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round"/>
        </svg>

        {/* Output */}
        <div style={{ textAlign: 'center' }}>
          <div 
            style={getBoxStyle(inputStyle, 'output')}
            onMouseEnter={() => setHoveredElement('output')}
            onMouseLeave={() => setHoveredElement(null)}
          >
            <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>Output</div>
            <div style={{ fontSize: '11px', opacity: 0.9 }}>224 × 224 × 2</div>
            <div style={{ fontSize: '10px', opacity: 0.7, marginTop: '2px' }}>Contours</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function AikeaModelChart() {
  return <ContourEstimatorVisual />;
}
