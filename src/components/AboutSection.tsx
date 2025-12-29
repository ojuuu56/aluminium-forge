import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Clock, CheckCircle } from "lucide-react";

const stats = [
  { icon: Clock, valueNepali: "१५+", valueEnglish: "15+", labelNepali: "वर्षको अनुभव", labelEnglish: "Years Experience" },
  { icon: Users, valueNepali: "५००+", valueEnglish: "500+", labelNepali: "खुसी ग्राहकहरू", labelEnglish: "Happy Clients" },
  { icon: Award, valueNepali: "१०००+", valueEnglish: "1000+", labelNepali: "पूरा गरिएका प्रोजेक्ट", labelEnglish: "Projects Completed" },
  { icon: CheckCircle, valueNepali: "१००%", valueEnglish: "100%", labelNepali: "गुणस्तर ग्यारेन्टी", labelEnglish: "Quality Assured" },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(220 50% 15%) 0%, hsl(220 55% 12%) 100%)",
      }}
      id="about"
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(45 90% 55% / 0.5), transparent)",
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
              className="inline-block font-nepali text-lg mb-2"
              style={{ color: "hsl(45 90% 60%)" }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              हाम्रो बारेमा
            </motion.span>
            <motion.span
              className="block font-body text-muted-foreground tracking-[0.2em] uppercase mb-6 text-sm"
            >
              About Us
            </motion.span>

            <h2
              className="font-nepali text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
              style={{ color: "hsl(0 75% 55%)" }}
            >
              अल्युमिनियममा उत्कृष्टता
            </h2>

            <div className="space-y-6 text-lg leading-relaxed">
              <motion.p
                className="font-nepali"
                style={{ color: "hsl(210 20% 80%)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <span style={{ color: "hsl(45 90% 65%)" }}>नेपाल अल्युमिनियम</span> बिराटनगर, नेपालमा 
                अल्युमिनियम र निर्माण कार्यमा प्रमुख नाम हो। 
                <span style={{ color: "hsl(200 70% 60%)" }}> मनोज कुमार मण्डल</span>को 
                विशेषज्ञ नेतृत्वमा, हामीले अनगिन्ती आवासीय र व्यावसायिक स्थानहरू रूपान्तरण गरेका छौं।
              </motion.p>

              <motion.p
                style={{ color: "hsl(210 20% 70%)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <span className="font-nepali">स्लिक अल्युमिनियम झ्याल र ढोकादेखि आकर्षक ग्लास फेसाडसम्म, </span>
                हाम्रो कारीगरी सटीकता, टिकाउपना र सौन्दर्य उत्कृष्टता प्रतिबिम्बित गर्छ।
              </motion.p>

              <motion.p
                className="text-sm"
                style={{ color: "hsl(210 15% 60%)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                Nepal Aluminium is a premier name in aluminium and construction works in Biratnagar, Nepal. 
                From sleek windows to stunning glass facades, our craftsmanship reflects precision and excellence.
              </motion.p>
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            className="grid grid-cols-2 gap-5"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ y: y1 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.labelEnglish}
                className="relative p-6 group cursor-pointer rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                style={{
                  background: "linear-gradient(135deg, hsl(220 50% 20%) 0%, hsl(220 55% 16%) 100%)",
                  border: "1px solid hsl(220 40% 28%)",
                }}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  boxShadow: "0 20px 40px hsl(0 0% 0% / 0.3), 0 0 20px hsl(0 75% 50% / 0.1)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {/* Corner accent */}
                <div
                  className="absolute top-0 left-0 w-10 h-10 rounded-tl-xl"
                  style={{
                    background: "linear-gradient(135deg, hsl(0 75% 50% / 0.3) 0%, transparent 50%)",
                  }}
                />

                <stat.icon className="w-7 h-7 mb-4" style={{ color: "hsl(200 70% 60%)" }} />
                
                <span className="block font-heading text-3xl md:text-4xl font-bold" style={{ color: "hsl(45 90% 65%)" }}>
                  {stat.valueEnglish}
                </span>
                
                <span className="font-nepali text-sm mt-2 block" style={{ color: "hsl(210 20% 75%)" }}>
                  {stat.labelNepali}
                </span>
                <span className="text-xs text-muted-foreground">
                  {stat.labelEnglish}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
