import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import useScrollAnimation from "../../hooks/useAnimation";

const AndroidDevelopmentPage: React.FC = () => {
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
            Android Development
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-[#4C4C4C]">
            Build powerful, native Android applications that deliver exceptional
            user experiences across millions of devices.
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
            Android development services we provide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Kotlin Development",
                desc: "Modern, concise, and safe programming language for Android development.",
              },
              {
                title: "Material Design",
                desc: "Create beautiful, consistent user interfaces following Material Design guidelines.",
              },
              {
                title: "Room Database",
                desc: "Robust local database solution for data persistence in Android apps.",
              },
              {
                title: "Security Best Practices",
                desc: "Implement robust security measures to protect user data and app integrity.",
              },
              {
                title: "Play Store Deployment",
                desc: "Publish and distribute your apps through the Google Play Store.",
              },
              {
                title: "Performance Optimization",
                desc: "Optimize app performance for smooth user experience across devices.",
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
            Benefits of Android Development
          </h2>

          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-16">
            {/* Image Section */}
            <div className="flex justify-center w-full lg:w-[36%]">
              <div className="bg-[#f8fbfd] rounded-2xl p-6 flex items-center justify-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg"
                  alt="Android Logo"
                  className="w-64 h-64 object-contain"
                />
              </div>
            </div>

            {/* Numbered Benefits */}
            <div className="w-full lg:w-[52%] grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 self-center">
              {[
                {
                  title: "Wider Reach",
                  desc: "Android powers the majority of mobile devices globally, offering maximum audience penetration.",
                },
                {
                  title: "Open Source Flexibility",
                  desc: "Leverage Android’s open ecosystem for deep customization and innovation.",
                },
                {
                  title: "Fast Deployment",
                  desc: "Rapid development and Play Store publishing allow faster time to market.",
                },
                {
                  title: "Hardware Compatibility",
                  desc: "Develop apps for a wide range of device types: phones, tablets, TVs, and wearables.",
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

export default AndroidDevelopmentPage;
