import React from "react";
import Header from '../Header';
import Gallery from '../Gallery';

const Nav = (props) => {

  const onNavLinkClick = e => {
    props.onSearch(e.target.textContent);
  };

  return (
      <div className="container">
        <Header />
        <nav className="main-nav">
          <ul>
            <li><a
              onClick={onNavLinkClick}>Hippopotamus</a>
            </li>
            <li><a
              onClick={onNavLinkClick} >Eagles</a>
            </li>
            <li><a
              onClick={onNavLinkClick} >Whales</a>
            </li>
            <li><a href='/search'>Search</a>
            </li>
          </ul>
        </nav>
        <Gallery
          flickr={props.flickr}
          photos={props.photos}
         />
      </div>
      )
};

export default Nav
