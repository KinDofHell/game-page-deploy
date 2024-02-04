"use client";

import React, { useState } from "react";

const Rate = ({ progress }: { progress: number }) => {
  const [rate, setRate] = useState(0);

  const updateRate = (newRate: number) => {
    setRate(newRate);
  };

  return (
    <div className="absolute right-[60px] top-1/2 -translate-y-1/2 hidden xl:block">
      <div className="flex items-center gap-3">
        <div className="progress-bar relative">
          <span className="text-3xl text-white font-extrabold absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 ">
            6.4
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl text-white font-extrabold">Players</span>
          <span className="text-white font-medium">12 votes</span>
          <div>
            <span className="text-white font-bold">Your rating: </span>
            <span className="text-text-orange font-bold text-xl">{rate}</span>
          </div>
        </div>
      </div>
      <div className="relative top-[50px]">
        <div className="absolute -left-[30px] flex items-center w-[290px] h-[35px] rounded-[17px] bg-[#EBF6F5] dark:bg-dark-blue">
          <div className="flex w-full h-full">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
              <button
                key={index}
                className={`text-[12px] font-bold relative z-20 px-2 border-l-[1px] border-gray-200 dark:text-white ${
                  index <= rate ? "text-white bg-text-orange" : ""
                } ${index === 0 ? "rounded-l-[17px]" : ""} ${
                  index === 10 && "rounded-r-[17px]"
                }`}
                onClick={() => updateRate(index)}
              >
                {item === 0 ? "Note" : item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Rate;
