"use client";

import useBreakpoint from "@/hooks/use-breakpiont";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

const AnimatedText = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  const breakpoint = useBreakpoint();

  const offset = breakpoint === "sm" ? 3 : breakpoint === "md" ? 6 : 7;

  const getSlideDistance = () => {
    if (containerRef.current && slideRef.current) {
      return (
        containerRef.current.offsetWidth -
        slideRef.current.offsetWidth -
        offset * 2
      );
    }
    return 0;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full inline-flex shrink-0 text-[20px] md:text-[44px] lg:text-[58px] xl:text-[80px] [background:rgba(255,255,255,0.12)] backdrop-blur-[20px] rounded-full items-center px-[32px] py-[22px] md:px-[69px] md:py-[48px] lg:px-[108px] lg:py-[64px] xl:py-[54px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-white [-webkit-text-stroke-width:1] [-webkit-text-stroke-color:#FFF] font-normal leading-[normal]">
        $scihub
      </span>
      <motion.div
        ref={slideRef}
        className="absolute left-[3px] md:left-[6px] px-[22px] py-[20px] md:px-[67px] md:py-[42px] lg:px-[64px] lg:py-[57px] xl:py-[46px] lg:left-[7px] bg-black backdrop-blur-[20px] rounded-full flex items-center justify-center"
        animate={{
          x: isHovered ? getSlideDistance() : 0,
        }}
        transition={{
          type: "tween", // 改用 tween 类型实现线性过渡
          duration: 0.3, // 设置过渡时长为 0.3 秒
          ease: "easeInOut", // 添加缓动函数使动画更平滑
        }}
      >
        <span className="text-white [-webkit-text-stroke-width:1] [-webkit-text-stroke-color:#FFF] font-normal leading-[normal] uppercase">
          UNLOCK SCIENCE
        </span>
      </motion.div>
    </div>
  );
};

export default AnimatedText;
