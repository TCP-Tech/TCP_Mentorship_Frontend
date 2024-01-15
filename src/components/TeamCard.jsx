import React from 'react'
import { FaLinkedin } from 'react-icons/fa';

const TeamCard = ({
    img,
    name,
    position,
    linkedin,
    domain,
}) => {
    return (
        <div className="p-10 bg-white text-center overflow-hidden relative rounded-2xl w-[350px] h-[25rem] group">
          <div className="inline-block  h-40 w-40 mb-4 bg-primary group-hover:bg-white overflow-hidden  border-[8px] border-primary rounded-full">
            <img
              src={img}
              alt={`${name}'s profile`}
              className="w-full h-full bg-primary object-cover rounded-full transform scale-100 group-hover:scale-90 transition-all ease-in-out duration-500"
            />
          </div>
          <div className="mb-4">
            <h3 className="block text-2xl font-semibold capitalize">{name}</h3>
            <h4 className="block text-lg text-primary font-semibold capitalize">{position}</h4>
            <h4 className="block text-gray-500 font-semibold">{domain}</h4>
          </div>
          <ul className="social absolute bottom-0 left-0 w-full transform translate-y-full transition-all ease-in-out duration-500 group-hover:translate-y-0 bg-primary rounded-tr-[80%] rounded-tl-[80%]">
            <li className="inline-block mt-2">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 rounded-full text-white text-lg transition-all ease-in-out duration-500  hover:text-primary hover:bg-white "
              >
               <FaLinkedin className='text-black w-6 h-6 hover:text-primary'/>
              </a>
            </li>
          </ul>
        </div>
      );
    
}

export default TeamCard