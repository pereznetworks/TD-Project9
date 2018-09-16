import React from 'react';
import Gallery from '../Gallery'

const Header = props =>
    <div className="container">
      <nav className="main-nav">
        <ul>
          <li><a href='/gallery/Cats'>Cats</a></li>
          <li><a href='/gallery/Dogs'>Dogs</a></li>
          <li><a href='/gallery/Computers'>Computers</a></li>
          <li><a href='/search'>Search</a></li>
        </ul>
      </nav>
      <Gallery {...props}
        flickr={props.flickr}
        photos={props.photos}
      />
    </div>;

export default Header
