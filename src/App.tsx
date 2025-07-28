import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Career from "./pages/Career";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ComingSoon from "./components/ComingSoon";
import NotFound from "./components/404";
import Trainings from "./pages/Trainings";
import MouseAnimation from "./components/common/MouseAnimation";
import ScrollToTop from "./components/common/ScrollToTop";
import ServiceDetail from "./pages/ServiceDetail";
import TechnologyDetail from "./pages/TechnologyDetail";
import Technologies from "./pages/Technologies";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App: React.FC = () => {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === "IMG") {
        e.preventDefault();
      }
    };
    const handleDragStart = (e: DragEvent) => {
      if ((e.target as HTMLElement).tagName === "IMG") {
        e.preventDefault();
      }
    };
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return (
    <>
      <MouseAnimation />
      <ScrollToTop />
      <Navbar />
      <main role="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/trainings" element={<Trainings />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
          <Route
            path="/technologies/:technologiesSlug"
            element={<TechnologyDetail />}
          />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/termsAndCondition" element={<TermsAndConditions />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/comingSoon" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
