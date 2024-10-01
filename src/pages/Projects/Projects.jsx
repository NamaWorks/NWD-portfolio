import ProjectEntry from '../../Components/ProjectEntry/ProjectEntry'
import ProjectEntryGrid from '../../Components/ProjectEntryGrid/ProjectEntryGrid'
import ViewSwitch from '../../Components/UI/buttons/ViewSwitch/ViewSwitch'
import { NavigationContext } from '../../contexts/contexts'
import { projectsData } from '../../utils/projects-data'
import './Projects.css'
import React, { useContext, useEffect, useMemo, useState } from 'react'


const Projects = () => {

  const {selectedView}=useContext(NavigationContext)

  
  const prArr = useMemo(()=>{
      let arr=[]
      console.clear()
      for (const pr in projectsData) {
        arr.push(projectsData[pr])
      }
      return arr
  },[projectsData])


  return (
    <>
      <section id='projects-section' className={selectedView}>

        <ViewSwitch/>
        <div className={`projects-container ${selectedView}`}>


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