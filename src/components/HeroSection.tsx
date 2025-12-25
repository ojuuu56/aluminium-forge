import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Phone } from "lucide-react";

// Animated SVG component for metallic flowing effect
const MetallicFlowSVG = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Metallic gradient */}
        <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(210 15% 50%)" stopOpacity="0.3" />
          <stop offset="50%" stopColor="hsl(200 60% 60%)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="hsl(210 15% 40%)" stopOpacity="0.3" />
        </linearGradient>
        
        <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(200 60% 70%)" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(200 60% 70%)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="hsl(200 60% 70%)" stopOpacity="0" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Flowing metallic curves */}
      <motion.path
        d="M-100,200 Q400,100 600,300 T1000,250 T1400,350 T2020,200"
        fill="none"
        stroke="url(#metalGradient)"
        strokeWidth="2"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 1,
          pathOffset: [0, 1],
        }}
        transition={{ 
          pathLength: { duration: 2, ease: "easeInOut" },
          opacity: { duration: 1 },
          pathOffset: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
      />

      <motion.path
        d="M-100,400 Q300,500 500,350 T900,450 T1300,300 T2020,400"
        fill="none"
        stroke="url(#metalGradient)"
        strokeWidth="1.5"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 0.7,
          pathOffset: [0, -1],
        }}
        transition={{ 
          pathLength: { duration: 2.5, ease: "easeInOut", delay: 0.3 },
          opacity: { duration: 1, delay: 0.3 },
          pathOffset: { duration: 25, repeat: Infinity, ease: "linear" }
        }}
      />

      <motion.path
        d="M-100,600 Q250,700 450,550 T850,650 T1250,500 T2020,600"
        fill="none"
        stroke="url(#metalGradient)"
        strokeWidth="1"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 0.5,
          pathOffset: [0, 1],
        }}
        transition={{ 
          pathLength: { duration: 3, ease: "easeInOut", delay: 0.6 },
          opacity: { duration: 1, delay: 0.6 },
          pathOffset: { duration: 30, repeat: Infinity, ease: "linear" }
        }}
      />

      {/* Horizontal glass light streaks */}
      <motion.rect
        x="-200"
        y="300"
        width="400"
        height="1"
        fill="url(#glassGradient)"
        animate={{ x: [-200, 2120] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
      />

      <motion.rect
        x="-200"
        y="500"
        width="300"
        height="1"
        fill="url(#glassGradient)"
        animate={{ x: [-200, 2120] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 3, repeatDelay: 4 }}
      />

      <motion.rect
        x="-200"
        y="700"
        width="350"
        height="1"
        fill="url(#glassGradient)"
        animate={{ x: [-200, 2120] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 5, repeatDelay: 3 }}
      />

      {/* Floating aluminium particles */}
      {[...Array(15)].map((_, i) => (
        <motion.circle
          key={i}
          r={1 + Math.random() * 2}
          fill="hsl(210 15% 70%)"
          opacity={0.3 + Math.random() * 0.3}
          initial={{ 
            cx: Math.random() * 1920, 
            cy: Math.random() * 1080 
          }}
          animate={{ 
            cy: [null, Math.random() * 1080],
            cx: [null, Math.random() * 1920],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ 
            duration: 10 + Math.random() * 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}
    </svg>
  );
};

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const z1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 50% 0%, hsl(220 15% 18%) 0%, hsl(220 15% 8%) 70%)",
        perspective: "2000px",
      }}
    >
      {/* Animated SVG Layer */}
      <MetallicFlowSVG />

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(hsl(210 15% 40% / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(210 15% 40% / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Aluminium Panels */}
      <motion.div
        className="absolute top-[10%] left-[-5%] w-[300px] h-[400px] hero-element"
        style={{
          y: y1,
          rotateX,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="w-full h-full aluminium-panel"
          style={{
            background: "linear-gradient(135deg, hsl(210 15% 30%) 0%, hsl(210 15% 40%) 50%, hsl(210 15% 25%) 100%)",
            transform: "rotateY(15deg) rotateX(-5deg)",
            boxShadow: "20px 30px 60px hsl(0 0% 0% / 0.5), inset 0 1px 0 hsl(210 20% 50% / 0.3)",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute top-[5%] right-[-10%] w-[250px] h-[500px] hero-element-alt"
        style={{
          y: y2,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="w-full h-full"
          style={{
            background: "linear-gradient(180deg, hsl(200 60% 50% / 0.2) 0%, hsl(200 60% 50% / 0.05) 100%)",
            backdropFilter: "blur(10px)",
            border: "1px solid hsl(200 60% 50% / 0.3)",
            transform: "rotateY(-20deg) rotateX(5deg)",
            boxShadow: "0 0 80px hsl(200 60% 50% / 0.3)",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-[10%] left-[10%] w-[200px] h-[300px] hero-element-slow"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="w-full h-full"
          style={{
            background: "linear-gradient(135deg, hsl(210 15% 35%) 0%, hsl(210 15% 45%) 100%)",
            transform: "rotateY(10deg) rotateX(10deg) translateZ(50px)",
            boxShadow: "15px 25px 50px hsl(0 0% 0% / 0.4)",
          }}
        />
      </motion.div>

      {/* Glass Panel */}
      <motion.div
        className="absolute top-[30%] right-[15%] w-[180px] h-[250px]"
        style={{
          y: y1,
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateY: [0, 5, -5, 0],
          translateZ: [0, 30, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="w-full h-full"
          style={{
            background: "linear-gradient(135deg, hsl(200 60% 50% / 0.15), hsl(200 40% 70% / 0.05))",
            backdropFilter: "blur(20px)",
            border: "1px solid hsl(200 60% 50% / 0.4)",
            boxShadow: "0 0 60px hsl(200 60% 50% / 0.2)",
          }}
        />
      </motion.div>

      {/* Horizontal beam */}
      <motion.div
        className="absolute top-[60%] left-0 right-0 h-4"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(210 15% 50%), hsl(210 20% 70%), hsl(210 15% 50%), transparent)",
          boxShadow: "0 5px 30px hsl(200 60% 50% / 0.3)",
          y: y2,
        }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50, z: -100 }}
          animate={{ opacity: 1, y: 0, z: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="overflow-hidden"
        >
          <motion.h1
            className="font-heading text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight"
            style={{
              background: "linear-gradient(135deg, hsl(210 15% 75%) 0%, hsl(210 20% 90%) 40%, hsl(200 60% 60%) 60%, hsl(210 15% 70%) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 80px hsl(200 60% 50% / 0.3)",
            }}
          >
            NEPAL
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="overflow-hidden"
        >
          <h2
            className="font-heading text-3xl md:text-5xl lg:text-7xl font-light tracking-[0.3em] text-glass"
          >
            ALUMINIUM
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground font-body"
        >
          Premium Aluminium & Construction Works — Crafting Excellence in Biratnagar, Nepal
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 text-muted-foreground font-body"
        >
          <span className="text-aluminium-light">Proprietor:</span>{" "}
          <span className="text-foreground font-medium">Manoj Kumar Mandal</span>
        </motion.div>

        {/* CTA Buttons - Call Now is primary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          {/* Primary: Click-to-Call */}
          <a
            href="tel:+9779814318483"
            className="group relative px-8 py-4 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(200 60% 40%), hsl(200 60% 50%))",
              boxShadow: "0 10px 40px hsl(200 60% 50% / 0.3)",
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative flex items-center gap-2 font-heading text-lg tracking-wide text-white">
              <Phone className="w-5 h-5" />
              Call: 9814318483
            </span>
          </a>

          {/* Secondary: Second number */}
          <a
            href="tel:+9779802754482"
            className="group relative px-8 py-4 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(210 15% 25%), hsl(210 15% 35%))",
              border: "1px solid hsl(210 15% 45%)",
              boxShadow: "0 10px 40px hsl(0 0% 0% / 0.3)",
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative flex items-center gap-2 font-heading text-lg tracking-wide text-aluminium-light">
              <Phone className="w-5 h-5" />
              Call: 9802754482
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          background: "linear-gradient(to top, hsl(220 15% 8%), transparent)",
        }}
      />
    </section>
  );
};

export default HeroSection;
