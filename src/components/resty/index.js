import './resty.css';

import React from 'react';

import ClipBoard from '../clipboard';
import History from '../history';
import Form from '../form';

/**
 * RESTy class which handles all methods and state and renders History, ClipBoard, and Form components
 */
class RESTy extends React.Component {

  render() {
    return (
      <main>
        <History />

        <section className="deck">
          <Form />

          <ClipBoard />
        </section>
      </main>
    );
  }
}

export default RESTy;
