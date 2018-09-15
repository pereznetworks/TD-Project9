import React from 'react';

const ImgLi = props =>  {
  return <li >
    <img src={`${this.props.flickr.weburl}${this.props.owner}${this.props.key}`} alt=""/>
  </li>;
}

export default ImgLi;
