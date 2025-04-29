
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
        canvas.width = window.innerWidth;
        canvas.height = 500;
      }
    };
    
    setDimensions();
    window.addEventListener("resize", setDimensions);
    
    // Define circuit components
    type Point = { x: number; y: number };
    type Circuit = { 
      points: Point[]; 
      width: number; 
      color: string; 
      progress: number; 
      speed: number;
      complete: boolean;
    };
    type Node = { 
      position: Point; 
      radius: number; 
      color: string; 
      isActive: boolean; 
      pulseTime: number;
      connected: boolean;
    };
    type Chip = { 
      position: Point; 
      width: number; 
      height: number; 
      color: string;
      activated: boolean;
    };
    
    const circuits: Circuit[] = [];
    const nodes: Node[] = [];
    const chips: Chip[] = [];
    
    // Colors
    const colors = {
      lines: ["#00ffcc", "#00ccff", "#3399ff", "#66ffff"],
      nodes: ["#00ffcc", "#00ccff", "#ffffff"],
      chips: ["#111111", "#222222"]
    };
    
    const bgColor = "#080c14";
    
    // Make canvas background dark
    canvas.style.background = bgColor;
    
    // Create chips (main components)
    const createChips = () => {
      // Center chip
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      chips.push({
        position: { x: centerX - 40, y: centerY - 40 },
        width: 80,
        height: 80,
        color: colors.chips[0],
        activated: false
      });
      
      // Add smaller chips
      const smallChipPositions = [
        { x: centerX - 180, y: centerY - 120 },
        { x: centerX + 120, y: centerY - 80 },
        { x: centerX - 150, y: centerY + 100 },
        { x: centerX + 140, y: centerY + 90 }
      ];
      
      smallChipPositions.forEach(pos => {
        chips.push({
          position: { x: pos.x, y: pos.y },
          width: 40,
          height: 40,
          color: colors.chips[Math.floor(Math.random() * colors.chips.length)],
          activated: false
        });
      });
    };
    
    // Create nodes (connection points)
    const createNodes = () => {
      // Create nodes around chips
      chips.forEach(chip => {
        // Add nodes around chip edges
        const positions = [
          // Top edge
          { x: chip.position.x + chip.width / 4, y: chip.position.y - 5 },
          { x: chip.position.x + (chip.width * 3) / 4, y: chip.position.y - 5 },
          
          // Right edge
          { x: chip.position.x + chip.width + 5, y: chip.position.y + chip.height / 4 },
          { x: chip.position.x + chip.width + 5, y: chip.position.y + (chip.height * 3) / 4 },
          
          // Bottom edge
          { x: chip.position.x + chip.width / 4, y: chip.position.y + chip.height + 5 },
          { x: chip.position.x + (chip.width * 3) / 4, y: chip.position.y + chip.height + 5 },
          
          // Left edge
          { x: chip.position.x - 5, y: chip.position.y + chip.height / 4 },
          { x: chip.position.x - 5, y: chip.position.y + (chip.height * 3) / 4 }
        ];
        
        // Add random subset of nodes
        positions.forEach(pos => {
          if (Math.random() > 0.3) { // 70% chance to add a node
            nodes.push({
              position: pos,
              radius: 3,
              color: colors.nodes[Math.floor(Math.random() * colors.nodes.length)],
              isActive: false,
              pulseTime: 0,
              connected: false
            });
          }
        });
      });
      
      // Add extra nodes
      for (let i = 0; i < 30; i++) {
        nodes.push({
          position: {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height
          },
          radius: 2 + Math.random() * 2,
          color: colors.nodes[Math.floor(Math.random() * colors.nodes.length)],
          isActive: false,
          pulseTime: 0,
          connected: false
        });
      }
    };
    
    // Create circuits (connections between nodes/chips)
    const createCircuits = () => {
      // Connect center chip to others with circuit paths
      const centerChip = chips[0];
      const centerX = centerChip.position.x + centerChip.width / 2;
      const centerY = centerChip.position.y + centerChip.height / 2;
      
      // Create circuits from center chip to other chips
      for (let i = 1; i < chips.length; i++) {
        const chip = chips[i];
        const chipCenterX = chip.position.x + chip.width / 2;
        const chipCenterY = chip.position.y + chip.height / 2;
        
        // Create a path with multiple points
        const points: Point[] = [];
        
        // Start from center chip
        points.push({ x: centerX, y: centerY });
        
        // Add 2-4 intermediate points for a more realistic path
        const pointCount = 2 + Math.floor(Math.random() * 3);
        
        for (let j = 0; j < pointCount; j++) {
          // Create a point that's somewhere between the chips
          let x = centerX + (chipCenterX - centerX) * ((j + 1) / (pointCount + 1));
          let y = centerY + (chipCenterY - centerY) * ((j + 1) / (pointCount + 1));
          
          // Add some randomness to the path
          x += (Math.random() - 0.5) * 60;
          y += (Math.random() - 0.5) * 60;
          
          // Add 90-degree angles (horizontal/vertical segments)
          if (j % 2 === 0) {
            // Previous point or start point
            const prevX = points[points.length - 1].x;
            points.push({ x, y: prevX === centerX ? centerY : points[points.length - 1].y });
          }
          
          points.push({ x, y });
        }
        
        // End at target chip
        points.push({ x: chipCenterX, y: chipCenterY });
        
        // Add to circuits with random color and speed
        circuits.push({
          points,
          width: 1.5 + Math.random(),
          color: colors.lines[Math.floor(Math.random() * colors.lines.length)],
          progress: 0,
          speed: 0.002 + Math.random() * 0.003,
          complete: false
        });
      }
      
      // Create additional random circuits between nodes
      for (let i = 0; i < nodes.length; i++) {
        if (Math.random() > 0.7) { // Only create circuits for some nodes
          const startNode = nodes[i];
          
          // Find a target node that's not too far away
          let targetNodeIndex = -1;
          let minDistance = Infinity;
          
          for (let j = 0; j < nodes.length; j++) {
            if (i !== j) {
              const targetNode = nodes[j];
              const dx = startNode.position.x - targetNode.position.x;
              const dy = startNode.position.y - targetNode.position.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance < minDistance && distance < 200) {
                minDistance = distance;
                targetNodeIndex = j;
              }
            }
          }
          
          if (targetNodeIndex !== -1) {
            const targetNode = nodes[targetNodeIndex];
            const points: Point[] = [];
            
            // Start point
            points.push({ x: startNode.position.x, y: startNode.position.y });
            
            // Add intermediate points for right angles
            const midX = startNode.position.x;
            const midY = targetNode.position.y;
            
            if (Math.random() > 0.5) {
              points.push({ x: midX, y: midY });
            } else {
              // Alternate route
              points.push({ 
                x: startNode.position.x + (targetNode.position.x - startNode.position.x) / 2, 
                y: startNode.position.y 
              });
              points.push({ 
                x: startNode.position.x + (targetNode.position.x - startNode.position.x) / 2, 
                y: targetNode.position.y 
              });
            }
            
            // End point
            points.push({ x: targetNode.position.x, y: targetNode.position.y });
            
            // Mark these nodes as connected
            startNode.connected = true;
            targetNode.connected = true;
            
            // Add to circuits
            circuits.push({
              points,
              width: 1 + Math.random() * 1.5,
              color: colors.lines[Math.floor(Math.random() * colors.lines.length)],
              progress: 0,
              speed: 0.001 + Math.random() * 0.003,
              complete: false
            });
          }
        }
      }
    };
    
    // Initialize circuit board
    createChips();
    createNodes();
    createCircuits();
    
    // Animation loop
    let lastTime = 0;
    const animate = (timestamp: number) => {
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw circuits with progress animation
      circuits.forEach(circuit => {
        if (circuit.progress < 1) {
          circuit.progress += circuit.speed * (deltaTime / 16);
        } else if (!circuit.complete) {
          circuit.complete = true;
          
          // Find nodes at endpoints and activate them
          const startPoint = circuit.points[0];
          const endPoint = circuit.points[circuit.points.length - 1];
          
          nodes.forEach(node => {
            const dx1 = node.position.x - startPoint.x;
            const dy1 = node.position.y - startPoint.y;
            const dx2 = node.position.x - endPoint.x;
            const dy2 = node.position.y - endPoint.y;
            
            if (Math.sqrt(dx1*dx1 + dy1*dy1) < 10 || Math.sqrt(dx2*dx2 + dy2*dy2) < 10) {
              node.isActive = true;
              node.pulseTime = timestamp;
            }
          });
          
          // Check if this circuit ends at a chip
          chips.forEach(chip => {
            const chipCenterX = chip.position.x + chip.width / 2;
            const chipCenterY = chip.position.y + chip.height / 2;
            const dx = chipCenterX - endPoint.x;
            const dy = chipCenterY - endPoint.y;
            
            if (Math.sqrt(dx*dx + dy*dy) < 20) {
              chip.activated = true;
            }
          });
        }
        
        // Draw the circuit path based on current progress
        ctx.beginPath();
        
        // Calculate how far along the path we should draw
        let totalLength = 0;
        const segmentLengths: number[] = [];
        
        for (let i = 1; i < circuit.points.length; i++) {
          const p1 = circuit.points[i - 1];
          const p2 = circuit.points[i];
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const length = Math.sqrt(dx * dx + dy * dy);
          segmentLengths.push(length);
          totalLength += length;
        }
        
        let currentDistance = circuit.progress * totalLength;
        let currentSegment = 0;
        
        // Move to start point
        ctx.moveTo(circuit.points[0].x, circuit.points[0].y);
        
        // Draw segments up to the current progress
        for (let i = 1; i < circuit.points.length; i++) {
          const segmentLength = segmentLengths[i - 1];
          
          if (currentDistance >= segmentLength) {
            // Draw full segment
            ctx.lineTo(circuit.points[i].x, circuit.points[i].y);
            currentDistance -= segmentLength;
          } else {
            // Draw partial segment
            const ratio = currentDistance / segmentLength;
            const p1 = circuit.points[i - 1];
            const p2 = circuit.points[i];
            const partialX = p1.x + (p2.x - p1.x) * ratio;
            const partialY = p1.y + (p2.y - p1.y) * ratio;
            ctx.lineTo(partialX, partialY);
            break;
          }
        }
        
        ctx.strokeStyle = circuit.color;
        ctx.lineWidth = circuit.width;
        ctx.stroke();
      });
      
      // Draw chips
      chips.forEach(chip => {
        // Main chip body
        ctx.fillStyle = chip.activated ? "#333344" : chip.color;
        ctx.fillRect(chip.position.x, chip.position.y, chip.width, chip.height);
        
        // Chip border
        ctx.strokeStyle = "#444444";
        ctx.lineWidth = 1;
        ctx.strokeRect(chip.position.x, chip.position.y, chip.width, chip.height);
        
        // Chip details (pins, etc)
        ctx.fillStyle = "#555555";
        
        // Top pins
        for (let i = 1; i < 4; i++) {
          ctx.fillRect(
            chip.position.x + (chip.width * i) / 4 - 2,
            chip.position.y - 3,
            3,
            3
          );
        }
        
        // Bottom pins
        for (let i = 1; i < 4; i++) {
          ctx.fillRect(
            chip.position.x + (chip.width * i) / 4 - 2,
            chip.position.y + chip.height,
            3,
            3
          );
        }
        
        // Chip inner details
        if (chip.activated) {
          ctx.fillStyle = "#00ccff";
          ctx.fillRect(
            chip.position.x + chip.width / 4,
            chip.position.y + chip.height / 4,
            chip.width / 2,
            chip.height / 2
          );
        }
      });
      
      // Draw nodes
      nodes.forEach(node => {
        // Skip unconnected nodes
        if (!node.connected && Math.random() > 0.2) return;
        
        ctx.beginPath();
        ctx.arc(node.position.x, node.position.y, node.radius, 0, Math.PI * 2);
        
        // Draw pulse effect for active nodes
        if (node.isActive) {
          const timeSinceActivation = timestamp - node.pulseTime;
          
          if (timeSinceActivation > 3000) {
            node.isActive = false; // Deactivate after 3 seconds
          } else {
            // Draw pulse circle
            const pulseRadius = node.radius + (timeSinceActivation / 200);
            const alpha = 1 - timeSinceActivation / 3000;
            
            ctx.beginPath();
            ctx.arc(node.position.x, node.position.y, pulseRadius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 255, 204, ${alpha * 0.7})`; 
            ctx.fill();
          }
          
          ctx.fillStyle = "#ffffff";
        } else {
          ctx.fillStyle = node.color;
        }
        
        ctx.fill();
      });
      
      // Reset some circuits if all are complete
      let allComplete = true;
      circuits.forEach(circuit => {
        if (!circuit.complete) {
          allComplete = false;
        }
      });
      
      if (allComplete) {
        setTimeout(() => {
          // Reset random circuits
          circuits.forEach(circuit => {
            if (Math.random() > 0.7) {
              circuit.progress = 0;
              circuit.complete = false;
            }
          });
          
          // Reset chip activations
          chips.forEach(chip => {
            if (Math.random() > 0.5) {
              chip.activated = false;
            }
          });
        }, 2000);
      }
      
      requestAnimationFrame(animate);
    };
    
    requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener("resize", setDimensions);
    };
  }, []);
  
  return (
    <div className="w-full h-full relative">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
      />
    </div>
  );
};

export default CircuitAnimation;
