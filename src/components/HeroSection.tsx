import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Clock } from "lucide-react";
import shopBoard from "@/assets/shop-board.jpeg";
import shopFront from "@/assets/shop-front.jpeg";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(210 40% 96%) 0%, hsl(200 50% 92%) 50%, hsl(45 60% 95%) 100%)",
      }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(hsl(0 75% 50% / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(45 90% 55% / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        
        {/* Top corner decoration */}
        <div
          className="absolute top-0 right-0 w-96 h-96"
          style={{
            background: "radial-gradient(circle at top right, hsl(0 75% 50% / 0.15), transparent 70%)",
          }}
        />
        
        {/* Bottom corner decoration */}
        <div
          className="absolute bottom-0 left-0 w-96 h-96"
          style={{
            background: "radial-gradient(circle at bottom left, hsl(45 90% 55% / 0.2), transparent 70%)",
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 md:px-6 pt-24 pb-12"
        style={{ opacity }}
      >
        {/* Header Title - Clean Nepali Text */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <motion.h1
            className="font-nepali text-5xl md:text-6xl lg:text-7xl font-bold mb-2"
            style={{ color: "hsl(0 75% 45%)" }}
          >
            नेपाल अल्युमिनियम
          </motion.h1>
          <motion.p
            className="font-heading text-2xl md:text-3xl font-bold tracking-wider"
            style={{ color: "hsl(220 60% 30%)" }}
          >
            NEPAL ALUMINIUM
          </motion.p>
          <motion.p
            className="font-nepali text-lg text-muted-foreground mt-3 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            अल्युमिनियम र UPVC को झ्याल, ढोका तथा सिसाको सम्पूर्ण काम
          </motion.p>
        </motion.div>

        {/* Shop Board & Shop Front - Side by Side, No Frames */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-10">
          {/* Shop Board - Full Display, Stretched */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y: y1 }}
            className="relative"
          >
            <img
              src={shopBoard}
              alt="नेपाल अल्युमिनियम - Shop Board - सम्पूर्ण सेवाहरू"
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
              style={{
                boxShadow: "0 25px 60px hsl(0 0% 0% / 0.25), 0 10px 30px hsl(0 75% 50% / 0.15)",
              }}
            />
            <div className="mt-4 text-center">
              <p className="font-nepali text-lg" style={{ color: "hsl(0 75% 45%)" }}>हाम्रो पसलको बोर्ड</p>
              <p className="text-muted-foreground text-sm">Our Shop Board</p>
            </div>
          </motion.div>

          {/* Shop Front + Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Shop Front Image - Stretched */}
            <div>
              <img
                src={shopFront}
                alt="नेपाल अल्युमिनियम पसल - बिराटनगर"
                className="w-full h-auto object-cover rounded-lg shadow-xl"
                style={{
                  boxShadow: "0 20px 50px hsl(0 0% 0% / 0.2), 0 8px 25px hsl(220 60% 30% / 0.1)",
                }}
              />
              <div className="mt-3 text-center">
                <p className="font-nepali" style={{ color: "hsl(220 60% 35%)" }}>हाम्रो पसल - बिराटनगर</p>
              </div>
            </div>

            {/* Contact Cards - Light Theme */}
            <div className="grid gap-4">
              {/* Call Now - Primary */}
              <a
                href="tel:+9779814318483"
                className="flex items-center gap-4 p-5 rounded-xl group transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, hsl(0 75% 50%), hsl(0 70% 45%))",
                  boxShadow: "0 10px 30px hsl(0 75% 50% / 0.35)",
                }}
              >
                <div className="w-14 h-14 flex items-center justify-center bg-white/20 rounded-full">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="font-nepali text-white/90 text-sm block">कल गर्नुहोस्</span>
                  <span className="font-heading text-2xl text-white font-bold">9814318483</span>
                </div>
              </a>

              {/* Location */}
              <div
                className="flex items-center gap-4 p-4 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, hsl(210 40% 98%), hsl(210 35% 95%))",
                  border: "1px solid hsl(0 75% 50% / 0.2)",
                }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full" style={{ background: "hsl(0 75% 50% / 0.1)" }}>
                  <MapPin className="w-6 h-6" style={{ color: "hsl(0 75% 50%)" }} />
                </div>
                <div>
                  <span className="font-nepali text-muted-foreground text-sm">ठेगाना / Address:</span>
                  <p className="font-nepali" style={{ color: "hsl(220 50% 25%)" }}>केसलिया रोड, बिराटनगर-६</p>
                  <p className="text-sm text-muted-foreground">Kesaliya Road, Biratnagar 6</p>
                </div>
              </div>

              {/* Hours */}
              <div
                className="flex items-center gap-4 p-4 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, hsl(210 40% 98%), hsl(210 35% 95%))",
                  border: "1px solid hsl(45 90% 55% / 0.3)",
                }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full" style={{ background: "hsl(45 90% 55% / 0.15)" }}>
                  <Clock className="w-6 h-6" style={{ color: "hsl(45 80% 40%)" }} />
                </div>
                <div>
                  <span className="font-nepali text-muted-foreground text-sm">खुल्ने समय / Opening Hours:</span>
                  <p className="font-nepali" style={{ color: "hsl(220 50% 25%)" }}>आइत - शुक्र: बिहान ९:०० - साँझ ७:००</p>
                  <p className="text-sm" style={{ color: "hsl(0 70% 45%)" }}>शनिबार: बन्द (Saturday: Closed)</p>
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
          className="text-center py-6 px-8 rounded-xl mx-auto max-w-md"
          style={{
            background: "linear-gradient(135deg, hsl(45 90% 55% / 0.15), hsl(45 85% 50% / 0.1))",
            border: "1px solid hsl(45 90% 55% / 0.3)",
          }}
        >
          <span className="font-nepali text-muted-foreground">प्रोप्राइटर / Proprietor:</span>
          <p className="font-heading text-xl font-bold mt-1" style={{ color: "hsl(0 75% 45%)" }}>
            मनोज कुमार मण्डल
          </p>
          <p className="text-sm text-muted-foreground">Manoj Kumar Mandal</p>
        </motion.div>
      </motion.div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,90 1440,80 L1440,120 L0,120 Z"
            fill="hsl(220 50% 15%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
