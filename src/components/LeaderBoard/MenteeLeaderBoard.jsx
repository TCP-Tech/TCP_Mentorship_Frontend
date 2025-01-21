import React, { useEffect, useState } from "react";
import { mentees } from "../../data/MenteeData";
import Confetti from "../../utils/Confetti";
import { fetchDataFromApi, fetchDataWithEndPoint } from '../../utils/api';

const MenteeLeaderBoard = () => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [mentee] = useState(JSON.parse(localStorage.getItem("Mentee")) || null);
  // const [loggedInMenteeIndex ,setloggedInMenteeIndex]=useState(null);
  const [MenteeData, setMenteeData] = useState([])
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

  const menteed = async () => {
    const data = await fetchDataWithEndPoint('getMentees')
    setMenteeData(data.data)
  }
  useEffect(() => {
    menteed();
  }, [])

  MenteeData?.sort(function (mentee1, mentee2) {
    // if(  mentee2?.score === mentee1?.score){
    //   if(mentee2?.solvedQ === mentee1?.solvedQ){
    //     return mentee1?.cumHour_diff - mentee2?.cumHour_diff
    //   }
    //   else{
    //     return mentee2?.solvedQ - mentee1?.solvedQ;
    //   }
    // }
    // else{
    //   return mentee2?.score - mentee1?.score;
    // }
    return mentee1?.Mentee_rank - mentee2?.Mentee_rank;
  });
  const loggedInMenteeIndex = MenteeData?.findIndex((item) => item.name === mentee?.name);

  return (
    <div id="leaderBoard" className=" pt-12">
      <section className="px-4 mx-auto">
        <div className="flex items-center text-center justify-center gap-x-3 mt-20">
          <h2 className="md:text-5xl text-3xl font-bold font-custom dark:text-white text-black mb-16">
            Mentee Leaderboard
          </h2>
        </div>

        { MenteeData?.length ? <div className="md:pt-52 pt-32">
          <div className="w-full h-36 md:h-44 dark:bg-gray-800 shadow-sm rounded-2xl flex justify-around border dark:border-gray-600">
            <div className="flex flex-col items-center">
              <div className="rounded-full overflow-hidden border-4 border-gray-500 bg-gray-300 md:w-28 md:h-28 w-16 h-16 md:-mt-20 -mt-10">
                <img
                  className="object-cover md:w-28 md:h-28 w-16 h-16 rounded-full "
                  src={ MenteeData[1]?.image }
                  alt=""
                />
              </div>
              <div className="md:w-6 md:h-6 w-4 h-4 flex justify-center origin-top-left rotate-45 -mt-3 md:-mt-5 ml-4 md:ml-6 bg-gray-500 rounded-md md:rounded-lg">
                <div className="transform -rotate-45 text-xs md:text-lg">2</div>
              </div>
              <div className="flex flex-col justify-center text-center space-y-3 mt-6 md:mt-6">
                <h1 className="relative md:text-lg text-sm p-1 dark:text-white text-black md:max-w-[200px] max-w-[100px] truncate">{ MenteeData[1]?.name }</h1>
                <h1 className="md:text-xl text-sm text-gray-500">{ MenteeData[1]?.score }</h1>
              </div>
            </div>
            {/* First Position */ }
            <div className="md:w-44 w-28 h-46 bg-slate-100 shadow-md dark:bg-gray-700 rounded-tl-[30px] rounded-tr-[30px] z-20 -mt-14 border dark:border-gray-600">
              <div className="flex flex-col items-center">
                {/* <img className="absolute -mt-32 " src={crown}/> */ }
                <svg
                  className="absolute -mt-20 md:-mt-32 w-36 md:w-40 "
                  height="40"
                  viewBox="0 0 34 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.3004 11.5684C30.0255 11.3553 29.6916 11.2182 29.3369 11.1729C28.9821 11.1275 28.6208 11.1756 28.294 11.3118L22.2148 13.8219L18.6826 7.90917C18.5138 7.63312 18.2691 7.40355 17.9737 7.24385C17.6782 7.08414 17.3424 7 17.0006 7C16.6587 7 16.3229 7.08414 16.0275 7.24385C15.732 7.40355 15.4874 7.63312 15.3186 7.90917L11.7864 13.8219L5.70711 11.3118C5.37972 11.1758 5.01791 11.1276 4.66256 11.1726C4.30722 11.2176 3.97252 11.354 3.69629 11.5664C3.42006 11.7788 3.21333 12.0587 3.09946 12.3745C2.9856 12.6903 2.96914 13.0294 3.05194 13.3534L6.10358 25.4355C6.16193 25.6694 6.27082 25.8899 6.42364 26.0836C6.57646 26.2773 6.77004 26.4401 6.99264 26.5623C7.29401 26.7298 7.63859 26.8184 7.98983 26.8189C8.16057 26.8186 8.33043 26.796 8.49443 26.7519C14.0568 25.3239 19.9323 25.3239 25.4947 26.7519C26.0026 26.8759 26.5427 26.8077 26.9965 26.5623C27.2205 26.4417 27.4151 26.2793 27.5681 26.0853C27.7211 25.8914 27.8292 25.6701 27.8855 25.4355L30.9492 13.3534C31.0311 13.0293 31.0137 12.6904 30.8991 12.3749C30.7844 12.0595 30.5771 11.7801 30.3004 11.5684Z"
                    fill="#FFAA00"
                  />
                  <circle cx="17" cy="4" r="4" fill="#FFAA00" />
                  <circle cx="17" cy="18" r="3" fill="#BE9502" />
                  <circle cx="31.5" cy="10.5" r="2.5" fill="#FFAA00" />
                  <circle cx="2.5" cy="10.5" r="2.5" fill="#FFAA00" />
                  <circle cx="9.5" cy="19.5" r="1.5" fill="#BE9502" />
                  <circle cx="24.5" cy="19.5" r="1.5" fill="#BE9502" />
                </svg>

                <div className="rounded-full overflow-hidden border-4 border-amber-500 bg-gray-300 md:w-28 md:h-28 w-16 h-16 -mt-10 md:-mt-20">
                  <img
                    className="object-cover md:w-28 md:h-28 w-16 h-16 rounded-full "
                    src={ MenteeData[0]?.image }
                    alt=""
                  />
                </div>
                <div className="md:w-6 md:h-6 w-4 h-4 flex justify-center origin-top-left rotate-45 -mt-3 md:-mt-5 ml-4 md:ml-6 bg-amber-500 rounded-md md:rounded-lg">
                  <div className="transform -rotate-45 text-xs md:text-lg">
                    1
                  </div>
                </div>
                <div className="flex flex-col justify-center text-center space-y-3 mt-8 md:mt-10">
                  <h1 className="relative md:text-lg text-sm p-1 dark:text-white text-black md:max-w-[200px] max-w-[100px] truncate">{ MenteeData[0]?.name }</h1>
                  <h1 className="md:text-xl text-sm text-amber-500">{ MenteeData[0]?.score }</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center ">
              <div className="rounded-full overflow-hidden border-4 border-amber-700 bg-gray-300 md:w-28 md:h-28 w-16 h-16 md:-mt-20 -mt-10">
                <img
                  className="object-cover md:w-28 md:h-28 w-16 h-16 rounded-full "
                  src={ MenteeData[2]?.image }
                  alt=""
                />
              </div>
              <div className="md:w-6 md:h-6 w-4 h-4 flex justify-center origin-top-left rotate-45 -mt-3 md:-mt-5 ml-4 md:ml-6 bg-amber-700 rounded-md md:rounded-lg">
                <div className="transform -rotate-45 text-xs md:text-lg">3</div>
              </div>
              <div className="flex flex-col justify-center text-center space-y-3 mt-6 md:mt-6">
                <h1 className="relative md:text-lg text-sm p-1 dark:text-white text-black md:max-w-[200px] max-w-[100px] truncate">{ MenteeData[2]?.name }</h1>
                <h1 className="md:text-xl text-sm text-amber-700">{ MenteeData[2]?.score }</h1>
              </div>
            </div>
          </div>
        </div>
          :
          "" }

        {/*####################################### Table part starts here ############################################*/ }
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
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
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


                    </tr>
                  </thead>
                  { mentee && (
                    <tbody className="bg-blue-100">
                      <tr>
                        <td className="px-5 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3  md:text-lg text-black dark:text-gray-800">
                            <h1>{ loggedInMenteeIndex + 1 }</h1>

                            <div className="flex items-center gap-x-2">
                              <img
                                className="object-cover w-10 h-10 rounded-full"
                                src={ mentee?.image }
                                alt=""
                              />
                              <div>
                                <h2 className="font-medium text-gray-800  ">
                                  { "You" }
                                </h2>
                                <p className="text-sm font-normal text-gray-600">
                                  @{ mentee?.username }
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-20 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center text-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                            <h2 className="text-sm md:text-lg font-normal text-emerald-500 ">
                              { mentee?.solvedQ }
                            </h2>
                          </div>
                        </td>
                        <td className="px-9 py-4 text-sm md:text-lg text-gray-500 whitespace-nowrap">
                          { mentee?.score }
                        </td>
                        <td className="px-4 py-4 text-sm md:text-lg text-gray-500 whitespace-nowrap">
                          { Array.isArray(mentee?.Menteeteam)
                            ? mentee?.Menteeteam[0]?.team_name
                            : mentee?.Menteeteam?.team_name || "No team name available" }
                        </td>
                      </tr>
                    </tbody>
                  ) }
                  { MenteeData?.map((mentee, index) => (
                    <tbody
                      key={ index }
                      className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-800"
                    >
                      <tr>
                        <td className="px-5 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3  md:text-lg text-black dark:text-white ">
                            <h1>{ index + 1 }</h1>

                            <div className="flex items-center gap-x-2">
                              <img
                                className="object-cover w-10 h-10 rounded-full"
                                src={ mentee?.image }
                                alt=""
                              />
                              <div>
                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                  { mentee?.name }
                                </h2>
                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                  @{ mentee?.username }
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-20 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center text-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                            <h2 className="text-sm md:text-lg font-normal text-emerald-500 ">
                              { mentee?.solvedQ }
                            </h2>
                          </div>
                        </td>
                        <td className="px-9 py-4 text-sm md:text-lg text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          { mentee?.score }
                        </td>
                        <td className="px-4 py-4 text-sm md:text-lg text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          { mentee?.Menteeteam?.team_name || "Sample team" }
                          {/* {console.log(mentee)} */ }


                        </td>
                      </tr>
                    </tbody>
                  )) }
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
