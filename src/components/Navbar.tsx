import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.95]);
  const blur = useTransform(scrollY, [0, 100], [0, 20]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: scrolled ? "hsl(220 15% 8% / 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid hsl(210 15% 25% / 0.5)" : "none",
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
                key={link.label}
                href={link.href}
                className="font-body text-sm tracking-wider text-muted-foreground hover:text-aluminium-light transition-colors relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{
                    background: "linear-gradient(90deg, hsl(200 60% 50%), transparent)",
                  }}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="tel:+9779814318483"
            className="hidden lg:flex items-center gap-2 px-5 py-2.5"
            style={{
              background: "linear-gradient(135deg, hsl(210 15% 25%), hsl(210 15% 30%))",
              border: "1px solid hsl(210 15% 40%)",
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone className="w-4 h-4 text-glass" />
            <span className="font-body text-sm text-aluminium-light">Call Now</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: "linear-gradient(135deg, hsl(210 15% 25%), hsl(210 15% 30%))",
            }}
          >
            {isOpen ? (
              <X className="w-5 h-5 text-aluminium-light" />
            ) : (
              <Menu className="w-5 h-5 text-aluminium-light" />
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
          background: "hsl(220 15% 8% / 0.98)",
          borderTop: isOpen ? "1px solid hsl(210 15% 25% / 0.5)" : "none",
        }}
      >
        <div className="container mx-auto px-6 py-6 space-y-4">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="block font-body text-lg text-muted-foreground hover:text-aluminium-light transition-colors py-2"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
              transition={{ delay: index * 0.05 }}
            >
              {link.label}
            </motion.a>
          ))}
          
          <motion.a
            href="tel:+9779814318483"
            className="flex items-center gap-2 px-5 py-3 w-full justify-center mt-4"
            style={{
              background: "linear-gradient(135deg, hsl(210 15% 25%), hsl(210 15% 30%))",
              border: "1px solid hsl(210 15% 40%)",
            }}
            onClick={() => setIsOpen(false)}
          >
            <Phone className="w-4 h-4 text-glass" />
            <span className="font-body text-aluminium-light">Call Now</span>
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
