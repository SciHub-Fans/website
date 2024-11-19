"use client"

import { motion } from "framer-motion";

const Slogan = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex w-full py-6 mt-[134px] mb-[90px] flex-col justify-center items-center gap-3 [background:rgba(227,45,45,0.12)] backdrop-blur border-y-black border-t border-solid border-b"
    >
      <span className="text-[#E32D2D] text-[32px] font-bold leading-[160%] tracking-[2px]">
        &quot;Knowledge belongs to all humanity&quot;
      </span>
    </motion.div>
  );
};

export default Slogan;
