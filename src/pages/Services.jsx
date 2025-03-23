import React from "react";
import { motion } from "framer-motion";
import { FaBook, FaShippingFast, FaMoneyCheckAlt, FaHeadset, FaGift } from "react-icons/fa";

const services = [
  {
    icon: <FaBook className="text-5xl transition-colors duration-300 group-hover:text-yellow-500" />,
    title: "Vast Collection",
    description: "Explore a diverse range of books, from bestsellers to hidden gems across various genres.",
  },
  {
    icon: <FaShippingFast className="text-5xl transition-colors duration-300 group-hover:text-yellow-500" />,
    title: "Fast Delivery",
    description: "Get your favorite books delivered quickly and safely right to your doorstep.",
  },
  {
    icon: <FaMoneyCheckAlt className="text-5xl transition-colors duration-300 group-hover:text-yellow-500" />,
    title: "Affordable Pricing",
    description: "Enjoy great discounts and deals on books, making reading more affordable.",
  },
  {
    icon: <FaHeadset className="text-5xl transition-colors duration-300 group-hover:text-yellow-500" />,
    title: "24/7 Customer Support",
    description: "Our support team is available round the clock to assist with any queries.",
  },
  {
    icon: <FaGift className="text-5xl transition-colors duration-300 group-hover:text-yellow-500" />,
    title: "Gift & Subscription Services",
    description: "Surprise your loved ones with book gifts or monthly reading subscriptions.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <motion.div
        className="max-w-6xl bg-white shadow-lg rounded-2xl p-10 text-gray-800 w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl font-bold text-center text-blue-600 mb-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Our Services
        </motion.h1>

        <motion.div
          className="w-[80px] h-[4px] bg-yellow-500 mx-auto mb-8"
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-blue-50 rounded-xl shadow-md flex flex-col items-center text-center 
              transform transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:bg-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
            >
              {service.icon}
              <h2 className="text-xl font-semibold text-gray-800 mt-4">{service.title}</h2>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
