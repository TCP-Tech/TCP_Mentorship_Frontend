import React, { useState } from 'react'
import Mentorimg from './Mentorimg.jpg'
import Menteeimg from './Menteeimg.jpg'
import MenteeLog from './MenteeLog';
import Mentorlog from './Mentorlog';

const Login = () => {
  const [usertype, setusertype] = useState("Mentee");
  const menteebutton=document.getElementById('mentee');
  const mentorbutton=document.getElementById('mentor');

  const mentorlogin= (e)=>{
    setusertype("Mentor");
    console.log(menteebutton.classList)
    menteebutton.classList.remove("border-4")
    mentorbutton.classList.add("border-4");
  }
  
  const Menteelogin=()=>{
    setusertype("Mentee");
    console.log(mentorbutton.classList)
    mentorbutton.classList.remove("border-4");
    menteebutton.classList.add("border-4");
  }
  return (
      
<div  className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div  className="sm:mx-auto sm:w-full sm:max-w-sm">
  <div className=' text-center'>
  <button type="button" id='mentee' className='rounded-full mx-1 my-1 border-4 border-blue-600' onClick={Menteelogin}><img src={Menteeimg} alt="" className='h-36 w-36 rounded-full'/><span className='text-black'>Mentee</span></button>
  <button type="button" id='mentor' className='rounded-full  border-blue-600' onClick={mentorlogin}><img src={Mentorimg} alt="" className='h-36 w-36 rounded-full'/><span className='text-black'>Mentor</span></button>
  </div>
    <h2  className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your {usertype} account</h2>
  </div>

  {usertype=="Mentee"?<MenteeLog/>:<Mentorlog/>
    }
</div>
  
  )
}

export default Login