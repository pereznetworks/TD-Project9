import React from 'react';
import Header from '../Header';

const NotFound = () => (
  <div className="not-found">
    <Header />
        <h3> Oops </h3>
        <p> That page or path is not found </p>
        <p> Please try again.</p>
        <a href='/'>Home</a>
  </div>
);

export default NotFound;
