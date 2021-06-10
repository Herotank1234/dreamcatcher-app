import React from 'react';

function Button({ title, onClick }) {
  return (
    <div className="border-t-2 m-4 w-28 transition ease-out duration-500 transform hover:scale-125" onClick={onClick}>
      <h1 className="text-white text-center font-amatic text-2xl m-2">{ title }</h1>
    </div>
  );
}

export default Button;