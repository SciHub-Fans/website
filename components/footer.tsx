import Link, { LinkProps } from "next/link";
import TextBorderAnimation from "./animata/text/text-border-animation";
import { Icons } from "./icons";

const FooterLink = ({
  text,
  ...props
}: { text: string } & LinkProps & { target?: string }) => {
  return (
    <Link {...props}>
      <TextBorderAnimation
        text={text}
        className="text-white text-base font-normal leading-[160%]"
      />
    </Link>
  );
};

const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-full bg-[url('/images/footer-background.png')] bg-cover bg-no-repeat flex flex-col mt-[120px]"
    >
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col items-start gap-3 flex-[1_0_0] backdrop-blur-[20px] p-6 md:p-12">
          <div className="text-[#E32D2D] text-sm font-bold leading-[160%]">
            ABOUT $SCIHUB
          </div>
          <div className="self-stretch text-white text-base font-normal leading-[160%]">
            $scihub is a community meme token supporting open science and DeSci.
            Not affliated with Sci-Hub.
          </div>
          <div className="flex gap-4 mt-6">
            <Link
              href="https://t.me/WTFDeSci"
              target="_blank"
              className="flex justify-center items-center [background:rgba(255,255,255,0.12)] backdrop-blur-[20px] p-4 rounded-full"
            >
              <Icons.telegram className="w-5 h-5" />
            </Link>
            <Link
              href="https://x.com/SciHubFans"
              target="_blank"
              className="flex justify-center items-center [background:rgba(255,255,255,0.12)] backdrop-blur-[20px] p-4 rounded-full"
            >
              <Icons.x className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start gap-3 flex-[1_0_0] backdrop-blur-[20px] p-6 md:p-12">
          <div className="text-[#E32D2D] text-sm font-bold leading-[160%]">
            RESOURCES
          </div>
          <FooterLink
            href="https://sci-hub.se/"
            target="_blank"
            text="Sci-Hub Website"
          />
          <FooterLink
            href="https://solscan.io/token/GxdTh6udNstGmLLk9ztBb6bkrms7oLbrJp5yzUaVpump"
            target="_blank"
            text="Contract Address"
          />
          <FooterLink
            href="https://solscan.io/account/Cfy5rFwmU2fe43YbR79F1Nsm1REZ9DurQ3aoKhP6ANgt"
            target="_blank"
            text="$scihub Foundation"
          />
        </div>
      </div>
      <div className="text-[#E32D2D] text-base font-bold leading-[160%] py-4 px-6 md:px-0 text-center">
        © 2024 $scihub. Building the future of DeScience.
      </div>
    </footer>
  );
};

export default Footer;
