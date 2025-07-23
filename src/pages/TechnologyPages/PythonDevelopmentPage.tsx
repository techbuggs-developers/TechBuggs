import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import useScrollAnimation from "../../hooks/useAnimation";

const PythonDevelopmentPage: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useScrollAnimation(0.1);
  const { ref: servicesRef, inView: servicesInView } = useScrollAnimation(0.1);
  const { ref: benefitsRef, inView: benefitsInView } = useScrollAnimation(0.1);

  return (
    <div className="bg-gray-50 text-gray-900">
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
            Python Development
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-[#4C4C4C]">
            Python is a versatile, high-level programming language known for its
            simplicity and readability. It's widely used for web development,
            data science, AI, and automation — enabling rapid development of
            robust applications.
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
            Python development services we provide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Custom Backend Development",
                desc: "We develop custom backend systems and web applications using Python, tailored to your specific business requirements and objectives.",
              },
              {
                title: "API Development",
                desc: "We build robust and secure APIs using Python frameworks like Django and Flask, allowing seamless communication between different systems and enabling integration with external services.",
              },
              {
                title: "Web Scraping and Data Processing",
                desc: "We leverage Python's libraries and tools to extract, process, and analyze data from various sources, enabling you to derive valuable insights and automate data-driven tasks.",
              },
              {
                title: "Serverless Functions",
                desc: "We develop serverless functions using Python and platforms like AWS Lambda, allowing you to run code without worrying about server management and scaling.",
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
            Benefits of Python Development
          </h2>

          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-16">
            <div className="flex justify-center w-full lg:w-[36%]">
              <div className="bg-[#f8fbfd] rounded-2xl p-6 flex items-center justify-center">
                <img
                  src="https://www.python.org/static/community_logos/python-logo-generic.svg"
                  alt="Python Logo"
                  className="w-64 h-64 object-contain"
                />
              </div>
            </div>

            <div className="w-full lg:w-[52%] grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 self-center">
              {[
                {
                  title: "Readability and Maintainability",
                  desc: "Python is clean and readable syntax allows developers to write code that is easy to understand and maintain, resulting in efficient collaboration and long-term code sustainability.",
                },
                {
                  title: "Large Ecosystem of Libraries and Frameworks",
                  desc: "Python has a vast collection of libraries and frameworks, such as Django and Flask, which provide pre-built components and functionalities for rapid development and streamlined backend processes.",
                },
                {
                  title: "Scalability and Performance",
                  desc: "Python's scalability is supported by frameworks like Django and Flask, which offer features like caching, load balancing, and asynchronous task management, enabling efficient handling of high traffic and large-scale applications.",
                },
                {
                  title: "Integration and Versatility",
                  desc: "Python seamlessly integrates with various technologies and databases, making it suitable for building backend systems that interact with different platforms and services.",
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

export default PythonDevelopmentPage;
