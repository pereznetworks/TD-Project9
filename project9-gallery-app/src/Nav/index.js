import React from "react";

const Nav = (props) => {

  return (<nav className="main-nav">
    <ul>
      <li><a href='/navlink/Hippopotamus'>Hippopotamus</a>
      </li>
      <li><a href='/navlink/eagles'>Eagles</a>
      </li>
      <li><a href='/navlink/horse'>Horses</a>
      </li>
      <li><a href='/search'>Search</a>
      </li>
    </ul>
  </nav>)
};

export default Nav
