"use client";

import React, { useEffect, useRef } from 'react';

export const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 16;
    const columns = Math.ceil(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);
    let lastFrame = 0;
    const frameInterval = 33; // Faster frame rate (was 50)

    const draw = (timestamp: number) => {
      if (timestamp - lastFrame < frameInterval) {
        requestAnimationFrame(draw);
        return;
      }
      lastFrame = timestamp;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = 'start';
      ctx.textBaseline = 'top';

      for (let i = 0; i < drops.length; i++) {
        if (Math.random() > 0.95) { // Increased frequency (was 0.975)
          const text = chars[Math.floor(Math.random() * chars.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.2})`;
          ctx.fillText(text, x, y);

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.99) {
            drops[i] = 0;
          }
          drops[i] += 1.5; // Increased drop speed (was 1)
        }
      }

      requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, opacity: 0.6 }}
    />
  );
};