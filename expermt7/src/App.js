import React from 'react';
import './App.css';

function Student(props) {
  return (
    <div className="student-card">
      <h2>{props.name}</h2>
      <p>Course: {props.course}</p>
      <p>Marks: {props.marks}</p>
    </div>
  );
}


function App() {
  return (
    <div className="app-container">
      <h1>Student Information</h1>
      <div className="student-list">
        <Student name="Rahul Sharma" course="Computer Science" marks={85} />
        <Student name="Anita Verma" course="Information Technology" marks={92} />
        <Student name="Rohan Gupta" course="Electronics" marks={78} />
      </div>
    </div>
  );
}


export default App;