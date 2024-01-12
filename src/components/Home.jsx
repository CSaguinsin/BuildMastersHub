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


  const features = [
    { name: 'Is it free? (libre lang ba ito)', description: 'Yes, it is free for both construction professionals and individuals seeking construction services. (Oo, libre ito para sa parehong mga propesyonal sa konstruksiyon at mga indibidwal na naghahanap ng mga serbisyong konstruksiyon.)' },
    { name: 'How to be featured on the site? (Paano maging tampok sa site?)', description: 'If you are a construction professional just click register here button and answer all the fields. (Kung ikaw ay isang propesyonal sa konstruksiyon, i-click lamang ang pindutan na magparehistro dito at sagutin ang lahat ng mga patlang.)' },
    { name: 'Is it safe to use?', description: 'Yes it is safe to use because before we put construction professionals here we take some time to review them' },
    { name: 'What are the features of the site', description: 'You can find construction professionals based on their skills and job type. You can write a comment on the professionals profile so that their next client can see some feedback about them.' },
    { name: 'Why should we use it?', description: 'Because hiring skilled professionals is as effortless as a click. Elevate your builds by connecting with the best in the industry effortlessly.' },
  ]

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
                    <img src={Apply} alt="Apply" className="w-full h-full rounded-lg lg:h-full"/>             
                </div>  

                <div className="lg:w-1/2">
                <h1 className="Title lg:text-left md:text-left">Register Now! and be featured</h1>
                 <p className='text text-center sm:text-left'>
Ang BuildMasterHub ay naglalayong magsama ng mga kasanayan at oportunidad sa konstruksiyon sa pamamagitan ng teknolohiya. Sa kanilang plataporma, mas madaling makikilala at makahanap ng kliyente ang iyong serbisyo, na nagbubukas ng mga oportunidad para sa iyong negosyo sa industriya. Ang kanilang malawak na network at prestihiyosong platform ay magbibigay-daan sa iyo upang mapalawak ang iyong kita at magtagumpay bilang propesyonal sa larangan ng konstruksiyon.</p>
                  <Link to="https://buildmastershub-form.vercel.app/" target='_blank'>
                  <button className=" w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out">
                    <span className="font-medium text-[#333] group-hover:text-white">Register Here</span>
                  </button>
                </Link>
                </div>
            </div>
      </section>

      <div className="bg-white">
      <div className="mx-auto max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-gray-500">
          BuildMastersHub is a full stack web app project that aims to create a platform for construction workers to showcase their skills and connect with potential clients
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        
      </div>
    </div>

      <Footer />
    </>
  );
};

export default Parent;
