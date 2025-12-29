import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Clock } from "lucide-react";
import shopBoard from "@/assets/shop-board.jpeg";
import shopFront from "@/assets/shop-front.jpeg";

// Animated SVG component for metallic flowing effect
const MetallicFlowSVG = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Nepal Red gradient */}
        <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(0 75% 55%)" stopOpacity="0.4" />
          <stop offset="50%" stopColor="hsl(45 90% 55%)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(0 75% 50%)" stopOpacity="0.4" />
        </linearGradient>
        
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(45 90% 55%)" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(45 90% 60%)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="hsl(45 90% 55%)" stopOpacity="0" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
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
        strokeWidth="3"
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
        strokeWidth="2"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 0.8,
          pathOffset: [0, -1],
        }}
        transition={{ 
          pathLength: { duration: 2.5, ease: "easeInOut", delay: 0.3 },
          opacity: { duration: 1, delay: 0.3 },
          pathOffset: { duration: 25, repeat: Infinity, ease: "linear" }
        }}
      />

      {/* Gold accent streaks */}
      <motion.rect
        x="-200"
        y="300"
        width="500"
        height="2"
        fill="url(#goldGradient)"
        animate={{ x: [-200, 2120] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
      />

      <motion.rect
        x="-200"
        y="600"
        width="400"
        height="2"
        fill="url(#goldGradient)"
        animate={{ x: [-200, 2120] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2, repeatDelay: 2 }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.circle
          key={i}
          r={2 + Math.random() * 3}
          fill={i % 3 === 0 ? "hsl(45 90% 60%)" : "hsl(0 75% 55%)"}
          opacity={0.4 + Math.random() * 0.4}
          initial={{ 
            cx: Math.random() * 1920, 
            cy: Math.random() * 1080 
          }}
          animate={{ 
            cy: [null, Math.random() * 1080],
            cx: [null, Math.random() * 1920],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ 
            duration: 8 + Math.random() * 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: i * 0.3
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

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(220 60% 12%) 0%, hsl(220 55% 8%) 50%, hsl(0 60% 15%) 100%)",
        perspective: "2000px",
      }}
    >
      {/* Animated SVG Layer */}
      <MetallicFlowSVG />

      {/* Vibrant gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, hsl(0 75% 50% / 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, hsl(45 90% 55% / 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, hsl(220 60% 30% / 0.2) 0%, transparent 70%)
          `,
        }}
      />

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(hsl(0 75% 50% / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(45 90% 55% / 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 md:px-6 pt-20 pb-8"
        style={{ opacity }}
      >
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <motion.h1
            className="font-nepali text-4xl md:text-5xl lg:text-6xl font-bold"
            style={{
              background: "linear-gradient(135deg, hsl(0 75% 55%), hsl(45 90% 60%), hsl(0 75% 50%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 60px hsl(0 75% 50% / 0.5)",
            }}
          >
            नेपाल अल्मुनियम
          </motion.h1>
          <p className="font-heading text-xl md:text-2xl text-foreground/80 mt-2">
            NEPAL ALUMINIUM
          </p>
          <p className="font-nepali text-muted-foreground mt-1">
            अल्मुनियम र UPVC को झ्याल र ढोका, झ्यालको सिसा
          </p>
        </motion.div>

        {/* Shop Board & Shop Front - Side by Side */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          {/* Shop Board - Prominent Display */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y: y1 }}
          >
            <div
              className="relative p-3 md:p-4"
              style={{
                background: "linear-gradient(135deg, hsl(220 60% 18%) 0%, hsl(220 60% 12%) 100%)",
                boxShadow: `
                  0 30px 60px hsl(0 0% 0% / 0.6),
                  0 0 80px hsl(0 75% 50% / 0.2),
                  inset 0 1px 0 hsl(45 90% 60% / 0.2)
                `,
                border: "3px solid hsl(0 75% 50% / 0.5)",
              }}
            >
              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[hsl(45_90%_55%)]" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-[hsl(45_90%_55%)]" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-[hsl(45_90%_55%)]" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[hsl(45_90%_55%)]" />
              
              <img
                src={shopBoard}
                alt="नेपाल अल्मुनियम - Shop Board - All Services Listed"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="mt-3 text-center">
              <p className="font-nepali text-primary text-sm">हाम्रो पसलको बोर्ड</p>
              <p className="font-body text-muted-foreground text-xs">Our Shop Board</p>
            </div>
          </motion.div>

          {/* Shop Front + Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            {/* Shop Front Image */}
            <div
              className="p-3"
              style={{
                background: "linear-gradient(135deg, hsl(220 60% 18%) 0%, hsl(220 60% 12%) 100%)",
                boxShadow: "0 20px 50px hsl(0 0% 0% / 0.5), 0 0 40px hsl(45 90% 55% / 0.1)",
                border: "2px solid hsl(220 60% 30%)",
              }}
            >
              <img
                src={shopFront}
                alt="नेपाल अल्मुनियम पसल - बिराटनगर"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="text-center">
              <p className="font-nepali text-foreground/80">हाम्रो पसल - बिराटनगर</p>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-3">
              {/* Call Now - Primary */}
              <a
                href="tel:+9779814318483"
                className="flex items-center gap-4 p-4 group transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, hsl(0 75% 50%), hsl(0 70% 45%))",
                  boxShadow: "0 10px 30px hsl(0 75% 50% / 0.4), 0 0 20px hsl(0 75% 50% / 0.2)",
                  border: "1px solid hsl(45 90% 55% / 0.3)",
                }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[hsl(45_90%_55%/0.2)] rounded-full">
                  <Phone className="w-6 h-6 text-[hsl(45_90%_70%)]" />
                </div>
                <div>
                  <span className="font-nepali text-foreground/80 text-sm block">कल गर्नुहोस्</span>
                  <span className="font-heading text-xl text-foreground font-bold">9814318483</span>
                </div>
              </a>

              {/* Location */}
              <div
                className="flex items-center gap-4 p-3"
                style={{
                  background: "linear-gradient(135deg, hsl(220 60% 18%), hsl(220 60% 15%))",
                  border: "1px solid hsl(45 90% 55% / 0.2)",
                }}
              >
                <div className="w-10 h-10 flex items-center justify-center bg-primary/20 rounded-full">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-nepali text-muted-foreground text-sm">ठेगाना:</span>
                  <span className="font-nepali text-foreground/90 ml-2">बिराटनगर, नेपाल</span>
                </div>
              </div>

              {/* Hours */}
              <div
                className="flex items-center gap-4 p-3"
                style={{
                  background: "linear-gradient(135deg, hsl(220 60% 18%), hsl(220 60% 15%))",
                  border: "1px solid hsl(45 90% 55% / 0.2)",
                }}
              >
                <div className="w-10 h-10 flex items-center justify-center bg-primary/20 rounded-full">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-nepali text-foreground/90 block">आइत - शुक्र: ९:०० - ७:००</span>
                  <span className="font-nepali text-destructive text-sm">शनिबार: बन्द</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Proprietor Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <span className="font-nepali text-muted-foreground">प्रोप्राइटर:</span>{" "}
          <span className="font-heading text-lg text-[hsl(45_90%_65%)] font-medium">मनोज कुमार मण्डल</span>
        </motion.div>
      </motion.div>

      {/* Bottom decorative fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to top, hsl(220 50% 8%), transparent)",
        }}
      />
    </section>
  );
};

export default HeroSection;
