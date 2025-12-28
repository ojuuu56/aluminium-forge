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
        {/* Red gradient (matching shop board) */}
        <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(0 75% 50%)" stopOpacity="0.3" />
          <stop offset="50%" stopColor="hsl(0 70% 60%)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="hsl(0 75% 40%)" stopOpacity="0.3" />
        </linearGradient>
        
        <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(200 70% 70%)" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(200 70% 70%)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="hsl(200 70% 70%)" stopOpacity="0" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Flowing red curves */}
      <motion.path
        d="M-100,200 Q400,100 600,300 T1000,250 T1400,350 T2020,200"
        fill="none"
        stroke="url(#redGradient)"
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
        stroke="url(#redGradient)"
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
        stroke="url(#redGradient)"
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

      {/* Horizontal light streaks */}
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
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 50% 0%, hsl(220 60% 18%) 0%, hsl(220 50% 10%) 70%)",
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
            linear-gradient(hsl(0 75% 50% / 0.2) 1px, transparent 1px),
            linear-gradient(90deg, hsl(0 75% 50% / 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Aluminium Panels */}
      <motion.div
        className="absolute top-[15%] left-[5%] w-32 h-40 z-5 hidden lg:block"
        style={{ y: y1 }}
        initial={{ opacity: 0, x: -100, rotateY: -30 }}
        animate={{ opacity: 0.6, x: 0, rotateY: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <div
          className="w-full h-full"
          style={{
            background: "linear-gradient(135deg, hsl(210 15% 40%), hsl(210 15% 30%))",
            boxShadow: "20px 20px 60px hsl(0 0% 0% / 0.5)",
            transform: "perspective(500px) rotateY(15deg)",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute top-[25%] right-[8%] w-24 h-32 z-5 hidden lg:block"
        style={{ y: y2 }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.5, x: 0 }}
        transition={{ duration: 1.5, delay: 0.7 }}
      >
        <div
          className="w-full h-full"
          style={{
            background: "linear-gradient(135deg, hsl(200 60% 50% / 0.3), hsl(200 40% 40% / 0.2))",
            backdropFilter: "blur(10px)",
            border: "1px solid hsl(200 60% 60% / 0.3)",
            transform: "perspective(500px) rotateY(-10deg)",
          }}
        />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-end min-h-screen px-6 pb-8 pt-[55%] md:pt-[40%] lg:pt-[35%] text-center"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="overflow-hidden mb-4"
        >
          <h1
            className="font-nepali text-2xl md:text-3xl lg:text-4xl font-bold text-primary"
          >
            नेपाल अल्मुनियम
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-2xl text-base md:text-lg text-muted-foreground font-nepali"
        >
          अल्मुनियम र UPVC को झ्याल र ढोका, झ्यालको सिसा — बिराटनगर, नेपाल
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-4 text-muted-foreground font-body"
        >
          <span className="text-aluminium-light">प्रोप्राइटर:</span>{" "}
          <span className="text-foreground font-medium">मनोज कुमार मण्डल</span>
        </motion.div>

        {/* CTA Buttons - Call Now is primary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          {/* Primary: Click-to-Call */}
          <a
            href="tel:+9779814318483"
            className="group relative px-8 py-4 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(0 75% 45%), hsl(0 75% 55%))",
              boxShadow: "0 10px 40px hsl(0 75% 50% / 0.4)",
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative flex items-center gap-2 font-heading text-lg tracking-wide text-white">
              <Phone className="w-5 h-5" />
              कल गर्नुहोस्: 9814318483
            </span>
          </a>

        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          background: "linear-gradient(to top, hsl(220 50% 10%), transparent)",
        }}
      />
    </section>
  );
};

export default HeroSection;
