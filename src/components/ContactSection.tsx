import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, MessageCircle, Clock, User } from "lucide-react";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(200 40% 96%) 0%, hsl(210 40% 94%) 100%)",
      }}
      id="contact"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span className="inline-block font-nepali text-lg mb-2" style={{ color: "hsl(0 75% 50%)" }}>
            सम्पर्क गर्नुहोस्
          </motion.span>
          <h2 className="font-nepali text-4xl md:text-5xl font-bold" style={{ color: "hsl(0 75% 45%)" }}>
            सम्पर्क
          </h2>
          <p className="text-muted-foreground mt-2">Contact Us</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Proprietor */}
            <div 
              className="p-5 rounded-xl"
              style={{ 
                background: "white",
                boxShadow: "0 4px 20px hsl(220 50% 20% / 0.08)",
                border: "1px solid hsl(210 30% 90%)"
              }}
            >
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 flex items-center justify-center rounded-full"
                  style={{ background: "linear-gradient(135deg, hsl(0 75% 50%), hsl(0 70% 45%))" }}
                >
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-nepali text-muted-foreground text-sm">प्रोप्राइटर / Proprietor</span>
                  <h3 className="font-nepali text-xl" style={{ color: "hsl(220 50% 20%)" }}>मनोज कुमार मण्डल</h3>
                  <p className="text-sm text-muted-foreground">Manoj Kumar Mandal</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div 
              className="p-5 rounded-xl"
              style={{ 
                background: "white",
                boxShadow: "0 4px 20px hsl(220 50% 20% / 0.08)",
                border: "1px solid hsl(210 30% 90%)"
              }}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 flex items-center justify-center flex-shrink-0 rounded-full"
                  style={{ background: "hsl(220 60% 95%)" }}
                >
                  <MapPin className="w-6 h-6" style={{ color: "hsl(220 60% 40%)" }} />
                </div>
                <div>
                  <span className="font-nepali text-muted-foreground text-sm">ठेगाना / Address</span>
                  <h3 className="font-nepali text-lg" style={{ color: "hsl(220 50% 20%)" }}>केसलिया रोड, बिराटनगर-६</h3>
                  <p className="text-sm text-muted-foreground">Kesaliya Road, Biratnagar 6, Nepal</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <a 
              href="tel:+9779814318483"
              className="block p-5 rounded-xl transition-all duration-300 hover:scale-[1.02]"
              style={{ 
                background: "linear-gradient(135deg, hsl(0 75% 50%), hsl(0 70% 45%))",
                boxShadow: "0 8px 30px hsl(0 75% 50% / 0.3)"
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 bg-white/20 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-nepali text-white/80 text-sm">फोन नम्बर / Phone</span>
                  <p className="font-heading text-2xl text-white font-bold">+977 9814318483</p>
                </div>
              </div>
            </a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/9779862198360"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-xl transition-all duration-300"
              style={{ 
                background: "linear-gradient(135deg, hsl(142 70% 40%), hsl(142 70% 35%))", 
                boxShadow: "0 8px 30px hsl(142 70% 40% / 0.3)" 
              }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white/15 rounded-full">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-nepali text-white/80 text-sm block">WhatsApp मा च्याट गर्नुहोस्</span>
                <span className="font-heading text-xl text-white font-bold">+977 9862198360</span>
              </div>
            </motion.a>

            {/* Hours */}
            <div 
              className="p-5 rounded-xl"
              style={{ 
                background: "white",
                boxShadow: "0 4px 20px hsl(220 50% 20% / 0.08)",
                border: "1px solid hsl(45 90% 55% / 0.3)"
              }}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 flex items-center justify-center flex-shrink-0 rounded-full"
                  style={{ background: "hsl(45 90% 95%)" }}
                >
                  <Clock className="w-6 h-6" style={{ color: "hsl(45 80% 40%)" }} />
                </div>
                <div>
                  <span className="font-nepali text-muted-foreground text-sm">खुल्ने समय / Opening Hours</span>
                  <h3 className="font-nepali text-lg" style={{ color: "hsl(220 50% 20%)" }}>आइत - शुक्र: बिहान ९:०० - साँझ ७:००</h3>
                  <p className="text-sm text-muted-foreground">Sun - Fri: 9:00 AM - 7:00 PM</p>
                  <p className="font-nepali text-sm mt-1" style={{ color: "hsl(0 70% 45%)" }}>शनिबार: बन्द (Saturday: Closed)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div 
              className="rounded-xl overflow-hidden h-full min-h-[500px]"
              style={{ 
                boxShadow: "0 10px 40px hsl(220 50% 20% / 0.15)",
                border: "3px solid hsl(0 75% 50% / 0.2)"
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.1696251555445!2d87.24165819999999!3d26.450260699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef75001b3280cd%3A0x51d7b30a857dce8!2sNepal%20Aluminium!5e0!3m2!1sen!2snp!4v1766913319846!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "500px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nepal Aluminium Location - Kesaliya Road, Biratnagar"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
