import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import first from "../assets/images/first.json";
import second from "../assets/images/second.json";
import third from "../assets/images/third.json";
import { Link } from "react-router-dom";
function NotFoundPage() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12 pt-32 md:pt-0">
        <div className="w-full lg:w-1/2">
          <p className="text-xl font-medium text-[var(--primary-c)] dark:text-white">
            404 error
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Sorry, the page you are looking for doesn't exist. Here are some
            helpful links:
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <Link
              to="/"
              className="text-black flex border gap-1 bg-white hover:bg-gray-100 duration-200 rounded-md sm:text-sm sm:py-3 sm:px-4 px-2 text-center dark:hover:bg-gray-300 dark:hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>{" "}
              <span>Go back</span>
            </Link>
            <Link
              to="/"
              className="text-white bg-[--primary-c] cursor-pointer hover:bg-[--tertiary-c] duration-200 rounded-md sm:text-sm sm:py-3 sm:px-4 px-2 text-center dark:hover:bg-gray-300 dark:hover:text-gray-900"
            >
              Take me home
            </Link>
          </div>
        </div>

        <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
          <Player src={second} className="player" loop autoplay />
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
