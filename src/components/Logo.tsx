import { motion } from "framer-motion";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
    >
      {/* Geometric Logo Mark */}
      <motion.svg
        viewBox="0 0 60 60"
        className="w-12 h-12 md:w-14 md:h-14"
        initial={{ rotateY: -90 }}
        animate={{ rotateY: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <defs>
          <linearGradient id="alumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(210 15% 75%)" />
            <stop offset="50%" stopColor="hsl(210 20% 85%)" />
            <stop offset="100%" stopColor="hsl(210 15% 60%)" />
          </linearGradient>
          <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(200 60% 50%)" />
            <stop offset="100%" stopColor="hsl(200 60% 70%)" />
          </linearGradient>
          <filter id="metalShadow">
            <feDropShadow dx="2" dy="4" stdDeviation="2" floodColor="hsl(0 0% 0%)" floodOpacity="0.3"/>
          </filter>
        </defs>
        
        {/* Outer frame - aluminium */}
        <rect
          x="4"
          y="4"
          width="52"
          height="52"
          fill="none"
          stroke="url(#alumGradient)"
          strokeWidth="4"
          filter="url(#metalShadow)"
        />
        
        {/* Inner diagonal - aluminium beam */}
        <motion.path
          d="M 15 15 L 45 45"
          stroke="url(#alumGradient)"
          strokeWidth="6"
          strokeLinecap="square"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        {/* Glass panel accent */}
        <motion.rect
          x="20"
          y="12"
          width="18"
          height="12"
          fill="url(#glassGradient)"
          opacity="0.8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />
        
        {/* Second glass panel */}
        <motion.rect
          x="32"
          y="36"
          width="14"
          height="10"
          fill="url(#glassGradient)"
          opacity="0.6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        />
        
        {/* N letter hint */}
        <motion.path
          d="M 10 48 L 10 35 L 22 48 L 22 35"
          stroke="url(#alumGradient)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="square"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
      </motion.svg>

      {/* Text */}
      <div className="flex flex-col">
        <motion.span
          className="font-heading text-xl md:text-2xl font-bold tracking-wider text-metallic"
          style={{
            background: "linear-gradient(135deg, hsl(210 15% 75%), hsl(210 20% 90%), hsl(210 15% 65%))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          NEPAL
        </motion.span>
        <motion.span
          className="font-heading text-sm md:text-base font-medium tracking-[0.3em] text-glass"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          ALUMINIUM
        </motion.span>
      </div>
    </motion.div>
  );
};

export default Logo;
