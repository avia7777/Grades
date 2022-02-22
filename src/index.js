import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Course from './Components/Course';

const exercises1 = [
  {index: 1, grade: 92},
  {index: 2, grade: 100},
  {index: 3, grade: 76},
  {index: 4, grade: 85},
  {index: 5, grade: 95}
]
const exercises2 = [
  {index: 1, grade: 60},
  {index: 2, grade: 75},
]

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="Algorithms" element={<Course title="Algorithms" exercises={exercises1}/>} />
        <Route path="Probability" element={<Course title="Probability" exercises={exercises2} />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
