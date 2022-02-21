import React from "react";

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-blue-500"
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
  return (
    <div className="flex gap-2 pl-4 pr-2 py-1 items-center w-full h-12 rounded-lg bg-white bg-opacity-10">
      <SearchIcon />
      <input
        className="w-full text-stone-50 px-3 bg-transparent no-underline"
        type="text"
        placeholder="Search Github username..."
      />
      <button className="h-full text-stone-50 px-5 rounded-lg bg-blue-600">
        Search
      </button>
    </div>
  );
};

export default Searchbar;
