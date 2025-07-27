import React from "react";
import type { TrainingModalProps } from "../types/index";

export const TrainingModal: React.FC<TrainingModalProps> = ({ selectedCourse, open, onClose }) => {
  if (!selectedCourse) return null;
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 bg-opacity-70 pt-16  ${open ? "block" : "hidden"}`}
    >
      <div className="relative bg-white rounded-lg w-10/12 h-11/12 max-h-screen overflow-hidden">
        <div className="sticky top-0 bg-white border-b border-gray-300 py-5 px-5 z-10">
          <span
            className="absolute sm:top-3 top-4 right-3 sm:right-5 text-gray-400 hover:text-black text-4xl font-bold cursor-pointer"
            onClick={onClose}
          >
            &times;
          </span>
          <p className="text-2xl font-extrabold text-[#08162C]">
            {selectedCourse.title} - Course Outline
          </p>
        </div>
        <div className="overflow-y-auto pt-5 px-5 pb-28 max-h-[calc(100vh-150px)] sm:max-h-[calc(100vh-90px)] md:max-h-[calc(100vh-110px)] lg:max-h-[calc(100vh-100px)]">
          {selectedCourse.roadmap && selectedCourse.roadmap.length > 0 ? (
            selectedCourse.roadmap.map((week, index) => (
              <div
                key={index}
                className={`mb-5 p-5 rounded-xl ${index % 2 !== 0 ? "bg-[#12334E]" : "bg-gray-200"}`}
              >
                <div
                  className={`flex items-center gap-2 font-extrabold text-xl ${index % 2 !== 0 ? "text-white" : "text-[#08162C]"}`}
                >
                  <span className="text-2xl">{week.week}</span>{" "}
                </div>
                <p
                  className={`font-semibold text-lg mt-3 ${index % 2 !== 0 ? "text-white" : "text-[#252525]"}`}
                >
                  Topics:
                </p>
                <ul className="list-disc pl-5">
                  {week.topics.map((topic, idx) => (
                    <li
                      key={idx}
                      className={`${index % 2 !== 0 ? "text-blue-200" : "text-[#4C4C4C]"}`}
                    >
                      <h4>{topic}</h4>
                    </li>
                  ))}
                </ul>
                {week.logicFocus && (
                  <p
                    className={`mt-2 italic text-sm ${index % 2 !== 0 ? "text-blue-200" : "text-[#4C4C4C]"}`}
                  >
                    Logic Focus: {week.logicFocus}
                  </p>
                )}
                {week.softSkills && (
                  <p
                    className={`mt-1 italic text-sm ${index % 2 !== 0 ? "text-green-200" : "text-[#4C4C4C]"}`}
                  >
                    Soft Skills: {week.softSkills}
                  </p>
                )}
              </div>
            ))
          ) : (
            <p className="text-[#4C4C4C]">No outline available.</p>
          )}
        </div>
      </div>
    </div>
  );
}; 