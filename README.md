# app-state-connect

RESTy-redux

### Author: Student/Group Name

Michael Chapman

### Links and Resources

- [code](./src/index.js)

#### Documentation

- [UML-Data-Flow](./assets/preplanning.jpg)
- [UML-Data-Flow](./assets/preplanning2.jpg)
- [UML-Data-Flow](./assets/preplanning3.jpg)

## Modules

index.js - renders <App />
app.js - Renders all components

- components
- - App
- - - App.js - App class which renders the entire application as well as contains allmethods and state

- - Header
- - - header/index.js - Header class which handles rendering a simple header

- - Footer
- - - footer/index.js - Footer class which handles rendering a simple footer

- - RESTy
- - - resty/index.js - RESTy class which handles rendering History, ClipBoard, and Form

- - ClipBoard
- - - clipboard/index.js - ClipBoard class which handles rendering the clipboard

- - History
- - - history/index.js - History class which handles rendering the History aside component

- - Form
- - - form/index.js - Form class which handles rendering Headers, Url, TextArea, and Methods

- - Headers
- - - headers/index.js - Headers class which handles rendering the Headers input forms

- - Url
- - - url/index.js - Url class which handles rendering the url form

- - TextArea
- - - textarea/index.js - TextArea class which handles rendering the TextArea form for post and put requests

- - Methods
- - - methods/index.js - methods class which handles rendering a list of Method buttons for API requests

- - Method
- - - method/index.js - Method class which handles rendering the Method component

### Setup

    "@babel/core": "7.4.3",
    "@svgr/webpack": "4.1.0",
    "@typescript-eslint/eslint-plugin": "1.6.0",
    "@typescript-eslint/parser": "1.6.0",
    "babel-eslint": "10.0.1",
    "babel-jest": "24.7.1",
    "babel-loader": "8.0.5",
    "babel-plugin-named-asset-import": "^0.3.2",
    "babel-preset-react-app": "^8.0.0",
    "case-sensitive-paths-webpack-plugin": "2.2.0",
    "css-loader": "2.1.1",
    "dotenv": "6.2.0",
    "dotenv-expand": "4.2.0",
    "eslint": "^5.16.0",
    "eslint-config-react-app": "^4.0.0",
    "eslint-loader": "2.1.2",
    "eslint-plugin-flowtype": "2.50.1",
    "eslint-plugin-import": "2.16.0",
    "eslint-plugin-jsx-a11y": "6.2.1",
    "eslint-plugin-react": "7.12.4",
    "eslint-plugin-react-hooks": "^1.5.0",
    "file-loader": "3.0.1",
    "fs-extra": "7.0.1",
    "html-webpack-plugin": "4.0.0-beta.5",
    "identity-obj-proxy": "3.0.0",
    "is-wsl": "^1.1.0",
    "jest": "24.7.1",
    "jest-environment-jsdom-fourteen": "0.1.0",
    "jest-resolve": "24.7.1",
    "jest-watch-typeahead": "0.3.0",
    "md5": "2.2.1",
    "mini-css-extract-plugin": "0.5.0",
    "optimize-css-assets-webpack-plugin": "5.0.1",
    "pnp-webpack-plugin": "1.2.1",
    "postcss-flexbugs-fixes": "4.1.0",
    "postcss-loader": "3.0.0",
    "postcss-normalize": "7.0.1",
    "postcss-preset-env": "6.6.0",
    "postcss-safe-parser": "4.0.1",
    "react": "16.8.6",
    "react-app-polyfill": "^1.0.0",
    "react-dev-utils": "^9.0.0",
    "react-dom": "16.8.6",
    "react-json-view": "latest",
    "react-jsonschema-form": "1.5.0",
    "react-redux": "7.0.3",
    "react-router-dom": "5.0.0",
    "redux": "4.0.1",
    "redux-devtools-extension": "^2.13.8",
    "redux-thunk": "^2.3.0",
    "resolve": "1.10.0",
    "sass-loader": "7.1.0",
    "semver": "6.0.0",
    "style-loader": "0.23.1",
    "superagent": "latest",
    "terser-webpack-plugin": "1.2.3",
    "url-loader": "1.1.2",
    "webpack": "4.29.6",
    "webpack-dev-server": "3.2.1",
    "webpack-manifest-plugin": "2.0.4",
    "workbox-webpack-plugin": "4.2.0"

#### `.env` requirements

N/A

#### Running the app

- `npm run start`

#### Tests

- `npm test`
