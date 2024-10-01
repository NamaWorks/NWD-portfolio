import ProjectEntry from '../../Components/ProjectEntry/ProjectEntry'
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
      <section id='projects-section'>

        <div className={`projects-container ${selectedView}`}>

        <ViewSwitch/>

          {
            prArr.map((pr, i)=>{
              return (
                <ProjectEntry
                prObject={pr}
                key={i}
              />
              )
            })
          }
        </div>

      </section>
    </>
  )
}

export default Projects