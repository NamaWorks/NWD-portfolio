import './SideButton.css'
import React from 'react'

const SideButton = ({ innerText, fnc, cls, id, hl  }) => {
  return (
    <button
      onClick={()=>{fnc}}
      className={`side-btn ${cls? cls : ""} ${hl? "hl" : "" }`}
      id={id}
    >
      <p>{innerText}</p>
    </button>
  )
}

export default SideButton