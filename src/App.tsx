import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Services from "./pages/services";
import Career from "./pages/career";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ComingSoon from "./components/comingSoon";
import NotFound from "./components/404";
import Trainings from "./pages/trainings";
import MouseAnimation from "./components/common/MouseAnimation";
import ScrollToTop from "./components/common/ScrollToTop";
import ServiceDetail from "./pages/ServiceDetail";
import TechnologyDetail from "./pages/TechnologyDetail";

const App: React.FC = () => {
  return (
    <>
      <MouseAnimation />
      <ScrollToTop />
      <Navbar />
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
        <Route path="/comingSoon" element={<ComingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
