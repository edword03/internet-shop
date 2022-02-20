import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './Components/App';
import { Provider } from 'react-redux';
import { store } from './services/store';
import './style.css';
import { fetchingData } from './api';

let DEALERS: Array<string> = [];
fetchingData<Array<string>>('https://murmuring-tor-81614.herokuapp.com/api/dealers/').then(
  data => (DEALERS = data),
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App dealers={DEALERS} />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
