import React from 'react';

import picPath from "./Background.jpg";

function Background() {
  return (
    <div className="absolute h-full w-full bg-black z-0">
      <img src={picPath} alt="Background" />
    </div>
  );
}

export default Background;