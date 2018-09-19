import React from "react";
import { NavLink } from 'react-router-dom'
import Header from '../Header';
import Gallery from '../Gallery';

const Home = (props) => {

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
          flickr={props.flickr}
          photos={props.photos}
         />
      </div>
      )
};

export default Home
