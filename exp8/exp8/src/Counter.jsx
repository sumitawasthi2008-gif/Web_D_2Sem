import React, { useState } from "react";
import "./Counter.css";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h1>Counter Application</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
      <button onClick={() => setCount(0)}>
        Clear
      </button>
    </div>
  );
}
export default Counter;