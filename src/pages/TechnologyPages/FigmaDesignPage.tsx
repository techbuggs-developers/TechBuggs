import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import useScrollAnimation from "../../hooks/useAnimation";

const FigmaDesignPage: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useScrollAnimation(0.1);
  const { ref: servicesRef, inView: servicesInView } = useScrollAnimation(0.1);
  const { ref: benefitsRef, inView: benefitsInView } = useScrollAnimation(0.1);

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative overflow-hidden py-28 flex items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#08162C]">
            Figma Design
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-[#4C4C4C]">
            Create beautiful, collaborative designs with Figma – the modern
            interface design tool that brings teams together.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-[#08162C]">
            Figma design services we provide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Design Systems",
                desc: "Build consistent, scalable design systems with reusable components.",
              },
              {
                title: "Prototyping",
                desc: "Create interactive prototypes to visualize and test user flows.",
              },
              {
                title: "Real-time Collaboration",
                desc: "Design with your team in real-time using live editing and comments.",
              },
              {
                title: "Developer Handoff",
                desc: "Provide developers with detailed specs, assets, and code-ready components.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <CheckCircle size={36} className="text-[#29E8AE] mb-4" />
                  <h3 className="text-xl font-semibold text-[#08162C] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#4C4C4C]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-[#08162C]">
            Benefits of Figma Design
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Image */}
            <div className="flex justify-center w-full lg:w-[36%]">
              <div className="bg-[#f8fbfd] rounded-2xl p-6 flex items-center justify-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                  alt="Figma Logo"
                  className="w-64 h-64 object-contain"
                />
              </div>
            </div>

            {/* Numbered Benefits */}
            <div className="w-full lg:w-[52%] grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
              {[
                {
                  title: "Cloud-Based Collaboration",
                  desc: "Edit and comment with teammates in real time from anywhere.",
                },
                {
                  title: "Reusable Components",
                  desc: "Maintain consistency across your designs using shared libraries.",
                },
                {
                  title: "Streamlined Handoff",
                  desc: "Developers get clean specs, code snippets, and exportable assets.",
                },
                {
                  title: "Design for All Screens",
                  desc: "Design responsive layouts that adapt across devices and viewports.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 bg-[#78BA9F] text-[#08162C] rounded-full flex items-center justify-center font-semibold">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#08162C] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#4C4C4C]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default FigmaDesignPage;
