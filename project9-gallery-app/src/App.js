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
import NotFound from './NotFound';
import SearchForm from './Search';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      flickrData: {},
      navLinkData: {},
      query: '',
      loading: true,
    };
    this.searchForPictures = this.searchForPictures.bind(this);
    this.flickr = {
      urlStart: 'https://farm',
      farm: '2',
      urlDomain: '.staticflickr.com/',
      serverId: '1234/',
      photoId: '43793268375_',
      secret: 'c8a11ce332',
      sizeSuffix: '.jpg',
      apikey: Api.key,
      method: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=',
      options: '&per_page=24&format=json&nojsoncallback=1&safe_search=1',
      search: '&tags=',
      query: ''
    };
    this.counters = {
      eagle: 0,
      glacier: 0,
      horses: 0,
      hippopotamus: 0
    }
  }

  componentDidMount() {
    this.searchForPictures();
  }

  searchForPictures(query){
    if (query) {
      this.flickr.query = query;
    } else {
      this.flickr.query = 'glaciers';
    }

    let apicall = `${this.flickr.method}${this.flickr.apikey}${this.flickr.search}${this.flickr.query}${this.flickr.options}`;
    axios.get(apicall)
          .then(response => {
            this.setState({
              flickrData: response.data,
              query: this.flickr.query,
              loading: false,
              navLinksLoaded: true
            });
            console.log(this.state);
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
              <Switch>
                <Route exact path='/'
                        render={(props) =>
                         <Nav {...props}
                           flickr={this.flickr}
                           photos={this.state.flickrData.photos.photo}
                           onSearch={this.searchForPictures}
                         />}
                />
                <Route path='/search'
                        render={(props) =>
                         <SearchForm {...props}
                           flickr={this.flickr}
                           apicall={this.apicall}
                           onSearch={this.searchForPictures}
                           photos={this.state.flickrData.photos.photo}
                         />}
                />
                <Route
                  path="/navlink/:navLinkLabel"
                          render={(props) =>
                           <Header {...props}
                             navLinkLabel={props.match.params.navLinkLabel}
                             flickr={this.flickr}
                             photos={this.state.flickrData.photos.photo}
                             getNavlinkPhotos={this.searchForPictures}
                             navCounter={this.counters}
                           />}
                />
                <Route component={NotFound}/>
              </Switch>
         </BrowserRouter>
      );
   }
}
