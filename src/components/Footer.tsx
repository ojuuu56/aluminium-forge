import { motion } from "framer-motion";
import Logo from "./Logo";
import { Phone, MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative py-16 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(220 15% 6%) 0%, hsl(220 15% 4%) 100%)",
      }}
    >
      {/* Top line */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(210 15% 30%), transparent)",
        }}
      />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & About */}
          <div>
            <Logo className="mb-6" />
            <p className="font-body text-muted-foreground leading-relaxed">
              Premium Aluminium & Construction Works in Biratnagar, Nepal. 
              Crafting excellence in every project.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg text-aluminium-light mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Services", "Gallery", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-body text-muted-foreground hover:text-glass transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg text-aluminium-light mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-glass flex-shrink-0" />
                <span className="font-body text-muted-foreground">Biratnagar, Nepal</span>
              </li>
              <li>
                <a href="tel:+9779814318483" className="flex items-center gap-3 group">
                  <Phone className="w-5 h-5 text-glass flex-shrink-0" />
                  <span className="font-body text-muted-foreground group-hover:text-glass transition-colors">
                    +977 9814318483
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:+9779802754482" className="flex items-center gap-3 group">
                  <Phone className="w-5 h-5 text-glass flex-shrink-0" />
                  <span className="font-body text-muted-foreground group-hover:text-glass transition-colors">
                    +977 9802754482
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/9779862198360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <MessageCircle className="w-5 h-5 text-glass flex-shrink-0" />
                  <span className="font-body text-muted-foreground group-hover:text-glass transition-colors">
                    WhatsApp: +977 9862198360
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{
            borderTop: "1px solid hsl(210 15% 20%)",
          }}
        >
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nepal Aluminium. All rights reserved.
          </p>
          <p className="font-body text-sm text-muted-foreground">
            Proprietor: <span className="text-aluminium-light">Manoj Kumar Mandal</span>
          </p>
        </div>
      </div>

      {/* Decorative corner */}
      <div
        className="absolute bottom-0 right-0 w-40 h-40 opacity-10"
        style={{
          background: "linear-gradient(-45deg, hsl(200 60% 50% / 0.3), transparent)",
        }}
      />
    </footer>
  );
};

export default Footer;
