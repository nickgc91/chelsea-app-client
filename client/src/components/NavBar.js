import React from "react";
import "../css/navBar.css"; 

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a class="active" href="#home">
            HOME
          </a>
        </li>
        <li>
          <a href="#news">FIXTURES</a>
        </li>
        <li>
          <a href="#contact">NEWS</a>
        </li>
        <li>
          <a href="#about">CHELSEA STORE</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
