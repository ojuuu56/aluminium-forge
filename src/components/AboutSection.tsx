import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Clock, CheckCircle } from "lucide-react";

const stats = [
  { icon: Clock, value: "15+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Award, value: "1000+", label: "Projects Completed" },
  { icon: CheckCircle, value: "100%", label: "Quality Assured" },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(220 15% 10%) 0%, hsl(220 15% 8%) 100%)",
      }}
      id="about"
    >
      {/* Decorative panels */}
      <motion.div
        className="absolute top-20 left-[-5%] w-40 h-80 opacity-30"
        style={{
          background: "linear-gradient(180deg, hsl(210 15% 35%), hsl(210 15% 25%))",
          y: y1,
          transform: "rotateY(15deg)",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-[-5%] w-60 h-40 opacity-20"
        style={{
          background: "linear-gradient(135deg, hsl(200 60% 50% / 0.3), transparent)",
          y: y2,
          transform: "rotateY(-10deg)",
        }}
      />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block font-body text-glass tracking-[0.3em] uppercase mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              About Us
            </motion.span>

            <h2
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
              style={{
                background: "linear-gradient(135deg, hsl(210 15% 75%), hsl(210 20% 90%), hsl(210 15% 65%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              CRAFTING EXCELLENCE IN ALUMINIUM
            </h2>

            <div className="space-y-6 font-body text-lg text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <span className="text-aluminium-light font-semibold">Nepal Aluminium</span> stands as 
                a premier name in aluminium and construction works in Biratnagar, Nepal. Under the 
                expert leadership of <span className="text-glass">Manoj Kumar Mandal</span>, we have 
                transformed countless residential and commercial spaces.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                From sleek aluminium windows and doors to stunning glass facades, our craftsmanship 
                reflects precision, durability, and aesthetic excellence. Every project we undertake 
                is a testament to our commitment to quality.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                We specialize in complete solutions — from initial design concepts to flawless 
                installation, ensuring your vision becomes reality with our industrial expertise.
              </motion.p>
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="relative p-8 group"
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                style={{
                  background: "linear-gradient(135deg, hsl(220 15% 15%) 0%, hsl(220 15% 12%) 100%)",
                  border: "1px solid hsl(210 15% 25%)",
                  transformStyle: "preserve-3d",
                }}
                whileHover={{
                  transform: "perspective(1000px) rotateX(-5deg) rotateY(5deg) translateZ(20px)",
                  boxShadow: "0 30px 60px hsl(0 0% 0% / 0.4)",
                }}
              >
                {/* Corner accent */}
                <div
                  className="absolute top-0 left-0 w-12 h-12"
                  style={{
                    background: "linear-gradient(135deg, hsl(200 60% 50% / 0.3) 0%, transparent 50%)",
                  }}
                />

                <stat.icon className="w-8 h-8 text-glass mb-4" />
                
                <motion.span
                  className="block font-heading text-4xl md:text-5xl font-bold text-aluminium-light"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                >
                  {stat.value}
                </motion.span>
                
                <span className="font-body text-muted-foreground mt-2 block">
                  {stat.label}
                </span>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, hsl(200 60% 50% / 0.1), transparent 70%)",
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
