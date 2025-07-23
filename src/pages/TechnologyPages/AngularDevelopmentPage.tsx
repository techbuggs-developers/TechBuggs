import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import useScrollAnimation from "../../hooks/useAnimation";

const AngularDevelopmentPage: React.FC = () => {
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
            Angular Development
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-[#4C4C4C]">
            Build robust, scalable web applications with Angular – the platform
            for building mobile and desktop web applications using TypeScript.
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
            Angular Development services we provide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Custom Angular Development",
                desc: "We develop customized Angular applications tailored to your specific business requirements, delivering robust and scalable solutions.",
              },
              {
                title: "Angular Component Development",
                desc: "Our team creates reusable and modular Angular components that can be seamlessly integrated into your applications, promoting code reusability and efficiency.",
              },
              {
                title: "Angular UI/UX Design",
                desc: "We design visually appealing and user-friendly interfaces using Angular, focusing on delivering an exceptional user experience.",
              },
              {
                title: "Angular Migration",
                desc: "If you have an existing application and want to migrate it to Angular, we can assist you in the migration process, ensuring a smooth transition and leveraging the benefits of Angular's features and performance optimizations.",
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
            Benefits of Angular Development
          </h2>

          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-16">
            <div className="flex justify-center w-full lg:w-[36%]">
              <div className="bg-[#f8fbfd] rounded-2xl p-6 flex items-center justify-center">
                <img
                  src="https://angular.io/assets/images/logos/angular/angular.svg"
                  alt="Angular Icon"
                  className="w-64 h-64 object-contain"
                />
              </div>
            </div>

            <div className="w-full lg:w-[52%] grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 self-center">
              {[
                {
                  title: "Powerful Data Binding",
                  desc: "Angular's two-way data binding simplifies the synchronization between the UI and data model, reducing the need for manual updates and improving developer productivity.",
                },
                {
                  title: "Modular and Reusable Components",
                  desc: "Angular encourages the use of reusable components, which promotes code reusability, maintainability, and efficient development.",
                },
                {
                  title: "Dependency Injection",
                  desc: "Angular's built-in dependency injection system simplifies component management and facilitates the development of loosely coupled and testable code.",
                },
                {
                  title: "Enhanced Performance",
                  desc: "Angular optimizes application performance through features like ahead-of-time (AOT) compilation, lazy loading, and code splitting, resulting in faster load times and improved user experience.",
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

export default AngularDevelopmentPage;
