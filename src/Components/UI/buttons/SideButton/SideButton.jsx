import { matrixEffect } from '../../../../utils/functions/matrixEffect'
import './SideButton.css'
import React from 'react'

const SideButton = ({ innerText, fnc, cls, id, hl  }) => {

  const fncPlusMatrix = (e)=>{
    console.log(innerText);
    innerText=="[See Projects]" ? innerText = "[Back to Home]" : innerText="[See Projects]"
    fnc();
    matrixEffect(e, innerText)
  }

  return (
    <button
      onClick={fncPlusMatrix}
      className={`${hl? "hl" : "" } side-btn ${cls? cls : ""}`}
      id={id}
      
    >
      <p>{innerText}</p>
    </button>
  )
}

export default SideButton