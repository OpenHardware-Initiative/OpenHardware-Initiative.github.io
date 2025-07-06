import React, { useEffect, useRef } from "react";

const CircuitPattern: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const updateSize = () => {
      svg.setAttribute("width", `${window.innerWidth}`);
      svg.setAttribute("height", `${window.innerHeight}`);
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-0 opacity-20 pointer-events-none overflow-hidden">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
        preserveAspectRatio="xMidYMid slice"
        xmlns="https://www.w3.org/2000/svg"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        {/* Animated paths */}
        <path
          d="M0,100 L100,100 L100,200 L300,200 L300,400 L500,400"
          id="path1"
          stroke="#333351"
          strokeWidth="2"
          fill="none"
          className="circuit-path"
        />
        <path
          d="M0,300 L200,300 L200,500 L400,500 L400,600"
          id="path2"
          stroke="#333351"
          strokeWidth="2"
          fill="none"
          className="circuit-path"
        />
        <path
          d="M600,0 L600,200 L400,200 L400,300 L500,300"
          id="path3"
          stroke="#c28f40"
          strokeWidth="2"
          fill="none"
          className="circuit-path"
        />
        <path
          d="M300,250 L400,250 L400,350 L500,350 L500,450"
          id="path4"
          stroke="#333351"
          strokeWidth="2"
          fill="none"
          className="circuit-path"
        />
        <path
          d="M450,200 L550,200 L550,300 L650,300"
          id="path5"
          stroke="#c28f40"
          strokeWidth="2"
          fill="none"
          className="circuit-path"
        />

        {/* Pulsing glowing nodes */}
        <circle cx="100" cy="100" r="4" fill="#333351" className="glow-blue pulse" />
        <circle cx="300" cy="200" r="4" fill="#333351" className="glow-blue" />
        <circle cx="500" cy="400" r="6" fill="#333351" className="glow-blue pulse" />
        <circle cx="200" cy="300" r="4" fill="#333351" className="glow-blue" />
        <circle cx="400" cy="500" r="4" fill="#333351" className="glow-blue pulse" />
        <circle cx="600" cy="200" r="4" fill="#c28f40" className="glow-gold" />
        <circle cx="400" cy="300" r="6" fill="#c28f40" className="glow-gold pulse" />
        <circle cx="500" cy="300" r="4" fill="#c28f40" className="glow-gold" />
        <circle cx="400" cy="250" r="4" fill="#333351" className="glow-blue" />
        <circle cx="500" cy="350" r="4" fill="#333351" className="glow-blue" />
        <circle cx="500" cy="450" r="6" fill="#333351" className="glow-blue pulse" />
        <circle cx="550" cy="200" r="4" fill="#c28f40" className="glow-gold" />
        <circle cx="550" cy="300" r="4" fill="#c28f40" className="glow-gold pulse" />
        <circle cx="650" cy="300" r="6" fill="#c28f40" className="glow-gold" />

        {/* Tracers following the paths */}
        <circle r="4" fill="#333351" className="circle">
          <animateMotion dur="5s" repeatCount="indefinite">
            <mpath href="#path1" />
          </animateMotion>
        </circle>

        <circle r="4" fill="#333351" className="circle">
          <animateMotion dur="6s" repeatCount="indefinite" begin="1s">
            <mpath href="#path2" />
          </animateMotion>
        </circle>

        <circle r="4" fill="#c28f40" className="circle">
          <animateMotion dur="5s" repeatCount="indefinite" begin="2s">
            <mpath href="#path3" />
          </animateMotion>
        </circle>


        <circle r="7" fill="#333351" opacity="0.3" className="tracer-aura">
          <animateMotion dur="5s" repeatCount="indefinite">
            <mpath href="#path1" />
          </animateMotion>
          <animate
            attributeName="r"
            values="5;9;5"
            dur="1.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.3;0.6;0.3"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>

        <circle r="7" fill="#333351" opacity="0.3" className="tracer-aura">
          <animateMotion dur="6s" repeatCount="indefinite" begin="1s">
            <mpath href="#path2" />
          </animateMotion>
          <animate
            attributeName="r"
            values="6;9;6"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.3;0.6;0.3"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>

        <circle r="7" fill="#c28f40" opacity="0.3" className="tracer-aura">
          <animateMotion dur="5s" repeatCount="indefinite" begin="2s">
            <mpath href="#path3" />
          </animateMotion>
          <animate
            attributeName="r"
            values="5;10;5"
            dur="1s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.3;0.6;0.3"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      {/* Inject CSS safely */}
      <style
        dangerouslySetInnerHTML={{
          __html: `

            .circle {
              filter: drop-shadow(0 0 4pxrgba(51, 51, 81, 0.14));
            }
            .tracer-aura {
              filter: drop-shadow(0 0 10px currentColor);
            }
            .pulse {
              animation: pulse 2s infinite ease-in-out;
            }

            @keyframes pulse {
              0%, 100% {
                r: 4;
                opacity: 0.6;
              }
              50% {
                r: 6;
                opacity: 1;
              }
            }

            /* Separate glow effects for each color */
            .glow-blue {
              filter: drop-shadow(0 0 4px #333351) drop-shadow(0 0 8px #333351);
            }
            .glow-gold {
              filter: drop-shadow(0 0 4px #c28f40) drop-shadow(0 0 8px #c28f40);
            }

            /* Add random delays for each pulsing dot */
            .pulse:nth-child(1) { animation-delay: 0s; }
            .pulse:nth-child(2) { animation-delay: 0.7s; }
            .pulse:nth-child(3) { animation-delay: 1.3s; }
            .pulse:nth-child(4) { animation-delay: 0.4s; }
            .pulse:nth-child(5) { animation-delay: 1.1s; }
            .pulse:nth-child(6) { animation-delay: 0.2s; }
            .pulse:nth-child(7) { animation-delay: 0.9s; }
            .pulse:nth-child(8) { animation-delay: 1.5s; }
            .pulse:nth-child(9) { animation-delay: 0.5s; }
            .pulse:nth-child(10) { animation-delay: 1.2s; }
            .pulse:nth-child(11) { animation-delay: 0.8s; }
            .pulse:nth-child(12) { animation-delay: 0.3s; }
            .pulse:nth-child(13) { animation-delay: 1.4s; }
            .pulse:nth-child(14) { animation-delay: 1.0s; }
          `,
        }}
      />
    </div>
  );
};

export default CircuitPattern;