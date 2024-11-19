"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Disclaimer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="flex w-full flex-col gap-2 justify-center [background:rgba(227,45,45,0.12)] backdrop-blur px-4 md:px-8 lg:px-16 xl:px-60 py-6 border-y-black border-t border-solid border-b mb-[94px] md:mb-[144px]"
    >
      <div className="sci-container">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#E32D2D]"
        >
          DISCLAIMER:
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-1 pl-8"
        >
          <ol className="list-decimal">
            <li>
              $scihub is a community meme token.
            </li>
            <li>
              $scihub is not an official Sci-Hub token, is not affiliated with
              Sci-Hub, and does not own Sci-Hub.
            </li>
            <li>
              The price of meme tokens fluctuates greatly and your investment
              may be at great risk.
            </li>
          </ol>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Disclaimer;
