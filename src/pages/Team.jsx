import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import tcp from "../assets/images/tcp.png";
import tcplight from "../assets/images/tcpLogo.png";
import { base_url } from "../utils/urls";
import TeamCard from "../components/TeamCard";
import TeamNav from "../components/TeamNav";
const Team = () => {
  const url = base_url + "team/2024/";
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data.data)
      //   console.log(data[0].data);
      //   console.log("State" , state)
      setState({
        data: data.data,
        loading: false,
      });
    };
    fetchData();
  }, []);

  const MembersByDesignation = (designation) => {
    const filteredMembers = state?.data
      .filter((member) => member.member_type === designation)
      .sort((a, b) => {
        const domainOrder = [
          "Technical",
          "Design",
          "Video Editing",
          "Documentation",
          "sponsorship",
          "PR & Marketing",
        ];
        return domainOrder.indexOf(a.domain) - domainOrder.indexOf(b.domain);
      });

    return filteredMembers;
  };
  const overAllCoordinaters = MembersByDesignation("OCO");
  const headCoordinators = MembersByDesignation("HCO").filter(
    (member) => member.name !== "Neel Sharma"
  );
  const mentorshipHead = state?.data.find(
    (member) => member.name === "Neel Sharma"
  );
  const managers = MembersByDesignation("MNG");
  const executives = MembersByDesignation("EXC");
  // console.log(headCoordinators , mentorshipHead);
  return (
    <>
      <nav className="w-screen fixed z-50 border-b ">
        <TeamNav />
      </nav>
      <div className="text-black relative w-screen h-full flex flex-col items-center text-center dark:bg-gray-900 pt-20">
        <div className="flex justify-center items-center py-12 gap-2">
          <img
            src={tcp}
            className="md:w-32 md:h-32 w-20 h-20 dark:block hidden"
            alt="tcp-logo"
          />
          <img
            src={tcplight}
            className="md:w-32 md:h-32 w-20 h-20 dark:hidden block"
            alt="tcp-logo"
          />
          <h1 className="font-bold md:text-5xl text-2xl ml-4 dark:text-white">
            {"<"} Team TCP 2024 {">"}
          </h1>
        </div>
        <Link to="/">
          <div className="bg-primary flex space-x-2 text-lg px-10 py-4 text-white hover:bg-[--tertiary-c] dark:bg-transparent dark:border dark:hover:bg-primary dark:hover:border-primary dark:hover:text-black transition-all duration-300 rounded-lg">
            <FaArrowLeft className="mt-1" />
            <button>Back to main page</button>
          </div>
        </Link>
        <div className="md:p-16  flex flex-col justify-center items-center">
          <div className="md:text-5xl text-2xl font-bold dark:text-white py-10">
            Mentorship Head
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {mentorshipHead && (
              <TeamCard
                email={mentorshipHead?.email}
                img={mentorshipHead?.image}
                name={mentorshipHead?.name}
                position="Mentorship Head"
                linkedin={mentorshipHead?.linkedin}
                insta={mentorshipHead?.instagram}
                // domain={member.domain}
              />
            )}
          </div>
          <div className="md:text-5xl text-2xl font-bold dark:text-white py-10">
            Overall Coordinators
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {overAllCoordinaters.map((member, index) => (
              <TeamCard
                key={index}
                email={member.email}
                img={member.image}
                name={member.name}
                position={member.member_type}
                linkedin={member.linkedin}
                // domain={member.domain}
              />
            ))}
          </div>
          <div className="md:text-5xl text-2xl font-bold dark:text-white py-10">
            Head Coordinators
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {headCoordinators.map((member, index) => (
              <TeamCard
                key={index}
                img={member.image}
                name={member.name}
                position={member.member_type}
                linkedin={member.linkedin}
                insta={member.instagram}
                domain={member.domain}
              />
            ))}
          </div>
          <div className="md:text-5xl text-2xl font-bold dark:text-white py-10">
            Managers
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {managers.map((member, index) => (
              <TeamCard
                key={index}
                img={member.image}
                name={member.name}
                position={member.member_type}
                linkedin={member.linkedin}
                insta={member.instagram}
                domain={member.domain}
              />
            ))}
          </div>
          <div className="md:text-5xl text-2xl font-bold dark:text-white py-10">
            Executives
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {executives.map((member, index) => (
              <TeamCard
                key={index}
                img={member.image}
                name={member.name}
                position={member.member_type}
                linkedin={member.linkedin}
                insta={member.instagram}
                domain={member.domain}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
