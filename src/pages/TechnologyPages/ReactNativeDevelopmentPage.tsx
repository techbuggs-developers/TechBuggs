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
                title: "Cross-Platform App Development",
                desc: "We leverage React Native to build robust and feature-rich mobile applications that run smoothly on both iOS and Android platforms, ensuring a consistent user experience across devices.",
              },
              {
                title: "UI/UX Design",
                desc: "Our talented designers create visually appealing and user-friendly interfaces, following best design practices to deliver an intuitive and engaging user experience for your React Native app.",
              },
              {
                title: "App Testing and Quality Assurance",
                desc: "We conduct thorough testing to ensure your React Native app is stable, bug-free, and performs optimally on different devices and operating systems.",
              },
              {
                title: "App Store Deployment and Support",
                desc: "We assist you in the process of submitting your app to the respective app stores, providing guidance and support to ensure a successful launch. We also offer ongoing maintenance and support services to address any issues and keep your app up to date.",
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
            <div className="flex justify-center w-full lg:w-[36%]">
              <div className="bg-[#f8fbfd] rounded-2xl p-6 flex items-center justify-center">
                <img
                  src="https://reactnative.dev/img/header_logo.svg"
                  alt="React Native Logo"
                  className="w-64 h-64 object-contain"
                />
              </div>
            </div>

            <div className="w-full lg:w-[52%] grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 self-center">
              {[
                {
                  title: "Cross-Platform Compatibility",
                  desc: "With React Native, you can develop mobile applications that run seamlessly on both iOS and Android platforms, eliminating the need for separate codebase and reducing development and maintenance costs.",
                },
                {
                  title: "Reusable Codebase",
                  desc: "React Native allows for code reuse, enabling developers to write a single codebase that can be shared between platforms. This results in faster development cycles and easier maintenance.",
                },
                {
                  title: "Native-like Performance",
                  desc: "React Native leverages native components and optimizes performance, ensuring that the apps perform smoothly and deliver a native-like user experience.",
                },
                {
                  title: "Rapid Development",
                  desc: "React Native offers a hot-reloading feature that allows developers to see real-time updates of code changes instantly, speeding up the development process and enabling quick iterations.",
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
