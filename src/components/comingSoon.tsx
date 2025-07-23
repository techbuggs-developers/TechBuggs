import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ComingSoon: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1a2e40] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Coming Soon
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          We’re working hard to launch something amazing. Stay tuned!
        </p>

        <Link
          to="/"
          className="inline-block bg-[#29E8AE] hover:bg-[#20d4a0] text-[#0f172a] font-semibold py-3 px-6 rounded-xl transition duration-300"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
