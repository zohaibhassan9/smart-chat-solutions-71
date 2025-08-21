import Navigation from "@/components/Navigation";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-12 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <ProductSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;