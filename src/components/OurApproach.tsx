import React, { useEffect, useState } from "react";
import img from "../assets/images/cloud computing 1.png";
import { Button } from "./common/Button";
import type { CardProps } from "../types/index";

const cards = [
  {
    id: 1,
    title: "Blogs",
    description: "How Cloud Computing Can Transform Small Businesses",
    img,
  },
  {
    id: 2,
    title: "Blogs",
    description: "How Cloud Computing Can Transform Small Businesses",
    img,
  },
  {
    id: 3,
    title: "Blogs",
    description: "How Cloud Computing Can Transform Small Businesses",
    img,
  },
  {
    id: 4,
    title: "Blogs",
    description: "How Cloud Computing Can Transform Small Businesses",
    img,
  },
  {
    id: 5,
    title: "Blogs",
    description: "How Cloud Computing Can Transform Small Businesses",
    img,
  },
  {
    id: 6,
    title: "Blogs",
    description: "How Cloud Computing Can Transform Small Businesses",
    img,
  },
];

const OurApproach: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCards = isMobile ? cards.slice(0, 3) : cards;

  return (
    <section className="w-full bg-white py-16 px-4 sm:mt-20">
      <div className="max-w-[89rem] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-4 md:px-10 lg:px-20">
        <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start relative z-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-[#08162C] mb-4">
            You bring the <br /> vision, we bring the <br /> spark.
          </h2>
          <p className="text-[#252525] text-sm sm:text-base md:text-lg mb-6 max-w-md">
            Techbuggs accelerates visionary organizations—small to
            enterprise—with rapid, tailored digital solutions that boost
            efficiency and ROI.
          </p>
          <Button
            className="text-nowrap relative z-20  px-4 py-2"
            variant="outline"
          >
            Learn More about our Approach
          </Button>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6 2xl:hidden">
          {visibleCards.map((card) => (
            <div key={card.id} className="flex justify-center">
              <Card {...card} />
            </div>
          ))}
        </div>

        <div className="md:w-1/2 hidden 2xl:grid grid-cols-3 gap-6">
          <div className="flex flex-col justify-center items-center">
            <Card {...cards[0]} />
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <Card {...cards[1]} />
            <Card {...cards[2]} />
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <Card {...cards[3]} />
            <Card {...cards[4]} />
            <Card {...cards[5]} />
          </div>
        </div>
      </div>
    </section>
  );
};

const Card: React.FC<CardProps> = ({ title, description, img }) => {
  return (
    <div
      className="w-48 h-48 bg-cover bg-center rounded-xl relative group overflow-hidden shadow-md flex flex-col justify-between p-4"
      style={{ backgroundImage: `url(${img})` }}
      role="img"
      aria-label="Cloud computing technology illustration"
    >
      <div className="z-10">
        <h3 className="text-lg font-semibold leading-tight text-white">
          {title}
        </h3>
        <p className="text-[12px] text-[#F0F0F0]">{description}</p>
      </div>
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute left-4 bottom-[-40px] group-hover:bottom-16 transition-all duration-500">
          <Button
            className="px-2 py-1 bg-[#78BA9F] text-[#08162C] text-xs rounded-full shadow-md cursor-pointer"
            variant="secondary"
          >
            Explore More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
