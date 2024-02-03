import React from "react";
import Link from "next/link";
import SocialIcon from "@/components/shared/SocialIcon";
import FooterList from "@/components/shared/footer/FooterList";

const Footer = () => {
  return (
    <footer className="w-full p-5 pt-[150px] xl:p-[28px] bg-white">
      <div className="w-full flex justify-center bg-gradient-blue rounded-[40px] px-[30px]">
        <div className="inner-wrapper py-5 flex flex-col items-center gap-14 xl:flex-row">
          <div className="flex flex-col items-center w-full rounded-[20px] bg-white p-[30px] xl:w-[351px]">
            <h2 className="text-[30px] my-11">LOGOTYPE</h2>
            <div className="text-text-teal flex flex-col items-center xl:items-start">
              <p className="mb-4">Lorem Ipsum is simply dummy</p>
              <p className="text-center xl:text-left">
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
              </p>
            </div>
            <div className="flex items-center gap-7 mt-[30px]">
              <Link href="/">
                <SocialIcon type="FACEBOOK" color="#0DD0BA" />
              </Link>
              <Link href="/">
                <SocialIcon type="TWITTER" color="#0DD0BA" />
              </Link>
              <Link href="/">
                <SocialIcon type="INSTAGRAM" color="#0DD0BA" />
              </Link>
              <Link href="/">
                <SocialIcon type="GMAIL" color="#0DD0BA" />
              </Link>
              <Link href="/">
                <SocialIcon type="YOUTUBE" color="#0DD0BA" />
              </Link>
              <Link href="/">
                <SocialIcon type="NOTIFICATION" color="#0DD0BA" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-12 items-center xl:items-start">
            <div className="flex gap-14 md:gap-[16vw] xl:gap-40 flex-wrap justify-center">
              <FooterList title="Category" />
              <FooterList title="Play Better" />
              <FooterList title="Useful links" />
            </div>
            <p className="text-white italic text-[13px]">
              Copyright © 2024. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
