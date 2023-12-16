import React from 'react'
import { Link } from 'react-router-dom'
import error404 from '../assets/Graphic/error.png';
import '../Style.css';
const Error = () => {
  return (
    <>
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <img src={error404} alt="404" className='errorgraphic' />
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/"
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default Error