import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="bg-white text-[#014F86] pt-32 pb-20 px-4 md:px-16 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Privacy Policy
      </h1>

      <div className="space-y-6 text-base leading-relaxed text-[#4A4A4A]">
        <p>
          We value your privacy. This Privacy Policy outlines how we collect,
          use, and protect your personal information when you use our website.
        </p>

        <h2 className="text-xl font-semibold">1. Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address,
          phone number, and payment details when you register, place an order,
          or contact us.
        </p>

        <h2 className="text-xl font-semibold">
          2. How We Use Your Information
        </h2>
        <p>
          Your information is used to process transactions, provide customer
          support, send updates, and improve our services. We do not sell or
          share your data with third parties without consent.
        </p>

        <h2 className="text-xl font-semibold">3. Cookies & Tracking</h2>
        <p>
          We use cookies to enhance user experience and gather analytics data.
          You can choose to disable cookies through your browser settings.
        </p>

        <h2 className="text-xl font-semibold">4. Data Security</h2>
        <p>
          We implement security measures to protect your personal information,
          but please note that no method of transmission over the internet is
          100% secure.
        </p>

        <h2 className="text-xl font-semibold">5. Your Rights</h2>
        <p>
          You can request to access, modify, or delete your personal information
          at any time by contacting us.
        </p>

        <h2 className="text-xl font-semibold">6. Third-Party Services</h2>
        <p>
          We may use third-party tools (e.g., payment gateways, analytics) that
          have their own privacy policies. We are not responsible for their
          practices.
        </p>

        <h2 className="text-xl font-semibold">7. Policy Updates</h2>
        <p>
          We reserve the right to update this Privacy Policy. Any changes will
          be posted on this page with an updated date.
        </p>

        <h2 className="text-xl font-semibold">8. Contact Us</h2>
        <p>
          For any privacy-related questions, contact us at{" "}
          <span className="text-[#008080]">Info@techbuggs.com</span>.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
