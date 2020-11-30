import React from 'react';

import './index.css';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as sessionActions from './store/session';
import * as courseActions from './store/course'

import fetch, { restoreCSRF } from './store/csrf';
import configureStore from './store';


const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();

  window.csrfFetch = fetch;
  window.store = store;
  window.sessionActions = sessionActions;
  window.courseActions = courseActions;
}


function Root() {
  return (
    <Provider store={store} >
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode >
    <Root />
  </React.StrictMode>,
  document.getElementById('root'),
);
