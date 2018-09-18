import React from 'react';
import ImgLi from './ImgLi';
import NotFound from '../NotFound';

const Gallery = props => {

  let photosImgLi;

  if (props.photos.length > 0) {
    photosImgLi = props.photos.map(photo =>
      <ImgLi
        key={photo.id}
        farm={photo.farm}
        serverId={photo.server}
        photoId={photo.id}
        secret={photo.secret}
        flickr={props.flickr}/>);
  } else {
    photosImgLi = <NotFound />;
  }

 return  <div className="photo-container">
           <ul>
             {photosImgLi}
           </ul>
         </div>
};

export default Gallery;
