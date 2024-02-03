import React from "react";
import Link from "next/link";

const FooterList = ({ title }: { title: string }) => {
  return (
    <div className="text-white w-full md:w-auto md:justify-start">
      <h3 className="text-[24px] mb-2 font-bold text-center md:text-left">
        {title}
      </h3>
      <ul className="left-4 flex flex-col items-center xl:items-start xl:relative xl:list-disc">
        <li>
          <Link href="/">Item 1</Link>
        </li>
        <li>
          <Link href="/">Item 2</Link>
        </li>
        <li>
          <Link href="/">Item 3</Link>
        </li>
        <li>
          <Link href="/">Item 4</Link>
        </li>
        <li>
          <Link href="/">Item 5</Link>
        </li>
        <li>
          <Link href="/">Item 6</Link>
        </li>
      </ul>
    </div>
  );
};
export default FooterList;
