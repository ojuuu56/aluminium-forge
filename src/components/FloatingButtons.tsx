import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/9779862198360"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ background: "hsl(142 70% 45%)" }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div
          className="relative w-14 h-14 flex items-center justify-center rounded-full"
          style={{
            background: "linear-gradient(135deg, hsl(142 70% 40%), hsl(142 70% 50%))",
            boxShadow: "0 8px 30px hsl(142 70% 45% / 0.5)",
          }}
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-card border border-border shadow-lg">
          <span className="text-foreground text-sm font-nepali">WhatsApp</span>
        </div>
      </motion.a>

      {/* Call Button 1 - Primary */}
      <motion.a
        href="tel:+9779814318483"
        className="group relative"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ background: "hsl(0 75% 50%)" }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
        <div
          className="relative w-14 h-14 flex items-center justify-center rounded-full"
          style={{
            background: "linear-gradient(135deg, hsl(0 75% 45%), hsl(0 75% 55%))",
            boxShadow: "0 8px 30px hsl(0 75% 50% / 0.5)",
          }}
        >
          <Phone className="w-6 h-6 text-white" />
        </div>
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-card border border-border shadow-lg">
          <span className="text-foreground text-sm">9814318483</span>
        </div>
      </motion.a>

      {/* Call Button 2 - Secondary */}
      <motion.a
        href="tel:+9779862198360"
        className="group relative"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ background: "hsl(45 90% 55%)" }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
        />
        <div
          className="relative w-14 h-14 flex items-center justify-center rounded-full"
          style={{
            background: "linear-gradient(135deg, hsl(45 85% 45%), hsl(45 90% 55%))",
            boxShadow: "0 8px 30px hsl(45 90% 55% / 0.5)",
          }}
        >
          <Phone className="w-6 h-6 text-white" />
        </div>
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-card border border-border shadow-lg">
          <span className="text-foreground text-sm">9862198360</span>
        </div>
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
