import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video }) => {
  const {id, snippet} = video
  return (
    <div className={styles.detail_container}>
      <iframe
        className={styles.frame}
        title="youtube video player"
        type="text/html"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h2>{snippet.title}</h2>
      <h3>{snippet.channelTitle}</h3>
      <pre className={styles.description}>{snippet.description}</pre>
    </div>
)};

export default VideoDetail;
