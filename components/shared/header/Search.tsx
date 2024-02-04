import React from "react";

const Search = ({
  placeholder,
  inputClassName,
}: {
  placeholder: string;
  inputClassName?: string;
}) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className={`bg-light-gray border-0 rounded-[40px] px-5 py-2.5 dark:bg-dark-blue dark:text-white placeholder:dark:text-white ${inputClassName}`}
      />
      <img
        src="/icons/search.svg"
        alt="search icon"
        className="absolute right-3 top-[50%] -translate-y-1/2"
      />
    </div>
  );
};
export default Search;
