import React from 'react';
import Nav from '../Nav';
import Gallery from '../Gallery'

const Header = (props ) => {

    if (props.match.params.query){
      let query = props.match.params.query;
      props.onSearch(query);
    }


    return (<div>
      <h2>Flickr Photo Gallery</h2>
      <Nav onSearch={props.onSearch}/>
      <div className="photo-container">
        <ul>
          <Gallery {...props}
              flickr={props.flickr}
              photos={props.photos}
          />
        </ul>
      </div>;
    </div>);
}

export default Header
