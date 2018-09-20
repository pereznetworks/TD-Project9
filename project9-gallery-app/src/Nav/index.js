import React from "react";
import { NavLink } from 'react-router-dom';
import Header from '../Header';
import Gallery from '../Gallery';
import NavBar from '../Nav/NavBar';

const Nav = (props) => {

  let photosToDisplay;
  // checking which navLinkLabel was clicked
  // getting that set of photos

  if (props.navLinkLabel === 'eagles'){
    photosToDisplay = props.eagles.photos.photo;
  } else if (props.navLinkLabel === 'glaciers'){
    photosToDisplay = props.glaciers.photos.photo;
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
        <NavBar />
        <Gallery
          flickr={props.flickr}
          photos={photosToDisplay}
         />
      </div>
      )
};

export default Nav
