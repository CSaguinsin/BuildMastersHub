import { useState, useEffect } from 'react';
import Links from './Links.jsx'
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Graphic_Design from '../assets/Graphic/Graphic_Design.png';
import Apply from '../assets/Graphic/apply.png';
import Linkss from './Links.jsx';


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
      <section className="container px-6 py-12 mx-auto">
      <div className="container px-6 py-12 mx-auto flex flex-col lg:flex-row">
          <div className='flex flex-col-reverse lg:flex-row items-center justify-between'>
            <div className={`lg:w-1/2 ${animate ? 'animate' : ''}`}>
              <div className={`reveal ${animate ? 'slide-in' : ''}`}>
                <h1 className="Title lg:text-left md:text-left">{props.name}</h1>
                <p className='text text-center sm:text-left'>{props.paragraph}</p>
                <Link to='/login'>
                  <button className=" w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out">
                    <span className="font-medium text-[#333] group-hover:text-white">Start Now</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className='lg:w-1/2 lg:pl-6'>
              <img
                src={Graphic_Design}
                alt="Graphic Design"
                className="object-cover w-full h-64 rounded-lg lg:h-96"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
            <div className="container px-6 py-12 mx-auto flex flex-col lg:flex-row">
                <div className="lg:w-1/2">                
                    <img src={Apply} alt="Apply" className="object-cover w-full h-64 rounded-lg lg:h-96" />              
                </div>  

                <div className="lg:w-1/2">
                <h1 className="Title lg:text-left md:text-left">Register Now!</h1>
                 <p className='text text-center sm:text-left'>
Ang BuildMasterHub ay naglalayong magsama ng mga kasanayan at oportunidad sa konstruksiyon sa pamamagitan ng teknolohiya. Sa kanilang plataporma, mas madaling makikilala at makahanap ng kliyente ang iyong serbisyo, na nagbubukas ng mga oportunidad para sa iyong negosyo sa industriya. Ang kanilang malawak na network at prestihiyosong platform ay magbibigay-daan sa iyo upang mapalawak ang iyong kita at magtagumpay bilang propesyonal sa larangan ng konstruksiyon.</p>
                  <Link to="https://buildmastershub-form.vercel.app/" target='_blank'>
                  <button className=" w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out">
                    <span className="font-medium text-[#333] group-hover:text-white">Apply Here</span>
                  </button>
                </Link>
                </div>
            </div>
            
      </section>

      

      <Footer />
    </>
  );
};

export default Parent;
