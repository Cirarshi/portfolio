import { NavLink } from "react-router-dom";
import stlyes from "./PageNav.module.css";
// import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

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
          <a
            href="https://github.com/Cirarshi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/utkarsh-kapoor-6b3200127/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@Connex18"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube size={24} />
          </a>
        </li>
        {/*
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
        </li>
        */}
      </ul>
    </nav>
  );
}

export default PageNav;
