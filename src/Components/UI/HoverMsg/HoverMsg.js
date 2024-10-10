import { matrixEffect } from '../../../utils/functions/matrixEffect'
import './HoverMsg.css'

export const HoverMsg = (textToPrint="pending text")=>{
  const body = document.querySelector("body")

  const textContainer = document.createElement("div")
  textContainer.classList.add("hover-text")
  // textContainer.style.width = "100px"
  textContainer.style.opacity = 1
  
  const msg = document.createElement("p")
  msg.innerText = `[${textToPrint}]`

  textContainer.append(msg)
  body.append(textContainer)

  matrixEffect(msg)

  setTimeout(() => {
    // textContainer.style.width = 0
    textContainer.style.opacity = 0
    setTimeout(() => {
      textContainer.remove()
    }, 500);
  }, 2500);
}