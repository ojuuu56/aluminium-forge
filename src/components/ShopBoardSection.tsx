import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Clock } from "lucide-react";
import shopBoard from "@/assets/shop-board.jpeg";
import shopFront from "@/assets/shop-front.jpeg";

const ShopBoardSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(220 50% 10%) 0%, hsl(220 50% 12%) 100%)",
      }}
    >
      {/* Red accent line */}
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(0 75% 50%), transparent)",
        }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-nepali text-3xl md:text-4xl font-bold text-primary mb-2">
            नेपाल अल्मुनियम
          </h2>
          <p className="font-body text-aluminium-light text-lg">Nepal Aluminium</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Shop Board - Full display, no cropping */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div
              className="p-4 md:p-6"
              style={{
                background: "linear-gradient(135deg, hsl(220 60% 20%) 0%, hsl(220 60% 15%) 100%)",
                boxShadow: "0 30px 80px hsl(0 0% 0% / 0.6), 0 0 40px hsl(0 75% 50% / 0.15)",
                border: "3px solid hsl(0 75% 50% / 0.4)",
              }}
            >
              <img
                src={shopBoard}
                alt="नेपाल अल्मुनियम - अल्मुनियम र UPVC को झ्याल र ढोका, झ्यालको सिसा - Shop Board"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="font-nepali text-muted-foreground text-sm">
                हाम्रो पसलको बोर्ड - सबै सेवाहरू यहाँ उल्लेख छन्
              </p>
              <p className="font-body text-muted-foreground text-xs">
                Our Shop Board - All services mentioned here
              </p>
            </div>
          </motion.div>

          {/* Shop Front + Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Shop Front Image */}
            <div
              className="p-3"
              style={{
                background: "linear-gradient(135deg, hsl(220 60% 20%) 0%, hsl(220 60% 15%) 100%)",
                boxShadow: "0 20px 60px hsl(0 0% 0% / 0.5)",
                border: "2px solid hsl(220 60% 30%)",
              }}
            >
              <img
                src={shopFront}
                alt="नेपाल अल्मुनियम पसल - बिराटनगर - Shop Front View"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="text-center">
              <p className="font-nepali text-aluminium-light">हाम्रो पसल - बिराटनगर</p>
              <p className="font-body text-muted-foreground text-sm">Our Shop - Biratnagar</p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid gap-4">
              {/* Call Now */}
              <a
                href="tel:+9779814318483"
                className="flex items-center gap-4 p-4 group"
                style={{
                  background: "linear-gradient(135deg, hsl(0 75% 45%), hsl(0 70% 40%))",
                  boxShadow: "0 10px 30px hsl(0 75% 50% / 0.3)",
                }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-nepali text-white/80 text-sm block">कल गर्नुहोस्</span>
                  <span className="font-heading text-xl text-white">+977 9814318483</span>
                </div>
              </a>

              {/* Location */}
              <div
                className="flex items-center gap-4 p-4"
                style={{
                  background: "linear-gradient(135deg, hsl(220 60% 20%), hsl(220 60% 18%))",
                  border: "1px solid hsl(220 60% 30%)",
                }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="font-nepali text-muted-foreground text-sm block">ठेगाना</span>
                  <span className="font-nepali text-aluminium-light">बिराटनगर, नेपाल</span>
                </div>
              </div>

              {/* Opening Hours */}
              <div
                className="flex items-center gap-4 p-4"
                style={{
                  background: "linear-gradient(135deg, hsl(220 60% 20%), hsl(220 60% 18%))",
                  border: "1px solid hsl(220 60% 30%)",
                }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="font-nepali text-muted-foreground text-sm block">खुल्ने समय</span>
                  <span className="font-nepali text-aluminium-light block">आइतबार - शुक्रबार: ९:०० - ७:००</span>
                  <span className="font-nepali text-destructive text-sm">शनिबार: बन्द</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShopBoardSection;
