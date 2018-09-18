import React from "react";

const Nav = (props) => {

  return (<nav className="main-nav">
    <ul>
      <li><a >Hippopotamus</a>
      </li>
      <li><a >Eagles</a>
      </li>
      <li><a >Horses</a>
      </li>
      <li><a href='/search'>Search</a>
      </li>
    </ul>
  </nav>)
};

export default Nav
