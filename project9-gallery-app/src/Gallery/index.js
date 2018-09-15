import React from 'react';
import ImgLi from './ImgLi';
import NotFound from './NotFound';

const Gallery = props => {

  let photos;

    if (this.props.pictures.length > 0) {
      photos = this.props.pictures.map(photo =><ImgLi key={photo.id} owner={photo.owner} flickr={this.props.flickr}/>);
    } else {
      photos = <NotFound />;
    }

  return <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {photos}
      </ul>
    </div>;
}

export default Gallery;
