import { createStore, combineReducers, applyMiddleware } from 'redux';

import reporter from './middleware/reporter.js';
import Reducer from './reducers.js';

let reducers = combineReducers({
  url: Reducer,
});

export default () => createStore(reducers, applyMiddleware(reporter));