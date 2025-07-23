import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { technologyData } from "../data/technologyData";

const TechnologyDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) return null;

  const tech = technologyData[slug];

  if (!tech) {
    return <div className="text-center py-20 text-red-500">Technology not found.</div>;
  }

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-8 pb-2">
        <p className="text-lg text-[#08162C] font-semibold mb-4">
          <NavLink to="/">
            Home &gt;
          </NavLink>
          <span className="text-[#78BA9F] font-semibold"> {tech.title}</span>
        </p>
      </div>
      {/* Hero */}
      <section className="py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#08162C]">
            {tech.title}
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-[#4C4C4C]">{tech.heroDescription}</p>
        </motion.div>
      </section>
      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#08162C]">
            Services We Provide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tech.services.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
              >
                <CheckCircle size={36} className="text-[#29E8AE] mb-4" />
                <h3 className="text-xl font-semibold text-[#08162C] mb-2">{item.title}</h3>
                <p className="text-[#4C4C4C]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#08162C]">
            Benefits of {tech.title}
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex justify-center w-full lg:w-[36%]">
              <div className="bg-[#f8fbfd] rounded-2xl p-6">
                <img
                  src={tech.logo}
                  alt={tech.title}
                  className="w-64 h-64 object-contain"
                />
              </div>
            </div>
            <div className="w-full lg:w-[52%] grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
              {tech.benefits.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#78BA9F] text-[#08162C] rounded-full flex items-center justify-center font-semibold">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#08162C] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#4C4C4C]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyDetail;
