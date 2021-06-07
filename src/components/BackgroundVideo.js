import React from 'react';

const video = 'https://www.youtube.com/embed/1QD0FeZyDtQ';

function BackgroundVideo() {
	return (
		<div className="flex flex row h-screen overflow-hidden items-center justify-center bg-black-50 absolute z-0">
      <video autoPlay loop muted className="min-h-screen min-w-max">
        <source src={ video } type="video/mp4" />
      </video>   
    </div>
	);
}

export default BackgroundVideo;