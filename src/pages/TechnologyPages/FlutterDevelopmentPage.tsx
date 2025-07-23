import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import useScrollAnimation from "../../hooks/useAnimation";

const FlutterDevelopmentPage: React.FC = () => {
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
            Flutter Development
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-[#4C4C4C]">
            Build beautiful, natively compiled applications for mobile, web, and
            desktop from a single codebase with Flutter.
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
            Flutter development services we provide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Cross-Platform App Development",
                desc: "We utilize Flutter to build robust and scalable mobile applications that work seamlessly on iOS, Android, and the web. This ensures maximum reach and compatibility across different devices.",
              },
              {
                title: "Custom UI/UX Design",
                desc: "Our talented designers create visually appealing and user-friendly interfaces, leveraging Flutter's rich widget library to design intuitive and engaging user experiences.",
              },
              {
                title: "App Testing and Quality Assurance",
                desc: "We conduct thorough testing to ensure your Flutter app is stable, bug-free, and performs optimally on various platforms and devices.",
              },
              {
                title: "App Store Deployment and Support",
                desc: "We assist you in the process of submitting your Flutter app to the respective app stores, providing guidance and support to ensure a successful launch. We also offer ongoing maintenance and support services to address any issues and keep your app up to date.",
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
            Benefits of Flutter Development
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex justify-center w-full lg:w-[36%]">
              <div className="bg-[#f8fbfd] rounded-2xl p-6 flex items-center justify-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png"
                  alt="Flutter Logo"
                  className="w-64 h-64 object-contain"
                />
              </div>
            </div>

            <div className="w-full lg:w-[52%] grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
              {[
                {
                  title: "Single Codebase",
                  desc: "Flutter allows you to write a single codebase that runs on multiple platforms, reducing development time and effort. This means you can reach a wider audience with consistent user experiences across different devices.",
                },
                {
                  title: "Fast Performance",
                  desc: "Flutter apps are compiled to native machine code, providing near-native performance and smooth animations. The framework also optimizes rendering and ensures a responsive user interface, resulting in a delightful user experience.",
                },
                {
                  title: "Rich UI and Customization",
                  desc: "Flutter provides a wide range of customizable widgets and rich UI components, enabling developers to create visually appealing and unique app designs. The flexible widget system allows for seamless customization to match your brand identity and user interface requirements.",
                },
                {
                  title: "Rapid Development",
                  desc: "Flutter's hot-reload feature allows developers to instantly see the effects of code changes, making the development process highly iterative and efficient. This helps in faster debugging, UI tweaking, and overall faster app development cycles.",
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

export default FlutterDevelopmentPage;
