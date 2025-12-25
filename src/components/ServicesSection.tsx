import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  LayoutGrid, 
  Building2, 
  Fence, 
  Layers, 
  UtensilsCrossed,
  GlassWater
} from "lucide-react";

const services = [
  {
    icon: LayoutGrid,
    title: "Aluminium Windows & Doors",
    description: "Premium quality aluminium frames with precision engineering and modern aesthetics.",
  },
  {
    icon: Building2,
    title: "Readymade Cement Wall",
    description: "Durable prefabricated cement wall solutions for rapid construction.",
  },
  {
    icon: Fence,
    title: "Steel Railing",
    description: "Elegant and sturdy steel railings with contemporary designs.",
  },
  {
    icon: Layers,
    title: "False Ceiling",
    description: "Sophisticated false ceiling installations that transform spaces.",
  },
  {
    icon: UtensilsCrossed,
    title: "Kitchen Cabinet",
    description: "Custom aluminium kitchen cabinets built for durability and style.",
  },
  {
    icon: GlassWater,
    title: "Glass Works",
    description: "Complete glass solutions — partitions, railings, panels, and facades.",
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
        delay: index * 0.15,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      <div
        className="relative p-8 h-full"
        style={{
          background: "linear-gradient(135deg, hsl(220 15% 15%) 0%, hsl(220 15% 12%) 100%)",
          border: "1px solid hsl(210 15% 25%)",
          boxShadow: "0 20px 50px hsl(0 0% 0% / 0.4), inset 0 1px 0 hsl(210 15% 30% / 0.3)",
        }}
      >
        {/* Metallic corner accents */}
        <div
          className="absolute top-0 left-0 w-16 h-16"
          style={{
            background: "linear-gradient(135deg, hsl(210 15% 45%) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-16 h-16"
          style={{
            background: "linear-gradient(-45deg, hsl(200 60% 50% / 0.3) 0%, transparent 50%)",
          }}
        />

        {/* Icon */}
        <motion.div
          className="relative w-16 h-16 mb-6"
          whileHover={{ scale: 1.1, rotateY: 15 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, hsl(210 15% 30%), hsl(210 15% 40%))",
              boxShadow: "0 10px 30px hsl(0 0% 0% / 0.3)",
            }}
          />
          <div className="relative flex items-center justify-center h-full">
            <service.icon className="w-8 h-8 text-glass" />
          </div>
        </motion.div>

        {/* Content */}
        <h3 className="font-heading text-xl font-bold text-aluminium-light mb-3">
          {service.title}
        </h3>
        <p className="font-body text-muted-foreground leading-relaxed">
          {service.description}
        </p>

        {/* Hover glow */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
          style={{
            background: "radial-gradient(circle at 50% 50%, hsl(200 60% 50% / 0.1), transparent 70%)",
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
        background: "linear-gradient(180deg, hsl(220 15% 8%) 0%, hsl(220 15% 10%) 50%, hsl(220 15% 8%) 100%)",
      }}
    >
      {/* Section background elements */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(210 15% 40%), transparent)",
        }}
      />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block font-body text-glass tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            What We Offer
          </motion.span>
          <h2
            className="font-heading text-4xl md:text-6xl font-bold"
            style={{
              background: "linear-gradient(135deg, hsl(210 15% 75%), hsl(210 20% 90%), hsl(210 15% 65%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SERVICES
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-60 opacity-20"
        style={{
          background: "linear-gradient(135deg, hsl(210 15% 40%), hsl(210 15% 25%))",
          transform: "rotateY(-20deg) rotateX(10deg)",
        }}
        animate={{
          rotateY: [-20, -15, -20],
          translateZ: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default ServicesSection;
