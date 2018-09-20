import React from "react";
import { NavLink } from 'react-router-dom'
import Header from '../Header';
import Gallery from '../Gallery';
import NavBar from '../Nav/NavBar';

const Home = (props) => {

// returning the nav links bar and search button
// navlinks point to the nav route with a parameter

// search nav links points, loads search route and component

  return (
      <div className="container">
        <Header />
        <NavBar />
        <Gallery
          flickr={props.flickr}
          photos={props.photos}
         />
      </div>
      )
};

export default Home
