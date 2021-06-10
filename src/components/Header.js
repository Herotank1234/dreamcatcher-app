import React from 'react';
import Logo from '../components/Logo';
import Button from '../components/Button';

function Header() {
  const goToHomePage = () => {
    window.location.href = "/";
  }

  const goToMember = () => {
    window.location.href = "/members";
  }


  const goToDiscography = () => {
    window.location.href = "/discography"
  }

  return (
    <div className="flex flex-row fixed justify-center absolute h-20 w-full z-100">
      <div className="flex h-full w-1/3 items-center">
        <Logo />
      </div>
      <div className="h-full w-2/3 flex flex-row items-center justify-end mr-4">
        <Button title="Home" onClick={goToHomePage} />
        <Button title="Members" onClick={goToMember} />
        <Button title="Discography" onClick={goToDiscography} />
      </div>
    </div>
	);
}

export default Header;