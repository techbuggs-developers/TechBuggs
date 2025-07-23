import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Smartphone,
  Globe,
  ShieldCheck,
} from "lucide-react";
import useScrollAnimation from "../../hooks/useAnimation";

const AngularDevelopmentPage: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useScrollAnimation(0.1);

  return (
    <div className="min-h-screen">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text ">
            Angular Development
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Build robust, scalable web applications with Angular - the platform
            for building mobile and desktop web applications.
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              Icon: Code2,
              title: "TypeScript Integration",
              desc: "Built with TypeScript for enhanced development experience and type safety.",
              delay: 0.1,
            },
            {
              Icon: Server,
              title: "Component-Based Architecture",
              desc: "Build reusable components for faster development and better maintainability.",
              delay: 0.2,
            },
            {
              Icon: Database,
              title: "Dependency Injection",
              desc: "Powerful dependency injection system for better code organization and testing.",
              delay: 0.3,
            },
            {
              Icon: Smartphone,
              title: "Progressive Web Apps",
              desc: "Build modern Progressive Web Applications with Angular's PWA support.",
              delay: 0.4,
            },
            {
              Icon: ShieldCheck,
              title: "Built-in Security",
              desc: "Comprehensive security features to protect your applications.",
              delay: 0.5,
            },
            {
              Icon: Globe,
              title: "Internationalization",
              desc: "Built-in support for multiple languages and locales.",
              delay: 0.6,
            },
          ].map(({ Icon, title, desc, delay }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay }}
              className="card p-6"
            >
              <div className="bg-primary-50 text-primary-600 p-3 rounded-xl inline-flex mb-4">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AngularDevelopmentPage;
