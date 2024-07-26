"use client";
import { useDarkMode } from "../contexts/DarkModeContext";
import SunIcon from "../../public/icon-sun.svg";
import MoonIcon from "../../public/icon-moon.svg";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const label = darkMode ? "Light" : "Dark";
  const iconColor = darkMode ? "#FFA500" : "#000000"; // Adjust the colors as needed

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center justify-center cursor-pointer text-[#4B6A9B] hover:text-[#222731] flex-row h-5 pl-1 gap-4 shrink-0 dark:text-white dark:hover:text-[#90A4D4]"
    >
      <p className="font-mono text-[13px] font-bold tracking-[2.5px] text-right">
        {label}
      </p>
      {darkMode ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default DarkModeToggle;
