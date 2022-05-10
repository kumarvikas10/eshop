import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import combineReducers from './reducer';

const logger = ({dispatch, getState}) => (next) => (action) => {
  if (typeof action !== 'function'){
      console.log('ACTION_TYPE=', action.type);
  }
  next(action);
}

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
const store = createStore(combineReducers, applyMiddleware(logger, thunk));

console.log('store', store);

root.render(
    <Provider store={store}>
        <App store={store} />
    </Provider>
);
