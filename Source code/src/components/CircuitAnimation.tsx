
import React, { useEffect, useRef } from "react";

const CircuitAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Set canvas dimensions
    const setDimensions = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      } else {
        canvas.width = 400;
        canvas.height = 400;
      }
    };
    
    setDimensions();
    window.addEventListener("resize", setDimensions);
    
    // Define circuit components
    type Point = { x: number; y: number };
    type Line = { start: Point; end: Point; progress: number; color: string; width: number };
    type Node = { position: Point; radius: number; color: string; isActive: boolean; pulseTime: number };
    
    const lines: Line[] = [];
    const nodes: Node[] = [];
    const colors = ["#030349", "#6E59A5", "#34200C"]; // Primary, Tertiary Purple, Bistre
    
    // Create circuit grid
    const gridSize = 40;
    const nodeChance = 0.3;
    
    // Create grid
    for (let y = gridSize; y < canvas.height; y += gridSize) {
      for (let x = gridSize; x < canvas.width; x += gridSize) {
        if (Math.random() < nodeChance) {
          nodes.push({
            position: { x, y },
            radius: 3 + Math.random() * 3,
            color: colors[Math.floor(Math.random() * colors.length)],
            isActive: false,
            pulseTime: 0
          });
        }
      }
    }
    
    // Connect nodes with lines
    const maxDistance = gridSize * 2.5;
    nodes.forEach((node, i) => {
      for (let j = i + 1; j < nodes.length; j++) {
        const otherNode = nodes[j];
        const dx = node.position.x - otherNode.position.x;
        const dy = node.position.y - otherNode.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          lines.push({
            start: node.position,
            end: otherNode.position,
            progress: 0,
            color: colors[Math.floor(Math.random() * colors.length)],
            width: 1 + Math.random()
          });
        }
      }
    });
    
    // Animation variables
    let animationStartTime = Date.now();
    let activeNodeIndex = 0;
    const activationInterval = 800; // ms
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update line progress
      lines.forEach(line => {
        if (line.progress < 1) {
          line.progress += 0.005;
        }
        
        // Draw line with progress
        ctx.beginPath();
        ctx.moveTo(line.start.x, line.start.y);
        
        const currentX = line.start.x + (line.end.x - line.start.x) * line.progress;
        const currentY = line.start.y + (line.end.y - line.start.y) * line.progress;
        
        ctx.lineTo(currentX, currentY);
        ctx.strokeStyle = line.color;
        ctx.lineWidth = line.width;
        ctx.stroke();
      });
      
      // Activate nodes periodically
      const currentTime = Date.now();
      if (currentTime - animationStartTime > activationInterval) {
        animationStartTime = currentTime;
        if (nodes.length > 0) {
          nodes[activeNodeIndex].isActive = true;
          nodes[activeNodeIndex].pulseTime = currentTime;
          activeNodeIndex = (activeNodeIndex + 1) % nodes.length;
        }
      }
      
      // Draw nodes
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.position.x, node.position.y, node.radius, 0, Math.PI * 2);
        
        // Draw pulse effect for active nodes
        if (node.isActive) {
          const timeSinceActivation = currentTime - node.pulseTime;
          
          if (timeSinceActivation > 2000) {
            node.isActive = false; // Deactivate after 2 seconds
          } else {
            // Draw pulse circle
            const pulseRadius = node.radius + (timeSinceActivation / 100);
            const alpha = 1 - timeSinceActivation / 2000;
            
            ctx.beginPath();
            ctx.arc(node.position.x, node.position.y, pulseRadius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(110, 89, 165, ${alpha * 0.3})`; // Tertiary purple with alpha
            ctx.fill();
          }
        }
        
        ctx.fillStyle = node.color;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener("resize", setDimensions);
    };
  }, []);
  
  return (
    <div className="w-full h-[400px] relative">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
        style={{ background: "transparent" }}
      />
    </div>
  );
};

export default CircuitAnimation;
