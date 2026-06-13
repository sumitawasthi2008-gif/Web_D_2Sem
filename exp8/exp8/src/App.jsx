import React from "react";
import Counter from "./Counter";
import "./App.css";
function App() {
  return (
    <div>
      <Counter />
      <div className="student-info">
        <p><strong>Name:</strong> Sumit Awasthi</p>
        <p><strong>Roll No:</strong> 2503201001195</p>
        <p><strong>Class:</strong> CSE-26</p>
      </div>
    </div>
  );
}
export default App;