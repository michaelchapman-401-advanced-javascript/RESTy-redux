import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app.js';

import SettingsProvider from './context/context';

/**
 * Main class which renders the app
 */
class Main extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <SettingsProvider>
            <App />
          </SettingsProvider>
        </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
