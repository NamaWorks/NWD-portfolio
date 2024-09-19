import ProjectEntry from '../../Components/ProjectEntry/ProjectEntry'
import './Projects.css'
import React from 'react'

const Projects = () => {
  return (
    <>
      <section id='projects-section'>

        <div className='projects-container'>
          <ProjectEntry/>
        </div>

      </section>
    </>
  )
}

export default Projects