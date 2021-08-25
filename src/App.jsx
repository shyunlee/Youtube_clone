import React, {useState, useEffect} from 'react';
import './app.css';
import VideoList from './components/video_list/VideoList';
import { URI, apiKey } from './index'
// import data from './data'

const App = () => {
  const [videos, setVideos] = useState(data.items)

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`${URI}/videos?part=snippet&chart=mostPopular&maxResults=25&key=${apiKey}`, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[videos])

  return (
    <VideoList videos={videos}/>
  )
}

export default App;
