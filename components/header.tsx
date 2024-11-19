import { Icons } from "./icons";

const Header = () => {
  return (
    <div className="h-[104px] w-full flex justify-between items-center">
      <div className="flex h-14 justify-center items-center gap-2.5 [background:rgba(255,255,255,0.12)] backdrop-blur-[20px] px-8 py-4 rounded-[215.5px]">
        $scihub
      </div>
      <div className="flex gap-4">
        <div className="flex justify-center items-center [background:rgba(255,255,255,0.12)] backdrop-blur-[20px] p-4 rounded-full">
          <Icons.telegram className="w-6 h-6" />
        </div>
        <div className="flex justify-center items-center [background:rgba(255,255,255,0.12)] backdrop-blur-[20px] p-4 rounded-full">
          <Icons.x className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Header;
