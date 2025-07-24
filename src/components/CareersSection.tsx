import { FaUsers, FaHeart, FaHandsHelping, FaStar } from "react-icons/fa";
import { FiTarget, FiUsers, FiZap, FiAward, FiHeart } from "react-icons/fi";
import { TbBulb } from "react-icons/tb";
import { Button } from "./common/Button";
import type { Quality } from "../types/index";
import { NavLink } from "react-router-dom";
import { useRef } from "react";

const qualities: Quality[] = [
  {
    icon: <FaUsers className="text-3xl text-white" />,
    title: "You Like a Team Approach",
    description:
      "Collaboration is a competence multiplier. We believe two heads are better than one, and a cord of three is not easily broken. Work is better when done together.",
  },
  {
    icon: <FaHeart className="text-3xl text-white" />,
    title: "You Make Work Fun",
    description:
      "We spend too much time at work not to enjoy it. A cheerful spirit makes work fun. Smiles, humor, and laughter are very productive at Taazaa. We're serious about that!",
  },
  {
    icon: <FaHandsHelping className="text-3xl text-white" />,
    title: "You Like Helping Others",
    description:
      "Coding is cool, but only as a means to a greater end: helping people. Taazaa exists to serve people, not the other way around. Creating joy is a meaningful service. You prioritize relationships over transactions and collaboration over competition.",
  },
  {
    icon: <FaStar className="text-3xl text-white" />,
    title: "You Own It",
    description:
      "Yep, you! Making excuses is bad for results. See an issue? Please fix it. Make a promise? Please keep it. Finger-pointing, wait-and-see tactics, and not-my-job attitudes don't work here (or anywhere, for that matter).",
  },
];

const values = [
  {
    icon: <FiTarget className="text-[#29E8AE] text-3xl mb-4" />,
    title: "Mastery",
    description:
      "Trust begins with capability. We continuously hone our skills, expanding our knowledge while staying grounded in what we do best.",
  },
  {
    icon: <FiUsers className="text-[#29E8AE] text-3xl mb-4" />,
    title: "Teamwork",
    description:
      "Big goals become achievable when we work together. Diverse perspectives unlock ideas and solve problems faster.",
  },
  {
    icon: <FiZap className="text-[#29E8AE] text-3xl mb-4" />,
    title: "Drive",
    description:
      "Passion fuels everything we do. Our enthusiasm is contagious—clients and teammates alike feel the energy in every project.",
  },
  {
    icon: <FiAward className="text-[#29E8AE] text-3xl mb-4" />,
    title: "Craftsmanship",
    description:
      "We build things that last. Simplicity, flexibility, and usability are our top priorities for delivering quality software.",
  },
  {
    icon: <TbBulb className="text-[#29E8AE] text-3xl mb-4" />,
    title: "Innovation",
    description:
      "No problem is too complex. We challenge norms, explore new possibilities, and craft creative, effective solutions.",
  },
  {
    icon: <FiHeart className="text-[#29E8AE] text-3xl mb-4" />,
    title: "Empathy",
    description:
      "We listen, understand, and support each other. Empathy helps us build better products and stronger relationships with clients.",
  },
];

const CareersSection = () => {
  const openingsRef = useRef<HTMLDivElement | null>(null);

  const scrollToOpenings = () => {
    openingsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-white">
      <div className=" relative overflow-hidden pt-32">
        <div
          className="absolute w-[40rem] h-[35rem] top-0 left-0 rounded-br-[100%] filter blur-3xl opacity-30 z-0 hidden sm:block"
          style={{
            background: "linear-gradient(to bottom, #78BA9F 20%, #12334E 80%)",
            animation: "blob 8s infinite",
            animationDelay: "2s",
          }}
        />

        <div
          className="absolute w-[32rem] h-[35rem] bottom-0 right-0 rounded-tl-[100%] filter blur-3xl opacity-30 z-0 hidden sm:block"
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
        <div className="max-w-[69rem] mx-auto px-8 md:px-10 mt-10 pb-14 sm:pb-32 ">
          <p className="text-lg text- font-semibold mb-4 relative z-20">
            <NavLink to="/">Home &gt;</NavLink>{" "}
            <span className="text-[#78BA9F] font-semibold">Careers</span>
          </p>

          <div className="space-y-2 relative z-20">
            <h1 className="text-4xl md:text-[5rem] font-semibold text-[#08162C] ">
              A Curious Mind.
            </h1>
            <h1 className="text-4xl md:text-[5rem] font-semibold text-[#08162C]">
              A Kind Heart.
            </h1>
            <h1 className="text-4xl md:text-7xl font-semibold text-[#08162C] ">
              A Can-Do Attitude.
            </h1>
          </div>

          <p className="mt-6 text-base md:text-xl font-semibold text-[#252525] leading-relaxed max-w-3xl">
            We look for these three attributes in every candidate. If this
            describes you, join us!
          </p>

          <div className="mt-12">
            <Button
              onClick={scrollToOpenings}
              className="px-6 py-3  relative z-20 "
              variant="outline"
            >
              See All Openings
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-[#12334E]  text-white  ">
        <div className="max-w-[69rem] mx-auto py-28 px-8 md:px-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Who do we look for?
          </h2>
          <p className="text-lg text-[#F0F0F0] max-w-6xl mb-12">
            If you loved math a kid, have tinkered with computer all your life,
            or geeked out a little over how things work, we can relate. Here are
            some characteristics that fit in around here.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {qualities.map((item, index) => (
              <div key={index} className="flex flex-col items-start gap-4">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-[#F0F0F0]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" relative overflow-hidden">
        <div
          className="absolute w-[40rem] h-[35rem] top-0 right-0 rounded-rt-[100%] filter blur-3xl opacity-30 z-0 hidden sm:block"
          style={{
            background: "linear-gradient(to bottom, #78BA9F 80%, #12334E 20%)",
            animation: "blob 8s infinite",
            animationDelay: "2s",
          }}
        />

        <div
          className="absolute w-[32rem] h-[35rem] -bottom-20 -left-15 rounded-bl-[100%] filter blur-3xl opacity-30 z-0 hidden sm:block"
          style={{
            background: "linear-gradient(to bottom, #78BA9F 50%, #12334E 50%)",
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

        <div className="py-14 sm:py-20 px-8 md:px-10 max-w-[69rem] mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-[#08162C]">
            Inside Techbuggs
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {values.map((item, index) => (
              <div key={index} className="relative z-20">
                {item.icon}
                <h3 className="text-xl font-semibold text-[#252525] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#4C4C4C]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-10 sm:mt-20 px-8 md:px-10 relative z-20 pb-10"
          ref={openingsRef}
        >
          <div className="max-w-[69rem] mx-auto">
            <h2 className="text-2xl sm:text-5xl font-bold text-[#08162C] mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-[#252525] max-w-3xl mb-10">
              Explore limitless possibilities to advance in your professional
              life with Techbuggs. We help engineers jump-start their careers by
              creating innovative, real-world software solutions with the latest
              technologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-y-10">
              <div className="space-y-6 w-full md:w-60">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full border border-[#4C4C4C] rounded-md py-2 px-4 pr-10 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />
                  <svg
                    className="absolute right-3 top-2.5 text-gray-500 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                    />
                  </svg>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#08162C]">
                    Department
                  </label>
                  <select className="w-full border-b border-[#4C4C4C] bg-transparent focus:outline-none"></select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#08162C]">
                    Location
                  </label>
                  <select className="w-full border-b border-[#4C4C4C] bg-transparent focus:outline-none"></select>
                </div>
              </div>

              <div className="md:col-span-2 space-y-10">
                {[1, 2, 3, 4, 5].map((_, i, arr) => (
                  <div
                    key={i}
                    className={`pb-8 flex justify-between items-center flex-wrap gap-y-2${
                      i !== arr.length - 1 ? " border-b border-[#4C4C4C]" : ""
                    }`}
                  >
                    <h3 className="text-lg font-medium text-[#252525]">
                      Sr. UX Designer
                    </h3>
                    <p className="text-sm text-[#252525]">
                      Lahore · 6 Years · Full Time
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
