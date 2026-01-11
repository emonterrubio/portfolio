"use client";

import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <motion.section 
      className="w-full max-w-7xl mx-auto pt-4 lg:pt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* <h2 className="text-5xl font-bold text-black mb-6">
        Hello, I&apos;m <span className="text-blue-600">Ed Monterrubio</span>
      </h2> */}
      <h2 className="font-heading text-2xl md:text-3xl xl:text-4xl font-medium text-gray-800 max-w-full xl:leading-tight">
      Design Leader at the intersection of AI/ML and enterprise innovation. I bridge product vision and business impact through compelling narratives and human-centered experiences that scale.
      </h2>
    </motion.section>
  );
};

