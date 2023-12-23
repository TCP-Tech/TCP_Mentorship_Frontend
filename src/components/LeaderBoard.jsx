import React from 'react';

const LeaderBoard = () => {
  return (
    <div className='text-black flex flex-col text-center items-center'>
      <h1 className='text-3xl'>LeaderBoard</h1>
      <div className='team-leaderboard w-1/2 h-1/2 bg-white border border-black mx-20 overflow-hidden'>
        <div className='flex'>
            <div className='flex flex-col'>
       <img src=''/>
       <h1>!st one</h1>
       </div>
            <div className='flex flex-col'>
       <img src=''/>
       <h1>2nd one</h1>
       </div>
            <div className='flex flex-col'>
       <img src=''/>
       <h1>3rd one</h1>
       </div>
       </div>
      </div>
      {/* <div className='Team-display'>
               {
                team-data.map((data)=>(
                    <div>
                        <img src=''/>
                        <h1></h1>
                    </div>
                ))
               }
      </div> */}
    </div>
  );
};

export default LeaderBoard;
