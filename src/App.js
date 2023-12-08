import React, { useState } from 'react';
import './App.css';

export default function Count() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="App">
      <h1>You clicked me {count} times</h1>
      <button onClick={handleClick}>click</button>
    </div>
  );
}