"use client";

import UpperBar from "@/components/shared/header/UpperBar";
import LowerBar from "@/components/shared/header/LowerBar";
import { useEffect, useState } from "react";

const Header = () => {
  const [opened, setOpened] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1280 && !opened) {
        setOpened(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [opened]);

  return (
    <header
      className={`flex flex-col w-full ${
        opened && "fixed top-0 l-0 w-full z-20"
      }`}
    >
      <UpperBar />
      <LowerBar opened={opened} setOpened={setOpened} />
    </header>
  );
};
export default Header;
