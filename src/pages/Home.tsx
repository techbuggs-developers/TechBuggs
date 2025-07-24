import HeroSection from "../components/HeroSection";

import Approach from "../components/OurApproach";
import ProjectsSection from "../components/ProjectsSection";
import ServicesSection from "../components/ServicesSection";
import SuccessSection from "../components/SuccessSection";
import TestimonialCard from "../components/Testimonials";

import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <div className="relative px-5 overflow-hidden">
        <div
          className="absolute w-[30rem] h-[60rem] top-[15rem] right-0 rounded-bl-[100%] filter blur-3xl opacity-70 z-0"
          style={{
            background: "linear-gradient(to right, #78BA9F 90%, #12334E 10%)",
            animation: "blob 8s infinite",
            animationDelay: "2s",
          }}
        />

        <div
          className="absolute w-[32rem] h-[60rem] bottom-[40rem] left-[-10rem] rounded-tr-[100%] filter blur-3xl opacity-70 z-0"
          style={{
            background: "linear-gradient(to right, #78BA9F 30%, #12334E -70%)",
            animation: "blob 8s infinite",
            animationDelay: "2s",
          }}
        />

        <style>
          {`
      ..keyframes blob {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.05); }
        66% { transform: translate(-20px, 20px) scale(0.95); }
        100% { transform: translate(0px, 0px) scale(1); }
      }
    `}
        </style>
        <Approach />
        <ServicesSection limit={4} />
        <ProjectsSection />
      </div>
      <TestimonialCard />
      <div className="relative overflow-hidden">
        <div
          className="absolute w-[40rem] h-[30rem] bottom-0 left-[-10rem] rounded-tr-[100%] filter blur-3xl opacity-40 z-0"
          style={{
            background: "linear-gradient(to right, #78BA9F 80%, #12334E -20%)",
            animation: "blob 8s infinite",
            animationDelay: "2s",
          }}
        />

        <style>
          {`
      ..keyframes blob {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.05); }
        66% { transform: translate(-20px, 20px) scale(0.95); }
        100% { transform: translate(0px, 0px) scale(1); }
      }
    `}
        </style>
        <SuccessSection />
      </div>
    </>
  );
};

export default Home;
