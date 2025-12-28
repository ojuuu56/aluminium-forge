import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, MessageCircle, Clock, User } from "lucide-react";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(220 50% 10%) 0%, hsl(220 50% 8%) 100%)",
      }}
      id="contact"
    >
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(0 75% 50%), transparent)",
        }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span className="inline-block font-nepali text-primary tracking-wide mb-4 text-lg">
            सम्पर्क गर्नुहोस्
          </motion.span>
          <h2 className="font-nepali text-3xl md:text-5xl font-bold text-primary">
            सम्पर्क
          </h2>
          <p className="font-body text-muted-foreground mt-2">Contact Us</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Proprietor */}
            <div className="p-6" style={{ background: "linear-gradient(135deg, hsl(220 50% 14%) 0%, hsl(220 50% 12%) 100%)", border: "1px solid hsl(220 40% 25%)" }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(0 75% 45%), hsl(0 75% 55%))" }}>
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-nepali text-muted-foreground text-sm">प्रोप्राइटर</span>
                  <h3 className="font-nepali text-xl text-aluminium-light">मनोज कुमार मण्डल</h3>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="p-6" style={{ background: "linear-gradient(135deg, hsl(220 50% 14%) 0%, hsl(220 50% 12%) 100%)", border: "1px solid hsl(220 40% 25%)" }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, hsl(220 60% 25%), hsl(220 60% 35%))" }}>
                  <MapPin className="w-6 h-6 text-glass" />
                </div>
                <div>
                  <span className="font-nepali text-muted-foreground text-sm">ठेगाना</span>
                  <h3 className="font-nepali text-xl text-aluminium-light">बिराटनगर, नेपाल</h3>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="p-6" style={{ background: "linear-gradient(135deg, hsl(220 50% 14%) 0%, hsl(220 50% 12%) 100%)", border: "1px solid hsl(220 40% 25%)" }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, hsl(0 75% 45%), hsl(0 75% 55%))" }}>
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-nepali text-muted-foreground text-sm">फोन नम्बर</span>
                  <a href="tel:+9779814318483" className="block font-heading text-xl text-aluminium-light hover:text-primary transition-colors">
                    +977 9814318483
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/9779862198360"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6"
              style={{ background: "linear-gradient(135deg, hsl(142 70% 30%), hsl(142 70% 40%))", boxShadow: "0 20px 50px hsl(142 70% 40% / 0.3)" }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-14 h-14 flex items-center justify-center bg-white/10 rounded-full">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="font-nepali text-white/80 text-sm block">WhatsApp मा च्याट गर्नुहोस्</span>
                <span className="font-heading text-xl text-white">+977 9862198360</span>
              </div>
            </motion.a>

            {/* Hours */}
            <div className="p-6" style={{ background: "linear-gradient(135deg, hsl(220 50% 14%) 0%, hsl(220 50% 12%) 100%)", border: "1px solid hsl(220 40% 25%)" }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, hsl(220 60% 25%), hsl(220 60% 35%))" }}>
                  <Clock className="w-6 h-6 text-glass" />
                </div>
                <div>
                  <span className="font-nepali text-muted-foreground text-sm">खुल्ने समय</span>
                  <h3 className="font-nepali text-lg text-aluminium-light">आइत - शुक्र: ९:०० AM - ७:०० PM</h3>
                  <p className="font-nepali text-destructive mt-1">शनिबार: बन्द</p>
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
            <div className="p-3 h-full min-h-[500px]" style={{ background: "linear-gradient(135deg, hsl(220 60% 25%) 0%, hsl(220 60% 18%) 100%)", boxShadow: "0 30px 80px hsl(0 0% 0% / 0.5)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.1696251555445!2d87.24165819999999!3d26.450260699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef75001b3280cd%3A0x51d7b30a857dce8!2sNepal%20Aluminium!5e0!3m2!1sen!2snp!4v1766913319846!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "470px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nepal Aluminium Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
