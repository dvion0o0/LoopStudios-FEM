import React from "react";
import Logo from "../images/logo.svg";
import Hamburger from "../images/icon-hamburger.svg";

function Navbar({ openToggle }) {
  return (
    <nav>
      <img src={Logo} alt="logo" />
      <img
        src={Hamburger}
        alt="toggle"
        className="toggle"
        onClick={openToggle}
      />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            Careers
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            Events
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            Products
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            Support
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
