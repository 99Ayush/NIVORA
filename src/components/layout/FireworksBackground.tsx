"use client";

import { useEffect, useState } from "react";

interface Firework {
  id: number;
  x: number;
  y: number;
  delay: number;
  type: 'primary' | 'accent';
}

const NUM_FIREWORKS = 20;

export default function FireworksBackground() {
  const [fireworks, setFireworks] = useState<Firework[]>([]);

  useEffect(() => {
    const generateFireworks = () => {
      const newFireworks: Firework[] = [];
      for (let i = 0; i < NUM_FIREWORKS; i++) {
        newFireworks.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 5,
          type: Math.random() > 0.5 ? 'primary' : 'accent'
        });
      }
      setFireworks(newFireworks);
    };
    generateFireworks();
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {fireworks.map((firework) => (
        <div
          key={firework.id}
          className={`firework ${firework.type === 'accent' ? 'accent' : ''}`}
          style={{
            left: `${firework.x}%`,
            top: `${firework.y}%`,
            animationDelay: `${firework.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
