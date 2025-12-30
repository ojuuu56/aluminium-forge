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
  // Videos first for prominence
  { src: "/videos/shop-video-1.mp4", category: "पसल", title: "Workshop Video", titleNp: "कार्यशाला भिडियो", type: "video" },
  { src: "/videos/street-view.mp4", category: "पसल", title: "Street View", titleNp: "सडकबाट दृश्य", type: "video" },
  { src: "/videos/inside-view.mp4", category: "पसल", title: "Inside View", titleNp: "भित्री दृश्य", type: "video" },
  // Images
  { src: facade2, category: "फसाड", title: "Commercial Facade", titleNp: "व्यापारिक फसाड", type: "image" },
  { src: building1, category: "भवन", title: "Aluminium Cladding", titleNp: "अल्मुनियम क्ल्याडिङ", type: "image" },
  { src: workspace1, category: "कार्यशाला", title: "Our Workshop", titleNp: "हाम्रो कार्यशाला", type: "image" },
  { src: building2, category: "भवन", title: "Building Front", titleNp: "भवन अगाडि", type: "image" },
  { src: glasswork, category: "सिसा", title: "Glass Partition", titleNp: "सिसा पार्टीसन", type: "image" },
  { src: building3, category: "भवन", title: "Red Aluminium Structure", titleNp: "रातो अल्मुनियम संरचना", type: "image" },
  { src: door1, category: "ढोका", title: "Aluminium Door", titleNp: "अल्मुनियम ढोका", type: "image" },
  { src: workspace2, category: "कार्यशाला", title: "Production Area", titleNp: "उत्पादन क्षेत्र", type: "image" },
  { src: door2, category: "ढोका", title: "Double Door", titleNp: "डबल ढोका", type: "image" },
  { src: window1, category: "झ्याल", title: "Window Frame", titleNp: "झ्याल फ्रेम", type: "image" },
  { src: glassDisplay, category: "सिसा", title: "Glass Display", titleNp: "सिसा प्रदर्शनी", type: "image" },
  { src: window2, category: "झ्याल", title: "Sliding Window", titleNp: "स्लाइडिङ झ्याल", type: "image" },
  { src: glass1, category: "सिसा", title: "Glass Storefront", titleNp: "सिसा स्टोरफ्रन्ट", type: "image" },
  { src: aluminiumProfiles, category: "सामग्री", title: "Aluminium Profiles", titleNp: "अल्मुनियम प्रोफाइल", type: "image" },
  { src: facade1, category: "फसाड", title: "Facade Design", titleNp: "फसाड डिजाइन", type: "image" },
];

const GalleryItem = ({ item, index, onClick }: { 
  item: GalleryItemType; 
  index: number;
  onClick: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [mediaLoaded, setMediaLoaded] = useState(false);

  const isVideo = item.type === "video";
  const isLarge = index < 3; // Videos are large

  return (
    <motion.div
      ref={ref}
      className={`gallery-panel relative group cursor-pointer overflow-hidden ${
        isLarge ? "col-span-2 row-span-2 md:col-span-1 md:row-span-2" : ""
      }`}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.04,
        ease: "easeOut",
      }}
      onClick={onClick}
      whileHover={{ 
        scale: 1.03,
        y: -6,
        transition: { duration: 0.3 }
      }}
    >
      {/* Frame with gold and red accents */}
      <div
        className={`h-full w-full p-1.5 rounded-lg ${
          isVideo 
            ? "bg-gradient-to-br from-primary via-secondary to-accent" 
            : "bg-card border border-border"
        }`}
        style={{
          boxShadow: isVideo
            ? "0 10px 30px hsl(var(--primary) / 0.3)"
            : "0 8px 25px hsl(var(--foreground) / 0.1)",
        }}
      >
        {/* Inner frame */}
        <div className="relative w-full h-full overflow-hidden bg-card rounded-md">
          {!mediaLoaded && (
            <div className="absolute inset-0 bg-secondary animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
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
              {/* Play icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                <motion.div 
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, hsl(0 75% 55%), hsl(45 90% 55%))",
                    boxShadow: "0 0 30px hsl(0 75% 50% / 0.5)",
                  }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Play className="w-8 h-8 text-foreground ml-1" fill="currentColor" />
                </motion.div>
              </div>
              {/* Video badge */}
              <div 
                className="absolute top-2 left-2 px-2 py-1 text-xs font-bold"
                style={{
                  background: "linear-gradient(135deg, hsl(0 75% 50%), hsl(0 70% 40%))",
                }}
              >
                भिडियो
              </div>
            </>
          )}
          
          {/* Overlay with info */}
          <div
            className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "linear-gradient(to top, hsl(220 50% 5% / 0.95), transparent 70%)",
            }}
          >
            <span 
              className="font-nepali text-xs tracking-wider px-2 py-0.5 inline-block w-fit mb-1"
              style={{
                background: "linear-gradient(135deg, hsl(0 75% 50% / 0.8), hsl(45 90% 55% / 0.6))",
              }}
            >
              {item.category}
            </span>
            <span className="font-nepali text-[hsl(45_90%_70%)] text-sm font-medium">
              {item.titleNp}
            </span>
            <span className="font-heading text-foreground/80 text-xs">
              {item.title}
            </span>
            {item.type === "image" ? (
              <ZoomIn className="absolute top-3 right-3 w-5 h-5 text-[hsl(45_90%_70%)]" />
            ) : (
              <Play className="absolute top-3 right-3 w-5 h-5 text-[hsl(45_90%_70%)]" />
            )}
          </div>

          {/* Corner accents for videos */}
          {isVideo && (
            <>
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[hsl(45_90%_55%)]" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[hsl(45_90%_55%)]" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[hsl(45_90%_55%)]" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[hsl(45_90%_55%)]" />
            </>
          )}
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
          background: "hsl(220 50% 3% / 0.98)",
          backdropFilter: "blur(20px)",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative max-w-5xl w-full"
        initial={{ scale: 0.8, rotateY: -30, z: -200 }}
        animate={{ scale: 1, rotateY: 0, z: 0 }}
        exit={{ scale: 0.8, rotateY: 30, z: -200 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Frame with gradient border */}
        <div
          className="p-2"
          style={{
            background: "linear-gradient(135deg, hsl(0 75% 50%), hsl(220 60% 20%), hsl(45 90% 55%))",
            boxShadow: "0 50px 100px hsl(0 0% 0% / 0.8), 0 0 80px hsl(0 75% 50% / 0.3)",
          }}
        >
          <div className="bg-background p-1">
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
        </div>

        {/* Caption */}
        <motion.div
          className="mt-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span 
            className="inline-block font-nepali text-sm tracking-wider px-3 py-1 mb-2"
            style={{
              background: "linear-gradient(135deg, hsl(0 75% 50%), hsl(45 90% 55%))",
            }}
          >
            {item.category}
          </span>
          <h3 className="font-nepali text-[hsl(45_90%_70%)] text-2xl mt-2">
            {item.titleNp}
          </h3>
          <p className="font-heading text-foreground/80 text-lg">
            {item.title}
          </p>
        </motion.div>

        {/* Close button */}
        <motion.button
          className="absolute -top-3 -right-3 w-12 h-12 flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, hsl(0 75% 55%), hsl(0 70% 45%))",
            border: "2px solid hsl(45 90% 55%)",
            boxShadow: "0 0 20px hsl(0 75% 50% / 0.5)",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
        >
          <X className="w-6 h-6 text-foreground" />
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
      className="relative py-24 md:py-32 overflow-hidden bg-background"
      id="gallery"
    >
      {/* Decorative top line */}
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)), transparent)",
        }}
      />

      {/* Background accents */}
      <div 
        className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "hsl(0 75% 50% / 0.08)" }}
      />
      <div 
        className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "hsl(45 90% 55% / 0.06)" }}
      />

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block font-nepali tracking-wide mb-3 text-lg px-4 py-1 rounded-lg text-foreground bg-primary/10 border border-primary/30"
          >
            हाम्रा कामहरू
          </motion.span>
          <h2 className="font-nepali text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-primary">
            ग्यालेरी
          </h2>
          <p className="font-heading text-foreground mt-2 text-lg">Project Gallery • भिडियो र फोटोहरू</p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[200px]">
          {galleryItems.map((item, index) => (
            <GalleryItem
              key={index}
              item={item}
              index={index}
              onClick={() => setSelectedItem(item)}
            />
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
