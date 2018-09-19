import React from 'react';
import ImgLi from './ImgLi';
import NotFound from '../NotFound';
import NoResults from '../NotFound/NoResults';



const Gallery = (props) => {

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

        return  <div className="photo-container">
                  <ul>
                    {photosImgLi}
                  </ul>
                </div>

  } else if (props.callingModule === 'Search'){

        return  <NoResults />;

  } else if (props.callingModule === 'NavLinks'){

        return  <NotFound />;

  }

};

export default Gallery;
