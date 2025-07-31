import React, { useRef, useEffect } from 'react';

// Y-PATTERN CONFIGURATION
const HONEYCOMB_SPACING = 200; // Distance between Y centers - increased for fewer shapes
const Y_ARM_LENGTH = 85; // Length of each arm - increased size
const Y_LINE_WIDTH_PERCENT = 0.007; // Slightly thicker lines - increased from 0.003
const BASE_PULSE_SPEED = 2000; // Faster transitions - reduced from 3000
const RIPPLE_SPEED = 600; // Faster ripples - reduced from 800
const NEIGHBOR_INFLUENCE = 0.4;

// BURST EFFECT CONFIGURATION
const BURST_INTERVAL = 8000; // Time between bursts in milliseconds
const BURST_DURATION = 4000; // Duration of each burst in milliseconds
const BURST_INTENSITY = 0.8; // Maximum additional brightness from burst

interface YShape {
  x: number;
  y: number;
  row: number;
  col: number;
  basePhase: number;
}

const generateYShapes = (w: number, h: number): YShape[] => {
  const shapes: YShape[] = [];
  const horizontalSpacing = HONEYCOMB_SPACING;
  const verticalSpacing = HONEYCOMB_SPACING * Math.sqrt(3) / 2;
  
  for (let row = -2; row * verticalSpacing < h + Y_ARM_LENGTH * 2; row++) {
    for (let col = -2; col * horizontalSpacing < w + Y_ARM_LENGTH * 2; col++) {
      const offsetX = (row % 2) * (horizontalSpacing / 2);
      const x = col * horizontalSpacing + offsetX;
      const y = row * verticalSpacing;
      
      if (x >= -Y_ARM_LENGTH && x <= w + Y_ARM_LENGTH && y >= -Y_ARM_LENGTH && y <= h + Y_ARM_LENGTH) {
        shapes.push({
          x,
          y,
          row,
          col,
          basePhase: Math.random() * Math.PI * 2
        });
      }
    }
  }
  
  return shapes;
};

const getNeighborInfluence = (shapes: YShape[], currentShape: YShape, time: number): number => {
  let totalInfluence = 0;
  let neighborCount = 0;
  
  shapes.forEach(shape => {
    if (shape === currentShape) return;
    
    const dx = shape.x - currentShape.x;
    const dy = shape.y - currentShape.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Only consider immediate neighbors (within spacing distance)
    if (distance <= HONEYCOMB_SPACING * 1.2) {
      const neighborBrightness = (Math.sin(time / BASE_PULSE_SPEED + shape.basePhase) + 1) / 2;
      const influence = neighborBrightness * Math.exp(-distance / HONEYCOMB_SPACING);
      totalInfluence += influence;
      neighborCount++;
    }
  });
  
  return neighborCount > 0 ? (totalInfluence / neighborCount) * NEIGHBOR_INFLUENCE : 0;
};

const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

const drawAnimatedYPattern = (ctx: CanvasRenderingContext2D, w: number, h: number, time: number, shapes: YShape[]) => {
  ctx.save();
  
  const lineWidth = w * Y_LINE_WIDTH_PERCENT;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  
  // Calculate burst effect
  const burstCycle = time % BURST_INTERVAL;
  let burstEffect = 0;
  
  if (burstCycle < BURST_DURATION) {
    // Create a sweep effect that moves across the screen
    const burstProgress = burstCycle / BURST_DURATION;
    const sweepPosition = burstProgress * (w + h); // Diagonal sweep
    
    // Burst intensity based on time within burst
    const burstIntensity = Math.sin(burstProgress * Math.PI) * BURST_INTENSITY;
    burstEffect = burstIntensity;
  }
  
  // Three-phase pulsing system
  const pulse1 = (Math.sin(time / BASE_PULSE_SPEED) + 1) / 2;
  const pulse2 = (Math.sin(time / BASE_PULSE_SPEED + Math.PI * 2/3) + 1) / 2;
  const pulse3 = (Math.sin(time / BASE_PULSE_SPEED + Math.PI * 4/3) + 1) / 2;
  
  shapes.forEach(shape => {
    // Sectional pulsing based on position (like before)
    const pulseIndex = (shape.row + shape.col) % 3;
    let sectionPulse;
    switch (pulseIndex) {
      case 0:
        sectionPulse = pulse1;
        break;
      case 1:
        sectionPulse = pulse2;
        break;
      case 2:
        sectionPulse = pulse3;
        break;
      default:
        sectionPulse = pulse1;
    }
    
    // Individual pulse cycle (mix with sectional)
    const individualPulse = (Math.sin(time / BASE_PULSE_SPEED + shape.basePhase) + 1) / 2;
    
    // Combine sectional and individual pulses
    const combinedPulse = (sectionPulse * 0.6) + (individualPulse * 0.4);
    
    // Get neighbor influence
    const neighborInfluence = getNeighborInfluence(shapes, shape, time);
    
    // Combine all brightness factors
    const combinedBrightness = combinedPulse + neighborInfluence;
    const smoothedBrightness = easeInOutCubic(Math.min(combinedBrightness, 1));
    
    // Add subtle spatial variation
    const spatialVariation = 0.7 + 0.3 * Math.sin(shape.x * 0.008 + shape.y * 0.008 + time / 8000);
    
    // Calculate burst effect for this shape
    let shapeBurstEffect = 0;
    if (burstEffect > 0) {
      const burstCycle = time % BURST_INTERVAL;
      const burstProgress = burstCycle / BURST_DURATION;
      const sweepPosition = burstProgress * (w + h); // Diagonal sweep
      const shapePosition = shape.x + shape.y; // Shape's position along diagonal
      
      // Calculate distance from sweep wave
      const distanceFromSweep = Math.abs(shapePosition - sweepPosition);
      const sweepWidth = Math.max(w, h) * 0.3; // Width of the sweep wave
      
      if (distanceFromSweep < sweepWidth) {
        // Shape is within the sweep wave
        const sweepIntensity = 1 - (distanceFromSweep / sweepWidth);
        shapeBurstEffect = burstEffect * sweepIntensity * sweepIntensity; // Quadratic falloff
      }
    }
    
    // Calculate final opacity with gentle ripple effect
    const ripplePhase = time / RIPPLE_SPEED + shape.x * 0.01 + shape.y * 0.01;
    const rippleEffect = 1 + 0.15 * Math.sin(ripplePhase); // Reduced ripple intensity
    
    const baseOpacity = (0.25 + 0.35 * smoothedBrightness) * spatialVariation * rippleEffect;
    const finalOpacity = Math.min(1, baseOpacity + shapeBurstEffect); // Add burst effect
    
    ctx.strokeStyle = `rgba(255, 255, 255, ${Math.max(0, Math.min(1, finalOpacity))})`;
    
    ctx.beginPath();
    
    // Draw Y with arms extending toward hexagon centers (120° apart)
    // Arm 1: pointing up (0 degrees)
    ctx.moveTo(shape.x, shape.y);
    ctx.lineTo(shape.x, shape.y - Y_ARM_LENGTH);
    
    // Arm 2: pointing down-left (120 degrees)
    ctx.moveTo(shape.x, shape.y);
    ctx.lineTo(shape.x - Y_ARM_LENGTH * Math.cos(Math.PI / 6), shape.y + Y_ARM_LENGTH * Math.sin(Math.PI / 6));
    
    // Arm 3: pointing down-right (240 degrees)
    ctx.moveTo(shape.x, shape.y);
    ctx.lineTo(shape.x + Y_ARM_LENGTH * Math.cos(Math.PI / 6), shape.y + Y_ARM_LENGTH * Math.sin(Math.PI / 6));
    
    ctx.stroke();
  });
  
  ctx.restore();
};

const FlowingStreaksBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    // Generate Y shapes once and reuse
    let shapes = generateYShapes(w, h);

    let animationId: number;

    const animate = (time: number) => {
      // Clear canvas
      ctx.clearRect(0, 0, w, h);

      // Add blue gradient background
      const gradient = ctx.createLinearGradient(0, 0, w, h);
      gradient.addColorStop(0, '#0065d3');
      gradient.addColorStop(1, '#0065d3');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      // Draw animated Y pattern
      drawAnimatedYPattern(ctx, w, h, time, shapes);

      animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      // Regenerate shapes for new dimensions
      shapes = generateYShapes(w, h);
    };

    window.addEventListener('resize', handleResize);
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ 
        zIndex: -1,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}
    />
  );
};

export default FlowingStreaksBackground;
