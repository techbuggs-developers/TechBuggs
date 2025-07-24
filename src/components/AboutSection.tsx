import React from "react";
import { BsSearch } from "react-icons/bs";
import { LuBrush } from "react-icons/lu";
import { RiCodeSSlashLine } from "react-icons/ri";
import { BiBarChartAlt2 } from "react-icons/bi";
import ProjectsSection from "./ProjectsSection";
import { Button } from "./common/Button";
import { NavLink } from "react-router-dom";

const processSteps = [
  {
    title: "Discover",
    description:
      "To explore your vision, the market, and the problem to be solved.",
    icon: <BsSearch />,
  },
  {
    title: "Design",
    description: "To craft the look, feel, and flow of your software product.",
    icon: <LuBrush />,
  },
  {
    title: "Build",
    description: "To code, test, iterate, and launch your product.",
    icon: <RiCodeSSlashLine />,
  },
  {
    title: "Scale",
    description: "To build on what works for your product and business.",
    icon: <BiBarChartAlt2 />,
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white  pt-32 pb-20 relative overflow-hidden">
      <div
        className="absolute w-[46rem] h-[40rem] top-[32rem] left-0 rounded-br-[100%] filter blur-3xl opacity-40 z-0 hidden sm:block"
        style={{
          background: "linear-gradient(to bottom, #78BA9F 50%, #12334E 50%)",
          animation: "blob 8s infinite",
          animationDelay: "2s",
        }}
      />

      <div
        className="absolute w-[32rem] h-[35rem] bottom-0 right-0 rounded-tl-[100%] filter blur-3xl opacity-50 z-0 hidden sm:block"
        style={{
          background: "linear-gradient(to right, #78BA9F 90%, #12334E 10%)",
          animation: "blob 8s infinite",
          animationDelay: "2s",
        }}
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
      <div className="max-w-[69rem] mx-auto px-4 md:px-6 mt-10">
        <p className="text-lg text-[#08162C] font-semibold mb-4">
          <NavLink to="/">Home &gt;</NavLink>
          <span className="text-[#78BA9F] font-semibold"> About</span>
        </p>

        <div className="space-y-2">
          <h1 className="text-4xl md:text-[5rem] font-semibold text-[#08162C] ">
            Better outcomes.
          </h1>
          <h1 className="text-4xl md:text-[5rem] font-semibold text-[#08162C] ">
            Less stress.
          </h1>
          <h1 className="text-4xl md:text-7xl font-semibold text-[#08162C] ">
            A little fun on the side.
          </h1>
        </div>

        <p className="mt-6 text-base md:text-xl font-semibold text-[#252525] leading-relaxed max-w-3xl relative z-20">
          When you've built a lot of great software products, you learn to ask
          insightful questions at the outset. What problem are you trying to
          solve? Who are you solving it for? Why are you motivated to solve it?
          The answers often reveal the path forward.
        </p>

        <div className="mt-8 relative z-20">
          <Button className="px-6 py-3" variant="outline">
            Learn More about our Approach
          </Button>
        </div>
      </div>

      <div className="max-w-[69rem] mx-auto px-4 md:px-6 mt-16 sm:mt-32 flex flex-col lg:flex-row gap-12">
        <div className="flex items-center justify-start relative z-20">
          <h2 className="text-5xl md:text-6xl font-semibold leading-20 text-[#08162C] text-center md:text-left">
            Discover. Develop. Delight.
          </h2>
        </div>

        <div className="lg:w-1/2 flex items-center">
          <p className="text-[#252525] text-lg md:text-xl font-semibold">
            We seek to discover innovative ways to solve problems and make life
            better for you and your customers.
            <br />
            <br />
            We rapidly develop high-quality solutions to those problems using
            proven methodologies and the latest technical advancements.
            <br />
            <br />
            Our success is measured by how much our solution delights you and
            your customers.
          </p>
        </div>
      </div>

      <div className="max-w-[69rem] mx-auto px-4 md:px-6 my-10 sm:my-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute lg:top-6 lg:left-0 lg:right-[22%] h-0.5 bg-[#45BCA0] z-0" />

          <div className="block sm:hidden absolute [@media(min-width:540px)_and_(max-width:640px)]:h-[19rem] h-[22rem] top-[1.5rem] left-[1.5rem] w-0.5 bg-[#45BCA0] z-0" />

          {processSteps.map((step, index) => (
            <div key={index} className="flex sm:flex-col gap-4 relative">
              <div className="bg-[#45BCA0] text-white w-12 h-12 flex items-center justify-center rounded-md mb-4 z-10 relative flex-shrink-0">
                <div className="text-xl">{step.icon}</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#08162C]">
                  {step.title}
                </h3>
                <p className="text-[#252525] text-base mt-1">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProjectsSection />
    </section>
  );
};

export default AboutSection;
