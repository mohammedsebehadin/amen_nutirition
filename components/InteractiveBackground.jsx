"use client";

import { useEffect, useRef } from "react";

export default function InteractiveBackground() {
  const canvasRef = useRef(null);
  const pointerRef = useRef({
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
    radius: 170,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const getParticleCount = () => {
      const area = window.innerWidth * window.innerHeight;
      if (area < 500000) return 30; // mobile
      if (area < 1000000) return 48; // tablet
      return 68; // desktop
    };

    let particleCount = getParticleCount();
    let particles = [];

    // Electric athletic palette: Neon Green, Amber Gold, Electric Teal
    const palette = [
      { r: 34, g: 197, b: 94 },   // Neon Green
      { r: 16, g: 185, b: 129 },  // Emerald
      { r: 245, g: 158, b: 11 },  // Neon Gold
      { r: 20, g: 184, b: 166 },  // Electric Teal
      { r: 234, g: 179, b: 8 },   // Bright Yellow/Gold
    ];

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = initial ? Math.random() * width : (Math.random() < 0.5 ? 0 : width);
        this.y = initial ? Math.random() * height : Math.random() * height;
        this.baseRadius = Math.random() * 2 + 1;
        this.radius = this.baseRadius;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.color = palette[Math.floor(Math.random() * palette.length)];
        this.alpha = Math.random() * 0.45 + 0.2;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.015 + Math.random() * 0.02;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < -20) this.x = width + 20;
        if (this.x > width + 20) this.x = -20;
        if (this.y < -20) this.y = height + 20;
        if (this.y > height + 20) this.y = -20;

        this.pulse += this.pulseSpeed;
        const pulseEffect = Math.sin(this.pulse) * 0.25;

        const pointer = pointerRef.current;
        if (pointer.active) {
          const dx = pointer.x - this.x;
          const dy = pointer.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < pointer.radius) {
            const force = (1 - dist / pointer.radius) * 0.05;
            this.x -= dx * force;
            this.y -= dy * force;
            this.radius = this.baseRadius * (1.3 + force * 1.8);
          } else {
            this.radius = this.baseRadius * (1 + pulseEffect * 0.2);
          }
        } else {
          this.radius = this.baseRadius * (1 + pulseEffect * 0.2);
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.max(0.7, this.radius), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.alpha})`;
        ctx.fill();

        // Neon halo
        if (this.baseRadius > 1.8) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.alpha * 0.18})`;
          ctx.fill();
        }
      }
    }

    const initParticles = () => {
      particleCount = getParticleCount();
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    initParticles();

    const render = () => {
      const pointer = pointerRef.current;
      if (pointer.active) {
        pointer.x += (pointer.targetX - pointer.x) * 0.1;
        pointer.y += (pointer.targetY - pointer.y) * 0.1;
      }

      ctx.clearRect(0, 0, width, height);

      // Deep dark athletic radial glows
      const bgGrad1 = ctx.createRadialGradient(
        width * 0.2,
        height * 0.15,
        20,
        width * 0.2,
        height * 0.15,
        Math.max(width, height) * 0.65
      );
      bgGrad1.addColorStop(0, "rgba(5, 46, 22, 0.25)"); // Deep emerald
      bgGrad1.addColorStop(1, "rgba(5, 7, 14, 0)");
      ctx.fillStyle = bgGrad1;
      ctx.fillRect(0, 0, width, height);

      const bgGrad2 = ctx.createRadialGradient(
        width * 0.85,
        height * 0.5,
        30,
        width * 0.85,
        height * 0.5,
        Math.max(width, height) * 0.6
      );
      bgGrad2.addColorStop(0, "rgba(120, 53, 15, 0.16)"); // Deep amber glow
      bgGrad2.addColorStop(1, "rgba(5, 7, 14, 0)");
      ctx.fillStyle = bgGrad2;
      ctx.fillRect(0, 0, width, height);

      // Cursor interactive neon pulse
      if (pointer.active && pointer.x > -100 && pointer.y > -100) {
        const cursorGlow = ctx.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          200
        );
        cursorGlow.addColorStop(0, "rgba(34, 197, 94, 0.18)");
        cursorGlow.addColorStop(0.5, "rgba(245, 158, 11, 0.06)");
        cursorGlow.addColorStop(1, "rgba(5, 7, 14, 0)");
        ctx.fillStyle = cursorGlow;
        ctx.fillRect(0, 0, width, height);
      }

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      // Connect particles with luminous electric threads
      const maxConnectDist = width < 768 ? 95 : 130;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const lineAlpha = (1 - dist / maxConnectDist) * 0.16;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(34, 197, 94, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    const handlePointerMove = (e) => {
      const clientX = e.clientX ?? (e.touches && e.touches[0]?.clientX);
      const clientY = e.clientY ?? (e.touches && e.touches[0]?.clientY);

      if (clientX !== undefined && clientY !== undefined) {
        pointerRef.current.targetX = clientX;
        pointerRef.current.targetY = clientY;
        if (!pointerRef.current.active) {
          pointerRef.current.x = clientX;
          pointerRef.current.y = clientY;
          pointerRef.current.active = true;
        }
      }
    };

    const handlePointerLeave = () => {
      pointerRef.current.active = false;
      pointerRef.current.targetX = -1000;
      pointerRef.current.targetY = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    window.addEventListener("mouseleave", handlePointerLeave);
    window.addEventListener("touchend", handlePointerLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("mouseleave", handlePointerLeave);
      window.removeEventListener("touchend", handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 block w-full h-full"
      aria-hidden="true"
    />
  );
}
