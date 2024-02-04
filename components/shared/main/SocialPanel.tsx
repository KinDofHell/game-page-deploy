import React from "react";
import Link from "next/link";

const SocialPanel = () => {
  return (
    <div className="fixed left-0 top-[30%] hidden xl:flex flex-col">
      <Link
        href="/"
        className="rounded-tr-[2px] w-10 h-10 flex justify-center items-center bg-[#3A579A]"
      >
        <img src="/icons/twitter.svg" alt="twitter link" />
      </Link>
      <Link
        href="/"
        className="w-10 h-10 flex justify-center items-center bg-[#24A2E0]"
      >
        <img src="/icons/telegram.svg" alt="telegram link" />
      </Link>
      <Link
        href="/"
        className="w-10 h-10 flex justify-center items-center bg-[#CD1C1F]"
      >
        <img src="/icons/pinterest.svg" alt="pinterest link" />
      </Link>
      <Link
        href="/"
        className="w-10 h-10 flex justify-center items-center bg-[#FC461E]"
      >
        <img src="/icons/reddit.svg" alt="reddit link" />
      </Link>
      <Link
        href="/"
        className="w-10 h-10 flex justify-center items-center bg-[#F95149]"
      >
        <img src="/icons/like.svg" alt="like link" />
      </Link>
      <Link
        href="/"
        className="rounded-br-[2px] w-10 h-10 flex justify-center items-center bg-[#3A579A]"
      >
        <img src="/icons/facebook.svg" alt="facebook link" />
      </Link>
    </div>
  );
};
export default SocialPanel;
