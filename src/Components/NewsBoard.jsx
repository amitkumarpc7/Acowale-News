import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

const NewsBoard = ({search}) => {
  const [newsData, setNewsData] = useState([]);
  const [category, setCategory] = useState("general");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  //   for pagination
//   const [currentPage,setCurrentPage]=useState(10)

  const API_KEY = import.meta.env.VITE_API_KEY;

  const getData = async (category) => {
    const res = await fetch(
      `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&max=100&apikey=${API_KEY}`
    );
    const data = await res.json();
    setNewsData(data.articles);
    // console.log(data.articles);
  };
  useEffect(() => {
    getData(category);
  }, [category]);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const onSearch=(e)=>{

  }
  return (
    <div className=" pt-20">
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
            className={`px-4 py-2 rounded ${
              category === cat ? "bg-blue-500 text-white" : "bg-gray-200"
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
          <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded shadow-lg">
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
                  setIsDropdownOpen(false); // Close dropdown after selection
                }}
                className={`block px-4 py-2 w-full text-left ${
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
