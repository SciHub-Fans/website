"use client";

import { motion } from "framer-motion";
import Title from "./title";
import Link from "next/link";
import { Icons } from "./icons";
import Image from "next/image";

const LineSvg = () => (
  <svg
    width="872"
    height="1"
    viewBox="0 0 872 1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full"
  >
    <g filter="url(#filter0_b_806_72)">
      <line
        y1="0.5"
        x2="872"
        y2="0.5"
        stroke="url(#paint0_linear_806_72)"
        stroke-opacity="0.5"
      />
    </g>
    <defs>
      <filter
        id="filter0_b_806_72"
        x="-16"
        y="-16"
        width="904"
        height="33"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="8" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_806_72"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_806_72"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_806_72"
        x1="0"
        y1="1.5"
        x2="872"
        y2="1.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset="0.51" stop-color="white" />
        <stop offset="1" />
      </linearGradient>
    </defs>
  </svg>
);

const Support = () => {
  return (
    <div className="sci-container relative flex flex-col w-full items-center z-[2] mb-[132px]">
      <svg
        width="256"
        height="175"
        viewBox="0 0 256 175"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M208.384 108.022L182.612 132.605H243.082V159.945H139.766V137.677L186.25 91.6873C186.25 91.6867 186.251 91.6861 186.252 91.6855C195.873 82.0643 201.798 75.5228 205.327 70.2594C208.793 65.0889 209.883 61.2465 209.883 56.9688C209.883 51.3782 207.863 46.8854 204.395 43.7721C200.905 40.64 195.776 38.7539 189.324 38.7539C182.787 38.7539 177.477 40.8952 173.812 44.4617C170.152 48.024 167.984 53.1506 167.984 59.4102V62.0938H138.203V59.5078C138.203 45.4979 143.522 33.6198 152.765 25.2607C161.993 16.9166 174.997 12.1953 190.203 12.1953C205.12 12.1953 217.79 16.4264 226.768 23.9676C235.775 31.5334 240.934 42.3281 240.934 55.1133C240.934 71.4473 232.234 85.1492 208.384 108.022ZM187.664 93.1016L141.766 138.512V157.945H241.082V134.605H179.461V132.848L207 106.578C230.828 83.7266 238.934 70.543 238.934 55.1133C238.934 30.6992 219.305 14.1953 190.203 14.1953C161.134 14.1953 140.924 31.9146 140.222 58.0938C140.209 58.5624 140.203 59.0338 140.203 59.5078V60.0938H165.984V59.4102C165.984 45.9336 175.359 36.7539 189.324 36.7539C202.996 36.7539 211.883 44.7617 211.883 56.9688C211.883 66.4414 206.902 73.8633 187.664 93.1016Z"
          fill="url(#paint0_linear_163_43)"
        />
        <path
          opacity="0.5"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.3985 142.941C17.0518 129.985 12.2266 111.153 12.2266 87.4375C12.2266 63.7222 17.0518 44.8901 26.3985 31.9339C35.8115 18.8858 49.669 12 67.1562 12C84.6903 12 98.5725 18.8842 107.999 31.9328C117.358 44.8895 122.184 63.7224 122.184 87.4375C122.184 111.153 117.358 129.985 107.999 142.942C98.5725 155.991 84.6903 162.875 67.1562 162.875C49.669 162.875 35.8115 155.989 26.3985 142.941ZM41.375 91.0508L89.8125 59.0195C85.8086 44.5664 78.1914 36.9492 67.1562 36.9492C50.457 36.9492 41.375 54.7227 41.375 87.4375V91.0508ZM87.4818 58.1631L43.375 87.3304C43.385 71.156 45.6455 58.9392 49.7846 50.835C53.8719 42.8319 59.7028 38.9492 67.1562 38.9492C72.1622 38.9492 76.319 40.6565 79.7208 43.9924C82.9373 47.1467 85.564 51.8451 87.4818 58.1631ZM44.5977 116.051C48.6016 130.406 56.2188 137.926 67.1562 137.926C83.9531 137.926 93.0352 120.25 93.0352 87.4375V84.0195L44.5977 116.051ZM91.0349 87.74L46.9309 116.906C48.8472 123.17 51.4704 127.82 54.6724 130.939C58.0619 134.241 62.1962 135.926 67.1562 135.926C74.6678 135.926 80.52 132.058 84.6149 124.074C88.7476 116.016 91.007 103.867 91.0349 87.74ZM14.2266 87.4375C14.2266 134.41 33.3672 160.875 67.1562 160.875C101.043 160.875 120.184 134.41 120.184 87.4375C120.184 40.4648 101.043 14 67.1562 14C33.3672 14 14.2266 40.4648 14.2266 87.4375Z"
          fill="url(#paint1_linear_163_43)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_163_43"
            x1="128.973"
            y1="-13.0547"
            x2="128.973"
            y2="186.945"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_163_43"
            x1="128.973"
            y1="-13.0547"
            x2="128.973"
            y2="186.945"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <Title>OFFICIAL SUPPORT</Title>

      <div className="flex flex-col max-w-[968px] md:mt-[60px] gap-[44px] [background:rgba(255,255,255,0.12)] backdrop-blur-[20px] p-6 lg:p-12 rounded-3xl">
        <div className="flex flex-col gap-[24px]">
          <div className="relative w-full h-[200px] md:h-[400px]">
            <Image
              src="/images/scihub-news.png"
              alt="scihub news"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-4 w-full text-xl">
            <div className="text-[#A5A5A5] font-normal leading-[160%]">
              Dec 13, 2024
            </div>
            <div className="self-stretch text-white font-normal leading-[160%]">
              $scihub officially landed on the homepage of Sci-Hub official
              website, with exposure reaching 80 million users worldwide!
            </div>
            <div className="text-[#E32D2D] underline decoration-[#E32D2D]">
                &quot;Sci-Hub is now available as meme coin!&quot;
            </div>
          </div>
          <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex max-w-[336px] justify-center items-center gap-2.5 border px-8 py-4 rounded-[44px] border-solid border-white hover:bg-white hover:text-black transition-colors duration-300"
            >
              <Link href="https://sci-hub.se" target="_blank" className="whitespace-nowrap">
                Sci-Hub official website
              </Link>
              <Icons.buy className="w-6 h-6" />
            </motion.button>
        </div>
        <LineSvg />
        <div className="flex flex-col gap-[24px] lg:gap-[44px] lg:flex-row">
          <div className="lg:hidden lg:flex-1 relative aspect-[4/3]">
            <Image
              src="/images/support.png"
              alt="support"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex-1 flex flex-col gap-4 text-xl">
              <div className="text-[#A5A5A5] font-normal leading-[160%]">
                Nov 20, 2024
              </div>
              <div className="text-white font-normal leading-[160%]">
                $scihub meme token is now officially listed on the Sci-Hub
                website!
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex justify-center items-center gap-2.5 border px-8 py-4 rounded-[44px] border-solid border-white hover:bg-white hover:text-black transition-colors duration-300"
            >
              <Link href="https://sci-hub.se/donate" target="_blank">
                Sci-Hub donate link
              </Link>
              <Icons.buy className="w-6 h-6" />
            </motion.button>
          </div>
          <div className="hidden md:flex flex-1 relative aspect-[4/3]">
            <Image
              src="/images/support.png"
              alt="support"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
