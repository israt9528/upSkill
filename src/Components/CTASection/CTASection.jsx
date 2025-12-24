import React from "react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="relative px-4 md:px-10 lg:px-20 py-20 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-3xl overflow-hidden">
      {/* Animated Background Circles */}
      <motion.div
        className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full"
        animate={{ y: [0, 20, 0], x: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
      ></motion.div>
      <motion.div
        className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full"
        animate={{ y: [0, -20, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      ></motion.div>

      <div className="relative max-w-4xl mx-auto text-center space-y-6">
        {/* Animated Tagline */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Unlock Your Learning Potential Today
        </motion.h2>

        <motion.p
          className="text-white/90 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Join our Academy LMS and gain access to hundreds of courses, or share
          your expertise as an instructor.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <motion.button
            className="btn btn-primary px-6 py-3 text-white"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(255,255,255,0.6)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            I’m a Student
          </motion.button>
          <motion.button
            className="btn btn-outline border-white text-white px-6 py-3"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(255,255,255,0.4)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Become an Instructor
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
