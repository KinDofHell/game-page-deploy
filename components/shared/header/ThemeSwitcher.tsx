import React, { useContext } from "react";
import MyThemeContext from "@/contexts/ThemeContext";

const ThemeSwitcher = () => {
  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }

  return (
    <button
      className="flex justify-start items-center min-w-[54px] h-[29px] bg-white rounded-[50px] px-0.5 dark:bg-dark-blue dark:justify-end"
      onClick={toggleThemeHandler}
    >
      <span className="w-[25px] h-[25px] block bg-[#183A5D] rounded-full bg-theme-background bg-no-repeat bg-center dark:bg-white dark:bg-theme-dark-background"></span>
    </button>
  );
};
export default ThemeSwitcher;
