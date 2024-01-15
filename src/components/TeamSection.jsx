import React from 'react'
import { Link } from 'react-router-dom'

const TeamSection = () => {
  return (
    <div className="flex flex-col justify-center items-center my-60 space-y-16">
        <h1 className="text-5xl font-bold">Wondering who all make this possible?</h1>
        <Link to="/team">
        <button 
        className="bg-primary text-black  px-10 py-3 dark:text-white dark:bg-transparent dark:border dark:hover:bg-primary dark:hover:border-primary dark:hover:text-black transition-all duration-300 rounded-lg">
            Meet Our Team
        </button>
        </Link>
    </div>
  )
}

export default TeamSection