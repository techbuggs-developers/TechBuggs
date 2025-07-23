import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import useScrollAnimation from "../../hooks/useAnimation";

const NodejsDevelopmentPage: React.FC = () => {
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
            Node.js Development
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-[#4C4C4C]">
            Node.js is a powerful JavaScript runtime built on Chrome's V8
            engine. It enables developers to build scalable and high-performance
            server-side applications. With its event-driven, non-blocking I/O
            model, Node.js is ideal for real-time apps and APIs.
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
            Node.js development services we provide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Custom Backend Development",
                desc: "We develop custom backend applications and APIs using Node.js, tailored to your specific business requirements and scalability needs.",
              },
              {
                title: "RESTful API Development",
                desc: "We build robust and scalable RESTful APIs using Node.js and popular frameworks like Express.js, allowing seamless integration with frontend applications and third-party services.",
              },
              {
                title: "Real-time Application Development",
                desc: "We leverage the event-driven nature of Node.js to build real-time applications such as chat applications, collaborative tools, and streaming platforms.",
              },
              {
                title: "Microservices Architecture",
                desc: "We design and develop backend systems using Node.js with a microservices architecture, allowing for modular and scalable application development.",
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
            Benefits of Node.js Development
          </h2>

          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-16">
            <div className="flex justify-center w-full lg:w-[36%]">
              <div className="bg-[#f8fbfd] rounded-2xl p-6 flex items-center justify-center">
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png"
                  alt="Node.js Logo"
                  className="w-64 h-64 object-contain"
                />
              </div>
            </div>

            <div className="w-full lg:w-[52%] grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 self-center">
              {[
                {
                  title: "Scalability and Performance",
                  desc: "Node.js is known for its ability to handle a large number of concurrent connections with high efficiency, making it suitable for building scalable and high-performance backend systems.",
                },
                {
                  title: "JavaScript Everywhere",
                  desc: "With Node.js, developers can use the same programming language (JavaScript) on both the frontend and backend, allowing for easier code sharing, faster development, and better collaboration between frontend and backend teams.",
                },
                {
                  title: "Non-Blocking I/O",
                  desc: "Node.js uses an asynchronous, non-blocking I/O model, allowing it to handle multiple requests concurrently without getting blocked, resulting in faster response times and improved application performance.",
                },
                {
                  title: "Vast Ecosystem",
                  desc: "Node.js has a rich ecosystem of modules and libraries available through npm, enabling developers to leverage pre-built components, frameworks, and tools to accelerate development and enhance functionality.",
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

export default NodejsDevelopmentPage;
