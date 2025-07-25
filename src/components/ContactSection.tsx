import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { NavLink } from "react-router-dom";

const keys = {
  serviceId: "service_r5gw7te",
  templateId: "template_00m8zsq",
  publicKey: "UarXK4uvaHrQWIL9z",
};

const ContactSection: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "name") {
      const cleaned = value.replace(/[^a-zA-Z\s'-]/g, "");
      setForm({ ...form, name: cleaned });
    } else if (name === "phone") {
      const cleaned = value.replace(/\D/g, "");
      setForm({ ...form, phone: cleaned });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, phone, message } = form;

    if (!name.trim()) return toast.error("Full name is required.");
    if (!isValidEmail(email)) return toast.error("Invalid email address.");
    if (!message.trim()) return toast.error("Please enter a message.");
    if (phone && (phone.length < 10 || phone.length > 11)) {
      return toast.error("Phone must be 10 or 11 digits.");
    }

    setLoading(true);

    try {
      await emailjs.send(
        keys.serviceId,
        keys.templateId,
        {
          from_name: name,
          from_email: email,
          phone,
          message,
        },
        keys.publicKey
      );
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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

        <form
          className="flex flex-col space-y-10 justify-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={form.name}
            onChange={handleChange}
            className="border-b border-[#999999] focus:outline-none pb-4 placeholder-[#4C4C4C] bg-transparent"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border-b border-[#999999] focus:outline-none pb-4 placeholder-[#4C4C4C] bg-transparent"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            value={form.phone}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (["e", "E", "+", "-", ".", " "].includes(e.key)) {
                e.preventDefault();
              }
            }}
            className="border-b border-[#999999] focus:outline-none pb-4 placeholder-[#4C4C4C] bg-transparent"
          />
          <textarea
            name="message"
            placeholder="Tell us more about your idea"
            rows={2}
            value={form.message}
            onChange={handleChange}
            className="border-b border-[#999999] focus:outline-none pb-4 placeholder-[#4C4C4C] bg-transparent resize-none leading-none"
            required
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#15847A] text-white font-semibold px-6 py-2 rounded-full cursor-pointer transition-colors hover:bg-[#0f6b5e]"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>

      <Toaster position="top-center" />
    </section>
  );
};

export default ContactSection;
