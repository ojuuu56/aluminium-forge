import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/9779862198360"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "hsl(142 70% 45%)",
        }}
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

      {/* Button */}
      <div
        className="relative w-16 h-16 flex items-center justify-center rounded-full"
        style={{
          background: "linear-gradient(135deg, hsl(142 70% 40%), hsl(142 70% 50%))",
          boxShadow: "0 10px 40px hsl(142 70% 45% / 0.5)",
        }}
      >
        <MessageCircle className="w-8 h-8 text-white" />

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, hsl(0 0% 100% / 0.3) 0%, transparent 50%)",
            }}
          />
        </motion.div>
      </div>

      {/* Tooltip */}
      <motion.div
        className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          background: "hsl(220 15% 15%)",
          border: "1px solid hsl(210 15% 30%)",
          boxShadow: "0 10px 30px hsl(0 0% 0% / 0.3)",
        }}
      >
        <span className="font-body text-aluminium-light text-sm">Chat with us on WhatsApp</span>
        {/* Arrow */}
        <div
          className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0"
          style={{
            borderTop: "6px solid transparent",
            borderBottom: "6px solid transparent",
            borderLeft: "8px solid hsl(210 15% 30%)",
          }}
        />
      </motion.div>
    </motion.a>
  );
};

export default WhatsAppButton;
