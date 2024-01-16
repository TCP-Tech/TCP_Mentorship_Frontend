import React from "react";
import { Link } from "react-router-dom";

const TeamSection = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center md:my-52 my-20 space-y-16">
      <h1 className="md:text-5xl text-3xl font-bold dark:text-white text-black">
        Wondering who all make this possible?
      </h1>
      <Link to="/team">
        <button className="bg-primary px-10 py-3 text-white hover:bg-[--tertiary-c] dark:bg-transparent dark:border dark:hover:bg-primary dark:hover:border-primary dark:hover:text-black transition-all duration-300 rounded-lg">
          Meet Our Team
        </button>
      </Link>
    </div>
  );
};

export default TeamSection;
