
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
        {/* Static circuit paths */}
        <path 
          d="M0,100 L100,100 L100,200 L300,200 L300,400 L500,400" 
          stroke="#030349" 
          strokeWidth="2" 
          fill="none"
        />
        
        <path 
          d="M0,300 L200,300 L200,500 L400,500 L400,600" 
          stroke="#030349" 
          strokeWidth="2" 
          fill="none"
        />
        
        <path 
          d="M600,0 L600,200 L400,200 L400,300 L500,300" 
          stroke="#34200C" 
          strokeWidth="2" 
          fill="none"
        />
        
        {/* More centered circuit elements */}
        <path 
          d="M300,250 L400,250 L400,350 L500,350 L500,450" 
          stroke="#030349" 
          strokeWidth="2" 
          fill="none"
        />
        
        <path 
          d="M450,200 L550,200 L550,300 L650,300" 
          stroke="#34200C" 
          strokeWidth="2" 
          fill="none"
        />
        
        {/* Circuit nodes */}
        <circle cx="100" cy="100" r="4" fill="#030349" />
        <circle cx="300" cy="200" r="4" fill="#030349" />
        <circle cx="500" cy="400" r="6" fill="#030349" />
        <circle cx="200" cy="300" r="4" fill="#030349" />
        <circle cx="400" cy="500" r="4" fill="#030349" />
        <circle cx="600" cy="200" r="4" fill="#34200C" />
        <circle cx="400" cy="300" r="6" fill="#34200C" />
        <circle cx="500" cy="300" r="4" fill="#34200C" />
        
        {/* Additional nodes for more centered elements */}
        <circle cx="400" cy="250" r="4" fill="#030349" />
        <circle cx="500" cy="350" r="4" fill="#030349" />
        <circle cx="500" cy="450" r="6" fill="#030349" />
        <circle cx="550" cy="200" r="4" fill="#34200C" />
        <circle cx="550" cy="300" r="4" fill="#34200C" />
        <circle cx="650" cy="300" r="6" fill="#34200C" />
      </svg>
    </div>
  );
};

export default CircuitPattern;
