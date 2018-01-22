import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import App from './components/App';
import workDay from './reducers/workDay';

ReactDOM.render(
  <Provider store={createStore(workDay, applyMiddleware(thunk, logger))}>
    <App />
  </Provider>,
  document.getElementById('root')
);
