import React from "react";
import logo from "../assets/itclublogo.png";

function Header() {
  return (
    <header className="Nav_Bar_Class">
      <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">DEPARTMENTS</a></li>
        <li><a href="#">PROJECTS</a></li>
        <li>
          <a href="/">
            <img src={logo} alt="Logo" className="logo" />
          </a>
        </li>
        <li><a href="#">EVENTS</a></li>
        <li><a href="#">SERVICES</a></li>
        <li><a href="#">UPCOMING</a></li>
        <li><a href="#">CHAT WITH AI</a></li>
      </ul>
    </header>
  );
}

export default Header;
