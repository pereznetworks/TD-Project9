import 'process';
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';

/** styling **/
import './index.css';

/** modular components **/
import Home from './Home';
import Nav from './Nav';
import NotFound from './NotFound';
import SearchForm from './Search';

// WILL NEED TO MOVE THIS TO BACK-END SERVER
// below is a place to put a test api key using the key embeded in test url on flickr app garden
const API = {
  key: ``
}

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      searchData: {},
      glaciers: {}, //storing flickr search json photo data
      eagles: {},       // these 3, eagles, hippos, and whasles ....
      hippopotamus: {},   // are the navlink ...
      whales: {},     // json data objects
      query: '',  // used to store the search form input
      loading: true, // is false when initial default search results data is stored
      eaglesLoaded: false, // these last 3 are true when navLink photo data is  stored
      glaciersLoaded: false,
      whalesLoaded: false,
      hippopotamusLoaded: false
    };

    // bind the searchForPictures function to 'this'
    // so that when search and nav components...
    // make api calls to flickr, can also setState using this.setState()
    this.searchForPictures = this.searchForPictures.bind(this);

    // object for flickr apicall and photo src url snippets and options
    // listed in order of appearance for correct url syntax
    this.flickr = {
      // photo src url: items listed in order of appearance for correct url syntax
      urlStart: 'https://farm',
      farm: '2',
      urlDomain: '.staticflickr.com/',
      serverId: '1234/',
      photoId: '43793268375_',
      secret: 'c8a11ce332',
      imgFormatNoSize: '.jpg',
      imgFormatLargeSize: '.jpg',  // using this for the full-screen view
      apikey: API.key,
      // api-call url + method + options: listed in order of appearance for correct url syntax
      method: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=',
      options: '&relevance&per_page=24&safe_search=1&format=json&nojsoncallback=1',
      search: '&tags=',
      previousQueryPath: ' ',
      query: ''
    };

    // a custom content filter to cover an edge case for...
    // search results that dont return relevant or 'family-safe' results
    this.contentFilters = {
      catchHorses: /(horses)/gi,
      justHorses: 'Appaloosa, Stallion, Castillonnai, Clydesdale, Pintabian'
    };
  }

  // when components loaded
  // make the flickr apicalls
  componentDidMount() {
    this.searchForPictures();
    this.getEaglePhotos();
    this.getGlacierPhotos();
    this.getWhalePhotos();
    this.getHippopotamusPhotos();
  }

  // function to make a flickr api photo search using search form input
  searchForPictures(query){

    this.setState({loading: true});

    if (query) {

      if (query.match(this.contentFilters.catchHorses)){
        query = this.contentFilters.justHorses;
      }

    } else {
      this.flickr.query = 'glaciers';
    }

    let apicall = `${this.flickr.method}${this.flickr.apikey}${this.flickr.search}${this.flickr.query}${this.flickr.options}`;
    axios.get(apicall)
          .then(response => {
            this.setState({
              searchData: response.data,
              query: query,
              loading: false
            });
          })
          .catch(error => {
            console.log('Error fetching and parsing data', error);
          });
  }

  // getting eagle photos for the 'eagle' navlink
  getGlacierPhotos(){
    let glaciers = 'glaciers';
    let apicall = `${this.flickr.method}${this.flickr.apikey}${this.flickr.search}${glaciers}${this.flickr.options}`;
    axios.get(apicall)
          .then(response => {
            this.setState({
              glaciers: response.data,
              query: 'glaciers',
              glaciersLoaded: true
            });
          })
          .catch(error => {
            console.log('Error fetching and parsing data', error);
          });
  }

  // getting eagle photos for the 'eagle' navlink
  getEaglePhotos(){
    let eagles = `Bald Eagle`;
    let apicall = `${this.flickr.method}${this.flickr.apikey}${this.flickr.search}${eagles}${this.flickr.options}`;
    axios.get(apicall)
          .then(response => {
            this.setState({
              eagles: response.data,
              query: 'eagles',
              eaglesLoaded: true
            });
          })
          .catch(error => {
            console.log('Error fetching and parsing data', error);
          });
  }

  // getting whale photos for the 'whale' navlink
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
          })
          .catch(error => {
            console.log('Error fetching and parsing data', error);
          });
  }

  // getting hippopotamus photos for the 'hippopotamus' navlink
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
          })
          .catch(error => {
            console.log('Error fetching and parsing data', error);
          });
  }

  // rendering the components using BrowserRouter, Switch and Route from react-router-dom

  render() {
    return (
          // if any of these are still loading ... show a 'loading..' screen
          // otherwise load components by matching route path
          (!this.state.eaglesLoaded || !this.state.glaciersLoaded || !this.state.whalesLoaded || !this.state.hippopotamusLoaded)
          ? <div className="container">Loading...</div>
            : <BrowserRouter>
                  <Switch>
                    <Route exact path='/'             // home page route
                            render={(props) =>        // just loads, header, nav bar, link to the search component
                             <Home {...props}         // and default set of photos, 'glaciers'
                             navLinkLabel='glaciers'
                             flickr={this.flickr}
                             photos={this.state.glaciers.photos.photo}
                             />}
                    />
                    <Route exact path='/search'             // route to load search form
                            render={(props) =>
                             <SearchForm {...props}
                               defaultView='glaciers'
                               data={this.state}
                               query={this.state.query}
                               flickr={this.flickr}
                               apicall={this.apicall}
                               onSearch={this.searchForPictures}
                               searchData={this.state.searchData.photos.photo}
                               glaciers={this.state.glaciers.photos.photo}
                               callingModule='Search'
                             />}
                    />
                    <Route exact path="/navlink/:navLinkLabel"  // route to load the navlink photos
                              render={(props) =>     // uses the :navLinkLabel parameter
                               <Nav {...props}       // to load the photos associated wih the navlink clicked
                                 navLinkLabel={props.match.params.navLinkLabel}
                                 callingModule={props.match.params.callingModule}
                                 flickr={this.flickr}
                                 eagles={this.state.eagles}
                                 glaciers={this.state.glaciers}
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
