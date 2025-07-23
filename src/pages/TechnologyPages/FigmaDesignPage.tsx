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
                title: "User Research and UX Strategy",
                desc: "We conduct user research to understand your target audience and their needs. Based on the findings, we create UX strategies that align with your business goals and provide optimal user experiences.",
              },
              {
                title: "Wire-framing and Prototyping",
                desc: "We use Figma to create wire-frames and interactive prototypes that illustrate the layout, navigation, and functionality of your digital product. This allows you to visualize the user flow and make informed design decisions.",
              },
              {
                title: "Visual Design and Branding",
                desc: "Our talented designers utilize Figma powerful design tools to create visually stunning and brand-aligned user interfaces. We focus on creating intuitive and engaging designs that resonate with your target audience.",
              },
              {
                title: "Design Collaboration and Handoff",
                desc: "With Figma collaboration features, we ensure smooth communication and collaboration throughout the design process. We provide design handoff deliverables that facilitate seamless integration with the development team.",
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
            <div className="flex justify-center w-full lg:w-[36%]">
              <div className="bg-[#f8fbfd] rounded-2xl p-6 flex items-center justify-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                  alt="Figma Logo"
                  className="w-64 h-64 object-contain"
                />
              </div>
            </div>

            <div className="w-full lg:w-[52%] grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
              {[
                {
                  title: "Collaborative Design",
                  desc: "Figma is designed with collaboration in mind. Multiple designers can work simultaneously on the same project, making it easy to share ideas, gather feedback, and maintain a unified design vision. Real-time collaboration fosters efficient teamwork and reduces version control issues.",
                },
                {
                  title: "Cloud-Based and Cross-Platform",
                  desc: "Figma is a cloud-based tool, which means that designs are saved and accessible online. It allows designers to work from anywhere, on any operating system, without the need for local installations or file syncing. This flexibility enhances productivity and enables seamless collaboration across teams and locations.",
                },
                {
                  title: "Interactive Prototyping",
                  desc: "Figma offers powerful prototyping capabilities, allowing designers to create interactive prototypes with transitions and animations. This enables stakeholders to experience the user journey and provides a realistic representation of the final product, facilitating better decision-making and user testing.",
                },
                {
                  title: "Design System and Component Libraries",
                  desc: "Figma supports the creation and management of design systems and component libraries. This allows designers to establish consistent design patterns, reuse design elements, and maintain design integrity throughout the project. It promotes design scalability and efficiency.",
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
