import React from "react";
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className="main-nav">
      <ul>
        <li>
          <NavLink
            className="navlink" to="/navlink/glaciers"
            >Glaciers</NavLink>
        </li>
        <li>
          <NavLink
            className="navlink" to="/navlink/hippopotamus"
            >Hippopotamus</NavLink>
        </li>
        <li>
          <NavLink
            className="navlink" to="/navlink/eagles"
            >Eagles</NavLink>
        </li>
        <li>
          <NavLink
            className="navlink" to="/navlink/whales"
            >Whales</NavLink>
        </li>
        <li>
          <a href='/search'>Search</a>
        </li>
      </ul>
  </nav>
);
 export default NavBar;
