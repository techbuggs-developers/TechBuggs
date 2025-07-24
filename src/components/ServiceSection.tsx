import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { serviceCardData } from "../data/ServicesCardData";
import { Button } from "./common/Button";
import { NavLink } from "react-router-dom";
import ServiceCard from "./ServiceCard"; 

interface ServicesSectionProps {
  limit?: number;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ limit }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  const displayedServices = limit
    ? serviceCardData.slice(0, limit)
    : serviceCardData;

  return (
    <section className="py-10 sm:py-20 px-4 md:px-12 lg:px-24 bg-white">
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-16 text-[#08162C] relative z-20">
        Services We Provided
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {displayedServices.map((service, index) => (
          <ServiceCard
            key={service.slug}
            service={service}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>

      <div className="mt-8 max-w-6xl mx-auto flex justify-end">
        <NavLink to="/services">
          <Button
            className="flex items-center cursor-pointer text-sm sm:text-lg md:text-xl font-semibold group transition-colors"
            variant="ghost"
          >
            SEE ALL
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
              <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:text-[#45BCA0] transition-colors" />
            </span>
          </Button>
        </NavLink>
      </div>
    </section>
  );
};

export default ServicesSection;
