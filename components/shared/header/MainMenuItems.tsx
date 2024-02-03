import React from "react";
import Link from "next/link";

const MainMenuItems = () => {
  const itemStyle = "text-[#2A86E5] text-[18px]";

  return (
    <nav className="hidden gap-7 xl:flex">
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
