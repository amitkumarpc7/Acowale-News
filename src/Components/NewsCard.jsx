import React from "react";

const NewsCard = ({ data }) => {
  // Handle empty or undefined data
  if (!data || data.length === 0) {
    return <p>Loading news...</p>;
  }

  // Function to open URL
  const readMore = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {data.map((news, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span
                className="block text-lg font-bold mb-2 sm:text-xl md:text-2xl hover:underline cursor-pointer"
                onClick={() => readMore(news.url)}
              >
                {news.title}
              </span>
              <p className="text-sm sm:text-base md:text-lg mb-4">
                {news.description}
              </p>
              <button
                onClick={() => readMore(news.url)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Read
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;
