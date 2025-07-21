import { HeroSection } from "./components/layouts/hero-section";
import { SliderLogos } from "./components/layouts/slider-logos";
import { AboutSection } from "./components/layouts/about-section";
import { Footer } from "./components/layouts/footer";
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="-mt-20 sm:-mt-14 lg:-mt-28">
        <HeroSection />
      </div>
      {/* Slider Logos Section */}
      <SliderLogos />
      
      {/* About Section */}
      <AboutSection />
      
     

      {/* Footer */}
      <Footer />
    </div>
  );
}
