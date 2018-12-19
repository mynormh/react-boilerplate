import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import App from './App';
import DefaultErroBoundary from './DefaultErrorBoundary';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <DefaultErroBoundary>
      <App />
    </DefaultErroBoundary>
  </React.StrictMode>,
  document.getElementById('app')
);
