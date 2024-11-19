import Link from "next/link";
import { Icons } from "./icons";

const Header = () => {
  return (
    <div className="sci-container h-[104px] w-full flex justify-between items-center">
      <div className="flex h-14 justify-center items-center gap-2.5 [background:rgba(255,255,255,0.12)] hover:[background:rgba(255,255,255,0.2)] backdrop-blur-[20px] px-8 py-4 rounded-[215.5px] transition-all duration-300 cursor-pointer">
        $scihub
      </div>
      <div className="flex gap-4">
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
