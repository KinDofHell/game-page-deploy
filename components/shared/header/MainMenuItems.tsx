import React from "react";
import Link from "next/link";

const MainMenuItems = () => {
  const itemStyle = "text-[#2A86E5] text-[18px]";

  return (
    <nav className="flex gap-[60px] xl:gap-7 flex-col items-center xl:flex-row mt-[75px] xl:mt-0">
      <Link href="/" className={itemStyle}>
        Item
      </Link>
      <Link href="/" className={itemStyle}>
        Item
      </Link>
      <Link href="/" className={itemStyle}>
        Item
      </Link>
      <Link href="/" className={itemStyle}>
        Item
      </Link>
      <Link href="/" className={itemStyle}>
        Item
      </Link>
      <Link href="/" className={itemStyle}>
        Item
      </Link>
      <Link href="/" className={itemStyle}>
        Item
      </Link>
      <Link href="/" className={itemStyle}>
        Item
      </Link>
    </nav>
  );
};
export default MainMenuItems;
