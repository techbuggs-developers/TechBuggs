import React, { useState } from "react";
import { serviceCardData as homeServices } from "../data/ServicesCardData";
import { NavLink } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import type { ServiceSectionItem } from "../types/index";

const Services: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className=" px-4 md:px-12 lg:px-24 pt-28 md:pt-32 pb-0 md:pb-20 bg-white relative overflow-hidden">
      <div
        className="absolute w-[40rem] h-[35rem] top-0 right-0 rounded-bl-[100%] filter blur-3xl opacity-45 z-0 hidden sm:block"
        style={{
          background: "linear-gradient(to bottom, #78BA9F 20%, #12334E 80%)",
          animation: "blob 8s infinite",
          animationDelay: "2s",
        }}
        role="presentation"
        aria-hidden="true"
      />
      <div
        className="absolute w-[32rem] h-[35rem] bottom-0 left-0 rounded-tr-[100%] filter blur-3xl opacity-45 z-0 hidden sm:block"
        style={{
          background: "linear-gradient(to right, #78BA9F 90%, #12334E 10%)",
          animation: "blob 8s infinite",
          animationDelay: "2s",
        }}
        role="presentation"
        aria-hidden="true"
      />

      <style>
        {`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        `}
      </style>

      <div className="max-w-6xl mx-auto px-4 mb-14 md:mb-20">
        <p className="text-lg text-[#08162C] font-semibold mb-4">
          <NavLink to="/">Home &gt;</NavLink>
          <span className="text-[#78BA9F] font-semibold"> Services</span>
        </p>
        <h1 className="text-4xl md:text-[5rem] font-semibold text-[#08162C] text-center mb-12">
          Our Services
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl px-4 mx-auto">
        {homeServices.map((service: ServiceSectionItem, index: number) => (
          <ServiceCard
            key={service.slug}
            service={service}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
