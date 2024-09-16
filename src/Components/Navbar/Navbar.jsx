import './Navbar.css'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <ul id='navbar-ul'>
      <li>
        <p>Pedro Naya</p>
      </li>

      <li>
        <p>[freelance MERN developer]</p>
      </li>

      <li>
        <a href='mailto:pedronayamartinez@gmail.com'>[pedronayamartinez@gmail.com]</a>
      </li>

      <li>
      
        <a href="/#">[see resume]</a>
      </li>

      <li>
        <a href="/#">[li]</a>
        <a href="/#">[gh]</a>
        <a href="/#">[be]</a>
      </li>
    </ul>
    </>
  )
}

export default Navbar