import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-24 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
      style={{
        background: isDark
          ? "linear-gradient(135deg, hsl(45 90% 55%), hsl(45 85% 45%))"
          : "linear-gradient(135deg, hsl(220 60% 25%), hsl(220 60% 35%))",
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {isDark ? <Sun className="w-6 h-6 text-white" /> : <Moon className="w-6 h-6 text-white" />}
    </motion.button>
  );
};

export default ThemeToggle;

