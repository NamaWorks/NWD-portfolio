import './SideButton.css'
import React from 'react'

const SideButton = ({ innerText, fnc, cls, id, hl  }) => {

  return (
    <button
      onClick={fnc}
      className={`${hl? "hl" : "" } side-btn ${cls? cls : ""}`}
      id={id}
    >
      <p>{innerText}</p>
    </button>
  )
}

export default SideButton