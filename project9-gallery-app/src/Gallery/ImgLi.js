import React from 'react';

const ImgLi = props =>  {

  let apiCall = `${props.flickr.weburl}${props.farm}${props.flickr.urlDomain}${props.serverId}/${props.photoId}_${props.secret}${props.flickr.sizeSuffix}`;

  return <li >
    <img src={apiCall} alt=""/>
  </li>;
}

export default ImgLi;
