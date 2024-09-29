import React from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css';

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="video-container">
      <ReactPlayer url={videoUrl} controls className="video-player" />
    </div>
  );
};

export default VideoPlayer;
