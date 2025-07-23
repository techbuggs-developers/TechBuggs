import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import useScrollAnimation from "../../hooks/useAnimation";

const ReactNativeDevelopmentPage: React.FC = () => {
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
            React Native Development
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-[#4C4C4C]">
            Build native mobile applications using React and JavaScript,
            delivering high-performance apps for iOS and Android.
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
            React Native development services we provide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "JavaScript / TypeScript",
                desc: "Write mobile apps using modern JavaScript or TypeScript for maintainability and speed.",
              },
              {
                title: "Native Components",
                desc: "Integrate with platform-specific APIs and UI components for truly native performance.",
              },
              {
                title: "Cross-Platform Codebase",
                desc: "Build for both Android and iOS from a single codebase, reducing cost and effort.",
              },
              {
                title: "Fast Refresh",
                desc: "Use hot reloading to instantly see UI updates, speeding up development.",
              },
              {
                title: "Third-Party Libraries",
                desc: "Access a rich ecosystem of plugins, libraries, and components to accelerate development.",
              },
              {
                title: "App Store Deployment",
                desc: "Package and publish apps to the Apple App Store and Google Play Store.",
              },
            ].map((item, i) => (
              <div
                key={i}
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
            Benefits of React Native Development
          </h2>

          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-16">
            {/* Image section */}
            <div className="flex justify-center w-full lg:w-[36%]">
              <div className="bg-[#f8fbfd] rounded-2xl p-6 flex items-center justify-center">
                <img
                  src="https://reactnative.dev/img/header_logo.svg"
                  alt="React Native Logo"
                  className="w-64 h-64 object-contain"
                />
              </div>
            </div>

            {/* Numbered Benefits */}
            <div className="w-full lg:w-[52%] grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 self-center">
              {[
                {
                  title: "Faster Development",
                  desc: "Build and update apps rapidly with shared codebase and instant refresh features.",
                },
                {
                  title: "Reduced Costs",
                  desc: "Develop once and deploy across platforms, saving time and budget.",
                },
                {
                  title: "Community & Ecosystem",
                  desc: "Leverage a large developer community and a mature ecosystem of libraries.",
                },
                {
                  title: "Native Performance",
                  desc: "React Native bridges directly to native APIs ensuring smooth UI and performance.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 bg-[#78BA9F] text-[#08162C] rounded-full flex items-center justify-center font-semibold">
                    {String(i + 1).padStart(2, "0")}
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

export default ReactNativeDevelopmentPage;
