import React from 'react';
import './HeroSection.css';
import blob from '../../assets/images/blob.svg';
import blob2 from '../../assets/images/blob2.svg';
const HeroSection = () => {   
  return (
    <div className="container flex lg:justify-center lg:items-center w-screen h-auto p-0">
    <div className='flex flex-col card bg-white dark:bg-gray-900 lg:flex-row sm:p-8'>
        <div className="lg:w-1/2 leftSection flex flex-col justify-center">
            <h3 className='text-2xl md:text-3xl text-gray-900 dark:text-white font-sans font-bold antialiased mt-7 md:mt-10 ml-10'>TCP PRESENTS</h3>
            <h1 className='text-5xl md:text-7xl antialiased text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-700 dark:from-blue-100 dark:to-blue-500 font-sans font-bold mt-8 md:ml-10 mr-0 sm:mr-10 lg:mr-0 pb-4 text-center md:text-left' >MENTORSHIP</h1>
            <h1 className='text-5xl md:text-7xl antialiased text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-700 dark:from-blue-100 dark:to-blue-500 font-sans font-bold md:ml-10 mr-0 sm:mr-10 lg:mr-0 pb-4 text-center md:text-left' >PROGRAM 2024</h1>
            <p className="text-xl md:text-2xl text-left text-zinc-700 dark:text-white font-sans antialiased mt-10 md:ml-10 m-0 sm:mr-10 lg:mr-0  md:text-left">Empower Your Coding Journey with Expert Mentorship</p>
            <p className="text-xl md:text-2xl text-left text-zinc-700 dark:text-white font-sans antialiased mt-5 md:ml-10 m-0 sm:mr-10 lg:mr-0  md:text-left">Elevate your skills in competitive programming, data structures and algorithms, and software development with our personalized mentorship program.</p>
        </div>
        <div className="lg:w-1/2 rightSection flex justify-center items-center">
            <img className='rounded-full h-3/4 mt-5 lg:mt-0 mr-0 sm:mr-10 md:mr-0' src="https://img.freepik.com/free-vector/help-support-climbing-employee-from-mentor-leader-hand-team-corporate-people-walking-up-ladder-together-flat-vector-illustration-success-career-growth-leadership-teamwork-concept_74855-21923.jpg?w=900&t=st=1703416751~exp=1703417351~hmac=b096e902a92a4ddc22501da258340085f3ed8fb5670a0bc07da47bad782b3e95" alt="mentorship" />
        </div>
    <img className="blob m-0 p-0" src={blob} />
    </div>
    {/* <p className='text-2xl font-sans font-bold antialiased text-gray-900'> Visitor Count
    <img src="https://hitwebcounter.com/counter/counter.php?page=10496826&style=0027&nbdigits=9&type=page&initCount=0" title="Counter Widget" Alt="Visit counter For Websites"   border="0" />
    </p> */}
    </div>
  );
};

export default HeroSection;