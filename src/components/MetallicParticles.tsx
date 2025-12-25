import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  delay: number;
}

const MetallicParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const particles: Particle[] = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100 + 100,
    size: Math.random() * 3 + 1,
    speedY: Math.random() * 30 + 20,
    speedX: (Math.random() - 0.5) * 20,
    opacity: Math.random() * 0.5 + 0.2,
    delay: Math.random() * 5,
  }));

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{ perspective: "1000px" }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            bottom: `-${particle.size}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, hsl(210 20% 85%) 0%, hsl(200 60% 50% / 0.3) 100%)`,
            boxShadow: `0 0 ${particle.size * 2}px hsl(200 60% 50% / 0.4)`,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, particle.speedX, -particle.speedX, 0],
            opacity: [0, particle.opacity, particle.opacity, 0],
          }}
          transition={{
            duration: particle.speedY,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Metallic streaks */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`streak-${i}`}
          className="absolute h-px"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 100 + 50}px`,
            background: `linear-gradient(90deg, transparent, hsl(210 15% 70% / 0.3), transparent)`,
            transform: `rotate(${Math.random() * 30 - 15}deg)`,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            x: [0, 50, 100],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default MetallicParticles;
