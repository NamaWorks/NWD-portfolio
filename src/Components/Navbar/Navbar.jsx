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
        <p>Freelance MERN developer</p>
      </li>

      <li>
        <a href='mailto:pedronayamartinez@gmail.com'>[pedronayamartinez@gmail.com]</a>
      </li>

      <li>
      
        <a href="https://moona.dev/wp-content/uploads/2024/10/CV-PNM-Pic-2024-EN.pdf" target='_blank'>[See Resume]</a>
      </li>

      <li className='social-links'>
        <a href="https://www.linkedin.com/in/pedro-naya/" target="_blank">[LI]</a>
        <a href="https://github.com/NamaWorks" target="_blank">[GH]</a>
        <a href="https://www.behance.net/pedronama" target="_blank">[Be]</a>
      </li>
    </ul>
    </nav>
  )
}

export default Navbar