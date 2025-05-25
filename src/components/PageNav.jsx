import { NavLink } from "react-router-dom";
import stlyes from "./PageNav.module.css";
// import { useState } from "react";
import MusicToggle from "./MusicToggle";

function PageNav() {
  return (
    <nav className={stlyes.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/skills">Skills</NavLink>
        </li>
        <li>
          <NavLink to="/experience">Experience</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/education">Education</NavLink>
        </li>
        <li>
          <NavLink to="/certifications">Certifications</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <MusicToggle />
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
