import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export const URI = 'https://youtube.googleapis.com/youtube/v3'
export const apiKey = 'AIzaSyAqAuWE4vDHzTvTO2OBKiBGNpO2XRf0bW4'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);