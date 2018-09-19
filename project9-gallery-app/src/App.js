import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';

/** styling **/
import './index.css';

/** import Flicker Api Key **/
import Api from './Flickr/config.js';

/** modular components **/
import Home from './Home';
import Nav from './Nav';
import NotFound from './NotFound';
import SearchForm from './Search';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      flickrData: {},
      eagles: {},
      hippopotamus: {},
      whales: {},
      query: '',
      loading: true,
      eaglesLoaded: false,
      whalesLoaded: false,
      hippopotamusLoaded: false
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
      options: '&safe_search=1&per_page=24&format=json&nojsoncallback=1',
      search: '&tags=',
      query: ''
    };
    this.contentFilters = {
      catchHorses: /(horses)/gi,
      justHorses: 'Appaloosa, Stallion, Castillonnai, Clydesdale, Pintabian'
    };
  }

  componentDidMount() {
    this.searchForPictures();
    this.getEaglePhotos();
    this.getWhalePhotos();
    this.getHippopotamusPhotos();
  }

  searchForPictures(query){

    if (query) {

      if (query.match(this.contentFilters.catchHorses)){
        this.flickr.query = this.contentFilters.justHorses;
      }

    } else {
      this.flickr.query = 'glaciers';
    }

    let apicall = `${this.flickr.method}${this.flickr.apikey}${this.flickr.search}${this.flickr.query}${this.flickr.options}`;
    axios.get(apicall)
          .then(response => {
            this.setState({
              flickrData: response.data,
              query: this.flickr.query,
              loading: false
            });
            console.log(this.state);
          })
          .catch(error => {
            console.log('Error fetching and parsing data', error);
          });
  }

  getEaglePhotos(){
    let eagles = 'eagles';
    let apicall = `${this.flickr.method}${this.flickr.apikey}${this.flickr.search}${eagles}${this.flickr.options}`;
    axios.get(apicall)
          .then(response => {
            this.setState({
              eagles: response.data,
              query: 'eagles',
              eaglesLoaded: true
            });
            console.log(this.state);
          })
          .catch(error => {
            console.log('Error fetching and parsing data', error);
          });
  }

  getWhalePhotos(){

    let whales = 'whale';
    let apicall = `${this.flickr.method}${this.flickr.apikey}${this.flickr.search}${whales}${this.flickr.options}`;
    axios.get(apicall)
          .then(response => {
            this.setState({
              whales: response.data,
              query: 'whales',
              whalesLoaded: true
            });
            console.log(this.state);
          })
          .catch(error => {
            console.log('Error fetching and parsing data', error);
          });
  }

  getHippopotamusPhotos(){

    let hippopotamus = 'hippopotamus';
    let apicall = `${this.flickr.method}${this.flickr.apikey}${this.flickr.search}${hippopotamus}${this.flickr.options}`;
    axios.get(apicall)
          .then(response => {
            this.setState({
              hippopotamus: response.data,
              query: 'hippopotamus',
              hippopotamusLoaded: true
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
      (this.state.loading || !this.state.eaglesLoaded || !this.state.whalesLoaded || !this.state.hippopotamusLoaded)
      ? <div className="container">Loading...</div>
        : <BrowserRouter>
              <Switch>
                <Route exact path='/'
                        render={(props) =>
                         <Home {...props}
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
                           <Nav {...props}
                             navLinkLabel={props.match.params.navLinkLabel}
                             flickr={this.flickr}
                             eagles={this.state.eagles}
                             whales={this.state.whales}
                             hippopotamus={this.state.hippopotamus}
                           />}
                />
                <Route component={NotFound}/>
              </Switch>
         </BrowserRouter>
      );
   }
}
