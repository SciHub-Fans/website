import { Icons } from "./icons";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-full bg-[url('/footer-background.png')] bg-cover bg-no-repeat flex flex-col"
    >
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col justify-center items-start gap-3 flex-[1_0_0] backdrop-blur-[20px] p-6 md:p-12">
          <div className="text-[#E32D2D] text-sm font-bold leading-[160%]">
            ABOUT $SCIHUB
          </div>
          <div className="self-stretch text-white text-base font-normal leading-[160%]">
            $scihub is a community meme token supporting open science and DeSci.
            Not affliated with Sci-Hub.
          </div>
          <div className="flex gap-4 mt-6">
            <div className="flex justify-center items-center [background:rgba(255,255,255,0.12)] backdrop-blur-[20px] p-4 rounded-full">
              <Icons.telegram className="w-5 h-5" />
            </div>
            <div className="flex justify-center items-center [background:rgba(255,255,255,0.12)] backdrop-blur-[20px] p-4 rounded-full">
              <Icons.x className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-3 flex-[1_0_0] backdrop-blur-[20px] p-6 md:p-12">
          <div className="text-[#E32D2D] text-sm font-bold leading-[160%]">
            RESOURCES
          </div>
          <div className="text-white text-base font-normal leading-[160%]">
            Documentation
          </div>
          <div className="text-white text-base font-normal leading-[160%]">
            Smart Contract
          </div>
          <div className="text-white text-base font-normal leading-[160%]">
            Official Donation
          </div>
        </div>
      </div>
      <div className="text-[#E32D2D] text-base font-bold leading-[160%] py-4 px-6 md:px-0 text-center">
        © 2024 $scihub. Building the future of DeScience.
      </div>
    </footer>
  );
};

export default Footer;
