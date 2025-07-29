import React from "react";
import { FaCogs, FaLaptopCode, FaBug } from "react-icons/fa";
import type { TrainingCardProps } from "../types/index";

const iconMap: Record<string, React.ElementType> = {
  FaCogs,
  FaLaptopCode,
  FaBug,
};

export const TrainingCard: React.FC<TrainingCardProps> = ({ course, onViewCourse }) => {
  const Icon = iconMap[course.icon] || FaCogs;
  return (
    <div
      className="relative bg-white rounded-2xl shadow-lg border-b-4 border-[#45BCA0] p-7 flex flex-col items-start transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group min-h-[340px]"
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-[#E8FFF8] shadow border-2 border-[#45BCA0] mb-4">
        <Icon size={32} className="text-[#45BCA0]" />
      </div>
      <h3 className="text-xl font-bold text-[#08162C] mb-2">{course.title}</h3>
      <p className="text-sm text-[#252525] mb-4 flex-1">{course.description}</p>
      <div className="flex flex-wrap gap-2 text-sm mb-4">
        <span className="bg-[#78BA9F] text-[#08162C] px-3 py-1 rounded-full text-sm">{course.duration}</span>
        <span className="bg-[#78BA9F] text-[#08162C] px-3 py-1 rounded-full text-sm">{course.level}</span>
        <span className="bg-[#78BA9F] text-[#08162C] px-3 py-1 rounded-full text-sm">{course.category}</span>
      </div>
      <button
        className="w-full mt-auto cursor-pointer text-[#78BA9F] border border-[#78BA9F] bg-white font-semibold group-hover:bg-[#45BCA0]/10 group-hover:text-[#08162C] transition-colors py-2 px-4 rounded-md"
        onClick={() => onViewCourse(course.outlineKey)}
        aria-label={`View details for ${course.title} course`}
      >
        View Course
      </button>
    </div>
  );
}; 