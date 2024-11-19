"use client";

import Title from "./title";
import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FourSVG = () => {
  return (
    <svg
      width="261"
      height="175"
      viewBox="0 0 261 175"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.5"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M201.695 157.945H227.672V131.285H246.422V109.02H227.281V72.9844H202.574V108.531H168.199V106.773L209.605 17.0273H181.578L138.707 109.02V131.285H201.695V157.945ZM199.695 133.285V159.945H229.672V133.285H248.422V107.02H229.281V70.9844H200.574V106.531H170.514L212.731 15.0273H180.304L136.707 108.576V133.285H199.695Z"
        fill="url(#paint0_linear_163_59)"
      />
      <path
        opacity="0.5"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.172 142.941C16.8253 129.985 12 111.153 12 87.4375C12 63.7222 16.8253 44.8901 26.172 31.9339C35.585 18.8858 49.4424 12 66.9297 12C84.4637 12 98.346 18.8842 107.772 31.9328C117.132 44.8895 121.957 63.7224 121.957 87.4375C121.957 111.153 117.132 129.985 107.772 142.942C98.346 155.991 84.4637 162.875 66.9297 162.875C49.4424 162.875 35.585 155.989 26.172 142.941ZM41.1484 91.0508L89.5859 59.0195C85.582 44.5664 77.9648 36.9492 66.9297 36.9492C50.2305 36.9492 41.1484 54.7227 41.1484 87.4375V91.0508ZM87.2552 58.1631L43.1485 87.3304C43.1584 71.156 45.4189 58.9392 49.558 50.835C53.6454 42.8319 59.4762 38.9492 66.9297 38.9492C71.9356 38.9492 76.0924 40.6565 79.4942 43.9924C82.7107 47.1467 85.3375 51.8451 87.2552 58.1631ZM44.3711 116.051C48.375 130.406 55.9922 137.926 66.9297 137.926C83.7266 137.926 92.8086 120.25 92.8086 87.4375V84.0195L44.3711 116.051ZM90.8083 87.74L46.7043 116.906C48.6206 123.17 51.2438 127.82 54.4458 130.939C57.8354 134.241 61.9696 135.926 66.9297 135.926C74.4413 135.926 80.2934 132.058 84.3884 124.074C88.521 116.016 90.7805 103.867 90.8083 87.74ZM14 87.4375C14 134.41 33.1406 160.875 66.9297 160.875C100.816 160.875 119.957 134.41 119.957 87.4375C119.957 40.4648 100.816 14 66.9297 14C33.1406 14 14 40.4648 14 87.4375Z"
        fill="url(#paint1_linear_163_59)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_163_59"
          x1="128.746"
          y1="-13.0547"
          x2="128.746"
          y2="186.945"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_163_59"
          x1="128.746"
          y1="-13.0547"
          x2="128.746"
          y2="186.945"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-start gap-3 self-stretch [background:rgba(255,255,255,0.12)] backdrop-blur-[20px] p-8 rounded-2xl w-full">
      <div
        className="flex items-center gap-3 self-stretch cursor-pointer text-white text-[22px] font-bold leading-[160%]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.span
          animate={{ rotate: isOpen ? 90 : 0 }}
          className="text-[#E32D2D]"
        >
          &gt;
        </motion.span>
        {question}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="self-stretch text-sm font-normal leading-[160%] overflow-hidden"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const items = [
  {
    question: "What is $SCIHUB?",
    answer: (
      <div className="flex flex-col gap-8">
        <p className="text-[#A5A5A5]">
          Originally launched by an anonymous developer on the Pump.fun platform
          on the Solana network, the $scihub meme token was quickly discovered
          and embraced by the community. In a remarkable{" "}
          <span className="text-[#E32D2D]">community-takeover</span>, influencer
          0xAA from the $scihub community decided to donate{" "}
          <span className="text-[#E32D2D]">20% of the total supply</span> to
          Sci-Hub’s founder, Alexandra Elbakyan, to support her exceptional
          contributions to open science.
        </p>
        <p className="text-[#A5A5A5]">
          This donation plan is still ongoing, demonstrating the community’s
          commitment to empowering decentralized science. Moving forward, the
          $scihub community is set to become the{" "}
          <span className="text-[#E32D2D]">
            most influential DeSci community
          </span>
          , driving innovation and knowledge accessibility for all. 🚀✨
        </p>
      </div>
    ),
  },
  {
    question: "Donation Plan",
    answer: (
      <div className="flex flex-col gap-8">
        <p className="text-[#A5A5A5]">
          The $scihub community has committed to donating 20% of the total token
          supply to Sci-Hub founder Alexandra Elbakyan in recognition of her
          outstanding contributions to open science.
        </p>

        <div className="text-[#A5A5A5] flex flex-col gap-2">
          <p className="">💡 Key Details:</p>
          <ul className="list-decimal pl-6">
            <li>
              Initial Donation: 11% of the total supply (110,000,000 tokens) has
              already been donated.
            </li>
            <li>
              Monthly Contributions: Starting December 16, 2024, an additional
              1% of the total supply (10,000,000 tokens) will be donated every
              month for 9 months.
            </li>
            <li>
              Flexible Selling Terms: Alexandra will not sell more than 1% of
              the tokens monthly unless the token value drops below $20,000 for
              that amount, allowing flexibility to support Sci-Hub operations
              effectively.
            </li>
          </ul>
        </div>

        <p className="text-[#A5A5A5]">
          This structured donation ensures sustainable support for Sci-Hub while
          maintaining trust and stability within the $scihub community.
          Together, we are funding the future of open science! 🚀✨
        </p>
      </div>
    ),
  },
  {
    question: "Relationship with Sci-Hub",
    answer: (
      <div>
        <p className="text-[#A5A5A5]">
          $scihub community has established a donation relationship with the
          founder of Sci-Hub platform, Alexandra Elbakyan, committing 20% of the
          total token supply to be donated through a staged approach. $scihub is
          not Sci-Hub’s official token, is not affiliated to Sci-Hub, and does
          not own Sci-Hub.
        </p>
      </div>
    ),
  },
];
const FAQ = () => {
  return (
    <div className="sci-container relative flex flex-col w-full items-center mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <FourSVG />
      </motion.div>

      <Title>FAQ</Title>

      <div className="mt-[60px] flex flex-col gap-4 w-full">
        {items.map((item, index) => (
          <motion.div
            key={item.question}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
          >
            <FAQItem question={item.question} answer={item.answer} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
