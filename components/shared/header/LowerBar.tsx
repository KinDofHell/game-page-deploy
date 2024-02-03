import React from "react";
import Search from "@/components/shared/header/Search";
import MainMenuItems from "@/components/shared/header/MainMenuItems";
import MobileMenu from "@/components/shared/header/MobileMenu";

const LowerBar = () => {
  return (
    <div className="flex justify-center py-4 font-medium px-5 xl:py-[30px] bg-white">
      <div className="inner-wrapper flex justify-between">
        <div className="flex items-center gap-16">
          <img
            src="/images/logo.png"
            alt="logotype"
            className="w-[134px] h-[18px]"
          />
          <MainMenuItems />
        </div>
        <div className="hidden xl:block">
          <Search placeholder="Search for..." />
        </div>
        <MobileMenu />
      </div>
    </div>
  );
};
export default LowerBar;
