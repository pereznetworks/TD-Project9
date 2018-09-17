import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';

/** styling **/
import './index.css';

/** import Flicker Api Key **/
import Api from './Flickr/config.js';

/** modular components **/
import Header from './Header';
import SearchForm from './Search';
import NotFound from './NotFound';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      flickrData: {},
      query: '',
      loading: true
    };
    this.searchForPictures = this.searchForPictures.bind(this);
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
      options: '&per_page=24&format=json&nojsoncallback=1&safe_search=1',
      search: '&tags=',
      query: '',
    };
    this.apicall = `${this.flickr.method}${this.flickr.apikey}${this.flickr.search}${this.flickr.query}${this.flickr.options}`;
  }

  componentDidMount() {
    this.searchForPictures();
  }

  searchForPictures(query){
    if (query) {
      this.flickr.query=query;
    } else {
      this.flickr.query='glacier';
    }
    let apicall = `${this.flickr.method}${this.flickr.apikey}${this.flickr.search}${this.flickr.query}${this.flickr.options}`;
    axios.get(`${apicall}`)
      .then(response => {
        this.setState({
          flickrData: response.data,
          query: query,
          loading: false
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
            <div className="container">
              <Switch>
                <Route exact path='/'
                        render={(props) =>
                         <Header {...props}
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
                  path="/navlink/:query"
                          render={(props) =>
                           <Header {...props}
                             query={props.match.params.query}
                             flickr={this.flickr}
                             photos={this.state.flickrData.photos.photo}
                             onSearch={this.searchForPictures}
                           />}
                />
                <Route component={NotFound}/>
              </Switch>
            </div>
         </BrowserRouter>
      );
   }
}
