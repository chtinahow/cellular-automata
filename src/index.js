import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './pages/App';
import './index.css';

import reducers from './reducers/index.js';
const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
