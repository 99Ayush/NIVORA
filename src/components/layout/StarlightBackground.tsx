"use client";

import { useEffect, useRef } from 'react';

export default function StarlightBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.setProperty('--x', `${e.clientX}px`);
      ref.current.style.setProperty('--y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: `radial-gradient(800px circle at var(--x) var(--y), hsla(var(--primary) / 0.25), transparent 40%)`
      }}
    />
  );
}
