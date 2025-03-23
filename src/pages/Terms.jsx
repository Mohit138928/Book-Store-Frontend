import React from "react";
import { motion } from "framer-motion";

const Terms = () => {
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
          Terms of Service
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
    title: "1. Acceptance of Terms",
    content:
      "By accessing and using this website, you agree to comply with these Terms of Service.",
  },
  {
    title: "2. User Responsibilities",
    content:
      "Users must not misuse the website, violate laws, or attempt unauthorized access.",
  },
  {
    title: "3. Intellectual Property",
    content:
      "All content, trademarks, and data are owned by us and protected under copyright laws.",
  },
  {
    title: "4. Limitations of Liability",
    content:
      "We are not liable for any direct, indirect, or incidental damages arising from your use of our website.",
  },
  {
    title: "5. Termination of Use",
    content:
      "We reserve the right to terminate accounts or deny access if any user violates these terms.",
  },
  {
    title: "6. Governing Law",
    content:
      "These terms shall be governed by and interpreted in accordance with the laws of [Your Country].",
  },
];

export default Terms;
