import React from 'react';
import Header from '../Header';
// TODO: how to detect when url is not found
// import NotFound from '../NotFound';

const ImgFullScreen = props =>  {

  let photo;
  let backHref;


  if (props.navLinkLabel === 'home'){
     photo = props.flickrData.photos.photo;
     backHref = '/';
  } else if (props.navLinkLabel === 'eagles') {
     photo = props.eagles.photos.photo;
     backHref = `/navlink/${props.navLinkLabel}`;
  } else if (props.navLinkLabel === 'whales') {
     photo = props.whales.photos.photo;
     backHref = `/navlink/${props.navLinkLabel}`;
  } else if (props.navLinkLabel === 'hippopotamus') {
     photo = props.hippopotamus.photos.photo;
     backHref = `/navlink/${props.navLinkLabel}`;
  } else if (props.navLinkLabel === 'search'){
     photo = props.flickrData.photos.photo;
     backHref = `/search`;


  }

  let fullScreenSrcUrl =`${props.flickr.urlStart}${props.farm}${props.flickr.urlDomain}${props.serverId}/${props.selectedPhotoId}_${props.selectedPhotoSecret}${props.flickr.imgFormatLargeSize}`;


  return <div className="photo-fullScreen">
            <Header />
            <nav className="main-nav">
              <ul>
                <li>
                  <a
                    href={backHref}
                    >Back</a>
                  <img src={fullScreenSrcUrl} alt="" />
                </li>
              </ul>

            </nav>
        </div>;
}

export default ImgFullScreen;
