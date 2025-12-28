import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShopBoardSection from "@/components/ShopBoardSection";
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
        <title>नेपाल अल्मुनियम | Nepal Aluminium - बिराटनगर</title>
        <meta 
          name="description" 
          content="नेपाल अल्मुनियम - अल्मुनियम र UPVC को झ्याल र ढोका, सिसा कार्य, फल्स सिलिङ, बिराटनगर, नेपाल। Nepal Aluminium - Premium aluminium windows, doors, glass works in Biratnagar." 
        />
        <meta name="keywords" content="nepal aluminium, aluminium, windows, doors, glass works, biratnagar, nepal, upvc, false ceiling, kitchen cabinet" />
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
          <ShopBoardSection />
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
