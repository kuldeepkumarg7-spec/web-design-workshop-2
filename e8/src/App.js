import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="card">
        <h2>React Counter Application</h2>
        <h1 className="count-display">{count}</h1>
        <div className="button-group">
          <button onClick={() => setCount(count + 1)}>Increment (+)</button>
          <button onClick={() => setCount(count - 1)}>Decrement (-)</button>
        </div>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;