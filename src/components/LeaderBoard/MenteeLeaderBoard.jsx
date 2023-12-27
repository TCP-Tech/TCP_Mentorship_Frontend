import React, { useEffect, useState } from "react";
import { mentees } from "../../data/MenteeData";
import TopRankersCarousel from "../TopRankersCarousel";

const MenteeLeaderBoard = () => {
  const [showCarousel, setShowCarousel] = useState(false);
  const topThreeRankers = [mentees[0], mentees[1], mentees[2]];
  useEffect(() => {
    const handleResize = () => {
      if (window.outerWidth >= 768) {
        setShowCarousel(false);
      } else {
        setShowCarousel(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <section className="container px-4 mx-auto">
        <div className="flex items-center text-center justify-center gap-x-3 mt-20">
          <h2 className="md:text-5xl text-3xl font-bold font-custom text-gray-800 dark:text-black mb-16">
            Mentee LeaderBoard
          </h2>
        </div>
        <div className="flex md:gap-20 gap-2  mt-4 justify-center text-black">
          {!showCarousel ? (
            <div className="Top-rankers flex md:max-xl:flex-wrap md:max-xl:justify-center  lg:gap-20 gap-2">
              <div className="rank-box flex justify-center items-center  h-72 w-72 border ">
                Here we display our weekly rankers
              </div>
              <div className="rank-box flex flex-col items-center justify-center h-72 w-72 border shadow-lg">
                <img
                  className="object-cover w-20 h-20 rounded-full"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt={mentees[0].name}
                />
                <h2 className="font-medium text-lg text-gray-800 dark:text-white">
                  {" "}
                  {mentees[0].name}
                </h2>
                <h2 className="font-medium text-lg text-gray-800 dark:text-white">
                  {" "}
                  {mentees[0].id}
                </h2>
                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                  {" "}
                  Team: {mentees[0].teamName}
                </p>
                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                  Points: {mentees[0].pointsScored}
                </p>
              </div>

              {/* 2ND POSITION HOLDER */}

              <div className="rank-box flex flex-col items-center justify-center h-72 w-72 border shadow-lg">
                <img
                  className="object-cover w-20 h-20 rounded-full"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt={mentees[0].name}
                />
                <h2 className="font-medium text-lg text-gray-800 dark:text-white">
                  {" "}
                  {mentees[0].name}
                </h2>
                <h2 className="font-medium text-lg text-gray-800 dark:text-white">
                  {" "}
                  {mentees[1].id}
                </h2>
                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                  {" "}
                  Team: {mentees[0].teamName}
                </p>
                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                  Points: {mentees[0].pointsScored}
                </p>
              </div>

              {/* 3RD POSITION HOLDER */}

              <div className="rank-box flex flex-col items-center justify-center h-72 w-72 border shadow-lg">
                <img
                  className="object-cover w-20 h-20 rounded-full"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt={mentees[0].name}
                />
                <h2 className="font-medium text-lg text-gray-800 dark:text-white">
                  {" "}
                  {mentees[0].name}
                </h2>
                <h2 className="font-medium text-lg text-gray-800 dark:text-white">
                  {" "}
                  {mentees[2].id}
                </h2>
                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                  {" "}
                  Team: {mentees[0].teamName}
                </p>
                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                  Points: {mentees[0].pointsScored}
                </p>
              </div>
            </div>
          ) : (
            <TopRankersCarousel topThreeRankers={topThreeRankers} />
          )}
        </div>
        <div className="flex flex-col mt-6 ">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-auto md:max-h-96 max-h-screen  border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 table-fixed">
                  <thead className="bg-gray-50 dark:bg-black">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-white"
                      >
                        <div className="flex items-center pl-14 text-sm md:text-xl">
                          <span>Name</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-12 py-3.5 md:text-sm text-xs font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <button className="flex items-center gap-x-2 ">
                          <span>Problems Solved</span>

                          {/* <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                            <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                            <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                                        </svg> */}
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-xs md:text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Points</span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                            />
                          </svg>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm md:text-xl font-normal text-left rtl:text-right text-gray-500 dark:text-white "
                      >
                        Team
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm md:text-xl font-normal  rtl:text-right text-gray-500 dark:text-white "
                      >
                        Achievements
                      </th>
                    </tr>
                  </thead>
                  {mentees.map((mentee) => (
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-primary">
                      <tr>
                        <td className="px-5 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3  md:text-lg text-white">
                            <h1>{mentee.id}</h1>

                            <div className="flex items-center gap-x-2">
                              <img
                                className="object-cover w-10 h-10 rounded-full"
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                alt=""
                              />
                              <div>
                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                  {mentee.name}
                                </h2>
                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                  @{mentee.name}
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-20 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center text-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                            <h2 className="text-sm md:text-lg font-normal text-emerald-500 ">
                              {mentee.problemsSolved}
                            </h2>
                          </div>
                        </td>
                        <td className="px-9 py-4 text-sm md:text-lg text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {mentee.pointsScored}
                        </td>
                        <td className="px-4 py-4 text-sm md:text-lg text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {mentee.teamName}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex flex-wrap justify-center gap-2">
                            {mentee.achievements.map((achievement, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-center text-center gap-x-3"
                              >
                                <p className="px-3 py-1 text-xs md:text-sm  text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                                  {" "}
                                  {achievement}
                                </p>
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenteeLeaderBoard;
