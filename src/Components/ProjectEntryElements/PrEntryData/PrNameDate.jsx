import React, { useContext } from 'react'
import { NavigationContext } from '../../../contexts/contexts'
import './PrNameDate.css'

const PrNameDate = ({prObject}) => {
  const {selectedView} = useContext(NavigationContext)
  return (
    <div className={`pr-name-date ${selectedView}`}>
    <h3 className={`pr-name ${selectedView}`}>{prObject.title} // <span className={`pr-field dimmed ${selectedView}`}>{prObject.kind}</span></h3>
    <h3 className={`pr-year dimmed ${selectedView}`}>{prObject.year}</h3>
  </div>
  )
}

export default PrNameDate