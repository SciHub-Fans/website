"use client";

import { motion } from "framer-motion";
import { Icons } from "./icons";

const ProgressBar = ({
  current,
  total,
  isInView,
}: {
  current: number;
  total: number;
  isInView: boolean;
}) => {
  const percentage = Math.min(100, (current / total) * 100);

  return (
    <div className="relative w-full h-[14px] bg-white/20 rounded-full">
      <motion.div
        className="absolute top-0 left-0 bg-[#E32D2D] h-full rounded-full"
        initial={{ width: "0%" }}
        animate={isInView ? { width: `${percentage}%` } : { width: "0%" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.div
        className="absolute top-[7px] left-0"
        initial={{
          left: 0,
          y: -30,
          rotate: 90,
          opacity: 0,
        }}
        animate={
          isInView
            ? {
                left: `${percentage}%`,
                y: -40,
                rotate: 0,
                opacity: 1,
              }
            : {
                left: 0,
                y: 0,
                rotate: 90,
                opacity: 0,
              }
        }
        style={{
          translateX: "-50%",
          transformOrigin: "center center", // 设置旋转中心点在底部中心
        }}
        transition={{
          left: {
            duration: 1.2,
            ease: "easeOut",
          },
          y: {
            delay: 1.2,
            duration: 0.4,
            ease: "backOut",
          },
          rotate: {
            delay: 1.2,
            duration: 0.4,
            ease: "backOut",
          },
        }}
        whileHover={{
          rotate: [-2, 2, -2],
          transition: {
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <Icons.crow
          className="w-[37px] h-[68px]"
          style={{
            transformOrigin: "center bottom",
            display: "block", // 确保图标正确定位
          }}
        />
      </motion.div>
    </div>
  );
};

export default ProgressBar;
