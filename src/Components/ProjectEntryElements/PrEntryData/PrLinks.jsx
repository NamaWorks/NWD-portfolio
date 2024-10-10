import React, { useContext, useEffect, useState } from 'react'
import { NavigationContext } from '../../../contexts/contexts'
import './PrLinks.css'
import { HoverMsg } from '../../UI/HoverMsg/HoverMsg'

const PrLinks = ({prObject, activePr}) => {
  const {selectedView} = useContext(NavigationContext)

  const [divWidth, setDivWidth] = useState(0)

  useEffect(()=>{
    !activePr && selectedView=="grid" && setDivWidth(0)
    activePr && selectedView=="grid" && setDivWidth("200%")
    selectedView == "list" && setDivWidth("auto")
  },[activePr, selectedView])

  return (
    <div className={`pr-links ${selectedView}`} style={{width: divWidth}}>
    {
      prObject.links.code.frontEnd ?
      (<a href={prObject.links.code.frontEnd} target="_blank" className={`pr-code-frontEnd dimmed ${selectedView}`} onMouseEnter={() => {HoverMsg("Open Link");}} onMouseLeave={() => {document.querySelectorAll(".hover-text").forEach((item)=>{item.remove()});}} >[gh-frontend]</a>)
      : (<a href={prObject.links.code.frontEnd} target="_blank" className={`pr-year dimmed inactive ${selectedView}`}>[gh-frontend]</a>)
      
    }
    {
      prObject.links.code.backEnd ? 
      (<a href={prObject.links.code.backEnd} target="_blank" className={`pr-backEnd dimmed ${selectedView}`} onMouseEnter={() => {HoverMsg("Open Link");}} oonMouseLeave={() => {document.querySelectorAll(".hover-text").forEach((item)=>{item.remove()});}}>[gh-backend]</a>)
        : (<a href={prObject.links.code.backEnd} target="_blank" className={`pr-backEnd dimmed inactive ${selectedView}`}>[gh-backend]</a>)
    }
    {
      prObject.links.deployment.frontEnd ? 
      (<a href={prObject.links.deployment.frontEnd} target="_blank" className={`pr-deployment-frontEnd dimmed ${selectedView}`} onMouseEnter={() => {HoverMsg("Open Link");}} oonMouseLeave={() => {document.querySelectorAll(".hover-text").forEach((item)=>{item.remove()});}}>[deployment-frontend]</a>)
      : (<a href={prObject.links.deployment.frontEnd} target="_blank" className={`pr-deployment-frontEnd dimmed inactive ${selectedView}`}>[deployment-frontend]</a>)
    }
    {
      prObject.links.deployment.backEnd ? 
      (<a href={prObject.links.deployment.backEnd} target="_blank" className={`pr-deployment-backEnd dimmed ${selectedView}`} onMouseEnter={() => {HoverMsg("Open Link");}} oonMouseLeave={() => {document.querySelectorAll(".hover-text").forEach((item)=>{item.remove()});}}>[deployment-backend]</a>)
      : (<a href={prObject.links.deployment.backEnd} target="_blank" className={`pr-deploymwnt-backEnd dimmed inactive ${selectedView}`}>[deployment-backend]</a>)
    }
    </div>
  )
}

export default PrLinks