import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Youtube from './service/youtube';
import axios from 'axios'

const httpClient = axios.create({
  baseURL:process.env.REACT_APP_BASE_URL,
  params:{
    key: process.env.REACT_APP_YOUTUBE_API_KEY
  }
})
const youtube = new Youtube(httpClient)

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube}/>
  </React.StrictMode>,
  document.getElementById('root')
);