import AboutSection from "../components/aboutSection";
import TestimonialCard from "../components/testimonials";
import React from "react";

const About: React.FC = () => {
  return (
    <>
      <AboutSection />
      <div className="mb-64">
        <TestimonialCard />
      </div>
    </>
  );
};

export default About;
