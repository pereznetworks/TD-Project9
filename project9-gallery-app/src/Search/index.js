import React from 'react';
import Header from '../Header'
import Gallery from '../Gallery';

const SearchForm = props => {

  let query = '';
  let callingModule = 'Search';
  let previousQuery;

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
    previousQuery = query.value;
    e.currentTarget.reset();
  };

  if (props.query) {
    previousQuery = props.query;
  } else {
    previousQuery = props.flickr.query;
  }

  return <div className="container">
            <Header />
            <div className="photo-container">
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
              <Gallery {...props}
                  query={query}
                  navLinkLabel={previousQuery}
                  previousQuery={previousQuery}
                  callingModule={callingModule}
                  flickr={props.flickr}
                  photos={props.photos}
              />
            </ul>
          </div>
        </div>;

  // the terciary test at beginging of app.js render method
  // allows for a 'loading...' screen to display breifly when search form loads
  // or when the search results take a little longer to load

  // once a search returns results, these are passed to the gallery component

  // returning the search form and the gallery component...

};

export default SearchForm;
