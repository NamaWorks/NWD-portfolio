import { useEffect, useState } from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import BottomBar from './Components/UI/BottomBar/BottomBar'
import SideButton from './Components/UI/buttons/SideButton/SideButton'
import Projects from './pages/Projects/Projects'
import { NavigationContext } from './contexts/contexts'
// import HoverMsg from './Components/UI/HoverMsg/HoverMsg.jsx'
// import { HoverMsg } from './Components/UI/HoverMsg/HoverMsg'



function App() {
  
  const [currentSection, setCurrentSection] =  useState("hero-section")
  const [selectedView, setSelectedView] = useState("list")
  const [openProjects, setOpenProjects] = useState()
  
  const changeSection=()=>{
    if(currentSection == "hero-section"){
      location.href = "#projects-section"
      setCurrentSection("projects-section")
    } else {
      location.href = "#hero-section"
      setCurrentSection("hero-section")
    }
  }
  
  useEffect(()=>{
    if(currentSection == "hero-section"){
      document.querySelector("body").style.backgroundColor = "#E7E4DE"
    } else {
      document.querySelector("body").style.backgroundColor = "#EEEEEC"
    }
  },[currentSection])

  return (
    <>
  <NavigationContext.Provider value={{currentSection, setCurrentSection, selectedView, setSelectedView, openProjects, setOpenProjects}}>
  
    <Navbar />
    <Hero />
    <Projects/>
    <SideButton
      innerText={currentSection == "hero-section" ? "[See Projects]" : "[Back to Home]"}
      hl={true}
      fnc={changeSection}
      />
    <BottomBar/>

  </NavigationContext.Provider>
    </>
  )
}

export default App
