import React from 'react'
import { HorizontalCard } from './HorizontalCard'
import Logo from '../assets/logo/Light_Mode.png'
import { Link } from 'react-router-dom'
import '../Style.css'

const BuildMastersHub = () => {
  return (
    <>
<aside
  id="cta-button-sidebar"
  className="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0"
  aria-label="Sidebar"
  >
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
          <Link to='/'>
            <img src={Logo} alt="Logo" className='SideLogo'/>
          </Link>
          </a>
        </li>
        <li>
          <p className='Second_Title'>Discover and Connect with Skilled Professionals.</p>
        </li>
      </ul>

    </div>
  </aside>
  
      <HorizontalCard />
      <br></br>
      <HorizontalCard />
      <br></br>
      <HorizontalCard />
      <br></br>
      <HorizontalCard />
      <br></br>
      <HorizontalCard />
    </>
  )
}

export default BuildMastersHub