import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const Navbar = ({search,setSearch}) => {
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-blackPrimary shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand Name */}
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          <span>AcoNews</span>
        </div>

        {/* Search Input */}
        <div className="flex-grow max-w-xl flex items-center">
          <input
            type="text"
            placeholder="Search news"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="flex-grow px-4 py-2 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
          <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-700 flex items-center justify-center self-stretch">
            <FaSearch />
          </button>
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={handleToggle}
          className="hidden md:flex px-4 py-2 bg-gray-200 dark:bg-blackPrimary rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white dark:border-white self-stretch"
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white self-stretch"
        >
          <IoMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 shadow-lg mt-2">
          <div className="flex flex-col px-4 py-2">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                handleToggle();
              }}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white"
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
