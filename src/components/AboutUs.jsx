import React from 'react'
import '../Style.css'
import Graphic_Design_2 from '../assets/Graphic/Graphic_Design_2.png'
import Graphic_Design_3 from '../assets/Graphic/Graphic_Design_3.png'
import Graphic_Design_4 from '../assets/Graphic/Graphic_Design_4.png'
import Graphic_Design_5 from '../assets/Graphic/Graphic_Design_5.png'
import Construction from '../assets/Graphic/construction.jpg'
import Example from '../components/Example'
import WhyUseThis from '../components/WhyUseThis'
import Navbar from './Navbar.jsx'
import Me from '../assets/logo/Me.jpg'
import Footer from '../components/Footer.jsx'

const Things = () => {
  const title = "Welcome to BuildMastersHub,\nthe innovative web app connecting construction professionals with clients!";
  const text = "At BuildMasterHub, we understand the importance of showcasing talent in the construction industry. Whether you're a seasoned professional with years of experience or a skilled artisan looking to expand your network, our platform offers a seamless solution to exhibit your skills and expertise.\nOur mission is simple: to bridge the gap between talented construction professionals and clients seeking their expertise. By creating a user-friendly and interactive space, we aim to foster meaningful connections that benefit both parties.";
  const meet = "Meet the Founder";
  const intro = "Hi, I'm Carl Saginsin 👾";
  const paragraph = "the founder and developer of BuildMastersHub. Our platform embodies the fusion of innovative technologies like React, TailwindCSS, and Firebase.\nBuildMastersHub serves as a dynamic hub for clients and construction professionals, facilitating seamless connections. We utilize React for its dynamic user interface, enhanced by the stylish elements of TailwindCSS. Firebase plays a pivotal role in empowering real-time features and ensuring a scalable architecture, while driving the backend operations.";
  return (
    <AboutUs title={title} text={text} meet={meet} intro={intro} paragraph={paragraph} />
) ; 
};

const AboutUs = (props) => {
  return (
    <>
          <Navbar />
      <section className='Section'>
            <div className="container">
                <div className="left">
                  <h1 className='About'>About Us</h1>
                  <h1 className='Second_Title'>{props.title}</h1>
                  <p className='text'>{props.text}</p>
                </div>
                <div className="right">
                  <img src={Graphic_Design_2} alt="Graphic Design" className='Graphic'/>
                </div>
            </div>
      </section>
      <WhyUseThis />


      <section >
      <div className='container'>
          <div className='left'>
            <img src={Graphic_Design_5} alt="Graphic Design" className='Graphic'/>
          </div>
          <div className='right'>
            <h1 className='Second_Title'>Ensuring your complete <br ></br> satisfaction is our ultimate goal</h1>
            <p className='text'>At BuildMasterHub, we understand the importance of showcasing talent in the <br></br> construction industry. Whether you're a seasoned professional with years of experience <br></br> or a skilled artisan looking to expand your network, our platform offers a <br></br> seamless solution to exhibit your skills and expertise.</p>
            <p className='text'>Our mission is simple: to bridge the gap between talented construction professionals <br></br> and clients seeking their expertise. By creating a user-friendly and interactive space,<br></br> we aim to foster meaningful connections that benefit both parties.</p>
          </div>
      </div>
      </section>

      <section>
        <div className='container'>
            <div className="left">
            <h1 className='About'>{props.meet}</h1>
                      <h1 className='Second_Title'>{props.intro}</h1>
                      <p className='text'>
                      {props.paragraph}
                      <br></br>
                      <br ></br>
                      It's more than a platform, it's a conduit that unites visions with the tools to materialize them. Welcome to BuildMastersHub!
                      </p>
            </div>
            <div className='right'>
            <div className="flex items-center justify-center">
  <div className="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
    <button className="profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
      <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
        <svg viewBox="0 0 128 128">
          <g fill="#61DAFB">
            <circle r="11.4" cy={64} cx={64} />
            <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
          </g>
        </svg>
      </span>
    </button>
    <button className="profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
      <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
        <svg
          viewBox="0 0 48 48"
          y="0px"
          x="0px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
            fill="#00acc1"
          />
        </svg>
      </span>
    </button>
    <button className="profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
      <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
        <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"
            fill="#0acf83"
          />
          <path
            d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"
            fill="#a259ff"
          />
          <path
            d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"
            fill="#f24e1e"
          />
          <path
            d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
            fill="#ff7262"
          />
          <path
            d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"
            fill="#1abcfe"
          />
        </svg>
      </span>
    </button>

    <button className="profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
      <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
      <svg
          viewBox="0 0 48 48"
          y="0px"
          x="0px"
          xmlns="http://www.w3.org/2000/svg"
        >
  <path
    fill="#ff8f00"
    d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"
  />
  <path
    fill="#ffa000"
    d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"
  />
  <path
    fill="#ff6f00"
    d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"
  />
  <path
    fill="#ffc400"
    d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z"
  />
        </svg>
      </span>
    </button>


    <button className="profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
      <div className="w-full h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
        <img
          src={Me}
          alt="Profile Image"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
    </button>
  </div>
</div>


            </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Things;