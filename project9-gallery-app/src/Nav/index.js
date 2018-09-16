import React from "react";

const Nav = (props) => {

  return (<nav className="main-nav">
    <ul>
      <li><a href='/cats'>Cats</a>
      </li>
      <li><a href='/dogs'>Dogs</a>
      </li>
      <li><a href='/computers'>Computers</a>
      </li>
      <li><a href='/search'>Search</a>
      </li>
    </ul>
  </nav>)
};

export default Nav
