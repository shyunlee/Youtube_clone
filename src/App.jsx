import React, { useState, useEffect } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list/VideoList";
import SearchHeader from "./components/search_header/SearchHeader";
import VideoDetail from './components/video_detail/VideoDetail';
import data from "./data";

const App = ({ youtube }) => {
  const [videos, setVideos] = useState(data.items);
  const [selectedVideo, setSelectedVideo] = useState(null)

  // useEffect(() => {
  //   youtube
  //     .mostPopular() //
  //     .then(setVideos);
  // }, []);

  const onSearch = (query) => {
    youtube
      .search(query) //
      .then(videos => {
        setVideos(videos)
        setSelectedVideo(null)
      }
        );
  };

  const selectVideo = (video) => {
    setSelectedVideo(video)
  }

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={onSearch} />
      <section className={styles.contents}>
        {selectedVideo && 
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo}/>
          </div>
        }
        <div className={styles.list}>
          <VideoList videos={videos} videoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'}/>
        </div>
      </section>
    </div>
  );
};

export default App;
