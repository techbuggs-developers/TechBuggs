import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import useScrollAnimation from "../../hooks/useAnimation";

const NextjsDevelopmentPage: React.FC = () => {
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
            Next.js Development
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-[#4C4C4C]">
            Build fast, scalable, and SEO-friendly web applications using
            Next.js – the leading React framework for production-grade
            solutions.
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
            Next.js development services we provide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Server-side rendering (SSR)",
                desc: "We implement SSR in Next.js to improve SEO and deliver faster content to your users.",
              },
              {
                title: "Static site generation (SSG)",
                desc: "We build static sites that are pre-rendered at build time for ultra-fast load speeds.",
              },
              {
                title: "API routes development",
                desc: "Create seamless backend logic using Next.js API routes for modern full-stack solutions.",
              },
              {
                title: "Headless CMS integration",
                desc: "Integrate with any CMS like Strapi, Sanity, or Contentful to build dynamic Next.js websites.",
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

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-[#08162C]">
            Benefits of Next.js Development
          </h2>

          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-16">
            {/* Image section */}
            <div className="flex justify-center w-full lg:w-[36%]">
              <div className="bg-[#f8fbfd] rounded-2xl p-6 flex items-center justify-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                  alt="Next.js Icon"
                  className="w-64 h-64 object-contain"
                />
              </div>
            </div>

            {/* Numbered Benefits */}
            <div className="w-full lg:w-[52%] grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 self-center">
              {[
                {
                  title: "SEO optimization",
                  desc: "With SSR and SSG, Next.js ensures your content is crawlable and ranks well in search engines.",
                },
                {
                  title: "Blazing fast performance",
                  desc: "Pre-rendered pages and automatic code splitting ensure super fast load times.",
                },
                {
                  title: "Developer experience",
                  desc: "Next.js offers a great DX with fast refresh, built-in routing, and easy deployment.",
                },
                {
                  title: "Built-in scalability",
                  desc: "Whether you need static content or dynamic features, Next.js can scale as your app grows.",
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

export default NextjsDevelopmentPage;
