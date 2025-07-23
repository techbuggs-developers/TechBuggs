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
                title: "Custom Android App Development",
                desc: "We develop tailor-made Android applications that align with your business requirements, ensuring a visually appealing design, smooth functionality, and optimal performance.",
              },
              {
                title: "UI/UX Design",
                desc: "Our skilled designers create intuitive and visually engaging user interfaces, focusing on user-centric design principles to deliver a seamless and delightful user experience for your Android app.",
              },
              {
                title: "App Testing and Quality Assurance",
                desc: "We conduct thorough testing to ensure your Android app is free from bugs, performs seamlessly across different Android devices, and delivers a consistent experience.",
              },
              {
                title: "Play Store Submission and Support",
                desc: "We assist you in the process of submitting your app to the Google Play Store, ensuring it meets the necessary requirements. We also provide ongoing support and maintenance for your Android app to ensure its continued success.",
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
            Benefits of Android Development
          </h2>

          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-16">
            <div className="flex justify-center w-full lg:w-[36%]">
              <div className="bg-[#f8fbfd] rounded-2xl p-6 flex items-center justify-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg"
                  alt="Android Logo"
                  className="w-64 h-64 object-contain"
                />
              </div>
            </div>

            <div className="w-full lg:w-[52%] grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 self-center">
              {[
                {
                  title: "Large User Base",
                  desc: "Android has the largest market share globally, providing a vast potential user base for your app. Developing an Android app allows you to reach a wide audience and expand your business reach.",
                },
                {
                  title: "Open Platform",
                  desc: "Android offers an open platform that allows for greater customization and flexibility in app development. It provides developers with the freedom to innovate and create unique experiences for users.",
                },
                {
                  title: "Device Compatibility",
                  desc: "Android supports a wide range of devices with varying screen sizes, resolutions, and hardware capabilities. By developing an Android app, you can ensure compatibility across a diverse range of smartphones and tablets.",
                },
                {
                  title: "Integration with Google Services",
                  desc: "Android seamlessly integrates with various Google services such as Google Maps, Google Analytics, Google Drive, and Google Play Services, providing opportunities for enhanced functionality and integration with popular Google services.",
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
