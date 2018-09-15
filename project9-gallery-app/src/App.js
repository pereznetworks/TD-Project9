import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import axios from 'axios';

/** styling **/
import './index.css';

/** import Flicker Api Key **/
import Api from './Flickr/config.js';

/** modular components **/
import Header from './Header';
import SearchForm from './Header/Search';
import Gallery from './Gallery';
import NotFound from './Gallery/NotFound';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      pictures: [],
      loading: true
    };
    this.flickr = {
      weburl: 'https://www.flickr.com/photos',
      ownerid: '/',
      photoid: '/',
      apikey: Api.key,
      method: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=',
      options: '&per_page=24&format=json&nojsoncallback=1',
      search: '&tags=',
      query: 'sunsets',
    };
    this.apicall = `${this.flickr.method}${this.flickr.apikey}${this.flickr.search}${this.flickr.query}${this.flickr.options}`;
  }

  componentDidMount() {
    this.searchForPictures();
  }

  searchForPictures(query='sunsets'){
    this.flickr.query=query;
    axios.get(`${this.apicall}`)
      .then(response => {
        this.setState({
          pictures: response.data,
          loading: false
        });
        console.log(this.state.pictures);
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    console.log(this.apicall);
    console.log(this.state.pictures);
    return (
      <BrowserRouter>
        <div className="container">
                <Route exact path='/'
                    component={Header}
                    onSearch={this.searchForPictures}
                    flickr={this.flickr}
                    pictures={this.state.pictures.photo}
                    apicall={this.apicall}/>
                <Route path='/search' component={SearchForm}/>
                <Route path='/gallery'
                      component={Gallery}
                      pictures={this.state.pictures.photo}
                      flickr={this.flickr}
                      apicall={this.apicall}
                  />

                <Route component={NotFound}/>
        </div>
      </BrowserRouter>
    );
  }

}
