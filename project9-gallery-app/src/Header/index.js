import React, {Component} from 'react';

import SearchForm from './Search';

class Header extends Component {
  render(){
    return <SearchForm
      onSearch={this.props.onSearch}
      flickr={this.props.flickr}
      />;
  }
};

export default Header
