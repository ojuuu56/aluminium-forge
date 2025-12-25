import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Phone } from "lucide-react";

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

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://wa.me/9779862198360"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(142 70% 35%), hsl(142 70% 45%))",
              boxShadow: "0 10px 40px hsl(142 70% 45% / 0.3)",
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative flex items-center gap-2 font-heading text-lg tracking-wide text-white">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </span>
          </a>

          <a
            href="tel:+9779814318483"
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
              Call Now
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
