"use client";
import React, { Dispatch, useCallback, useState } from "react";
import SearchIcon from "../../public/icon-search.svg";

interface SearchBarProps {
  search: (username: string) => void;
  showNoResults: boolean;
  setShowNoResults: Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar: React.FC<SearchBarProps> = ({
  search,
  showNoResults,
  setShowNoResults,
}) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setShowNoResults(false);
      setSearchInput(e.target.value);
    },
    [setShowNoResults],
  );
  return (
    <div className="mt-10 flex h-[60px] w-full flex-row items-center justify-center gap-3 rounded-2xl bg-[#FEFEFE] px-3 py-2 shadow-lg dark:bg-[#1E2A47]">
      <div className="text-[#0079FF]">
        <SearchIcon />
      </div>
      <input
        name="github username search"
        id="github-username-search"
        type="text"
        className="active:text-[#222731 w-full bg-transparent font-mono text-[13px] font-normal placeholder:text-[#8c95a3] focus:outline-none dark:text-white placeholder:dark:text-white md:text-lg"
        placeholder="Search GitHub username..."
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            search(searchInput);
          }
        }}
      />

      {showNoResults && (
        <p className="text-nowrap font-mono text-[13px] font-bold text-[#F74646]">
          No results
        </p>
      )}
      <button
        onClick={() => search(searchInput)}
        className="rounded-lgfont-mono flex items-center justify-center bg-[#0079FF] px-4 py-3 text-[14px] font-bold text-white hover:bg-[#60ABFF]"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
