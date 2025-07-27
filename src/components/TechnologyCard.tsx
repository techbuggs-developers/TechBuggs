import React from "react";
import type {TechnologyCardProps} from "../types/index"

const TechnologyCard: React.FC<TechnologyCardProps> = ({ name, img, color, onClick }) => {
  return (
    <div
      className="group relative flex flex-col justify-center items-center p-4 bg-white rounded-xl shadow-2xl hover:scale-110 transition-transform cursor-pointer"
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${name}`}
    >
      <div
        className={`transition-all duration-500 mb-4 group-hover:translate-y-3 flex items-center justify-center rounded-full cursor-pointer`}
      >
        <img
          src={img}
          alt={name}
          className="w-10 h-10 object-contain transition-transform duration-500 group-hover:scale-120"
          loading="lazy"
        />
      </div>
      <p
        className={`text-center text-sm font-medium relative ${color} z-10 transition-transform duration-500 group-hover:-translate-y-24 group-hover:scale-120`}
      >
        {name}
      </p>
    </div>
  );
};

export default TechnologyCard; 