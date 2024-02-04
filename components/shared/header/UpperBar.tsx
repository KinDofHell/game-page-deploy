import React from "react";
import MenuItem from "@/components/shared/header/MenuItem";
import SocialIcon from "@/components/shared/SocialIcon";
import Link from "next/link";
import ThemeSwitcher from "@/components/shared/header/ThemeSwitcher";

const UpperBar = () => {
  return (
    <div
      className={`bg-gradient-blue flex items-center justify-center p-3 px-[20px] xl:px-3`}
    >
      <div className="inner-wrapper flex items-center justify-between">
        <nav className="hidden md:flex gap-6 text-white">
          <MenuItem label="Menu item 1" iconType="MOBILE" />
          <MenuItem label="Menu item 2" iconType="FILTER" />
          <MenuItem label="Menu item 3" iconType="ANDROID" />
          <MenuItem
            label="Menu item 4"
            iconType="APPLE"
            className="hidden xl:flex"
          />
        </nav>
        <div className="flex gap-8 justify-between w-full md:justify-start md:w-auto">
          <div className="flex items-center gap-6 w-full">
            <Link href="/">
              <SocialIcon type="FACEBOOK" />
            </Link>
            <Link href="/">
              <SocialIcon type="TWITTER" />
            </Link>
            <Link href="/">
              <SocialIcon type="INSTAGRAM" />
            </Link>
            <Link href="/">
              <SocialIcon type="YOUTUBE" />
            </Link>
            <Link href="/">
              <SocialIcon type="GMAIL" />
            </Link>
            <Link href="/">
              <SocialIcon type="NOTIFICATION" />
            </Link>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};
export default UpperBar;
