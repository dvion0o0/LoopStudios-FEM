import React from "react";
import Logo from "../images/logo.svg";
import Close from "../images/icon-close.svg";
function Sidebar({ toggle, closeToggle }) {
  return (
    <aside className={`${toggle ? "active" : null}`}>
      <div className="sidebar-center">
        <div className="sidebar-header">
          <img src={Logo} alt="logo" />
          <img
            src={Close}
            alt="close"
            className="close"
            onClick={closeToggle}
          />
        </div>
        <div className="side-links">
          <li>
            <a href="/" className="side-link">
              ABOUT
            </a>
          </li>
          <li>
            <a href="/" className="side-link">
              CAREERS
            </a>
          </li>
          <li>
            <a href="/" className="side-link">
              EVENTS
            </a>
          </li>
          <li>
            <a href="/" className="side-link">
              PRODUCTS
            </a>
          </li>
          <li>
            <a href="/" className="side-link">
              SUPPORT
            </a>
          </li>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
