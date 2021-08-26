import React from 'react';
import VideoItem from '../video_item/VideoItem';
import styles from './video_list.module.css'


const VideoList = ({videos, videoClick, display}) => {
  return (
    <ul className={styles.videos}>
      {videos.map(video => <VideoItem key={video.id} video={video} videoClick={videoClick} display={display}/>)}
    </ul>
  );
};

export default VideoList;