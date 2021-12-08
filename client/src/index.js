import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

const store = createStore(
  reducers, // todos los reducers
  {}, //estado inicial
)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
   
  </React.StrictMode>,  document.getElementById('root')
);

