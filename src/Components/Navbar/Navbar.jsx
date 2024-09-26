import './Navbar.css'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
    <ul id='navbar-ul'>
      <li>
        <p>Pedro Naya</p>
      </li>

      <li>
        <p>[Freelance MERN developer]</p>
      </li>

      <li>
        <a href='mailto:pedronayamartinez@gmail.com'>[pedronayamartinez@gmail.com]</a>
      </li>

      <li>
      
        <a href="/#">[See Resume]</a>
      </li>

      <li>
        <a href="/#">[LI]</a>
        <a href="/#">[GH]</a>
        <a href="/#">[Be]</a>
      </li>
    </ul>
    </nav>
  )
}

export default Navbar