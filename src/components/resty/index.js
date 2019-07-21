import './resty.css';

import React from 'react';
import superagent from 'superagent';
import md5 from 'md5';

import ClipBoard from '../clipboard';
import History from '../history';
import Form from '../form';

/**
 * RESTy class which handles all methods and state and renders History, ClipBoard, and Form components
 */
class RESTy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: 'get',
      requestBody: '',
      username: '',
      password: '',
      token: '',
      header: {},
      body: {},
      history: {},
      headersVisible: false,
    };
  }

  /**
   * componentDidMount() which gets history from local storage and sets the history state object
   */
  componentDidMount() {
    try {
      let history = JSON.parse(localStorage.getItem('history'));
      this.setState({ history });
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * saveHistory() method which sets history to local storage
   */
  saveHistory = () => {
    localStorage.setItem('history', JSON.stringify(this.state.history));
  };

  /**
   * updateHistory() method which handles setting the history state
   */
  updateHistory = () => {
    let url = new URL(this.state.url);

    let lastRun = {
      host: url.hostname,
      path: url.pathname,
      url: this.state.url,
      method: this.state.method,
      requestBody: this.state.requestBody,
      username: this.state.username,
      password: this.state.password,
      token: this.state.token,
      body: {},
      header: {},
    };

    let key = md5(JSON.stringify(lastRun));
    let entry = { [key]: lastRun };
    let history = { ...this.state.history, ...entry };
    this.setState({ history });
    this.saveHistory();
  };

  /**
   * resetFormFromHistory(event) method which resets the history state
   */
  resetFormFromHistory = event => {
    event.preventDefault();
    let newState = this.state.history[event.currentTarget.id];
    this.setState({ ...newState });
  };

  /**
   * handleChange(event) method which handles changing most state in application
   */
  handleChange = event => {
    let prop = event.target.name;
    let value = event.target.value;
    this.setState({ [prop]: value });

    // If basic/bearer, clear the other
    if (prop === 'token') {
      let username = '';
      let password = '';
      this.setState({ username, password });
    }

    if (prop.match(/username|password/)) {
      let token = '';
      this.setState({ token });
    }
  };

  /**
   * toggleHeaders method which handles toggling the Headers component on and off
   */
  toggleHeaders = () => {
    let headersVisible = !this.state.headersVisible;
    this.setState({ headersVisible });
  };

  /**
   * callAPI(event) which handles making API requests 
   */
  callAPI = event => {
    event.preventDefault();

    let contentType = { 'Content-Type': 'application/json' };
    let bearer = this.state.token
      ? { Authorization: `Bearer ${this.state.token}` }
      : {};
    let basic =
      this.state.username && this.state.password
        ? {
            Authorization:
              'Basic ' + btoa(`${this.state.username}:${this.state.password}`),
          }
        : {};

    superagent(this.state.method, this.state.url)
      .set('Content-Type', 'application/json')
      .set(Object.assign(contentType, bearer, basic))
      .send(this.state.requestBody)
      .then(response => {
        let header = response.header;
        let body = response.body;
        this.setState({ header, body });
        this.updateHistory();
      })
      .catch(e => {
        let body = { error: e.message };
        let header = {};
        this.setState({ header, body });
      });
  };

  /**
   * handleURLChange(event) method which handles changing the url state in the redux store
   */
  handleUrlChange = event => {
    event.preventDefault();

    console.log('URL_CHANGE');

    this.props.change();
  };

  render() {
    return (
      <main>
        <History
          history={this.state.history}
        />

        <section className="deck">
          <Form 
            callAPI={this.callAPI}
            handleChange={this.handleChange}
            handleUrlChange={this.handleUrlChange}
            toggleHeaders={this.toggleHeaders}
            url={this.state.url}
            method={this.state.method}
            requestBody={this.state.requestBody}
            headersVisible={this.state.headersVisible}
            username={this.state.username}
            password={this.state.password}
            token={this.state.token}
          />

          <ClipBoard 
            body={this.state.body}
            header={this.state.header}
          />
        </section>
      </main>
    );
  }
}

export default RESTy;
