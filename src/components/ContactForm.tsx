import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const keys = {
  serviceId: "service_r5gw7te",
  templateId: "template_00m8zsq",
  publicKey: "UarXK4uvaHrQWIL9z",
};

const ContactForm: React.FC = () => {
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
        required
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
          aria-label="Send contact message"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
