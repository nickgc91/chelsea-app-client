import React from "react";
import "../css/navBar.css"; 
import { withRouter } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a class="active" href="/">
            HOME
          </a>
        </li>
        <li>
          <a href="/news">NEWS</a>
        </li>
        <li>
          <a href="/about">CHELSEA STORE</a>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(NavBar);
