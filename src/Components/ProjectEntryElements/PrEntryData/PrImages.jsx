import React, { useContext } from 'react'
import { NavigationContext } from '../../../contexts/contexts'

const PrImages = ({prObject, startFrom = 0}) => {
  const {selectedView} = useContext(NavigationContext)
  return (
    <div className={`pr-images ${selectedView}`}>
      {Object.keys(prObject.images).map((img, i) => {
        if (i >= startFrom) {
          return (
            <div className={`pr-image ${selectedView}`} key={i}>
              <img src={prObject.images[img]} alt={img} />
            </div>
          );
        }
      })}
    </div>
  );
}

export default PrImages