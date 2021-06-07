import React from 'react';
import video from './MV.mp4';

function BackgroundVideo() {
  return (
    <div className="flex flex-row h-screen items-center justify-center overflow-hidden absolute z-0">
      <video autoPlay muted loop className="min-h-screen min-w-max">
        <source src={ video } type="video/mp4" />
      </video>
    </div>
	);
}

export default BackgroundVideo;