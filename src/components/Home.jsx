import { useState, useEffect } from 'react';
import '../Style.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Graphic_Design from '../assets/Graphic/Graphic_Design.png';

const Parent = () => {
  const name = "Welcome to BuildMastersHub!";
  const paragraph =
    "BuildMastersHub is more than just a digital platform, it's a dynamic web application designed to revolutionize the construction industry. At its core, this innovative project seeks to empower skilled construction workers and foremen by providing them with a robust space to not only exhibit their expertise but also forge meaningful connections with prospective clients.";
  return <Home name={name} paragraph={paragraph} />;
};

const Home = (props) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);

  return (
    <>
      <Navbar />
      <section className='Section'>
        <div className='container mx-auto px-4'>
          <div className='lg:flex lg:items-center lg:justify-between'>
            <div className={`lg:w-1/2 ${animate ? 'animate' : ''}`}>
              <div className={`reveal ${animate ? 'slide-in' : ''}`}>
                <h1 className='Title text-center sm:text-left'>{props.name}</h1>
                <p className='text text-center sm:text-left'>{props.paragraph}</p>
                <Link to='/login'>
                  <button className="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out">
                    <span className="font-medium text-[#333] group-hover:text-white">Start Now</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className='lg:w-1/2 lg:order-first'>
              <img
                src={Graphic_Design}
                alt="Graphic Design"
                className='Graphic w-full rounded-lg'
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Parent;
