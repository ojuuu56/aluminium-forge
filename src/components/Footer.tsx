import { motion } from "framer-motion";
import Logo from "./Logo";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative py-16 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(220 50% 15%) 0%, hsl(220 55% 10%) 100%)",
      }}
    >
      {/* Top decorative line */}
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{
          background: "linear-gradient(90deg, hsl(0 75% 50%), hsl(45 90% 55%), hsl(0 75% 50%))",
        }}
      />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & About */}
          <div>
            <Logo className="mb-6" />
            <p className="font-nepali text-foreground/80 leading-relaxed mb-2">
              बिराटनगरको प्रिमियम अल्युमिनियम तथा निर्माण कार्य।
            </p>
            <p className="text-muted-foreground text-sm">
              Premium Aluminium & Construction Works in Biratnagar, Nepal.
            </p>
          </div>

          {/* Quick Links / द्रुत लिंकहरू */}
          <div>
            <h4 className="font-heading text-lg mb-6" style={{ color: "hsl(45 90% 60%)" }}>
              द्रुत लिंकहरू / Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { nepali: "गृहपृष्ठ", english: "Home", link: "#home" },
                { nepali: "सेवाहरू", english: "Services", link: "#services" },
                { nepali: "ग्यालेरी", english: "Gallery", link: "#gallery" },
                { nepali: "हाम्रो बारेमा", english: "About", link: "#about" },
                { nepali: "सम्पर्क", english: "Contact", link: "#contact" },
              ].map((item) => (
                <li key={item.english}>
                  <a
                    href={item.link}
                    className="group flex items-center gap-2 transition-colors"
                  >
                    <span className="font-nepali text-foreground/80 group-hover:text-primary transition-colors">
                      {item.nepali}
                    </span>
                    <span className="text-muted-foreground text-sm group-hover:text-primary/80 transition-colors">
                      ({item.english})
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / सम्पर्क */}
          <div>
            <h4 className="font-heading text-lg mb-6" style={{ color: "hsl(45 90% 60%)" }}>
              सम्पर्क / Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: "hsl(0 75% 55%)" }} />
                <div>
                  <p className="font-nepali text-foreground/80">केसलिया रोड, बिराटनगर-६</p>
                  <p className="text-muted-foreground text-sm">Kesaliya Road, Biratnagar 6, Nepal</p>
                </div>
              </li>
              <li>
                <a href="tel:+9779814318483" className="flex items-center gap-3 group">
                  <Phone className="w-5 h-5 flex-shrink-0" style={{ color: "hsl(0 75% 55%)" }} />
                  <div>
                    <span className="font-nepali text-foreground/80 group-hover:text-primary transition-colors block">
                      फोन / Phone
                    </span>
                    <span className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                      +977 9814318483
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/9779862198360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <MessageCircle className="w-5 h-5 flex-shrink-0" style={{ color: "hsl(142 70% 45%)" }} />
                  <div>
                    <span className="font-nepali text-foreground/80 group-hover:text-primary transition-colors block">
                      व्हाट्सएप / WhatsApp
                    </span>
                    <span className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                      +977 9862198360
                    </span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: "hsl(45 90% 55%)" }} />
                <div>
                  <p className="font-nepali text-foreground/80">आइत - शुक्र: ९:०० - ७:००</p>
                  <p className="text-sm text-muted-foreground">Sun - Fri: 9:00 AM - 7:00 PM</p>
                  <p className="font-nepali text-sm" style={{ color: "hsl(0 70% 55%)" }}>शनिबार: बन्द (Sat: Closed)</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{
            borderTop: "1px solid hsl(220 40% 25%)",
          }}
        >
          <div className="text-center md:text-left">
            <p className="font-nepali text-sm text-foreground/70">
              © {new Date().getFullYear()} नेपाल अल्युमिनियम। सर्वाधिकार सुरक्षित।
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Nepal Aluminium. All rights reserved.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="font-nepali text-sm text-foreground/70">
              प्रोप्राइटर: <span style={{ color: "hsl(45 90% 60%)" }}>मनोज कुमार मण्डल</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Proprietor: <span style={{ color: "hsl(45 90% 60%)" }}>Manoj Kumar Mandal</span>
            </p>
          </div>
        </div>
      </div>

      {/* Decorative corner glow */}
      <div
        className="absolute bottom-0 right-0 w-60 h-60 opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(0 75% 50% / 0.4), transparent)",
        }}
      />
    </footer>
  );
};

export default Footer;
