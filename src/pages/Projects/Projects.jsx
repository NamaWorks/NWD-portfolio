import ProjectEntry from '../../Components/ProjectEntryElements/ProjectEntry/ProjectEntry'
import ProjectEntryGrid from '../../Components/ProjectEntryElements/ProjectEntryGrid/ProjectEntryGrid'
import ViewSwitch from '../../Components/UI/buttons/ViewSwitch/ViewSwitch'
import { NavigationContext } from '../../contexts/contexts'
import { transformScroll } from '../../utils/functions/transformScroll'
import { projectsData } from '../../utils/projects-data'
import './Projects.css'
import React, { useContext, useEffect, useMemo, useState } from 'react'


const Projects = () => {

  const {selectedView}=useContext(NavigationContext)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  
  const prArr = useMemo(()=>{
      let arr=[]
      console.clear()
      for (const pr in projectsData) {
        arr.push(projectsData[pr])
      }
      return arr
  },[projectsData])


  useEffect(()=>{
    
  },[])

  return (
    <>
      <section id='projects-section' className={selectedView}
        onWheel={selectedView == "grid" && transformScroll}
        >

        {windowWidth>=800 && <ViewSwitch/> }

        <div 
          className={`projects-container ${selectedView}`}
        >


          {
            prArr.map((pr, i)=>{
              if(selectedView == "list"){
                return (
                  <ProjectEntry
                  prObject={pr}
                  key={i}
                />
                )
              } else if (selectedView == "grid"){
                return (
                  <ProjectEntryGrid
                  prObject={pr}
                  key={i}
                />
                )
              }
            })
          }
        </div>

      </section>
    </>
  )
}

export default Projects