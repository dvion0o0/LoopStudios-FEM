import React from "react";
import Logo from "../images/logo.svg";
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

function Footer() {
  return (
    <footer>
      <div className="footer-center">
        <div className="footer-logo-container">
          <img src={Logo} alt="logo" />
          <ul className="footer-links">
            <li>
              <a href="/" className="footer-link">
                About
              </a>
            </li>
            <li>
              <a href="/" className="footer-link">
                Carrers
              </a>
            </li>
            <li>
              <a href="/" className="footer-link">
                Events
              </a>
            </li>
            <li>
              <a href="/" className="footer-link">
                Products
              </a>
            </li>
            <li>
              <a href="/" className="footer-link">
                Support
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-social-container">
          <div className="social-links">
            <AiFillFacebook />
            <AiOutlineTwitter />
            <FaPinterest />
            <FiInstagram />
          </div>
          <p>@2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
