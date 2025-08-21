import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import OutcomeSection from "@/components/OutcomeSection";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16"> {/* Add top margin to prevent navbar overlap */}
        <HeroSection />
        <OutcomeSection />
        <ProductSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
