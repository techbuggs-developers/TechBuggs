import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgImg from "../assets/HeroBg.png";
import { Button } from "./common/Button";
import { NavLink } from "react-router-dom";

const HeroSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [boxWidth, setBoxWidth] = useState(320);

  useEffect(() => {
    const calculateWidth = () => {
      const w = window.innerWidth;
      if (w >= 1536) return 620;
      if (w >= 1280) return 400;
      if (w >= 1024) return 300;
      return 320;
    };

    const handleResize = () => {
      setBoxWidth(calculateWidth());
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden relative px-4 bg-white">
      <div
        className="absolute w-[30rem] h-[30rem] top-0 right-0 rounded-bl-[100%] filter blur-3xl opacity-70 z-0"
        style={{
          background: "linear-gradient(to right, #78BA9F 90%, #12334E 10%)",
          animation: "blob 8s infinite",
          animationDelay: "2s",
        }}
      />

      <div
        className="absolute w-[50rem] h-[40rem] bottom-[-10rem] left-[-10rem] rounded-tr-[100%] filter blur-3xl opacity-70 z-0"
        style={{
          background: "linear-gradient(to right, #78BA9F 30%, #12334E -70%)",
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

      <div className="relative w-full container mx-auto px-8">
        <div
          className={`relative z-10 flex flex-col lg:flex-row items-center  md:justify-center text-center  transition-all duration-1000 ${
            isOpen ? "lg:gap-0 2xl:gap-20 " : "gap-6"
          }`}
        >
          <div
            className={`flex gap-2 lg:flex-col items-center lg:items-start transition-all lg:ml-8  duration-1000 ease-out ${
              isOpen
                ? "lg:-translate-x-70 xl:-translate-x-85 -translate-y-0 lg:-translate-y-0  sm:-translate-y-4"
                : "translate-x-0"
            }`}
          >
            <div className="text-4xl md:text-7xl sm:text-6xl font-bold text-[#08162C]">
              We
            </div>
            <div className="text-4xl md:text-7xl sm:text-6xl font-bold text-[#08162C]">
              Build
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div
              className={`absolute transition-transform duration-1000 ease-in-out ${
                isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }  w-[340px] h-[200px]  sm:w-[600px] sm:h-[300px] md:w-[550px] md:h-[300px] lg:w-[500px] lg:h-[300px] xl:w-[550px] xl:h-[300px]    2xl:w-[800px] 2xl:h-[400px]  bg-gray-300 rounded-[6rem] sm:rounded-full overflow-hidden shadow-2xl z-10 `}
              style={{ transformOrigin: "center center" }}
            >
              <div className="relative w-full h-full overflow-hidden cursor-pointer">
                <img
                  src={bgImg}
                  alt="Group Photo"
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-full object-fill rounded-[6rem] sm:rounded-full shadow-lg"
                />
              </div>
            </div>

            <div
              className={`sm:h-80 h-62  w-0.5 bg-gray-200 transition-all duration-700 ease-out ${
                isOpen ? "scale-y-75 opacity-60" : "scale-y-100 opacity-100"
              }`}
            ></div>
          </div>

          <div
            className={` flex gap-2 lg:flex-col items-center md:items-start transition-all duration-1000 ease-out ${
              isOpen
                ? "lg:translate-x-70  xl:translate-x-85 -translate-y-2 lg:-translate-y-0 sm:-translate-y-0 sm:mt-3 lg:mt-0 "
                : "translate-x-0 "
            }`}
          >
            <div className="text-4xl md:text-7xl sm:text-6xl font-bold text-[#08162C] ">
              What
            </div>
            <div className="text-4xl md:text-7xl sm:text-6xl font-bold text-[#08162C] ">
              Matters
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <div className="absolute bottom-2 left-32 z-20 text-gray-400 text-sm md:text-xl font-medium hidden lg:block">
            Turning your ideas into
          </div>
        ) : (
          <motion.div
            key="animated-text"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute bottom-7 left-8 xl:left-35 2xl:left-28 z-20 text-black text-sm md:text-xl font-medium hidden lg:block"
          >
            <div className="text-left space-y-1">
              <div className="text-xl md:text-2xl text-white font-bold">
                Turning Your Ideas into
              </div>
              <div className="text-xl md:text-2xl font-bold text-white">
                Reality
              </div>
              <div className="text-sm md:text-base font-normal text-white opacity-90">
                Let’s create something impactful — <br /> together.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="horizontal-capsule-line"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: boxWidth, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute h-[2px] bg-black border rounded-full left-1/2 bottom-20 z-10 hidden lg:block"
            style={{ transform: "translateX(-50%)" }}
          />
        )}
      </AnimatePresence>

      {!isOpen ? (
        <div className="absolute w-80 bottom-0 border right-28  z-10 text-gray-400 text-sm md:text-lg font-medium px-4 py-3 rounded-t-2xl shadow-md hidden lg:block">
          Helping businesses grow
        </div>
      ) : (
        <motion.div
          key="business-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.9 }}
          className="absolute bottom-0  lg:right-8 xl:right-28 2xl:right-28 z-20 w-64 h-40 sm:w-80 sm:h-48 bg-[#BCBCBC80] border-2 sm:border-2 shadow-xl rounded-t-2xl p-4"
        >
          <div className="text-sm sm:text-xl text-[#252525] font-semibold">
            Clean Design. Smart Development. Business Growth.
          </div>
          <div className="flex justify-end mt-5 mr-4">
            <NavLink to="/contact">
              <Button
                className="px-3 py-1 sm:px-5 sm:py-2 bg-[#78BA9F] text-[#12334E] rounded-full shadow hover:bg-black hover:text-white transition-all text-sm sm:text-base font-semibold"
                variant="secondary"
              >
                Build With Us
              </Button>
            </NavLink>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default HeroSection;
