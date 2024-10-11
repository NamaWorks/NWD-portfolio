import { HoverMsg } from "../HoverMsg/HoverMsg";
import "./PrLinkItem.css"

import React from 'react'

const PrLinkItem = ({link, selectedView, textToPrint="See Link"}) => {
  return (
    <>
    {
      link ?
        (
          <a 
            href={link} target="_blank" 
            className={`pr-link-item dimmed ${selectedView}`} 
            onMouseEnter={() => {HoverMsg("Open Link");}} 
            onMouseLeave={() => {document.querySelectorAll(".hover-text").forEach((item)=>{item.remove()});}}
          >
              [{textToPrint}]
          </a>
        )
      :
        (
          <a 
            href={link} target="_blank" 
            className={`pr-link-item dimmed inactive ${selectedView}`}
            onMouseEnter={() => {HoverMsg("Open Link");}} 
            onMouseLeave={() => {document.querySelectorAll(".hover-text").forEach((item)=>{item.remove()});}}
          >
              [{textToPrint}]
          </a>
        )
      }
    
    </>
  )
}

export default PrLinkItem
