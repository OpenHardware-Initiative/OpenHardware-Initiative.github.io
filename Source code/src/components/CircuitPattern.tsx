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
    <div className="absolute inset-0 w-full h-full z-0 opacity-30 sm:opacity-25 md:opacity-20 pointer-events-none overflow-hidden">
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

        {/* Pulsing halos - appear after paths load */}
        <circle cx="100" cy="100" r="4" fill="#333351" opacity="0.05" className="glow-blue pulse-halo delayed-node" />
        <circle cx="300" cy="200" r="4" fill="#333351" opacity="0.05" className="glow-blue pulse-halo delayed-node" />
        <circle cx="500" cy="400" r="6" fill="#333351" opacity="0.05" className="glow-blue pulse-halo delayed-node" />
        <circle cx="200" cy="300" r="4" fill="#333351" opacity="0.05" className="glow-blue pulse-halo delayed-node" />
        <circle cx="400" cy="500" r="4" fill="#333351" opacity="0.05" className="glow-blue pulse-halo delayed-node" />
        <circle cx="600" cy="200" r="4" fill="#c28f40" opacity="0.05" className="glow-gold pulse-halo delayed-node" />
        <circle cx="400" cy="300" r="6" fill="#c28f40" opacity="0.05" className="glow-gold pulse-halo delayed-node" />
        <circle cx="500" cy="300" r="4" fill="#c28f40" opacity="0.05" className="glow-gold pulse-halo delayed-node" />
        <circle cx="400" cy="250" r="4" fill="#333351" opacity="0.05" className="glow-blue pulse-halo delayed-node" />
        <circle cx="500" cy="350" r="4" fill="#333351" opacity="0.05" className="glow-blue pulse-halo delayed-node" />
        <circle cx="500" cy="450" r="6" fill="#333351" opacity="0.05" className="glow-blue pulse-halo delayed-node" />
        <circle cx="550" cy="200" r="4" fill="#c28f40" opacity="0.05" className="glow-gold pulse-halo delayed-node" />
        <circle cx="550" cy="300" r="4" fill="#c28f40" opacity="0.05" className="glow-gold pulse-halo delayed-node" />
        <circle cx="650" cy="300" r="6" fill="#c28f40" opacity="0.05" className="glow-gold pulse-halo delayed-node" />

        {/* Static nodes - appear after paths load */}
        <circle cx="100" cy="100" r="4" fill="#333351" className="glow-blue delayed-node" />
        <circle cx="300" cy="200" r="4" fill="#333351" className="glow-blue delayed-node" />
        <circle cx="500" cy="400" r="6" fill="#333351" className="glow-blue delayed-node" />
        <circle cx="200" cy="300" r="4" fill="#333351" className="glow-blue delayed-node" />
        <circle cx="400" cy="500" r="4" fill="#333351" className="glow-blue delayed-node" />
        <circle cx="600" cy="200" r="4" fill="#c28f40" className="glow-gold delayed-node" />
        <circle cx="400" cy="300" r="6" fill="#c28f40" className="glow-gold delayed-node" />
        <circle cx="500" cy="300" r="4" fill="#c28f40" className="glow-gold delayed-node" />
        <circle cx="400" cy="250" r="4" fill="#333351" className="glow-blue delayed-node" />
        <circle cx="500" cy="350" r="4" fill="#333351" className="glow-blue delayed-node" />
        <circle cx="500" cy="450" r="6" fill="#333351" className="glow-blue delayed-node" />
        <circle cx="550" cy="200" r="4" fill="#c28f40" className="glow-gold delayed-node" />
        <circle cx="550" cy="300" r="4" fill="#c28f40" className="glow-gold delayed-node" />
        <circle cx="650" cy="300" r="6" fill="#c28f40" className="glow-gold delayed-node" />

        {/* Tracers following the paths - also delayed */}
        <circle r="4" fill="#333351" className="circle delayed-tracer">
          <animateMotion dur="5s" repeatCount="indefinite">
            <mpath href="#path1" />
          </animateMotion>
        </circle>

        <circle r="4" fill="#333351" className="circle delayed-tracer">
          <animateMotion dur="6s" repeatCount="indefinite" begin="1s">
            <mpath href="#path2" />
          </animateMotion>
        </circle>

        <circle r="4" fill="#c28f40" className="circle delayed-tracer">
          <animateMotion dur="5s" repeatCount="indefinite" begin="2s">
            <mpath href="#path3" />
          </animateMotion>
        </circle>


        <circle r="7" fill="#333351" opacity="0.3" className="tracer-aura delayed-tracer">
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

        <circle r="7" fill="#333351" opacity="0.3" className="tracer-aura delayed-tracer">
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

        <circle r="7" fill="#c28f40" opacity="0.3" className="tracer-aura delayed-tracer">
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
            .pulse-halo {
              animation: pulseHalo 2s infinite ease-in-out;
            }

            @keyframes pulseHalo {
              0%, 100% {
                r: 4;
                opacity: 0.05;
              }
              50% {
                r: 12;
                opacity: 0.8;
              }
            }

            /* Separate glow effects for each color */
            .glow-blue {
              filter: drop-shadow(0 0 4px #333351) drop-shadow(0 0 8px #333351);
            }
            .glow-gold {
              filter: drop-shadow(0 0 4px #c28f40) drop-shadow(0 0 8px #c28f40);
            }

            /* Circuit path animations */
            .circuit-path {
              stroke-dasharray: 1000;
              stroke-dashoffset: 1000;
              animation: draw 3s ease-in-out forwards;
            }

            @keyframes draw {
              to {
                stroke-dashoffset: 0;
              }
            }

            /* Stagger the path animations */
            #path1 { animation-delay: 0s; }
            #path2 { animation-delay: 0.5s; }
            #path3 { animation-delay: 1s; }
            #path4 { animation-delay: 1.5s; }
            #path5 { animation-delay: 2s; }

            /* Delayed appearance for nodes and tracers */
            .delayed-node {
              opacity: 0;
              animation: fadeInNode 0.5s ease-in-out forwards;
              animation-delay: 3.5s;
            }

            .delayed-tracer {
              opacity: 0;
              animation: fadeInTracer 0.5s ease-in-out forwards;
              animation-delay: 3.5s;
            }

            @keyframes fadeInNode {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }

            @keyframes fadeInTracer {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }

            /* Stagger the node appearances */
            .delayed-node:nth-child(6) { animation-delay: 3.5s; }
            .delayed-node:nth-child(7) { animation-delay: 3.7s; }
            .delayed-node:nth-child(8) { animation-delay: 3.9s; }
            .delayed-node:nth-child(9) { animation-delay: 4.1s; }
            .delayed-node:nth-child(10) { animation-delay: 4.3s; }
            .delayed-node:nth-child(11) { animation-delay: 4.5s; }
            .delayed-node:nth-child(12) { animation-delay: 4.7s; }
            .delayed-node:nth-child(13) { animation-delay: 4.9s; }
            .delayed-node:nth-child(14) { animation-delay: 5.1s; }
            .delayed-node:nth-child(15) { animation-delay: 5.3s; }
            .delayed-node:nth-child(16) { animation-delay: 5.5s; }
            .delayed-node:nth-child(17) { animation-delay: 5.7s; }
            .delayed-node:nth-child(18) { animation-delay: 5.9s; }
            .delayed-node:nth-child(19) { animation-delay: 6.1s; }
            .delayed-node:nth-child(20) { animation-delay: 6.3s; }
            .delayed-node:nth-child(21) { animation-delay: 6.5s; }
            .delayed-node:nth-child(22) { animation-delay: 6.7s; }
            .delayed-node:nth-child(23) { animation-delay: 6.9s; }
            .delayed-node:nth-child(24) { animation-delay: 7.1s; }
            .delayed-node:nth-child(25) { animation-delay: 7.3s; }
            .delayed-node:nth-child(26) { animation-delay: 7.5s; }
            .delayed-node:nth-child(27) { animation-delay: 7.7s; }
            .delayed-node:nth-child(28) { animation-delay: 7.9s; }
            .delayed-node:nth-child(29) { animation-delay: 8.1s; }
            .delayed-node:nth-child(30) { animation-delay: 8.3s; }
            .delayed-node:nth-child(31) { animation-delay: 8.5s; }
            .delayed-node:nth-child(32) { animation-delay: 8.7s; }
            .delayed-node:nth-child(33) { animation-delay: 8.9s; }

            /* Add random delays for each pulsing halo - starts after dots load */
            .pulse-halo:nth-child(6) { animation-delay: 3.5s; }
            .pulse-halo:nth-child(7) { animation-delay: 4.2s; }
            .pulse-halo:nth-child(8) { animation-delay: 4.8s; }
            .pulse-halo:nth-child(9) { animation-delay: 3.9s; }
            .pulse-halo:nth-child(10) { animation-delay: 4.6s; }
            .pulse-halo:nth-child(11) { animation-delay: 3.7s; }
            .pulse-halo:nth-child(12) { animation-delay: 4.4s; }
            .pulse-halo:nth-child(13) { animation-delay: 5.0s; }
            .pulse-halo:nth-child(14) { animation-delay: 4.0s; }
            .pulse-halo:nth-child(15) { animation-delay: 4.7s; }
            .pulse-halo:nth-child(16) { animation-delay: 4.3s; }
            .pulse-halo:nth-child(17) { animation-delay: 3.8s; }
            .pulse-halo:nth-child(18) { animation-delay: 4.9s; }
            .pulse-halo:nth-child(19) { animation-delay: 4.5s; }

            /* Random pulse timing for halos */
            .pulse-halo:nth-child(6) { animation-duration: 1.2s; }
            .pulse-halo:nth-child(7) { animation-duration: 0.9s; }
            .pulse-halo:nth-child(8) { animation-duration: 1.4s; }
            .pulse-halo:nth-child(9) { animation-duration: 1.0s; }
            .pulse-halo:nth-child(10) { animation-duration: 1.3s; }
            .pulse-halo:nth-child(11) { animation-duration: 0.8s; }
            .pulse-halo:nth-child(12) { animation-duration: 1.1s; }
            .pulse-halo:nth-child(13) { animation-duration: 1.5s; }
            .pulse-halo:nth-child(14) { animation-duration: 0.7s; }
            .pulse-halo:nth-child(15) { animation-duration: 1.2s; }
            .pulse-halo:nth-child(16) { animation-duration: 1.0s; }
            .pulse-halo:nth-child(17) { animation-duration: 1.4s; }
            .pulse-halo:nth-child(18) { animation-duration: 0.9s; }
            .pulse-halo:nth-child(19) { animation-duration: 1.1s; }
          `,
        }}
      />
    </div>
  );
};

export default CircuitPattern;