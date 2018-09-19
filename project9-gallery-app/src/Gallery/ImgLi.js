import React from 'react';

const ImgLi = props =>  {

  let photoSrcUrl = `${props.flickr.urlStart}${props.farm}${props.flickr.urlDomain}${props.serverId}/${props.photoId}_${props.secret}${props.flickr.imgFormatNoSize}`;
  let hrefUrl;

  if (props.callingModule === 'Search') {
     hrefUrl=`/fullscreen/${props.callingModule}/${props.query}/${props.farm}/${props.serverId}/${props.photoId}/${props.secret}`;
  } else {
     hrefUrl=`/fullscreen/${props.navLinkLabel}/${props.navLinkLabel}/${props.farm}/${props.serverId}/${props.photoId}/${props.secret}`;
  }


  return <li >
          <a href={hrefUrl}><img src={photoSrcUrl} alt="" /></a>
         </li>;
}

export default ImgLi;
