import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/bootstrap/scss/bootstrap.scss';
import '../node_modules/bootstrap/js/dist/alert';
import '../node_modules/bootstrap/js/dist/button';
import './scss/index.scss';
import App from '../src/components/App';
import reportWebVitals from './reportWebVitals';
import Jumbo from './components/Jumbo';

ReactDOM.render(
  <React.StrictMode>
    <Jumbo />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
