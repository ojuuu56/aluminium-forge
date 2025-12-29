import { motion } from "framer-motion";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
    >
      {/* Creative Logo Mark - Window/Door Frame Design */}
      <motion.svg
        viewBox="0 0 50 50"
        className="w-10 h-10 md:w-12 md:h-12"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
      >
        <defs>
          <linearGradient id="logoRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(0 75% 55%)" />
            <stop offset="100%" stopColor="hsl(0 70% 45%)" />
          </linearGradient>
          <linearGradient id="logoGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(45 90% 65%)" />
            <stop offset="100%" stopColor="hsl(45 85% 50%)" />
          </linearGradient>
          <linearGradient id="logoBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(200 70% 60%)" />
            <stop offset="100%" stopColor="hsl(200 60% 45%)" />
          </linearGradient>
        </defs>
        
        {/* Outer Frame - Red */}
        <rect
          x="3"
          y="3"
          width="44"
          height="44"
          rx="2"
          fill="none"
          stroke="url(#logoRedGrad)"
          strokeWidth="3"
        />
        
        {/* Inner Cross - Gold */}
        <line x1="25" y1="3" x2="25" y2="47" stroke="url(#logoGoldGrad)" strokeWidth="2" />
        <line x1="3" y1="25" x2="47" y2="25" stroke="url(#logoGoldGrad)" strokeWidth="2" />
        
        {/* Glass Panels - Blue */}
        <motion.rect
          x="7" y="7" width="15" height="15"
          fill="url(#logoBlueGrad)"
          opacity="0.6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.5 }}
        />
        <motion.rect
          x="28" y="28" width="15" height="15"
          fill="url(#logoBlueGrad)"
          opacity="0.6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.7 }}
        />
        
        {/* N Letter - Red */}
        <motion.path
          d="M 10 42 L 10 33 L 18 42 L 18 33"
          stroke="url(#logoRedGrad)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
        
        {/* A Letter Hint */}
        <motion.path
          d="M 32 42 L 36.5 33 L 41 42 M 34 38 L 39 38"
          stroke="url(#logoGoldGrad)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        />
      </motion.svg>

      {/* Text - Clean & Readable */}
      <div className="flex flex-col leading-tight">
        <motion.span
          className="font-heading text-lg md:text-xl font-bold tracking-wide"
          style={{
            color: "hsl(0 75% 55%)",
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          NEPAL
        </motion.span>
        <motion.span
          className="font-heading text-xs md:text-sm font-medium tracking-[0.15em]"
          style={{
            color: "hsl(45 90% 60%)",
          }}
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
