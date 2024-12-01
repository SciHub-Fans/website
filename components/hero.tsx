"use client";

import { Copy } from "lucide-react";
import { motion } from "framer-motion";
import { Icons } from "./icons";
import AnimatedText from "./animated-text";
import { shortenAddress } from "@/lib/utils";
import { useCopy } from "@/hooks/use-copy";
import Link from "next/link";

const Hero = () => {
  const { copied, copy } = useCopy();
  const contractAddress = "GxdTh6udNstGmLLk9ztBb6bkrms7oLbrJp5yzUaVpump";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sci-container flex flex-col items-center justify-center gap-8 h-[calc(100vh-104px)]"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Icons.logo className="w-16 h-16" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="self-stretch text-white text-center text-sm md:text-lg font-normal leading-[160%]"
      >
        Supporting the rebellion against paywalled knowledge.
        <br />
        Every $scihub token is a vote for open science.
      </motion.p>

      <AnimatedText />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-white text-center inline-flex items-center gap-2 mb-8 group cursor-pointer"
        onClick={() => copy(contractAddress)}
      >
        <span className="text-white text-center text-base font-normal leading-[160%] opacity-60">
          Contract:
        </span>
        <span className="hidden md:block text-base font-normal leading-[160%]">
          {contractAddress}
        </span>
        <span className="md:hidden text-base font-normal leading-[160%]">
          {shortenAddress(contractAddress)}
        </span>
        {copied ? (
          <span className="text-green-500 text-sm">Copied!</span>
        ) : (
          <Copy className="w-4 h-4 transition-transform group-hover:scale-110 text-[#E32D2D]" />
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col md:flex-row gap-3 md:gap-6 w-full md:w-auto md:mx-auto"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex justify-center items-center gap-2.5 self-stretch [background:rgba(255,255,255,0.16)] hover:bg-white/25 backdrop-blur-[20px] px-8 py-4 rounded-[44px] transition-colors duration-300"
        >
          <Link
            href="https://t.me/WTFDeSci"
            target="_blank"
            className="text-white text-center text-base font-normal leading-[160%]"
          >
            Join Community
          </Link>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex justify-center items-center gap-2.5 self-stretch [background:rgba(255,255,255,0.16)] hover:bg-white/25 backdrop-blur-[20px] px-8 py-4 rounded-[44px] transition-colors duration-300"
        >
          <Link
            href="https://forum.scihub.fans"
            target="_blank"
            className="text-white text-center text-base font-normal leading-[160%]"
          >
            Go to Forum
          </Link>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex justify-center items-center gap-2.5 self-stretch border px-8 py-4 rounded-[44px] border-solid border-white hover:bg-white hover:text-black transition-colors duration-300"
        >
          <Link
            href="https://gmgn.ai/sol/token/GxdTh6udNstGmLLk9ztBb6bkrms7oLbrJp5yzUaVpump"
            target="_blank"
          >
            Buy $scihub
          </Link>
          <Icons.buy className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
