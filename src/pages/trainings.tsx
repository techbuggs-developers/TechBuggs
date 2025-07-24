import React, { useState,useEffect } from "react";
import { FaCogs, FaLaptopCode, FaBug } from "react-icons/fa";
import { courseOutlines } from "../data/courseOutlines";
import { Button } from "../components/common/button";
import { NavLink } from "react-router-dom";

const cardCourses = [
  {
    title: "Full Stack Development",
    description:
      "Master both frontend and backend technologies to build complete web applications, deploy them, and handle real-world scalability.",
    duration: "28 weeks",
    level: "Advanced",
    category: "Full Stack Development",
    icon: FaCogs,
    outlineKey: "MERN Stack Developer",
  },
  {
    title: "Frontend Development",
    description:
      "Specialize in UI/UX and frontend technologies like HTML, CSS, JavaScript, and React to build responsive and dynamic web interfaces.",
    duration: "14 weeks",
    level: "Intermediate",
    category: "Frontend Development",
    icon: FaLaptopCode,
    outlineKey: "Frontend Development",
  },
  {
    title: "Software Testing",
    description:
      "Learn manual and automated testing techniques to ensure software quality, from test case design to frameworks like Selenium and Jest.",
    duration: "10 weeks",
    level: "Beginner to Intermediate",
    category: "Software Testing",
    icon: FaBug,
    outlineKey: "Software Testing (Manual + Basics of Automation)",
  },
];

const Courses: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<
    (typeof courseOutlines)[0] | null
  >(null);

  const handleViewCourse = (outlineKey: string) => {
    const found = courseOutlines.find((c) => c.title === outlineKey);
    setSelectedCourse(found || null);
    setOpenModal(!!found);
  };

   useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [openModal]);

  return (
    <section className="min-h-screen py-12 px-4 md:px-12 lg:px-24 relative overflow-hidden z-50">
      <div
        className="absolute w-[40rem] h-[35rem] top-0 left-0 rounded-br-[100%] filter blur-3xl opacity-35 z-0 hidden sm:block"
        style={{
          background: "linear-gradient(to bottom, #78BA9F 20%, #12334E 80%)",
          animation: "blob 8s infinite",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute w-[32rem] h-[35rem] bottom-0 right-0 rounded-tl-[100%] filter blur-3xl opacity-35 z-0 hidden sm:block"
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

      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-32 mb-14 md:mb-20">
        <div className="sm:text-center mb-10 relative z-20">
          <p className="text-lg text-[#08162C] font-semibold mb-4 text-left">
           <NavLink to="/">
          Home &gt; 
          </NavLink>{" "}
            <span className="text-[#78BA9F] font-semibold">Trainings</span>
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-5 sm:mb-14 text-[#08162C] relative z-20">
            Our Courses
          </h2>
          <p className="text-lg text-[#252525] max-w-2xl mx-auto mb-2">
            Explore our range of hands-on, industry-focused courses designed to
            help you master in-demand skills. Whether you're a beginner or
            looking to advance, we have something for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardCourses.map((course, index) => {
            const Icon = course.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl shadow-lg border-b-4 border-[#45BCA0] p-7 flex flex-col items-start transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group min-h-[340px]"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-[#E8FFF8] shadow border-2 border-[#45BCA0] mb-4">
                  <Icon size={32} className="text-[#45BCA0]" />
                </div>
                <h3 className="text-xl font-bold text-[#08162C] mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-[#252525] mb-4 flex-1">
                  {course.description}
                </p>
                <div className="flex flex-wrap gap-2 text-sm mb-4">
                  <span className="bg-[#78BA9F] text-[#08162C] px-3 py-1 rounded-full text-sm">
                    {course.duration}
                  </span>
                  <span className="bg-[#78BA9F] text-[#08162C] px-3 py-1 rounded-full text-sm">
                    {course.level}
                  </span>
                  <span className="bg-[#78BA9F] text-[#08162C] px-3 py-1 rounded-full text-sm">
                    {course.category}
                  </span>
                </div>
                <Button
                  className="w-full mt-auto cursor-pointer text-[#78BA9F] border border-[#78BA9F] bg-white font-semibold group-hover:bg-[#45BCA0]/10 group-hover:text-[#08162C] transition-colors py-2 px-4 rounded-md"
                  variant="secondary"
                  onClick={() => handleViewCourse(course.outlineKey)}
                >
                  View Course
                </Button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center">
        <a
          href="https://docs.google.com/forms/d/1xMMVo4XW3pp-p4lBXfLOcnD6qO9hHJrNALa0-NpOEf0/edit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="text-nowrap  bg-white relative z-20  px-4 py-2"
            variant="outline"
          >
            Register Now
          </Button>
        </a>
      </div>

      {selectedCourse && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 bg-opacity-70 pt-16  ${
            openModal ? "block" : "hidden"
          }`}
        >
          <div className="relative bg-white rounded-lg w-10/12 h-11/12 max-h-screen overflow-hidden">
            <div className="sticky top-0 bg-white border-b border-gray-300 py-5 px-5 z-10">
              <span
                className="absolute sm:top-3 top-4 right-3 sm:right-5 text-gray-400 hover:text-black text-4xl font-bold cursor-pointer"
                onClick={() => setOpenModal(false)}
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
                    className={`mb-5 p-5 rounded-xl ${
                      index % 2 !== 0 ? "bg-[#12334E]" : "bg-gray-200"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2 font-extrabold text-xl ${
                        index % 2 !== 0 ? "text-white" : "text-[#08162C]"
                      }`}
                    >
                      <span className="text-2xl">{week.week}</span>{" "}
                    </div>
                    <p
                      className={`font-semibold text-lg mt-3 ${
                        index % 2 !== 0 ? "text-white" : "text-[#252525]"
                      }`}
                    >
                      Topics:
                    </p>
                    <ul className="list-disc pl-5">
                      {week.topics.map((topic, idx) => (
                        <li
                          key={idx}
                          className={`${
                            index % 2 !== 0 ? "text-blue-200" : "text-[#4C4C4C]"
                          }`}
                        >
                          <h4>{topic}</h4>
                        </li>
                      ))}
                    </ul>
                    {week.logicFocus && (
                      <p
                        className={`mt-2 italic text-sm ${
                          index % 2 !== 0 ? "text-blue-200" : "text-[#4C4C4C]"
                        }`}
                      >
                        Logic Focus: {week.logicFocus}
                      </p>
                    )}
                    {week.softSkills && (
                      <p
                        className={`mt-1 italic text-sm ${
                          index % 2 !== 0 ? "text-green-200" : "text-[#4C4C4C]"
                        }`}
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

            {/* <div className="text-left py-3 px-4">
              <button
                onClick={() => setOpenModal(false)}
                className="bg-white text-black border border-gray-400 py-2 px-5 rounded-md cursor-pointer hover:bg-gray-100"
              >
                Close
              </button>
            </div> */}
          </div>
        </div>
      )}
    </section>
  );
};

export default Courses;
