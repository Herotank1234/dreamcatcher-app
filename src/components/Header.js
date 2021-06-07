import React from 'react';
import Logo from '../components/Logo';

function Header() {
  return (
    <div className="flex flex-row fixed justify-center absolute h-20 w-full z-100">
      <div className="flex h-full w-1/3 items-center">
        <Logo />
      </div>
      <div className="h-full w-2/3">
      </div>
    </div>
	);
}

export default Header;