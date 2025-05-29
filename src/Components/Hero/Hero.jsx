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
            <img src="/assets/images/PedroBW.webp" alt="that's me, Pedro" />
          </div>

          <div id='hero-image-description' >
            <div className="logo-container">
              <img src="/assets/images/NWD-brand/Dark Grey Logo.svg" alt="This is my personal logo" />
              {/* {window.innerWidth <= 890 && <img src="/assets/images/NWD-brand/Dark Grey Logo.svg" alt="This is my personal logo" />} */}
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
          <img src="/assets/images/illustrations/01_NWD_Illustration-AngryThinker_darkGrey.gif" alt="illustration of me" />
          {/* <div id='illustration-animation' ref={animationContainer} ></div> */}
          
          
        </div>

        <h1>creative <span className='hl'>MERN</span> <br/> <span className='hl'>developer</span></h1>

        <p>
          Hey!,
          <br />
          <br />

I'm Pedro Naya - a digital environment enthusiast and freelance web developer based in Spain. I help businesses and individuals bring their ideas to life through thoughtful, scalable, and user-friendly web solutions.
<br/>
<br/>

I work mostly within the React ecosystem, using tools like Next.js for smooth frontend experiences, and building out backend services to power robust, end-to-end applications. My focus is always on clean architecture, performance, and creating experiences that feel just right for the user.
I've collaborated with a variety of clients, adapting to different goals, timelines, and technical needs. Whether you’re building a new product from scratch or need someone to jump in and boost your existing project, I bring clarity, creativity, and a get-things-done attitude to the table.

<br/>
<br/>

Let’s work together and build something truly great.
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