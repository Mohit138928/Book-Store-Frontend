import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AboutUs = () => {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-50 p-6"
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="max-w-4xl bg-white shadow-xl rounded-2xl p-10 text-gray-800"
        variants={fadeInUp}
      >
        {/* Title */}
        <motion.h1
          className="text-4xl font-bold text-center text-blue-600"
          variants={fadeInLeft}
        >
          About Us
        </motion.h1>
        <motion.div
          className="w-[130px] h-[4px] bg-yellow-500 mx-auto mb-6"
          initial={{ width: 0 }}
          animate={{ width: "130px" }}
          transition={{ duration: 0.6 }}
        ></motion.div>

        {/* Intro Text */}
        <motion.p className="text-lg text-gray-600 text-center mb-6" variants={fadeInUp}>
          Welcome to <span className="font-semibold text-blue-500">Book Store</span> – Your Gateway to Endless Stories.
        </motion.p>

        {/* Sections */}
        <motion.section className="mb-6" variants={fadeInUp}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Who We Are</h2>
          <p className="text-gray-600">
            We are a team of book lovers dedicated to creating an online space where readers can easily discover, explore,
            and purchase their favorite books across all genres.
          </p>
        </motion.section>

        <motion.section className="mb-6" variants={fadeInUp}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li><span className="font-semibold">To Make Reading Accessible:</span> Bringing books closer to people everywhere.</li>
            <li><span className="font-semibold">To Build a Reading Community:</span> Connecting readers through the power of stories.</li>
            <li><span className="font-semibold">To Innovate Book Shopping:</span> Providing a seamless and user-friendly book discovery experience.</li>
          </ul>
        </motion.section>

        {/* Why Choose Us? */}
        <motion.section className="mb-6" variants={fadeInUp}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "📚 Vast Collection", desc: "From fiction and non-fiction to self-help and academic books." },
              { title: "🚀 User-Friendly Experience", desc: "Seamless browsing and a simple checkout process." },
              { title: "💰 Affordable Pricing", desc: "Competitive prices and exclusive deals." },
              { title: "🌎 Community & Recommendations", desc: "Personalized recommendations and a thriving reader community." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-4 bg-blue-50 rounded-xl shadow-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
              >
                <p className="font-semibold">{item.title}</p>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section className="text-center" variants={fadeInUp}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Join Us on This Reading Journey</h2>
          <p className="text-gray-600 mb-4">
            Whether you're looking for adventure, knowledge, or relaxation, <span className="font-semibold text-blue-500">Book Store</span> is your perfect reading companion.
          </p>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <Link
              to="/"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all"
            >
              Explore Now
            </Link>
          </motion.div>
        </motion.section>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
