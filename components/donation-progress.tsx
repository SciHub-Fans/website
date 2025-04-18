"use client";

import { motion, useInView } from "framer-motion";
import Title from "./title";
import { Timeline } from "./timeline";
import { useRef } from "react";
import ProgressBar from "./progress-bar";
import { Icons } from "./icons";
import Link from "next/link";

const DonationProgress = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <div
      ref={ref}
      className="sci-container relative flex flex-col w-full items-center"
    >
      <svg
        width="259"
        height="175"
        viewBox="0 0 259 175"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M171.457 98.1289V73.2305H189.961C196.641 73.2305 201.958 71.399 205.569 68.3649C209.146 65.359 211.203 61.0484 211.203 55.6992C211.203 50.3943 209.192 46.1903 205.667 43.2758C202.1 40.3275 196.808 38.5586 190.059 38.5586C183.502 38.5586 178.203 40.4254 174.469 43.5897C170.753 46.7397 168.435 51.3007 168.03 57.0125L167.898 58.8711H139.253L139.329 56.7973C139.836 43.0802 144.994 31.861 154.025 24.0927C163.031 16.3461 175.693 12.1953 190.937 12.1953C205.579 12.1953 218.055 16.067 226.92 22.9688C235.823 29.9005 240.984 39.8246 240.984 51.5977C240.984 67.2718 232.883 79.4235 219.343 84.161C226.972 85.8926 233.273 89.4104 237.889 94.4911C243.487 100.653 246.453 108.946 246.453 118.688C246.453 131.818 240.763 142.91 230.961 150.675C221.194 158.412 207.444 162.777 191.328 162.777C175.591 162.777 162.245 158.455 152.634 150.581C142.995 142.686 137.257 131.332 136.596 117.612L136.495 115.516H166.121L166.271 117.354C166.713 122.79 169.208 127.172 173.3 130.233C177.427 133.32 183.299 135.145 190.547 135.145C198.301 135.145 204.42 133.239 208.552 130.055C212.631 126.911 214.914 122.422 214.914 116.832C214.914 111.145 212.582 106.555 208.437 103.336C204.242 100.079 198.049 98.1289 190.254 98.1289H171.457ZM214.846 83.3681C229.824 79.9996 238.984 67.9235 238.984 51.5977C238.984 29.332 219.551 14.1953 190.937 14.1953C161.91 14.1953 143.271 29.5918 141.437 54.8711C141.389 55.5311 141.353 56.1978 141.328 56.8711H166.035C166.914 44.4688 176.191 36.5586 190.059 36.5586C204.219 36.5586 213.203 43.9805 213.203 55.6992C213.203 67.5156 204.023 75.2305 189.961 75.2305H173.457V96.1289H190.254C206.465 96.1289 216.914 104.234 216.914 116.832C216.914 129.234 206.66 137.145 190.547 137.145C175.41 137.145 165.254 129.527 164.277 117.516H138.594C138.626 118.189 138.671 118.855 138.729 119.516C140.926 144.734 161.351 160.777 191.328 160.777C222.871 160.777 244.453 143.688 244.453 118.688C244.453 100.314 233.462 87.9109 214.932 85.3968C214.771 85.375 214.609 85.3539 214.447 85.3335C214.326 85.3183 214.204 85.3035 214.082 85.2891V83.5312C214.153 83.5169 214.224 83.5023 214.295 83.4876C214.479 83.449 214.663 83.4092 214.846 83.3681Z"
          fill="url(#paint0_linear_163_50)"
        />
        <path
          opacity="0.5"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.254 142.941C16.9073 129.985 12.082 111.153 12.082 87.4375C12.082 63.7222 16.9073 44.8901 26.254 31.9339C35.667 18.8858 49.5245 12 67.0117 12C84.5458 12 98.428 18.8842 107.854 31.9328C117.214 44.8895 122.039 63.7224 122.039 87.4375C122.039 111.153 117.214 129.985 107.854 142.942C98.428 155.991 84.5458 162.875 67.0117 162.875C49.5245 162.875 35.667 155.989 26.254 142.941ZM41.2305 91.0508L89.668 59.0195C85.6641 44.5664 78.0469 36.9492 67.0117 36.9492C50.3125 36.9492 41.2305 54.7227 41.2305 87.4375V91.0508ZM87.3372 58.1631L43.2305 87.3304C43.2404 71.156 45.501 58.9392 49.64 50.835C53.7274 42.8319 59.5583 38.9492 67.0117 38.9492C72.0176 38.9492 76.1744 40.6565 79.5762 43.9924C82.7928 47.1467 85.4195 51.8451 87.3372 58.1631ZM44.4531 116.051C48.457 130.406 56.0742 137.926 67.0117 137.926C83.8086 137.926 92.8906 120.25 92.8906 87.4375V84.0195L44.4531 116.051ZM90.8904 87.74L46.7863 116.906C48.7027 123.17 51.3258 127.82 54.5279 130.939C57.9174 134.241 62.0516 135.926 67.0117 135.926C74.5233 135.926 80.3754 132.058 84.4704 124.074C88.603 116.016 90.8625 103.867 90.8904 87.74ZM14.082 87.4375C14.082 134.41 33.2227 160.875 67.0117 160.875C100.898 160.875 120.039 134.41 120.039 87.4375C120.039 40.4648 100.898 14 67.0117 14C33.2227 14 14.082 40.4648 14.082 87.4375Z"
          fill="url(#paint1_linear_163_50)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_163_50"
            x1="128.828"
            y1="-13.0547"
            x2="128.828"
            y2="186.945"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_163_50"
            x1="128.828"
            y1="-13.0547"
            x2="128.828"
            y2="186.945"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <Title>DONATION PROGRESS</Title>

      <div className="flex flex-col w-full gap-8 mt-[60px] items-center gap-6 [background:rgba(255,255,255,0.12)] backdrop-blur-[20px] px-4 py-6 md:px-8 md:py-10 rounded-3xl">
        <motion.div
          className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-white text-[18px] md:text-[22px] font-bold leading-[160%]">
            <span className="text-[#E32D2D] text-[20px] md:text-[32px]">
              16%
            </span>{" "}
            of 20% total allocation
          </div>
          <div className="flex flex-col gap-1 md:text-right">
            <span className="text-[#E32D2D] text-sm font-bold leading-[160%] opacity-60">
              NEXT DONATION
            </span>
            <span className="text-white text-base font-bold leading-[160%]">
              May 16, 2025
            </span>
          </div>
        </motion.div>

        <ProgressBar current={16} total={20} isInView={isInView} />

        <motion.div
          className="hidden md:flex w-full h-auto relative"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col justify-center items-start gap-3 flex-[1_0_0] bg-[#323232] backdrop-blur-[20px] p-8 rounded-2xl transition-all duration-300 hover:bg-[#3a3a3a] hover:scale-[1.02] hover:shadow-lg cursor-pointer">
            <div className="w-full flex justify-between items-start gap-3 flex-[1_0_0]">
              <div className="self-stretch text-white text-2xl font-bold leading-[160%] uppercase">
                Donation plan
              </div>
              <Link
                href="https://x.com/lookonchain/status/1858170953425121547"
                target="_blank"
                className="flex flex-col items-start [background:#1F1F1F] p-2 rounded-lg"
              >
                <Icons.x className="w-4 h-4" />
              </Link>
            </div>
            <div className="self-stretch text-[#A5A5A5] text-sm font-normal leading-[160%]">
              The $scihub community has committed to a historic 20% $scihub
              donation plan in collaboration with Alexandra Elbakyan, the
              founder of Sci-Hub.
              <ul className="list-disc [&>li::marker]:text-[#E32D2D]">
                <ol>
                  <span className="text-[#E32D2D]">Total Commitment</span>: 200
                  million $scihub tokens, representing 20% of the total supply,
                  will be donated to support Sci-Hub&apos;s mission.
                </ol>
                <ol>
                  <span className="text-[#E32D2D]">Initial Donation</span>: 110
                  million tokens (11% of total supply) have already been
                  transferred to Alexandra Elbakyan&apos;s wallet.
                </ol>
                <ol>
                  <span className="text-[#E32D2D]">Monthly Contributions</span>:
                  Starting{" "}
                  <span className="text-[#E32D2D]">December 16, 2024</span>, to
                  commemorate the birth of $scihub, the community will donate{" "}
                  <span className="text-[#E32D2D]">1% of the supply</span> (10
                  million tokens) every month for the next{" "}
                  <span className="text-[#E32D2D]">9 months</span>, totaling{" "}
                  <span className="text-[#E32D2D]">90 million tokens</span>.
                </ol>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="block md:hidden w-full h-auto relative flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col justify-center items-start gap-3 flex-[1_0_0] bg-[#323232] backdrop-blur-[20px] p-8 rounded-2xl">
            <div className="self-stretch text-white text-2xl font-bold leading-[160%] uppercase">
              previous
            </div>
            <div className="self-stretch text-[#A5A5A5] text-sm font-normal leading-[160%]">
              @0xAA_Science represents the $scihub community and has reached a
              20% $scihub donation plan with Alexandra Elbakyan (founder of
              Sci-Hub, @ringo_ring). In total, 200 million $scihub tokens will
              be donated, accounting for 20% of the total circulation. Alexandra
              has committed to selling a maximum of 1% (10 million tokens) per
              month and actively supporting the development of $scihub.
            </div>
          </div>
          <div className="bg-[#323232] backdrop-blur-[20px] p-8 rounded-2xl">
            <div className="self-stretch text-white text-2xl font-bold leading-[160%] uppercase">
              MONTHLY PLAN
            </div>
            <div className="self-stretch text-[#A5A5A5] text-sm font-normal leading-[160%]">
              1% of total supply donated monthly to support Sci-Hub&apos;s
              mission of making knowledge accessible to everyone.
            </div>
          </div>
          <div className="bg-[#323232] backdrop-blur-[20px] p-8 rounded-2xl">
            <div className="self-stretch text-white text-2xl font-bold leading-[160%] uppercase">
              DONATION SCHEDULE
            </div>
            <div className="self-stretch text-[#A5A5A5] text-sm font-normal leading-[160%]">
              Fixed schedule: 16th of each month. Transparent and verifiable
              on-chain transactions.
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-white text-center text-[32px] md:text-[40px] font-bold leading-[160%] md:mt-11 md:mt-16 mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          DONATION TIMELINE
        </motion.div>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Timeline />
        </motion.div>
      </div>
    </div>
  );
};

export default DonationProgress;
