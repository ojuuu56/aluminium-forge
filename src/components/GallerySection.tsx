import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, ZoomIn, Play } from "lucide-react";

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

// Import new images
import workspace1 from "@/assets/workspace-1.jpeg";
import workspace2 from "@/assets/workspace-2.jpeg";
import glassDisplay from "@/assets/glass-display.jpeg";
import glasswork from "@/assets/glasswork.jpeg";
import aluminiumProfiles from "@/assets/aluminium-profiles.jpeg";

type GalleryItemType = {
  src: string;
  category: string;
  title: string;
  titleNp: string;
  type: "image" | "video";
};

const galleryItems: GalleryItemType[] = [
  // Images
  { src: facade2, category: "Facades", title: "Modern Commercial Facade", titleNp: "आधुनिक व्यापारिक फसाड", type: "image" },
  { src: building1, category: "Buildings", title: "Multi-Color Aluminium Cladding", titleNp: "बहुरंगी अल्मुनियम क्ल्याडिङ्", type: "image" },
  { src: building2, category: "Commercial", title: "Commercial Building Front", titleNp: "व्यापारिक भवन अगाडि", type: "image" },
  { src: building3, category: "Buildings", title: "Red Aluminium & Glass Structure", titleNp: "रातो अल्मुनियम र सिसा संरचना", type: "image" },
  { src: door1, category: "Doors", title: "Aluminium Door Installation", titleNp: "अल्मुनियम ढोका जडान", type: "image" },
  { src: door2, category: "Doors", title: "Double Door System", titleNp: "डबल ढोका प्रणाली", type: "image" },
  { src: window1, category: "Windows", title: "Premium Window Frame", titleNp: "प्रिमियम झ्याल फ्रेम", type: "image" },
  { src: window2, category: "Windows", title: "Sliding Window", titleNp: "स्लाइडिङ झ्याल", type: "image" },
  { src: glass1, category: "Glass Works", title: "Full Glass Storefront", titleNp: "पूर्ण सिसा स्टोरफ्रन्ट", type: "image" },
  { src: facade1, category: "Facades", title: "Eye Care Center Facade Design", titleNp: "आँखा केन्द्र फसाड डिजाइन", type: "image" },
  { src: workspace1, category: "Workspace", title: "Our Workshop", titleNp: "हाम्रो कार्यशाला", type: "image" },
  { src: workspace2, category: "Workspace", title: "Production Area", titleNp: "उत्पादन क्षेत्र", type: "image" },
  { src: glassDisplay, category: "Glass Works", title: "Glass Display", titleNp: "सिसा प्रदर्शनी", type: "image" },
  { src: glasswork, category: "Glass Works", title: "Glass Partition Work", titleNp: "सिसा पार्टीसन कार्य", type: "image" },
  { src: aluminiumProfiles, category: "Materials", title: "Aluminium Profiles", titleNp: "अल्मुनियम प्रोफाइलहरू", type: "image" },
  // Videos
  { src: "/videos/shop-video-1.mp4", category: "Shop", title: "Workshop Video", titleNp: "कार्यशाला भिडियो", type: "video" },
  { src: "/videos/street-view.mp4", category: "Shop", title: "Street View of Shop", titleNp: "पसलको सडक दृश्य", type: "video" },
  { src: "/videos/inside-view.mp4", category: "Shop", title: "Inside View", titleNp: "भित्रको दृश्य", type: "video" },
];

const GalleryItem = ({ item, index, onClick }: { 
  item: GalleryItemType; 
  index: number;
  onClick: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [mediaLoaded, setMediaLoaded] = useState(false);

  const randomDepth = 20 + (index % 4) * 15;

  return (
    <motion.div
      ref={ref}
      className="gallery-panel relative group cursor-pointer overflow-hidden h-full w-full"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: "easeOut",
      }}
      onClick={onClick}
      whileHover={{ 
        scale: 1.02,
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      {/* Frame */}
      <div
        className="h-full w-full p-2"
        style={{
          background: "linear-gradient(135deg, hsl(220 60% 25%) 0%, hsl(220 60% 18%) 100%)",
          boxShadow: `
            0 ${randomDepth}px ${randomDepth * 2}px hsl(0 0% 0% / 0.5),
            inset 0 1px 0 hsl(0 75% 50% / 0.3),
            inset 0 -1px 0 hsl(0 0% 0% / 0.3)
          `,
          border: "1px solid hsl(0 75% 50% / 0.2)",
        }}
      >
        {/* Media */}
        <div className="relative w-full h-full overflow-hidden">
          {!mediaLoaded && (
            <div className="absolute inset-0 bg-secondary animate-pulse" />
          )}
          
          {item.type === "image" ? (
            <img
              src={item.src}
              alt={item.title}
              className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                mediaLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setMediaLoaded(true)}
              loading="lazy"
            />
          ) : (
            <>
              <video
                src={item.src}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  mediaLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoadedData={() => setMediaLoaded(true)}
                muted
                loop
                playsInline
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
              />
              {/* Play icon overlay for videos */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center">
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </div>
              </div>
            </>
          )}
          
          {/* Overlay */}
          <div
            className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "linear-gradient(to top, hsl(220 50% 8% / 0.95), transparent 60%)",
            }}
          >
            <span className="font-body text-glass text-xs tracking-wider uppercase">
              {item.category}
            </span>
            <span className="font-nepali text-primary text-sm mt-1">
              {item.titleNp}
            </span>
            <span className="font-heading text-aluminium-light text-base">
              {item.title}
            </span>
            {item.type === "image" ? (
              <ZoomIn className="absolute top-4 right-4 w-5 h-5 text-glass" />
            ) : (
              <Play className="absolute top-4 right-4 w-5 h-5 text-glass" />
            )}
          </div>

          {/* Glass reflection */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              background: "linear-gradient(135deg, hsl(200 60% 80% / 0.2) 0%, transparent 50%)",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Lightbox = ({ item, onClose }: { item: GalleryItemType; onClose: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "hsl(220 50% 5% / 0.98)",
          backdropFilter: "blur(20px)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Content */}
      <motion.div
        className="relative max-w-5xl w-full"
        initial={{ scale: 0.8, rotateY: -30, z: -200 }}
        animate={{ scale: 1, rotateY: 0, z: 0 }}
        exit={{ scale: 0.8, rotateY: 30, z: -200 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          perspective: "1000px",
        }}
      >
        {/* Frame */}
        <div
          className="p-3"
          style={{
            background: "linear-gradient(135deg, hsl(220 60% 25%) 0%, hsl(220 60% 18%) 100%)",
            boxShadow: "0 50px 100px hsl(0 0% 0% / 0.7), 0 0 100px hsl(0 75% 50% / 0.2)",
            border: "2px solid hsl(0 75% 50% / 0.3)",
          }}
        >
          {item.type === "image" ? (
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          ) : (
            <video
              src={item.src}
              className="w-full h-auto max-h-[80vh] object-contain"
              controls
              autoPlay
              loop
            />
          )}
        </div>

        {/* Caption */}
        <motion.div
          className="mt-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="font-body text-glass text-sm tracking-wider uppercase">
            {item.category}
          </span>
          <h3 className="font-nepali text-primary text-xl mt-1">
            {item.titleNp}
          </h3>
          <p className="font-heading text-aluminium-light text-lg">
            {item.title}
          </p>
        </motion.div>

        {/* Close button */}
        <motion.button
          className="absolute -top-4 -right-4 w-12 h-12 flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, hsl(0 75% 50%), hsl(0 70% 40%))",
            border: "1px solid hsl(0 75% 60%)",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
        >
          <X className="w-6 h-6 text-white" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const GallerySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedItem, setSelectedItem] = useState<GalleryItemType | null>(null);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(220 50% 10%) 0%, hsl(220 50% 8%) 100%)",
      }}
      id="gallery"
    >
      {/* Section lines */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(0 75% 50% / 0.5), transparent)",
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
            className="inline-block font-nepali text-primary tracking-wide mb-4 text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            हाम्रा कामहरू
          </motion.span>
          <h2
            className="font-nepali text-3xl md:text-5xl font-bold text-primary"
          >
            ग्यालेरी
          </h2>
          <p className="font-body text-muted-foreground mt-2">Project Gallery</p>
        </motion.div>

        {/* Gallery Grid - Masonry-like */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`
                ${index === 0 ? "col-span-2 row-span-2" : ""}
                ${index === 5 ? "lg:row-span-2" : ""}
                ${index === 15 ? "col-span-2" : ""}
              `}
            >
              <GalleryItem
                item={item}
                index={index}
                onClick={() => setSelectedItem(item)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
