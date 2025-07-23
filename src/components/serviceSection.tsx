import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import webImg from "../assets/webDevelopment.png";
import mobileImg from "../assets/mobileApp.png";
import mlImg from "../assets/machineLearning.png";
import seoImg from "../assets/seo.png";
import uiuxImg from "../assets/Ui-Ux.png";
import digitalMarketing from "../assets/Digital-Marketing.png";
import { Button } from "./common/button";
import type { ServiceSectionItem } from "../types/serviceSection";
import { NavLink } from "react-router-dom";

export const services: ServiceSectionItem[] = [
  {
    slug: "web-development",
    title: ["Web App", "Development"],
    hoverDescription:
      "Building responsive and scalable web applications using modern technologies and advanced frameworks.",
    description: "Learn more",
    bgColor: "bg-[#F3F3F3]",
    textColor: "text-[#08162C]",
    tagBg: "bg-[#78BA9F]",
    tagText: "text-black",
    image: webImg,
    arrowBg: "bg-black",
    arrowText: "text-[#45BCA0]",
  },
  {
    slug: "mobile-development",
    title: ["Mobile App", "Development"],
    hoverDescription:
      "Native and cross-platform mobile applications for iOS and Android platforms.",
    description: "Learn more",
    bgColor: "bg-[#78BA9F]",
    textColor: "text-[#08162C]",
    tagBg: "bg-white",
    tagText: "text-black",
    image: mobileImg,
    arrowBg: "bg-black",
    arrowText: "text-white",
  },
  {
    slug: "machine-learning",
    title: ["Machine", "Learning"],
    hoverDescription:
      "Advanced machine learning solutions designed to automate tasks and optimize your business processes.",
    description: "Learn more",
    bgColor: "bg-[#12334E]",
    textColor: "text-white",
    tagBg: "bg-white",
    tagText: "text-black",
    image: mlImg,
    arrowBg: "bg-white",
    arrowText: "text-black",
  },
  {
    slug: "seo-optimization",
    title: ["SEO", "Optimization"],
    hoverDescription:
      "Comprehensive SEO strategies tailored to boost your online visibility and search engine rankings.",
    description: "Learn more",
    bgColor: "bg-[#F3F3F3]",
    textColor: "text-[#08162C]",
    tagBg: "bg-[#78BA9F]",
    tagText: "text-black",
    image: seoImg,
    arrowBg: "bg-black",
    arrowText: "text-[#45BCA0]",
  },
  {
    slug: "ui-ux-design",
    title: ["UI/UX", "Designing"],
    hoverDescription:
      "User-centered design solutions crafted to enhance user experience and drive deeper engagement.",
    description: "Learn more",
    bgColor: "bg-[#F3F3F3]",
    textColor: "text-[#08162C]",
    tagBg: "bg-[#78BA9F]",
    tagText: "text-black",
    image: uiuxImg,
    arrowBg: "bg-black",
    arrowText: "text-[#45BCA0]",
  },
  {
    slug: "digital-marketing",
    title: ["Digital", "Marketing"],
    hoverDescription:
      "Strategic digital marketing solutions designed to expand your online presence and reach the right audience.",
    description: "Learn more",
    bgColor: "bg-[#78BA9F]",
    textColor: "text-[#08162C]",
    tagBg: "bg-white",
    tagText: "text-black",
    image: digitalMarketing,
    arrowBg: "bg-black",
    arrowText: "text-white",
  },
];

interface ServicesSectionProps {
  limit?: number;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ limit }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-10 sm:py-20 px-4 md:px-12 lg:px-24 bg-white">
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-16 text-[#08162C] relative z-20">
        Services We Provided
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {displayedServices.map((service, index) => {
          const isHovered = hovered === index;

          return (
            <motion.div
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              animate={{
                backgroundColor: isHovered ? "#000" : "",
                color: isHovered ? "#fff" : "",
              }}
              transition={{ duration: 0.25 }}
              className={`relative rounded-4xl shadow-md p-6 sm:p-12 lg:p-6 xl:p-12 transition-colors duration-500 ${
                isHovered ? "" : `${service.bgColor} ${service.textColor}`
              } flex justify-between items-stretch min-h-[260px] sm:min-h-[300px] w-full border-b-4 border-black border overflow-hidden`}
            >
              <div className="flex flex-col justify-around gap-6 sm:gap-20 flex-1 relative z-10  ">
                <div className="relative h-[100px] sm:h-[120px]">
                  <AnimatePresence mode="wait">
                    {isHovered ? (
                      <motion.div
                        key="desc"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="absolute top-0 left-0 [@media(max-width:431px)]:w-[16rem] w-[20rem] sm:w-[30rem] lg:w-[20rem] xl:w-[25rem] text-white text-sm sm:text-sm md:text-lg leading-relaxed"
                      >
                        {service.hoverDescription}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="title"
                        initial={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="absolute top-0 left-0 flex flex-col w-fit"
                      >
                        {service.title.map((line, i) => (
                          <span
                            key={i}
                            className={`inline-block px-4 py-1 max-w-48  rounded-md text-base sm:text-2xl font-semibold ${service.tagBg} ${service.tagText}`}
                          >
                            {line}
                          </span>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mt-2 sm:mt-4 flex items-center gap-2 text-sm sm:text-lg md:text-xl font-normal text-nowrap">
                  <ArrowRight
                    className={`w-6 h-6 sm:w-10 sm:h-10 px-1 rounded-full rotate-[-30deg] ${
                      isHovered
                        ? "bg-white text-black"
                        : `${service.arrowBg} ${service.arrowText}`
                    }`}
                  />
                  <NavLink
                    to={`/services/${service.slug}`}
                    className="text-inherit"
                    style={{ display: "inline-flex", alignItems: "center" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {service.description}
                  </NavLink>
                </div>
              </div>

              <motion.div
                className="w-30 h-30 mt-10 md:mt-0  sm:w-60 sm:h-60 shrink-0 flex items-center justify-center ml-0 sm:ml-6 z-0"
                animate={{ opacity: isHovered ? 0 : 1 }}
                transition={{ duration: 0.25 }}
              >
                <img
                  src={service.image}
                  alt={service.title.join(" ")}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 max-w-6xl mx-auto flex justify-end">
        <NavLink to="/services">
          <Button
            className="flex items-center cursor-pointer text-sm sm:text-lg md:text-xl font-semibold text-[#08162C] group hover:text-[#29E8AE] transition-colors"
            variant="ghost"
          >
            SEE ALL
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
              <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:text-[#29E8AE] transition-colors" />
            </span>
          </Button>
        </NavLink>
      </div>
    </section>
  );
};

export default ServicesSection;
