import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { X, ZoomIn } from "lucide-react";

// Import gallery images
import building1 from "@/assets/gallery/building-1.jpeg";
import building2 from "@/assets/gallery/building-2.jpeg";
import building3 from "@/assets/gallery/building-3.jpeg";
import door1 from "@/assets/gallery/door-1.jpeg";
import door2 from "@/assets/gallery/door-2.jpeg";
import window1 from "@/assets/gallery/window-1.jpeg";
import window2 from "@/assets/gallery/window-2.jpeg";
import glass1 from "@/assets/gallery/glass-1.jpeg";
import facade1 from "@/assets/gallery/facade-1.jpeg";
import facade2 from "@/assets/gallery/facade-2.jpeg";

const galleryItems = [
  { src: facade2, category: "Facades", title: "Modern Commercial Facade" },
  { src: building1, category: "Buildings", title: "Multi-Color Aluminium Cladding" },
  { src: building2, category: "Commercial", title: "Commercial Building Front" },
  { src: building3, category: "Buildings", title: "Red Aluminium & Glass Structure" },
  { src: door1, category: "Doors", title: "Aluminium Door Installation" },
  { src: door2, category: "Doors", title: "Double Door System" },
  { src: window1, category: "Windows", title: "Premium Window Frame" },
  { src: window2, category: "Windows", title: "Sliding Window" },
  { src: glass1, category: "Glass Works", title: "Full Glass Storefront" },
  { src: facade1, category: "Facades", title: "Eye Care Center Facade Design" },
];

const GalleryItem = ({ item, index, onClick }: { item: typeof galleryItems[0]; index: number; onClick: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [imageLoaded, setImageLoaded] = useState(false);
  const randomDepth = 20 + (index % 4) * 15;

  return (
    <motion.div
      ref={ref}
      className="relative group cursor-pointer overflow-hidden h-full w-full"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -8 }}
    >
      <div
        className="h-full w-full p-2"
        style={{
          background: "linear-gradient(135deg, hsl(210 15% 35%) 0%, hsl(210 15% 25%) 100%)",
          boxShadow: `
            0 ${randomDepth}px ${randomDepth * 2}px hsl(0 0% 0% / 0.5),
            inset 0 1px 0 hsl(210 20% 50% / 0.3),
            inset 0 -1px 0 hsl(0 0% 0% / 0.3)
          `,
        }}
      >
        <div className="relative w-full h-full overflow-hidden">
          {!imageLoaded && <div className="absolute inset-0 bg-steel-dark animate-pulse" />}
          <img
            src={item.src}
            alt={item.title}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
          <div
            className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: "linear-gradient(to top, hsl(220 15% 8% / 0.9), transparent 60%)" }}
          >
            <span className="font-body text-glass text-sm tracking-wider uppercase">{item.category}</span>
            <span className="font-heading text-aluminium-light text-lg mt-1">{item.title}</span>
            <ZoomIn
              className="absolute top-4 right-4 w-6 h-6 text-glass cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
            />
          </div>
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{ background: "linear-gradient(135deg, hsl(200 60% 80% / 0.2) 0%, transparent 50%)" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const GalleryDetailModal = ({ item, onClose }: { item: typeof galleryItems[0]; onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "auto"; };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/70" />
        <motion.div
          className="relative bg-gray-900 rounded-md flex flex-col md:flex-row max-w-5xl w-full p-4 gap-4 z-10"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex-shrink-0 max-w-full md:max-w-[400px] overflow-hidden">
            <img src={item.src} alt={item.title} className="w-full h-auto object-contain rounded-md" />
          </div>
          <div className="flex flex-col justify-center text-white p-2">
            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
            <p className="text-sm uppercase text-gray-400">{item.category}</p>
          </div>
          <button
            className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center bg-red-600 rounded-full"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const GallerySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(220 15% 8%) 0%, hsl(220 15% 6%) 100%)" }}
      id="gallery"
    >
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <span className="text-glass font-bold text-xl tracking-wide uppercase">Our Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mt-2">PROJECT GALLERY</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {galleryItems.map((item, index) => (
            <GalleryItem key={index} item={item} index={index} onClick={() => setSelectedItem(item)} />
          ))}
        </div>
      </div>

      {selectedItem && <GalleryDetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </section>
  );
};

export default GallerySection;

