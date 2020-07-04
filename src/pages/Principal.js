import React, { Fragment } from 'react';
import Header from '../components/Header';
import Bookdata from '../components/Book-data';
import Bookdescription from '../components/Book-description';
import Bookcontent from '../components/Book-content';

const Principal = () => {
  return (
    <Fragment>
      <Header />
      <Bookdata />
      <Bookdescription />
      <Bookcontent />
    </Fragment>
  )
}

export default Principal;