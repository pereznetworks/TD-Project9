import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
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
      flickrData: {},
      loading: true
    };
    this.flickr = {
      weburl: 'https://farm',
      farm: '2',
      urlDomain: '.staticflickr.com/',
      serverId: '1234/',
      photoId: '43793268375_',
      secret: 'c8a11ce332',
      sizeSuffix: '.jpg',
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
          flickrData: response.data,
          loading: false
        });
        console.log(this.state.flickrData);
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    console.log(this.apicall);
    console.log(this.state.flickrData);

    return (
      (this.state.loading)
      ? <div className="container">Loading...</div>
        : <BrowserRouter>
            <div className="container">
              <Switch>
                <Route exact path='/'
                        render={(props) =>
                         <Header {...props}
                           flickr={this.flickr}
                           photos={this.state.flickrData.photos.photo}
                         />}
                />
                <Route path='/gallery'
                        render={(props) =>
                         <Gallery {...props}
                           flickr={this.flickr}
                           photos={this.state.flickrData.photos.photo}
                         />}
                />
                <Route path='/search'
                        render={(props) =>
                         <SearchForm {...props}
                           flickr={this.flickr}
                           apicall={this.apicall}
                           photos={this.state.flickrData.photos.photo}
                         />}
                />
                <Route component={NotFound}/>
              </Switch>
            </div>
         </BrowserRouter>
      );
   }
}
