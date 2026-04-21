import React from "react";
import Student from "./student";

function App() {
  return (
    <div>
      <h1>Student Information</h1>

      <Student name="Rahul" course="B.Tech CSE" marks="85" />
      <Student name="Aman" course="BCA" marks="78" />
      <Student name="Priya" course="B.Tech IT" marks="92" />

    </div>
  );
}

export default App;