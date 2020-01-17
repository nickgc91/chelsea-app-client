import React from "react";
import "../css/navBar.css"; 
import { withRouter } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a className="active" href="/">
            HOME
          </a>
        </li>
        <li>
          <a href="/news">NEWS</a>
        </li>
        <li>
          <a href="/about">CHELSEA STORE</a>
        </li>
        <li>
          <a href="/login">LOGIN</a>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(NavBar);
