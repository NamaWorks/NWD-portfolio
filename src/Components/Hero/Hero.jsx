import BottomBar from '../UI/BottomBar/BottomBar'
import './Hero.css'
import React from 'react'

const Hero = () => {
  return (
    <>
    <section id='hero-section'>
      <div className='image-title-container'>
          <div id='hero-img-container'>
            <img src="/public/assets/images/PedroBW.png" alt="that's me, Pedro" />
          </div>

          <div id='hero-image-description' >
            <div className="logo-container">
              <img src="/public/assets/images/NWD-brand/Dark Grey Logo.svg" alt="This is my personal logo" />
            </div>
            <h2>
              I support designers <br/> and agencies with <br/><span className='hl'>creative development</span>
            </h2>
          </div>

      </div>

      <div className='description-title-container'>

        <div id="hero-illustration">
          <img src="/public/assets/images/illustrations/Property 1=Frame 107.png" alt="illustration of me" />
        </div>

        <h1>creative <span className='hl'>MERN <br/> developer</span></h1>

        <p>
          Hey!,
          <br/>
            I'm Pedro Naya, a digital environment enthusiast based in Spain.
          <br/>
          <br/>
            You already know my main skills, but what you don't know is that I used to be a motion designer, but got attracted by the chance of creating stuff from scratch using code. Being able to, not just create final products, but to create tools that could be used in the creation of such products was what really got me.
          <br/>
          <br/>
            In my day to day I work with all kind of clients, I help them develop their products or services, making good use of all the knowledge adquired in my previous experience.
          <br/>
          <br/>
            Hope we can work together and create something truly amazing!
          <br/>
          <br/>
            <span className="hl">Happy coding!</span>
        </p>

      </div>

    </section>
    </>
  )
}

export default Hero