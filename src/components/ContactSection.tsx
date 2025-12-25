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
        background: "linear-gradient(180deg, hsl(220 15% 8%) 0%, hsl(220 15% 6%) 100%)",
      }}
      id="contact"
    >
      {/* Top line */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(210 15% 40%), transparent)",
        }}
      />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block font-body text-glass tracking-[0.3em] uppercase mb-4"
          >
            Get In Touch
          </motion.span>
          <h2
            className="font-heading text-4xl md:text-6xl font-bold"
            style={{
              background: "linear-gradient(135deg, hsl(210 15% 75%), hsl(210 20% 90%), hsl(210 15% 65%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            CONTACT US
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Proprietor */}
            <div
              className="p-6"
              style={{
                background: "linear-gradient(135deg, hsl(220 15% 15%) 0%, hsl(220 15% 12%) 100%)",
                border: "1px solid hsl(210 15% 25%)",
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-12 h-12 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, hsl(200 60% 40%), hsl(200 60% 50%))",
                  }}
                >
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-body text-muted-foreground text-sm">Proprietor</span>
                  <h3 className="font-heading text-xl text-aluminium-light">Manoj Kumar Mandal</h3>
                </div>
              </div>
            </div>

            {/* Location */}
            <div
              className="p-6"
              style={{
                background: "linear-gradient(135deg, hsl(220 15% 15%) 0%, hsl(220 15% 12%) 100%)",
                border: "1px solid hsl(210 15% 25%)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, hsl(210 15% 30%), hsl(210 15% 40%))",
                  }}
                >
                  <MapPin className="w-6 h-6 text-glass" />
                </div>
                <div>
                  <span className="font-body text-muted-foreground text-sm">Location</span>
                  <h3 className="font-heading text-xl text-aluminium-light">Biratnagar, Nepal</h3>
                  <p className="font-body text-muted-foreground mt-1">
                    Nepal Aluminium - Premium Aluminium & Construction Works
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Numbers */}
            <div
              className="p-6"
              style={{
                background: "linear-gradient(135deg, hsl(220 15% 15%) 0%, hsl(220 15% 12%) 100%)",
                border: "1px solid hsl(210 15% 25%)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, hsl(210 15% 30%), hsl(210 15% 40%))",
                  }}
                >
                  <Phone className="w-6 h-6 text-glass" />
                </div>
                <div className="space-y-3">
                  <span className="font-body text-muted-foreground text-sm block">Call Us</span>
                  <a
                    href="tel:+9779814318483"
                    className="flex items-center gap-2 font-heading text-xl text-aluminium-light hover:text-glass transition-colors"
                  >
                    +977 9814318483
                  </a>
                  <a
                    href="tel:+9779802754482"
                    className="flex items-center gap-2 font-heading text-xl text-aluminium-light hover:text-glass transition-colors"
                  >
                    +977 9802754482
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/9779862198360"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 p-6 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, hsl(142 70% 30%), hsl(142 70% 40%))",
                boxShadow: "0 20px 50px hsl(142 70% 40% / 0.3)",
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <div className="w-14 h-14 flex items-center justify-center bg-white/10 rounded-full">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="font-body text-white/80 text-sm block">Chat on WhatsApp</span>
                <span className="font-heading text-xl text-white">+977 9862198360</span>
              </div>
            </motion.a>

            {/* Hours */}
            <div
              className="p-6"
              style={{
                background: "linear-gradient(135deg, hsl(220 15% 15%) 0%, hsl(220 15% 12%) 100%)",
                border: "1px solid hsl(210 15% 25%)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, hsl(210 15% 30%), hsl(210 15% 40%))",
                  }}
                >
                  <Clock className="w-6 h-6 text-glass" />
                </div>
                <div>
                  <span className="font-body text-muted-foreground text-sm">Working Hours</span>
                  <h3 className="font-heading text-xl text-aluminium-light">Sun - Fri: 8AM - 6PM</h3>
                  <p className="font-body text-muted-foreground mt-1">Saturday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Map */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ perspective: "1000px" }}
          >
            <div
              className="p-3 h-full min-h-[500px]"
              style={{
                background: "linear-gradient(135deg, hsl(210 15% 30%) 0%, hsl(210 15% 20%) 100%)",
                boxShadow: "0 30px 80px hsl(0 0% 0% / 0.5)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57199.99629985055!2d87.26417565!3d26.4525492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef744e6e7d78c5%3A0x1c0a2c0b0c6b8c5e!2sBiratnagar%2C%20Nepal!5e0!3m2!1sen!2sus!4v1703500000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "470px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nepal Aluminium Location"
              />
            </div>

            {/* Glass overlay accent */}
            <div
              className="absolute top-0 left-0 w-20 h-20 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, hsl(200 60% 50% / 0.3), transparent)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
