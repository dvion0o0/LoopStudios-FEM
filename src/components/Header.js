import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Header() {
  const [toggle, setToggle] = useState(false);

  const openToggle = () => {
    setToggle(true);
  };

  const closeToggle = () => {
    setToggle(false);
  };

  return (
    <header>
      <div className="header-center">
        <Navbar openToggle={openToggle} />
        <Sidebar closeToggle={closeToggle} toggle={toggle} />
        <div className="hero-content">
          <h1>
            IMMERSIVE
            <br /> EXPERIENCES <br /> THAT DELIVER
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
