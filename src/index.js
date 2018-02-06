import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import App from './components/App';
import workDay from './reducers/workDay';

import { loadState, saveState } from './localStorage';

const persistedState = loadState();

console.log(workDay);
console.log(persistedState);

const store = createStore(workDay, persistedState, applyMiddleware(thunk, logger));

console.log(store.getState());
store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
