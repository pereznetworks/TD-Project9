import React from 'react';
import ImgLi from './ImgLi';
import NotFound from '../NotFound';
import NoResults from '../NotFound/NoResults';


const Gallery = (props) => {

  let photosImgLi;

  // mapping through photo and creates an li for each photo
  if (props.photos.length > 0) {
    photosImgLi = props.photos.map(photo =>
      <ImgLi
        navLinkLabel={props.navLinkLabel}
        callingModule={props.callingModule}
        key={photo.id}
        farm={photo.farm}
        serverId={photo.server}
        photoId={photo.id}
        secret={photo.secret}
        flickr={props.flickr}/>);

        return  <div className="photo-container">
                  <ul>
                    {photosImgLi}
                  </ul>
                </div>


  } else if (props.callingModule === 'Search'){
    // if calling module is from 'search', display ...
        return  <NoResults />;

  } else {
    // if calling module is from any other display ...
        return  <NotFound />;

  }

};

export default Gallery;
