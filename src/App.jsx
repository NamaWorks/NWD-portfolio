import { useEffect, useState } from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import BottomBar from './Components/UI/BottomBar/BottomBar'
import SideButton from './Components/UI/buttons/SideButton/SideButton'
import Projects from './pages/Projects/Projects'
import { NavigationContext } from './contexts/contexts'
import { handleScroll } from './utils/functions/handleScroll'


function App() {

  const [currentSection, setCurrentSection] =  useState("hero-section")
  const [selectedView, setSelectedView] = useState("list")

  useEffect(()=>{
    if(currentSection == "hero-section"){
      document.querySelector("body").style.backgroundColor = "#E7E4DE"
    } else {
      document.querySelector("body").style.backgroundColor = "#EEEEEC"
    }
  },[currentSection])

  return (
    <>
  <NavigationContext.Provider value={{currentSection, setCurrentSection, selectedView, setSelectedView}}>
  
    <Navbar />
    <Hero />
    <Projects/>
    <SideButton
      innerText={currentSection == "hero-section" ? "[See Projects]" : "[Back to Home]"}
      hl={true}
      fnc={()=>{
        if(currentSection == "hero-section"){
          location.href = "#projects-section"
          setCurrentSection("projects-section")
        } else {
          location.href = "#hero-section"
          setCurrentSection("hero-section")
        }
        }
      }
      />
    <BottomBar/>

  </NavigationContext.Provider>
    </>
  )
}

export default App
