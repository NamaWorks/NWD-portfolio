import React, { useContext } from 'react'
import { NavigationContext } from '../../../contexts/contexts'


const PrMainImg = ({prObject}) => {
  const {selectedView} = useContext(NavigationContext)
  return (
    <div className={`pr-main-image ${selectedView}`}>
    {
      Object.keys(prObject.images).map((img, i)=>{
        if(i<1){return(
          <div className={`pr-image ${selectedView}`} key={i}>
              <img src={prObject.images[img]} alt={img} />
            </div>
          )}
        })
      }
    </div>
  )
}

export default PrMainImg