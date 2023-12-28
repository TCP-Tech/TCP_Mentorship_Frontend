import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import React from "react";
import { useState } from "react";

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="flex flex-col items-center w-full my-16">
      <div className="bg-[var(--primary-c)] backdrop-blur-md text-white w-full">
        <ScrollTrigger
          style={{ width: "100%" }}
          onEnter={() => setCounterOn(true)}
        >
          <div className="flex md:flex-row flex-col items-center gap-8 py-12 px-8 justify-around">
            <div className="text-2xl">
              <p className="font-xs text-center">
                <span className="font-extrabold text-4xl">
                  {counterOn && (
                    <CountUp start={0} end={50} duration={5} delay={0.5} />
                  )}
                  +
                  <br />
                </span>{" "}
                Mentors
              </p>
            </div>
            <div className="text-2xl">
              <p className="font-xs text-center">
                <span className="font-extrabold text-4xl">
                  {counterOn && (
                    <CountUp start={0} end={300} duration={5} delay={0.5} />
                  )}
                  +
                  <br />
                </span>{" "}
                Mentees
              </p>
            </div>
            <div className="text-2xl">
              <p className="font-xs text-center">
                <span className="font-extrabold text-4xl">
                  {counterOn && (
                    <CountUp start={0} end={1000} duration={5} delay={0.5} />
                  )}
                  +
                  <br />
                </span>{" "}
                Questions Solved
              </p>
            </div>
            <div className="text-2xl">
              <p className="font-xs text-center">
                <span className="font-extrabold text-4xl">
                  {counterOn && (
                    <CountUp start={0} end={1000} duration={5} delay={0.5} />
                  )}
                  +
                  <br />
                </span>{" "}
                Visitors
              </p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
};

export default Counter;
