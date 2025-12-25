import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MetallicParticles from "@/components/MetallicParticles";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Index = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Nepal Aluminium | Premium Aluminium & Construction Works in Biratnagar</title>
        <meta 
          name="description" 
          content="Nepal Aluminium - Premium aluminium windows, doors, glass works, false ceiling, and construction solutions in Biratnagar, Nepal. Quality craftsmanship by Manoj Kumar Mandal." 
        />
        <meta name="keywords" content="aluminium, windows, doors, glass works, construction, Biratnagar, Nepal, false ceiling, kitchen cabinet, steel railing" />
        <link rel="canonical" href="https://nepalaluminium.com" />
      </Helmet>

      <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
        {/* Metallic particles background */}
        <MetallicParticles />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          <HeroSection />
          <ServicesSection />
          <GallerySection />
          <AboutSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

      {/* Floating WhatsApp Button */}
        <WhatsAppButton />
      </div>
    </HelmetProvider>
  );
};

export default Index;
