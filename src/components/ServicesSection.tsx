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
    title: "Aluminium Windows & Doors",
    description: "High-quality aluminium windows and doors fabrication",
    image: aluminiumWindow,
  },
  {
    title: "UPVC Windows & Doors",
    description: "Modern UPVC windows and doors installation",
    image: upvcWindow,
  },
  {
    title: "Glass Works",
    description: "Partitions, railings, panels, and facades",
    image: glassWork,
  },
  {
    title: "ACP Glazing",
    description: "ACP board and glazing works",
    image: acpGlazing,
  },
  {
    title: "Steel Railing",
    description: "Beautiful and sturdy steel railings",
    image: steelRailing,
  },
  {
    title: "False Ceiling",
    description: "Modern false ceiling installation",
    image: falseCeiling,
  },
  {
    title: "Bathroom Enclosure",
    description: "Glass bathroom enclosure installation",
    image: bathroomEnclosure,
  },
  {
    title: "Toughened Glass",
    description: "Strong toughened glass for various uses",
    image: toughenedGlass,
  },
  {
    title: "Glass Railing",
    description: "Modern glass railing design",
    image: glassRailing,
  },
  {
    title: "Kitchen Cabinet",
    description: "Aluminium kitchen cabinet fabrication",
    image: kitchenCabinet,
  },
  {
    title: "Office Partition",
    description: "Glass partitions for offices",
    image: officePartition,
  },
  {
    title: "Iron Truss",
    description: "Durable iron truss structures",
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
      className="service-card relative group cursor-pointer overflow-hidden rounded-xl"
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      <div
        className="relative h-full bg-card border border-border rounded-xl"
        style={{
          boxShadow: "0 10px 30px hsl(var(--foreground) / 0.1)",
        }}
      >
        {/* Image */}
        <div className="relative h-40 overflow-hidden rounded-t-xl">
          {!imageLoaded && <div className="absolute inset-0 bg-secondary animate-pulse" />}
          <img
            src={service.image}
            alt={service.title}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
          {/* Red corner accent overlay */}
          <div
            className="absolute top-0 left-0 w-20 h-20 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--primary) / 0.6) 0%, transparent 50%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-primary mb-1">{service.title}</h3>
          <p className="text-sm text-foreground/80 leading-relaxed">{service.description}</p>
        </div>

        {/* Hover glow */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1), transparent 70%)",
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
    <section id="services" ref={sectionRef} className="relative py-32 overflow-hidden bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span className="inline-block text-primary tracking-wide mb-4 text-lg font-bold">
            Our Services
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary">Services</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Opening Hours */}
        <motion.div
          className="mt-16 text-center p-6 rounded-xl bg-card border border-primary/30"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl text-primary mb-2 font-bold">Opening Hours</h3>
          <p className="text-foreground text-lg">Sunday - Friday: 9:00 AM - 7:00 PM</p>
          <p className="text-destructive mt-2">Saturday: Closed</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
