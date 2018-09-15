import React, {Component} from 'react';

import SearchForm from './Search';

class Header extends Component {
  render(){
    return (
      <nav className="main-nav">
        <ul>
          <li><a href='/gallery/Cats'>Cats</a></li>
          <li><a href='/gallery/Dogs'>Dogs</a></li>
          <li><a href='/gallery/Computers'>Computers</a></li>
          <li><a href='/search'>Search</a></li>
        </ul>
      </nav>);
  }
};

export default Header
