import './HoverMsg.css'

import React, { useEffect } from 'react'

const HoverMsg = ({textToPrint="test"}) => {
  return (
    <>
      <div className='hover-msg'>
        <p>[{textToPrint}]</p>
      </div>

    </>
  )
}

export default HoverMsg