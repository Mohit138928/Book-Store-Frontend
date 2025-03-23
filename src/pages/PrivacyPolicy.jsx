import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div
        className="max-w-3xl bg-white shadow-lg rounded-xl p-8 text-gray-800 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl font-bold text-center text-blue-600 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Privacy Policy
        </motion.h1>

        <motion.div
          className="w-[80px] h-[4px] bg-yellow-500 mx-auto mb-6"
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        <motion.p
          className="text-lg text-gray-600 text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Last Updated: <strong>March 19, 2025</strong>
        </motion.p>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
              className="border-l-4 border-blue-500 pl-4 py-3"
            >
              <h2 className="text-2xl font-semibold text-blue-500">
                {section.title}
              </h2>
              <p className="text-gray-700 mt-2">{section.content}</p>
            </motion.section>
          ))}
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <p className="text-gray-700">
            📧 Contact us at{" "}
            <a href="mailto:creativitycompany61@gmail.com" className="text-blue-600 hover:underline">
            creativitycompany61@gmail.com
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

const sections = [
  {
    title: "1. Information We Collect",
    content:
      "We collect personal information such as name, email, and phone number, as well as non-personal data like IP addresses and browsing behavior.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "We use your information to improve website functionality, respond to inquiries, send promotional emails (with consent), and ensure security.",
  },
  {
    title: "3. How We Protect Your Information",
    content:
      "We use SSL encryption, secure storage, and restricted access to safeguard your data from unauthorized access.",
  },
  {
    title: "4. Your Privacy Rights",
    content:
      "Under GDPR & CCPA, you have the right to access, update, delete, or restrict the use of your data.",
  },
];

export default PrivacyPolicy;
