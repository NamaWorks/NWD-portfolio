import { matrixEffect } from '../../../utils/functions/matrixEffect'
import './HoverMsg.css'

export const HoverMsg = (textToPrint="pending text")=>{
  const body = document.querySelector("body")

  const textContainer = document.createElement("div")
  textContainer.classList.add("hover-text")
  
  const msg = document.createElement("p")
  msg.innerText = `[${textToPrint}]`

  textContainer.append(msg)
  body.append(textContainer)

  matrixEffect(msg)
}