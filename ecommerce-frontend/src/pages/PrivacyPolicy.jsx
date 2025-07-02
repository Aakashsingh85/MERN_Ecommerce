import React from "react";
import Header from "../components/Header";
import SubscribeSection from "../components/SubscribeSection";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
    <Header/>
    <div className="bg-white text-gray-800 px-4 py-12 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-4 text-center text-black">
          Privacy Policy
        </h1>
        <p className="text-center text-gray-500 mb-12">
          Last Updated: June 30, 2025
        </p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Welcome to ThinkAcademy Shirts</h2>
          <p className="text-gray-700 leading-relaxed">
            At ThinkAcademy Shirts, your privacy is our priority. This Privacy Policy outlines how we collect, use,
            and protect your personal information when you visit our website or purchase our premium shirt products.
          </p>
        </section>

        {/* What We Collect */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Name, email address, and contact details</li>
            <li>Shipping and billing addresses</li>
            <li>Payment information (handled securely by third-party processors)</li>
            <li>Browsing behavior on our website (via cookies)</li>
          </ul>
        </section>

        {/* How We Use It */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed">
            We use the information you provide to:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-1 mt-2">
            <li>Process and deliver your shirt orders</li>
            <li>Send order updates and promotional offers</li>
            <li>Improve website experience and customer service</li>
          </ul>
        </section>

        {/* Sharing Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Data Sharing & Security</h2>
          <p className="text-gray-700 leading-relaxed">
            Your personal data is never sold. We only share it with trusted partners (e.g., shipping providers and
            payment gateways) to fulfill your orders securely.
          </p>
        </section>

        {/* Your Rights */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
          <p className="text-gray-700 leading-relaxed">
            You have the right to access, update, or delete your personal information at any time. Just contact our
            support team at{" "}
            <a href="mailto:support@thinkacademyshirts.com" className="text-blue-600 underline">
              support@thinkacademyshirts.com
            </a>.
          </p>
        </section>

        {/* Cookies */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Cookies & Tracking</h2>
          <p className="text-gray-700 leading-relaxed">
            We use cookies to enhance your browsing experience and analyze site traffic. You can adjust cookie
            preferences through your browser settings.
          </p>
        </section>

        {/* Updates */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Policy Updates</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy occasionally. All changes will be posted here. Continued use of the site
            constitutes your agreement to the updated terms.
          </p>
        </section>

      </div>
    </div>
    <SubscribeSection/>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;
