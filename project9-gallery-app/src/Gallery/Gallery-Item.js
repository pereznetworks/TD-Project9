import React from 'react';

// Gallery compmnent iterates through array of photos
// calling rendering an each photo inside ImgLi compomnent
// photo source url used to access and display the image

const GalleryItem = props =>  {

  let photoSrcUrl = `${props.flickr.urlStart}${props.farm}${props.flickr.urlDomain}${props.serverId}/${props.photoId}_${props.secret}${props.flickr.imgFormatNoSize}`;

  return <li >
          <img src={photoSrcUrl} alt="" />
         </li>;
}

export default GalleryItem;
