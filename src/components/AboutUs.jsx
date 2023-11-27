import React from 'react'
import '../Style.css'
import Graphic_Design_2 from '../assets/Graphic/Graphic_Design_2.png'
import Graphic_Design_3 from '../assets/Graphic/Graphic_Design_3.png'
import Graphic_Design_4 from '../assets/Graphic/Graphic_Design_4.png'
import Graphic_Design_5 from '../assets/Graphic/Graphic_Design_5.png'
import Construction from '../assets/Graphic/construction.jpg'
import Example from '../components/Example'
import WhyUseThis from '../components/WhyUseThis'

const AboutUs = () => {
  return (
    <>
      <section className='Section'>
            <div className="container">
                <div className="left">
                  <h1 className='About'>About Us</h1>
                  <h1 className='Second_Title'>Welcome to BuildMastersHub,
                      <br />the innovative web app 
                      connecting construction 
                      professionals with clients! 
                  </h1>
                  <p className='text'>
                  At BuildMasterHub, we understand the importance of showcasing talent in the construction industry. Whether you're a seasoned professional with years of experience or a skilled artisan looking to expand your network, our platform offers a seamless solution to exhibit your skills and expertise. <br /> 
                  <br ></br>
                  Our mission is simple: to bridge the gap between talented construction professionals and clients seeking their expertise. By creating a user-friendly and interactive space, we aim to foster meaningful connections that benefit both parties.
                  </p>
                </div>
                <div className="right">
                  <img src={Graphic_Design_2} alt="Graphic Design" className='Graphic'/>
                </div>
            </div>
      </section>

      {/* <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1 className='puncline'>Our Strategy is very personalized <br></br>
              to meet your needs construction <br></br> needs
            </h1>
            <div className='content-container' style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <div className='left'>
                <img src={Graphic_Design_3} alt="Graphic Design" className='Graphic'/>
              </div>
              <div className='right'>
                <img src={Graphic_Design_4} alt="Graphic Design" className='Graphic'/>
              </div>
            </div>
      </section> */}

      {/* <Example /> */}
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

    </>
  )
}

export default AboutUs