import React from 'react';
import Donation from '../assets/Graphic/donate.png';
import Bayad from '../assets/Graphic/gcash.jpg'
import '../Style.css';
import { Link } from 'react-router-dom';

const Donate = () => {
  return (
    <>
        <section>
            <h1 className='donationtitle'>Supporting BuildMastersHub:<br /> Your donation keeps our code sharp and the website smoother!</h1>
            <p className='donationparagph'>Join the force behind our tech magic! Your contribution isn't just a donation, <br /> it's the spark that keeps our code wizardry alive, ensuring our website stays sleek, efficient,<br /> and top-notch. Together, let's fuel innovation and keep the digital world vibrant. Donate today and be part of our tech-savvy journey</p>
            <img src={Donation} alt="Donation" className='donationgraphic'/>
            <h1 className='donationtitle'>Donate via GCash</h1>
            <img src={Bayad} alt="Gcash" className='donationgraphic'/>  
            <Link to='/build-masters-hub'>
                    <a href="#" className="inline-block">
                    <button class="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out">
                    <span class="font-medium text-[#333] group-hover:text-white">Back</span>
                    </button>
                    </a>
            </Link> 
        </section>
    </>
  )
}

export default Donate