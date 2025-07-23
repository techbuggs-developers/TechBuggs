import React from "react";
import { ArrowRight } from "lucide-react";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import { NavLink } from "react-router-dom";
import { Button } from "./common/button";
import type { Project } from "../types/project";

const projects: Project[] = [
  {
    id: 1,
    title: "Cyber Guardians",
    subtitle: "Web App Development",
    image: project1,
    overlay: "bg-black/40",
    hoverOverlay: "group-hover:bg-black",
    description:
      "Your go-to solution for accurate, hassle-free speech-to-text conversion. This powerful platform simplifies the entire transcription process—making it easy to convert speeches, meetings, interviews, and audio files into clear, well-structured, and editable text.",
  },
  {
    id: 2,
    title: "Cyber Guardians",
    subtitle: "Web App Development",
    image: project2,
    overlay: "bg-[#463853]/40",
    hoverOverlay: "group-hover:bg-[#604977]",
    description:
      "Your go-to solution for accurate, hassle-free speech-to-text conversion. This powerful platform simplifies the entire transcription process—making it easy to convert speeches, meetings, interviews, and audio files into clear, well-structured, and editable text.",
  },
  {
    id: 3,
    title: "Cyber Guardians",
    subtitle: "Web App Development",
    image: project3,
    overlay: "bg-[#1D7777]/40",
    hoverOverlay: "group-hover:bg-[#1CB2B3]",
    description:
      "Your go-to solution for accurate, hassle-free speech-to-text conversion. This powerful platform simplifies the entire transcription process—making it easy to convert speeches, meetings, interviews, and audio files into clear, well-structured, and editable text.",
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

              <Button className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 opacity-0 translate-y-10 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer" variant="ghost">
                <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 p-0.5 bg-[#191A23] rounded-full text-[#29E8AE] rotate-[-30deg]" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end relative z-20">
        <NavLink to="/portfolio">
          <Button className="flex items-center text-lg sm:text-xl md:text-2xl font-semibold text-[#08162C] group hover:text-[#29E8AE] transition-colors cursor-pointer" variant="ghost">
            VIEW ALL
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
              <ArrowRight className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 group-hover:text-[#29E8AE] transition-colors" />
            </span>
          </Button>
        </NavLink>
      </div>
    </section>
  );
};

export default ProjectsSection;
