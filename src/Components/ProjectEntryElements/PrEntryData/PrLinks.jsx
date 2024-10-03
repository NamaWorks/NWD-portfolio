import React, { useContext } from 'react'
import { NavigationContext } from '../../../contexts/contexts'
import './PrLinks.css'

const PrLinks = ({prObject}) => {
  const {selectedView} = useContext(NavigationContext)
  return (
    <div className={`pr-links ${selectedView}`}>
    {
      prObject.links.code.frontEnd ?
      (<a href={prObject.links.code.frontEnd} target="_blank" className={`pr-code-frontEnd dimmed ${selectedView}`}>[gh-frontend]</a>)
      : (<a href={prObject.links.code.frontEnd} target="_blank" className={`pr-year dimmed inactive ${selectedView}`}>[gh-frontend]</a>)
      
    }
    {
      prObject.links.code.backEnd ? 
      (<a href={prObject.links.code.backEnd} target="_blank" className={`pr-backEnd dimmed ${selectedView}`}>[gh-backend]</a>)
        : (<a href={prObject.links.code.backEnd} target="_blank" className={`pr-backEnd dimmed inactive ${selectedView}`}>[gh-backend]</a>)
    }
    {
      prObject.links.deployment.frontEnd ? 
      (<a href={prObject.links.deployment.frontEnd} target="_blank" className={`pr-deployment-frontEnd dimmed ${selectedView}`}>[deployment-frontend]</a>)
      : (<a href={prObject.links.deployment.frontEnd} target="_blank" className={`pr-deployment-frontEnd dimmed inactive ${selectedView}`}>[deployment-frontend]</a>)
    }
    {
      prObject.links.deployment.backEnd ? 
      (<a href={prObject.links.deployment.backEnd} target="_blank" className={`pr-deployment-backEnd dimmed ${selectedView}`}>[deployment-backend]</a>)
      : (<a href={prObject.links.deployment.backEnd} target="_blank" className={`pr-deploymwnt-backEnd dimmed inactive ${selectedView}`}>[deployment-backend]</a>)
    }
    </div>
  )
}

export default PrLinks