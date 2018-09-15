import React, { Component } from 'react';

/** styling **/
import './index.css';

/** modular components **/
import Header from './Header';
import Nav from './Nav';
import Gallery from './Gallery';

class App extends Component {
  render() {
    return (
      <div className="container">

        <Header />

        <Nav />

        <Gallery />

      </div>
    );
  }
}

export default App;
