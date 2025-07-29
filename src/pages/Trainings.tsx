import React, { useState, useEffect } from "react";
import { courseOutlines } from "../data/CourseOutlines";
import { TrainingCard } from "../components/TrainingCard";
import { TrainingModal } from "../components/TrainingModal";
import { trainingCourses } from "../data/trainingCourses";
import { Button } from "../components/common/Button";
import { NavLink } from "react-router-dom";

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
    <section className="min-h-screen pt-28 md:pt-32 pb-10 md:pb-20 px-4 md:px-12 lg:px-24 relative overflow-hidden z-50">
      <div
        className="absolute w-[40rem] h-[35rem] top-0 left-0 rounded-br-[100%] filter blur-3xl opacity-35 z-0 hidden sm:block"
        style={{
          background: "linear-gradient(to bottom, #78BA9F 20%, #12334E 80%)",
          animation: "blob 8s infinite",
          animationDelay: "2s",
        }}
        role="presentation"
        aria-hidden="true"
      />
      <div
        className="absolute w-[32rem] h-[35rem] bottom-0 right-0 rounded-tl-[100%] filter blur-3xl opacity-35 z-0 hidden sm:block"
        style={{
          background: "linear-gradient(to right, #78BA9F 90%, #12334E 10%)",
          animation: "blob 8s infinite",
          animationDelay: "2s",
        }}
        role="presentation"
        aria-hidden="true"
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

      <div className="max-w-6xl mx-auto px-4 md:px-6 mb-14 md:mb-20">
        <div className="sm:text-center mb-10 relative z-20">
          <p className="text-lg text-[#08162C] font-semibold mb-4 text-left">
            <NavLink to="/">Home &gt;</NavLink>{" "}
            <span className="text-[#78BA9F] font-semibold">Trainings</span>
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-5 sm:mb-14 text-[#08162C] relative z-20">
            Our Courses
          </h1>
          <p className="text-lg text-[#252525] max-w-2xl mx-auto mb-2">
            Explore our range of hands-on, industry-focused courses designed to
            help you master in-demand skills. Whether you're a beginner or
            looking to advance, we have something for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingCourses.map((course, index) => (
            <TrainingCard
              key={index}
              course={course}
              onViewCourse={handleViewCourse}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc73N8UkWUV4Pt0uHrPkGVBbBWQN8o6ApBpsEfql9xG4LtA1Q/viewform?usp=dialog"
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

      <TrainingModal
        selectedCourse={selectedCourse}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </section>
  );
};

export default Courses;
