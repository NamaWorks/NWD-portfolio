import './ViewSwitch.css'
import React from 'react'

const ViewSwitch = () => {
  return (
    <div id="pr-view-switch">
      <button 
        className='dimmed'
        onClick={()=>{console.log("grid view clicked")}}
      >
        <img src="/public/assets/icons/grid-icon.svg" alt="grid icon" />
      </button>
      <button 
        className='dimmed'
        onClick={()=>{console.log("list view clicked")}}
      >
        <img src="/public/assets/icons/List-icon.svg" alt="list icon" />
      </button>
    </div>
  )
}

export default ViewSwitch