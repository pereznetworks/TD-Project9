import React from 'react';
import Nav from '../Nav';
import Gallery from '../Gallery'

const Header = (props ) => {
    return <h2>Flickr Photo Gallery</h2>
};

/** may not be needed...
     const PhotoContainer = (props) => (
      <div className="photo-container">
        <ul>
          <Gallery {...props}
              flickr={props.flickr}
              photos={props.photos}
          />
        </ul>
      </div>
); **/

export default Header;
