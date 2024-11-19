"use client";

import { motion } from "framer-motion";
import Title from "./title";

const SECTIONS = [
  {
    title: "What is Sci-Hub",
    description:
      "Born from Alexandra Elbakyan’s fight against unfair paywalls on knowledge, Sci-Hub is nothing short of revolutionary. It shattered barriers, rewrote the rules of access to scientific literature, and took on the giants of copyright laws. A beacon of hope, it stands tall as a symbol of free knowledge for everyone.",
  },
  {
    title: "Donation to Sci-Hub",
    description:
      "The $scihub community has proudly pledged 20% of the total token supply to Sci-Hub, significantly supporting its mission to democratize knowledge. This historic donation ensures sustained funding, empowering Sci-Hub to continue its revolutionary work in advancing open science.",
  },
  {
    title: "DeSci Community",
    description:
      "The $scihub DeSci community is a global movement inspired by Sci-Hub, dedicated to decentralizing science and democratizing knowledge for all. By empowering researchers, funding open access initiatives, and revolutionizing the way science is shared, this community aims to create a more equitable and accessible scientific landscape. 🚀 ",
  },
];

const Card = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.2 },
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.2, // 每个卡片延迟0.2秒
      }}
      className="flex flex-col p-10 gap-3 items-start [background:rgba(255,255,255,0.12)] backdrop-blur p-10 rounded-3xl"
    >
      <div className="self-stretch text-white text-[22px] font-bold leading-[160%]">
        {title}
      </div>
      <p className="self-stretch text-[#A5A5A5] text-sm font-normal leading-[160%]">
        {description}
      </p>
    </motion.div>
  );
};

const Introduce = () => {
  return (
    <div className="sci-container relative flex flex-col w-full items-center z-[2]">
      <svg
        width="260"
        height="175"
        viewBox="0 0 260 175"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.172 142.941C16.8253 129.985 12 111.153 12 87.4375C12 63.7222 16.8253 44.8901 26.172 31.9339C35.585 18.8858 49.4424 12 66.9297 12C84.4637 12 98.346 18.8842 107.772 31.9328C117.132 44.8895 121.957 63.7224 121.957 87.4375C121.957 111.153 117.132 129.985 107.772 142.942C98.346 155.991 84.4637 162.875 66.9297 162.875C49.4424 162.875 35.585 155.989 26.172 142.941ZM41.1484 91.0508L89.5859 59.0195C85.582 44.5664 77.9648 36.9492 66.9297 36.9492C50.2305 36.9492 41.1484 54.7227 41.1484 87.4375V91.0508ZM87.2552 58.1631L43.1485 87.3304C43.1584 71.156 45.4189 58.9392 49.558 50.835C53.6454 42.8319 59.4762 38.9492 66.9297 38.9492C71.9356 38.9492 76.0924 40.6565 79.4942 43.9924C82.7107 47.1467 85.3375 51.8451 87.2552 58.1631ZM44.3711 116.051C48.375 130.406 55.9922 137.926 66.9297 137.926C83.7266 137.926 92.8086 120.25 92.8086 87.4375V84.0195L44.3711 116.051ZM90.8083 87.74L46.7043 116.906C48.6206 123.17 51.2438 127.82 54.4458 130.939C57.8354 134.241 61.9696 135.926 66.9297 135.926C74.4413 135.926 80.2934 132.058 84.3884 124.074C88.521 116.016 90.7805 103.867 90.8083 87.74ZM14 87.4375C14 134.41 33.1406 160.875 66.9297 160.875C100.816 160.875 119.957 134.41 119.957 87.4375C119.957 40.4648 100.816 14 66.9297 14C33.1406 14 14 40.4648 14 87.4375Z"
          fill="url(#paint0_linear_163_28)"
        />
        <path
          opacity="0.5"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M245.227 157.896V134.752H209.191V16.9785H182.043L143.957 42.4668V68.6387L180.285 44.5176H182.043V134.752H144.055V157.896H245.227ZM180.043 132.752V47.0791L141.957 72.3674V41.3987L181.435 14.9785H211.191V132.752H247.227V159.896H142.055V132.752H180.043Z"
          fill="url(#paint1_linear_163_28)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_163_28"
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
            id="paint1_linear_163_28"
            x1="128.723"
            y1="-13.1035"
            x2="128.723"
            y2="186.896"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <Title>DECENTRALIZED SCIENCE</Title>

      <div className="flex flex-col md:flex-row gap-8 mt-[60px]">
        {SECTIONS.map((section, index) => (
          <Card
            key={index}
            title={section.title}
            description={section.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Introduce;
