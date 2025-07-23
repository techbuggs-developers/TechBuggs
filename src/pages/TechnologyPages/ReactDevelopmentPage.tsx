import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import useScrollAnimation from "../../hooks/useAnimation";

const ReactDevelopmentPage: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useScrollAnimation(0.1);
  const { ref: servicesRef, inView: servicesInView } = useScrollAnimation(0.1);
  const { ref: benefitsRef, inView: benefitsInView } = useScrollAnimation(0.1);

  return (
    <div className="bg-gray-50 text-gray-900">
      <section
        ref={heroRef}
        className="relative bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden py-28 flex items-center"
      >
        {/* Background elements */}
        <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a0a0a0' fill-opacity='0.1'%3E%3Ccircle cx='25' cy='25' r='3'/%3E%3Ccircle cx='75' cy='75' r='3'/%3E%3C/g%3E%3C/svg%3E')] bg-repeat">
          <div className="absolute w-80 h-80 bg-primary-200 rounded-full -top-20 -left-20 mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute w-96 h-96 bg-secondary-200 rounded-full top-20 -right-20 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute w-100 h-100 bg-accent-200 rounded-full -bottom-20 left-1/3 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text">
            React Development
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            React is a widely-used JavaScript library for building user
            interfaces. It allows developers to create reusable UI components
            and efficiently update the user interface as the underlying data
            changes. With its declarative syntax and virtual DOM, React
            simplifies the process of building interactive and responsive web
            applications.
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
          <h2 className="text-4xl font-bold mb-12 text-center">
            React Development services we provide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "React.js development from scratch",
                desc: "We build tailor-made React applications from scratch, aligning them with your specific business requirements and objectives.",
              },
              {
                title: "Custom React.js development",
                desc: "Our team creates reusable and efficient React components that can be seamlessly integrated into your existing applications.",
              },
              {
                title: "User Friendly Interface",
                desc: "We design visually appealing and user-friendly interfaces using React, focusing on delivering a compelling user experience.",
              },
              {
                title: "High quality website",
                desc: "We optimize React applications for performance, scalability, and SEO, ensuring they deliver fast and engaging experiences to your users.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <CheckCircle size={36} className="text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section ref={benefitsRef} className="py-20 bg-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Benefits of React Development
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React Icon"
                className="w-64 h-64 opacity-70"
              />
            </div>
            <div className="space-y-8">
              {[
                {
                  title: "Reusable components",
                  desc: "React follows a component-based approach, allowing developers to break down the UI into modular and reusable components, which leads to code reusability and easier maintenance.",
                },
                {
                  title: "Enhanced performance",
                  desc: "React utilizes a virtual DOM, which updates only the necessary parts of the user interface, resulting in improved performance and a smoother user experience.",
                },
                {
                  title: "Unidirectional data flow",
                  desc: "React enforces a one-way data flow, making it easier to track and manage data changes, reducing bugs and enhancing code stability.",
                },
                {
                  title: "Flexibility",
                  desc: "React has a vast ecosystem of libraries, tools, and resources, as well as a vibrant community that actively contributes to its development and provides support.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
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

export default ReactDevelopmentPage;
