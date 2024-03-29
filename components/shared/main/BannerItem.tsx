"use client";

import React, { useState } from "react";
import Link from "next/link";

const BannerItem = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClickButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-3 flex justify-center xl:justify-start flex-col xl:flex-row">
      <button
        className="flex items-center justify-center gap-3.5 xl:hidden"
        onClick={onClickButton}
      >
        <span className="text-text-gray text-xl dark:text-white">
          More info
        </span>
        <svg
          width="26"
          height="22"
          viewBox="0 0 26 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.43 18.9222C25.43 18.462 25.0487 18.0807 24.5886 18.0807H0.841434C0.381275 18.0807 0 18.462 0 18.9222V20.605C0 21.0652 0.381275 21.4465 0.841434 21.4465H24.5886C25.0487 21.4465 25.43 21.0652 25.43 20.605V18.9222ZM25.43 9.8818C25.43 9.42164 25.0487 9.04037 24.5886 9.04037H0.841434C0.381275 9.04037 0 9.42164 0 9.8818V11.5647C0 12.0248 0.381275 12.4061 0.841434 12.4061H24.5886C25.0487 12.4061 25.43 12.0248 25.43 11.5647V9.8818ZM25.43 0.841433C25.43 0.381274 25.0487 0 24.5886 0H0.841434C0.381275 0 0 0.381274 0 0.841433V2.5243C0 2.98446 0.381275 3.36573 0.841434 3.36573H24.5886C25.0487 3.36573 25.43 2.98446 25.43 2.5243V0.841433Z"
            fill="#707070"
            className="dark:fill-white"
          />
        </svg>
      </button>
      <nav
        className={`xl:text-text-gray xl:text-[14px] xl:font-normal [&>*]:border-r-text-gray gap-5 [&>*]:pr-5 py-5 xl:py-0 xl:mt-0 flex-col items-center xl:flex xl:flex-row xl:[&>*]:border-r-[1px] font-bold text-[20px] hidden ${
          isOpen ? "_opened" : ""
        } bg-gradient-blue xl:bg-gradient-white bg-clip-text text-transparent text-center`}
      >
        <Link href="/">Lorem Ipsum is simply dummy</Link>
        <Link href="/">Item</Link>
        <Link href="/">Item</Link>
        <Link href="/">Item</Link>
        <Link href="/">Item</Link>
      </nav>
    </div>
  );
};

export default BannerItem;
