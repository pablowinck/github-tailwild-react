import React, { useState } from "react";
import { useUserContext } from "../../context/UserContext";

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-light-blue"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const Searchbar: React.FC = () => {
  const { setUsername } = useUserContext();
  const [currentUsername, setCurrentUsername] = useState<string>("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setUsername(currentUsername);
      }}
      className="flex gap-2 pl-4 pr-2 py-1 items-center w-full h-12 rounded-lg bg-200"
    >
      <SearchIcon />

      <input
        className="w-full sm:text-md text-sm text-grey px-3 bg-transparent no-underline"
        type="text"
        placeholder="Search Github username..."
        value={currentUsername}
        onChange={(e) => setCurrentUsername(e.currentTarget.value)}
      />
      <button
        type="submit"
        className="h-full text-white px-5 rounded-lg bg-light-blue hover:bg-dark-blue transition-colors duration-300"
      >
        Search
      </button>
    </form>
  );
};

export default Searchbar;
