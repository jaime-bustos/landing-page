import { useEffect, useRef } from 'react';

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<{ x: number; y: number; z: number; size: number }[]>([]);
  const numStars = 600;
  let distX = 0;
  let distY = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const stars: { x: number; y: number; z: number; size: number }[] = [];

    if (canvas && ctx) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Initialize stars
      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const z = Math.random() * canvas.width; // Depth
        const size = (1 - z / canvas.width) * 2; // Smaller stars for farther distances
        stars.push({ x, y, z, size });
      }
      starsRef.current = stars;

      const drawStars = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      
        // Draw stars
        stars.forEach((star) => {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fillStyle = 'white';
          ctx.fill();
        });
      
        // Draw lines between nearby stars
        for (let i = 0; i < stars.length; i++) {
          for (let j = i + 1; j < stars.length; j++) {
            const dx = stars[i].x - stars[j].x;
            const dy = stars[i].y - stars[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
      
            if (distance < 100) {
              const opacity = 1 - distance / 100; // Fade line as distance increases
              ctx.beginPath();
              ctx.moveTo(stars[i].x, stars[i].y);
              ctx.lineTo(stars[j].x, stars[j].y);
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.5})`; // Soft white lines
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      };

      // Initial draw
      drawStars();

      const updateStars = () => {
        stars.forEach((star) => {
          // Apply movement to stars
          star.x += distX * (1 - star.z / canvas.width);
          star.y += distY * (1 - star.z / canvas.width);

          // Wrap around screen edges
          if (star.x > canvas.width) star.x = 0;
          if (star.x < 0) star.x = canvas.width;
          if (star.y > canvas.height) star.y = 0;
          if (star.y < 0) star.y = canvas.height;
        });

        // Redraw stars after moving them
        drawStars();

        // Continue the animation loop
        requestAnimationFrame(updateStars);
      };

      const handleMouseMove = (e: MouseEvent) => {
        distX = (e.clientX - canvas.width / 2) * 0.009; // Increase the factor for visible movement
        distY = (e.clientY - canvas.height / 2) * 0.009; // Increase the factor for visible movement
      };

      window.addEventListener('mousemove', handleMouseMove);
      updateStars(); // Start the animation loop

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default StarBackground;
