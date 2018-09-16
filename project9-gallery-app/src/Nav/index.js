import React from 'react';

const Nav = (props) => {

  let query;

  const navFind = (e) =>{
    query = e.target.textContent
    props.onSearch(query);
  }

  return (<nav className="main-nav">
    <ul>
      <li><a
              href='/'
              onClick={navFind}
              >Cats</a>
      </li>
      <li><a
              href='/'
              onClick={navFind}>Dogs</a>
      </li>
      <li><a
              href='/'
              onClick={navFind}>Computers</a>
      </li>
      <li><a
        href='/search'>Search</a>
      </li>
    </ul>
  </nav>)
};

export default Nav
