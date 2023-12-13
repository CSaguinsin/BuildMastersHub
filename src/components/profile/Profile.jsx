import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/Light_Mode.png'
import NoPic from '../../assets/logo/no_pic.jpg'  
import '../../Style.css';
const Profile = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
            <img src={Logo} alt="Logo" className='SideLogo'/>
            <div className='container'>
          <div className='left'>
              <img 
                src={NoPic}
                alt="card-image"
                className="NoPic"/>
          </div>
          <div className='right'>
          <h1 className="text-3xl text-gray-700 dark:text-gray-200 font-bold my-4">Profile</h1>
            <p className="text-gray-700 dark:text-gray-300 ">
              This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks
            </p>
          </div>
        </div>

            <Link to='/build-masters-hub'>
              <a href="#" className="inline-block">
              <button class="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out">
              <span class="font-medium text-[#333] group-hover:text-white">Back</span>
            </button>
              </a>
            </Link>
          </div>
    </>
  )
}

export default Profile