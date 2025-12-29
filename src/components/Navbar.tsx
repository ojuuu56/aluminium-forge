import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { nepali: "गृहपृष्ठ", english: "Home", href: "#" },
  { nepali: "सेवाहरू", english: "Services", href: "#services" },
  { nepali: "ग्यालेरी", english: "Gallery", href: "#gallery" },
  { nepali: "हाम्रो बारेमा", english: "About", href: "#about" },
  { nepali: "सम्पर्क", english: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "hsl(0 0% 100% / 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        boxShadow: scrolled ? "0 4px 20px hsl(220 50% 20% / 0.1)" : "none",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.english}
                href={link.href}
                className="font-body text-sm tracking-wider transition-colors relative group"
                style={{ color: scrolled ? "hsl(220 50% 30%)" : "hsl(220 50% 25%)" }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="font-nepali">{link.nepali}</span>
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{
                    background: "linear-gradient(90deg, hsl(0 75% 50%), hsl(45 90% 55%))",
                  }}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="tel:+9779814318483"
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, hsl(0 75% 50%), hsl(0 70% 45%))",
              boxShadow: "0 4px 15px hsl(0 75% 50% / 0.3)",
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02, boxShadow: "0 6px 20px hsl(0 75% 50% / 0.4)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone className="w-4 h-4 text-white" />
            <span className="font-nepali text-sm text-white">कल गर्नुहोस्</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: scrolled ? "hsl(0 75% 50%)" : "hsl(0 75% 50% / 0.9)",
            }}
          >
            {isOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="lg:hidden overflow-hidden"
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: "hsl(0 0% 100% / 0.98)",
          backdropFilter: "blur(20px)",
          borderTop: isOpen ? "1px solid hsl(210 30% 90%)" : "none",
        }}
      >
        <div className="container mx-auto px-6 py-6 space-y-4">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.english}
              href={link.href}
              className="block py-2 transition-colors"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
              transition={{ delay: index * 0.05 }}
            >
              <span className="font-nepali text-lg" style={{ color: "hsl(220 50% 25%)" }}>{link.nepali}</span>
              <span className="text-muted-foreground text-sm ml-2">({link.english})</span>
            </motion.a>
          ))}
          
          <motion.a
            href="tel:+9779814318483"
            className="flex items-center gap-2 px-5 py-3 w-full justify-center mt-4 rounded-lg"
            style={{
              background: "linear-gradient(135deg, hsl(0 75% 50%), hsl(0 70% 45%))",
            }}
            onClick={() => setIsOpen(false)}
          >
            <Phone className="w-4 h-4 text-white" />
            <span className="font-nepali text-white">कल गर्नुहोस्</span>
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
