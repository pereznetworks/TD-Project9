import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';

/** styling **/
import './index.css';

/** import Flicker Api Key **/
import Api from './Flickr/config.js';

/** modular components **/
import Header from './Header';
import Nav from './Nav';
import Gallery from './Gallery';
import NotFound from './Gallery/NotFound';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      pictures: []
    };
    this.flickr = {
      apikey: Api.key,
      method: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=',
      options: '&per_page=24&format=json&nojsoncallback=1',
      search: '&tags=',
      query: 'sunsets'
    };
    this.apicall = `${this.flickr.method}${this.flickr.apikey}${this.flickr.search}${this.flickr.query}${this.flickr.options}`;
  }

  componentDidMount() {
    axios.get(`${this.apicall}`)
      .then(response => {
        this.setState({
          pictures: response.data
        });
        console.log(this.state.pictures);
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    console.log(this.apicall);
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Nav />
          <Switch>
            <Route path='/gallery' component={Gallery}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}
