import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";

const App = () => {
  const [search, setSearch] = useState("");
  const [newsData, setNewsData] = useState([]);
  const [category, setCategory] = useState("general");
  const [searchIndication,setSearchIndication]=useState(false)


  const API_KEY = import.meta.env.VITE_API_KEY;
  // for Categories
  const getData = async (category) => {
    try {
      const res = await fetch(
        `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&max=100&apikey=${API_KEY}`
      );
      const data = await res.json();
      setNewsData(data.articles);
      setSearchIndication(false);
      // console.log(data.articles);
    } catch (err) {
      console.log("err", err);
    }
  };

  // for Search
  const getSearch = async () => {
    try {
      const res = await fetch(
        `https://gnews.io/api/v4/search?q=${encodeURIComponent(
          search
        )}&lang=en&max=10&apikey=${API_KEY}`
      );
      const data = await res.json();
      setNewsData(data.articles);
      setSearchIndication(true);
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    getData(category);
  }, [category]);

  const handleSearch = () => {
    if (search.trim() !== "") {
      getSearch();
    }
  };

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <NewsBoard
        search={search}
        category={category}
        setCategory={setCategory}
        newsData={newsData}
        searchIndication={searchIndication}
      />
    </>
  );
};

export default App;
