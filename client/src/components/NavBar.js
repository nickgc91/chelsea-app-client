import React from "react";
import "../css/navBar.css"; 
import { withRouter } from 'react-router-dom'


const NavBar = props => {
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
          <a href="/login">MY PROFILE</a>
        </li>
        { props.username ? 
           <li onClick={() => props.signOut()}>
           <a href="/">LOGOUT</a>
         </li> 
         :
         null }
      </ul>
    </div>
  );
};

export default withRouter(NavBar);
