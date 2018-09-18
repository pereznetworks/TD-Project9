import React from "react";
import Header from '../Header';
import Gallery from '../Gallery';

const Nav = (props) => {

  return (
      <div className="container">
        <Header />
        <nav className="main-nav">
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
        </nav>
        <Gallery
          flickr={props.flickr}
          photos={props.photos}
         />
      </div>
      )
};

export default Nav
