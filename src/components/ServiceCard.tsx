import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import type { ServiceSectionItem } from "../types/index";

interface ServiceCardProps {
  service: ServiceSectionItem;
  index: number;
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,
  hovered,
  setHovered,
}) => {
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
      key={service.slug}
    >
      <div className="flex flex-col justify-around gap-6 sm:gap-20 flex-1 relative z-10">
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
                    className={`inline-block px-4 py-1 max-w-48 rounded-md text-base sm:text-2xl font-semibold ${service.tagBg} ${service.tagText}`}
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
        className="w-30 h-30 mt-10 md:mt-0 sm:w-60 sm:h-60 shrink-0 flex items-center justify-center ml-0 sm:ml-6 z-0"
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.25 }}
      >
        <img
          src={service.image}
          loading="lazy"
          alt={service.title.join(" ")}
          className="w-full h-full object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
