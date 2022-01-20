import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import Calculator from './main-content/Calculator';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
