import Lottie from 'lottie-web'
import SideButton from '../UI/buttons/SideButton/SideButton'
import './Hero.css'
import React, { useEffect, useRef } from 'react'

const Hero = () => {

  
    const animationContainer = useRef(null)

    // useEffect(()=>{
    //   Lottie.loadAnimation({
    //     container: animationContainer.current,
    //     renderer: 'svg',
    //     loop: true,
    //     autoplay: true,
    //     path: "assets/images/illustrations/01_NWD_Illustration-AngryThinker_mask.mp4.lottie.json"
    //   })
    // },[])
    
  

  return (
    <>
    <section id='hero-section'>
      <div className='image-title-container'>
          <div id='hero-img-container'>
            <img src="/assets/images/PedroBW.png" alt="that's me, Pedro" />
          </div>

          <div id='hero-image-description' >
            <div className="logo-container">
              <img src="/assets/images/NWD-brand/Dark Grey Logo.svg" alt="This is my personal logo" />
              {window.innerWidth <= 890 && <img src="/assets/images/NWD-brand/Dark Grey Logo.svg" alt="This is my personal logo" />}
              {/* {window.innerWidth >= 890 && <img src="https://github.com/NamaWorks/NamaWorks/assets/136508151/ed690a3a-971f-4c1c-bf22-186252870ca9" alt="This is my personal logo" className='gif'/>} */}
            </div>
            <h2>
              I support designers <br/> and agencies with <br/><span className='hl'>creative development</span>
            </h2>
          </div>

      </div>

      <div className='description-title-container'>

        <div id="hero-illustration">
          {/* <img src="/assets/images/illustrations/Property 1=Frame 107.png" alt="illustration of me" /> */}
          <img src="/public/assets/images/illustrations/01_NWD_Illustration-AngryThinker_darkGrey.gif" alt="illustration of me" />
          {/* <div id='illustration-animation' ref={animationContainer} ></div> */}
          
          
        </div>

        <h1>creative <span className='hl'>MERN</span> <br/> <span className='hl'>developer</span></h1>

        <p>
          Hey!,
          <br/>
          <br/>
            I'm Pedro Naya, a digital environment enthusiast based in Spain.
          {/* <br/>
          <br/> */}
            {/* You already know my main skills, but what you don't know is that I used to be a motion designer, but got attracted by the chance of creating stuff from scratch using code.  */}
            {/* Being able to, not just create final products, but to create tools that could be used in the creation of such products was what really got me. */}
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