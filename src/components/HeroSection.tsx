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
        {/* Radial gradients for theme */}
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

        {/* Subtle falling glitter / petal animation */}
        <motion.div
          className="absolute inset-0"
          animate={{ y: ["0%", "100%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/50"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </motion.div>
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
            Aluminium & UPVC fabrication, windows, doors & glass works
          </motion.p>
        </motion.div>

        {/* Shop Board - blended */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 relative group"
        >
          <img
            src={shopBoard}
            alt="नेपाल अल्युमिनियम - Shop Board"
            className="w-full max-w-5xl mx-auto h-auto object-cover rounded-2xl shadow-2xl"
            style={{
              boxShadow: "0 30px 80px hsl(var(--foreground) / 0.2)",
            }}
            loading="eager"
          />
          {/* Overlay pattern for blending */}
          <div className="absolute inset-0 pointer-events-none rounded-2xl"
               style={{ background: "radial-gradient(circle at center, hsl(var(--accent)/0.08), transparent 70%)" }}
          />
        </motion.div>

        {/* Shop Front + Contact Info */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Shop Front with Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center relative"
          >
            <div className="border-4 border-primary rounded-xl p-2 relative">
              <img
                src={shopFront}
                alt="नेपाल अल्युमिनियम पसल - बिराटनगर"
                className="w-full max-w-lg h-auto object-cover rounded-lg shadow-lg"
                style={{
                  boxShadow: "0 20px 50px hsl(var(--foreground) / 0.15)",
                }}
                loading="eager"
              />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-primary/70 text-white rounded px-3 py-1 text-center">
                <p className="font-nepali font-bold text-sm">नेपाल अल्युमिनियम पसल</p>
                <p className="font-nepali text-xs">केसलिया रोड, बिराटनगर-६</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-4"
          >
            {/* Call Now */}
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
                <span className="font-nepali text-primary-foreground/90 text-sm block">Call Now</span>
                <span className="font-heading text-2xl text-primary-foreground font-bold">9814318483</span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/9779862198360"
              target="_blank"
              className="flex items-center gap-4 p-5 rounded-xl bg-accent transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-accent-foreground/20 rounded-full">
                <Phone className="w-7 h-7 text-accent-foreground" />
              </div>
              <div>
                <span className="font-heading text-accent-foreground font-bold">Message on WhatsApp</span>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="font-nepali text-muted-foreground text-sm">Address:</span>
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
                <span className="font-nepali text-muted-foreground text-sm">Opening Hours:</span>
                <p className="font-nepali text-foreground">Sun - Fri: 9:00 AM - 7:00 PM</p>
                <p className="text-sm text-destructive">Saturday: Closed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,90 1440,80 L1440,120 L0,120 Z"
            className="fill-card"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
