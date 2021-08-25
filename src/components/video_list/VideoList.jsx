import React from 'react';
import VideoItem from '../video_item/VideoItem';
import styles from './video_list.module.css'


const VideoList = ({videos}) => {
  return (
    <ul className={styles.videos}>
      {videos.map(video => <VideoItem key={video.id} video={video}/>)}
    </ul>
  );
};

export default VideoList;