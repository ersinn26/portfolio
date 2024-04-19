import { NavLink } from "react-router-dom";
import "./_nav.scss";

import React from "react";

const Navbar = () => {
  return (
    <div class="home-bgImg-container">
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <NavLink to="/" class="nav__link nav__link--active">
              Home
            </NavLink>
          </li>
          <li class="nav__item">
            <NavLink to="about" class="nav__link">
              About Me
            </NavLink>
          </li>
          <li class="nav__item">
            <NavLink to="projects" class="nav__link">
              My Projects
            </NavLink>
          </li>
          <li class="nav__item">
            <NavLink to="contact" class="nav__link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
