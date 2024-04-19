import "./_nav.scss"


import React from 'react'

const Navbar = () => {
  return (
    <div class="home-bgImg-container">
       <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="index.html" class="nav__link nav__link--active">Home</a>
          </li>
          <li class="nav__item">
            <a href="about.html" class="nav__link">About Me</a>
          </li>
          <li class="nav__item">
            <a href="projects.html" class="nav__link">My Projects</a>
          </li>
          <li class="nav__item">
            <a href="contact.html" class="nav__link">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
