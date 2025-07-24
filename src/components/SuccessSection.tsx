import React from "react";
import { User, Clock, Users, CheckCircle } from "lucide-react";
import bugLogo from "../assets/bugLogo.png";

import {
  FaReact,
  FaAngular,
  FaVuejs,
  FaPython,
  FaNodeJs,
  FaPhp,
  FaDocker,
  FaJava,
} from "react-icons/fa";
import {
  SiTypescript,
  SiKubernetes,
  SiPostgresql,
  SiMysql,
  SiDotnet,
  SiGo,
} from "react-icons/si";
import type { OrbitingCirclesProps } from "../types/index";

const TechIcons = {
  React: () => (
    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
      <FaReact className="w-8 h-8 text-[#61DAFB]" />
    </div>
  ),
  Angular: () => (
    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
      <FaAngular className="w-8 h-8 text-[#DD0031]" />
    </div>
  ),
  Vue: () => (
    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
      <FaVuejs className="w-8 h-8 text-[#4FC08D]" />
    </div>
  ),
  TypeScript: () => (
    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
      <SiTypescript className="w-8 h-8 text-[#3178C6]" />
    </div>
  ),
  Python: () => (
    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
      <FaPython className="w-8 h-8 text-[#3776AB]" />
    </div>
  ),
  NodeJS: () => (
    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
      <FaNodeJs className="w-8 h-8 text-[#339933]" />
    </div>
  ),
  PHP: () => (
    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
      <FaPhp className="w-8 h-8 text-[#777BB4]" />
    </div>
  ),
  Docker: () => (
    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
      <FaDocker className="w-8 h-8 text-[#2496ED]" />
    </div>
  ),
  Kubernetes: () => (
    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
      <SiKubernetes className="w-8 h-8 text-[#326CE5]" />
    </div>
  ),
  Go: () => (
    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
      <SiGo className="w-8 h-8 text-[#00ADD8]" />
    </div>
  ),
  PostgreSQL: () => (
    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
      <SiPostgresql className="w-8 h-8 text-[#336791]" />
    </div>
  ),
  MySQL: () => (
    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
      <SiMysql className="w-8 h-8 text-[#4479A1]" />
    </div>
  ),
  Java: () => (
    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
      <FaJava className="w-8 h-8 text-[#ED8B00]" />
    </div>
  ),
  DotNet: () => (
    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
      <SiDotnet className="w-8 h-8 text-[#512BD4]" />
    </div>
  ),
};

const OrbitingCircles = ({
  children,
  radius = 50,
  duration = 20,
  reverse = false,
  className = "",
  showOrbit = true,
}: OrbitingCirclesProps) => {
  const childrenArray = React.Children.toArray(children);
  const childCount = childrenArray.length;

  return (
    <>
      {showOrbit && (
        <div
          className="absolute border-3 border-black rounded-full opacity-50 pointer-events-none"
          style={{
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}

      <div
        className={`absolute inset-0 pointer-events-none ${className}`}
        style={{
          animation: `orbit ${duration}s linear infinite ${
            reverse ? "reverse" : ""
          }`,
        }}
      >
        {childrenArray.map((child, index) => {
          const angle = (360 / childCount) * index;
          const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
          const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;

          return (
            <div
              key={index}
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
            >
              <div>{child}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const SuccessSection = () => {
  return (
    <section className="bg-gray-200 text-[#0b2436] py-20 px-6 md:px-16">
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>

      <div className="max-w-[76rem] mx-auto grid grid-cols-1 [@media(min-width:1200px)]:grid-cols-2 gap-16 mt-35">
        <div className="space-y-10">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold md:text-nowrap text-[#08162C]">
            Your Success is our focus
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mt-16 relative z-20">
            <div className="flex flex-col items-start gap-2">
              <div className="text-[#45BCA0]">
                <User size={40} />
              </div>
              <h3 className="font-bold text-lg">Human-Centric Design</h3>
              <p className="text-base text-[#08162C] font-medium">
                So you can count on building the right thing.
              </p>
            </div>

            <div className="flex flex-col items-start gap-2">
              <div className="text-[#45BCA0]">
                <Clock size={40} />
              </div>
              <h3 className="font-bold text-lg">Releases Early & Often</h3>
              <p className="text-base text-[#08162C] font-medium">
                So you can feel real momentum and focus on what's next.
              </p>
            </div>

            <div className="flex flex-col items-start gap-2">
              <div className="text-[#45BCA0]">
                <Users size={40} />
              </div>
              <h3 className="font-bold text-lg">A Dedicated Team</h3>
              <p className="text-base text-[#08162C] font-medium">
                To hit the ground running so you don't have to worry about team
                assembly.
              </p>
            </div>

            <div className="flex flex-col items-start gap-2">
              <div className="text-[#45BCA0]">
                <CheckCircle size={40} />
              </div>
              <h3 className="font-bold text-lg">Quality-Driven Approach</h3>
              <p className="text-base text-[#08162C] font-medium">
                Ensuring excellence at every stage of your product lifecycle.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full hidden md:flex items-center justify-center [@media(min-width:1200px)]:justify-end  lg:mt-12">
          <div className="relative overflow-visible h-[500px] w-[500px] flex items-center justify-center">
            <OrbitingCircles radius={195} duration={30} showOrbit={true}>
              <TechIcons.React />
              <TechIcons.Angular />
              <TechIcons.Vue />
              <TechIcons.TypeScript />
              <TechIcons.Python />
              <TechIcons.NodeJS />
            </OrbitingCircles>

            <OrbitingCircles
              radius={130}
              duration={25}
              reverse
              showOrbit={true}
            >
              <TechIcons.PHP />
              <TechIcons.Docker />
              <TechIcons.Kubernetes />
              <TechIcons.Go />
              <TechIcons.PostgreSQL />
              <TechIcons.Java />
              <TechIcons.MySQL />
              <TechIcons.DotNet />
            </OrbitingCircles>

            <div className="absolute inset-0 flex rotate-45 items-center justify-center z-10">
              <img
                src={bugLogo}
                alt="Logo-Bug"
                loading="lazy"
                width={130}
                height={130}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
