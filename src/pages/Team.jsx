import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import tcp from "../assets/images/tcp.png"
import tcplight from "../assets/images/tcpLogo.png"
import { base_url } from '../utils/urls'
import TeamCard from '../components/TeamCard'
import TeamNav from '../components/TeamNav'
const Team = () => {
    const url = base_url + "team/" + "2023";
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data =await response.json();
    //   console.log(data[0].data);
    //   console.log("State" , state)
      setState({
        data: data[0].data,
        loading: false,
      });
    };
    fetchData();
  }, []);
  const overAllCoordinaters = state.data.filter((member) => member.Designation == "Overall Coordinator")
  const headCoordinaters = state.data.filter((member) => member.Designation == "Head Coordinator" || member.Designation == "Domain Lead")
  const managers = state.data.filter((member) => member.Designation == "Manager")
  const executives = state.data.filter((member) => member.Designation == "Executive")
  return (
    <div className="text-black w-screen h-full flex flex-col items-center text-center dark:bg-gray-800 ">
      <nav className='w-screen fixed z-50'>
        <TeamNav/>
      </nav>
        <div className="flex justify-center items-center py-12  gap-2">
          <img 
          src={tcp}
          className="md:w-32 md:h-32 w-20 h-20 dark:block hidden"
          alt='tcp-logo'/>
          <img 
          src={tcplight}
          className="md:w-32 md:h-32 w-20 h-20 dark:hidden block"
          alt='tcp-logo'/>
          <h1 className="font-bold md:text-7xl text-4xl dark:text-white">Team TCP</h1>
        </div>
          <Link to="/">
            <div
            className="bg-primary flex space-x-2 md:ml-10 text-lg px-10 py-4 text-white hover:bg-[--tertiary-c] dark:bg-transparent dark:border dark:hover:bg-primary dark:hover:border-primary dark:hover:text-black transition-all duration-300 rounded-lg">
          <FaArrowLeft className='mt-1' />
          <button 
            >
           Back to main page
        </button>
        </div>
          </Link>
          <div className='md:p-16  flex flex-col justify-center items-center'>
          <div className="md:text-5xl text-2xl font-bold dark:text-white py-10">Overall Coordinators</div>
        <div className="flex flex-wrap justify-center gap-4">
          {overAllCoordinaters.map((member, index) => (
            <TeamCard
              key={index}
              email={member.Email}
              img={member.Photo}
              name={member.Name}
              position={member.Designation}
              linkedin={member.linkedin}
            //   domain={member.Domain}
            />
          ))}
        </div>
        <div className="md:text-5xl text-2xl font-bold dark:text-white py-10">Head Coordinators</div>
        <div className="flex flex-wrap justify-center gap-4">
          {headCoordinaters.map((member, index) => (
            <TeamCard
              key={index}
              img={member.Photo}
              name={member.Name}
              position={member.Designation}
              linkedin={member.linkedin}
              domain={member.Domain}
            />
          ))}
        </div>
        <div className="md:text-5xl text-2xl font-bold dark:text-white py-10">Managers</div>
        <div className="flex flex-wrap justify-center gap-4">
          {managers.map((member, index) => (
            <TeamCard
              key={index}
              img={member.Photo}
              name={member.Name}
              position={member.Designation}
              linkedin={member.linkedin}
              domain={member.Domain}
            />
          ))}
        </div>
        <div className="md:text-5xl text-2xl font-bold dark:text-white py-10">Executives</div>
        <div className="flex flex-wrap justify-center gap-4">
          {executives.map((member, index) => (
            <TeamCard
              key={index}
              img={member.Photo}
              name={member.Name}
              position={member.Designation}
              linkedin={member.linkedin}
              domain={member.Domain}
            />
          ))}
        </div>
        </div>
      </div>
  )
}

export default Team