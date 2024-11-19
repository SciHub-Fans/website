"use client"

import { motion } from "framer-motion";

const LeftCircle = () => {
  return <svg width="299" height="598" viewBox="0 0 299 598" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle opacity="0.4" cy="299" r="298.5" stroke="white"/>
  <circle opacity="0.3" cy="299" r="264.5" stroke="white"/>
  <circle opacity="0.2" cy="299" r="227.5" stroke="white"/>
    </svg>
};

const RightCircle = () => {
  return <svg width="299" height="598" viewBox="0 0 299 598" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle opacity="0.4" cx="299" cy="299" r="298.5" stroke="white"/>
  <circle opacity="0.3" cx="299" cy="299" r="264.5" stroke="white"/>
  <circle opacity="0.2" cx="299" cy="299" r="227.5" stroke="white"/>
  </svg>  
};

const Slogan = () => {
  return (
    <div className="relative w-full">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -z-[1]">
        <LeftCircle />
      </div>
      
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

      <div className="absolute right-0 top-1/2 -translate-y-1/2 -z-[1]">
        <RightCircle />
      </div>
    </div>
  );
};

export default Slogan;
