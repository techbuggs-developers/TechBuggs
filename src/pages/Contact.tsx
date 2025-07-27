// ContactSection.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ContactForm from "../components/ContactForm"; 

const Contact: React.FC = () => {
  return (
    <section className="py-20 lg:py-40 px-8 md:px-20 lg:px-28 lg:mt-30 mt-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col">
          <p className="text-base md:text-lg font-semibold text-black mb-12">
            <NavLink to="/">Home {">"}</NavLink>{" "}
            <span className="text-[#78BA9F]">Contact</span>
          </p>
          <h2 className="text-5xl md:text-[5rem] font-semibold text-[#12334E] mb-10">
            Let’s Talk
          </h2>
          <p className="text-lg md:text-xl font-semibold max-w-[30rem] text-[#303030] leading-relaxed">
            Get in touch to discuss your AI goals or software product needs. Not
            sure where to start? We can help with that, too.
          </p>
        </div>
        <ContactForm />
      </div>

      <Toaster position="top-center" />
    </section>
  );
};

export default Contact;
