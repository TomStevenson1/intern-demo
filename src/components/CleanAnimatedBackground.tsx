import React from 'react';

const CleanAnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* CSS-only animated background */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute w-96 h-96 rounded-full bg-blue-500/10 animate-float-1" style={{ top: '10%', left: '10%' }} />
        <div className="absolute w-80 h-80 rounded-full bg-blue-600/15 animate-float-2" style={{ bottom: '10%', right: '10%' }} />
        <div className="absolute w-64 h-64 rounded-full bg-blue-400/8 animate-float-3" style={{ top: '50%', left: '70%' }} />
        
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-5 animate-grid-move"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Floating dots */}
        <div className="absolute w-2 h-2 bg-white/40 rounded-full animate-float-dot-1" style={{ top: '20%', left: '30%' }} />
        <div className="absolute w-1.5 h-1.5 bg-white/30 rounded-full animate-float-dot-2" style={{ top: '60%', left: '20%' }} />
        <div className="absolute w-2 h-2 bg-white/35 rounded-full animate-float-dot-3" style={{ top: '40%', right: '25%' }} />
        <div className="absolute w-1 h-1 bg-white/50 rounded-full animate-float-dot-4" style={{ bottom: '30%', left: '60%' }} />
      </div>
    </div>
  );
};

export default CleanAnimatedBackground;
