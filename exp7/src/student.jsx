import React from "react";

function Student({ name, course, marks }) {
  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {name}</p>
      <p>Course: {course}</p>
      <p>Marks: {marks}</p>
      <hr />
    </div>
  );
}

export default Student;