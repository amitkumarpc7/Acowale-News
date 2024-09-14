import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

const NewsBoard = ({ search,category,setCategory,newsData,searchIndication }) => {
  // const [category, setCategory] = useState("general");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Dropdown for mobile screens
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <div className="min-h-screen pt-20 dark:bg-blackPrimary dark:text-white">
      {searchIndication && <p className="text-center mb-2 text-green-400">Search results for <em>"{search}"</em></p>}
      <div className="hidden md:flex flex-wrap justify-center gap-4">
        {[
          "general",
          "world",
          "nation",
          "business",
          "technology",
          "entertainment",
          "sports",
          "science",
          "health",
        ].map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded dark:text-black ${
              category === cat ? "bg-blue-500 text-white " : "bg-gray-200"
            } ${category === cat ? "font-bold" : "font-normal"}`}
            onClick={() => setCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Dropdown for mobile screens */}
      <div className="md:hidden mb-4 pl-5">
        <button
          onClick={toggleDropdown}
          className="px-4 py-2 rounded bg-blue-500 text-white"
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
        {isDropdownOpen && (
          <div className="absolute mt-2 w-[87%] bg-white border border-gray-300 dark:border-white rounded shadow-lg">
            {[
              "general",
              "world",
              "nation",
              "business",
              "technology",
              "entertainment",
              "sports",
              "science",
              "health",
            ].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setCategory(cat);
                  setIsDropdownOpen(false); // Closing dropdown after selection
                }}
                className={`block px-4 py-2 w-full text-left hover:bg-gray-600 ${
                  category === cat ? "bg-blue-500 text-white" : "text-gray-800"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>
      <NewsCard data={newsData} />
    </div>
  );
};

export default NewsBoard;
