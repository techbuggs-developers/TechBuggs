import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <section className="bg-white text-[#014F86] pt-32 pb-20 px-4 md:px-16 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Terms & Conditions
      </h1>

      <div className="space-y-6 text-base leading-relaxed text-[#4A4A4A]">
        <p>
          Welcome to our website. By accessing or using our services, you agree
          to be bound by these Terms and Conditions. Please read them carefully.
        </p>

        <h2 className="text-xl font-semibold">1. Use of Website</h2>
        <p>
          You agree to use the website for lawful purposes only and not to
          engage in any activity that disrupts or interferes with the
          functionality of the site.
        </p>

        <h2 className="text-xl font-semibold">2. Intellectual Property</h2>
        <p>
          All content on this site including text, images, graphics, logos, and
          software are the property of the company and are protected by
          copyright and intellectual property laws.
        </p>

        <h2 className="text-xl font-semibold">3. User Accounts</h2>
        <p>
          If you create an account on our site, you are responsible for
          maintaining the confidentiality of your account and password.
        </p>

        <h2 className="text-xl font-semibold">4. Limitation of Liability</h2>
        <p>
          We are not liable for any damages or losses resulting from your use of
          this website or services provided through it.
        </p>

        <h2 className="text-xl font-semibold">5. Changes to Terms</h2>
        <p>
          We reserve the right to update or modify these Terms at any time
          without prior notice. Changes will be effective immediately upon
          posting.
        </p>

        <h2 className="text-xl font-semibold">6. Contact</h2>
        <p>
          If you have any questions about these Terms and Conditions, you can
          contact us at{" "}
          <span className="text-[#008080]">Info@techbuggs.com</span>.
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;
