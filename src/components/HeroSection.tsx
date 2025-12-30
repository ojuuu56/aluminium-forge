import { motion } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Clock } from "lucide-react";
import shopBoard from "@/assets/shop-board.jpeg";
import shopFront from "@/assets/shop-front.jpeg";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-background"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--accent) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute top-0 right-0 w-96 h-96"
          style={{
            background: "radial-gradient(circle at top right, hsl(var(--primary) / 0.12), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96"
          style={{
            background: "radial-gradient(circle at bottom left, hsl(var(--accent) / 0.15), transparent 70%)",
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div className="relative z-10 container mx-auto px-4 md:px-6 pt-24 pb-12">
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <motion.h1 className="font-nepali text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-primary">
            नेपाल अल्युमिनियम
          </motion.h1>
          <motion.p className="font-heading text-2xl md:text-3xl font-bold tracking-wider text-foreground">
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

        {/* Shop Front - Large Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <img
            src={shopFront}
            alt="नेपाल अल्युमिनियम पसल - बिराटनगर"
            className="w-full max-w-4xl mx-auto h-auto object-contain rounded-2xl shadow-2xl"
            style={{
              boxShadow: "0 30px 80px hsl(var(--foreground) / 0.2)",
            }}
            loading="eager"
          />
        </motion.div>

        {/* Shop Board + Contact Info Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Shop Board */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <img
              src={shopBoard}
              alt="नेपाल अल्युमिनियम - Shop Board"
              className="w-full max-w-md h-auto object-contain rounded-xl shadow-xl"
              style={{
                boxShadow: "0 20px 50px hsl(var(--foreground) / 0.15)",
              }}
              loading="eager"
            />
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-4"
          >
            {/* Call Now - Primary */}
            <a
              href="tel:+9779814318483"
              className="flex items-center gap-4 p-5 rounded-xl group transition-all duration-300 hover:scale-[1.02] bg-primary"
              style={{
                boxShadow: "0 10px 30px hsl(var(--primary) / 0.35)",
              }}
            >
              <div className="w-14 h-14 flex items-center justify-center bg-primary-foreground/20 rounded-full">
                <Phone className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <span className="font-nepali text-primary-foreground/90 text-sm block">कल गर्नुहोस्</span>
                <span className="font-heading text-2xl text-primary-foreground font-bold">9814318483</span>
              </div>
            </a>

            {/* Call Now - Secondary */}
            <a
              href="tel:+9779862198360"
              className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, hsl(var(--accent)), hsl(var(--accent) / 0.8))",
                boxShadow: "0 8px 25px hsl(var(--accent) / 0.35)",
              }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-accent-foreground/10 rounded-full">
                <Phone className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <span className="font-nepali text-accent-foreground/80 text-sm block">कल गर्नुहोस्</span>
                <span className="font-heading text-xl text-accent-foreground font-bold">9862198360</span>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="font-nepali text-muted-foreground text-sm">ठेगाना / Address:</span>
                <p className="font-nepali text-foreground">केसलिया रोड, बिराटनगर-६</p>
                <p className="text-sm text-muted-foreground">Kesaliya Road, Biratnagar 6</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-accent/30">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/15">
                <Clock className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <span className="font-nepali text-muted-foreground text-sm">खुल्ने समय / Opening Hours:</span>
                <p className="font-nepali text-foreground">आइत - शुक्र: बिहान ९:०० - साँझ ७:००</p>
                <p className="text-sm text-primary">शनिबार: बन्द (Saturday: Closed)</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Proprietor Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center py-6 px-8 rounded-xl mx-auto max-w-md mt-8 bg-accent/10 border border-accent/30"
        >
          <span className="font-nepali text-muted-foreground">प्रोप्राइटर / Proprietor:</span>
          <p className="font-heading text-xl font-bold mt-1 text-primary">
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
            className="fill-foreground/90"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
