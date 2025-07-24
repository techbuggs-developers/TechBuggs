import AboutSection from "../components/AboutSection";
import TestimonialCard from "../components/Testimonials";
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
