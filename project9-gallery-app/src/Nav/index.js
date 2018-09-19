import React from "react";
import { NavLink } from 'react-router-dom'
import Header from '../Header';
import Gallery from '../Gallery';

const Nav = (props) => {

  let photosToDisplay;
  let callingModule = 'NavLinks';

  // checking which navLinkLabel was clicked
  // getting that set of photos

  if (props.navLinkLabel === 'eagles'){
    photosToDisplay = props.eagles.photos.photo;
  } else if (props.navLinkLabel === 'whales'){
    photosToDisplay = props.whales.photos.photo;
  } else if (props.navLinkLabel === 'hippopotamus'){
    photosToDisplay = props.hippopotamus.photos.photo;
  }

  // returning the nav links bar and gallery component
  // gallery component is passed requested navlink photos to display

  // navlinks point to a the nav route with a parameter

  // active navlink styled with different background color
  return (
      <div className="container">
        <Header />
        <nav className="main-nav">
          <ul>
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
        <Gallery
          callingModule={callingModule}
          flickr={props.flickr}
          photos={photosToDisplay}
         />
      </div>
      )
};

export default Nav
