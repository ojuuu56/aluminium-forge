import { motion } from "framer-motion";
import { Menu, X, Phone, Whatsapp } from "lucide-react";
import Logo from "./Logo";
import { useState, useEffect } from "react";

const navLinks = [
  { english: "Home", href: "#" },
  { english: "Services", href: "#services" },
  { english: "Gallery", href: "#gallery" },
  { english: "About", href: "#about" },
  { english: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        <Logo />

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.english}
              href={link.href}
              className="font-body text-sm tracking-wider relative group"
              style={{ color: scrolled ? "hsl(220 50% 30%)" : "hsl(220 50% 25%)" }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {link.english}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-red-500 to-yellow-400" />
            </motion.a>
          ))}
        </div>

        <motion.a
          href="tel:+9779814318483"
          className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-lg text-white"
          style={{
            background: "linear-gradient(135deg, hsl(0 75% 50%), hsl(0 70% 45%))",
            boxShadow: "0 4px 15px hsl(0 75% 50% / 0.3)",
          }}
          whileHover={{ scale: 1.02, boxShadow: "0 6px 20px hsl(0 75% 50% / 0.4)" }}
        >
          <Phone className="w-4 h-4 text-white" />
          <span>Call</span>
        </motion.a>

        <a
          href="https://wa.me/9779862198360"
          className="lg:hidden px-3 py-2 rounded-lg bg-green-500 flex items-center"
        >
          <Whatsapp className="w-5 h-5 text-white" />
        </a>

        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div className="absolute top-20 left-0 right-0 bg-white shadow-lg flex flex-col space-y-2 p-6 lg:hidden">
            {navLinks.map((link) => (
              <a key={link.english} href={link.href} className="text-lg" onClick={() => setIsOpen(false)}>
                {link.english}
              </a>
            ))}
            <a
              href="https://wa.me/9779862198360"
              className="flex items-center gap-2 px-5 py-3 w-full justify-center mt-4 rounded-lg bg-green-500 text-white"
            >
              <Whatsapp className="w-5 h-5" />
              WhatsApp
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;

