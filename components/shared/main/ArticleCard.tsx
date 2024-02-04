import React from "react";
import Link from "next/link";

type ArticleCardProps = {
  title: string;
  author: string;
  date: string;
};

const ArticleCard = ({ title, author, date }: ArticleCardProps) => {
  return (
    <Link
      href="/"
      className="bg-white p-5 rounded-[20px] flex flex-col items-center dark:bg-dark-gray"
    >
      <img
        src="/images/media-pic.png"
        alt="lorem ipsum cover"
        className="w-[310px] xl:w-[347px] h-[171px] rounded-[20px] mb-5"
      />
      <h3 className="text-text-blue text-[22px] font-bold w-[310px] text-center xl:w-auto">
        {title}
      </h3>
      <div className="flex gap-8 mt-1">
        <div className="flex items-center gap-1">
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 10.1484C11.5 8.09375 10.9922 5.71875 8.94531 5.71875C8.3125 6.33594 7.45312 6.71875 6.5 6.71875C5.54688 6.71875 4.6875 6.33594 4.05469 5.71875C2.00781 5.71875 1.5 8.09375 1.5 10.1484C1.5 11.2891 2.25 12.2188 3.16406 12.2188H9.83594C10.75 12.2188 11.5 11.2891 11.5 10.1484ZM9.5 3.21875C9.5 1.5625 8.15625 0.21875 6.5 0.21875C4.84375 0.21875 3.5 1.5625 3.5 3.21875C3.5 4.875 4.84375 6.21875 6.5 6.21875C8.15625 6.21875 9.5 4.875 9.5 3.21875Z"
              fill="#B3B3B1"
            />
          </svg>
          <span className="text-text-gray">{author}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 3.25C7.5 3.10938 7.39063 3 7.25 3H6.75C6.60938 3 6.5 3.10938 6.5 3.25V6H4.75C4.60938 6 4.5 6.10938 4.5 6.25V6.75C4.5 6.89063 4.60938 7 4.75 7H7.25C7.39063 7 7.5 6.89063 7.5 6.75V3.25ZM10.75 6C10.75 8.34375 8.84375 10.25 6.5 10.25C4.15625 10.25 2.25 8.34375 2.25 6C2.25 3.65625 4.15625 1.75 6.5 1.75C8.84375 1.75 10.75 3.65625 10.75 6ZM12.5 6C12.5 2.6875 9.8125 0 6.5 0C3.1875 0 0.5 2.6875 0.5 6C0.5 9.3125 3.1875 12 6.5 12C9.8125 12 12.5 9.3125 12.5 6Z"
              fill="#B3B3B1"
            />
          </svg>

          <span className="text-text-gray uppercase">{date}</span>
        </div>
      </div>
    </Link>
  );
};
export default ArticleCard;
