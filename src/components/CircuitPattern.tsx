
import React, { useEffect, useRef } from "react";

const CircuitPattern: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    
    const updateSize = () => {
      if (svg) {
        svg.setAttribute('width', `${window.innerWidth}`);
        svg.setAttribute('height', `${window.innerHeight}`);
      }
    };
    
    // Initial size
    updateSize();
    
    // Update on resize
    window.addEventListener('resize', updateSize);
    
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);
  
  return (
    <div className="absolute inset-0 w-full h-full z-0 opacity-15 pointer-events-none overflow-hidden">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{ 
          width: '100%', 
          height: '100%', 
          position: 'absolute',
          top: 0,
          left: 0
        }}
      >
        {/* Circuit paths with animation */}
        <path 
          d="M0,100 L100,100 L100,200 L300,200 L300,400 L500,400" 
          stroke="#6E59A5" 
          strokeWidth="2" 
          fill="none"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          className="animate-draw-line"
          style={{ animationDelay: '0.2s' }}
        />
        
        <path 
          d="M0,300 L200,300 L200,500 L400,500 L400,600" 
          stroke="#6E59A5" 
          strokeWidth="2" 
          fill="none"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          className="animate-draw-line"
          style={{ animationDelay: '0.5s' }}
        />
        
        <path 
          d="M600,0 L600,200 L400,200 L400,300 L500,300" 
          stroke="#030349" 
          strokeWidth="2" 
          fill="none"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          className="animate-draw-line"
          style={{ animationDelay: '0.8s' }}
        />
        
        {/* Circuit nodes */}
        <circle cx="100" cy="100" r="4" fill="#6E59A5" className="animate-fade-in" style={{ animationDelay: '0.3s' }} />
        <circle cx="300" cy="200" r="4" fill="#6E59A5" className="animate-fade-in" style={{ animationDelay: '0.6s' }} />
        <circle cx="500" cy="400" r="6" fill="#6E59A5" className="animate-fade-in" style={{ animationDelay: '0.9s' }} />
        <circle cx="200" cy="300" r="4" fill="#6E59A5" className="animate-fade-in" style={{ animationDelay: '1.2s' }} />
        <circle cx="400" cy="500" r="4" fill="#6E59A5" className="animate-fade-in" style={{ animationDelay: '1.5s' }} />
        <circle cx="600" cy="200" r="4" fill="#030349" className="animate-fade-in" style={{ animationDelay: '1.8s' }} />
        <circle cx="400" cy="300" r="6" fill="#030349" className="animate-fade-in" style={{ animationDelay: '2.1s' }} />
        <circle cx="500" cy="300" r="4" fill="#030349" className="animate-fade-in" style={{ animationDelay: '2.4s' }} />
        
        {/* Add more paths and circles as needed */}
      </svg>
    </div>
  );
};

export default CircuitPattern;
