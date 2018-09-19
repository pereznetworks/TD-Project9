import React from "react";
import { NavLink } from 'react-router-dom'
import Header from '../Header';
import Gallery from '../Gallery';

const Home = (props) => {

// returning the nav links bar and search button
// navlinks point to the nav route with a parameter

// search nav links points, loads search route and component

  return (
      <div className="container">
        <Header />
        <nav className="main-nav">
            <ul>
              <li>
                <NavLink
                  className="navlink active" to="/navlink/glaciers"
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
        <Gallery
          navLinkLabel='home'
          callingModule={props.callingModule}
          flickr={props.flickr}
          photos={props.photos}
         />
      </div>
      )
};

export default Home
