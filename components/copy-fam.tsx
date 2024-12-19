"use client";

import { Copy } from "lucide-react";
import Title from "./title";
import { useCopy } from "@/hooks/use-copy";

const ThreeSVG = () => {
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
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_163_59"
          x1="128.746"
          y1="-13.0547"
          x2="128.746"
          y2="186.945"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const CopyFam = () => {
  const { copied, copy } = useCopy();

  return (
    <div className="sci-container relative flex flex-col w-full items-center mt-32">
      <ThreeSVG />
      <Title>JOIN THE FAM</Title>

      <div className="mt-[60px] w-full md:w-auto flex flex-col md:flex-row justify-center items-center gap-6 [background:rgba(255,255,255,0.12)] backdrop-blur-[5px] px-12 py-8 rounded-3xl">
        <span className="text-white text-[22px] font-bold leading-[160%] uppercase">
          Wear the Signal:{" "}
        </span>
        <span>‍🐦‍⬛🔑</span>
        <button
          className="flex justify-center items-center gap-2.5 border px-8 py-4 rounded-[44px] border-solid border-white"
          onClick={() => copy("‍🐦‍⬛🔑")}
        >
          <span className={copied ? "text-[#09C327]" : ""}>
            {copied ? "Copied!" : "Copy"}
          </span>
          <Copy className="w-4 h-4 transition-transform group-hover:scale-110 text-[#E32D2D]" />
        </button>
      </div>
    </div>
  );
};

export default CopyFam;
