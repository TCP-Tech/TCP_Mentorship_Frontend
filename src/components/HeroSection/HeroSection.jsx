import React from 'react';
import './HeroSection.css';
import blob from '../../assets/images/blob.svg';
import blob2 from '../../assets/images/blob2.svg';
const HeroSection = () => {
  return (
    <div className="container p-0">
    <div className='flex h-max card'>
        <div className="w-1/2 leftSection flex flex-col justify-center">
            <h3 className='text-3xl text-gray-900 font-sans font-bold antialiased ml-10'>TCP PRESENTS</h3>
            <h1 className='text-7xl antialiased text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-700 font-sans font-bold mt-10 ml-10 pb-4' >MENTORSHIP</h1>
            <h1 className='text-7xl antialiased text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-700 font-sans font-bold ml-10 pb-4' >PROGRAM 2024</h1>
            <p className="text-2xl text-zinc-700 font-sans antialiased mt-12 ml-10">Empower Your Coding Journey with Expert Mentorship</p>
            <p className="text-2xl text-zinc-700 font-sans antialiased mt-6 ml-10">Elevate your skills in competitive programming, data structures and algorithms, and software development with our personalized mentorship program.</p>
        </div>
        <div className="w-1/2 rightSection flex justify-center items-center">
            <img className='rounded-full h-3/4' src="https://img.freepik.com/free-vector/help-support-climbing-employee-from-mentor-leader-hand-team-corporate-people-walking-up-ladder-together-flat-vector-illustration-success-career-growth-leadership-teamwork-concept_74855-21923.jpg?w=900&t=st=1703416751~exp=1703417351~hmac=b096e902a92a4ddc22501da258340085f3ed8fb5670a0bc07da47bad782b3e95" alt="mentorship" />
        </div>
    <img className="blob m-0 p-0" src={blob} />
    </div>
    </div>
  );
};

export default HeroSection;