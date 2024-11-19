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
              11%
            </span>{" "}
            of 20% total allocation
          </div>
          <div className="flex flex-col gap-1 md:text-right">
            <span className="text-[#E32D2D] text-sm font-bold leading-[160%] opacity-60">
              NEXT DONATION
            </span>
            <span className="text-white text-base font-bold leading-[160%]">
              Dec 16th, 2024
            </span>
          </div>
        </motion.div>

        <ProgressBar isInView={isInView} />

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
