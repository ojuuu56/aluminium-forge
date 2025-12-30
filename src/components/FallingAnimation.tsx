import { motion } from "framer-motion";
import { useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  type: "sparkle" | "diamond" | "star";
  color: string;
}

const FallingAnimation = () => {
  const particles = useMemo<Particle[]>(() => {
    const colors = [
      "hsl(0 75% 50%)",      // Nepal red
      "hsl(45 90% 55%)",     // Gold
      "hsl(200 70% 55%)",    // Glass blue
      "hsl(210 15% 75%)",    // Aluminium silver
    ];

    return Array.from({ length: 35 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 12,
      size: 4 + Math.random() * 8,
      type: ["sparkle", "diamond", "star"][Math.floor(Math.random() * 3)] as Particle["type"],
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, []);

  const renderParticle = (particle: Particle) => {
    const { type, size, color } = particle;

    if (type === "sparkle") {
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
        </svg>
      );
    }

    if (type === "diamond") {
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <path d="M12 0L24 12L12 24L0 12L12 0Z" opacity="0.8" />
        </svg>
      );
    }

    // star
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <circle cx="12" cy="12" r="6" opacity="0.6" />
      </svg>
    );
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: -20,
            filter: "blur(0.5px)",
          }}
          animate={{
            y: ["0vh", "105vh"],
            x: [0, Math.sin(particle.id) * 30, 0],
            rotate: [0, 360],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {renderParticle(particle)}
        </motion.div>
      ))}

      {/* Floating subtle glows */}
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(0 75% 50% / 0.1), transparent 70%)",
          left: "10%",
          top: "30%",
        }}
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-48 h-48 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(45 90% 55% / 0.1), transparent 70%)",
          right: "15%",
          top: "50%",
        }}
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
};

export default FallingAnimation;
