import React, { useState } from "react";

const TopRankersCarousel = ({ topThreeRankers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? topThreeRankers.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === topThreeRankers.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container relative flex justify-center items-center">
      <button
        className="carousel-button left bg-white text-3xl p-0"
        onClick={handlePrevious}
      >
        &lt;
      </button>
      <div className="card-container">
        <div className="card">
          <div className="rank-box flex flex-col items-center justify-center h-72 w-72 border shadow-lg">
            <img
              className="object-cover w-20 h-20 rounded-full"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt={topThreeRankers[currentIndex].name}
            />
            <h2 className="font-medium text-lg text-gray-800 dark:text-white">
              {topThreeRankers[currentIndex].name}
            </h2>
            <h2 className="font-medium text-lg text-gray-800 dark:text-white">
              {topThreeRankers[currentIndex].id}
            </h2>
            <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
              Team: {topThreeRankers[currentIndex].teamName}
            </p>
            <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
              Points: {topThreeRankers[currentIndex].pointsScored}
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-button right bg-white text-3xl p-0"
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default TopRankersCarousel;
