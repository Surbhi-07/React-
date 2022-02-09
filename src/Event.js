import React from 'react';

export default function Event() {
  const shoot = () => {
   document.write("hii!!");
  }

  return (
      <div>
          <h1>
              hello!!!
          </h1>
    <button onClick={shoot}>Take the shot!</button>
    </div>

  );
}


