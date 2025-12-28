import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "अल्मुनियम झ्याल र ढोका",
    titleEn: "Aluminium Windows & Doors",
    description: "उच्च गुणस्तरको अल्मुनियम फ्रेम झ्याल र ढोका",
  },
  {
    title: "UPVC झ्याल र ढोका",
    titleEn: "UPVC Windows & Doors",
    description: "आधुनिक UPVC झ्याल र ढोका जडान",
  },
  {
    title: "सिसा कार्य (ग्लास वर्क)",
    titleEn: "Glass Works",
    description: "पार्टीसन, रेलिङ, प्यानल र फसाड",
  },
  {
    title: "ACP ग्लेजिङ्",
    titleEn: "ACP Glazing",
    description: "ACP बोर्ड र ग्लेजिङ् कार्य",
  },
  {
    title: "स्टील रेलिङ्",
    titleEn: "Steel Railing",
    description: "सुन्दर र बलियो स्टील रेलिङ्",
  },
  {
    title: "फल्स सिलिङ्",
    titleEn: "False Ceiling",
    description: "आधुनिक फल्स सिलिङ् जडान",
  },
  {
    title: "बाथरुम इन्क्लोजर",
    titleEn: "Bathroom Enclosure",
    description: "सिसाको बाथरुम इन्क्लोजर",
  },
  {
    title: "टफन ग्लास",
    titleEn: "Toughened Glass",
    description: "बलियो टफन ग्लास जडान",
  },
  {
    title: "सिसा रेलिङ्",
    titleEn: "Glass Railing",
    description: "आधुनिक सिसा रेलिङ् डिजाइन",
  },
  {
    title: "किचन क्याबिनेट",
    titleEn: "Kitchen Cabinet",
    description: "अल्मुनियम किचन क्याबिनेट",
  },
  {
    title: "अफिस पार्टीसन",
    titleEn: "Office Partition",
    description: "अफिसको लागि सिसा पार्टीसन",
  },
  {
    title: "फलामको ट्रस",
    titleEn: "Iron Truss",
    description: "फलामको ट्रस संरचना",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="service-card-3d relative group cursor-pointer"
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      <div
        className="relative p-6 h-full"
        style={{
          background: "linear-gradient(135deg, hsl(220 50% 14%) 0%, hsl(220 50% 12%) 100%)",
          border: "1px solid hsl(220 40% 25%)",
          boxShadow: "0 20px 50px hsl(0 0% 0% / 0.4)",
        }}
      >
        {/* Red corner accent */}
        <div
          className="absolute top-0 left-0 w-16 h-16"
          style={{
            background: "linear-gradient(135deg, hsl(0 75% 50% / 0.4) 0%, transparent 50%)",
          }}
        />

        {/* Content */}
        <h3 className="font-nepali text-xl font-bold text-primary mb-1">
          {service.title}
        </h3>
        <p className="font-body text-sm text-aluminium-light mb-2">
          {service.titleEn}
        </p>
        <p className="font-nepali text-muted-foreground leading-relaxed">
          {service.description}
        </p>

        {/* Hover glow */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
          style={{
            background: "radial-gradient(circle at 50% 50%, hsl(0 75% 50% / 0.1), transparent 70%)",
          }}
        />
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(220 50% 10%) 0%, hsl(220 50% 12%) 50%, hsl(220 50% 10%) 100%)",
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(0 75% 50%), transparent)",
        }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block font-nepali text-primary tracking-wide mb-4 text-lg"
          >
            हाम्रा सेवाहरू
          </motion.span>
          <h2
            className="font-nepali text-3xl md:text-5xl font-bold text-primary"
          >
            सेवाहरू
          </h2>
          <p className="font-body text-muted-foreground mt-2">Our Services</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.titleEn} service={service} index={index} />
          ))}
        </div>

        {/* Opening Hours */}
        <motion.div
          className="mt-16 text-center p-6"
          style={{
            background: "linear-gradient(135deg, hsl(220 50% 14%) 0%, hsl(220 50% 12%) 100%)",
            border: "1px solid hsl(0 75% 50% / 0.3)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <h3 className="font-nepali text-xl text-primary mb-2">खुल्ने समय / Opening Hours</h3>
          <p className="font-nepali text-aluminium-light text-lg">आइतबार - शुक्रबार: बिहान ९:०० - साँझ ७:००</p>
          <p className="font-body text-muted-foreground">Sunday - Friday: 9:00 AM - 7:00 PM</p>
          <p className="font-nepali text-destructive mt-2">शनिबार: बन्द / Saturday: Closed</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
