"use client";

import { motion } from "framer-motion";

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="absolute top-0 top-[80px] text-white text-center text-[32px] md:text-[44px] lg:text-[64px] font-bold leading-[160%]"
    >
      {children}
    </motion.div>
  );
};

export default Title;
