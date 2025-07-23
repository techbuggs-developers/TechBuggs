import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-white px-6">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-[10rem] font-extrabold text-[#45BCA0] leading-none"
      >
        404
      </motion.h1>
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-3xl md:text-4xl font-semibold mb-4"
      >
        Page Not Found
      </motion.h2>
      <p className="text-gray-400 text-lg max-w-md text-center mb-8">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-[#45BCA0] text-[#0f172a] px-6 py-3 rounded-2xl font-semibold hover:bg-[#1fd4a5] transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
