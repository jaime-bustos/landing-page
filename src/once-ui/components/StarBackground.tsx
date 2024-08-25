import { useEffect, useRef } from 'react';

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const stars: { x: number; y: number; size: number; dx: number; dy: number }[] = [];
    const numStars = 200;

    if (canvas && ctx) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 2;
        const dx = Math.random() * 0.5;
        const dy = Math.random() * 0.5;
        stars.push({ x, y, size, dx, dy });
      }

      const animate = (e: MouseEvent) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach((star) => {
          const distX = e.clientX - canvas.width / 2;
          const distY = e.clientY - canvas.height / 2;

          star.x += star.dx + distX * 0.001;
          star.y += star.dy + distY * 0.001;

          if (star.x > canvas.width) star.x = 0;
          if (star.x < 0) star.x = canvas.width;
          if (star.y > canvas.height) star.y = 0;
          if (star.y < 0) star.y = canvas.height;

          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fillStyle = 'white';
          ctx.fill();
        });
      };

      window.addEventListener('mousemove', animate);
      
      return () => {
        window.removeEventListener('mousemove', animate);
      };
    }
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default StarBackground;
