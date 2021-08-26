import React, { memo } from 'react';
import styles from './video_item.module.css'

const VideoItem = memo(({video, video: {snippet}, videoClick, display}) => {
  const displayType = display === 'list' ? styles.list : styles.grid
  return (
    <li className={`${styles.container} ${displayType}`} onClick={() => videoClick(video)}>
      <div className={styles.video} >
        <img  className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="Video Thumbnail" />
        <div className={styles.meta_data}>
          <p className={styles.title} >{snippet.title}</p>
          <p className={styles.channel} >{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
})

export default VideoItem;