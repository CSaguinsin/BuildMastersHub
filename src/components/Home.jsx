import {useState, useEffect} from 'react'
import '../Style.css'
import { Container } from 'postcss'
import Graphic_Design from '../assets/Graphic/Graphic_Design.png'
import { Link } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after a short delay to ensure the animation runs on component mount
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);
  return (
    <>
          <Navbar />
          <section className='Section'>
        <div className={`container ${animate ? 'animate' : ''}`}>
          <div className={`reveal ${animate ? 'slide-in' : ''}`}>
            <h1 className='Title'>BUILDMASTERSHUB</h1>
            <p className='text'>BuildMastersHub is more than just a digital platform; it's a dynamic web application <br /> designed to revolutionize the construction industry. At its core, this innovative project <br /> seeks to empower skilled construction workers and foremen by providing them with a robust <br /> space to not only exhibit their expertise but also forge meaningful connections with prospective <br /> clients.</p>
          <Link to='/build-masters-hub'>
            <button class="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out">
              <span class="font-medium text-[#333] group-hover:text-white">Start Now</span>
            </button>
          </Link>
          </div>
          <div className="right">
            <img src={Graphic_Design} alt="Graphic Design" className='Graphic'/>
          </div>
      </div>
</section>

<Footer />


    </>
  )
}

export default Home