"use client";

import React, { Dispatch, SetStateAction } from "react";
import Search from "@/components/shared/header/Search";
import MainMenuItems from "@/components/shared/header/MainMenuItems";
import MenuItem from "@/components/shared/header/MenuItem";
import { hidden } from "next/dist/lib/picocolors";

const MobileMenu = ({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleOpen = () => {
    setOpened(!opened);
  };

  return (
    <div
      className={`xl:hidden ${
        opened &&
        "fixed w-full h-full bg-white top-[110px] left-0 px-[15px] pt-4 dark:bg-main-dark"
      }`}
    >
      <button
        onClick={handleOpen}
        className={`max-w-[26px] max-h-[23px] ${
          opened && "absolute right-[20px] -top-[34px]"
        }`}
      >
        {opened ? (
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.7154 21.5337C23.0408 21.2083 23.0408 20.6691 22.7154 20.3437L3.09524 0.723528C2.76986 0.398147 2.23066 0.398147 1.90527 0.723529L0.715307 1.9135C0.389926 2.23888 0.389925 2.77808 0.715307 3.10346L20.3355 22.7236C20.6609 23.049 21.2001 23.049 21.5255 22.7236L22.7154 21.5337Z"
              fill="#2A86E5"
            />
            <path
              d="M1.90495 22.7239C2.23033 23.0493 2.76954 23.0493 3.09492 22.7239L22.7151 3.1037C23.0405 2.77832 23.0405 2.23911 22.7151 1.91373L21.5251 0.723765C21.1998 0.398383 20.6606 0.398383 20.3352 0.723764L0.714984 20.3439C0.389603 20.6693 0.389601 21.2085 0.714983 21.5339L1.90495 22.7239Z"
              fill="#2A86E5"
            />
          </svg>
        ) : (
          <svg
            width="26"
            height="23"
            viewBox="0 0 26 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.43 18.9222C25.43 18.462 25.0487 18.0807 24.5886 18.0807H0.841434C0.381275 18.0807 0 18.462 0 18.9222V20.605C0 21.0652 0.381275 21.4465 0.841434 21.4465H24.5886C25.0487 21.4465 25.43 21.0652 25.43 20.605V18.9222ZM25.43 9.8818C25.43 9.42164 25.0487 9.04037 24.5886 9.04037H0.841434C0.381275 9.04037 0 9.42164 0 9.8818V11.5647C0 12.0248 0.381275 12.4061 0.841434 12.4061H24.5886C25.0487 12.4061 25.43 12.0248 25.43 11.5647V9.8818ZM25.43 0.841433C25.43 0.381274 25.0487 0 24.5886 0H0.841434C0.381275 0 0 0.381274 0 0.841433V2.5243C0 2.98446 0.381275 3.36573 0.841434 3.36573H24.5886C25.0487 3.36573 25.43 2.98446 25.43 2.5243V0.841433Z"
              fill="#2A86E5"
            />
          </svg>
        )}
      </button>
      <div
        className={`w-full max-h-[calc(100vh-150px)] overflow-y-auto ${
          !opened && "hidden"
        }`}
      >
        <Search placeholder="Search for..." inputClassName="w-full" />
        <MainMenuItems />
        <nav className="flex flex-col items-center justify-center gap-12 text-text-gray mt-[150px] md:flex-row dark:text-white">
          <MenuItem label="Menu item 1" iconType="MOBILE" iconColor="#707070" />
          <MenuItem label="Menu item 2" iconType="FILTER" iconColor="#707070" />
          <MenuItem
            label="Menu item 3"
            iconType="ANDROID"
            iconColor="#707070"
          />
          <MenuItem label="Menu item 4" iconType="APPLE" iconColor="#707070" />
        </nav>
      </div>
    </div>
  );
};
export default MobileMenu;
