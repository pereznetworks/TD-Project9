import React from 'react';

const ImgLi = props =>  {

  let photoSrcUrl = `${props.flickr.urlStart}${props.farm}${props.flickr.urlDomain}${props.serverId}/${props.photoId}_${props.secret}${props.flickr.imgFormatNoSize}`;

  return <li >
          <img src={photoSrcUrl} alt="" />
         </li>;
}

export default ImgLi;
