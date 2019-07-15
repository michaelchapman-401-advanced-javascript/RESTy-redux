import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import reporter from "./middleware/reporter.js";

import recordsReducer from "./reducers.js";

let reducers = combineReducers({
  records: recordsReducer
});

const store = () =>
  createStore(reducers, composeWithDevTools(applyMiddleware(reporter, thunk)));
export default store;
