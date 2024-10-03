import React, { useContext } from 'react'
import { NavigationContext } from '../../../contexts/contexts'

const PrDescription = ({prObject}) => {
  const {selectedView} = useContext(NavigationContext)
  return (
    <div className={`pr-description ${selectedView}`}>
    <p>{prObject.description}</p>
  </div>
  )
}

export default PrDescription