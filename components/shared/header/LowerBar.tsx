import React, { Dispatch, SetStateAction } from "react";
import Search from "@/components/shared/header/Search";
import MainMenuItems from "@/components/shared/header/MainMenuItems";
import MobileMenu from "@/components/shared/header/MobileMenu";

const LowerBar = ({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex justify-center py-4 font-medium px-[15px] md:px-5 xl:py-[30px] bg-white dark:bg-main-dark">
      <div className="inner-wrapper flex justify-between">
        <div className="flex items-center gap-16">
          <h2 className="text-[30px] dark:text-white">LOGOTYPE</h2>
          <div className="hidden xl:block">
            <MainMenuItems />
          </div>
        </div>
        <div className="hidden xl:block">
          <Search placeholder="Search for..." />
        </div>
        <MobileMenu opened={opened} setOpened={setOpened} />
      </div>
    </div>
  );
};
export default LowerBar;
