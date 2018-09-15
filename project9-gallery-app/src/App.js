import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

/** styling **/
import './index.css';

/** modular components **/
import Header from './Header';
import Nav from './Nav';
import Gallery from './Gallery';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Nav />
      <Switch>
        <Route path='/gallery' component={Gallery}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default App;
