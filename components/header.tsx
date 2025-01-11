import Link from "next/link";
import { Icons } from "./icons";

const Header = () => {
  return (
    <div className="sci-container h-[104px] w-full flex justify-between items-center">
      <div className="flex h-14 justify-center items-center gap-2 [background:rgba(255,255,255,0.12)] backdrop-blur-[20px] p-4 rounded-[215.5px]">
        <Icons.newLogo className="w-7 h-7" />
        <span className="hidden md:inline-block text-white text-center text-base font-normal leading-[160%] lowercase">
          $scihub
        </span>
      </div>
      <div className="flex gap-4">
        <Link
          href="/scihub_paradigm.pdf"
          target="_blank"
          className="flex justify-center items-center [background:rgba(255,255,255,0.12)] hover:[background:rgba(255,255,255,0.2)] backdrop-blur-[20px] p-4 rounded-full transition-all duration-300 cursor-pointer"
        >
          <Icons.whitepaper className="w-6 h-6" />
        </Link>
        <Link
          href="https://forum.scihub.fans"
          target="_blank"
          className="flex justify-center items-center [background:rgba(255,255,255,0.12)] hover:[background:rgba(255,255,255,0.2)] backdrop-blur-[20px] p-4 rounded-full transition-all duration-300 cursor-pointer"
        >
          <Icons.forum className="w-6 h-6" />
        </Link>
        <Link
          href="https://t.me/WTFDeSci"
          target="_blank"
          className="flex justify-center items-center [background:rgba(255,255,255,0.12)] hover:[background:rgba(255,255,255,0.2)] backdrop-blur-[20px] p-4 rounded-full transition-all duration-300 cursor-pointer"
        >
          <Icons.telegram className="w-6 h-6" />
        </Link>
        <Link
          href="https://x.com/SciHubFans"
          target="_blank"
          className="flex justify-center items-center [background:rgba(255,255,255,0.12)] hover:[background:rgba(255,255,255,0.2)] backdrop-blur-[20px] p-4 rounded-full transition-all duration-300 cursor-pointer"
        >
          <Icons.x className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
