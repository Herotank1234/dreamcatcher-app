import React from 'react';

function Logo() {
  function goToHomePage() {
    window.location.href = "/";
  }

  return (
    <div className="border-2 ml-4" onClick={goToHomePage}>
      <h2 className="text-center text-white text-2xl font-amatic m-2">Dreamcatcher</h2>
    </div>
  );
}

export default Logo;