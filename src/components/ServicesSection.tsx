import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

// Import service images
import aluminiumWindow from "@/assets/services/aluminium-window.jpg";
import upvcWindow from "@/assets/services/upvc-window.jpg";
import glassWork from "@/assets/services/glass-work.jpg";
import acpGlazing from "@/assets/services/acp-glazing.jpg";
import steelRailing from "@/assets/services/steel-railing.jpg";
import falseCeiling from "@/assets/services/false-ceiling.jpg";
import bathroomEnclosure from "@/assets/services/bathroom-enclosure.jpg";
import toughenedGlass from "@/assets/services/toughened-glass.jpg";
import glassRailing from "@/assets/services/glass-railing.jpg";
import kitchenCabinet from "@/assets/services/kitchen-cabinet.jpg";
import officePartition from "@/assets/services/office-partition.jpg";
import ironTruss from "@/assets/services/iron-truss.jpg";

const services = [
  {
    title: "अल्मुनियम झ्याल र ढोका",
    titleEn: "Aluminium Windows & Doors",
    description: "उच्च गुणस्तरको अल्मुनियम फ्रेम झ्याल र ढोका",
    image: aluminiumWindow,
  },
  {
    title: "UPVC झ्याल र ढोका",
    titleEn: "UPVC Windows & Doors",
    description: "आधुनिक UPVC झ्याल र ढोका जडान",
    image: upvcWindow,
  },
  {
    title: "सिसा कार्य (ग्लास वर्क)",
    titleEn: "Glass Works",
    description: "पार्टीसन, रेलिङ, प्यानल र फसाड",
    image: glassWork,
  },
  {
    title: "ACP ग्लेजिङ्",
    titleEn: "ACP Glazing",
    description: "ACP बोर्ड र ग्लेजिङ् कार्य",
    image: acpGlazing,
  },
  {
    title: "स्टील रेलिङ्",
    titleEn: "Steel Railing",
    description: "सुन्दर र बलियो स्टील रेलिङ्",
    image: steelRailing,
  },
  {
    title: "फल्स सिलिङ्",
    titleEn: "False Ceiling",
    description: "आधुनिक फल्स सिलिङ् जडान",
    image: falseCeiling,
  },
  {
    title: "बाथरुम इन्क्लोजर",
    titleEn: "Bathroom Enclosure",
    description: "सिसाको बाथरुम इन्क्लोजर",
    image: bathroomEnclosure,
  },
  {
    title: "टफन ग्लास",
    titleEn: "Toughened Glass",
    description: "बलियो टफन ग्लास जडान",
    image: toughenedGlass,
  },
  {
    title: "सिसा रेलिङ्",
    titleEn: "Glass Railing",
    description: "आधुनिक सिसा रेलिङ् डिजाइन",
    image: glassRailing,
  },
  {
    title: "किचन क्याबिनेट",
    titleEn: "Kitchen Cabinet",
    description: "अल्मुनियम किचन क्याबिनेट",
    image: kitchenCabinet,
  },
  {
    title: "अफिस पार्टीसन",
    titleEn: "Office Partition",
    description: "अफिसको लागि सिसा पार्टीसन",
    image: officePartition,
  },
  {
    title: "फलामको ट्रस",
    titleEn: "Iron Truss",
    description: "फलामको ट्रस संरचना",
    image: ironTruss,
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="service-card-3d relative group cursor-pointer overflow-hidden rounded-xl"
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      <div
        className="relative h-full bg-card border border-border"
        style={{
          boxShadow: "0 10px 30px hsl(var(--foreground) / 0.1)",
        }}
      >
        {/* Image */}
        <div className="relative h-40 overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-secondary animate-pulse" />
          )}
          <img
            src={service.image}
            alt={service.titleEn}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
          {/* Red corner accent overlay */}
          <div
            className="absolute top-0 left-0 w-20 h-20 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary) / 0.6) 0%, transparent 50%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-nepali text-lg font-bold text-primary mb-1">
            {service.title}
          </h3>
          <p className="font-body text-xs text-muted-foreground mb-1">
            {service.titleEn}
          </p>
          <p className="font-nepali text-sm text-foreground/80 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Hover glow */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
          style={{
            background: "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1), transparent 70%)",
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
      className="relative py-32 overflow-hidden bg-secondary"
    >
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)",
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
          className="mt-16 text-center p-6 rounded-xl bg-card border border-primary/30"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <h3 className="font-nepali text-xl text-primary mb-2">खुल्ने समय / Opening Hours</h3>
          <p className="font-nepali text-foreground text-lg">आइतबार - शुक्रबार: बिहान ९:०० - साँझ ७:००</p>
          <p className="font-body text-muted-foreground">Sunday - Friday: 9:00 AM - 7:00 PM</p>
          <p className="font-nepali text-destructive mt-2">शनिबार: बन्द / Saturday: Closed</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
