import React from "react";
import { ArrowRight } from "lucide-react";

import cyberGuardiansImg from "../assets/PortfolioImages/cg.webp";
import keycoin from "../assets/PortfolioImages/keycoin.webp";
import globalswiftasia from "../assets/PortfolioImages/globalswiftasia.webp";
import { NavLink } from "react-router-dom";
import { Button } from "./common/button";
import type { Project } from "../types/project";

const projects: Project[] = [
  {
    id: 1,
    title: "Cyber Guardians",
    subtitle: "Web App Development",
    image: cyberGuardiansImg,
    overlay: "bg-[#93BD65]/15",
    hoverOverlay: "group-hover:bg-[#93BD65]",
    description:
      "With decades of expertise, Cyber Guardians provides online training to strengthen cybersecurity, build digital resilience, and protect critical assets across industries",
  },
  {
    id: 2,
    title: "Keycoin",
    subtitle: "Mobile App Development",
    image: keycoin,
    overlay: "bg-black/40",
    hoverOverlay: "group-hover:bg-black",
    description:
      "Keycoin empowers you to take control of your financial future. As a decentralized digital currency, it offers independence, transparency, and global access—beyond the limits of traditional banking.",
  },
  {
    id: 3,
    title: "Global Swift ASIA",
    subtitle: "Web App Development",
    image: globalswiftasia,
    overlay: "bg-[#013A69]/40",
    hoverOverlay: "group-hover:bg-[#013A69]",
    description:
      "Global Swift Asia offers fast, secure, and reliable money transfers across Asia. Designed for individuals and businesses, it features a user-friendly platform, competitive rates, and strong security—making cross-border remittances simple and efficient.",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-12 px-4 md:px-12 lg:px-24 max-w-[91rem] mx-auto ">
      <h2 className="text-2xl sm:text-3xl md:text-6xl font-semibold text-center mb-6 text-[#08162C]">
        Featured Projects
      </h2>
      <p className="text-center text-[#252525] font-semibold text-base sm:text-lg md:text-xl max-w-4xl mx-auto mb-10 relative z-20">
        Explore our showcase of successful projects that demonstrate our
        expertise in delivering innovative software solutions across various
        industries.
      </p>

      <div className="grid grid-cols-1 min-[700px]:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative w-full max-w-[400px] mx-auto aspect-[4/6] rounded-2xl overflow-hidden shadow-lg group transition-transform duration-300 hover:scale-[1.03]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-500 group-hover:scale-200 group-hover:opacity-0"
            />

            <div
              className={`absolute inset-0 z-10 ${project.overlay} ${project.hoverOverlay} flex flex-col justify-start items-start p-6 sm:p-8 md:p-10 transition-all duration-500`}
            >
              <h3 className="[@media(max-width:431px)]:text-[22px] text-3xl  sm:text-2xl [@media(min-width:768px)_and_(max-width:865px)]:text-2xl text-white md:text-3xl [@media(min-width:1024px)_and_(max-width:1083px)]:text-sm lg:text-xl xl:text-2xl 2xl:text-3xl font-extrabold">
                {project.title}
              </h3>
              <p className="text-xl [@media(max-width:431px)]:text-lg text-[#F0F0F0] sm:text-lg [@media(min-width:768px)_and_(max-width:865px)]:text-sm [@media(min-width:1024px)_and_(max-width:1083px)]:text-xs lg:text-sm xl:text-base 2xl:text-lg mt-2 font-semibold">
                {project.subtitle}
              </p>

              <p className="text-lg [@media(max-width:431px)]:text-[14px] sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg [@media(min-width:768px)_and_(max-width:865px)]:text-xs [@media(min-width:1024px)_and_(max-width:1083px)]:text-[10px] text-[#F0F0F0] mt-4 sm:mt-6 max-w-[90%] opacity-0 translate-x-10 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                {project.description}
              </p>
              <a
                href={`/portfolio#${project.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                <Button
                  className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 opacity-0 translate-y-10 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer"
                  variant="ghost"
                >
                  <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 p-0.5 bg-[#191A23] rounded-full text-[#45BCA0] rotate-[-30deg]" />
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end relative z-20">
        <NavLink to="/portfolio">
          <Button
            className="flex items-center text-sm sm:text-lg md:text-xl font-semibold group  transition-colors cursor-pointer"
            variant="ghost"
          >
            VIEW ALL
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
              <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:text-[#45BCA0] transition-colors" />
            </span>
          </Button>
        </NavLink>
      </div>
    </section>
  );
};

export default ProjectsSection;
