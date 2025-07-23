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
import ReactDevelopmentPage from "./pages/TechnologyPages/ReactDevelopmentPage";
import NodejsDevelopmentPage from "./pages/TechnologyPages/NodejsDevelopmentPage";
import PythonDevelopmentPage from "./pages/TechnologyPages/PythonDevelopmentPage";
import NextjsDevelopmentPage from "./pages/TechnologyPages/NextjsDevelopmentPage";
import AngularDevelopmentPage from "./pages/TechnologyPages/AngularDevelopmentPage";
import FigmaDesignPage from "./pages/TechnologyPages/FigmaDesignPage";
import AndroidDevelopmentPage from "./pages/TechnologyPages/AndroidDevelopmentPage";
import FlutterDevelopmentPage from "./pages/TechnologyPages/FlutterDevelopmentPage";
import ReactNativeDevelopmentPage from "./pages/TechnologyPages/ReactNativeDevelopmentPage";
import MouseAnimation from "./components/common/MouseAnimation";
import ScrollToTop from "./components/common/ScrollToTop";
import ServiceDetail from "./pages/ServiceDetail";

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
        <Route path="tech/react" element={<ReactDevelopmentPage />} />
        <Route path="tech/nodejs" element={<NodejsDevelopmentPage />} />
        <Route path="tech/python" element={<PythonDevelopmentPage />} />
        <Route path="tech/nextjs" element={<NextjsDevelopmentPage />} />
        <Route path="tech/angular" element={<AngularDevelopmentPage />} />
        <Route path="tech/figma" element={<FigmaDesignPage />} />
        <Route path="tech/android" element={<AndroidDevelopmentPage />} />
        <Route path="tech/flutter" element={<FlutterDevelopmentPage />} />
        <Route
          path="tech/react-native"
          element={<ReactNativeDevelopmentPage />}
        />
        <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
        <Route path="/comingSoon" element={<ComingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
