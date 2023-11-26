import React from 'react'
import '../Style.css'
import Graphic_Design_2 from '../assets/Graphic/Graphic_Design_2.png'

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

      <section style={{ backgroundColor: '#FDF0CE', marginLeft: '5rem', marginRight: '5rem'}}>
            <h1 style={{ textAlign: 'center', fontFamily: 'Chakra Petch', color: '#1854EE' }}>Why use this app</h1>
            <h1 className='puncline'>Our Strategy is very personalized <br></br>
                        to meet your needs construction <br></br> needs
            </h1>
      </section>
    </>
  )
}

export default AboutUs