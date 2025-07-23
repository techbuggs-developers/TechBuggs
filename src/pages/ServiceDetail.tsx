import React from "react";
import { Button } from "../components/common/button";
import { useParams } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { NavLink } from "react-router-dom";

const ServiceDetail: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = servicesData.find((s) => s.slug === serviceSlug);
  const details = service?.details;

  if (!service) {
    return (
      <div className="p-8 text-center text-red-500">Service not found.</div>
    );
  }
  if (!details) {
    return (
      <div className="p-8 text-center text-red-500">
        Service details not available.
      </div>
    );
  }
  return (
    <section className="bg-white pt-32 pb-20 relative overflow-hidden">
      {/* ... Gradient blob */}
      <div className="max-w-[69rem] mx-auto px-4 md:px-6 mt-10">
        <p className="text-lg text-[#08162C] font-semibold mb-4">
          <NavLink to="/">
            {details.breadcrumb[0].label} {"> "}
          </NavLink>
          <span className="text-[#78BA9F] font-semibold">
            {details.breadcrumb[1].label}
          </span>
        </p>

        <div className="space-y-2 relative z-20">
          <h1 className="text-4xl md:text-[5rem] font-semibold text-[#08162C]">
            {details.introSection.title}
          </h1>
        </div>

        <p className="mt-6 text-base md:text-xl font-semibold text-[#252525] leading-relaxed max-w-3xl">
          {details.introSection.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center mt-10 w-full">
          {details.laptopImageCards.map((img, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg p-6 rounded-2xl flex justify-center"
            >
              <img src={img} alt={`laptop-${idx}`} width={220} height={200} />
            </div>
          ))}
        </div>
      </div>

      {/* Our Process */}
      <div className="max-w-[69rem] mx-auto px-4 md:px-6 mt-20 sm:mt-32">
        <h2 className="text-3xl sm:text-3xl md:text-6xl font-semibold text-center mb-12 sm:mb-24 text-[#08162C]">
          Our Process
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Lines */}
          <div className="hidden lg:block absolute lg:top-6 lg:left-0 lg:right-[20%] h-0.5 bg-[#29E8AE] z-0" />
          <div className="block sm:hidden absolute  h-[19rem] top-[1.5rem] left-[1.5rem] w-0.5 bg-[#29E8AE] z-0" />
          {details.processSteps.map((step) => (
            <div key={step.number} className="flex sm:flex-col gap-4 relative">
              <div className="bg-[#29E8AE] text-white w-12 h-12 flex items-center justify-center rounded-md mb-4 z-10 relative flex-shrink-0">
                <div className="text-xl font-semibold">{step.number}</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#08162C]">
                  {step.title}
                </h3>
                <p className="text-[#252525] text-base mt-1">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 mx-auto w-full flex justify-center">
          <Button className="px-6 py-3" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative overflow-hidden mt-10 sm:mt-20">
        {/* ... Gradient blobs */}

        <div className="max-w-[69rem] mx-auto py-10 sm:py-20 px-6 md:px-16">
          <div className="text-center max-w-5xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-semibold text-[#08162C]">
              {details.overviewSection.title1}
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-semibold mb-6 text-[#08162C]">
              {details.overviewSection.title2}
            </h2>
            <p className="text-[#252525] mt-4 text-base leading-relaxed font-semibold">
              {details.overviewSection.description}
            </p>
          </div>

          <div className="space-y-20">
            {details.serviceCards.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  service.reverse ? "md:flex-row-reverse" : "md:flex-row"
                }  gap-10`}
              >
                <div className="text-left md:w-1/2">
                  <h3 className="text-2xl md:text-5xl font-bold text-[#08162C] mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-[#252525] text-xl leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="bg-[#E9F3FB] p-6 rounded-xl shadow-md w-full md:w-[30rem] h-[288px] flex justify-center items-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="mx-auto w-32 h-32"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* All Services Section */}
      {/* <div className="max-w-[69rem] mx-auto px-4 md:px-6 mt-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-[#08162C]">
          Explore All Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((svc) => (
            <a
              key={svc.slug}
              href={`/services/${svc.slug}`}
              className="block bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-shadow border border-[#e5e7eb]"
              style={{ textDecoration: 'none' }}
            >
              <h3 className="text-xl font-bold text-[#08162C] mb-2">{svc.title}</h3>
              <p className="text-[#252525] text-base mb-2">{svc.description}</p>
              <span className="inline-block mt-2 text-[#78BA9F] font-semibold">Learn More &rarr;</span>
            </a>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default ServiceDetail;
