import React from "react";
import Link from "next/link";

type IconType = "MOBILE" | "FILTER" | "ANDROID" | "APPLE";

type MenuItemProps = {
  label: string;
  link?: string;
  iconType: IconType;
  className?: string;
};

const Icon = ({ type, className }: { type: IconType; className?: string }) => {
  if (type === "MOBILE")
    return (
      <img src="/icons/mobile.svg" alt="mobile icon" className={className} />
    );
  else if (type === "FILTER")
    return (
      <img src="/icons/filter.svg" alt="filter icon" className={className} />
    );
  else if (type === "ANDROID")
    return (
      <img src="/icons/android.svg" alt="android icon" className={className} />
    );
  else if (type === "APPLE")
    return (
      <img src="/icons/apple.svg" alt="apple  icon" className={className} />
    );
};

const MenuItem = ({
  label,
  link = "/",
  iconType,
  className,
}: MenuItemProps) => {
  return (
    <Link href={link} className={`flex text-sm text-white ${className}`}>
      <Icon type={iconType} className="mr-2" />
      {label}
    </Link>
  );
};
export default MenuItem;
