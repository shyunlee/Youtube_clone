import React from 'react';
import styles from './video_item.module.css'

const VideoItem = ({video: {snippet}}) => {
  return (
    <li className={styles.container} >
      <div className={styles.video} >
        <img  className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="Video Thumbnail" />
        <div className={styles.meta_data}>
          <p className={styles.title} >{snippet.title}</p>
          <p className={styles.channel} >{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;