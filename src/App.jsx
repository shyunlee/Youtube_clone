import React, { useState, useEffect } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list/VideoList";
import SearchHeader from "./components/search_header/SearchHeader";
import data from "./data";

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(setVideos);
  }, []);

  const onSearch = (query) => {
    youtube
      .search(query) //
      .then(setVideos);
  };

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={onSearch} />
      <VideoList videos={videos} />
    </div>
  );
};

export default App;
