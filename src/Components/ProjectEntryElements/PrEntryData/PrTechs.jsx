import React, { useContext } from 'react'
import { NavigationContext } from '../../../contexts/contexts'
import './PrTechs.css'

const PrTechs = ({prObject}) => {
  const {selectedView} = useContext(NavigationContext)
  return (
    <div className={`pr-technologies ${selectedView}`}>
    {
      prObject.technologies.map((tech, i)=>{
        return(
          <p className={`pr-tecnologie dimmed ${selectedView}`} key={i}>{tech}</p>
        )
      })
    }
  </div>
  )
}

export default PrTechs