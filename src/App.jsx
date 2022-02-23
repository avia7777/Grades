import { useEffect } from 'react';
import './App.css';
import Course from './Components/Course';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Menu from "./Components/Menu"

function App() {
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
  
  // let exercises = [];
  // useEffect( async() => {
  //   let res = await fetch('./data.json');
  //   // let resJson = await res.json();
  //   console.log(res);
  //   res = await res.json();
  //   console.log(res);
  //   exercises = res[0].exercises;
  // }, [])
  // console.log(exercises);
  
  return (
    <div className="App">
      <h1>Grades</h1>
      <Link to="/">Homepage</Link> |{" "}
      <Menu />
      <Routes>
        <Route path="courses/:courseId" element={<Course />} />
        {/* <Route path="Algorithms" element={<Course title="Algorithms" exercises={exercises1}/>} />
        <Route path="Probability" element={<Course title="Probability" exercises={exercises2} />} /> */}
    </Routes>

      {/* <Course title="Algo" exercises={exercises}/> */}
    </div>
  );
}

export default App;
