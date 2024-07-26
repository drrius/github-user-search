import React from "react";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <header className="flex flex-row w-full justify-between items-center">
      <p className="font-mono font-bold text-[#222731] dark:text-white text-[26px]">
        devfinder
      </p>
      <DarkModeToggle />
    </header>
  );
};

export default Header;
