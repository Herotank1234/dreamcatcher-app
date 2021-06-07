import React from 'react';
import logo from './Logo.png'

function Logo() {
  function goToHomePage() {
    window.location.href = "/";
  }

  return (
    <div onClick={goToHomePage} className="flex h-14 w-20 items-center justify-center border-2 border-white rounded-3xl bg-white ml-2"> 
      <img src={ logo } alt="Logo" className="object-scale-down h-full"/>
    </div>
  );
}

export default Logo;