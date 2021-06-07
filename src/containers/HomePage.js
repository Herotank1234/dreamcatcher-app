import React from 'react';
import BackgroundVideo from '../components/BackgroundVideo';
import Header from '../components/Header';

function HomePage() {
  return(
    <div className="h-screen w-screen"> 
      <BackgroundVideo/>
      <Header />
      <div className="flex flex-col h-full w-full items-center justify-center"> 
        <h1 className="text-9xl text-white z-50 font-amatic mb-10">Dreamcatcher</h1>
        <h1 className="text-6xl text-white z-50 font-amatic">For all your dreamcatcher needs</h1>
      </div>
    </div>
  );
}

export default HomePage;
