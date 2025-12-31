import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import ServicesSection from "@/components/ServicesSection";

import shopBoard from "@/assets/shop-board.jpeg";
import shopFront from "@/assets/shop-front.jpeg";

// Falling flowers effect
const FallingFlowers = ({ count = 20 }: { count?: number }) => {
  const flowers = Array.from({ length: count }, (_, i) => i);
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {flowers.map((f) => (
        <motion.div
          key={f}
          className="absolute w-6 h-6 bg-pink-400 rounded-full opacity-70"
          initial={{ y: -50, x: Math.random() * window.innerWidth }}
          animate={{ y: window.innerHeight + 50 }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-background">
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
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-4 md:px-6 pt-24 pb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-nepali text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-primary">
          नेपाल अल्युमिनियम
        </h1>
        <p className="font-heading text-2xl md:text-3xl font-bold tracking-wider text-foreground mb-4">
          NEPAL ALUMINIUM
        </p>
        <p className="font-nepali text-lg text-muted-foreground max-w-2xl mx-auto">
          अल्युमिनियम र UPVC को झ्याल, ढोका तथा सिसाको सम्पूर्ण काम
        </p>

        {/* Shop Board */}
        <motion.div
          className="my-12 relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={shopBoard} alt="Shop Board" className="w-full h-auto object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, hsl(var(--primary) / 0.1) 100%)",
            }}
          />
        </motion.div>

        {/* Shop Front */}
        <motion.div
          className="relative max-w-4xl mx-auto border-4 border-primary rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img src={shopFront} alt="Shop Front" className="w-full h-auto object-cover" />
          <div className="absolute bottom-4 left-4 bg-primary/80 p-4 rounded-lg text-white">
            <h3 className="font-bold text-lg">नेपाल अल्युमिनियम पसल</h3>
            <p>केसलिया रोड, बिराटनगर-६</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const Index = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          Nepal Aluminium | Aluminium Fabrication & Construction Solutions in Nepal
        </title>
        <meta
          name="description"
          content="Nepal Aluminium is a leading aluminium fabrication and construction company in Nepal providing aluminium windows, doors, railings, false ceilings, kitchen cabinets and glass works."
        />
        <link rel="canonical" href="https://nepalaluminium.com/" />
        <meta name="author" content="Nepal Aluminium" />
        <link rel="icon" type="image/x-icon" href="https://nepalaluminium.com/favicon.ico" />
        <meta property="og:title" content="Nepal Aluminium | Aluminium Fabrication Company in Nepal" />
        <meta property="og:description" content="Nepal Aluminium provides high-quality aluminium windows, doors, railings, ceilings, cabinets and glass works across Nepal." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nepalaluminium.com/" />
        <meta property="og:image" content="https://nepalaluminium.com/aluminium.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nepal Aluminium" />
        <meta name="twitter:description" content="Leading aluminium fabrication and construction solutions provider in Nepal." />
        <meta name="twitter:image" content="https://nepalaluminium.com/aluminium.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Nepal Aluminium",
            url: "https://nepalaluminium.com/",
            logo: "https://nepalaluminium.com/aluminium.png",
            description: "Aluminium fabrication and construction solutions provider in Nepal",
            sameAs: [],
          })}
        </script>
      </Helmet>

      <div className="relative">
        <Navbar />
        <ThemeToggle />
        <FallingFlowers />
        <HeroSection />
        <ServicesSection />
      </div>
    </HelmetProvider>
  );
};

export default Index;
