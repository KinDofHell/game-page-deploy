import React from "react";
import MenuItem from "@/components/shared/header/MenuItem";
import BannerItem from "@/components/shared/main/BannerItem";
import Rate from "@/components/shared/main/Rate";

const Banner = () => {
  return (
    <div className="min-h-[234px] flex flex-col justify-start bg-white shadow-banner-shadow px-[15px] md:px-[20px] xl:px-0 xl:rounded-[40px] dark:bg-main-dark">
      <div className="bg-banner bg-center bg-no-repeat w-full h-[184px] rounded-[40px] relative">
        <div className="bg-transparent-blue w-full h-full rounded-[40px] px-[20px] py-[30px] md:px-[50px] flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/images/game-avatar.png"
              alt="lorem ipsum game download"
              className="mr-[24px] w-[89px] h-[89px] md:w-auto md:h-auto"
            />
            <div>
              <h2 className="text-[24px] md:text-[35px] font-bold text-white mb-1">
                Lorem Ipsum is simply dummy
              </h2>
              <div className="hidden gap-2 xl:flex text-white">
                <MenuItem
                  label="Android"
                  iconType="ANDROID"
                  className="border-[1px] border-white rounded-[17px] px-4 py-[5px]"
                />
                <MenuItem
                  label="iOS"
                  iconType="APPLE"
                  className="border-[1px] border-white rounded-[17px] px-4 py-[5px]"
                />
                <button className="flex justify-center items-center border-[1px] border-transparent rounded-[17px] px-4 py-[5px] bg-gradient-blue ">
                  <img src="/icons/download.svg" alt="download game" />
                  <span className="text-white text-[14px] ml-1.5">
                    Download on PC
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Rate progress={50} />
      </div>
      <div className="px-[50px]">
        <BannerItem />
      </div>
    </div>
  );
};
export default Banner;
