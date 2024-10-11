import React, { useContext, useEffect, useState } from 'react'
import { NavigationContext } from '../../../contexts/contexts'
import './PrLinks.css'
import { HoverMsg } from '../../UI/HoverMsg/HoverMsg'
import PrLinkItem from '../../UI/PrLinkItem/PrLinkItem'

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

    <PrLinkItem 
      link={prObject.links.code.frontEnd}
      selectedView={selectedView}
      textToPrint={"gh-frontend"}
    />

    <PrLinkItem 
      link={prObject.links.code.backEnd}
      selectedView={selectedView}
      textToPrint={"gh-backend"}
    />

    <PrLinkItem 
      link={prObject.links.deployment.frontEnd}
      selectedView={selectedView}
      textToPrint={"deployment-frontend"}
    />

    {/* <PrLinkItem 
      link={prObject.links.deployment.backEnd}
      selectedView={selectedView}
      textToPrint={"deployment-backend"}
    /> */}
    
    </div>
  )
}

export default PrLinks