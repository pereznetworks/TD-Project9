import React from 'react';
import Header from '../Header'
import Gallery from '../Gallery';

const SearchForm = props => {

  let query = '';
  let displayResults;

  // onChange event function, used inconjuction with ref
  // to assign typed input to query variable
  const onInputChange = e => {
    props.flickr.query = e.target.value;
  };

  // onSubmit event function, makes the call to search flickr
  // resets the input field
  const onSearchSubmit = e => {
    e.preventDefault();
    props.onSearch(query.value);
    e.currentTarget.reset();
    displayResults = props.searchData;
  };

  //  check to see if search results or default set of photos should be displayed
  if (props.flickr.query !== 'glaciers' ) {
    displayResults = props.searchData
  } else {
    displayResults = props.glaciers;
  }

  return <div className="container">
            <Header />
            <form className="search-form" onSubmit={onSearchSubmit}>
              <a className='home-button' href='/'>Home</a>
              <input
                type="search"
                onChange={onInputChange}
                name="search"
                ref={(input) => query = input}
                placeholder="Search"
                required/>
              <button type="submit" className="search-button">
                <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
              </button>
            </form>
              <ul>
                {(props.data.loading ) ? <div className="container">Loading...</div>
                  : <Gallery
                      flickr={props.flickr}
                      photos={displayResults}
                      callingModule={props.callingModule}
                    />
                  }
              </ul>
       </div>;

  // the terciary test at beginging of app.js render method
  // allows for a 'loading...' screen to display breifly when search form loads
  // or when the search results take a little longer to load

  // once a search returns results, these are passed to the gallery component

  // returning the search form and the gallery component...

};

export default SearchForm;
