import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import useScrollAnimation from "../../hooks/useAnimation";

const PythonDevelopmentPage: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useScrollAnimation(0.1);
  const { ref: servicesRef, inView: servicesInView } = useScrollAnimation(0.1);
  const { ref: benefitsRef, inView: benefitsInView } = useScrollAnimation(0.1);

  return (
    <div className="bg-gray-50 text-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden py-28 flex items-center transition-colors duration-300"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6  bg-clip-text ">
            Python Development
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Python is a versatile, high-level programming language known for its
            simplicity and readability. It's widely used for web development,
            data science, artificial intelligence, and automation. With its
            extensive libraries and frameworks, Python enables rapid development
            of robust applications.
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
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Python Development services we provide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                desc: "We build scalable web applications using Django and Flask frameworks, following best practices and modern architecture patterns.",
              },
              {
                title: "Data Science & AI",
                desc: "We develop machine learning models, data analysis solutions, and AI applications using Python's powerful data science ecosystem.",
              },
              {
                title: "API Development",
                desc: "We create RESTful APIs and microservices using FastAPI and Django REST framework for high-performance backend systems.",
              },
              {
                title: "Automation & Scripting",
                desc: "We develop automation scripts and tools to streamline business processes and improve operational efficiency.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <CheckCircle size={36} className="text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-20 bg-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Benefits of Python Development
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <img
                src="https://www.python.org/static/community_logos/python-logo-generic.svg"
                alt="Python Logo"
                className="w-90 h-64 opacity-80"
              />
            </div>
            <div className="space-y-8">
              {[
                {
                  number: "01",
                  title: "Rapid Development",
                  text: "Python's simple syntax and extensive libraries enable faster development cycles and quicker time-to-market.",
                },
                {
                  number: "02",
                  title: "Versatility",
                  text: "Python can be used for web development, data science, AI, automation, and more, making it a versatile choice for various projects.",
                },
                {
                  number: "03",
                  title: "Rich Ecosystem",
                  text: "Access to thousands of libraries and frameworks like Django, Flask, NumPy, Pandas, and TensorFlow for various use cases.",
                },
                {
                  number: "04",
                  title: "Community Support",
                  text: "Strong community support, extensive documentation, and a wealth of learning resources make Python development more accessible.",
                },
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {benefit.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.text}</p>
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
