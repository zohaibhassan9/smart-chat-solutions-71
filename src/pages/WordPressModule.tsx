import { Routes, Route } from "react-router-dom";
import WordPressAdmin from "@/components/wordpress/WordPressAdmin";
import Navigation from "@/components/Navigation";

const WordPressModule = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <main className="container mx-auto px-12 lg:px-16 py-8 pt-24"> {/* Add top padding to prevent navbar overlap */}
        <Routes>
          <Route path="/*" element={<WordPressAdmin />} />
        </Routes>
      </main>
    </div>
  );
};

export default WordPressModule;