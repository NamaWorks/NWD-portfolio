import { NavigationContext } from '../../../../contexts/contexts'
import './ViewSwitch.css'
import React, { useContext } from 'react'

const ViewSwitch = () => {

  const navigationContext = useContext(NavigationContext)

  return (
    <div id="pr-view-switch">
      <button 
        className='dimmed'
        onClick={()=>{navigationContext.setSelectedView("grid")}}
      >
        <img src="/public/assets/icons/grid-icon.svg" alt="grid icon" />
      </button>
      <button 
        className='dimmed'
        onClick={()=>{navigationContext.setSelectedView("list"); console.log(navigationContext.selectedView)}}
      >
        <img src="/public/assets/icons/List-icon.svg" alt="list icon" />
      </button>
    </div>
  )
}

export default ViewSwitch